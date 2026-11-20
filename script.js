const S = {};
document.getElementById('imgs').content.querySelectorAll('img').forEach(im => {
  const c = im.cloneNode(); c.removeAttribute('data-i'); S[im.dataset.i] = c.outerHTML
});
const ic = n => `<svg class="ic"><use href="#i-${n}"/></svg>`;
const P = [
  { n: 'Smart Watch', b: 'NEW', d: 'Track your fitness and stay connected.', r: 4.6, c: 89, p: '89.99', i: S.swatch },
  { n: 'Beaded Lace Heels', b: 'TRENDING', d: 'Pointed-toe lace pumps with delicate beaded flowers.', r: 4.8, c: 64, p: '139.99', i: S.heel2 },
  { n: 'Wireless Headphones', b: 'BEST SELLER', d: 'High quality sound with premium comfort.', r: 4.8, c: 120, p: '129.99', i: S.head },
  { n: 'DSLR Camera', b: 'POPULAR', d: 'Capture moments with perfect clarity.', r: 4.9, c: 60, p: '699.99', i: S.cam },
  { n: 'Travel Backpack', b: 'NEW', d: 'Spacious, durable and water resistant.', r: 4.5, c: 75, p: '59.99', i: S.bag },
  { n: 'Leather Handbag', b: 'POPULAR', d: 'Elegant design with room for all your essentials.', r: 4.6, c: 89, p: '89.99', i: S.watch },
  { n: 'Card Wallet', b: 'TRENDING', d: 'Slim zip wallet for your cards and cash.', r: 4.5, c: 52, p: '24.99', i: S.wallet },
  { n: 'Power Bank', b: 'BEST SELLER', d: 'Fast 45W charging with a built-in cable.', r: 4.8, c: 143, p: '39.99', i: S.pbank },
  { n: 'Sunglasses', b: 'NEW', d: 'Retro oval frames with a soft cream finish.', r: 4.7, c: 71, p: '34.99', i: S.shades },
  { n: 'Straw Sun Hat', b: 'POPULAR', d: 'Wide-brim straw hat with a ribbon bow.', r: 4.5, c: 47, p: '19.99', i: S.hat },
  { n: 'Straw Bag', b: 'TRENDING', d: 'Handwoven half-moon bag for sunny days.', r: 4.6, c: 58, p: '29.99', i: S.straw },
  { n: 'Travel Tumbler', b: 'NEW', d: 'Sleek travel tumbler for coffee on the go.', r: 4.8, c: 96, p: '24.99', i: S.tumbler },
  { n: 'Saddle Shoulder Bag', b: 'TRENDING', d: 'Structured flap bag with a gold-tone charm.', r: 4.8, c: 112, p: '119.99', i: S.bg1 },
  { n: 'Crescent Bow Bag', b: 'NEW', d: 'Soft crescent shape finished with a silky bow.', r: 4.7, c: 86, p: '64.99', i: S.bg2 },
  { n: 'Mini Top-Handle Bag', b: 'POPULAR', d: 'Clean white leather with a statement gold clasp.', r: 4.8, c: 94, p: '109.99', i: S.bg3 },
  { n: 'Monogram Mini Bag', b: 'BEST SELLER', d: 'Compact top-handle bag with a striped detail.', r: 4.9, c: 131, p: '94.99', i: S.bg4 },
  { n: 'Leather Bucket Bag', b: 'NEW', d: 'Roomy bucket shape in rich chocolate leather.', r: 4.6, c: 67, p: '84.99', i: S.bg5 },
  { n: 'Classic Mini Handbag', b: 'POPULAR', d: 'Cream leather with a tan strap and gold lock.', r: 4.8, c: 102, p: '89.99', i: S.bg6 },
  { n: 'Pearl Shoulder Bag', b: 'TRENDING', d: 'Blush pink with a pearl chain and printed scarf.', r: 4.5, c: 58, p: '54.99', i: S.bg7 },
  { n: 'Quilted Chain Bag', b: 'BEST SELLER', d: 'Quilted leather with a woven chain strap.', r: 4.9, c: 148, p: '139.99', i: S.bg8 },
  { n: 'Mini Quilted Backpack', b: 'NEW', d: 'Tiny quilted backpack with a chain strap.', r: 4.8, c: 73, p: '99.99', i: S.bh1 },
  { n: 'Burgundy Flap Backpack', b: 'POPULAR', d: 'Rich burgundy leather with twin front pockets.', r: 4.9, c: 121, p: '129.99', i: S.bh2 },
  { n: 'Embossed Mini Backpack', b: 'TRENDING', d: 'Soft taupe leather with a tonal embossed finish.', r: 4.7, c: 88, p: '119.99', i: S.bh3 },
  { n: 'Sage Swirl Shoulder Bag', b: 'NEW', d: 'Fresh sage print with a smooth rounded handle.', r: 4.5, c: 41, p: '59.99', i: S.bh4 },
  { n: 'Pleated Chain Bag', b: 'TRENDING', d: 'Lilac pleated bag with a bold gold chain.', r: 4.6, c: 64, p: '64.99', i: S.bh5 },
  { n: 'Powder Blue Hobo Bag', b: 'POPULAR', d: 'Soft slouchy shape with a rolled leather handle.', r: 4.7, c: 77, p: '69.99', i: S.bh6 },
  { n: 'Butter Bow Bag', b: 'NEW', d: 'Pastel yellow shoulder bag with a sweet bow.', r: 4.6, c: 52, p: '49.99', i: S.bh7 },
  { n: 'Canvas Flap Bag', b: 'BEST SELLER', d: 'Natural canvas with a tan leather flap.', r: 4.8, c: 109, p: '74.99', i: S.bh8 },
  { n: 'Crescent Hobo Bag', b: 'POPULAR', d: 'Sleek crescent shape in deep wine leather.', r: 4.8, c: 95, p: '79.99', i: S.bh9 },
  { n: 'Drawstring Leather Backpack', b: 'BEST SELLER', d: 'Greige grained leather with a drawstring flap.', r: 4.9, c: 134, p: '109.99', i: S.bh10 },
  { n: 'Ivory Buckle Backpack', b: 'TRENDING', d: 'Roomy ivory backpack with buckled pockets.', r: 4.5, c: 69, p: '44.99', i: S.bh11 },
  { n: 'Slate Blue Backpack', b: 'NEW', d: 'Quilted front pocket and a gold-tone twist lock.', r: 4.8, c: 83, p: '124.99', i: S.bh12 },
  { n: 'Tassel Flap Backpack', b: 'POPULAR', d: 'Chocolate brown backpack with twin tassels.', r: 4.6, c: 57, p: '69.99', i: S.bh13 },
  { n: 'Boucle Top-Handle Bag', b: 'NEW', d: 'Textured boucle finish with sparkling sequins.', r: 4.9, c: 46, p: '149.99', i: S.bh14 },
  { n: 'Blush Crystal Mini Bag', b: 'TRENDING', d: 'Blush pink mini bag with a sparkling crystal finish.', r: 4.8, c: 39, p: '159.99', i: S.bh15 },
  { n: 'Nude Patent Slingbacks', b: 'NEW', d: 'Glossy nude patent slingbacks with a bold buckle.', r: 4.7, c: 58, p: '129.99', i: S.hl1 },
  { n: 'Pearl Strap Pumps', b: 'BEST SELLER', d: 'Blush patent d’Orsay pumps with a pearl strap.', r: 4.9, c: 112, p: '159.99', i: S.hl2 },
  { n: 'Crystal Drop Ankle Heels', b: 'TRENDING', d: 'Sparkling ankle-strap heels with a crystal drop.', r: 4.8, c: 76, p: '179.99', i: S.hl3 },
  { n: 'Crystal Bow Heels', b: 'POPULAR', d: 'Silver crystal heels with a double bow and ankle wrap.', r: 4.8, c: 91, p: '189.99', i: S.hl4 },
  { n: 'Ivory Pearl Heels', b: 'BEST SELLER', d: 'Ivory pumps covered in pearls with a jeweled ankle chain.', r: 4.9, c: 104, p: '169.99', i: S.hl5 },
  { n: 'Blush Satin Slingbacks', b: 'NEW', d: 'Soft pink satin slingbacks with crystal trim.', r: 4.7, c: 49, p: '149.99', i: S.hl6 },
  { n: 'Wine Satin Pumps', b: 'TRENDING', d: 'Deep wine satin pumps with a crystal ankle strap.', r: 4.8, c: 83, p: '139.99', i: S.hl7 },
  { n: 'Champagne Buckle Heels', b: 'POPULAR', d: 'Shimmering ankle-strap heels with a crystal buckle.', r: 4.6, c: 62, p: '124.99', i: S.hl8 },
  { n: 'Butter Satin Slingbacks', b: 'NEW', d: 'Pale yellow satin slingbacks with a sculpted heel.', r: 4.7, c: 44, p: '134.99', i: S.hl9 },
  { n: 'Tulle Bow Slingbacks', b: 'TRENDING', d: 'Grey tulle slingbacks finished with a sparkling bow.', r: 4.6, c: 57, p: '154.99', i: S.hl10 },
  { n: 'Pearl Bow Slingbacks', b: 'BEST SELLER', d: 'Ivory slingbacks with a beaded pearl bow.', r: 4.9, c: 118, p: '164.99', i: S.hl11 },
  { n: 'Glitter Tulle Pumps', b: 'POPULAR', d: 'Silver glitter pumps with soft gathered tulle.', r: 4.7, c: 69, p: '119.99', i: S.hl12 },
  { n: 'Bridal Lace Heels', b: 'BEST SELLER', d: 'White lace pumps with a crystal ankle chain.', r: 4.9, c: 127, p: '174.99', i: S.hl13 },
  { n: 'Mint Floral Wrap Sandals', b: 'NEW', d: 'Mint wrap-around sandals decorated with crystal flowers.', r: 4.8, c: 53, p: '184.99', i: S.hl14 },
  { n: 'Sky Blue Slingbacks', b: 'POPULAR', d: 'Glossy light blue slingbacks with a slim stiletto heel.', r: 4.6, c: 66, p: '99.99', i: S.hl15 },
  { n: 'Blue Crystal Mesh Pumps', b: 'TRENDING', d: 'Blue mesh pumps with a gradient of crystals.', r: 4.8, c: 78, p: '144.99', i: S.hl16 },
  { n: 'Baby Blue Slingbacks', b: 'NEW', d: 'Soft baby blue slingbacks with a sleek low heel.', r: 4.5, c: 41, p: '94.99', i: S.hl17 },
  { n: 'Red Lace Pumps', b: 'POPULAR', d: 'Red floral lace pumps with a leather toe and bow.', r: 4.8, c: 89, p: '129.99', i: S.hl18 },
  { n: 'Pink Bow Mules', b: 'NEW', d: 'Pink tweed-look mules with a sweet bow and a slim heel.', r: 4.7, c: 48, p: '109.99', i: S.hl19 },
  { n: 'Lilac Over-Ear Headphones', b: 'NEW', d: 'Soft lilac over-ear headphones with a mesh headband.', r: 4.8, c: 97, p: '149.99', i: S.hp1 },
  { n: 'Mint Over-Ear Headphones', b: 'POPULAR', d: 'Fresh mint over-ear headphones with plush cushions.', r: 4.8, c: 88, p: '149.99', i: S.hp2 },
  { n: 'Coral Over-Ear Headphones', b: 'TRENDING', d: 'Coral and rose-gold headphones with a mesh headband.', r: 4.7, c: 72, p: '149.99', i: S.hp3 },
  { n: 'Cocoa Leather Headphones', b: 'BEST SELLER', d: 'Cocoa brown over-ear headphones with soft leather cushions.', r: 4.6, c: 64, p: '89.99', i: S.hp4 },
  { n: 'Greige On-Ear Headphones', b: 'POPULAR', d: 'Wireless greige headphones with rose-gold accents.', r: 4.7, c: 81, p: '99.99', i: S.hp5 },
  { n: 'Sky Blue Studio Headphones', b: 'NEW', d: 'Sky blue and sand over-ear headphones with gold details.', r: 4.8, c: 69, p: '129.99', i: S.hp6 },
  { n: 'Navy Studio Headphones', b: 'BEST SELLER', d: 'Deep navy over-ear headphones with a comfortable fit.', r: 4.9, c: 126, p: '119.99', i: S.hp7 },
  { n: 'Slate Blue On-Ear Headphones', b: 'TRENDING', d: 'Slate blue on-ear headphones with a glossy finish.', r: 4.5, c: 53, p: '79.99', i: S.hp8 },
  { n: 'Butter Yellow Headphones', b: 'NEW', d: 'Pastel yellow wireless headphones with a metallic ear cup.', r: 4.4, c: 38, p: '44.99', i: S.hp9 },
  { n: 'Bronze Gold Headphones', b: 'POPULAR', d: 'Bronze and gold over-ear headphones with suede-style cushions.', r: 4.8, c: 74, p: '139.99', i: S.hp10 },
  { n: 'Violet Pop On-Ear Headphones', b: 'TRENDING', d: 'Bold violet and pink on-ear headphones.', r: 4.6, c: 61, p: '89.99', i: S.hp11 },
  { n: 'Mint Teal Headphones', b: 'NEW', d: 'Mint and teal over-ear headphones with a modern shape.', r: 4.8, c: 58, p: '119.99', i: S.hp12 },
  { n: 'Sand Rose Headphones', b: 'POPULAR', d: 'Sand rose over-ear headphones in a warm neutral tone.', r: 4.7, c: 79, p: '109.99', i: S.hp13 },
  { n: 'Orchid Headphones', b: 'TRENDING', d: 'Rich orchid over-ear headphones with a sleek design.', r: 4.7, c: 67, p: '109.99', i: S.hp14 },
  { n: 'Lilac Instant Camera', b: 'NEW', d: 'Compact lilac instant camera for printed photos on the go.', r: 4.7, c: 92, p: '79.99', i: S.cm1 },
  { n: 'Cocoa Instant Camera', b: 'POPULAR', d: 'Warm cocoa instant camera with a simple point-and-shoot design.', r: 4.6, c: 71, p: '69.99', i: S.cm2 },
  { n: 'Leather Hybrid Camera', b: 'BEST SELLER', d: 'Digital and instant in one, with a leather-look front.', r: 4.8, c: 64, p: '179.99', i: S.cm3 },
  { n: 'Rose Hybrid Camera', b: 'TRENDING', d: 'Rose pink hybrid camera with a textured leather-look body.', r: 4.8, c: 57, p: '179.99', i: S.cm4 },
  { n: 'Flamingo Instant Camera', b: 'POPULAR', d: 'Bright pink instant camera, fun and easy to use.', r: 4.6, c: 88, p: '64.99', i: S.cm5 },
  { n: 'Pastel Blue Instant Camera', b: 'NEW', d: 'Soft pastel blue instant camera with a rounded body.', r: 4.7, c: 76, p: '79.99', i: S.cm6 },
  { n: 'White Compact Camera', b: 'BEST SELLER', d: 'Pocket-size white compact camera with a built-in flash.', r: 4.9, c: 118, p: '349.99', i: S.cm7 },
  { n: 'Gold Compact Camera', b: 'TRENDING', d: 'Compact camera with a gold finish and a leather-look case.', r: 4.9, c: 83, p: '379.99', i: S.cm8 },
  { n: 'Retro Mirrorless Camera', b: 'POPULAR', d: 'Retro mirrorless camera with a caramel leather-look grip.', r: 4.8, c: 69, p: '499.99', i: S.cm9 },
  { n: 'Blush Compact Camera', b: 'NEW', d: 'Blush pink compact camera with a powerful zoom lens.', r: 4.5, c: 54, p: '129.99', i: S.cm10 },
  { n: 'White Kids Camera', b: 'NEW', d: 'Simple white digital camera made for little hands.', r: 4.4, c: 41, p: '39.99', i: S.cm11 },
  { n: 'Lilac Camera with Strap', b: 'POPULAR', d: 'Lilac instant camera that comes with a matching wrist strap.', r: 4.7, c: 66, p: '89.99', i: S.cm12 },
  { n: 'Mint Instant Camera', b: 'TRENDING', d: 'Fresh mint instant camera with a matching wrist strap.', r: 4.8, c: 73, p: '89.99', i: S.cm13 },
  { n: 'Cream Instant Camera', b: 'NEW', d: 'Soft cream instant camera with a braided wrist strap.', r: 4.6, c: 59, p: '69.99', i: S.cm14 },
  { n: 'Blush Square Smartwatch', b: 'NEW', d: 'Blush pink smartwatch with a soft silicone band.', r: 4.7, c: 86, p: '149.99', i: S.wt1 },
  { n: 'Periwinkle Square Smartwatch', b: 'TRENDING', d: 'Periwinkle blue smartwatch with a silver case.', r: 4.7, c: 74, p: '149.99', i: S.wt2 },
  { n: 'Starlight Square Smartwatch', b: 'BEST SELLER', d: 'Warm starlight smartwatch with a matching band.', r: 4.8, c: 121, p: '159.99', i: S.wt3 },
  { n: 'Forest Green Smartwatch', b: 'POPULAR', d: 'Deep green band with a rose-gold case and gold buckle.', r: 4.6, c: 63, p: '139.99', i: S.wt4 },
  { n: 'Plum Smartwatch', b: 'POPULAR', d: 'Rich plum band with a gold case and a clear display.', r: 4.6, c: 58, p: '139.99', i: S.wt5 },
  { n: 'Rose Gold Round Smartwatch', b: 'BEST SELLER', d: 'Round rose-gold smartwatch with a blush silicone band.', r: 4.8, c: 109, p: '89.99', i: S.wt6 },
  { n: 'Sky Blue Round Smartwatch', b: 'NEW', d: 'Light blue round smartwatch for everyday tracking.', r: 4.4, c: 47, p: '49.99', i: S.wt7 },
  { n: 'Navy Round Smartwatch', b: 'TRENDING', d: 'Navy round smartwatch with a bright, sharp screen.', r: 4.7, c: 82, p: '84.99', i: S.wt8 },
  { n: 'Lavender Fitness Band', b: 'NEW', d: 'Slim lavender fitness band with a tall, clear display.', r: 4.5, c: 51, p: '44.99', i: S.wt9 },
  { n: 'Ruby Round Smartwatch', b: 'POPULAR', d: 'Bold ruby red round smartwatch with a gold buckle.', r: 4.5, c: 60, p: '69.99', i: S.wt10 },
  { n: 'Berry Classic Smartwatch', b: 'TRENDING', d: 'Berry band with a gold case and a classic dial.', r: 4.8, c: 77, p: '129.99', i: S.wt11 },
  { n: 'Blush Fitness Band', b: 'NEW', d: 'Light and slim blush fitness band for daily activity.', r: 4.3, c: 39, p: '29.99', i: S.wt12 },
  { n: 'Cream Fitness Band', b: 'POPULAR', d: 'Cream fitness band with a colorful, bright display.', r: 4.6, c: 68, p: '39.99', i: S.wt13 },
  { n: 'Brown Oval Sunglasses', b: 'NEW', d: 'Slim oval frames in warm brown with matching lenses.', r: 4.7, c: 64, p: '59.99', i: S.ac1 },
  { n: 'Rimless Gold Sunglasses', b: 'TRENDING', d: 'Rimless oval lenses with sleek gold temples.', r: 4.6, c: 52, p: '49.99', i: S.ac2 },
  { n: 'Butterfly Gradient Sunglasses', b: 'POPULAR', d: 'Rimless butterfly-shaped lenses with an olive gradient.', r: 4.4, c: 38, p: '29.99', i: S.ac3 },
  { n: 'Crystal Fringe Sunglasses', b: 'TRENDING', d: 'Round statement sunglasses with sparkling crystal fringe.', r: 4.8, c: 27, p: '79.99', i: S.ac4 },
  { n: 'Crystal Tortoise Sunglasses', b: 'BEST SELLER', d: 'Oversized tortoise frames with golden crystal clusters.', r: 4.9, c: 45, p: '74.99', i: S.ac5 },
  { n: 'Dragonfly Wing Sunglasses', b: 'NEW', d: 'Rimless wing-shaped lenses with a delicate vein pattern.', r: 4.5, c: 41, p: '24.99', i: S.ac6 },
  { n: 'Flame Rimless Sunglasses', b: 'POPULAR', d: 'Rimless flame-shaped lenses with slim gold arms.', r: 4.3, c: 36, p: '22.99', i: S.ac7 },
  { n: 'Royal Blue Sun Hat', b: 'NEW', d: 'Wide-brim royal blue straw hat with a soft ribbon.', r: 4.6, c: 48, p: '24.99', i: S.ac8 },
  { n: 'Pink Wide-Brim Hat', b: 'TRENDING', d: 'Extra wide-brim pink straw hat with a bow.', r: 4.5, c: 43, p: '27.99', i: S.ac9 },
  { n: 'Rose Straw Hat', b: 'BEST SELLER', d: 'Natural straw hat with a scalloped brim and soft roses.', r: 4.8, c: 71, p: '29.99', i: S.ac10 },
  { n: 'Zebra Print Head Scarf', b: 'POPULAR', d: 'Easy tie-back head scarf in a bold zebra print.', r: 4.4, c: 33, p: '14.99', i: S.ac11 },
  { n: 'Leopard Print Head Scarf', b: 'NEW', d: 'Soft tie-back head scarf in a colorful leopard print.', r: 4.5, c: 29, p: '14.99', i: S.ac12 },
  { n: 'Silk Baroque Head Scarf', b: 'TRENDING', d: 'Silky pink and green scarf with a golden baroque print.', r: 4.7, c: 34, p: '39.99', i: S.ac13 },
  { n: 'Pink Handheld Fan', b: 'POPULAR', d: 'Rechargeable pink handheld fan with a clear display.', r: 4.6, c: 57, p: '34.99', i: S.ac14 },
  { n: 'Silver Handheld Fan', b: 'BEST SELLER', d: 'Compact metallic handheld fan with strong airflow.', r: 4.7, c: 82, p: '44.99', i: S.ac15 },
  { n: 'Mini Pink Power Bank', b: 'NEW', d: 'Pocket-size pink power bank with a built-in cable loop.', r: 4.5, c: 66, p: '24.99', i: S.ac16 },
  { n: 'Blush Power Bank 22.5W', b: 'POPULAR', d: 'Fast-charging blush power bank with built-in cables.', r: 4.7, c: 94, p: '39.99', i: S.ac17 },
  { n: 'Sky Blue Power Bank', b: 'TRENDING', d: 'Slim sky blue power bank with two retractable cables.', r: 4.8, c: 103, p: '44.99', i: S.ac18 },
  { n: 'Tan Power Bank with Cables', b: 'BEST SELLER', d: 'Tan power bank with four built-in cables and a bright display.', r: 4.6, c: 75, p: '34.99', i: S.ac19 },
  { n: 'Emerald Jeweled Sunglasses', b: 'TRENDING', d: 'Emerald cat-eye sunglasses decorated with golden leaves and crystals.', r: 4.9, c: 31, p: '84.99', i: S.ac20 }];
