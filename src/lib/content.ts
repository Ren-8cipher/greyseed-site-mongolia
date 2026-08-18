export type Lang = "mn" | "en";

export const t = {
  nav: {
    about: { mn: "Бидний тухай", en: "About" },
    dishes: { mn: "Онцлох хоол", en: "Signature" },
    reviews: { mn: "Сэтгэгдэл", en: "Reviews" },
    gallery: { mn: "Галерей", en: "Gallery" },
    locations: { mn: "Салбарууд", en: "Locations" },
  },
  hero: {
    eyebrow: { mn: "Улаанбаатар · 2 салбар", en: "Ulaanbaatar · 2 branches" },
    title: { mn: "Дэлхийн амтыг нэг дор", en: "Globally Inspired Dining, All Day" },
    sub: { mn: "Өдөр бүр 12:00–23:00 цагт үйлчилнэ", en: "Open daily 12:00–23:00" },
    menu: { mn: "Цэс үзэх", en: "View Menu" },
    reserve: { mn: "Ширээ захиалах", en: "Reserve a Table" },
  },
  about: {
    kicker: { mn: "Бидний тухай", en: "About us" },
    title: { mn: "Тайван уур амьсгал, дэлхийн амт", en: "Relaxed atmosphere, global flavours" },
    body: {
      mn: "GREYSEED бол Улаанбаатарын хоёр салбартай, өдөржин үйлчилдэг casual dining & lifestyle ресторан. Ази, Мексик, Газар дундын тэнгис болон Америк хоолны онцлогийг нэгтгэсэн дэлхийн амтат цэс, дулаахан гэрэлтүүлэг, ногоон ханатай тайван орчинд та найз нөхөд, гэр бүлээрээ амтархан хооллоорой.",
      en: "GREYSEED is a casual dining & lifestyle restaurant with two branches in Ulaanbaatar, serving all day. A globally inspired menu spanning Asian, Mexican, Mediterranean and American dishes, served in a warm, plant-filled space made for friends and family.",
    },
    stats: [
      { v: "2", l: { mn: "Салбар", en: "Branches" } },
      { v: "12:00–23:00", l: { mn: "Өдөр бүр", en: "Daily" } },
      { v: "4+", l: { mn: "Тивийн амт", en: "Cuisines" } },
    ],
  },
  dishes: {
    kicker: { mn: "Онцлох хоол", en: "Signature dishes" },
    title: { mn: "Хамгийн их захиалагддаг", en: "Most loved by our guests" },
    cta: { mn: "Цэс бүтнээр үзэх", en: "See full menu" },
  },
  reviews: {
    kicker: { mn: "Google Reviews", en: "Google Reviews" },
    title: { mn: "Үйлчлүүлэгчдийн сэтгэгдэл", en: "What our guests say" },
    source: { mn: "Google-ээс", en: "via Google" },
    localGuide: { mn: "Local Guide", en: "Local Guide" },
  },
  gallery: {
    kicker: { mn: "Галерей", en: "Gallery" },
    title: { mn: "Дотоод орчин", en: "Inside GREYSEED" },
  },
  locations: {
    kicker: { mn: "Салбарууд", en: "Locations" },
    title: { mn: "Бидэнтэй уулзая", en: "Come and find us" },
    hours: { mn: "Өдөр бүр 12:00–23:00", en: "Daily 12:00–23:00" },
    call: { mn: "Залгах", en: "Call now" },
    vip: {
      mn: "VIP тасалгаа (6–10 хүн) зөвхөн Minister салбарт захиалгаар.",
      en: "VIP room (6–10 guests) available by reservation at the Minister branch only.",
    },
  },
  reserve: {
    title: { mn: "Ширээгээ өнөөдөр захиалаарай", en: "Reserve your table today" },
    sub: {
      mn: "Хүссэн салбар руугаа шууд залгаад ширээгээ баталгаажуулаарай.",
      en: "Call your preferred branch directly to confirm your table.",
    },
  },
  footer: {
    tagline: { mn: "Everything GREY. Everything SEED.", en: "Everything GREY. Everything SEED." },
    links: { mn: "Хурдан холбоос", en: "Quick links" },
    rights: { mn: "Бүх эрх хуулиар хамгаалагдсан.", en: "All rights reserved." },
  },
} as const;

