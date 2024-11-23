const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Menu Category Banners
  {
    url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31',
    filename: 'coffee-banner.jpg',
    description: 'Coffee bar banner'
  },
  {
    url: 'https://images.unsplash.com/photo-1543661975-42d2b5d61924',
    filename: 'cold-drinks-banner.jpg',
    description: 'Cold drinks banner'
  },
  {
    url: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f',
    filename: 'pastries-banner.jpg',
    description: 'Pastries banner'
  },
  {
    url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
    filename: 'desserts-banner.jpg',
    description: 'Desserts banner'
  },
  {
    url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af',
    filename: 'sandwiches-banner.jpg',
    description: 'Sandwiches banner'
  },
  {
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    filename: 'salads-banner.jpg',
    description: 'Salads banner'
  },
  {
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
    filename: 'wine-banner.jpg',
    description: 'Wine bar banner'
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    filename: 'dinner-banner.jpg',
    description: 'Dinner banner'
  },

  // Coffee Menu Items
  {
    url: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f',
    filename: 'classic-espresso.jpg',
    description: 'Classic espresso'
  },
  {
    url: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d',
    filename: 'cappuccino.jpg',
    description: 'Cappuccino'
  },
  {
    url: 'https://images.unsplash.com/photo-1587075196404-e05ef65f25e8',
    filename: 'caramel-macchiato.jpg',
    description: 'Caramel macchiato'
  },
  {
    url: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e',
    filename: 'mocha.jpg',
    description: 'Café mocha'
  },
  {
    url: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f',
    filename: 'latte.jpg',
    description: 'Café latte'
  },
  {
    url: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9',
    filename: 'affogato.jpg',
    description: 'Affogato'
  },
  {
    url: 'https://images.unsplash.com/photo-1551030173-122aabc4489c',
    filename: 'americano.jpg',
    description: 'Americano'
  },
  {
    url: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61',
    filename: 'flat-white.jpg',
    description: 'Flat white'
  },

  // Cold Drinks
  {
    url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd',
    filename: 'iced-coffee.jpg',
    description: 'Iced coffee'
  },
  {
    url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc',
    filename: 'smoothie.jpg',
    description: 'Fruit smoothie'
  },
  {
    url: 'https://images.unsplash.com/photo-1544145945-f90425340c7e',
    filename: 'iced-tea.jpg',
    description: 'Iced tea'
  },

  // Pastries
  {
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    filename: 'croissants.jpg',
    description: 'Fresh croissants'
  },
  {
    url: 'https://images.unsplash.com/photo-1558401391-7899b4bd5bbf',
    filename: 'muffins.jpg',
    description: 'Assorted muffins'
  },
  {
    url: 'https://images.unsplash.com/photo-1605197584547-b93b1a8e13e4',
    filename: 'danish.jpg',
    description: 'Danish pastries'
  },

  // Desserts
  {
    url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
    filename: 'chocolate-cake.jpg',
    description: 'Chocolate cake'
  },
  {
    url: 'https://images.unsplash.com/photo-1612203985729-70726954388c',
    filename: 'tiramisu.jpg',
    description: 'Tiramisu'
  },
  {
    url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e',
    filename: 'cheesecake.jpg',
    description: 'Cheesecake'
  },

  // Sandwiches
  {
    url: 'https://images.unsplash.com/photo-1553909489-cd47e0907980',
    filename: 'club-sandwich.jpg',
    description: 'Club sandwich'
  },
  {
    url: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847',
    filename: 'panini.jpg',
    description: 'Grilled panini'
  },
  {
    url: 'https://images.unsplash.com/photo-1559054663-e8d23213f55c',
    filename: 'veggie-sandwich.jpg',
    description: 'Vegetarian sandwich'
  },

  // Salads
  {
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    filename: 'garden-salad.jpg',
    description: 'Garden salad'
  },
  {
    url: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40',
    filename: 'caesar-salad.jpg',
    description: 'Caesar salad'
  },
  {
    url: 'https://images.unsplash.com/photo-1604909052743-94e838986d24',
    filename: 'quinoa-salad.jpg',
    description: 'Quinoa salad'
  },

  // Wine
  {
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
    filename: 'red-wine.jpg',
    description: 'Red wine'
  },
  {
    url: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445',
    filename: 'white-wine.jpg',
    description: 'White wine'
  },
  {
    url: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb',
    filename: 'champagne.jpg',
    description: 'Champagne'
  },

  // Dinner
  {
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    filename: 'steak.jpg',
    description: 'Grilled steak'
  },
  {
    url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
    filename: 'pasta.jpg',
    description: 'Fresh pasta'
  },
  {
    url: 'https://images.unsplash.com/photo-1559847844-5315695dadae',
    filename: 'salmon.jpg',
    description: 'Grilled salmon'
  }
];

const downloadImage = (url, filename, description) => {
  const targetPath = path.join(__dirname, '..', 'public', 'images', 'menu', filename);
  
  // Add Unsplash parameters for better quality
  const fullUrl = `${url}?auto=format&fit=crop&w=1200&q=80`;
  
  https.get(fullUrl, (response) => {
    const fileStream = fs.createWriteStream(targetPath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${description} (${filename})`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${description} (${filename}):`, err.message);
  });
};

// Create directory if it doesn't exist
const menuImagesDir = path.join(__dirname, '..', 'public', 'images', 'menu');
if (!fs.existsSync(menuImagesDir)) {
  fs.mkdirSync(menuImagesDir, { recursive: true });
}

// Download all images
console.log('Starting download of all menu images...');
images.forEach(image => {
  downloadImage(image.url, image.filename, image.description);
});
