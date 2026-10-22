const strings = {
 en:{navHome:'Home',navLearn:'Learn',navQuiz:'Quiz',navPassword:'Password',navAnalyze:'Analyze',navThreats:'Live Threats',heroTitle:'Stay smart. Stay secure.',heroDesc:'Learn to recognize phishing, protect your passwords, and analyze suspicious emails.',startAnalyze:'Analyze an email →',startLearn:'Explore lessons',learnTitle:'Learn',learnDesc:'Short cybersecurity lessons.',quizTitle:'Test yourself',quizDesc:'Check your phishing awareness.',passTitle:'Password check',passDesc:'Estimate password strength locally.',analyzerTitle:'Email analyzer',analyzerDesc:'Inspect an EML email for basic warning signs.',learnIntro:'Start with three essential safety habits.',quizIntro:'Answer five questions and see your result.',passIntro:'A basic estimate. Your password stays in your browser; use a made-up example.',passLabel:'Example password',analyzerIntro:'Upload a synthetic .eml sample for basic risk indicators. Do not upload private emails.',uploadLabel:'Choose an .eml file (max 1 MB)',analyzeButton:'Analyze email',resultTitle:'Analysis results',heuristic:'Demonstration score only. A low score does not prove safety.',warningsTitle:'Warnings',submitQuiz:'Check answers',quizResult:'Your score',passWeak:'Weak',passMedium:'Medium',passStrong:'Strong',lessons:[['Spot phishing','Check sender addresses, avoid urgent demands, and verify requests using an official channel.'],['Protect accounts','Use unique long passwords and enable multi-factor authentication.'],['Think before clicking','Do not open unexpected attachments or follow suspicious links.']],questions:[['Which is a phishing warning sign?',['An urgent request for your password','A normal class timetable','A saved bookmark'],0],['What should you do with a suspicious link?',['Click to check','Verify through the official website','Forward it to friends'],1],['Which password is generally stronger?',['12345678','password2026','A long unique passphrase'],2],['What does MFA add?',['Another verification factor','A shorter password','A public profile'],0],['What should you do with an unexpected attachment?',['Open it immediately','Check its origin first','Disable security software'],1]]},
 ru:{navHome:'Главная',navLearn:'Обучение',navQuiz:'Тест',navPassword:'Пароли',navAnalyze:'Анализ',navThreats:'Киберугрозы',heroTitle:'Думай разумно. Будь в безопасности.',heroDesc:'Учись распознавать фишинг, защищать пароли и проверять подозрительные письма.',startAnalyze:'Проверить письмо →',startLearn:'Перейти к урокам',learnTitle:'Обучение',learnDesc:'Короткие уроки по кибербезопасности.',quizTitle:'Проверь себя',quizDesc:'Узнай, как хорошо ты распознаёшь фишинг.',passTitle:'Проверка пароля',passDesc:'Оценка сложности пароля в браузере.',analyzerTitle:'Анализ писем',analyzerDesc:'Проверка EML-писем по базовым признакам.',learnIntro:'Начни с трёх важных правил безопасности.',quizIntro:'Ответь на пять вопросов и узнай результат.',passIntro:'Примерная оценка. Пароль остаётся в браузере; используй выдуманный пример.',passLabel:'Пример пароля',analyzerIntro:'Загрузи учебный .eml файл. Не загружай личные письма.',uploadLabel:'Выбери файл .eml (до 1 МБ)',analyzeButton:'Анализировать',resultTitle:'Результаты анализа',heuristic:'Это учебная оценка. Низкий балл не гарантирует безопасность.',warningsTitle:'Предупреждения',submitQuiz:'Проверить ответы',quizResult:'Ваш результат',passWeak:'Слабый',passMedium:'Средний',passStrong:'Сильный',lessons:[['Распознавай фишинг','Проверяй адрес отправителя, не поддавайся давлению и подтверждай запросы через официальный канал.'],['Защищай аккаунты','Используй длинные уникальные пароли и двухфакторную аутентификацию.'],['Думай перед кликом','Не открывай неожиданные вложения и подозрительные ссылки.']],questions:[['Какой признак может указывать на фишинг?',['Срочная просьба сообщить пароль','Обычное расписание занятий','Сохранённая закладка'],0],['Что делать с подозрительной ссылкой?',['Нажать для проверки','Проверить через официальный сайт','Переслать друзьям'],1],['Какой пароль обычно надёжнее?',['12345678','password2026','Длинная уникальная парольная фраза'],2],['Что добавляет MFA?',['Дополнительный фактор проверки','Более короткий пароль','Публичный профиль'],0],['Что делать с неожиданным вложением?',['Сразу открыть','Сначала проверить источник','Отключить защиту'],1]]},
 kk:{navHome:'Басты бет',navLearn:'Үйрену',navQuiz:'Тест',navPassword:'Құпиясөз',navAnalyze:'Талдау',navThreats:'Киберқауіптер',heroTitle:'Ақылды бол. Қауіпсіз бол.',heroDesc:'Фишингті тануды, құпиясөздерді қорғауды және күмәнді хаттарды тексеруді үйрен.',startAnalyze:'Хатты талдау →',startLearn:'Сабақтарды көру',learnTitle:'Үйрену',learnDesc:'Киберқауіпсіздік бойынша қысқа сабақтар.',quizTitle:'Өзіңді тексер',quizDesc:'Фишинг туралы біліміңді тексер.',passTitle:'Құпиясөзді тексеру',passDesc:'Құпиясөздің күрделілігін браузерде бағалау.',analyzerTitle:'Хаттарды талдау',analyzerDesc:'EML хаттарындағы негізгі қауіп белгілерін тексеру.',learnIntro:'Қауіпсіздіктің үш маңызды ережесінен баста.',quizIntro:'Бес сұраққа жауап беріп, нәтижеңді көр.',passIntro:'Бұл шамамен бағалау. Құпиясөз браузерде қалады; ойдан шығарылған мысалды қолдан.',passLabel:'Құпиясөз мысалы',analyzerIntro:'Оқу мақсатындағы .eml файлын жүкте. Жеке хаттарды жүктеме.',uploadLabel:'.eml файлын таңда (1 МБ дейін)',analyzeButton:'Хатты талдау',resultTitle:'Талдау нәтижелері',heuristic:'Бұл оқу мақсатындағы баға. Төмен ұпай қауіпсіздікті білдірмейді.',warningsTitle:'Ескертулер',submitQuiz:'Жауаптарды тексеру',quizResult:'Нәтижеңіз',passWeak:'Әлсіз',passMedium:'Орташа',passStrong:'Күшті',lessons:[['Фишингті таны','Жіберушінің мекенжайын тексер, асығыс талаптарға ерме және ресми арна арқылы раста.'],['Аккаунттарды қорға','Ұзын әрі бірегей құпиясөздерді және көп факторлы аутентификацияны қолдан.'],['Сілтемені ашпас бұрын ойлан','Күтпеген тіркемелер мен күмәнді сілтемелерді ашпа.']],questions:[['Фишингтің белгісі қайсы?',['Құпиясөзді шұғыл сұрау','Әдеттегі сабақ кестесі','Сақталған бетбелгі'],0],['Күмәнді сілтемемен не істеу керек?',['Тексеру үшін басу','Ресми сайт арқылы тексеру','Достарға жіберу'],1],['Қай құпиясөз сенімдірек?',['12345678','password2026','Ұзын әрі бірегей құпиясөз тіркесі'],2],['MFA не қосады?',['Қосымша растау факторын','Қысқа құпиясөзді','Ашық профильді'],0],['Күтпеген тіркемемен не істеу керек?',['Бірден ашу','Алдымен дереккөзін тексеру','Қорғанысты өшіру'],1]]}
};
let language = localStorage.getItem('cyberaware-lang') || 'en';
if(!strings[language]) language='en';
function applyLanguage(){const t=strings[language];document.documentElement.lang=language;document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(t[k])el.textContent=t[k]});document.querySelectorAll('[data-lang]').forEach(el=>el.classList.toggle('active',el.dataset.lang===language));renderLessons();renderQuiz();updatePassword()}
document.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>{language=el.dataset.lang;localStorage.setItem('cyberaware-lang',language);applyLanguage()}));
function renderLessons(){const target=document.getElementById('lessons');if(!target)return;target.replaceChildren();strings[language].lessons.forEach(([title,desc],i)=>{const card=document.createElement('article');card.className='card';const h=document.createElement('h2');h.textContent=(i+1)+'. '+title;const p=document.createElement('p');p.textContent=desc;card.append(h,p);target.append(card)})}
function renderQuiz(){const target=document.getElementById('quizBox');if(!target)return;target.replaceChildren();const form=document.createElement('form');strings[language].questions.forEach(([question,options],i)=>{const block=document.createElement('div');block.className='question';const h=document.createElement('h3');h.textContent=(i+1)+'. '+question;block.append(h);options.forEach((option,j)=>{const label=document.createElement('label');label.className='option';const input=document.createElement('input');input.type='radio';input.name='q'+i;input.value=String(j);label.append(input,document.createTextNode(option));block.append(label)});form.append(block)});const button=document.createElement('button');button.className='btn';button.type='submit';button.textContent=strings[language].submitQuiz;const output=document.createElement('p');output.setAttribute('aria-live','polite');form.append(button,output);form.addEventListener('submit',e=>{e.preventDefault();let score=0;strings[language].questions.forEach((q,i)=>{const selected=form.querySelector('input[name="q'+i+'"]:checked');if(selected&&Number(selected.value)===q[2])score++});output.textContent=strings[language].quizResult+': '+score+'/5'});target.append(form)}
function updatePassword(){const input=document.getElementById('passwordInput');if(!input)return;const p=input.value;let score=0;if(p.length>=12)score++;if(p.length>=16)score++;if(/[a-z]/.test(p)&&/[A-Z]/.test(p))score++;if(/\d/.test(p)&&/[^\w]/.test(p))score++;const fill=document.getElementById('meterFill');fill.style.width=(score*25)+'%';const t=strings[language];document.getElementById('passwordResult').textContent=p.length?(score<=1?t.passWeak:score<=2?t.passMedium:t.passStrong):''}
const passInput=document.getElementById('passwordInput');if(passInput)passInput.addEventListener('input',updatePassword);
applyLanguage();

