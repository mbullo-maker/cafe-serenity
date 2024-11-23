const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const coupons = [
  {
    id: 'welcome',
    text: 'WELCOME 10% OFF',
    color: '#F59E0B'
  },
  {
    id: 'breakfast',
    text: '$5 OFF BREAKFAST',
    color: '#D97706'
  },
  {
    id: 'lunch',
    text: '15% OFF LUNCH',
    color: '#B45309'
  }
];

const width = 800;
const height = 400;

function generateCouponImage(coupon) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = coupon.color;
  ctx.fillRect(0, 0, width, height);

  // Pattern
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 2;
  for (let i = 0; i < width; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + 20, height);
    ctx.stroke();
  }

  // Text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(coupon.text, width / 2, height / 2);

  // Save image
  const buffer = canvas.toBuffer('image/jpeg');
  const outputPath = path.join(__dirname, '..', 'public', 'images', 'coupons', `${coupon.id}.jpg`);
  fs.writeFileSync(outputPath, buffer);
}

// Create coupons directory if it doesn't exist
const couponsDir = path.join(__dirname, '..', 'public', 'images', 'coupons');
if (!fs.existsSync(couponsDir)) {
  fs.mkdirSync(couponsDir, { recursive: true });
}

// Generate images
coupons.forEach(generateCouponImage);
