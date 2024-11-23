# Function to create a placeholder image using HTML and screenshot
function Create-PlaceholderImage {
    param (
        [string]$Category,
        [string]$ImageName,
        [string]$DisplayName
    )
    
    $outputPath = "../public/images/menu/$Category"
    $htmlPath = "$outputPath/temp.html"
    $imagePath = "$outputPath/$ImageName.jpg"
    
    # Create HTML content
    $htmlContent = @"
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        .placeholder {
            width: 800px;
            height: 600px;
            background: linear-gradient(45deg, #e0e0e0, #f5f5f5);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .text {
            font-size: 24px;
            color: #666;
            text-align: center;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="placeholder">
        <div class="text">$DisplayName</div>
    </div>
</body>
</html>
"@

    # Create directory if it doesn't exist
    if (-not (Test-Path $outputPath)) {
        New-Item -ItemType Directory -Path $outputPath -Force
    }

    # Create HTML file
    $htmlContent | Out-File -FilePath $htmlPath -Encoding UTF8

    Write-Host "Created placeholder for $ImageName in $Category"
}

# Create placeholders for each category
$menuItems = @{
    'breakfast' = @(
        @{name='pancakes'; display='Classic Pancakes'},
        @{name='waffles'; display='Belgian Waffles'},
        @{name='breakfast-platter'; display='Breakfast Platter'},
        @{name='oatmeal'; display='Steel Cut Oatmeal'},
        @{name='breakfast-sandwich'; display='Breakfast Sandwich'}
    )
    'coffee' = @(
        @{name='irish-coffee'; display='Irish Coffee'},
        @{name='turkish-coffee'; display='Turkish Coffee'},
        @{name='caramel-macchiato'; display='Caramel Macchiato'},
        @{name='vanilla-latte'; display='Vanilla Latte'},
        @{name='frappuccino'; display='Coffee Frappuccino'}
    )
    'desserts' = @(
        @{name='apple-pie'; display='Apple Pie'},
        @{name='chocolate-mousse'; display='Chocolate Mousse'},
        @{name='ice-cream-sundae'; display='Ice Cream Sundae'},
        @{name='brownie'; display='Chocolate Brownie'},
        @{name='fruit-tart'; display='Fresh Fruit Tart'}
    )
    'cold-beverages' = @(
        @{name='lemonade'; display='Fresh Lemonade'},
        @{name='berry-smoothie'; display='Berry Smoothie'},
        @{name='iced-green-tea'; display='Iced Green Tea'},
        @{name='mango-lassi'; display='Mango Lassi'},
        @{name='mint-mojito'; display='Virgin Mint Mojito'}
    )
    'pastries' = @(
        @{name='croissant'; display='Butter Croissant'},
        @{name='danish'; display='Danish Pastry'},
        @{name='cinnamon-roll'; display='Cinnamon Roll'},
        @{name='scone'; display='Fresh Scone'},
        @{name='muffin'; display='Blueberry Muffin'}
    )
    'pizza' = @(
        @{name='margherita'; display='Pizza Margherita'},
        @{name='pepperoni'; display='Pepperoni Pizza'},
        @{name='vegetarian'; display='Vegetarian Pizza'},
        @{name='hawaiian'; display='Hawaiian Pizza'},
        @{name='bbq-chicken'; display='BBQ Chicken Pizza'}
    )
    'sandwiches' = @(
        @{name='club-sandwich'; display='Club Sandwich'},
        @{name='grilled-cheese'; display='Grilled Cheese'},
        @{name='blt'; display='BLT Sandwich'},
        @{name='tuna'; display='Tuna Sandwich'},
        @{name='veggie-wrap'; display='Vegetarian Wrap'}
    )
}

# Create placeholders for each item
foreach ($category in $menuItems.Keys) {
    foreach ($item in $menuItems[$category]) {
        Create-PlaceholderImage -Category $category -ImageName $item.name -DisplayName $item.display
    }
}

Write-Host "Placeholder creation complete!"
