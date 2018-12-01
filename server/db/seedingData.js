const responses = (product, idx) => {
  const reviews = [
    `Not able to tell you how happy I am with ${product}. I don't always clop, but when I do, it's because of ${product}.`,
    `I wish I would have thought of it first. No matter where you go, ${product} is the coolest, most happening thing around!`,
    `${product} has really helped our business.`,
    `${product} saved my business. I would be lost without ${product}. You guys rock! Absolutely wonderful!`,
    `We were treated like royalty. ${product} is great.`,
    `${product} saved my business. It's exactly what I've been looking for.`,
    `${product} is the next killer app. After using ${product} my business skyrocketed! ${product} is worth much more than I paid. Wow what great service, I love it!`,
    `${product} did exactly what you said it does. The best on the net!`,
    `Thank you so much for your help. After using ${product} my business skyrocketed!`,
    `${product} is the next killer app. ${product} is worth much more than I paid. I am really satisfied with my ${product}. ${product} is the most valuable business resource we have EVER purchased.`,
    `I would also like to say thank you to all your staff. ${product} saved my business. Thank You! I am really satisfied with my ${product}.`,
    `${product} is awesome! Thank you for making it painless, pleasant and most of all hassle free!`,
    `I STRONGLY recommend ${product} to EVERYONE interested in running a successful online business!`,
    `Great job, I will definitely be ordering again! Great job, I will definitely be ordering again! ${product} was the best investment I ever made. Very easy to use.`,
    'It\'s the perfect solution for our business. I am so pleased with this product.',
    `I love your system. I have gotten at least 50 times the value from ${product}.`,
    `Not able to tell you how happy I am with ${product}. Thanks guys, keep up the good work! You won't regret it. We can't understand how we've been living without ${product}.`,
    `I am completely blown away. I STRONGLY recommend ${product} to EVERYONE interested in running a successful online business!`,
    `${product} was the best investment I ever made.`,
    `I am really satisfied with my ${product}. Man, this thing is getting better and better as I learn more about it.`,
    `${product} is great. I love your system.`,
    `Thank you so much for your help. The service was excellent. I don't always clop, but when I do, it's because of ${product}. I have gotten at least 50 times the value from ${product}.`,
    `${product} is the most valuable business resource we have EVER purchased.`,
    `After using ${product} my business skyrocketed! It's really wonderful. We're loving it. ${product} is both attractive and highly adaptable.`,
    `I'm good to go. Not able to tell you how happy I am with ${product}. It really saves me time and effort. ${product} is exactly what our business has been lacking. ${product} was the best investment I ever made.`,
    `The service was excellent. Great job, I will definitely be ordering again! ${product} has got everything I need. ${product} has completely surpassed our expectations.`,
    `I don't always clop, but when I do, it's because of ${product}. Since I invested in ${product} I made over 100,000 dollars profits. I will recommend you to my colleagues.`,
    'I am so pleased with this product. Really good. Great job, I will definitely be ordering again! Wow what great service, I love it!',
    `Needless to say we are extremely satisfied with the results. Wow what great service, I love it! ${product} is worth much more than I paid. ${product} is exactly what our business has been lacking.`,
    `I have gotten at least 50 times the value from ${product}.`,
    `Really good. ${product} is the most valuable business resource we have EVER purchased. I am really satisfied with my ${product}. Very easy to use.`,
    'Thank you so much for your help.',
    `${product} is both attractive and highly adaptable. ${product} has got everything I need. No matter where you go, ${product} is the coolest, most happening thing around!`,
    `Really good. You won't regret it. ${product} is the real deal!`,
    `You guys rock! I'd be lost without ${product}.`,
    `${product} is the most valuable business resource we have EVER purchased. I would also like to say thank you to all your staff.`,
    `${product} is both attractive and highly adaptable. ${product} is the most valuable business resource we have EVER purchased. ${product} is worth much more than I paid. ${product} is the most valuable business resource we have EVER purchased.`,
    'Very easy to use. You\'ve saved our business! Thank you for making it painless, pleasant and most of all hassle free!',
    `${product} has really helped our business. ${product} is the most valuable business resource we have EVER purchased.`,
    `Absolutely wonderful! If you aren't sure, always go for ${product}. We've seen amazing results already. It fits our needs perfectly.`,
    `Without ${product}, we would have gone bankrupt by now. ${product} is the real deal!`,
    'I love your system. I could probably go into sales for you. Wow what great service, I love it!',
  ];
  return reviews[idx];
};

const maker = [
  "Microsoft's",
  "Coca Cola's",
  "Amazon's",
  "Costco's",
  "Caitlin's",
  "Jack's",
  "Steven's",
  "Marc's",
  "Jackie's",
  "James'",
  "Rocky's",
  "Spencer's",
  "Cody's",
  "Hailey's",
  "Robin's",
  "Taylor's",
  "Mikayla's",
  "Jessica's",
  "Stephanie's",
  "Daniel's",
  "Drew's",
  "Stephen's",
  "Patrick's",
  "Google's",
  "Facebook's",
  "Apple's",
  "Tesla's",
];

const items = [
  'Ghost in a Jar',
  'Haunted Rubber Duck',
  'Bag of Brussel Sprouts',
  'Partially Assembled Snowman',
  'Self-assembling Tent',
  'Bacon-flavored Floss',
  'Ukelele',
  'Chicken-flavored Soap',
  'Unicorn Horn',
  'Personal Travel Bidet',
  'Fart in a Bag',
  'Half-eaten Bag of Carrots',
  'Beard Hat',
  'Sushi Pillow',
  'One Ring to Rule Them All',
  'Elder Wand',
  'Cloak of Invisibility',
  "Sorceror's Stone",
  'Life Model Decoy',
  'Black Widow Costume',
  'Miniature Hulk Hands',
  'Nice and Naughty List',
  'Mrs. Claus Costume',
  'Half-eaten Candy Cane',
  'Lightsaber',
  'Ray Gun',
  'Game-worn Jersey',
  'MAGA Hat',
  'AR-15 Assault Rifle',
  'Macbook Pro',
  'Sword of a Thousand Truths',
  'Baby Shark Slippers',
  'Nicolas Cage pillowcase',
  'Obama Toilet Paper',
  'Canteen of Coyote Urine',
  '55 Gallon Barrel of Lube',
  'Full Body Spandex Suit',
  'Jeff Goldblum Shower Cutain',
  'Life-sized Barbie',
  'Vibranium Ninja Star',
  'Book of Latin Translations',
  'Adult Kangaroo Suit',
  'Slytherin Robe',
  '3 x 12oz Wagyu Ribeye Steaks',
  'Maltese Falcon',
  'Mjolnir',
  'Bag of Legal Weed',
  'Cranberry Sauce',
  'Pokedex',
  '100% Certified Organic and Holistic Baby Diapers',
  'Love Potion',
  'Bottled Gamma Radiation',
  'TARDIS',
  'Shoes with Everlasting Soles',
  'Everlasting Gobstopper',
  'Self-warming Toilet Seat',
  'AI Fart Vaporizer',
  'Raspberry Pi Smart Mirror',
  'Adamantium Dentures',
  'Reusable Adult Diapers',
];

module.exports.responses = responses;
module.exports.maker = maker;
module.exports.items = items;