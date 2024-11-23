const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Category Images
  {
    url: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0',
    filename: 'categories/breakfast.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
    filename: 'categories/hot-drinks.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1543661975-42d2b5d61924',
    filename: 'categories/cold-drinks.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    filename: 'categories/pastries.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    filename: 'categories/lunch.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
    filename: 'categories/desserts.jpg'
  },

  // Breakfast Items
  {
    url: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2',
    filename: 'menu/avocado-toast.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1590301157890-4810ed352733',
    filename: 'menu/acai-bowl.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7',
    filename: 'menu/eggs-benedict.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
    filename: 'menu/french-toast.jpg'
  },

  // Hot Drinks
  {
    url: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d',
    filename: 'menu/cappuccino.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002',
    filename: 'menu/matcha-latte.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1577805947697-89e18249d767',
    filename: 'menu/chai-latte.jpg'
  },

  // Cold Drinks
  {
    url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
    filename: 'menu/iced-latte.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
    filename: 'menu/cold-brew.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625',
    filename: 'menu/fruit-smoothie.jpg'
  },

  // Pastries
  {
    url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    filename: 'menu/croissant.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75',
    filename: 'menu/pain-au-chocolat.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1620921586333-b7564c9bdc7a',
    filename: 'menu/almond-croissant.jpg'
  },

  // Lunch
  {
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    filename: 'menu/quinoa-bowl.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847',
    filename: 'menu/chicken-sandwich.jpg'
  },

  // Desserts
  {
    url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    filename: 'menu/tiramisu.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    filename: 'menu/chocolate-cake.jpg'
  }
];

const downloadImage = (url, filename) => {
  const targetPath = path.join(__dirname, '..', 'public', 'images', filename);
  const targetDir = path.dirname(targetPath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Add Unsplash parameters for better quality
  const fullUrl = `${url}?auto=format&fit=crop&w=1200&q=80`;
  
  https.get(fullUrl, (response) => {
    const fileStream = fs.createWriteStream(targetPath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Download all images
images.forEach(image => {
  downloadImage(image.url, image.filename);
});