/* Have I Been Pwned API integration */

const breachMessages = {
  en: {
    checking: "Checking known data breaches...",
    found: "Warning: This password was found in known data breaches",
    safe: "Not found in known breaches (not a safety guarantee).",
    error: "Breach check is temporarily unavailable."
  },
  ru: {
    checking: "Проверяем известные утечки...",
    found: "Внимание! Этот пароль найден в известных утечках",
    safe: "Не найден в известных утечках (это не гарантия безопасности).",
    error: "Сервис проверки временно недоступен."
  },
  kk: {
    checking: "Белгілі деректердің таралуын тексеру...",
    found: "Ескерту! Бұл құпиясөз белгілі дерек таралуларында табылды",
    safe: "Белгілі таралулардан табылмады (қауіпсіздік кепілдігі емес).",
    error: "Тексеру қызметі уақытша қолжетімсіз."
  }
};

const passwordField = document.getElementById("passwordInput");

if (passwordField) {
  const breachResult = document.createElement("p");
  breachResult.id = "breachResult";
  breachResult.setAttribute("aria-live", "polite");
  breachResult.style.marginTop = "18px";
  breachResult.style.fontWeight = "600";

  const passwordResult = document.getElementById("passwordResult");
  if (passwordResult) {
    passwordResult.insertAdjacentElement("afterend", breachResult);
  } else {
    passwordField.insertAdjacentElement("afterend", breachResult);
  }

  let checkTimer;
  let checkVersion = 0;

  passwordField.addEventListener("input", () => {
    clearTimeout(checkTimer);
    const version = ++checkVersion;
    breachResult.textContent = "";

    if (!passwordField.value) return;

    checkTimer = setTimeout(async () => {
      const password = passwordField.value;
      const messages = breachMessages[language];

      breachResult.textContent = messages.checking;
      breachResult.style.color = "#93c5fd";

      try {
        // Hash locally: the raw password stays in the browser.
        const bytes = new TextEncoder().encode(password);
        const hashBuffer = await crypto.subtle.digest("SHA-1", bytes);

        const hash = Array.from(new Uint8Array(hashBuffer))
          .map(byte => byte.toString(16).padStart(2, "0"))
          .join("")
          .toUpperCase();

        const prefix = hash.slice(0, 5);
        const suffix = hash.slice(5);

        const response = await fetch(
          "/api/pwned-range/" + prefix
        );

        if (!response.ok) throw new Error("API unavailable");

        const data = await response.text();

        if (version !== checkVersion) return;

        let count = 0;

        for (const line of data.split(/\r?\n/)) {
          const [returnedSuffix, occurrences] = line.split(":");

          if (returnedSuffix === suffix) {
            count = Number(occurrences);
            break;
          }
        }

        if (count > 0) {
          breachResult.textContent =
            messages.found + " (" + count.toLocaleString() + " times)";
          breachResult.style.color = "#fb7185";
        } else {
          breachResult.textContent = messages.safe;
          breachResult.style.color = "#4ade80";
        }

      } catch (error) {
        if (version !== checkVersion) return;
        breachResult.textContent = messages.error;
        breachResult.style.color = "#fbbf24";
      }
    }, 700);
  });
}
/* Translations for About CyberAware and Statistics */

