/**
 * One-time generator for src/data/products.js
 * Run: node scripts/generate-products.mjs
 */
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const catalogue = {
  fashion: {
    products: [
      ['Nike Dri-FIT T-Shirt', 'T-Shirts', 'Nike', 1299],
      ['Adidas Essentials T-Shirt', 'T-Shirts', 'Adidas', 999],
      ['Puma Essentials T-Shirt', 'T-Shirts', 'Puma', 899],
      ["Levi's 511 Slim Jeans", 'Jeans', "Levi's", 2499],
      ["Levi's 501 Original Jeans", 'Jeans', "Levi's", 2799],
      ['Adidas Originals Hoodie', 'Hoodies', 'Adidas', 2199],
      ['Nike Sports Hoodie', 'Hoodies', 'Nike', 2499],
      ['Puma Track Jacket', 'Jackets', 'Puma', 1999],
      ["Levi's Denim Jacket", 'Jackets', "Levi's", 3499],
      ['Allen Solly Formal Shirt', 'Formal Shirts', 'Allen Solly', 1499],
      ['Peter England Formal Shirt', 'Formal Shirts', 'Peter England', 1299],
      ['Van Heusen Formal Trousers', 'Trousers', 'Van Heusen', 1899],
      ['Louis Philippe Polo T-Shirt', 'Polo', 'Louis Philippe', 1699],
      ['Roadster Casual Shirt', 'Casual Shirts', 'Roadster', 899],
      ['U.S. Polo Assn. Polo', 'Polo', 'U.S. Polo Assn.', 1499],
      ['Adidas Ultraboost Running Shoes', 'Running Shoes', 'Adidas', 8999],
      ['Nike Air Max Sneakers', 'Sneakers', 'Nike', 7499],
      ['Puma RS-X Sneakers', 'Sneakers', 'Puma', 5999],
      ['Reebok Training Shoes', 'Training Shoes', 'Reebok', 3999],
      ['Skechers Walking Shoes', 'Walking Shoes', 'Skechers', 3499],
      ['Woodland Leather Shoes', 'Leather Shoes', 'Woodland', 2999],
      ['Wildcraft Backpack', 'Backpacks', 'Wildcraft', 1499],
      ['American Tourister Backpack', 'Backpacks', 'American Tourister', 1999],
      ['Fastrack Analog Watch', 'Watches', 'Fastrack', 2499],
      ['Ray-Ban Polarized Sunglasses', 'Sunglasses', 'Ray-Ban', 5999],
    ],
  },
  electronics: {
    products: [
      ['Apple AirPods Pro', 'Earbuds', 'Apple', 24900],
      ['Sony WH-1000XM5 Headphones', 'Headphones', 'Sony', 29990],
      ['JBL Tune 770NC', 'Headphones', 'JBL', 7999],
      ['boAt Airdopes', 'Earbuds', 'boAt', 1999],
      ['Samsung Galaxy Buds', 'Earbuds', 'Samsung', 8999],
      ['OnePlus Buds', 'Earbuds', 'OnePlus', 4999],
      ['JBL Flip Bluetooth Speaker', 'Speakers', 'JBL', 3999],
      ['Sony Portable Bluetooth Speaker', 'Speakers', 'Sony', 5499],
      ['Samsung Smart TV', 'Television', 'Samsung', 42999],
      ['LG 4K Smart TV', 'Television', 'LG', 38999],
      ['Logitech Wireless Keyboard', 'Keyboards', 'Logitech', 2499],
      ['Logitech MX Master Mouse', 'Mice', 'Logitech', 6999],
      ['Razer DeathAdder Mouse', 'Mice', 'Razer', 3499],
      ['HP Wireless Keyboard & Mouse', 'Keyboards', 'HP', 1999],
      ['Anker 65W GaN Charger', 'Chargers', 'Anker', 2999],
      ['Samsung 20,000mAh Power Bank', 'Power Banks', 'Samsung', 2499],
      ['Xiaomi Power Bank', 'Power Banks', 'Xiaomi', 1499],
      ['Belkin USB-C Cable', 'Cables', 'Belkin', 999],
      ['Apple MagSafe Charger', 'Chargers', 'Apple', 4500],
      ['Samsung Galaxy SmartTag', 'Trackers', 'Samsung', 2999],
      ['TP-Link Wi-Fi 6 Router', 'Networking', 'TP-Link', 3999],
      ['SanDisk Portable SSD', 'Storage', 'SanDisk', 6999],
      ['WD External Hard Drive', 'Storage', 'WD', 5499],
      ['DJI Smartphone Gimbal', 'Accessories', 'DJI', 12999],
      ['Mi Smart Projector', 'Projectors', 'Mi', 24999],
    ],
  },
  'home-living': {
    products: [
      ['Philips LED Table Lamp', 'Lighting', 'Philips', 1499],
      ['Philips Smart LED Bulb', 'Lighting', 'Philips', 699],
      ['Wipro Smart Bulb', 'Lighting', 'Wipro', 499],
      ['IKEA Floor Lamp', 'Lighting', 'IKEA', 2999],
      ['IKEA Cushion Set', 'Decor', 'IKEA', 899],
      ['IKEA Storage Organizer', 'Storage', 'IKEA', 1299],
      ['Wakefit Memory Foam Pillow', 'Bedding', 'Wakefit', 999],
      ['Wakefit Mattress', 'Bedding', 'Wakefit', 8999],
      ['SleepyCat Pillow', 'Bedding', 'SleepyCat', 799],
      ['Spaces Bedsheet Set', 'Bedding', 'Spaces', 1499],
      ['Milton Stainless Steel Bottle', 'Kitchen', 'Milton', 599],
      ['Cello Water Bottle', 'Kitchen', 'Cello', 399],
      ['Prestige Electric Kettle', 'Appliances', 'Prestige', 1299],
      ['Philips Air Fryer', 'Appliances', 'Philips', 7999],
      ['Prestige Non-Stick Cookware', 'Cookware', 'Prestige', 2499],
      ['Agaro Handheld Vacuum', 'Cleaning', 'Agaro', 1999],
      ['Eureka Forbes Vacuum Cleaner', 'Cleaning', 'Eureka Forbes', 8999],
      ['Pigeon Kitchen Storage Set', 'Storage', 'Pigeon', 799],
      ['Milton Lunch Box', 'Kitchen', 'Milton', 499],
      ['Butterfly Mixer Grinder', 'Appliances', 'Butterfly', 3999],
      ['Havells Air Purifier', 'Appliances', 'Havells', 9999],
      ['Crompton Ceiling Fan', 'Appliances', 'Crompton', 2499],
      ['AmazonBasics Study Lamp', 'Lighting', 'AmazonBasics', 899],
      ['IKEA Full-Length Mirror', 'Decor', 'IKEA', 1999],
      ['Wakefit Study Table', 'Furniture', 'Wakefit', 4999],
    ],
  },
  'sports-fitness': {
    products: [
      ['Nike Running Shoes', 'Running Shoes', 'Nike', 4999],
      ['Adidas Running Shoes', 'Running Shoes', 'Adidas', 4499],
      ['Puma Training Shoes', 'Training Shoes', 'Puma', 3999],
      ['Reebok Training Shoes', 'Training Shoes', 'Reebok', 3499],
      ['Decathlon Yoga Mat', 'Yoga', 'Decathlon', 999],
      ['Decathlon Resistance Band', 'Fitness Accessories', 'Decathlon', 499],
      ['Decathlon Dumbbell Set', 'Weights', 'Decathlon', 1999],
      ['Cult Sport Dumbbells', 'Weights', 'Cult Sport', 2499],
      ['Boldfit Resistance Bands', 'Fitness Accessories', 'Boldfit', 599],
      ['Boldfit Gym Gloves', 'Fitness Accessories', 'Boldfit', 399],
      ['Boldfit Wrist Support', 'Supports', 'Boldfit', 299],
      ['Boldfit Knee Support', 'Supports', 'Boldfit', 349],
      ['Nivia Football', 'Football', 'Nivia', 899],
      ['Cosco Basketball', 'Basketball', 'Cosco', 799],
      ['Nivia Volleyball', 'Volleyball', 'Nivia', 699],
      ['SS Cricket Bat', 'Cricket', 'SS', 2499],
      ['SG Cricket Bat', 'Cricket', 'SG', 1999],
      ['Yonex Badminton Racket', 'Badminton', 'Yonex', 2999],
      ['Yonex Badminton Shuttlecocks', 'Badminton', 'Yonex', 499],
      ['Decathlon Foam Roller', 'Recovery', 'Decathlon', 799],
    ],
  },
  gaming: {
    products: [
      ['Razer DeathAdder Gaming Mouse', 'Mice', 'Razer', 3999],
      ['Logitech G502 Gaming Mouse', 'Mice', 'Logitech', 4499],
      ['Logitech G Pro Keyboard', 'Keyboards', 'Logitech', 12999],
      ['Razer BlackWidow Keyboard', 'Keyboards', 'Razer', 8999],
      ['Redragon Mechanical Keyboard', 'Keyboards', 'Redragon', 3499],
      ['HyperX Gaming Headset', 'Headsets', 'HyperX', 5999],
      ['SteelSeries Gaming Headset', 'Headsets', 'SteelSeries', 7999],
      ['Sony PlayStation Controller', 'Controllers', 'Sony', 4999],
      ['Xbox Wireless Controller', 'Controllers', 'Xbox', 5499],
      ['Logitech Gaming Controller', 'Controllers', 'Logitech', 3999],
      ['Razer Gaming Mouse Pad', 'Mouse Pads', 'Razer', 1499],
      ['HyperX Gaming Mouse Pad', 'Mouse Pads', 'HyperX', 999],
      ['MSI Gaming Monitor', 'Monitors', 'MSI', 18999],
      ['ASUS TUF Gaming Monitor', 'Monitors', 'ASUS', 16999],
      ['Acer Nitro Gaming Monitor', 'Monitors', 'Acer', 14999],
      ['Green Soul Gaming Chair', 'Chairs', 'Green Soul', 12999],
      ['Zebronics Gaming Desk', 'Desks', 'Zebronics', 7999],
      ['Blue Yeti USB Microphone', 'Microphones', 'Blue', 9999],
      ['Elgato Capture Card', 'Streaming', 'Elgato', 14999],
      ['Meta Quest VR Headset', 'VR', 'Meta', 34999],
    ],
  },
  'books-education': {
    products: [
      ['Python Programming — Beginner Guide', 'Programming', 'TechBooks', 499],
      ['JavaScript Complete Guide', 'Programming', 'TechBooks', 549],
      ['React Development Handbook', 'Programming', 'TechBooks', 599],
      ['C++ Programming Fundamentals', 'Programming', 'TechBooks', 449],
      ['Data Structures & Algorithms', 'Computer Science', 'Academic Press', 699],
      ['Artificial Intelligence Fundamentals', 'Computer Science', 'Academic Press', 799],
      ['Machine Learning Handbook', 'Computer Science', 'Academic Press', 849],
      ['Deep Learning with Python', 'Programming', 'TechBooks', 749],
      ['Database Management Systems', 'Computer Science', 'Academic Press', 599],
      ['Operating Systems Concepts', 'Computer Science', 'Academic Press', 649],
      ['Computer Networks', 'Computer Science', 'Academic Press', 579],
      ['Cybersecurity Fundamentals', 'Computer Science', 'Academic Press', 699],
      ['Full Stack Web Development', 'Programming', 'TechBooks', 649],
      ['UI/UX Design Principles', 'Design', 'Design Press', 549],
      ['Entrepreneurship Handbook', 'Business', 'BizBooks', 399],
      ['The Lean Startup', 'Business', 'BizBooks', 449],
      ['Atomic Habits', 'Self Help', 'LifeBooks', 399],
      ['The Psychology of Money', 'Finance', 'LifeBooks', 349],
      ['Rich Dad Poor Dad', 'Finance', 'LifeBooks', 299],
      ['Competitive Programming Guide', 'Programming', 'TechBooks', 599],
    ],
  },
  'beauty-personal-care': {
    products: [
      ['Cetaphil Gentle Cleanser', 'Skincare', 'Cetaphil', 599],
      ['CeraVe Moisturizing Cream', 'Skincare', 'CeraVe', 899],
      ['Minimalist Vitamin C Serum', 'Skincare', 'Minimalist', 649],
      ['The Ordinary Hyaluronic Acid', 'Skincare', 'The Ordinary', 549],
      ['Neutrogena Sunscreen SPF 50', 'Skincare', 'Neutrogena', 499],
      ['Nivea Body Lotion', 'Body Care', 'Nivea', 349],
      ['Dove Body Wash', 'Body Care', 'Dove', 299],
      ['Dove Shampoo', 'Haircare', 'Dove', 249],
      ["L'Oréal Paris Conditioner", 'Haircare', "L'Oréal Paris", 349],
      ["L'Oréal Hair Serum", 'Haircare', "L'Oréal Paris", 499],
      ['Mamaearth Face Wash', 'Skincare', 'Mamaearth', 399],
      ['Plum Face Mask', 'Skincare', 'Plum', 449],
      ['Lakmé Sunscreen', 'Skincare', 'Lakmé', 399],
      ['Maybelline Lip Balm', 'Makeup', 'Maybelline', 199],
      ['Vaseline Lip Care', 'Body Care', 'Vaseline', 149],
      ['Philips Beard Trimmer', 'Grooming', 'Philips', 1999],
      ['Braun Electric Shaver', 'Grooming', 'Braun', 3499],
      ['Philips Hair Dryer', 'Haircare', 'Philips', 1499],
      ['Oral-B Electric Toothbrush', 'Grooming', 'Oral-B', 2499],
      ['Gillette Grooming Kit', 'Grooming', 'Gillette', 899],
    ],
  },
  'kids-toys': {
    products: [
      ['LEGO Classic Building Set', 'Building Blocks', 'LEGO', 2499],
      ['LEGO City Police Set', 'Building Blocks', 'LEGO', 3499],
      ['Hot Wheels Die-Cast Car Set', 'Vehicles', 'Hot Wheels', 999],
      ['Barbie Fashion Doll', 'Dolls', 'Barbie', 1299],
      ['Nerf Blaster', 'Action Toys', 'Nerf', 1499],
      ['Remote Control Car', 'Remote Control', 'Generic', 1999],
      ['Remote Control Helicopter', 'Remote Control', 'Generic', 2499],
      ['Magnetic Building Tiles', 'Building Blocks', 'Generic', 1799],
      ['Building Blocks Set', 'Building Blocks', 'Generic', 899],
      ['Educational Robot Kit', 'STEM', 'Generic', 2999],
      ['STEM Science Kit', 'STEM', 'Generic', 1499],
      ['Beginner Electronics Kit', 'STEM', 'Generic', 1299],
      ['Kids Drawing Tablet', 'Arts & Crafts', 'Generic', 999],
      ['Magnetic Drawing Board', 'Arts & Crafts', 'Generic', 499],
      ['Art & Craft Kit', 'Arts & Crafts', 'Generic', 699],
      ['Crayola Coloring Set', 'Arts & Crafts', 'Crayola', 399],
      ['Jigsaw Puzzle', 'Puzzles', 'Generic', 349],
      ['Memory Matching Game', 'Board Games', 'Generic', 499],
      ['Chess Set', 'Board Games', 'Generic', 599],
      ['Monopoly Junior', 'Board Games', 'Hasbro', 799],
      ['Toy Kitchen Set', 'Pretend Play', 'Generic', 1999],
      ['Doctor Pretend-Play Kit', 'Pretend Play', 'Generic', 899],
      ['Kids Musical Keyboard', 'Musical Toys', 'Generic', 1499],
      ['Teddy Bear', 'Soft Toys', 'Generic', 599],
      ['Dinosaur Toy Set', 'Action Toys', 'Generic', 799],
    ],
  },
  'pets-furry-paws': {
    products: [
      ['Pedigree Adult Dog Food', 'Dog Food', 'Pedigree', 1499],
      ['Royal Canin Maxi Adult', 'Dog Food', 'Royal Canin', 3499],
      ['Drools Adult Dog Food', 'Dog Food', 'Drools', 1299],
      ['Farmina N&D Dog Food', 'Dog Food', 'Farmina', 2999],
      ['Pedigree Dentastix', 'Dog Treats', 'Pedigree', 399],
      ['KONG Classic Dog Toy', 'Dog Toys', 'KONG', 699],
      ['Chuckit! Fetch Ball', 'Dog Toys', 'Chuckit!', 499],
      ['Adjustable Dog Harness', 'Dog Accessories', 'Generic', 899],
      ['Retractable Dog Leash', 'Dog Accessories', 'Generic', 599],
      ['Orthopedic Dog Bed', 'Dog Beds', 'Generic', 2499],
      ['Whiskas Adult Cat Food', 'Cat Food', 'Whiskas', 999],
      ['Royal Canin Persian Cat Food', 'Cat Food', 'Royal Canin', 2499],
      ['Me-O Cat Food', 'Cat Food', 'Me-O', 799],
      ['Sheba Wet Cat Food', 'Cat Food', 'Sheba', 499],
      ['Cat Scratching Post', 'Cat Toys', 'Generic', 1299],
      ['Interactive Cat Toy', 'Cat Toys', 'Generic', 399],
      ['Cat Litter Box', 'Cat Accessories', 'Generic', 899],
      ['Cat Grooming Brush', 'Cat Grooming', 'Generic', 299],
      ['Premium Bird Seed Mix', 'Bird Food', 'Generic', 349],
      ['Aquarium Starter Kit', 'Aquarium', 'Generic', 1999],
    ],
  },
}

