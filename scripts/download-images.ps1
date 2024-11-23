# Function to download an image
function Download-MenuImage {
    param (
        [string]$Category,
        [string]$ImageName,
        [string]$SearchTerm
    )
    
    $outputPath = "../public/images/menu/$Category/$ImageName.jpg"
    
    # Only download if the file doesn't exist
    if (-not (Test-Path $outputPath)) {
        $searchUrl = "https://source.unsplash.com/featured/?$SearchTerm,food"
        try {
            Invoke-WebRequest -Uri $searchUrl -OutFile $outputPath
            Write-Host "Downloaded $ImageName for $Category"
            # Add a small delay to avoid rate limiting
            Start-Sleep -Milliseconds 500
        }
        catch {
            Write-Host "Failed to download $ImageName for $Category"
        }
    }
}

# Create arrays of items to download
$breakfastItems = @(
    @{name='pancakes'; search='pancakes'},
    @{name='waffles'; search='belgian+waffles'},
    @{name='omelette'; search='omelette'},
    @{name='breakfast-burrito'; search='breakfast+burrito'},
    @{name='breakfast-sandwich'; search='breakfast+sandwich'},
    @{name='fruit-parfait'; search='yogurt+parfait'},
    @{name='oatmeal'; search='oatmeal+breakfast'},
    @{name='breakfast-platter'; search='breakfast+platter'},
    @{name='breakfast-bowl'; search='breakfast+bowl'},
    @{name='breakfast-quesadilla'; search='breakfast+quesadilla'}
)

$coffeeItems = @(
    @{name='irish-coffee'; search='irish+coffee'},
    @{name='turkish-coffee'; search='turkish+coffee'},
    @{name='caramel-macchiato'; search='caramel+macchiato'},
    @{name='vanilla-latte'; search='vanilla+latte'},
    @{name='hazelnut-coffee'; search='hazelnut+coffee'},
    @{name='pumpkin-spice-latte'; search='pumpkin+spice+latte'},
    @{name='white-chocolate-mocha'; search='white+chocolate+mocha'},
    @{name='cinnamon-dolce-latte'; search='cinnamon+latte'},
    @{name='nitro-cold-brew'; search='nitro+cold+brew'},
    @{name='coffee-frappuccino'; search='coffee+frappuccino'}
)

$dessertItems = @(
    @{name='apple-pie'; search='apple+pie'},
    @{name='creme-brulee'; search='creme+brulee'},
    @{name='chocolate-mousse'; search='chocolate+mousse'},
    @{name='ice-cream-sundae'; search='ice+cream+sundae'},
    @{name='brownie'; search='chocolate+brownie'},
    @{name='fruit-tart'; search='fruit+tart'},
    @{name='carrot-cake'; search='carrot+cake'},
    @{name='red-velvet-cake'; search='red+velvet+cake'},
    @{name='bread-pudding'; search='bread+pudding'},
    @{name='panna-cotta'; search='panna+cotta'}
)

$coldBeveragesItems = @(
    @{name='lemonade'; search='fresh+lemonade'},
    @{name='iced-green-tea'; search='iced+green+tea'},
    @{name='berry-smoothie'; search='berry+smoothie'},
    @{name='mango-lassi'; search='mango+lassi'},
    @{name='mint-mojito'; search='virgin+mojito'},
    @{name='coconut-water'; search='coconut+water'},
    @{name='sparkling-juice'; search='sparkling+juice'},
    @{name='protein-shake'; search='protein+shake'},
    @{name='iced-chai'; search='iced+chai+latte'},
    @{name='frozen-lemonade'; search='frozen+lemonade'}
)

# Download images for each category
foreach ($item in $breakfastItems) {
    Download-MenuImage -Category "breakfast" -ImageName $item.name -SearchTerm $item.search
}

foreach ($item in $coffeeItems) {
    Download-MenuImage -Category "coffee" -ImageName $item.name -SearchTerm $item.search
}

foreach ($item in $dessertItems) {
    Download-MenuImage -Category "desserts" -ImageName $item.name -SearchTerm $item.search
}

foreach ($item in $coldBeveragesItems) {
    Download-MenuImage -Category "cold-beverages" -ImageName $item.name -SearchTerm $item.search
}

Write-Host "Image download complete!"