Object.assign(strings.en, {
  aboutTitle: "Why CyberAware?",
  aboutDesc1: "A suspicious email, unsafe link, or exposed password can put personal information at risk. CyberAware helps people understand common online threats and learn practical ways to protect themselves.",
  aboutDesc2: "Explore short lessons, test your knowledge, check sample passwords against known breach data, and analyze synthetic emails for warning signs. Our goal is to make cybersecurity education accessible to everyone.",
  aboutFeature1: "Recognize threats",
  aboutFeature2: "Protect accounts",
  aboutFeature3: "Practice safely",
  statsTitle: "Why cybersecurity awareness matters",
  statOne: "Phishing/spoofing complaints reported to the FBI in 2024",
  statTwo: "of breaches involved a human element, according to Verizon's 2025 report",
  statThree: "in reported US cybercrime losses in 2024",
  statsNote: "These figures cover different measures and populations. Sources: FBI IC3 (2024) and Verizon DBIR (2025)."
});

Object.assign(strings.ru, {
  aboutTitle: "Почему CyberAware?",
  aboutDesc1: "Подозрительное письмо, опасная ссылка или украденный пароль могут поставить личную информацию под угрозу. CyberAware помогает людям понимать распространённые киберугрозы и узнавать, как защитить себя в интернете.",
  aboutDesc2: "Изучайте короткие уроки, проверяйте свои знания, узнавайте, встречались ли тестовые пароли в известных утечках данных, и анализируйте учебные электронные письма. Наша цель — сделать обучение кибербезопасности доступным каждому.",
  aboutFeature1: "Распознавайте угрозы",
  aboutFeature2: "Защищайте аккаунты",
  aboutFeature3: "Практикуйте безопасность",
  statsTitle: "Почему знания о кибербезопасности важны",
  statOne: "жалоб на фишинг и подмену отправителя зарегистрировало ФБР в 2024 году",
  statTwo: "утечек были связаны с человеческим фактором, согласно отчёту Verizon за 2025 год",
  statThree: "составили заявленные потери от киберпреступлений в США в 2024 году",
  statsNote: "Эти показатели относятся к разным видам угроз и группам данных. Источники: FBI IC3 (2024) и Verizon DBIR (2025)."
});

