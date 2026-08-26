# Greyseed Dining Hub

Build a highly polished, professional, mobile-first one-page landing site for GREYSEED — a "Casual Dining & Lifestyle Restaurant" in Ulaanbaatar, Mongolia, with a globally-inspired all-day dining menu across two branches (GREYSEED 100 and GREYSEED MINISTER).

Language: Bilingual, Mongolian-first

Default language is Mongolian (Cyrillic) — all primary copy, nav, buttons, and testimonials should read in Mongolian by default.

Include a small, unobtrusive language toggle (МОН / EN) in the top nav, top-right, that swaps all text to English on click. Persist the choice in local state.

Make sure the font stack fully supports Cyrillic (e.g., Inter, PT Sans, or Noto Sans for body; a Cyrillic-friendly serif like PT Serif or Noto Serif for headings — avoid decorative fonts that break on Cyrillic characters).

Priority: Mobile-first

Design and build for a ~390px mobile viewport first, then scale up to tablet and desktop.

Sticky bottom bar on mobile with two thumb-friendly buttons: "Ширээ захиалах" (Reserve) and "Цэс үзэх" (View Menu).

Hamburger nav on mobile; horizontal nav on desktop.

Images should be responsive/lazy-loaded, with mobile-optimized crops for the hero section so faces/subjects aren't cropped awkwardly.

Tap targets minimum 44px, generous vertical spacing for one-handed scrolling.

Brand & Visual Identity

Logo: circular emblem, "GREYSEED" arced over a minimalist line-art leaf/sprig icon, tagline "CASUAL DINING & LIFESTYLE RESTAURANT" curved beneath. Deep navy/steel blue background (#2E4B6B range) with sage/mint-cream line art.

Interior photography is moody, upscale-casual: charcoal walls, warm gold/amber accent lighting, black wine racks with hanging greenery, herringbone wood flooring, dusty pink and slate-blue velvet chairs.

Printed menu uses a navy header band with elegant script typography, paired with sage-green body sections — echo this palette site-wide.

Color Theme

Primary: deep navy (#1F3B5C–#2E4B6B)

Secondary: sage green (#B8C4B0) and warm gold (#C9A15A)

Background: warm cream (#F4F1EA)

Text: charcoal for body, navy/gold for headings

Site Structure & Sections

Hero

Full-bleed background: dark interior shot with GREYSEED logo glowing at the bar

Dark gradient overlay for legibility

MN headline: "Дэлхийн амтыг нэг дор" / subhead: "Өдөр бүр 12:00–23:00 цагт үйлчилнэ"

EN equivalent on toggle: "Globally Inspired Dining, All Day" / "Open daily 12:00–23:00"

Two CTAs: "Цэс үзэх" (View Menu) / "Ширээ захиалах" (Reserve a Table)

About

Short MN intro: two branches, globally inspired menu (Asian, Mexican, Mediterranean, American), relaxed lifestyle atmosphere, open daily

2–3 ambiance photos in a simple swipeable mobile carousel

Signature Dishes

Card grid/carousel (swipeable on mobile): Ribeye Steak, Fat Burger, Salmon Steak, Steak Salad, Meat Platter, Beetroot Salad

Each card: photo, MN name + small EN subtitle, price in ₮

"Цэс бүтнээр үзэх" (See Full Menu) button

Testimonials — "Үйлчлүүлэгчдийн сэтгэгдэл" (Google Reviews)
Use only the genuinely positive reviews below, translated into natural Mongolian as the primary text with English available on toggle. Style as real Google review cards: reviewer name, "Local Guide" badge + review count where applicable, 5-star icons, and a small "Google-ээс" (via Google) source tag for credibility.

chingoon (Local Guide · 113 үнэлгээ) — ★★★★★
MN: "Мексик шар айраг үнэхээр амттай байлаа. Анхааралтай зөөгчид үйлчилгээг улам тав тухтай болгосон. Хотын төвд салбар нээгдсэн нь маш сайхан байна."
EN: "The Mexican beer was really delicious. The attentive waiters made the experience even more enjoyable. Great that they've opened a branch in the city center."

Saikhnaa (Local Guide · 1,245 үнэлгээ) — ★★★★★
MN: "Хоол нь жинхэнэ Greyseed-тэй адилхан амттай. Fat Burger гайхалтай, steak salad арай исгэлэн ч сайн байсан, үйлчилгээ маш чадварлаг, найрсаг байлаа. Интерьер үзэсгэлэнтэй бөгөөд Хүүхдийн зоо салбараас хамаагүй уужим байна."
EN: "The food tastes just like the original Greyseed. The Fat Burger was great, the steak salad was good — a touch acidic, but good — and service was skilled and friendly. The interior is beautiful and much more spacious than the Huuhdiin Zoo branch."

Zaya Jargalsaikhan — ★★★★★
MN: "Тав тухтай, дулаахан уур амьсгал 😍"
EN: "Cozy and comfortable 😍"

Odbileg Bayartogtokh — ★★★★★
MN: "Хоол: 5, Үйлчилгээ: 5"
EN: "Food: 5, Service: 5"

Gallery

Wine wall, warm lighting, plant walls, dining area — mobile: horizontal swipe; desktop: masonry grid

Locations

Two stacked cards on mobile (side-by-side on desktop):

GREYSEED 100 — Хүүхдийн 100, Наран дэлгүүрийн зүүн талд · ☎ 7717-2323

GREYSEED MINISTER — Министер Тауэр, 3-р давхар, урд лифтээр орох · ☎ 7703-2828

Note: VIP тасалгаа (6–10 хүн) зөвхөн Minister салбарт захиалгаар

Hours: Өдөр бүр 12:00–23:00

Tap-to-call buttons (critical for mobile)

Reservation CTA

"Ширээгээ өнөөдөр захиалаарай" — large click-to-call buttons per branch

Footer

Logo mark, "Everything GREY. Everything SEED." tagline

Quick links, social icons, МОН/EN toggle repeated, copyright

Technical/UX Notes

Fully responsive, mobile-first breakpoints (390px → 768px → 1024px+)

Subtle scroll-in animations, but keep performance snappy on mobile (avoid heavy JS animation libraries if possible)

Sticky navbar: transparent over hero, solid navy on scroll, with logo + anchor links + language toggle

Consistent dark vignette/overlay on hero-style images for the moody upscale tone

Use the leaf icon from the logo as a small recurring divider between sections

Overall polish level: this should read as a premium, professionally-designed hospitality site — generous whitespace, consistent type scale, no clutter, no stock-template feel

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/defda6f5-07c5-409c-aaf8-31cffba37135).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
