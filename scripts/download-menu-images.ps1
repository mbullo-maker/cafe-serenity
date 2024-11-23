# Function to download an image from Pexels-like URLs
function Download-MenuImage {
    param (
        [string]$Category,
        [string]$ImageName,
        [string]$ImageUrl
    )
    
    $outputPath = "../public/images/menu/$Category/$ImageName.jpg"
    
    # Only download if the file doesn't exist
    if (-not (Test-Path $outputPath)) {
        try {
            Invoke-WebRequest -Uri $ImageUrl -OutFile $outputPath
            Write-Host "Downloaded $ImageName for $Category"
            # Add a small delay to avoid rate limiting
            Start-Sleep -Milliseconds 500
        }
        catch {
            Write-Host "Failed to download $ImageName for $Category"
        }
    }
}

# Sample image URLs (these would be from a stock photo service)
$imageUrls = @{
    # Breakfast items
    'breakfast/pancakes' = 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    'breakfast/waffles' = 'https://images.pexels.com/photos/221069/pexels-photo-221069.jpeg'
    'breakfast/breakfast-platter' = 'https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg'
    'breakfast/oatmeal' = 'https://images.pexels.com/photos/216951/pexels-photo-216951.jpeg'
    'breakfast/breakfast-sandwich' = 'https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg'
    
    # Coffee items
    'coffee/irish-coffee' = 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
    'coffee/turkish-coffee' = 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg'
    'coffee/caramel-macchiato' = 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
    'coffee/vanilla-latte' = 'https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg'
    'coffee/frappuccino' = 'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg'
    
    # Dessert items
    'desserts/apple-pie' = 'https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg'
    'desserts/chocolate-mousse' = 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg'
    'desserts/ice-cream-sundae' = 'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg'
    'desserts/brownie' = 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg'
    'desserts/fruit-tart' = 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg'
    
    # Cold Beverages items
    'cold-beverages/lemonade' = 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg'
    'cold-beverages/berry-smoothie' = 'https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg'
    'cold-beverages/iced-green-tea' = 'https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg'
    'cold-beverages/mango-lassi' = 'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg'
    'cold-beverages/mint-mojito' = 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg'
    
    # Pastries items
    'pastries/croissant' = 'https://images.pexels.com/photos/3724/food-morning-breakfast-orange.jpg'
    'pastries/danish' = 'https://images.pexels.com/photos/1657343/pexels-photo-1657343.jpeg'
    'pastries/cinnamon-roll' = 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg'
    'pastries/scone' = 'https://images.pexels.com/photos/1657351/pexels-photo-1657351.jpeg'
    'pastries/muffin' = 'https://images.pexels.com/photos/1657358/pexels-photo-1657358.jpeg'
    
    # Pizza items
    'pizza/margherita' = 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg'
    'pizza/pepperoni' = 'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg'
    'pizza/vegetarian' = 'https://images.pexels.com/photos/1146754/pexels-photo-1146754.jpeg'
    'pizza/hawaiian' = 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg'
    'pizza/bbq-chicken' = 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg'
    
    # Sandwiches items
    'sandwiches/club-sandwich' = 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg'
    'sandwiches/grilled-cheese' = 'https://images.pexels.com/photos/1647165/pexels-photo-1647165.jpeg'
    'sandwiches/blt' = 'https://images.pexels.com/photos/1647166/pexels-photo-1647166.jpeg'
    'sandwiches/tuna' = 'https://images.pexels.com/photos/1647167/pexels-photo-1647167.jpeg'
    'sandwiches/veggie-wrap' = 'https://images.pexels.com/photos/1647168/pexels-photo-1647168.jpeg'
}

# Download all images
foreach ($item in $imageUrls.GetEnumerator()) {
    $category = $item.Key.Split('/')[0]
    $imageName = $item.Key.Split('/')[1]
    Download-MenuImage -Category $category -ImageName $imageName -ImageUrl $item.Value
}

Write-Host "Image download complete!"