Object.assign(strings.kk, {
  aboutTitle: "Неліктен CyberAware?",
  aboutDesc1: "Күмәнді электрондық хат, қауіпті сілтеме немесе ұрланған құпиясөз жеке ақпаратқа қауіп төндіруі мүмкін. CyberAware адамдарға интернеттегі кең таралған қауіптерді түсінуге және өздерін қорғау жолдарын үйренуге көмектеседі.",
  aboutDesc2: "Қысқа сабақтарды оқыңыз, біліміңізді тексеріңіз, үлгі құпиясөздердің белгілі деректер таралуында кездескенін анықтаңыз және оқу мақсатындағы электрондық хаттарды талдаңыз. Біздің мақсатымыз — киберқауіпсіздік білімін баршаға қолжетімді ету.",
  aboutFeature1: "Қауіптерді таныңыз",
  aboutFeature2: "Аккаунттарды қорғаңыз",
  aboutFeature3: "Қауіпсіздік дағдыларын дамытыңыз",
  statsTitle: "Киберқауіпсіздік туралы білім неге маңызды?",
  statOne: "фишинг және жіберушіні қолдан жасау туралы шағым АҚШ ФБР-іне 2024 жылы түсті",
  statTwo: "деректердің бұзылуына адам факторы қатысқан, Verizon компаниясының 2025 жылғы есебіне сәйкес",
  statThree: "АҚШ-та 2024 жылы киберқылмыстан келген мәлімделген шығын көлемі",
  statsNote: "Бұл көрсеткіштер әртүрлі қауіп түрлері мен деректер жиынтықтарына қатысты. Дереккөздер: FBI IC3 (2024) және Verizon DBIR (2025)."
});

