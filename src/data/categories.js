export const categories = [
  {
    id: 'fashion',
    name: 'Fashion',
    description:
      'Trendy apparel, footwear and accessories for every style — from casual wear to formal classics.',
    icon: '👗',
    theme: {
      gradient: 'from-pink-500 to-rose-600',
      bgLight: 'bg-pink-50',
      text: 'text-pink-700',
      border: 'border-pink-200',
      accent: '#ec4899',
    },
    productCount: 25,
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description:
      'Latest gadgets, audio gear, smart devices and accessories for work, entertainment and everyday life.',
    icon: '📱',
    theme: {
      gradient: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      accent: '#3b82f6',
    },
    productCount: 25,
  },
  {
    id: 'home-living',
    name: 'Home & Living',
    description:
      'Everything to make your home comfortable — furniture, kitchen essentials, lighting and decor.',
    icon: '🏠',
    theme: {
      gradient: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      accent: '#f59e0b',
    },
    productCount: 25,
  },
  {
    id: 'sports-fitness',
    name: 'Sports & Fitness',
    description:
      'Gear up for your active lifestyle with sports equipment, fitness accessories and workout essentials.',
    icon: '⚽',
    theme: {
      gradient: 'from-green-500 to-emerald-600',
      bgLight: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      accent: '#22c55e',
    },
    productCount: 20,
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description:
      'Level up your setup with gaming peripherals, monitors, chairs and immersive accessories.',
    icon: '🎮',
    theme: {
      gradient: 'from-purple-500 to-violet-600',
      bgLight: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200',
      accent: '#8b5cf6',
    },
    productCount: 20,
  },
  {
    id: 'books-education',
    name: 'Books & Education',
    description:
      'Expand your knowledge with programming guides, academic references and bestselling reads.',
    icon: '📚',
    theme: {
      gradient: 'from-teal-500 to-cyan-600',
      bgLight: 'bg-teal-50',
      text: 'text-teal-700',
      border: 'border-teal-200',
      accent: '#14b8a6',
    },
    productCount: 20,
  },
  {
    id: 'beauty-personal-care',
    name: 'Beauty & Personal Care',
    description:
      'Skincare, haircare and grooming essentials from trusted brands for your daily routine.',
    icon: '💄',
    theme: {
      gradient: 'from-fuchsia-500 to-pink-600',
      bgLight: 'bg-fuchsia-50',
      text: 'text-fuchsia-700',
      border: 'border-fuchsia-200',
      accent: '#d946ef',
    },
    productCount: 20,
  },
  {
    id: 'kids-toys',
    name: 'Kids & Toys',
    description:
      'Fun and educational toys, games and activities to spark creativity and joy in children.',
    icon: '🧸',
    theme: {
      gradient: 'from-yellow-400 to-amber-500',
      bgLight: 'bg-yellow-50',
      text: 'text-yellow-700',
      border: 'border-yellow-200',
      accent: '#eab308',
    },
    productCount: 25,
  },
  {
    id: 'pets-furry-paws',
    name: 'Pets / Furry Paws',
    description:
      'Nutritious pet food, toys and care essentials for dogs, cats and other furry companions.',
    icon: '🐾',
    theme: {
      gradient: 'from-lime-500 to-green-600',
      bgLight: 'bg-lime-50',
      text: 'text-lime-700',
      border: 'border-lime-200',
      accent: '#84cc16',
    },
    productCount: 20,
  },
]

export const categoryIds = categories.map((category) => category.id)

export function getCategoryById(id) {
  return categories.find((category) => category.id === id)
}
