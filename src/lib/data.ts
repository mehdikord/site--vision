import { px } from "./site";

export type Product = {
  id: number;
  slug: string;
  category: string;
  title: string;
  summary: string;
  description: string;
  specs: string; // one per line "key: value"
  images: string[];
  sort: number;
};

export type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
};

const PRODUCTS: Product[] = [
  { id: 1, slug: "glass-partition-single", category: "partition", title: "پارتیشن شیشه‌ای تک‌جداره", summary: "سکوریت ۱۰ میل با فریم باریک آلومینیومی", description: "پارتیشن تک‌جداره برای تفکیک فضاهای اداری بدون از دست دادن نور طبیعی. قابل اجرا با شیشه ساده، مات، دودی یا برچسب‌دار؛ با درب لولایی یا کشویی هماهنگ.", specs: "ضخامت شیشه: ۱۰ میلی‌متر سکوریت\nپروفیل: آلومینیوم آنودایز\nرنگ‌بندی: مشکی، نقره‌ای، سفید، شامپاینی", images: [px(7534179), px(7534185), px(7750140)], sort: 1 },
  { id: 2, slug: "glass-partition-double", category: "partition", title: "پارتیشن دوجداره آکوستیک", summary: "دو لایه شیشه با کرکره میانی و عایق صدا", description: "انتخاب اتاق مدیریت و جلسات؛ دو جداره شیشه با امکان نصب کرکره بین شیشه‌ها و کاهش محسوس صدای محیط.", specs: "ضخامت کل: ۸۰ میلی‌متر\nکاهش صدا: تا ۴۰ دسی‌بل\nآپشن: کرکره ولومی بین شیشه", images: [px(931887), px(13068373)], sort: 2 },
  { id: 3, slug: "glass-handrail", category: "handrail", title: "هندریل تمام‌شیشه بدون فریم", summary: "لمینت سکوریت در ریل مخفی کف", description: "هندریل تمام‌شیشه برای راه‌پله و نیم‌طبقه؛ دید کامل، خطوط تمیز و ظاهری کاملاً مینیمال. شیشه لمینت برای ایمنی حداکثری.", specs: "شیشه: لمینت سکوریت ۱۲+۱۲\nریل: استیل ۳۰۴ مخفی در کف\nهندریل دست: استیل، چوب یا بدون دستگیره", images: [px(8134762), px(7018824)], sort: 1 },
  { id: 4, slug: "steel-handrail", category: "handrail", title: "هندریل استیل و شیشه", summary: "پایه استیل براش با پنل شیشه", description: "ترکیب کلاسیک پایه‌های استیل و پنل شیشه‌ای؛ مناسب بالکن، تراس و راه‌پله‌های پرتردد با بودجه کنترل‌شده.", specs: "استیل: ۳۱۶ ضدزنگ\nارتفاع استاندارد: ۱۰۰ سانتی‌متر\nمناسب: فضای باز و داخلی", images: [px(6283965), px(38975398)], sort: 2 },
  { id: 5, slug: "sliding-shower", category: "shower-cabin", title: "کابین دوش کشویی", summary: "ریل استیل با درب کشویی نرم", description: "کابین کشویی برای حمام‌های کم‌عرض؛ بدون نیاز به فضای باز شدن درب. ریل روان با توقف نرم و آب‌بندی کامل.", specs: "شیشه: ۸ میلی‌متر سکوریت\nیراق: استیل ضدزنگ\nساخت: کاملاً سفارشی در ابعاد شما", images: [px(8082223), px(6587852)], sort: 1 },
  { id: 6, slug: "hinged-shower", category: "shower-cabin", title: "کابین دوش لولایی", summary: "لولای شیشه‌به‌دیوار با حداقل یراق", description: "تمیزترین فرم کابین دوش؛ درب لولایی با لولای شیشه‌به‌دیوار و حداقل یراق‌آلات. قابل ساخت در هر ابعاد و فرم گوشه.", specs: "شیشه: ۱۰ میلی‌متر سکوریت\nلولا: استیل ۱۸۰ درجه\nآب‌بندی: نوار مگنتی و سیلیکون", images: [px(6394530), px(6585765)], sort: 2 },
  { id: 7, slug: "glass-entrance-door", category: "door", title: "درب ورودی شیشه‌ای", summary: "سکوریت ۱۲ میل با جک کف", description: "درب شیشه‌ای برای ورودی مغازه، دفتر و لابی ساختمان؛ با جک کف‌خواب، دستگیره استیل و قفل اختصاصی.", specs: "شیشه: ۱۲ میلی‌متر سکوریت\nجک: کف‌خواب با تنظیم سرعت\nدستگیره: استیل H و خطی", images: [px(13068373), px(39563006)], sort: 1 },
  { id: 8, slug: "aluminium-door", category: "door", title: "درب آلومینیومی داخلی", summary: "فریم باریک با شیشه مات یا رفلکس", description: "درب داخلی با فریم باریک آلومینیوم برای فضاهای مسکونی مدرن؛ سبک، مقاوم و هماهنگ با پارتیشن‌ها.", specs: "فریم: آلومینیوم آنودایز\nشیشه: مات، دودی یا رفلکس\nرنگ: مشکی، سفید، نقره‌ای", images: [px(7534185), px(7750140)], sort: 2 },
  { id: 9, slug: "thermal-break-window", category: "window", title: "پنجره ترمال‌بریک", summary: "عایق حرارتی و صوتی با دوجداره", description: "پنجره‌های ترمال‌بریک برای کاهش اتلاف انرژی و حذف صدای شهر؛ با شیشه دوجداره و یراق دوحالته.", specs: "شیشه: دوجداره ۶-۱۶-۶\nبازشو: لولایی، کشویی، دوحالته\nپروفیل: ترمال‌بریک", images: [px(8082312), px(6580239)], sort: 1 },
  { id: 10, slug: "sliding-window", category: "window", title: "پنجره کشویی قاب‌باریک", summary: "بازشوی بزرگ با قاب حداقلی", description: "پنجره و درب کشویی با قاب باریک برای ارتباط حداکثری با فضای بیرون؛ ایده‌آل برای تراس، حیاط و استخر.", specs: "عرض قاب: ۲۰ میلی‌متر\nشیشه: دوجداره سکوریت\nریل: روان با تحمل وزن بالا", images: [px(36710315), px(31817162)], sort: 2 },
];