/* Update the new sections using the selected language */
applyLanguage();
/* Additional homepage translations */

Object.assign(strings.en, {
  aboutEyebrow: "ABOUT OUR PLATFORM",
  statsEyebrow: "CYBERSECURITY BY THE NUMBERS",
  platformEyebrow: "EXPLORE THE PLATFORM",
  platformHeading: "Everything you need to build safer online habits."
});

Object.assign(strings.ru, {
  aboutEyebrow: "О НАШЕЙ ПЛАТФОРМЕ",
  statsEyebrow: "КИБЕРБЕЗОПАСНОСТЬ В ЦИФРАХ",
  platformEyebrow: "ВОЗМОЖНОСТИ ПЛАТФОРМЫ",
  platformHeading: "Всё необходимое для безопасного поведения в интернете."
});

Object.assign(strings.kk, {
  aboutEyebrow: "БІЗДІҢ ПЛАТФОРМА ТУРАЛЫ",
  statsEyebrow: "КИБЕРҚАУІПСІЗДІК САНДАРМЕН",
  platformEyebrow: "ПЛАТФОРМА МҮМКІНДІКТЕРІ",
  platformHeading: "Интернетте қауіпсіз әрекет етуге қажеттінің бәрі."
});

/* Connect missing translation attributes */

const aboutEyebrow = document.querySelector(
  ".about-cyberaware > .eyebrow"
);
if (aboutEyebrow) {
  aboutEyebrow.dataset.i18n = "aboutEyebrow";
}

const statsEyebrow = document.querySelector(
  ".cyber-stats > .eyebrow"
);
if (statsEyebrow) {
  statsEyebrow.dataset.i18n = "statsEyebrow";
}

const platformEyebrow = document.querySelector(
  ".section-kicker span"
);
if (platformEyebrow) {
  platformEyebrow.dataset.i18n = "platformEyebrow";
}

const platformHeading = document.querySelector(
  ".section-kicker strong"
);
if (platformHeading) {
  platformHeading.dataset.i18n = "platformHeading";
}

applyLanguage();
/* Missing translations for feature descriptions */

Object.assign(strings.en, {
  aboutFeatureDesc1: "Learn to spot phishing and suspicious messages.",
  aboutFeatureDesc2: "Understand password strength and breach exposure.",
  aboutFeatureDesc3: "Build awareness through lessons and quizzes."
});

Object.assign(strings.ru, {
  aboutFeatureDesc1: "Научитесь распознавать фишинг и подозрительные сообщения.",
  aboutFeatureDesc2: "Узнайте, как оценивать надёжность паролей и проверять утечки данных.",
  aboutFeatureDesc3: "Развивайте навыки кибербезопасности с помощью уроков и тестов."
});

