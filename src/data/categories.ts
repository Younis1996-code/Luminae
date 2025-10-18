export type SubCategory = {
  title: string;
  items: string[];
};

export type CategoryData = {
  id: number;
  name: string;
  image?: string;
  subCategories: SubCategory[];
};


export const categories: CategoryData[] = [
  {
    id: 1,
    name: "Woman",
    image: "/images/",
    subCategories: [
      {
        title: "Shoe & Bag",
        items: ["Casual Shoes", "Boots", "Sandals", "Slippers"],
      },
      {
        title: "Luxury & Designer",
        items: ["Towels", "Bathroom Scales", "Bath Mats", "Shower Caps"],
      },
      {
        title: "Home Textile",
        items: ["Bedding", "Pillows", "Handkerchief Towels", "Curtain"],
      },
      {
        title: "Cosmetics",
        items: [
          "Shampoo and Conditioner",
          "Styling Products",
          "Hair Accessories",
          "Men’s Grooming",
        ],
      },
      {
        title: "Party Supplies",
        items: [
          "Event & Party",
          "Christmas",
          "Artificial Decorations",
          "Wedding",
        ],
      },
      {
        title: "Sport & Outdoors",
        items: [
          "Team Sports",
          "Water Sports",
          "Outdoor Recreation",
          "Fitness Equipment",
        ],
      },
      {
        title: "Clothes",
        items: [
          "Bottoms",
          "Women's Clothing",
          "T-Shirts and Tops",
          "Dresses",
          "Outerwear",
          "Formal Wear",
          "Casual Wear",
          "Seasonal Collections",
          "Sports Bras",
          "Workout Tops",
          "Fall Wardrobe",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Male",
    image: "/images/",
    subCategories: [
      {
        title: "Clothes",
        items: [
          "T-Shirts",
          "Pants",
          "Jackets",
          "Shirts",
          "Sweatshirts",
          "Suits",
        ],
      },
      {
        title: "Shoes & Accessories",
        items: [
          "Casual Shoes",
          "Formal Shoes",
          "Belts",
          "Wallets",
          "Watches",
          "Socks",
        ],
      },
      {
        title: "Grooming",
        items: ["Shaving Kits", "Perfumes", "Skin Care", "Hair Care"],
      },
      {
        title: "Sportswear",
        items: ["Running", "Outdoor", "Training", "Gym Wear"],
      },
    ],
  },

  {
    id: 3,
    name: "Mother-Child",
    image: "/images/",
    subCategories: [
      {
        title: "Baby Essentials",
        items: ["Diapers", "Baby Wipes", "Feeding Bottles", "Pacifiers"],
      },
      {
        title: "Children’s Clothing",
        items: [
          "Tops",
          "Pants",
          "Dresses",
          "Sleepwear",
          "School Uniforms",
          "Shoes",
        ],
      },
      {
        title: "Toys & Games",
        items: ["Educational Toys", "Action Figures", "Board Games", "Dolls"],
      },
      {
        title: "Maternity",
        items: ["Maternity Dresses", "Nursing Bras", "Comfort Wear"],
      },
    ],
  },

  {
    id: 4,
    name: "Home & Furniture",
    image: "/images/",
    subCategories: [
      {
        title: "Living Room",
        items: ["Sofas", "Coffee Tables", "TV Units", "Armchairs"],
      },
      {
        title: "Bedroom",
        items: ["Beds", "Wardrobes", "Dressers", "Nightstands"],
      },
      {
        title: "Home Decor",
        items: ["Curtains", "Wall Art", "Mirrors", "Lighting"],
      },
      {
        title: "Kitchen",
        items: ["Cookware", "Utensils", "Storage", "Appliances"],
      },
    ],
  },

  {
    id: 5,
    name: "Super Market",
    image: "/images/",
    subCategories: [
      {
        title: "Beverages",
        items: ["Juices", "Coffee", "Tea", "Soft Drinks", "Energy Drinks"],
      },
      {
        title: "Snacks",
        items: ["Chips", "Biscuits", "Nuts", "Chocolate", "Candy"],
      },
      {
        title: "Pantry",
        items: ["Rice", "Pasta", "Canned Food", "Oils", "Spices"],
      },
      {
        title: "Personal Care",
        items: ["Toothpaste", "Soap", "Shampoo", "Deodorant"],
      },
    ],
  },

  {
    id: 6,
    name: "Cosmetics",
    image: "/images/",
    subCategories: [
      {
        title: "Makeup",
        items: ["Foundation", "Lipstick", "Mascara", "Blush", "Concealer"],
      },
      {
        title: "Skincare",
        items: ["Moisturizers", "Serums", "Cleansers", "Face Masks", "Toners"],
      },
      {
        title: "Hair Care",
        items: [
          "Shampoo",
          "Conditioner",
          "Hair Oils",
          "Hair Masks",
          "Styling Products",
        ],
      },
      {
        title: "Fragrance",
        items: ["Perfumes", "Body Mists", "Deodorants"],
      },
    ],
  },

  {
    id: 7,
    name: "Shoe & Bag",
    image: "/images/.jpg",
    subCategories: [
      {
        title: "Bags",
        items: [
          "Handbags",
          "Backpacks",
          "Tote Bags",
          "Crossbody Bags",
          "Wallets",
        ],
      },
      {
        title: "Shoes",
        items: ["Sneakers", "Heels", "Flats", "Loafers", "Boots"],
      },
      {
        title: "Travel",
        items: ["Luggage", "Travel Pouches", "Duffel Bags"],
      },
    ],
  },

  {
    id: 8,
    name: "Electronic",
    image: "/images/.jpg",
    subCategories: [
      {
        title: "Phones & Tablets",
        items: ["Smartphones", "Tablets", "Accessories", "Chargers"],
      },
      {
        title: "Computers",
        items: ["Laptops", "Monitors", "Keyboards", "Mice", "Headphones"],
      },
      {
        title: "TV & Audio",
        items: ["Smart TVs", "Speakers", "Projectors", "Home Theater"],
      },
      {
        title: "Appliances",
        items: [
          "Refrigerators",
          "Washing Machines",
          "Microwaves",
          "Vacuum Cleaners",
        ],
      },
    ],
  },

  {
    id: 9,
    name: "Sport & Outdoor",
    image: "/images/.jpg",
    subCategories: [
      {
        title: "Sportswear",
        items: ["T-Shirts", "Shorts", "Track Pants", "Sports Bras"],
      },
      {
        title: "Equipment",
        items: ["Weights", "Yoga Mats", "Balls", "Rackets", "Gloves"],
      },
      {
        title: "Outdoor",
        items: ["Camping Gear", "Tents", "Sleeping Bags", "Hiking Boots"],
      },
    ],
  },

  {
    id: 10,
    name: "Best Seller",
    image: "/images/.jpg",
    subCategories: [
      {
        title: "Top Products",
        items: [
          "Trending Electronics",
          "Most Loved Fashion",
          "Top-Rated Beauty",
          "Best Home Essentials",
        ],
      },
      {
        title: "Weekly Picks",
        items: [
          "Editor’s Choice",
          "Customer Favorites",
          "New Arrivals",
          "Exclusive Deals",
        ],
      },
    ],
  },
];
