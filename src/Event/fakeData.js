export const path = [
  {
    id: 1,
    path: "/",
    component: "home",
  },
  {
    id: 2,
    path: "/design",
    component: "design",
    linkList: [{ id: 1, item: "طرح ها", link: "/design" }],
  },
  {
    id: 3,
    path: "/university",
    component: "university",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "دانشگاهی", link: "/university" },
    ],
  },
  {
    id: 4,
    path: "/senior",
    component: "senior",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "دانشگاهی", link: "/university" },
      { id: 2, item: "ارشد", link: "/senior" },
    ],
  },
  {
    id: 5,
    path: "/login",
    component: "login",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "مسیر ثبت نام", link: "/login" },
    ],
  },
  {
    id: 6,
    path: "/additions",
    component: "additions",
    linkList: [{ id: 1, item: "ارزش های پیشنهادی", link: "/additions" }],
  },
  {
    id: 7,
    path: "/glory",
    component: "glory",
    linkList: [{ id: 1, item: "افتخارات ", link: "/glory" }],
  },
  {
    id: 8,
    path: "/achievements",
    component: "achievements",
    linkList: [
      { id: 1, item: "افتخارات ", link: "/glory" },
      { id: 2, item: "دستاوردها", link: "/achievements" },
    ],
  },
  {
    id: 8,
    path: "/mastersGraduates",
    component: "mastersGraduates",
    linkList: [
      { id: 1, item: "افتخارات ", link: "/glory" },
      { id: 2, item: "دستاوردها", link: "/achievements" },
      { id: 3, item: "فارغ التحصیلان", link: "/mastersGraduates" },
    ],
  },
  {
    id: 9,
    path: "/dashboard/support",
    component: "support",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "داشبورد", link: "#" },
      { id: 3, item: "فارغ التحصیلان", link: "/dashboard/support" },
    ],
  },
  {
    id: 9,
    path: "/consent",
    component: "consent",
    linkList: [
      { id: 1, item: "افتخارات", link: "/glory" },
      { id: 2, item: "رضایت مندی", link: "/consent" },
    ],
  },
  {
    id: 10,
    path: "/masters",
    component: "masters",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 1, item: "دانشگاهی", link: "/university" },
      { id: 2, item: "کارشناسی", link: "/masters" },
    ],
  },
  {
    id: 11,
    path: "/ba",
    component: "ba",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "BA", link: "/ba" },
    ],
  },
  {
    id: 12,
    path: "/phd",
    component: "phd",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "دانشگاهی", link: "/university" },
      { id: 3, item: "دکتری", link: "/phd" },
    ],
  },
  {
    id: 13,
    path: "/PHDmasters",
    component: "PHDmasters",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "دانشگاهی", link: "/university" },
      { id: 3, item: "ارشد و دکتری ویژه", link: "/PHDmasters" },
    ],
  },
  {
    id: 13,
    path: "/professionalConsultation",
    component: "council",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "دانشگاهی", link: "/university" },
      { id: 3, item: "مشاوره تخصصی", link: "/council" },
    ],
  },
  {
    id: 14,
    path: "/baPlus",
    component: "baPlus",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "BA", link: "/ba" },
      { id: 3, item: "BA پلاس", link: "/baPlus" },
    ],
  },
  {
    id: 15,
    path: "/baProfessional",
    component: "baProfessional",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "BA", link: "/ba" },
      { id: 3, item: "BA تخصصی", link: "/baProfessional" },
    ],
  },
  {
    id: 16,
    path: "/metacode",
    component: "metacode",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "متاکد", link: "/metacode" },
    ],
  },
  {
    id: 17,
    path: "/bootcamp",
    component: "bootcamp",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "متاکد", link: "/metacode" },
      { id: 3, item: "بوت کمپ و اشتغال", link: "/bootcamp" },
    ],
  },
  {
    id: 18,
    path: "/Certifications",
    component: "Certifications",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "متاکد", link: "/metacode" },
      { id: 3, item: "اخذ مدرک و مجوزها", link: "/Certifications" },
    ],
  },
  {
    id: 19,
    path: "/CurrencyIncome",
    component: "CurrencyIncome",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "متاکد", link: "/metacode" },
      { id: 3, item: "کسب درآمد ارزی", link: "/CurrencyIncome" },
    ],
  },
  {
    id: 20,
    path: "/CompleteAcademicDocuments",
    component: "CompleteAcademicDocuments",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "متاکد", link: "/metacode" },
      {
        id: 3,
        item: "تکمیل مدارک دانشگاهی",
        link: "/CompleteAcademicDocuments",
      },
    ],
  },
  {
    id: 21,
    path: "/FastTrackPlan",
    component: "FastTrackPlan",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "طرح شتاب", link: "/FastTrackPlan" },
    ],
  },
  {
    id: 22,
    path: "/CollaborationSpace",
    component: "CollaborationSpace",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "طرح شتاب", link: "/FastTrackPlan" },
      { id: 3, item: "فضای همکاری", link: "/CollaborationSpace" },
    ],
  },
  {
    id: 23,
    path: "/CollaborationSpace",
    component: "CollaborationSpace",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "طرح شتاب", link: "/FastTrackPlan" },
      { id: 3, item: "فضای همکاری", link: "/CollaborationSpace" },
    ],
  },
  {
    id: 24,
    path: "/ExecutionProcess",
    component: "ExecutionProcess",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "طرح شتاب", link: "/FastTrackPlan" },
      { id: 3, item: "فرایند اجرایی", link: "/ExecutionProcess" },
    ],
  },
  {
    id: 25,
    path: "/languageLearning",
    component: "languageLearning",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "زبان", link: "/languageLearning" },
    ],
  },
  {
    id: 26,
    path: "/IELTS",
    component: "IELTS",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "زبان", link: "/languageLearning" },
      { id: 3, item: "IELTS", link: "/IELTS" },
    ],
  },
  {
    id: 27,
    path: "/DoctorateLanguage",
    component: "DoctorateLanguage",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "زبان", link: "/languageLearning" },
      { id: 3, item: "زبان جامع دکتری", link: "/DoctorateLanguage" },
    ],
  },
  {
    id: 28,
    path: "/OrganizationalLanguageBA",
    component: "OrganizationalLanguageBA",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "زبان", link: "/languageLearning" },
      { id: 3, item: "زبان تخصصی BA", link: "/OrganizationalLanguageBA" },
    ],
  },
  {
    id: 29,
    path: "/OrganizationalLanguage",
    component: "OrganizationalLanguage",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "زبان", link: "/languageLearning" },
      { id: 3, item: "زبان تخصصی", link: "/OrganizationalLanguage" },
    ],
  },
  {
    id: 30,
    path: "/fag",
    component: "fag",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 3, item: "سوالات متداول", link: "/fag" },
    ],
  },
  {
    id: 31,
    path: "/club",
    component: "club",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 3, item: "باشگاه همراهی", link: "/club" },
    ],
  },
  {
    id: 32,
    path: "/Students",
    component: "Students",
    linkList: [
      { id: 1, item: "افتخارات", link: "/glory" },
      { id: 3, item: "دستاورد ها", link: "/achievements" },
      { id: 3, item: "دانشجویان", link: "/Students" },
    ],
  },
  {
    id: 33,
    path: "/satisfaction",
    component: "satisfaction",
    linkList: [
      { id: 1, item: "افتخارات", link: "/glory" },
      { id: 2, item: "رضایتمندی", link: "/satisfaction" },
    ],
  },
  {
    id: 34,
    path: "/about",
    component: "about",
    linkList: [{ id: 1, item: "درباره ما", link: "/about" }],
  },
  {
    id: 35,
    path: "/permissions",
    component: "permissions",
    linkList: [
      { id: 1, item: "درباره ما", link: "/about" },
      { id: 2, item: "مجوزها", link: "/permissions" },
    ],
  },
  {
    id: 36,
    path: "/Cooperation",
    component: "Cooperation",
    linkList: [
      { id: 1, item: "درباره ما", link: "/about" },
      { id: 2, item: "همکاری­ها و سوابق", link: "/Cooperation" },
    ],
  },
  {
    id: 36,
    path: "/Chart",
    component: "Chart",
    linkList: [
      { id: 1, item: "درباره ما", link: "/about" },
      { id: 2, item: "چارت سازمانی", link: "/Chart" },
    ],
  },
  {
    id: 37,
    path: "/Contactus",
    component: "Contactus",
    linkList: [{ id: 1, item: "ارتباط با ما", link: "/Contactus" }],
  },
  {
    id: 38,
    path: "/Participation",
    component: "Participation",
    linkList: [{ id: 1, item: "مشارکت و همکاری", link: "/Participation" }],
  },
  {
    id: 39,
    path: "/Partnership",
    component: "Partnership",
    linkList: [
      { id: 1, item: "مشارکت و همکاری", link: "/Participation" },
      { id: 2, item: "طرح مشارکت", link: "/Partnership" },
    ],
  },
  {
    id: 40,
    path: "/International",
    component: "International",
    linkList: [
      { id: 1, item: "مشارکت و همکاری", link: "/Participation" },
      { id: 2, item: "آموزش از راه دور بین­ الملل", link: "/International" },
    ],
  },
  {
    id: 41,
    path: "/professionalConsultationBa",
    component: "councilBa",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "BA", link: "/ba" },
      { id: 3, item: "مشاوره تخصصی", link: "/council" },
    ],
  },
  {
    id: 42,
    path: "/professionalConsultationMetacode",
    component: "councilMetacode",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "متا کد", link: "/metacode" },
      { id: 3, item: "مشاوره تخصصی", link: "/council" },
    ],
  },
  {
    id: 43,
    path: "/professionalConsultationFastTrackPlan",
    component: "councilFastTrackPlan",
    linkList: [
      { id: 1, item: "طرح ها", link: "/design" },
      { id: 2, item: "طرح شتاب", link: "/FastTrackPlan" },
      { id: 3, item: "مشاوره تخصصی", link: "/council" },
    ],
  },
  {
    id: 44,
    path: "/wayOfSuccess",
    component: "wayOfSuccess",
    linkList: [{ id: 1, item: "مسیر موفقیت", link: "/wayOfSuccess" }],
  },
];