const PROJECTS: Project[] = [
  { id: 1, title: "دفتر مرکزی یک شرکت فناوری", category: "partition", location: "تهران، سعادت‌آباد", description: "۲۲۰ متر پارتیشن تک‌جداره با درب‌های کشویی", image: px(7534185) },
  { id: 2, title: "ویلای مدرن", category: "handrail", location: "لواسان", description: "هندریل تمام‌شیشه راه‌پله و نیم‌طبقه", image: px(8134762) },
  { id: 3, title: "پنت‌هاوس با چشم‌انداز شهر", category: "window", location: "تهران، الهیه", description: "پنجره‌های ترمال‌بریک قدی", image: px(8082312) },
  { id: 4, title: "سوئیت مستر", category: "shower-cabin", location: "تهران، زعفرانیه", description: "کابین دوش لولایی با دیوار مرمر", image: px(8082223) },
  { id: 5, title: "لابی برج اداری", category: "door", location: "تهران، ونک", description: "درب‌های ورودی شیشه‌ای با جک کف", image: px(13068373) },
  { id: 6, title: "سوئیت با چشم‌انداز استخر", category: "window", location: "کردان", description: "درب و پنجره کشویی قاب‌باریک", image: px(36710315) },
];

export async function getProducts(category?: string) {
  return category
    ? PRODUCTS.filter((p) => p.category === category).sort((a, b) => a.sort - b.sort || b.id - a.id)
    : [...PRODUCTS].sort((a, b) => a.category.localeCompare(b.category) || a.sort - b.sort);
}

export async function getProduct(category: string, slug: string) {
  return PRODUCTS.find((p) => p.category === category && p.slug === slug);
}

export async function getProjects(category?: string) {
  const items = category ? PROJECTS.filter((p) => p.category === category) : [...PROJECTS];
  return items.sort((a, b) => b.id - a.id);
}
