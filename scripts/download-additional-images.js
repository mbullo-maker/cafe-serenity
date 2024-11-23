const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1543661975-42d2b5d61924',
    filename: 'cold-drinks-banner.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
    filename: 'desserts-banner.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af',
    filename: 'sandwiches-banner.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    filename: 'salads-banner.jpg'
  }
];

const downloadImage = (url, filename) => {
  const targetPath = path.join(__dirname, '..', 'public', 'images', 'menu', filename);
  
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

// Create directory if it doesn't exist
const menuImagesDir = path.join(__dirname, '..', 'public', 'images', 'menu');
if (!fs.existsSync(menuImagesDir)) {
  fs.mkdirSync(menuImagesDir, { recursive: true });
}

// Download all images
images.forEach(image => {
  downloadImage(image.url, image.filename);
});