Object.assign(strings.kk, {
  aboutFeatureDesc1: "Фишинг пен күмәнді хабарламаларды анықтауды үйреніңіз.",
  aboutFeatureDesc2: "Құпиясөздің сенімділігін бағалауды және деректердің таралу қаупін түсініңіз.",
  aboutFeatureDesc3: "Сабақтар мен тесттер арқылы киберқауіпсіздік дағдыларын дамытыңыз."
});

/* Attach translations to the three descriptions */

document.querySelectorAll(".about-features > div").forEach((card, index) => {
  const description = card.querySelector("p");

  if (description) {
    description.dataset.i18n = "aboutFeatureDesc" + (index + 1);
  }
});

applyLanguage();
/* Complete hero panel translations */

Object.assign(strings.en, {
  heroPanelLabel: "SECURITY AWARENESS",
  heroPanelTitle: "Your digital safety starts here.",
  phishingLabel: "PHISHING DETECTION",
  phishingStatus: "ACTIVE DEMO",
  modulesLabel: "LEARNING MODULES",
  modulesStatus: "03 READY",
  languagesLabel: "LANGUAGE SUPPORT"
});

Object.assign(strings.ru, {
  heroPanelLabel: "КИБЕРБЕЗОПАСНОСТЬ",
  heroPanelTitle: "Твоя цифровая безопасность начинается здесь.",
  phishingLabel: "ОБНАРУЖЕНИЕ ФИШИНГА",
  phishingStatus: "ДЕМО ВЕРСИЯ",
  modulesLabel: "ОБУЧАЮЩИЕ МОДУЛИ",
  modulesStatus: "03 ГОТОВО",
  languagesLabel: "ПОДДЕРЖКА ЯЗЫКОВ"
});

Object.assign(strings.kk, {
  heroPanelLabel: "КИБЕРҚАУІПСІЗДІК",
  heroPanelTitle: "Цифрлық қауіпсіздігіңіз осы жерден басталады.",
  phishingLabel: "ФИШИНГТІ АНЫҚТАУ",
  phishingStatus: "ДЕМО НҰСҚА",
  modulesLabel: "ОҚУ МОДУЛЬДЕРІ",
  modulesStatus: "03 ДАЙЫН",
  languagesLabel: "ТІЛДЕРДІ ҚОЛДАУ"
});

/* Connect translations to the hero panel */

const heroPanelTranslations = [
  [".terminal-label", "heroPanelLabel"],
  [".terminal-title", "heroPanelTitle"],
  [".terminal-row:nth-of-type(1) span", "phishingLabel"]
];

const terminalRows = document.querySelectorAll(".terminal-row");

const panelElements = [
  [document.querySelector(".terminal-label"), "heroPanelLabel"],
  [document.querySelector(".terminal-title"), "heroPanelTitle"],
  [terminalRows[0]?.querySelector("span"), "phishingLabel"],
  [terminalRows[0]?.querySelector("strong"), "phishingStatus"],
  [terminalRows[1]?.querySelector("span"), "modulesLabel"],
  [terminalRows[1]?.querySelector("strong"), "modulesStatus"],
  [terminalRows[2]?.querySelector("span"), "languagesLabel"]
];

panelElements.forEach(([element, key]) => {
  if (element) element.dataset.i18n = key;
});

applyLanguage();
/* Kazakhstan statistics translations */

Object.assign(strings.en, {
  statsEyebrow: "CYBERSECURITY IN KAZAKHSTAN",
  statsTitle: "Cybersecurity in Kazakhstan: The Numbers",
  statOne: "Internet fraud cases recorded in Kazakhstan in 2025",
  statTwo: "Increase in internet fraud cases in Kazakhstan in 2024",
  statThree: "Websites promoting fake investment projects blocked in Kazakhstan since the beginning of 2025, as reported by the agency",
  statsNote: "Sources: Government of Kazakhstan, Prosecutor General's Office, and Financial Monitoring Agency. Figures cover different measures."
});

