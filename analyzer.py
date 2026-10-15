from email import policy
from email.parser import BytesParser
from urllib.parse import urlparse
import re

URL_PATTERN = re.compile(r'https?://[^\s<>"\']+', re.IGNORECASE)
KEYWORDS = ('urgent', 'verify your account', 'password expired', 'click immediately', 'срочно', 'подтвердите аккаунт', 'шұғыл')

def analyze_email(raw: bytes) -> dict:
    message = BytesParser(policy=policy.default).parsebytes(raw)
    sender = str(message.get('From', 'Unknown'))
    subject = str(message.get('Subject', 'No subject'))
    body_parts = []
    attachment_names = []
    for part in message.walk():
        filename = part.get_filename()
        if filename:
            attachment_names.append(filename)
        if part.get_content_type() in ('text/plain', 'text/html') and part.get_content_disposition() != 'attachment':
            try:
                body_parts.append(str(part.get_content()))
            except (UnicodeError, LookupError, ValueError, TypeError):
                pass
    body = '\n'.join(body_parts)
    urls = list(dict.fromkeys(u.rstrip('.,;)>') for u in URL_PATTERN.findall(body)))[:30]
    warnings = []
    score = 0
    if any(word in (subject + ' ' + body).lower() for word in KEYWORDS):
        score += 25
        warnings.append('Urgency or account verification language')
    if any((urlparse(url).hostname or '').startswith('xn--') or '.xn--' in (urlparse(url).hostname or '') for url in urls):
        score += 25
        warnings.append('Internationalized (punycode) domain detected')
    if any(urlparse(url).scheme == 'http' for url in urls):
        score += 15
        warnings.append('Unencrypted HTTP link detected')
    if any(name.lower().endswith(('.exe', '.scr', '.bat', '.cmd', '.js', '.vbs')) for name in attachment_names):
        score += 35
        warnings.append('Potentially dangerous attachment extension')
    return {'sender': sender, 'subject': subject, 'urls': urls, 'attachments': attachment_names[:20], 'score': min(score, 100), 'warnings': warnings, 'status': 'Potential indicators found' if warnings else 'No indicators detected by these basic rules'}