const discounts = [10, 15, 20, 25, 30, 35, 40, 45, 50]
const badges = [null, null, null, 'Best Seller', 'New', 'Hot Deal', null, 'Top Rated']

function escapeString(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

const definitions = []
let globalIndex = 0

for (const [categoryId, { products: items }] of Object.entries(catalogue)) {
  items.forEach(([name, subcategory, brand, price], index) => {
    const num = index + 1
    const id = `${categoryId}-${num}`
    const discount = discounts[(globalIndex + num) % discounts.length]
    const badge = badges[(globalIndex + num) % badges.length]
    definitions.push({
      id,
      name,
      category: categoryId,
      subcategory,
      brand,
      price,
      discount,
      badge,
      index: globalIndex + num,
    })
  })
  globalIndex += items.length
}

const fileContent = `/**
 * NexaMart product catalogue — 200 products across 9 categories.
 * Images use seeded placeholder URLs (replace with real assets later).
 */

const PLACEHOLDER_BASE = 'https://picsum.photos/seed'

/** Generate a consistent placeholder image URL for a product */
export function getProductImage(productId) {
  return \`\${PLACEHOLDER_BASE}/nexamart-\${productId}/400/400\`
}

/** Default fallback image when a product image fails to load */
export const FALLBACK_IMAGE = \`\${PLACEHOLDER_BASE}/nexamart-fallback/400/400\`

function createProduct(def) {
  const {
    id,
    name,
    category,
    subcategory,
    brand,
    price,
    discount,
    badge = null,
    rating,
    reviewCount,
    description,
    features,
    stock,
    tags,
  } = def

  const num = parseInt(id.split('-').pop(), 10) || 1
  const originalPrice = Math.round(price / (1 - discount / 100))
  const computedRating = rating ?? Math.round((3.5 + (num % 15) * 0.1) * 10) / 10
  const computedReviewCount = reviewCount ?? 50 + ((num * 137) % 4950)

  return {
    id,
    name,
    category,
    subcategory,
    brand,
    price,
    originalPrice,
    discount,
    rating: computedRating,
    reviewCount: computedReviewCount,
    image: getProductImage(id),
    description:
      description ??
      \`\${name} by \${brand} — premium quality available exclusively on NexaMart. Perfect for everyday use with reliable performance and great value.\`,
    features: features ?? [
      \`Brand: \${brand}\`,
      \`Category: \${subcategory}\`,
      'Quality assured by NexaMart',
      'Easy 7-day returns',
      'Fast delivery available',
    ],
    stock: stock ?? 10 + ((num * 23) % 90),
    badge,
    tags: tags ?? [
      brand.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      subcategory.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category,
    ],
  }
}

const productDefinitions = [
${definitions
  .map(
    (d) =>
      `  { id: '${d.id}', name: '${escapeString(d.name)}', category: '${d.category}', subcategory: '${escapeString(d.subcategory)}', brand: '${escapeString(d.brand)}', price: ${d.price}, discount: ${d.discount}${d.badge ? `, badge: '${d.badge}'` : ''} },`,
  )
  .join('\n')}
]

export const products = productDefinitions.map(createProduct)

export function getProductById(id) {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(categoryId) {
  return products.filter((product) => product.category === categoryId)
}

export function getProductsByBrand(brand) {
  return products.filter(
    (product) => product.brand.toLowerCase() === brand.toLowerCase(),
  )
}

export function getFeaturedProducts(limit = 8) {
  return products.filter((product) => product.badge).slice(0, limit)
}
`

writeFileSync(join(__dirname, '../src/data/products.js'), fileContent, 'utf8')
console.log(`Generated ${definitions.length} products`)