const $ = s => document.querySelector(s), fmt = n => '$' + n.toFixed(2), esc = s => String(s).replace(/[&<>"']/g, c => '&#' + c.charCodeAt(0) + ';');
let curH = ''; let cart = [], user = null, cur = 2, qty = 1, pid = 0, mode = 'in', next = null, tt;
try { cart = JSON.parse(localStorage.getItem('cart') || '[]'); user = JSON.parse(localStorage.getItem('user') || 'null') } catch (e) { }
const save = () => { try { localStorage.setItem('cart', JSON.stringify(cart)); localStorage.setItem('user', JSON.stringify(user)) } catch (e) { } };
function say(t) { const el = $('#toast'); el.textContent = t; el.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => el.classList.remove('show'), 1800) }
function badge() { $('#cc').textContent = cart.reduce((a, x) => a + x.q, 0); $('#acct').textContent = user ? 'Hi, ' + user.name.split(' ')[0] : 'Login' }
function add(id, n = 1) { const l = cart.find(x => x.id === id); l ? l.q += n : cart.push({ id, q: n }); save(); badge(); say(P[id].n + ' added to cart') }
/* carousel */
const W = 180, A = 260, G = 16, track = $('#track'), stage = $('#stage'), pager = $('#pager');
track.innerHTML = P.slice(0, 12).map((x, k) => `<div class="card" data-k="${k}"><span class="badge">${x.b}</span><button class="heart" aria-label="Favorite">${ic('heart')}</button><div class="img">${x.i}</div><div class="dots"><i></i><i></i><i></i></div><h3>${x.n}</h3><p>${x.d}</p><div class="rate"><b>★</b> ${x.r} (${x.c})</div><div class="row"><span class="price">$${x.p}</span><button class="cartc" aria-label="Add to cart">${ic('cart')}</button><button class="btn">${ic('cart')} Add to Cart</button></div></div>`).join('');
pager.innerHTML = P.slice(0, 12).map((_, k) => `<button data-k="${k}" aria-label="Go to ${k + 1}"></button>`).join('');
function render() { let left = 0; for (let k = 0; k < cur; k++)left += W + G; track.style.transform = `translateX(${stage.clientWidth / 2 - (left + A / 2)}px)`; track.querySelectorAll('.card').forEach((c, k) => c.classList.toggle('active', k === cur)); pager.querySelectorAll('button').forEach((b, k) => b.classList.toggle('on', k === cur)) }
function go(k) { cur = (k + 12) % 12; render() }
$('#prev').onclick = () => go(cur - 1); $('#next').onclick = () => go(cur + 1);
pager.onclick = e => { const b = e.target.closest('button'); if (b) go(+b.dataset.k) };
track.onclick = e => {
  const c = e.target.closest('.card'); if (!c) return; const k = +c.dataset.k, h = e.target.closest('.heart');
  if (h) { h.classList.toggle('on'); h.innerHTML = ic(h.classList.contains('on') ? 'heartf' : 'heart'); return }
  if (e.target.closest('.btn,.cartc')) { add(k); return }
  if (k !== cur) { go(k); return }
  if (e.target.closest('.img,h3')) navTo('product-' + k)
};
let sx = null; stage.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
stage.addEventListener('touchend', e => { if (sx === null) return; const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 40) go(cur + (d < 0 ? 1 : -1)); sx = null });
/* product */
function product(id, from) { pid = id; qty = 1; const x = P[id]; $('#v-product').innerHTML = `<a class="back" href="${from && from.startsWith('cat-') ? '#' + from : '#home'}">${ic('back')} ${from && from.startsWith('cat-') && CATN[from.slice(4)] ? 'Back to ' + CATN[from.slice(4)] : 'Back to store'}</a><div class="pd"><div class="pdimg">${x.i}</div><div class="pdinfo"><span class="badge">${x.b}</span><h2>${x.n}</h2><div class="rate"><b>★</b> ${x.r} (${x.c} reviews)</div><div class="pprice">${fmt(+x.p)}</div><p>${x.d} Crafted with care in a warm neutral palette that fits any style.</p><ul class="perks"><li>${ic('check')} Free shipping</li><li>${ic('check')} 30-day easy returns</li><li>${ic('check')} 1-year warranty</li></ul><div class="qty"><button onclick="chg(-1)">−</button><span id="q">1</span><button onclick="chg(1)">+</button></div><button class="btn big" onclick="add(pid,qty)">Add to Cart</button></div></div>` }
function chg(d) { qty = Math.max(1, qty + d); $('#q').textContent = qty }
/* cart */
function cq(id, d) { const l = cart.find(x => x.id === id); l.q += d; if (l.q <= 0) cart = cart.filter(x => x !== l); save(); badge(); cartView() }
function cartView() {
  const v = $('#v-cart');
  if (!cart.length) { v.innerHTML = '<div class="empty"><h2>Your cart is empty</h2><p>Browse our featured products and add something you like.</p><a class="btn big" href="#home">Shop now</a></div>'; return }
  const sub = cart.reduce((a, x) => a + x.q * +P[x.id].p, 0);
  v.innerHTML = '<h2 class="ptitle">Shopping Cart</h2><div class="cartgrid"><div>' + cart.map(x => `<div class="line"><div class="thumb">${P[x.id].i}</div><div class="li"><b>${P[x.id].n}</b><span>${fmt(+P[x.id].p)}</span></div><div class="qty"><button onclick="cq(${x.id},-1)">−</button><span>${x.q}</span><button onclick="cq(${x.id},1)">+</button></div><b class="lt">${fmt(x.q * +P[x.id].p)}</b><button class="x" onclick="cq(${x.id},-99)" aria-label="Remove">${ic('close')}</button></div>`).join('') + `</div><aside class="sum"><h3>Order Summary</h3><div><span>Subtotal</span><b>${fmt(sub)}</b></div><div><span>Shipping</span><b>Free</b></div><div class="tot"><span>Total</span><b>${fmt(sub)}</b></div><button class="btn big" onclick="checkout()">Checkout</button></aside></div>`
}
function checkout() {
  if (!user) { next = 'cart'; say('Please log in to checkout'); location.hash = 'login'; return }
  cart = []; save(); badge(); $('#v-cart').innerHTML = `<div class="empty"><h2>Thank you, ${esc(user.name.split(' ')[0])}!</h2><p>Your order has been placed (demo — no payment taken).</p><a class="btn big" href="#home">Continue shopping</a></div>`
}
/* login */
function setMode(m) { mode = m; loginView() }
function logout() { user = null; save(); badge(); say('Logged out'); loginView() }
function loginView() {
  const v = $('#v-login');
  if (user) { v.innerHTML = `<div class="authcard"><h2>Hello, ${esc(user.name)}</h2><p>${esc(user.email)}</p><button class="btn big" onclick="logout()">Log out</button></div>`; return }
  v.innerHTML = `<div class="authcard"><div class="tabs"><button class="${mode == 'in' ? 'on' : ''}" onclick="setMode('in')">Log in</button><button class="${mode == 'up' ? 'on' : ''}" onclick="setMode('up')">Sign up</button></div><form id="af" novalidate>${mode == 'up' ? '<label>Full name<input id="an" autocomplete="name"></label>' : ''}<label>Email<input id="ae" type="email" autocomplete="email"></label><label>Password<input id="ap" type="password" autocomplete="${mode == 'up' ? 'new-password' : 'current-password'}"></label><div class="err" id="er"></div><button class="btn big" type="submit">${mode == 'in' ? 'Log in' : 'Create account'}</button></form><div class="note">Demo only — no real account is created.</div></div>`;
  $('#af').onsubmit = e => {
    e.preventDefault(); const em = $('#ae').value.trim(), pw = $('#ap').value, nm = mode == 'up' ? $('#an').value.trim() : em.split('@')[0], er = $('#er');
    if (mode == 'up' && !nm) return er.textContent = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(em)) return er.textContent = 'Please enter a valid email.';
    if (pw.length < 6) return er.textContent = 'Password must be at least 6 characters.';
    user = { name: nm, email: em }; save(); badge(); say('Welcome, ' + nm.split(' ')[0] + '!'); const t = next || 'home'; next = null; location.hash = t
  }
}
/* router */
const CATS = { bags: [4, 5, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], shoes: [1, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53], audio: [2, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67], cameras: [3, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81], watches: [0, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94], accessories: [6, 8, 11, 95, 96, 97, 98, 99, 100, 101, 114], summer: [9, 102, 103, 104, 105, 106, 107], tech: [7, 108, 109, 110, 111, 112, 113] };
function navTo(hs, el) {
  const v = document.querySelector('.view:not([hidden])'); if (!v || matchMedia('(prefers-reduced-motion:reduce)').matches) { location.hash = hs; return }
  if (el) { el.classList.add('picked'); v.querySelectorAll('.pc').forEach(c => { if (c !== el) c.classList.add('dim') }); setTimeout(() => v.classList.add('leave'), 200); setTimeout(() => { location.hash = hs }, 540) }
  else { v.classList.add('leave'); setTimeout(() => { location.hash = hs }, 330) }
}
const CATN = { bags: 'Bags', shoes: 'Shoes', audio: 'Audio', cameras: 'Cameras', watches: 'Watches', accessories: 'Accessories', summer: 'Summer', tech: 'Tech' };
function revealIn(nodes) {
  if (!('IntersectionObserver' in window)) return; const io = new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting) return; const t = en.target; io.unobserve(t); t.classList.add('in'); setTimeout(() => { t.classList.remove('rv', 'in'); t.style.transitionDelay = '' }, 1500) }), { threshold: .12 });
  nodes.forEach((t, i) => { t.classList.add('rv'); t.style.transitionDelay = (i % 4) * 120 + 'ms'; io.observe(t) })
}
function catView(c) { catView0(c); revealIn(document.querySelectorAll('#v-cat .pc')) }
function catView0(c) { const l = CATS[c]; $('#v-cat').innerHTML = `<a class="back" href="#home">${ic('back')} Back to store</a><h2 class="ptitle">${CATN[c]}</h2><p class="catsub">${l.length} products</p><div class="pgrid">` + l.map((k, j) => `<div class="pc" style="--i:${j}" onclick="navTo('product-${k}',this)"><div class="pci">${P[k].i}</div><h3>${P[k].n}</h3><div class="rate"><b>★</b> ${P[k].r} (${P[k].c})</div><div class="prow"><span class="price">${fmt(+P[k].p)}</span><button class="cartc" aria-label="Add to cart" onclick="event.stopPropagation();add(${k})">${ic('cart')}</button></div></div>`).join('') + '</div>' }
function route() {
  const h = location.hash.slice(1) || 'home'; const prevH = curH; curH = h; let v = 'home';
  if (h === 'cart') v = 'cart'; else if (h === 'login') v = 'login'; else if (/^product-\d+$/.test(h) && +h.slice(8) < P.length) v = 'product'; else if (/^cat-[a-z]+$/.test(h) && CATS[h.slice(4)]) v = 'cat';
  document.querySelectorAll('.view').forEach(e => { e.hidden = e.id !== 'v-' + v; e.classList.remove('leave') });
  if (v === 'home') render(); else if (v === 'product') product(+h.slice(8), prevH); else if (v === 'cat') catView(h.slice(4)); else if (v === 'cart') cartView(); else loginView();
  scrollTo(0, 0); menu(false); if (pend) { const t = pend; pend = null; setTimeout(() => sc(t), 80) }
}
addEventListener('hashchange', route); addEventListener('resize', () => { if (!$('#v-home').hidden) render() });
const nav = $('#nav'), bg = $('#burger'); let pend = null;
function menu(o) { nav.classList.toggle('open', o); bg.classList.toggle('open', o); bg.setAttribute('aria-expanded', o) }
function sc(id) { const el = id === 'top' ? null : document.getElementById(id), y = el ? Math.max(0, el.getBoundingClientRect().top + scrollY - 70) : 0, s = scrollY, d = y - s, t0 = performance.now(); const f = t => { const k = Math.min(1, (t - t0) / 600), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; scrollTo(0, s + d * e); if (k < 1) requestAnimationFrame(f) }; requestAnimationFrame(f) }
function goSec(id) { menu(false); const hh = location.hash; if (hh === '' || hh === '#home') sc(id); else { pend = id; location.hash = 'home' } }
bg.onclick = e => { e.stopPropagation(); menu(!nav.classList.contains('open')) };
nav.onclick = e => { const a = e.target.closest('a'); if (!a) return; if (a.dataset.s) { e.preventDefault(); goSec(a.dataset.s) } else menu(false) };
document.addEventListener('click', e => { if (!e.target.closest('.top')) menu(false) });
addEventListener('keydown', e => { if (e.key === 'Escape') menu(false) });
addEventListener('resize', () => { if (innerWidth > 820) menu(false) });
{
  const CL = [{ k: 33, c: '#f0e2cd', x: 6, y: 20, w: 46, d: .05, u: 6.5, l: 0 }, { k: 1, c: '#f0e2cd', x: 58, y: 0, w: 31, d: .09, u: 5.5, l: .12 }, { k: 2, c: '#f0e2cd', x: 64, y: 36, w: 32, d: .065, u: 7, l: .24 }, { k: 84, c: '#f0e2cd', x: 0, y: 66, w: 27, d: .1, u: 6, l: .36 }, { k: 75, c: '#f0e2cd', x: 36, y: 64, w: 31, d: .055, u: 7.5, l: .48 }];
  const cl = $('#cl');
  cl.innerHTML = '<i class="ring"></i><i class="dt d1"></i><i class="dt d2"></i><i class="dt d3"></i>' + CL.map((o, i) => `<div class="fl" style="left:${o.x}%;top:${o.y}%;width:${o.w}%;--u:${o.u}s;--l:${o.l}s;z-index:${i + 1}"><div class="px" data-d="${o.d}" onclick="navTo('product-${o.k}')"><div class="bl" style="background:${o.c}"></div>${P[o.k].i}<div class="tg">${P[o.k].n} <b>${fmt(+P[o.k].p)}</b></div></div></div>`).join('');
  const pxs = [...cl.querySelectorAll('.px')]; let mx = 0, my = 0;
  function par() { const sy = Math.min(scrollY, 600); pxs.forEach(el => { const d = +el.dataset.d; el.style.transform = `translate(${(-mx * d).toFixed(1)}px,${(-my * d - sy * d * .6).toFixed(1)}px)` }) }
  const heroEl = document.querySelector('.hero');
  heroEl.addEventListener('mousemove', e => { const r = cl.getBoundingClientRect(); mx = e.clientX - (r.left + r.width / 2); my = e.clientY - (r.top + r.height / 2); par() });
  heroEl.addEventListener('mouseleave', () => { mx = 0; my = 0; par() });
  addEventListener('scroll', () => { if (!$('#v-home').hidden) par() }, { passive: true })
}
$('#cats').innerHTML = [['Bags', 33, 'Handbags, backpacks and woven totes.', 'bags'], ['Shoes', 1, 'Comfortable sneakers for every day.', 'shoes'], ['Audio', 2, 'Wireless sound, all day long.', 'audio'], ['Cameras', 3, 'Capture every moment clearly.', 'cameras'], ['Watches', 0, 'Stay on track and connected.', 'watches'], ['Accessories', 8, 'Frames, wallets and little extras.', 'accessories'], ['Summer', 9, 'Hats and bags for sunny days.', 'summer'], ['Tech', 7, 'Power and gear on the go.', 'tech']].map(([n, k, d, c]) => `<div class="cat" onclick="navTo('${CATS[c].length > 1 ? 'cat-' + c : 'product-' + CATS[c][0]}')"><div class="ci">${P[k].i}<div class="ov"><span>${d}</span><u>Shop now ${ic('arrow')}</u></div></div><b>${n}</b></div>`).join('');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting) return; const t = en.target; io.unobserve(t); t.classList.add('in'); setTimeout(() => { t.classList.remove('rv', 'in'); t.style.transitionDelay = '' }, 1000) }), { threshold: .15 });
  document.querySelectorAll('.cat,.feat,.rev,.news,.sec h2').forEach((t, i) => { t.classList.add('rv'); t.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(t) })
}
$('#nf').onsubmit = e => { e.preventDefault(); const i = $('#ne'); if (!/^\S+@\S+\.\S+$/.test(i.value.trim())) return say('Please enter a valid email'); i.value = ''; say('Thanks for subscribing!') };
badge(); route();
