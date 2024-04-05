//Makemy trip website Y
//focus on hotel booking   Y
//eventlistener,array mapping and filters
//css design Y
//mouse on top of any hotel or room   Y
 //price rating timing description Y
//price increased after he clicks in second time in 10%. after 30sec
//if more than three time in same hotel he bring mouse no booking yet available (seats are full)
// app.js

// Variables to track click counts and prices
let clickCounts = {};
let prices = {
    'Veg Supreme Burger': 100,
    'Pizza': 150,
    'Veg Salad': 200
};

// Function to update price display
function updatePrice(card) {
    const priceElement = card.querySelector('.price');
    const itemName = card.querySelector('h3').textcontent;
    priceElement.textcontent= `Rs ${prices[itemName]}`;
}

// Function to handle card click
function handleCardClick(card) {
    const itemName = card.querySelector('h3').textcontent;

    // Initialize click count for the item
    if (!clickCounts[itemName]) {
        clickCounts[itemName] = 0;
    }

    // Increment click count and update price
    clickCounts[itemName]++;
    if (clickCounts[itemName] === 2) {
        // Increase price by 10% on the second click
        prices[itemName] *= 1.1;
        updatePrice(card);

        // Set a timeout to reset click count after 30 seconds
        setTimeout(() => {
            clickCounts[itemName] = 0;
            updatePrice(card);
        }, 30000);
    } else {
        updatePrice(card);
    }

    // Check if more than three clicks
    if (clickCounts[itemName] > 3) {
        card.innerHTML = '<p>No booking yet available. Seats are full.</p>';
    }
}

// Attach click event listeners to each card
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => handleCardClick(card));
});