export const homeMain = [
  {
    id: 1,
    Title: "فرهیخته گرامی : ",
    content:
      " با افتخار از شما دعوت می کنیم برای آشنایی بیشتر با مجموعه همراهان بخش های زیر را ملاحظه بفرمایید",
  },
];
export const designMain = [
  {
    id: 1,
    content:
      "ما در همراهان، جهت بهرهمندی افراد از بهترین و منطبق ترین برنامه ارتقای دانش و رزومه به صورت کاملاً شخصی سازی شده و برحسب نیاز هر فرد برنامه ها و طرح های مختلفی را تدارک دیده ایم. برای آشنایی با هر کدام از طرح های همراهان، کافی است وارد بخش مربوطه شوید تا در جریان اهم اطلاعات و شرایط آن قرار بگیرید.",
  },
];
export const FastTrackPlanMain = [
  {
    id: 1,
    content:
      "طرح شتاب درواقع شناسایی و توانمندسازی ایده های برتر و هدف آن، شناسایی و کاربردی کردن آنها است. همراهان با هدف ایجاد فرصت‌های حمایت از ایده‌های شجاعانه افراد و شرکت‌ها خدمات مربوط به طرح شتاب را راه اندازی کرده است. در این طرح به توسعه فرهنگ کارآفرینی و ایجاد فرصت‌های یادگیری کارآفرینی پرداخته می شود تا در جهت تحول و پیشرفت اقتصادی مشترک حرکت کنیم. مهم نیست دارای چه مدرک تحصیلی هستید، اما برای عقد قرارداد با دانشگاه باید رزومه شخصی یا شرکتی خود را تکمیل کنید. طرح شما براساس فرم تکمیلی ارسال و غربال گری های لازم براساس ایده ها و نیازهای سایت نان وزارت علوم و 14 هزار محصولی که در وزارت صنایع و معادن، نیازمند کمک و همراهی در فروش هستند و نیز براساس رشته های پرترافیک مهارتی، دسته بندی و اجرا می شود.",
  },
];
export const metacodeMain = [
  {
    id: 1,
    content: "مدرسه تخصصی آنلاین کسب درآمد (متاکد)",
  },
];
export const languageLearningMain = [
  {
    id: 1,
    content:
      "یادگیری زبان انگلیسی، به عنوان یک زبان بین المللی که می تواند زمینه ساز ورود به عرصه های بین المللی چه در شغل و تجارت و چه ادامه تحصیل و زندگی در خارج از کشور باشد، از الزامات روزگار حاضر است. دانستن زبان انگلیسی نه فقط برای زندگی و کار در خارج از ایران، بلکه برای پیشرفت و ارتقای سطح علمی و شغلی در داخل ایران هم تأثیر زیادی دارد. ",
  },
];
export const languageLearningMain2 = [
  {
    id: 1,
    content:
      "در دنیای آموزش در عصر حاضر دانشجوی زبان به کاربر (User) و مدرس به تسهیل گر (facilitator) بدل شده است. استاندارد آموزش نیز در کل دنیا طبق CEFR شناخته و اجرا می شود. ما در همراهان اما با استفاده کاربردی از علم نوین و روانشناسی آموزش، خدماتِ آموزش زبان را در قالب دوره های زیر ارائه می کنیم.",
  },
];
export const metacodeMain2 = [
  {
    id: 1,
    content:
      "متاکد طرح مهارتی ویژه ای است که همراهان برای متخصصین و افراد دارای سابقه مهارتی به اجرا درآورده است. افرادی که دارای مهارت و تخصص هستند و یا از مهارتشان کسب درآمد می کنند، از این طریق می توانند با ارتقای حرفه ای خود از طریق دریافت مدارک مهارتی معادل و یا مجوزها از سویی و توسعه کسب و کار و بهبود برند شخصی از سوی دیگر به سرعت به موقعیت ها و فرصت های کاری جدیدی دست یایند.",
  },
];
export const metacodeMain3 = [
  {
    id: 1,
    content:
      "لازم به ذکر است که در طرح متاکد متقاضی حتماً باید حداقل ۲ طرح از ۴ طرح ارائه شده را به دل خواه و متناسب با اهداف و برنامه های خود انتخاب کند.",
  },
];
export const baMain = [
  {
    id: 1,
    content:
      "BA مخفف Business Administration (مدیریت و اجرای کسب و کار) شامل 4 دوره تخصصی BBA, MBA, DBA, POST DBAمی شود. هر کدام از این 3 دوره یک مقطع از تحصیلات عالی است که در حوزه مدیریت کسب و کار در سطح جهان طراحی و به متقاضیان ارائه می شود. در این دوره ها به فرد مهارت ها و دانش های لازم برای مدیریت و رهبری در محیط های تجاری و سازمانی را آموزش می دهند. فارغ التحصیلان رشته های مختلف BA در سطح جهان به عنوان متخصصین کسب و کار شناخته می شوند و در عرصه های مشاوره مدیریت، اداره و توسعه کسب و کار شخصی، راه اندازی کسب و کار و موقعیت های شغلی حساس مدیریتی مشغول به فعالیت می شوند.",
  },
];
export const universityMain = [
  {
    id: 1,
    content:
      "ما در همراهان با تمرکز بر ارائه بهترین روش ممکن برای ارتقای مدارک دانشگاهی متقاضیان با آسان ترین و کوتاه ترین روش های ممکن به صورت قانونی و موردتأیید وزارت علوم در خدمت متقاضیان عزیز هستیم. ",
  },
];
export const mastersMain = [
  {
    id: 1,
    content:
      "تحصیل در مقطع کارشناسی ارشد از طریق قبولی در آزمون سراسری (کنکور) پیچیدگی هایی دارد که بیش از 80% شاغلین را از تحصیل در مقطع کارشناسی ارشد از طریق کنکور منصرف می کند. همچنین طبق گزارش وزارت علوم بیش از 60% دانشجویان مقطع کارشناسی ارشد در کل کشور به دلیل مشکلات مختلف از جمله تداخل زمانی ساعات کاری و کلاس ها، عدم اتمام واحدهای نظری در بازه زمانی قانونی سنوات و …  از به پایان رساندن تحصیلات خود بازمی مانند. در صورتی که اخذ مدرک کارشناسی ارشد فارغ از مزایای جایگاهی در حرفه و اجتماع مستقیماً در میزان درآمد افراد نیز دخالت دارد و در صورت عدم دریافت این مدرک فرد با وجود همه تجربیات و توانمندی هایی که دارد در سطح مقطع کارشناسی مورد قضاوت قرار می گیرد.",
  },
];
export const PhdMain = [
  {
    id: 1,
    content:
      "تصور این که 5 تا 7 سال برای تکمیل تحصیلات در مقطع دکترا صرف شود، گاهی اوقات بسیار بیشتر از آن چیزی است که اکثر مردم مایل به انجام آن هستند و چنانچه این زمان همراه با ترک محل کار و نداشتن درآمد برای افراد باشد، باعث سخت ترشدن این پروسه نیز می شود. ازطرفی، قبولی در آزمون و ارائه حداقل ۲ کتاب علمی، ۲ مقاله علمی پژوهشی داخلی یا بین المللی و مدرک رسمی زبان که طبق جدول استاندارد سازمان سنجش برای دریافت مدرک دکتری الزامی است، افراد زیادی را از تصمیم برای ادامه تحصیل در این مقطع دانشگاهی منصرف می کند. ما در همراهان از طریق تجربه سال ها فعالیت در حوزه آموزش عالی، راه حل های به مراتب آسان تری را برای تحصیل در این مقطع دانشگاهی سرنوشت ساز، طراحی و اجرا می کنیم. در این طرح که کاملاً به صورت آنلاین برگزار می شود، دانشجویان بدون آزمون ورودی و فقط با ارائه مدارک مربوطه، تحصیل خود را آغاز کرده و در طی 5/3 سال فارغ التحصیل خواهند شد. در این برنامه چاپ کتاب، نگارش مقالات علمی، ارائه پروپوزال پایان نامه و دریافت مدرک زبان نیز از طریق برخورداری از سرویس پشتیبانی علمی و آموزشی برای متقاضیان قابل انجام است.",
  },
];
export const PHDmastersMain = [
  {
    id: 1,
    content:
      "با توجه به شتاب تغییرات و مشکل زمان آزاد برای افراد متخصصی که شاغل هستند، مجموعه همراهان برنامه فوق العاده ای از تحصیلات تکمیلی در مقطع ارشد و دکتری در چند رشته پراستقبال تدوین و اجرایی کرده است که از این طریق متقاضی می تواند طی یک دوره 1.5 ساله در مقطع کارشناسی ارشد و یا یک دوره ۱ ساله در مقطع دکتری فارغ التحصیل شود.",
  },
];
export const permissionsMain = [
  {
    id: 1,
    content:
      "ما در همراهان مفتخریم که در راستای توسعه دانش تخصصی و افزایش کیفیت نیروی متخصص در کشور، با همراهی و تفاهم با دانشگاه پیام نور گام مهمی در این خصوص برداریم.",
  },
];
export const CooperationMain = [
  {
    id: 1,
    content:
      "ما در همراهان مفتخریم که در راستای توسعه دانش تخصصی و افزایش کیفیت نیروی متخصص در کشور، با همراهی و تفاهم با دانشگاه پیام نور گام مهمی در این خصوص برداریم.",
  },
];
export const ChartMain = [
  {
    id: 1,
    content:
      "ما با افتخار برای ارائه بهترین و دقیق­ترین خدمات به متقاضیان عزیز، بهترین افراد را در بخش­های مختلف سازمان گلچین کرده­ایم تا بتوانیم ازطریق سرمایه انسانی خلق ارزش بی­بدیلی برای جامعه و علم­آموزان عزیز این سرزمین داشته باشیم. سرمایه انسانی در همراهان گوهر بی­مثالی است که با همکاری و استمرار در خلق ارزش، درخشش بی­مانندی در آسمان آموزش کشور پدید آورده است.",
  },
];
export const CooperationMain2 = [
  {
    id: 1,
    content:
      "در این بخش توجه شما را به بخش کوچکی از این همکاری­ها جلب می­کنیم.",
  },
];
export const ConsultationMain = [
  {
    id: 1,
    content:
      "جهت دریافت مشاوره تخصصی یا هرگونه سوال در زمینه خدمات همراهان، تلفن ها و شبکه های اجتماعی ما به صورت رایگان پاسخگوی شما متقاضی عزیز خواهند بود.",
  },
];
export const PhdMain2 = [
  {
    id: 1,
    content:
      "مدرک ارائه شده در این دوره ها، هیچ تفاوتی با سایر مدارک دکتری دانشگاه های سطح کشور ندارد و موردتأیید وزارت علوم، تحقیقات و فناوری است. ضمن آن که علاوه بر اعتبار داخلی مدرک دکتری، مدرک اخذ شده توسط متقاضی قابلیت ترجمه و ارائه به تمام مراکز بین المللی را نیز داراست.",
  },
];
export const mastersMain2 = [
  {
    id: 1,
    content:
      "ما در همراهان با برنامه های مختلف تحصیلی در مقطع کارشناسی ارشد در رشته های مختلف و پراستقبال در این مقطع دانشگاهی در تلاشیم تا بهترین و ساده ترین روش تحصیل در مقطع ارشد به صورت قانونی و قطعی را برای متقاضیان به ارمغان آوریم.",
  },
];
export const seniorMain = [
  {
    id: 1,
    content:
      "تحصیل در مقطع کارشناسی به عنوان گام اول در مسیر پیشرفت فردی و شغلی شناخته می شود. برنامه های طراحی شده برای متقاضیان این مقطع تحصیلی در همراهان برای ارتقای مدرک تحصیلی افراد دارای دیپلم یا کاردانی به سطح کارشناسی (لیسانس) به صورتی است که تمام محدودیت ها و شرایط افراد شاغل جهت تحصیل در این مقطع مدنظر قرار گرفته است.",
  },
];
export const WayOfSuccessMain = [
  {
    id: 1,
    content:
      "برای درک ساده و سریع تفاوت ها و تمایز های برنامه های موسسه همراهان اینفوگرافی زیر تقدیم حضور میگردد.",
  },
];
export const baPlusMain = [
  {
    id: 1,
    content:
      "همراهان در اقدامی انحصاری و ویژه اقدام به طراحی پکیج های مختلفی برای علاقه مندان در رشته های BA کرده است تا با استفاده از این امکان در مدت زمانی کوتاه به صورت آنلاین علاقه مندان بتوانند از آموزش های تخصصی و دریافت 2 مدرک BA بهره مند شده و از مزایای فوق العاده آن استفاده کنند.",
  },
];
export const clubMain = [
  {
    id: 1,
    content:
      "همراهان یک امکان حمایتی ویژه در جهت تسهیل شرایط پرداخت برای دانشجویان عزیز در نظر گرفته است. به این صورت که هر ثبت نام کننده با معرفی هر یک نفر علاقه مند به استفاده از خدمات ما که منجر به ثبت نام در هر کدام از سرویس های دانشگاه پیام نور شود، با توجه به شرایط زیر شامل تخفیف در شهریه خواهید شد: ثبت نام فرد معرفی شده در هر کدام از خدمات تات: 10% تخفیف در کل هزینه",
  },
];
export const PartnershipMain = [
  {
    id: 1,
    content:
      "مؤسسه همراهان با هدف ارتقای کیفیت و تنوع دوره‌های آموزشی، طرحی به نام«طرح مشارکت» ارائه داده است. در این طرح، مرکز با سازمان‌ها و مؤسسات دیگر همکاری می‌کند تا دوره‌های آموزشی مشترک برگزار کند.",
  },
];
export const InternationalMain = [
  {
    id: 1,
    content:
      "همراهان در راستای گسترش دسترسی به آموزش عالی، طرحی باعنوان «آموزش از راه دور بین الملل» را برای دانشجویان ایرانی مقیم خارج و اتباع خارجی ارائه می­دهد. این طرح که به­­صورت آنلاین در واحدهای بین­الملل دانشگاه­های داخل کشور برگزار می­شود، مزایای متعددی ازجمله انعطاف­پذیری، هزینه کم، کیفیت بالا و تنوع رشته را برای دانشجویان به ارمغان می­آورد. مؤسسه همراهان با راه­اندازی این طرح فرصتی را برای دانشجویان غیرمقیم فراهم می­کند تا بدون اینکه لازم باشد به ایران بیایند، از خدمات ثبت نام در دانشگاه، آموزش و دریافت مدرک دانشگاهی بهره­مند شوند.",
  },
];
export const PartnershipMain2 = [
  {
    id: 1,
    content:
      "مزایای این طرح برای همراهان شامل افزایش تنوع دوره‌ها، ارتقای کیفیت با استفاده از تخصص شرکا، افزایش درآمد و گسترش همکاری‌ها است. مزایای این طرح برای شریک شامل استفاده از امکانات پیام نور، ارتقای برند، دسترسی به مخاطبان جدید و ایجاد فرصت‌های شغلی می­شود. در این طرح مرکز یا سازمانی که به­عنوان شریک وارد همکاری با همراهان می­شود می­تواند در برگزاری دوره­های تخصصی یا معرفی استاد ورود کند و نهایتاً مدرک دانشگاهی دو امضائه به دانش­پذیر اعطا خواهد شد. ",
  },
];
export const sstudentMain = [
  {
    id: 1,
    content:"ما در همراهان افتخار این را داشته ایم که بیش از 2500 دانشجو را در مقاطع مختلف دانشگاهی از شروع تا فارغ التحصیلی همراهی کنیم .",
  },
];
export const bootcampMain = [
  {
    id: 1,
    content:
      "پس از برگزاری دوره های آموزشی که ترکیبی از تئوری و پروژه های عملی است، درنهایت شرکت کنندگان براساس عملکرد و امتیازی که در طول دوره ها دریافت کرده اند رتبه بندی می شوند. برترین افراد در هر کدام از موضوعات بوت کمپ براساس وعده اعلامی دعوت به همکاری خواهند شد و در یکی از شرکت های تابعه دانشگاهی مشغول فعالیت می شوند.",
  },
];
export const satisfactionMain = [
  {
    id: 1,
    content:
      "موارد زیر بخش کوچکی از تجربه هر روز ما در همراهان است. صدای خوشحال و پر امید شما که روزانه برای ما پیغام­آور انجام درست مأموریتمان است. واژگانی که از لابلای خوشحالی قلبی آکنده از امید بیرون می­آید، انگیزه و اشتیاق مجموعه همراهان را برای ارائه خدمات بهتر بیشتر می­کند.",
  },
];
export const IELTSMain = [
  {
    id: 1,
    content:
      "هر متقاضی که نیاز به اخذ مدرک IELTS دارد در مراکز آموزشی حداقل 3 سال زمان نیاز دارد تا از مبتدی به پیشرفته ارتقا پیدا کند. ما با استفاده از روانشناسی آموزش و سیستم ارزیابی مستمر دوره های IELTS را به صورت تضمینی با صرف نصف زمان متداول اجرا می کنیم و نمره موردنظر دانشجو را تضمین می کنیم.",
  },
];
export const ParticipationMain = [
  {
    id: 1,
    content:
      "موسسه همراهان طرح­های متنوعی با هدف همکاری و مشارکت با دیگر مراکز و سازمان­ها در آموزش و ارائه مدرک دانشگاهی ارائه می­دهد. هر کدام از این طرح­ها می­تواند ایجادکننده فرصت­های جدید آموزشی و شغلی برای مخاطبان مختلف باشد. ",
  },
];
export const AboutMain = [
  {
    id: 1,
    content:
      "همراهان فردای روشن با مأموریت ارتقای سطح دانش تخصصی افراد و توسعه توانمندی­های مهارتی جامعه ازطریق ایجاد شبکه ارتباطی با مخاطبان و متقاضیان ارتقای شغلی و بهبود کیفیت زندگی حرفه­ ای آغاز به فعالیت کرده است. طراحی خدمات مختلف و متنوع از سویی، ارتباط و توسعه همکاری با دانشگاه­های مطرح کشور از سوی دیگر در همین راستا در دستور کار همراهان قرار گرفته است. همان­طور که در بخش مجوزها نیز قابل مشاهده است، سرویس­ های طراحی­شده، کاملاً در مسیر قانونی و براساس دستور­العمل­ های مشخص وزارت علوم و موردتائید ساختار آموزش عالی کشور  تدوین و اجرایی می­شود. ",
  },
];
export const ContactUsMain = [
  {
    id: 1,
    content:
      "آدرس:  تهران، میرداماد، میدان مادر، خیابان سنجابی، بعد از کوچه یکم، ساختمان پاسارگاد، پلاک ۱۳ واحد ۴۰۷",
  },
];
export const ContactUsMain2 = [
  {
    id: 1,
    title: "لینک آدرس :",
    linkAddress: "zaya.io/Hamrahanoffice",
    HrefAddress:
      "https://neshan.org/maps/@35.759577,51.446098,15z,0p/places/_bv2x4pxuWXu",
  },
];
export const DoctorateLanguageMain = [
  {
    id: 1,
    content:
      "با توجه به جای گزینی آزمون های داخلی اعم از EPT & MSRT  ما مفتخریم که با اساتید برجسته و طراحان سوال در کوتاه ترین زمان نتیجه مطلوب متقاضی را تضمین کنیم.",
  },
];
export const OrganizationalLanguageBAMain = [
  {
    id: 1,
    content:
      "برای دوره های تخصصی مرسوم است که ابتدا زبان عمومی تدریس و بعد از دوره متوسط زبان تخصصی ارائه شود. اما در دوره تخصصی مدیریت کسب و کار که توسط کارشناسان ارشد مجموعه طراحی شده است، کل دوره از مبتدی تا پیشرفته طی 10 ترم 2 ماهه به صورت تضمینی اجرا می شود و در پایان مدرک معتبر از دانشگاه پیام نور صادر می شود.",
  },
];
export const OrganizationalLanguageMain = [
  {
    id: 1,
    content:
      "با توجه به نیاز هر سازمان، دوره های زبان تخصصی در 4 دسته مدیران ارشد، مدیران میانی، کارشناسان و کارمندان ویژه هر سازمان ارائه می شود. ",
  },
];
export const CertificationsMain = [
  {
    id: 1,
    content:
      "با توجه به امکان برگزاری آزمون های مهارتی و تخصصی در گرایش ها و رشته های مختلف از سوی سازمان فنی و حرفه ای و دانشگاه های مختلف و مؤسسات معتبر علمی و کاربردی، همراهان بر آن شد تا ازطریق فراهم آوردن این امکان برای افراد، بستر دریافت مدارک معتبر و قابل استناد آموزش مهارتی را برای متخصصین، فن ورزان و افرادی که در حوزه ویژه ای توانمندی و تجربه دارند فراهم کند. بنابراین، علاقه مندان می توانند با ارتباط ازطریق تماس تلفنی یا ارسال پیام به صورت آنلاین مدارک مورد درخواست خود را به مؤسسه اعلام کرده و بعد از دریافت شرایط و زمان بندی و نحوه برگزاری آزمون نسبت به دریافت مدرک مورد نیازشان اقدام کنند.",
  },
];
export const CurrencyIncomeMain = [
  {
    id: 1,
    content:
      "برای اخذ پروژه خارجی و ورود به عرصه صادرات خدمات و کسب درآمد ارزی در ابتدای مسیر چند الزام بسیار مهم و کلیدی وجود دارد. اول، تسلط به زبان، چه برای مذاکرات و ایجاد رابطه کاری و شبکه سازی اجتماعی در جامعه مقصد و چه جهت عقد قرارداد و انجام اقدامات روزمره با جامعه مقصد، برای پیش برد نیازهای اولیه برای همکاری؛ دوم، نیاز به رزومه موردتأئید و انگیزه نامه (SOP)های قدرتمند که نشان از مهارت، علاقه و پایداری شما در صنعتی دارد که قرار است در آن پروژه خارجی جذب شوید. این موضوع از چالش هایی است که جوانان ایرانی و متخصصان داخل کشور را حتی با وجود شرایط اقتصادی فعلی که جذابیت صادرات را در عرصه های مختلف دوچندان کرده است برای ورود به بازارهای خارجی با تردید و تزلزل روبرو می کند. از این جهت، همراهان با ایجاد شرایطی برای تکمیل این نواقص در پرونده حرفه ای افراد به سرعت این مسیر را برای هر فرد علاقه مندی به این بخش فراهم می کند.",
  },
];
export const CompleteAcademicDocumentsMain = [
  {
    id: 1,
    content:
      "بسیاری از افراد با تجربه های خوب مهارتی و شغلی وجود دارند که به دلیل مشغله زیاد کاری و عدم داشتن زمان کافی برای آمادگی کنکور و شرکت در کلاس های دانشگاه، امکان ارتقای تحصیلات دانشگاهی را از خود سلب کرده اند. بنابراین، این امکان وِیژه برای افرادی است که می خواهند از طریق متاکد ارتقای مدرک تحصیلی را هم در کنار دیگر امکانات مدرسه آنلاین مورداستفاده قرار دهند. برای اطلاعات بیشتر، در همین کاتالوگ دیجیتال بخش دانشگاهی را با دقت مطالعه کنید.",
  },
];
export const baProfessionalMain = [
  {
    id: 1,
    content:
      "با توجه به نیاز و استقبال فوق العاده متخصصین و فعالان بخش های مختلف به منظور بهره مندی از دوره های  BA  با گرایش های تخصصی، همراهان با همکاری دانشگاه های معتبر کشور اقدام به طراحی و برگزاری دوره های MBA و DBA با گرایش های تخصصی کرده است که بر اساس امکان سنجی تقاضای بالایی در مخاطبان این دوره ها دارد. از سوی دیگر بازار کار این حوزه ها به دنبال متخصصین کارکشته و آموزش دیده است تا خلأ نیروی انسانی را در ساختار مدیریتی و سازمانی خود رفع کند.",
  },
];
export const loginMain = [
  {
    id: 1,
    content: "نگاهی اجمالی به مسیر ثبت نام در همراهان.",
  },
];
export const gloryMain = [
  {
    id: 1,
    content:
      "در طی چندین سال تجربه و فعالیت مستمر در حوزه آموزش و تحصیلات دانشگاهی و انبوهی از دستاوردها و توانمندی‌ها، گوشه کوچکی از افتخارات ما در این خدمتگزاری مستمر به سمع و نظر شما می‌رسد.",
  },
];
export const AchievementsMain = [
  {
    id: 1,
    content:
      "در طی چندین سال تجربه و فعالیت مستمر در حوزه آموزش و تحصیلات دانشگاهی و انبوهی از دستاوردها و توانمندی‌ها، گوشه کوچکی از افتخارات ما در این خدمتگزاری مستمر به سمع و نظر شما می‌رسد.",
  },
];
export const MastersGraduatesMain = [
  {
    id: 1,
    content:
      "همراهان مفتخر است از طریق همکاری با دانشگاه­های طرف قرارداد در مدت زمان مشخص فرآیند تحصیل تعدادی از عزیزان را در مقاطع مختلف به پایان برساند.",
  },
];
export const MastersGraduatesMainTitle = [
  {
    id: 1,
    content:
      "اسامی فارغ التحصیلان برنامه تحصیلات دانشگاهی در مقطع کارشناسی به شرح زیر است :",
  },
];
export const MastersGraduatesMainTitle2 = [
  {
    id: 1,
    content:
      "اسامی فارغ التحصیلان برنامه تحصیلات دانشگاهی در مقطع کارشناسی ارشد به شرح زیر است :",
  },
];
export const MastersGraduatesMainTitle3 = [
  {
    id: 1,
    content:
      "اسامی فارغ التحصیلان برنامه تحصیلات دانشگاهی در مقطع دکتری به شرح زیر است :",
  },
];
export const ConsentMain = [
  {
    id: 1,
    content:
      "موارد زیر بخش کوچکی از تجربه هر روز ما در همراهان است. صدای خوشحال و پر امید شما که روزانه برای ما پیغام‌آور انجام درست مأموریتمان است. واژگانی که از لابه لای خوشحالی قلبی آکنده از امید بیرون می‌آید، انگیزه و اشتیاق مجموعه همراهان را برای ارائه خدمات بهتر بیشتر می‌کند.",
  },
];
export const homeMainCard = [
  {
    id: 1,
    Title: "طرح ها",
    image: "/images/hat1.png",
    link: "/design",
  },
  {
    id: 2,
    Title: "ارزش پیشنهادی",
    image: "/images/hand-diamond.png",
    link: "/additions",
  },
  {
    id: 3,
    Title: "افتخارات",
    image: "/images/medal.png",
    link: "/glory",
  },
  {
    id: 4,
    Title: "مشارکت و همکاری",
    image: "/images/handshake.png",
    link: "/Participation",
  },
  {
    id: 5,
    Title: "درباره ما",
    image: "/images/about.png",
    link: "/about",
  },
  {
    id: 6,
    Title: "ارتباط با ما",
    image: "/images/contact.png",
    link: "/Contactus",
  },

];
export const homeDeskTopMainCard = [
  {
    id: 1,
    Title: "طرح ها",
    image: "/images/hat1.png",
    imageBack: "/images/brushed.png",
    link: "/design",
  },
  {
    id: 2,
    Title: "ارزش پیشنهادی",
    image: "/images/hand-diamond.png",
    imageBack: "/images/brushed.png",
    link: "/additions",
  },
  {
    id: 3,
    Title: "افتخارات",
    image: "/images/medal.png",
    imageBack: "/images/brushed.png",
    link: "/glory",
  },
  {
    id: 4,
    Title: "درباره ما",
    image: "/images/about.png",
    imageBack: "/images/brushed.png",
    link: "/about",
  },
  {
    id: 5,
    Title: "مشارکت و همکاری",
    image: "/images/handshake.png",
    imageBack: "/images/brushed.png",
    link: "/Participation",
  },
  {
    id: 6,
    Title: "ارتباط با ما",
    image: "/images/contact.png",
    imageBack: "/images/brushed.png",
    link: "/Contactus",
  },

];
export const designMainCard = [
  {
    id: 1,
    Title: "دانشگاهی",
    image: "",
    link: "/university",
  },
  {
    id: 2,
    Title: "BA",
    image: "",
    link: "/BA",
  },
  {
    id: 3,
    Title: "متاکد",
    image: "",
    link: "/metacode",
  },
  {
    id: 4,
    Title: "طرح شتاب",
    image: "",
    link: "/FastTrackPlan",
  },
  {
    id: 5,
    Title: "زبان",
    image: "",
    link: "/languageLearning",
  },
  {
    id: 6,
    Title: "مسیر ثبت نام",
    image: "",
    link: "/login",
  },
  {
    id: 7,
    Title: "سوالات متداول",
    image: "",
    link: "/fag",
  },
  {
    id: 8,
    Title: "باشگاه همراهی",
    image: "",
    link: "/club",
  },
];
export const FastTrackPlanMainCard = [
  {
    id: 1,
    Title: "فضای همکاری",
    image: "",
    link: "/CollaborationSpace",
  },
  {
    id: 2,
    Title: "فرآیند اجرایی",
    image: "",
    link: "/ExecutionProcess",
  },
  {
    id: 3,
    Title: "مشاوره تخصصی",
    image: "",
    link: "/professionalConsultationFastTrackPlan",
  },
];
export const baMainCard = [
  {
    id: 1,
    Title: "BA پلاس",
    image: "",
    link: "/BAPlus",
  },
  {
    id: 2,
    Title: "BA تخصصی",
    image: "",
    link: "/BAProfessional",
  },
  {
    id: 3,
    Title: "مشاوره تخصصی",
    image: "",
    link: "/professionalConsultationBa",
  },
  {
    id: 4,
    Title: "مسیر موفقیت",
    image: "",
    link: "/wayOfSuccess",
  },
];
export const ParticipationCard = [
  {
    id: 1,
    Title: "طرح مشارکت",
    image: "",
    link: "/Partnership",
  },
  {
    id: 2,
    Title: "آموزش بین­ الملل",
    image: "",
    link: "/International",
  },
];
export const AboutMainCard = [
  {
    id: 1,
    Title: "مجوزها",
    image: "",
    link: "/permissions",
  },
  {
    id: 2,
    Title: "همکاری و سوابق",
    image: "",
    link: "/Cooperation",
  },
  {
    id: 3,
    Title: "چارت سازمانی",
    image: "",
    link: "/Chart",
  },
];
export const universityMainCard = [
  {
    id: 1,
    Title: "کارشناسی",
    image: "",
    link: "/masters",
  },
  {
    id: 2,
    Title: "ارشد",
    image: "",
    link: "/senior",
  },
  {
    id: 3,
    Title: "دکتری",
    image: "",
    link: "/phd",
  },
  {
    id: 4,
    Title: "ارشد و دکتری ویژه",
    image: "",
    link: "/PHDmasters",
  },
  {
    id: 5,
    Title: "مشاوره تخصصی",
    image: "",
    link: "/professionalConsultation",
  },
  {
    id: 6,
    Title: "مسیر موفقیت",
    image: "",
    link: "/wayOfSuccess",
  },
];
export const metaTagMainCard = [
  {
    id: 1,
    Title: "بوت کمپ و اشتغال",
    image: "",
    link: "/bootcamp",
  },
  {
    id: 2,
    Title: "اخذ مدرک و مجوزها",
    image: "",
    link: "/Certifications",
  },
  {
    id: 3,
    Title: "کسب درآمد ارزی",
    image: "",
    link: "/CurrencyIncome",
  },
  {
    id: 4,
    Title: "تکمیل مدارک دانشگاهی",
    image: "",
    link: "/CompleteAcademicDocuments",
  },
  {
    id: 5,
    Title: "مشاوره تخصصی",
    image: "",
    link: "/professionalConsultationMetacode",
  },
];
export const languageLearningMainCard = [
  {
    id: 1,
    Title: "IELTS",
    image: "",
    link: "/IELTS",
  },
  {
    id: 2,
    Title: "زبان جامع دکتری",
    image: "",
    link: "/DoctorateLanguage",
  },
  {
    id: 3,
    Title: "زبان تخصصی BA",
    image: "",
    link: "/OrganizationalLanguageBA",
  },
  {
    id: 4,
    Title: "زبان تخصصی سازمانی",
    image: "",
    link: "/OrganizationalLanguage",
  },
];
export const seniorTable = [
  {
    id: 1,
    Title: "کارشناسی",
    linkList: [
      { id: 1, item: "بدون آزمون ورودی: تنها ظرف 1 هفته دانشجو خواهی شد." },
      { id: 2, item: "بدون پیش نیاز: نیاز به گذراندن پیش نیاز ندارید." },
      {
        id: 3,
        item: "حداکثر واحد در هر ترم: در هر ترم سقف واحد را دریافت می کنید.",
      },
      {
        id: 4,
        item: "آنلاین و غیرحضوری: ملزم به شرکت در کلاس ها به صورت فیزیکی نیستید و و همه کلاس ها و آزمون ها آنلاین برگزار می شود.",
      },
      {
        id: 5,
        item: "مدت زمان کوتاه: اتمام واحدهای نظری در ۶ ترم امکان پذیر است.",
      },
    ],
  },
];
export const universityTable = [
  {
    id: 1,
    Title: "مزایای تجربه تحصیلات دانشگاهی با همراهان:",
    linkList: [
      { id: 1, item: "ثبت نام بدون آزمون ورودی (کنکور)" },
      {
        id: 2,
        item: "عدم نیاز به شرکت در کلاس ها از طریق برگزاری کلاس ها و آزمون ها به صورت آنلاین",
      },
      { id: 3, item: "ارائه پشتیبانی علمی و آموزشی در حین تحصیل" },
      { id: 4, item: "امکان دریافت بیشترین واحد مجاز ترم در هر مقطع تحصیلی" },
      { id: 5, item: "عدم نیاز به اخذ ترم پیش نیاز در ابتدای تحصیل" },
    ],
  },
];
export const mastersTable = [
  {
    id: 1,
    Title: "مزایای تحصیل در مقطع کارشناسی ارشد از طریق برنامه های همراهان:",
    linkList: [
      {
        id: 1,
        item: "بدون نیاز به آزمون ورودی (بدون کنکور)",
      },
      {
        id: 2,
        item: "برگزاری آنلاین کلاس ها و آزمون ها",
      },
      {
        id: 3,
        item: "کوتاه بودن طول تحصیل: گذراندن مقطع کارشناسی ارشد، برای شاغلین معمولاً ۳ تا ۴ سال زمان نیاز دارد، اما شما از طریق برنامه ریزی های همراهان این مقطع را در1.5سال فارغ التحصیل خواهید شد.",
      },
      {
        id: 4,
        item: "صرفه جویی در هزینه ها: با درنظرگرفتن آنلاین بودن و کاهش مدت زمان تحصیل، در مجموع شما هزینه کمتری از دوره های مشابه پرداخت می کنید.",
      },
      {
        id: 5,
        item: "ارائه گواهی معتبر از دانشگاه های موردتائید وزارت علوم که قابلیت ترجمه، دریافت ریزنمرات و تطبیق واحدهای اخذ شده با دانشگاه های خارج از کشور را به همراه دارد.",
      },
    ],
  },
];
export const baPlusTables = [
  {
    id: 1,
    Title: "مزایای شرکت در این دوره های تخصصی :",
    linkList: [
      {
        id: 1,
        item: "آموزش به روزترین و جامع ترین مطالب علمی در حوزه های مدیریت کسب و کار",
      },
      {
        id: 2,
        item: "دریافت مدرک معتبر دانشگاهی قابل ترجمه به همراه ریزنمرات با امکان تطبیق 50% واحدهای گذرانده شده در دانشگاه های خارج از کشور",
      },
      {
        id: 3,
        item: "دریافت 2 مدرک از مدارک تخصصی BA با شرکت در یک دوره",
      },
      {
        id: 4,
        item: "دریافت مدرک رسمی سازمان فنی و حرفه ای",
      },
      {
        id: 5,
        item: "امکان بهره مندی از امتیاز وام خوداشتغالی جهت راه اندازی کسب و کار",
      },
      {
        id: 6,
        item: "عقد قرارداد مشارکت با دانشگاه پیام نور",
      },
      {
        id: 7,
        item: "بهره مندی از شرایط و امکانات شتابدهی کسب و کار",
      },
      {
        id: 7,
        item: "بهره مندی از مشاوره روانشناختی کار",
      },
      {
        id: 8,
        item: "بهره مندی از کوچ فردی",
      },
      {
        id: 9,
        item: "تیم سازی",
      },
    ],
  },
];
export const baPlusLink = [
  {
    id: 1,
    title: "لینک آدرس :",
    HrefAddress: "https://tatpnu.com/services/baLearnCourses",
    linkAddress: "مشاهده دوره های BA پلاس",
  },
];
export const ContactUsTables = [
  {
    id: 1,
    Title: "مشاوره تخصصی",
    linkList: [
      {
        id: 1,
        item: "جهت ارتباط با مشاوران تلفنی همراهان ازطریق شماره زیر در خدمت شما هستیم. مشاوران ما در تمام ایام هفته از ساعت ۹ صبح تا ۱۸ عصر، با افتخار پاسخگوی شما هستند.",
      },
      {
        id: 2,
        title: "شماره تماس :",
        linkAddress: "۰۲۱۹۱۰۹۷۷۳۳",
        HrefAddress: "+02191097733",
      },
    ],
  },
];
export const ContactUsTables2 = [
  {
    id: 1,
    Title: "مشاوره آنلاین",
    linkList: [
      {
        id: 1,
        item: "برای ارتباط با مشاوران آنلاین کافی است ابتدا برنامه موردنظر خود را انتخاب کنید و ازطریق گفت­و­گوی آنلاین در ساعات اداری همه روزه از ساعت ۹ تا ۱۸ عصر میتوانید با بخش مشاوره آنلاین ما در ارتباط باشید.",
      },
    ],
  },
];
export const CooperationTables = [
  {
    id: 1,
    Title: "سوابق همراهان : ",
    linkList: [
      {
        id: 1,
        item: "داشتن 9 سال سابقه رسمی و حرفه ­ای در ارائه خدمات به شاغلین در سرتاسر کشور",
      },
      {
        id: 2,
        item: "همراهی در فارغ­التحصیلی بیش از 9 هزار شاغل در تمامی مقاطع دانشگاهی",
      },
      {
        id: 3,
        item: "ایجاد 40 مرکز ثبت نام ویژه دانشگاه­های غیرانتفاعی، علمی کاربردی، سراسری و بین ­الملل",
      },
      {
        id: 4,
        item: "همراهی در راه­اندازی طرح­های :",
      },
      {
        id: 5,
        item: "معادل­سازی با تأیید وزارت علوم",
      },
      {
        id: 6,
        item: "طرح شتاب و امکان عقد قرارداد مشارکت با دانشگاه",
      },
      {
        id: 7,
        item: "ایجاد پایگاه رسمی زبان",
      },
      {
        id: 8,
        item: "طراحی طرح ارتقای مدارک ویژه شاغلین",
      },
      {
        id: 9,
        item: "همکاری با بیش از 1300 متقاضی در تألیف کتاب",
      },
      {
        id: 10,
        item: "عضویت بیش از 900 متقاضی و رفع موانع بیمه تأمین اجتماعی و تکمیلی درمانی",
      },
      {
        id: 11,
        item: "رونمایی از 7 محصول و طرح در طرح شتاب با حمایت مرکز آموزش­های تخصصی دانشگاه پیام نور",
      },
      {
        id: 12,
        item: "همراهی بیش از 3300 متقاضی در تمدید قرارداد و خدمات",
      },
      {
        id: 13,
        item: "همراهی بیش از 2600 دانشجو و امکان تحصیل رایگان در باشگاه و ایجاد درآمد",
      },
    ],
  },
];
export const bootcampTables = [
  {
    id: 1,
    Title:
      "این بوت کمپ شامل دوره های مهارتی ۸ گانه کاربردی شامل موارد زیر است:",
    linkList: [
      {
        id: 1,
        item: "تولید محتوا ازطریق هوش مصنوعی",
      },
      {
        id: 2,
        item: "دیجیتال مارکتینگ",
      },
      {
        id: 3,
        item: "مدیریت شبکه های اجتماعی",
      },
      {
        id: 4,
        item: "فروش دیجیتال",
      },
      {
        id: 5,
        item: "فروش تلفنی",
      },
    ],
  },
];
export const CollaborationSpaceTables = [
  {
    id: 1,
    Title: "",
    linkList: [
      {
        id: 1,
        item: "هرگونه ارتباط با هر مرکز و سازمانی را ازطریق دانشگاه برای شما مهیا می کنیم.",
      },
      {
        id: 2,
        item: "یک تیم 400 نفره در بخش معرفی، تبلیغات، دیجتال مارکتینگ و فروش در طرح و ایده شما فعالیت می کنند.",
      },
      {
        id: 3,
        item: "در ایده هایی که نیاز به حضور شما دارد، امکانات فضای اشتراکی و تیم های اداری و اجرایی دراختیارتان قرارداده می شود.",
      },
      {
        id: 4,
        item: "تمامی بسترهای سایت و شبکه های اجتماعی و امکانات معرفی و اجرای طرح در فضای آنلاین و آفلاین در کوتاه ترین زمان ممکن انجام می شود.",
      },
      {
        id: 5,
        item: "ارائه توصیه نامه معتبر دانشگاهی و آورده های اعتباری این قرارداد را نمی توان معطوف به چند خط کرد.",
      },
    ],
  },
];
export const ExecutionProcessTables = [
  {
    id: 1,
    Title: "",
    linkList: [
      {
        id: 1,
        item: "ثبت‌نام اولیه",
      },
      {
        id: 2,
        item: "بررسی درخواست‌ها و غربال گری اولیه",
      },
      {
        id: 3,
        item: "مشاوره و آزمون‌های روان‌شناختی",
      },
      {
        id: 4,
        item: "یادگیری و مهارت‌آموزی",
      },
      {
        id: 5,
        item: "تیم‌سازی و حل نیازهای فناورانه",
      },
      {
        id: 6,
        item: "•	راه اندازی",
      },
    ],
  },
];
export const baProfessionalTables = [
  {
    id: 1,
    Title: "لیست رشته های MBA تخصصی همراهان به شرح زیر است :",
    linkList: [
      {
        id: 1,
        item: "MBA مدیریت بازرگانی",
      },
      {
        id: 2,
        item: "MBA مهندسی برق",
      },
      {
        id: 3,
        item: "MBA پژوهش هنر",
      },
      {
        id: 4,
        item: "MBA حسابداری",
      },
      {
        id: 5,
        item: "MBA حقوق",
      },
      {
        id: 6,
        item: "MBA روانشناسی",
      },
      {
        id: 7,
        item: "MBA مهندسی صنایع",
      },
      {
        id: 8,
        item: "MBA مهندسی عمران",
      },
      {
        id: 9,
        item: "MBA مهندسی کامپیوتر",
      },
      {
        id: 10,
        item: "MBA مدیریت مالی",
      },
      {
        id: 11,
        item: "MBA مهندسی معماری",
      },
      {
        id: 12,
        item: "MBA مهندسی مکانیک",
      },
    ],
  },
];
export const fagTables = [
  {
    id: 1,
    Title: "",
    linkList: [
      {
        id: 1,
        item: "آیا برای ثبت نام در این دوره، حتما باید شاغل باشم و مدارک شغلی ارائه بدهم؟",
      },
      {
        id: 2,
        item: "تحصیل آنلاین و غیرحضوری بیشترین انطباق را با شرایط افراد شاغل دارد، اما برای ثبت نام جهت تحصیل شرط اشتغال الزامی نیست.",
      },
      {
        id: 3,
        item: "من دیپلم نظام قدیم دارم، آیا می توانم در این دوره تحصیل کنم؟",
      },
      {
        id: 4,
        item: "بله. شرایط ثبت نام برای متقاضیانی که دیپلم نظام قدیم دارند فراهم است.",
      },
      {
        id: 5,
        item: "شغل من طوری است که کلاً نمی توانم در کلاس ها حاضر شوم، با این شرایط می توانم در این دوره ها ثبت نام کنم؟",
      },
      {
        id: 6,
        item: "بله، کلاس ها و امتحانات به صورت آنلاین برگزار می شود و فایل ضبط شده آن تا پایان ترم در پرتال دانشجو ذخیره می شود.",
      },
      {
        id: 7,
        item: "آیا پس از ثبت نام می توانم تغییر رشته بدهم؟",
      },
      {
        id: 8,
        item: "امکان تغییر رشته تا قبل از شروع کلاس ها وجود دارد.",
      },
      {
        id: 9,
        item: "شهریه متقاضیان کارشناسی چگونه محاسبه می شود؟",
      },
      {
        id: 10,
        item: "شهریه ها بر اساس میزان مصوب وزارت علوم و دانشگاه محاسبه می شوند.",
      },
      {
        id: 11,
        item: "کلاس ها و آزمون به چه نحوی برگزار می شود؟",
      },
      {
        id: 12,
        item: "کلاس ها به صورت آنلاین و در بستر آموزشی دانشگاه پیام نور برگزار می شوند.",
      },
      {
        id: 13,
        item: "آیا اصل مدارک هم مورد نیاز است؟",
      },
      {
        id: 14,
        item: " استعلام و تکمیل مدارک صرفاً با تصویر ارسالی شما از اصل یا کپی مدرک قابل پیگیری است.",
      },
      {
        id: 15,
        item: "سقف انتخاب واحد در هر ترم چند واحد است؟",
      },
      {
        id: 16,
        item: "با توجه به مقطع تحصیلی، سقف مجاز متفاوت خواهد بود که برای مقطع کارشناسی ۲۴ واحد، برای ارشد ۶ تا ۸ واحد و برای مقطع دکتری ۴ واحد در هر ترم است.",
      },
      {
        id: 17,
        item: "بعد از فارغ التحصیلی مستقیماً مدرک داده می شود یا گواهینامه؟",
      },
      {
        id: 18,
        item: "پس از فارغ التحصیلی، گواهینامه موقت صادر شده و بعد از ۶ ماه الی ۱ سال اصل مدرک صادر شده و به دانشجو تحویل داده می شود.",
      },
      {
        id: 19,
        item: "جزوات درسی چگونه ارائه می شوند؟",
      },
      {
        id: 20,
        item: "جزوات درسی و نمونه سوالات از طریق دانشگاه در اختیار دانشجویان قرار خواهد گرفت و محتوای کلاس ها هم در LMS  دانشجو بارگزاری می شود.",
      },
      {
        id: 21,
        item: "جزوات درسی و نمونه سوالات از طریق دانشگاه در اختیار دانشجویان قرار خواهد گرفت و محتوای کلاس ها هم در LMS  دانشجو بارگزاری می شود.",
      },
      {
        id: 22,
        item: "اعتبار مدرک من در ایران و جهان چگونه است؟",
      },
      {
        id: 23,
        item: "دانشگاه پیام نور به عنوان بزرگ ترین دانشگاه دولتی ایران، دارای مدارکی معتبر و قابل استعلام در داخل کشور است. همچنین، اعتبار این دانشگاه در سطح بین المللی نیز به رسمیت شناخته شده و مدارک آن قابل ترجمه است.",
      },
      {
        id: 24,
        item: "آیا بعد از ثبت نام از معافیت تحصیلی برخوردار خواهم بود؟",
      },
      {
        id: 25,
        item: "بله، با ثبت نام در این مقطع به عنوان دانشجوی رسمی دانشگاه پیام نور شناخته خواهید شد و از زمان دریافت کد دانشجویی، معافیت تحصیلی شما قابل پیگیری خواهد بود.",
      },
      {
        id: 26,
        item: "آیا امکان انتقالی به دانشگاه سراسری یا آزاد وجود دارد؟",
      },
      {
        id: 27,
        item: "خیر؛ امکان انتقال به دانشگاه های دیگر وجود ندارد.",
      },
    ],
  },
];
export const baProfessionalTables2 = [
  {
    id: 1,
    Title: "لیست رشته های DBA تخصصی همراهان به شرح زیر است : ",
    linkList: [
      {
        id: 1,
        item: "DBA اقتصاد پولی",
      },
      {
        id: 2,
        item: "DBA آموزش زبان انگلیسی",
      },
      {
        id: 3,
        item: "DBA مدیریت بازرگانی",
      },
      {
        id: 4,
        item: "DBA جغرافیای برنامه ریزی شهری",
      },
      {
        id: 5,
        item: "DBA حقوق",
      },
      {
        id: 6,
        item: "DBA روانشناسی",
      },
      {
        id: 7,
        item: "DBA صنایع",
      },
      {
        id: 8,
        item: "DBA عمران",
      },
      {
        id: 9,
        item: "DBA مدیریت دولتی",
      },
      {
        id: 10,
        item: "DBA مدیریت ورزشی",
      },
    ],
  },
];
export const baProfessionalTables3 = [
  {
    id: 1,
    Title: "مشاوره تلفنی",
    linkList: [
      {
        id: 1,
        item: "مشاوران ما در تمام ایام هفته از ساعت ۹ صبح تا ۱۸ عصر، با افتخار پاسخگوی شما هستند. برای ارتباط با مشاوران تلفنی همراهان از طریق شماره زیر در خدمت شما هستیم. ",
      },
    ],
  },
];
export const PhdMainTable = [
  {
    id: 1,
    Title:
      "اهم مزایای تحصیل در مقطع دکتری ازطریق برنامه های همراهان به شرح زیر قابل ملاحظه است :",
    linkList: [
      {
        id: 1,
        item: "بدون نیاز به آزمون ورودی (بدون کنکور)",
      },
      {
        id: 2,
        item: "برگزاری آنلاین کلاس ها و آزمون ها",
      },
      {
        id: 3,
        item: "کوتاه بودن طول تحصیل: گذراندن مقطع دکتری، برای شاغلین معمولاً ۵ الی ۷ سال زمان نیاز دارد، اما در این دوره ها شما در 3.5 سال فارغ التحصیل خواهید شد.",
      },
      {
        id: 4,
        item: "صرفه جویی در هزینه ها: با درنظرگرفتن آنلاین بودن و کاهش مدت زمان تحصیل، درمجموع شما هزینه کمتری از دوره های مشابه پرداخت می کنید.",
      },
      {
        id: 5,
        item: "ارزش افزوده بالا: این دوره ها ویژه شاغلین طراحی شده و امکان تحصیل هم زمان با اشتغال را بسیار تسهیل می کند.",
      },
      {
        id: 6,
        item: "مشاوره های تخصصی پروپوزال پایان نامه: با شرکت در این دوره ها، امکان مشاوره و همراهی با بهترین مشاوران در زمینه پایان نامه از انتخاب موضوع مرتبط با مهارت ها و علایق تا مشاوره های عملیاتی حین رساله برخوردار خواهید بود.",
      },
      {
        id: 7,
        item: "تألیف کتاب: 2عنوان کتاب توسط دانشجو در موضوع رشته تحصیلی با راهنمایی و مشاوره دانشگاه تألیف خواهد شد.",
      },
      {
        id: 8,
        item: "مقاله علمی: مقاله های علمی توسط دانشجو با هم یاری دانشگاه در راستای ارتقای امتیاز دانشجو تألیف می شود",
      },
      {
        id: 9,
        item: "مشاوره و تقویت مدرک زبان انگلیسی: ازطریق برنامه های کمک آموزشی همراهان درخصوص زبان تخصصی، شما می توانید به راحتی در دانشگاه نمره قابل قبولی در بخش زبان تخصصی به دست بیاورید.",
      },
      {
        id: 10,
        item: "ارائه مدرک معتبر و قابل استعلام دانشگاهی با تأیید وزارت علوم",
      },
    ],
  },
];
export const PHDmastersMainTable = [
  {
    id: 1,
    Title: "رشته های این طرح در مقطع ارشد به شرح زیر است:",
    linkList: [
      {
        id: 1,
        item: "مدیریت بازرگانی",
      },
      {
        id: 2,
        item: "مهندسی برق",
      },
      {
        id: 3,
        item: "پژوهش هنر",
      },
      {
        id: 4,
        item: "حسابداری",
      },
      {
        id: 5,
        item: "حقوق",
      },
      {
        id: 6,
        item: "روانشناسی",
      },
      {
        id: 7,
        item: "مهندسی صنایع",
      },
      {
        id: 8,
        item: "مهندسی عمران",
      },
      {
        id: 9,
        item: "مهندسی کامپیوتر",
      },
      {
        id: 10,
        item: "مدیریت مالی",
      },
      {
        id: 11,
        item: "مهندسی معماری",
      },
      {
        id: 12,
        item: "مهندسی مکانیک",
      },
    ],
  },
];
export const metacodeMainCard = [
  {
    id: 1,
    Title:
      "این طرح از ۴ بخش کلی تشکیل شده است. برای مطالعه هر کدام از بخش ها کافی است بخش موردنظر را انتخاب کنید:",
    linkList: [
      {
        id: 1,
        item: "بوت کمپ و اشتغال: برگزاری دوره مهارت های درآمدزا مبتنی بر نیاز روز و عقد قرارداد همکاری با افرادی که در این بوت کمپ نتایج درخشانی داشته باشند، در این بخش طراحی شده است.",
      },
      {
        id: 2,
        item: "مدارک و مجوزها: با شرکت در آزمون های تعریف شده امکان دریافت مدارک معتبر دانشگاهی و دانشی برای مهارت هایی که آموخته اید فراهم شده است.",
      },
      {
        id: 3,
        item: "کسب درآمد ارزی: تقویت و اخذ مدارک بین المللی آن و آماده سازی رزومه قوی و انگیزه نامه های معتبر (SOP) اولین گام برای عقد قراردادهای کاری با کارفرمایان خارجی است که از طریق شرکت در این طرح برای شما محقق خواهد شد.",
      },
      {
        id: 4,
        item: "تکمیل مدارک دانشگاهی: با امکان بهره مندی از فرصت تحصیل در مقاطع دانشگاهی و ارتقای سطح مقطع دانشگاهی، سرمایه گذاری فوق العاده ای در آینده حرفه ای و اجتماعی خود انجام داده اید که نتایج آن به سرعت برای شما نمایان خواهد شد.",
      },
    ],
  },
];
export const ConsultationMainTable = [
  {
    id: 1,
    Title: "مشاوره آنلاین",
    linkList: [
      {
        id: 1,
        item: "برای ارتباط با مشاوران آنلاین کافی است ابتدا برنامه مورد نظر خود را انتخاب کنید و از طریق گفت وگوی آنلاین در ساعات اداری همه روزه از ساعت ۹ تا ۱۸ عصر با بخش مشاوره آنلاین ما در ارتباط باشید.",
      },
    ],
  },
];
export const ConsultationMainTable2 = [
  {
    id: 1,
    Title: "مشاوره تلفنی",
    linkList: [
      {
        id: 1,
        item: "مشاوران ما در تمام ایام هفته از ساعت ۹ صبح تا ۱۸ عصر، با افتخار پاسخگوی شما هستند. برای ارتباط با مشاوران تلفنی همراهان ازطریق شماره زیر در خدمت شما هستیم:",
      },
      {
        id: 2,
        title: "شماره تماس :",
        linkAddress: "۰۲۱۹۱۰۹۷۷۳۳",
        HrefAddress: "+02191097733",
      },
    ],
  },
];
export const PHDmastersMainTable2 = [
  {
    id: 1,
    Title: "لیست رشته های اختصاصی این برنامه در مقطع دکتری به شرح زیر است : ",
    linkList: [
      {
        id: 1,
        item: "دکتری اقتصاد پولی",
      },
      {
        id: 2,
        item: "دکتری آموزش زبان انگلیسی",
      },
      {
        id: 3,
        item: "دکتری مدیریت بازرگانی",
      },
      {
        id: 4,
        item: "دکتری جغرافیای برنامه ریزی شهری",
      },
      {
        id: 5,
        item: "دکتری حقوق",
      },
      {
        id: 6,
        item: "دکتری روانشناسی",
      },
      {
        id: 7,
        item: "دکتری صنایع",
      },
      {
        id: 8,
        item: "دکتری عمران",
      },
      {
        id: 9,
        item: "دکتری مدیریت دولتی",
      },
      {
        id: 10,
        item: "دکتری مدیریت ورزشی",
      },
    ],
  },
];
export const PHDmastersMainTable3 = [
  {
    id: 1,
    Title:
      "ویژگی های تحصیل در برنامه ویژه همراهان در مقاطع کارشناسی ارشد و دکتری :",
    linkList: [
      {
        id: 1,
        item: "مدرک معتبر دانشگاهی ارشد و دکتری بدون هیچ گونه تفاوتی در مدرک و مندرجات آن",
      },
      {
        id: 2,
        item: "کاهش چشمگیر مدت زمان تحصیل در مقاطع پیچیده و پرزحمت ارشد و دکتری",
      },
      {
        id: 3,
        item: "پشتیبانی آموزشی و علمی همراهان در حین مسیر تحصیلی متقاضیان",
      },
      {
        id: 4,
        item: "قابلیت استعلام مدرک از وزارت علوم و یا ترجمه مدرک جهت ارائه به مراکز بین المللی",
      },
    ],
  },
];
export const seniorTables = [
  {
    id: 1,
    Title: "",
    linkList: [
      {
        id: 1,
        item: "مدرک موردتأیید وزارت علوم با قابلیت استعلام داخلی و ترجمه جهت ارائه به نهادهای خارج از کشور",
      },
      {
        id: 2,
        item: "ارائه اغلب رشته های پرطرفدار مورد استقبال در مقطع کارشناسی ",
      },
      {
        id: 3,
        item: "امکان ارائه مدرک پس از فارغ التحصیلی به عنوان مدرک مقطع دانشگاهی برای درج در پرونده پرسنلی و افزایش حقوق و مزایا و ارتقای شغلی؛ طبق طرح طبقه  بندی مشاغل",
      },
    ],
  },
];
export const masterTable = [
  {
    id: 1,
    Title: "کارشناسی ارشد",
    linkList: [
      { id: 1, item: "ورود بدون آزمون علمی" },
      { id: 2, item: "حذف ترم پیش نیاز" },
      {
        id: 3,
        item: "حداکثر واحد نظری در هر ترم: ۱۴ واحد در ترم اول و دوم (مجموعاً ۲۸ واحد)",
      },
      { id: 4, item: "دریافت نامه فارغ التحصیلی با معدل بالا در ۲ ترم" },
      {
        id: 5,
        item: "مشاوره و پشتیبانی علمی و آموزشی: از این طریق به راحتی امور پایان نامه با موضوع مرتبط را انجام خواهید داد.",
      },
      {
        id: 6,
        item: "آمادگی برای ورود بدون آزمون دکتری به روش استعداد درخشان",
      },
      {
        id: 7,
        item: "با همراهان فقط در ۳ ترم فارغ التحصیل مقطع ارشد خواهید بود.",
      },
    ],
  },
];
export const PHDTable = [
  {
    id: 1,
    Title: "دکتری",
    linkList: [
      { id: 1, item: "بدون نیاز به شرکت در آزمون علمی" },
      {
        id: 2,
        item: "•	پذیرش در آزمون مصاحبه: با بهره گیری از بسته آمادگی ورود به مقطع دکتری همراهان به صورت قطعی در مصاحبه علمی دانشگاه های طرف قرارداد پذیرش خواهید گرفت.",
      },
      {
        id: 3,
        item: "حذف ترم پیش نیاز",
      },
      { id: 4, item: "اخذ حداکثر واحد مجاز در هر ترم: ۶ تا ۹ واحد در هر ترم" },
      {
        id: 5,
        item: "کسب نمرات قبولی در ۱۸ واحد در کم ترین زمان",
      },
      {
        id: 6,
        item: "همراهی و پشتیبانی علمی برای دریافت مدرک زبان",
      },
      {
        id: 7,
        item: "مشاوره علمی و آموزشی جهت قبولی آزمون جامع در ۱ ترم",
      },
    ],
  },
];
export const consentTable = [
  {
    id: 1,
    Title: "مقطع دکتری",
    file: [
      { id: 1, sound: "/sound/1.mp3" },
      { id: 2, sound: "/sound/1.mp3" },
    ],
  },
  {
    id: 2,
    Title: "مقطع دکتری",
    file: [
      { id: 1, sound: "/sound/1.mp3" },
      { id: 2, sound: "/sound/1.mp3" },
      { id: 2, sound: "/sound/1.mp3" },
      { id: 2, sound: "/sound/1.mp3" },
    ],
  },
];
export const gloryButton = [
  {
    id: 1,
    Title: "دستاوردها",
    img: "/icon/award.svg",
    href: "/achievements",
  },
  {
    id: 2,
    Title: "رضایت‌ مندی",
    img: "/icon/image-370.svg",
    href: "/satisfaction",
  },
];
export const AchievementsButton = [
  {
    id: 1,
    Title: "دانشجویان",
    img: "/icon/image-373.svg",
    href: "/Students",
  },
  {
    id: 2,
    Title: "فارغ التحصیلان",
    img: "/icon/image-375.svg",
    href: "/mastersGraduates",
  },
  {
    id: 3,
    Title: "کتب و مقالات",
    img: "/icon/image-377.svg",
    href: "#",
  },
];
export const MastersGraduatesButton = [
  {
    id: 1,
    img: "/icon/image-380.svg",
    Title: "عباس صبوری- مدیریت بازرگانی-بازاریابی",
    shortTitle: "مهر 1400-کارشناسی‌ارشد تهران",
  },
  {
    id: 2,
    img: "/icon/image-380.svg",
    Title: "عباس صبوری- مدیریت بازرگانی-بازاریابی",
    shortTitle: "مهر 1400-کارشناسی‌ارشد تهران",
  },
];