export const dishes = [
  {
    img: "ribeye",
    mn: "Рибай стейк",
    en: "Ribeye Steak",
    price: "71,900₮",
    descMn: "Хар перчний сумс, хуурсан ногоо, нухсан төмс",
    descEn: "Pepper sauce, grilled vegetables, mash",
  },
  {
    img: "burger",
    mn: "Фэт бургер",
    en: "Fat Burger",
    price: "38,900₮",
    descMn: "Давхар үхрийн махан котлет, бяслаг, шарсан төмс",
    descEn: "Double beef patty, cheese, fries",
  },
  {
    img: "salmon",
    mn: "Яргай загасны стейк",
    en: "Salmon Steak",
    price: "73,900₮",
    descMn: "Ризотто будаа, хуурсан ногоо, цагаан сумс",
    descEn: "Risotto, pan fried vegetables, white sauce",
  },
  {
    img: "steaksalad",
    mn: "Маханд дурлагсад салат",
    en: "Steak Salad",
    price: "39,900₮",
    descMn: "Стейк мах, салат навч, улаан лооль, пармезан",
    descEn: "Beef steak, mixed greens, cherry tomato, parmesan",
  },
  {
    img: "platter",
    mn: "Махан платтер",
    en: "Meat Platter",
    price: "129,900₮",
    descMn: "Хосолсон шарсан мах, шорлог, төмс, салат",
    descEn: "Assorted grilled meats, skewers, potatoes, salad",
  },
  {
    img: "beetroot",
    mn: "Хүрэн манжингийн салат",
    en: "Beetroot Salad",
    price: "34,900₮",
    descMn: "Салат навч, хушга, ямааны бяслаг, жүрж жимс",
    descEn: "Lettuce, walnut, goat cheese, orange",
  },
] as const;

export const reviews = [
  {
    name: "chingoon",
    guide: true,
    count: "113",
    mn: "Мексик шар айраг үнэхээр амттай байлаа. Анхааралтай зөөгчид үйлчилгээг улам тав тухтай болгосон. Хотын төвд салбар нээгдсэн нь маш сайхан байна.",
    en: "The Mexican beer was really delicious. The attentive waiters made the experience even more enjoyable. Great that they've opened a branch in the city center.",
  },
  {
    name: "Saikhnaa",
    guide: true,
    count: "1,245",
    mn: "Хоол нь жинхэнэ Greyseed-тэй адилхан амттай. Fat Burger гайхалтай, steak salad арай исгэлэн ч сайн байсан, үйлчилгээ маш чадварлаг, найрсаг байлаа. Интерьер үзэсгэлэнтэй бөгөөд Хүүхдийн зоо салбараас хамаагүй уужим байна.",
    en: "The food tastes just like the original Greyseed. The Fat Burger was great, the steak salad was good — a touch acidic, but good — and service was skilled and friendly. The interior is beautiful and much more spacious than the Huuhdiin Zoo branch.",
  },
  {
    name: "Zaya Jargalsaikhan",
    guide: false,
    count: null,
    mn: "Тав тухтай, дулаахан уур амьсгал 😍",
    en: "Cozy and comfortable 😍",
  },
  {
    name: "Odbileg Bayartogtokh",
    guide: false,
    count: null,
    mn: "Хоол: 5, Үйлчилгээ: 5",
    en: "Food: 5, Service: 5",
  },
] as const;

export const branches = [
  {
    name: "GREYSEED 100",
    addrMn: "Хүүхдийн 100, Наран дэлгүүрийн зүүн талд",
    addrEn: "Khuukhdiin 100, east side of Naran store",
    phone: "7717-2323",
    tel: "+97677172323",
  },
  {
    name: "GREYSEED MINISTER",
    addrMn: "Министер Тауэр, 3-р давхар, урд лифтээр орох",
    addrEn: "Minister Tower, 3rd floor, use the front lift",
    phone: "7703-2828",
    tel: "+97677032828",
  },
] as const;
