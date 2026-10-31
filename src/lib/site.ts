export const SITE = {
  name: "ویژن",
  nameEn: "VISION",
  tagline: "آتلیه شیشه و آلومینیوم",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vision-glass.ir",
  phone: "021-12345678",
  mobile: "09120000000",
  whatsapp: "989120000000",
  instagram: "vision.glass",
  address: "تهران، خیابان ولیعصر، شوروم ویژن",
  hours: "شنبه تا پنجشنبه، ۹ تا ۱۸",
};

export type Category = {
  slug: string;
  name: string;
  latin: string;
  num: string;
  title: string;
  description: string;
  intro: string;
  cover: string;
};

// All bundled showroom images live under public/images/vision.
export const px = (id: number) => `/images/vision/pexels-photo-${id}.webp`;

export const HERO = [px(8082312), px(8134762), px(13752348)];

export const CATEGORIES: Category[] = [
  {
    slug: "partition",
    name: "پارتیشن",
    latin: "Partition",
    num: "۰۱",
    title: "پارتیشن شیشه‌ای و اداری | طراحی و اجرا",
    description:
      "طراحی و اجرای پارتیشن شیشه‌ای سکوریت، پارتیشن دوجداره و تک‌جداره اداری و مسکونی با پروفیل آلومینیوم توسط ویژن.",
    intro:
      "دیوارهایی از نور. پارتیشن‌های شیشه‌ای سکوریت با فریم‌های باریک آلومینیومی؛ برای دفاتری که نفس می‌کشند و خانه‌هایی که بزرگ‌تر دیده می‌شوند.",
    cover: px(7534179),
  },
  {
    slug: "handrail",
    name: "هندریل",
    latin: "Handrail",
    num: "۰۲",
    title: "هندریل شیشه‌ای و نرده استیل | راه‌پله و بالکن",
    description:
      "اجرای هندریل شیشه‌ای، نرده استیل و آلومینیوم برای راه‌پله، بالکن و تراس با ایمنی بالا و طراحی مینیمال.",
    intro:
      "خطی نامرئی میان امنیت و زیبایی. هندریل‌های تمام‌شیشه و استیل برای راه‌پله، نیم‌طبقه و بالکن؛ بدون قاب، بدون اغراق.",
    cover: px(8134762),
  },
  {
    slug: "shower-cabin",
    name: "کابین دوش",
    latin: "Shower Cabin",
    num: "۰۳",
    title: "کابین دوش شیشه‌ای سکوریت | انواع ثابت و کشویی",
    description:
      "کابین دوش شیشه‌ای سکوریت در مدل‌های لولایی، کشویی و ثابت با یراق‌آلات استیل؛ ساخت در ابعاد دلخواه.",
    intro:
      "حمامی در حد هتل‌های پنج‌ستاره. کابین دوش با شیشه سکوریت و یراق استیل، ساخته‌شده دقیقاً به اندازه فضای شما.",
    cover: px(8082223),
  },
  {
    slug: "door",
    name: "درب",
    latin: "Door",
    num: "۰۴",
    title: "درب شیشه‌ای و آلومینیومی | اتوماتیک، لولایی، کشویی",
    description:
      "درب شیشه‌ای سکوریت، درب آلومینیومی و درب اتوماتیک برای ورودی ساختمان، مغازه و فضای اداری.",
    intro:
      "ورودی‌ای که قبل از شما حرف می‌زند. درب‌های شیشه‌ای و آلومینیومی با جک کف، لولا و دستگیره‌های استیل.",
    cover: px(13068373),
  },
  {
    slug: "window",
    name: "پنجره",
    latin: "Window",
    num: "۰۵",
    title: "پنجره آلومینیومی و دوجداره | عایق صدا و حرارت",
    description:
      "پنجره آلومینیومی ترمال‌بریک و دوجداره با عایق صوتی و حرارتی بالا برای ساختمان‌های مسکونی و تجاری.",
    intro:
      "قابی برای آسمان. پنجره‌های ترمال‌بریک با شیشه دوجداره؛ نور بیشتر، صدای کمتر، مصرف انرژی پایین‌تر.",
    cover: px(8082312),
  },
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
