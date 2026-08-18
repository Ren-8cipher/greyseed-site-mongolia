export type MenuItem = {
  n: string;
  en: string;
  mn: string;
  descEn: string;
  descMn: string;
  price: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  en: string;
  mn: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "starter",
    en: "Starter",
    mn: "Зууш",
    items: [
      {
        n: "1",
        en: "Chicken Taco",
        mn: "Тако",
        descEn: "taco, chicken, cheese, salsa (one piece)",
        descMn: "тако гурил, тахианы мах, бяслаг, салса (нэг ширхэг)",
        price: "11,000₮",
        note: "spicy",
      },
      {
        n: "2",
        en: "Cheesy French Fries",
        mn: "Халуун ногоотой үхрийн мах, бяслагтай төмс",
        descEn: "french fries, minced beef, cheese, jalapeno",
        descMn: "шарсан төмс, үхрийн татсан мах, бяслаг, халуун ногоо",
        price: "32,900₮",
        note: "spicy",
      },
    ],
  },
  {
    id: "soup",
    en: "Soup",
    mn: "Шөл",
    items: [
      {
        n: "3",
        en: "Spicy Seafood Soup",
        mn: "Халуун ногоотой далайн шөл",
        descEn: "seafood, spicy broth",
        descMn: "далайн бүтээгдэхүүн, халуун ногоотой шөл",
        price: "39,900₮",
        note: "spicy",
      },
      {
        n: "4",
        en: "Bone Soup",
        mn: "Ясны шөлтэй рамен",
        descEn: "beef, noodle, bok choy, parsley, bone broth",
        descMn: "үхрийн мах, рамен гоймон, юуцай, яншуй, ясны шөл",
        price: "37,900₮",
      },
      {
        n: "5",
        en: "Pumpkin Soup",
        mn: "Хулууны зутан шөл",
        descEn: "pumpkin, cream",
        descMn: "хулуу, цөцгий",
        price: "29,900₮",
      },
    ],
  },
  {
    id: "salad",
    en: "Salad",
    mn: "Салат",
    items: [
      {
        n: "6",
        en: "Salmon Salad",
        mn: "Утсан яргай загастай салат",
        descEn: "smoked salmon, mixed salad greens, cherry tomato, cucumber, radish, feta cheese",
        descMn:
          "яргай загас, салат навч, бууцай, кэйл навч, өргөст хэмх, улаан лооль, редиск, фета бяслаг",
        price: "38,900₮",
      },
      {
        n: "7",
        en: "Steak Salad",
        mn: "Маханд дурлагсад салат",
        descEn: "beef steak, mixed salad greens, cherry tomato, cucumber, radish, parmesan",
        descMn:
          "стейк мах, салат навч, бууцай, кэйл навч, өргөст хэмх, улаан лооль, редиск, пармезан бяслаг",
        price: "39,900₮",
        note: "primeat",
      },
      {
        n: "8",
        en: "Beetroot Salad",
        mn: "Хүрэн манжингийн салат",
        descEn: "lettuce, beetroot, walnut, goat cheese, orange fruit",
        descMn: "салат навч, хүрэн манжин, хушга, ямааны бяслаг, жүрж жимс",
        price: "34,900₮",
      },
    ],
  },
  {
    id: "main",
    en: "Main Dish",
    mn: "Үндсэн хоол",
    items: [
      {
        n: "9",
        en: "Ribeye Steak",
        mn: "Рибай стейк",
        descEn: "ribeye steak with pepper sauce, grilled vegetables and mash",
        descMn: "хар перчний сумс, хуурсан ногоо, нухсан төмс",
        price: "71,900₮",
        note: "primeat",
      },
      {
        n: "10",
        en: "Salmon Steak",
        mn: "Яргай загасны стейк",
        descEn: "salmon steak, risotto, pan fried vegetables, white sauce",
        descMn: "яргай загас, ризотто будаа, хуурсан ногоо, цагаан сумс",
        price: "73,900₮",
      },
      {
        n: "11",
        en: "Teriyaki Chicken",
        mn: "Терияки тахиа",
        descEn: "mashed potatoes, green salad, teriyaki sauce",
        descMn: "нухсан төмс, ногооны салад, терияки соус",
        price: "45,900₮",
      },
      {
        n: "12",
        en: "Asian Steak",
        mn: "Ази стейк",
        descEn: "chuck roll, bok choy, pan fried vegetables, rice",
        descMn: "үхрийн нурууны мах, юуцай, хуурсан ногоо, будаа",
        price: "67,900₮",
        note: "primeat",
      },
      {
        n: "13",
        en: "Pan Seared White Fish",
        mn: "Цагаан загас",
        descEn: "white fish, tomato marinara sauce, rocket lettuce",
        descMn: "цагаан загас, улаан лоолийн маринара соус, рокет салад",
        price: "49,900₮",
      },
      {
        n: "14",
        en: "Pork Chop",
        mn: "Гахайн нурууны стейк",
        descEn: "pork chop, mash, apple, mango sauce",
        descMn: "гахайн нуруу, нухсан төмс, жигнэсэн алим, манго сумс",
        price: "62,900₮",
      },
    ],
  },
  {
    id: "pasta",
    en: "Pasta",
    mn: "Паста",
    items: [
      {
        n: "15",
        en: "Carbonara",
        mn: "Карбонара",
        descEn: "bacon, creamy sauce",
        descMn: "гахайн утсан мах, цөцгийн сумс",
        price: "41,900₮",
      },
      {
        n: "16",
        en: "Tomato Seafood Pasta",
        mn: "Далайн бүтээгдэхүүнтэй паста",
        descEn: "seafood mix, creamy tomato sauce",
        descMn: "холимог далайн бүтээгдэхүүн, улаан лооль сүүн кремний сумс",
        price: "42,900₮",
      },
      {
        n: "17",
        en: "Linguine Pasta with Steak",
        mn: "Стейктэй лингуини паста",
        descEn: "linguine pasta, prime steak, creamy sauce, blue cheese",
        descMn: "лингуини гоймон, үхрийн нурууны махан стейк, хөгцтэй бяслаг, цөцгийн сумс",
        price: "44,900₮",
        note: "primeat",
      },
      {
        n: "18",
        en: "Linguine with Chicken",
        mn: "Тахианы махтай лингуини паста",
        descEn: "grilled chicken, linguine, bell pepper sauce, heavy cream, parmesan cheese",
        descMn: "шарсан тахиа, лингуини, бэл чинжүү сумс, өтгөн цөцгий, пармизан бяслаг",
        price: "38,900₮",
      },
    ],
  },
  {
    id: "asian",
    en: "Asian",
    mn: "Ази",
    items: [
      {
        n: "19",
        en: "Mexican Beef",
        mn: "Мексик халуун ногоотой гоймон",
        descEn: "spicy minced beef, noodle, jalapeno, sweet pepper, sprouts, bok choy",
        descMn:
          "үхрийн татсан мах, нарийн гоймон, мексик халуун чинжүү, амтат чинжүү, буурцагны соёолж, юуцай",
        price: "34,900₮",
        note: "spicy",
      },
      {
        n: "20",
        en: "Beef Broccoli",
        mn: "Үхрийн махтай броккли",
        descEn: "beef, broccoli, fried rice",
        descMn: "үхрийн мах, цэцэгт байцаа, амталсан будаа",
        price: "34,900₮",
      },
      {
        n: "21",
        en: "Rice Noodle with Beef Brisket",
        mn: "Үхрийн өвчүүтэй будааны гоймон",
        descEn: "beef brisket, rice noodle, vegetables, peanut",
        descMn: "үхрийн өвчүү, будааны гоймон, нарийн ногоо, газрын самар",
        price: "34,900₮",
      },
      {
        n: "22",
        en: "Green Curry Chicken",
        mn: "Тайланд карритай тахиа",
        descEn: "Thai green curry with chicken & coconut rice, green zucchini, eggplant, broccoli",
        descMn: "тахианы мах, ногоон карри, будаа, хулуу, хаш, амтат чинжүү, цэцэгт байцаа, лууван",
        price: "34,900₮",
      },
      {
        n: "23",
        en: "Massaman Chicken",
        mn: "Массаман тахиа",
        descEn: "massaman chicken with coconut rice, green zucchini, eggplant, broccoli, carrot",
        descMn: "тахианы мах, будаа, массаман сумс, хулуу, хаш, амтат чинжүү, цэцэгт байцаа, лууван",
        price: "34,900₮",
        note: "spicy",
      },
      {
        n: "24",
        en: "Rice Bowl",
        mn: "Амталж хуурсан будаа",
        descEn:
          "fried rice, egg, broccoli, tomato, cucumber / smoked beef brisket, grilled chicken, pork / sauce: teriyaki, sweet chili, spicy mayo",
        descMn:
          "будаа, өндөг, цэцэгт байцаа, улаан лооль, өргөст хэмх / утсан үхрийн өвчүү, гриллдсэн тахиа, гахайн мах / соус: терияки, чихэрлэг чили, халуун ногоотой маёо",
        price: "36,900₮",
      },
      {
        n: "25",
        en: "Lamb Skewer",
        mn: "Хонины махан шорлог",
        descEn: "smoked lamb, fried rice, fresh green salad, bread",
        descMn: "хонины мах, амталсан будаа, шинэ ногооны салат, шарсан талх",
        price: "44,900₮",
      },
      {
        n: "26",
        en: "Chicken Skewer",
        mn: "Тахианы махан шорлог",
        descEn: "chicken, fried rice, sauce, fresh green salad, bread",
        descMn: "тахианы мах, амталсан будаа, сумс, шинэ ногооны салат, шарсан талх",
        price: "42,900₮",
      },
    ],
  },
  {
    id: "burger",
    en: "Burger",
    mn: "Бургер",
    items: [
      {
        n: "27",
        en: "Fat Burger",
        mn: "Бүдүүн бургер",
        descEn: "beef brisket, beef patty, bacon, cheese, tomato, iceberg, onion, sauce, fries",
        descMn:
          "үхрийн өвчүү, үхрийн татсан мах, гахайн утсан мах, бяслаг, улаан лооль, салат навч, сонгино, сумс, шарсан төмс",
        price: "42,900₮",
        note: "primeat",
      },
      {
        n: "28",
        en: "Brisket Burger",
        mn: "Үхрийн өвчүүтэй бургер",
        descEn: "beef brisket, cheese, tomato, iceberg, onion, sauce, fries",
        descMn: "үхрийн өвчүү, бяслаг, улаан лооль, салат навч, сонгино, сумс, шарсан төмс",
        price: "39,900₮",
      },
      {
        n: "29",
        en: "Original Burger",
        mn: "Үхрийн махтай бургер",
        descEn: "beef patty, cheese, tomato, iceberg, onion, sauce, fries",
        descMn: "үхрийн татсан мах, бяслаг, улаан лооль, салат навч, сонгино, сумс, шарсан төмс",
        price: "36,900₮",
      },
      {
        n: "30",
        en: "Chicken Burger",
        mn: "Тахианы махтай бургер",
        descEn: "chicken, cheese, tomato, iceberg, sauce, fries",
        descMn: "тахианы мах, бяслаг, улаан лооль, салат навч, сумс, шарсан төмс",
        price: "34,900₮",
      },
    ],
  },
  {
    id: "pizza",
    en: "Pizza",
    mn: "Пицца",
    items: [
      {
        n: "31",
        en: "Butter Chicken Pizza",
        mn: "Цөцгийн тос тахианы махан пицца",
        descEn: 'Indian style butter chicken, housemade pizza sauce, cheese — 13"',
        descMn: "энэтхэг маягаар амталсан тахианы мах, пицца сумс, моцарелла бяслаг — 13”",
        price: "43,900₮",
      },
      {
        n: "32",
        en: "Meat Lovers",
        mn: "Маханд дурлагсад",
        descEn: 'housemade pizza sauce, beef, chicken, bacon, sweet pepper, cheese — 13"',
        descMn: "пицца сумс, үхрийн мах, тахианы мах, гахайн утсан мах, чинжүү, бяслаг — 13”",
        price: "44,900₮",
      },
      {
        n: "33",
        en: "Mexican",
        mn: "Мексик пицца",
        descEn:
          'housemade pizza sauce, minced beef, mexican hot pepper, corn, tortilla chips, cheese — 13"',
        descMn:
          "пицца сумс, үхрийн татсан мах, мексик чинжүү, эрдэнэшиш, тортилла чипс, бяслаг — 13”",
        price: "44,900₮",
        note: "spicy",
      },
      {
        n: "34",
        en: "Pepperoni",
        mn: "Пепперони",
        descEn: 'housemade pizza sauce, pepperoni, cheese — 13"',
        descMn: "пицца сумс, салями, бяслаг — 13”",
        price: "44,900₮",
      },
    ],
  },
  {
    id: "share",
    en: "Share Food",
    mn: "Хуваалцах хоол",
    items: [
      {
        n: "35",
        en: "Meat Platter",
        mn: "Махан цуглуулга",
        descEn:
          "smoked beef brisket, grilled chicken, lamb skewer, chicken skewer, sausage, fries, vegetables, salad, onion ring, coconut rice, sauce",
        descMn:
          "утсан өвчүүний мах, гриллдсэн тахиа, хонины шорлог, тахианы шорлог, шарсан зайдас, шарсан төмс, хуурсан ногоо, салат, бүрж шарсан цагаргин сонгино, будаа, сумс",
        price: "259,900₮",
      },
      {
        n: "36",
        en: "Grilled Meat Salad",
        mn: "Маханд дурлагсад салат",
        descEn:
          "beef steak, chicken, bacon, mixed salad greens, cherry tomato, cucumber, radish, parmesan (Large)",
        descMn:
          "стейк мах, тахианы мах, гахайн утсан мах, салат навч, бууцай, кэйл навч, өргөст хэмх, улаан лооль, редиск, пармезан бяслаг (Large)",
        price: "69,000₮",
      },
      {
        n: "37",
        en: "Smoked Salmon Salad",
        mn: "Утсан яргай загастай салат",
        descEn:
          "smoked salmon, mixed salad greens, cherry tomato, cucumber, radish, feta cheese (Large)",
        descMn:
          "утсан яргай загас, салат навч, бууцай, кэйл навч, өргөст хэмх, улаан лооль, редиск, фета бяслаг (Large)",
        price: "69,000₮",
      },
      {
        n: "38",
        en: "Rice Bowl with 3 Meats",
        mn: "Амталж хуурсан будаа /3 төрлийн махтай/",
        descEn:
          "egg fried rice, egg, broccoli, tomato, cucumber, smoked beef brisket, grilled chicken, pork (Large)",
        descMn:
          "будаа, өндөг, цэцэгт байцаа, улаан лооль, өргөст хэмх, утсан үхрийн өвчүү, гриллдсэн тахиа, гахайн мах (Large)",
        price: "75,000₮",
      },
      {
        n: "39",
        en: "Baked Brie Platter",
        mn: "Жигнэсэн бри бяслагтай платтер",
        descEn: "baked brie, grapes, olives, cherry tomato, grissini",
        descMn: "жигнэсэн бри бяслаг, усан үзэм, чидун, улаан лооль, гриссини талх",
        price: "46,900₮",
      },
    ],
  },
  {
    id: "dessert",
    en: "Dessert",
    mn: "Амттан",
    items: [
      {
        n: "",
        en: "Affogato",
        mn: "Аффогато",
        descEn: "espresso, vanilla ice cream",
        descMn: "эспрессо, ванилийн зайрмаг",
        price: "16,000₮",
      },
      {
        n: "",
        en: "Mixed Ice Cream",
        mn: "Холимог зайрмаг",
        descEn: "assorted ice cream scoops",
        descMn: "холимог зайрмаг",
        price: "22,900₮",
      },
      {
        n: "",
        en: "Cheese Cake",
        mn: "Чиз кейк",
        descEn: "classic cheesecake, berry sauce",
        descMn: "сонгодог чиз кейк, жимсний сумс",
        price: "22,900₮",
      },
    ],
  },
];

export const menuNotes = {
  mn: [
    "НӨАТ 10%, НХАТ 2% багтсан ба үйлчилгээний 5% ороогүй болно.",
    "Үйлчилгээний мөнгө нь нийт ажилчдад өгөх цайны мөнгөн урамшуулал ба байгууллага тухайн мөнгөнөөс авдаггүй болно.",
    "Танд харшлах хүнсний бүтээгдэхүүн таны сонгосон хоолонд байгаа эсэхийг лавлаарай.",
  ],
  en: [
    "Prices include 10% VAT and 2% City tax, and do not include a 5% service charge.",
    "The service charge goes entirely to our staff as a tip.",
    "Please inform the server if you have any allergic ingredients.",
  ],
};
