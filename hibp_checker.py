
import hashlib
import requests

def check_pwned_password(password):
    sha1_hash = hashlib.sha1(
        password.encode("utf-8")
    ).hexdigest().upper()

    prefix = sha1_hash[:5]
    suffix = sha1_hash[5:]

    url = f"https://api.pwnedpasswords.com/range/{prefix}"

    response = requests.get(
        url,
        headers={"Add-Padding": "true"},
        timeout=10
    )
    response.raise_for_status()

    for line in response.text.splitlines():
        hash_suffix, count = line.split(":", 1)

        if hash_suffix == suffix:
            return int(count)

    return 0