Object.assign(strings.ru, {
  statsEyebrow: "КИБЕРБЕЗОПАСНОСТЬ В КАЗАХСТАНЕ",
  statsTitle: "Кибербезопасность Казахстана в цифрах",
  statOne: "Случаев интернет-мошенничества зарегистрировано в Казахстане в 2025 году",
  statTwo: "Рост числа интернет-мошенничеств в Казахстане в 2024 году",
  statThree: "Сайтов с фиктивными инвестиционными проектами заблокировано с начала 2025 года на дату сообщения агентства",
  statsNote: "Источники: государственные органы Казахстана, Генеральная прокуратура и Агентство по финансовому мониторингу. Показатели отражают разные виды угроз."
});

Object.assign(strings.kk, {
  statsEyebrow: "ҚАЗАҚСТАНДАҒЫ КИБЕРҚАУІПСІЗДІК",
  statsTitle: "Қазақстандағы киберқауіпсіздік: сандар мен деректер",
  statOne: "2025 жылы Қазақстанда тіркелген интернет-алаяқтық оқиғалары",
  statTwo: "2024 жылы Қазақстандағы интернет-алаяқтық оқиғалары санының өсуі",
  statThree: "2025 жылдың басынан бастап агенттік хабарлаған күнге дейін бұғатталған жалған инвестициялық жобаларды насихаттайтын сайттар",
  statsNote: "Дереккөздер: Қазақстанның мемлекеттік органдары, Бас прокуратура және Қаржылық мониторинг агенттігі. Көрсеткіштер әртүрлі қауіп түрлеріне қатысты."
});

applyLanguage();

/* About Us — translations */

Object.assign(strings.en, {
  teamEyebrow: "MEET THE TEAM",
  teamTitle: "About Us",
  teamIntro: "Meet the people behind CyberAware.",
  adilbekRole: "Development & Project Management",
  adilbekBio: "Adilbek studies cybersecurity, has a background in Business Management in Dubai, and works in SMM. He enjoys communication, technology and creative projects.",
  bekmukhanRole: "Documentation & Research",
  bekmukhanBio: "Bekmukhan enjoys basketball, studies game design, loves travelling and regularly goes to the gym."
});

Object.assign(strings.ru, {
  teamEyebrow: "НАША КОМАНДА",
  teamTitle: "О нас",
  teamIntro: "Познакомьтесь с командой CyberAware.",
  adilbekRole: "Разработка и управление проектом",
  adilbekBio: "Адильбек изучает кибербезопасность, ранее учился на бизнес-менеджменте в Дубае и занимается SMM. Любит общение, технологии и творческие проекты.",
  bekmukhanRole: "Документация и исследования",
  bekmukhanBio: "Бекмухан увлекается баскетболом, изучает гейм-дизайн, любит путешествовать и регулярно посещает спортзал."
});

Object.assign(strings.kk, {
  teamEyebrow: "БІЗДІҢ КОМАНДА",
  teamTitle: "Біз туралы",
  teamIntro: "CyberAware жобасының командасымен танысыңыз.",
  adilbekRole: "Әзірлеу және жобаны басқару",
  adilbekBio: "Әділбек киберқауіпсіздікті оқиды, бұрын Дубайда бизнес-менеджмент саласында білім алған және SMM саласында жұмыс істейді. Қарым-қатынасты, технологияларды және шығармашылық жобаларды ұнатады.",
  bekmukhanRole: "Құжаттама және зерттеу",
  bekmukhanBio: "Бекмұхан баскетболмен айналысады, ойын дизайнын үйренеді, саяхаттағанды ұнатады және спортзалға тұрақты барады."
});

applyLanguage();

Object.assign(strings.en, {
  adilbekName: "Adilbek",
  bekmukhanName: "Bekmukhan"
});

Object.assign(strings.ru, {
  adilbekName: "Адильбек",
  bekmukhanName: "Бекмухан"
});

Object.assign(strings.kk, {
  adilbekName: "Әділбек",
  bekmukhanName: "Бекмұхан"
});

