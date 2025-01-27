
function Menu() {
    // Create the main container
    const app = document.createElement('div');
    app.id = 'app';
    // app.style.height = '100vh';
    app.style.backgroundColor = '#f9f9f9';
    const menu = document.createElement('section');
    menu.id = 'menu';
    menu.style.padding = '50px 20px';
    menu.style.backgroundColor = '#f9f9f9';
    menu.style.height = "fit-content";

    // Header Section
    const header = document.createElement('div');
    header.style.textAlign = 'center';
    header.style.marginBottom = '30px';

    const title = document.createElement('h2');
    title.innerText = 'Our Menu';
    title.style.fontFamily = "'Playfair Display', serif";
    title.style.fontSize = '2.5rem';
    title.style.marginBottom = '0.5em';

    const subtitle = document.createElement('p');
    subtitle.innerText =
        'Discover our carefully curated selection of dishes, crafted with passion and precision to delight your senses.';
    subtitle.style.color = '#555';
    subtitle.style.maxWidth = '600px';
    subtitle.style.margin = '0 auto';

    header.appendChild(title);
    header.appendChild(subtitle);
    menu.appendChild(header);

    // Buttons Section
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.justifyContent = 'center';
    buttonsContainer.style.gap = '10px';
    buttonsContainer.style.marginBottom = '30px';
    
    const buttonLabels = ['All', 'Starters', 'Main Course', 'Desserts', 'Drinks'];
    
    buttonLabels.forEach((label, index) => {
        const button = document.createElement('button');
        button.className = 'menu-button'; // Initialize with the default class
        button.innerText = label;
        button.style.padding = '10px 20px';
        button.style.border = 'none';
        button.style.borderRadius = '20px';
        button.style.cursor = 'pointer';
        button.style.backgroundColor = index === 0 ? '#f39c12' : '#fff';
        button.style.color = index === 0 ? '#fff' : '#555';
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    
        // Set 'active' class for the first button initially
        if (index === 0) button.classList.add('active');
    
        // Mouse hover effects
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#f39c12';
            button.style.color = '#fff';
        });
        button.addEventListener('mouseleave', () => {
            if (!button.classList.contains('active')) {
                button.style.backgroundColor = '#fff';
                button.style.color = '#555';
            }
        });
    
        // Add click functionality with active class toggle
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            const allButtons = buttonsContainer.querySelectorAll('.menu-button');
            allButtons.forEach((btn) => {
                btn.classList.remove('active');
                btn.style.backgroundColor = '#fff';
                btn.style.color = '#555';
            });
    
            // Add 'active' class to the clicked button
            button.classList.add('active');
            button.style.backgroundColor = '#f39c12';
            button.style.color = '#fff';
    
            // Call the `showSection` function with the label
            const dest = showSection(label);
            const dishesGrid = showDishes(dest);
            menu.innerHTML = '';
            menu.appendChild(header); // Reattach the header
            menu.appendChild(buttonsContainer); // Reattach the buttons
            menu.appendChild(dishesGrid); // Add the new dishes grid
        });
    
        buttonsContainer.appendChild(button);
    });
    
    menu.appendChild(buttonsContainer);

    const dishes = [
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/caption.jpg'),
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/download (5).jpeg'),
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/Le-tajine.jpg'),
        },
        {
            name: 'Drink 1',
            description: 'Description for Drink 1',
            price: '$5',
            image: require('./image/lmixed-bean-shakshuka-One-Mag-March-TESCO-a366b01b-b78a-46f2-b82c-528e36b13163-0-1400x919.jpg')
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/download (6).jpeg'),
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/l-intro-1683037630.jpg'),
        },
        // Add other starter dishes here
    ];
    
    const mainCourses = [
        {
            name: 'Beef Tenderloin',
            description: 'Pan-seared beef tenderloin with red wine reduction, served with seasonal vegetables and potato purée.',
            price: '$42',
            image: require('./image/images (5).jpeg'),
        },
        {
            name: 'Seared Scallops',
            description: 'Pan-seared sea scallops with cauliflower purée, crispy pancetta, and herb oil.',
            price: '$38',
            image: require('./image/images (4).jpeg'),
        },
        {
            name: 'Chocolate Délice',
            description: 'Dark chocolate délice with gold leaf, fresh berries, and vanilla bean ice cream.',
            price: '$16',
            image: require('./image/download (8).jpeg'),
        },
        {
            name: 'Drink 1',
            description: 'Description for Drink 1',
            price: '$5',
            image: require('./image/download (7).jpeg')
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/chimichurri-pork-tenderloin-1200.jpg'),
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/scrumptious-gourmet-pan-seared-scallops-recipe.jpg'),
        },
    ];
    
    const desserts = [
        {
            name: 'Chocolate Délice',
            description: 'Dark chocolate délice with gold leaf, fresh berries, and vanilla bean ice cream.',
            price: '$16',
            image: require('./image/valrhona-chocolate-white.jpg'),
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/oranges-cinnamon-dessert.jpg'),
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/scrumptious-gourmet-pan-seared-scallops-recipe.jpg'),
        },
        {
            name: 'Drink 1',
            description: 'Description for Drink 1',
            price: '$5',
            image: require('./image/download.jpeg')
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/Fruit-Dessert_EXPS_TOHD24_31674_OrlyCatz_7.jpg'),
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/SMOOTHIE-mixedfruitpunch-He-beef6661-8d12-49dc-9357-3d09e4cffb0a-0-472x310.jpg'),
        },
        // Add other dessert items here
    ];
    
    const drinks = [
        {
            name: 'Drink 1',
            description: 'Description for Drink 1',
            price: '$5',
            image: require('./image/14-3-scaled.jpg')
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/download (1).jpeg'),
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/download (2).jpeg'),
        },
        {
            name: 'Drink 1',
            description: 'Description for Drink 1',
            price: '$5',
            image: require('./image/download (3).jpeg')
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/images (2).jpeg'),
        },
        {
            name: 'Starter Dish 1',
            description: 'Description for Starter Dish 1',
            price: '$10',
            image: require('./image/images (3).jpeg'),
        },
        // Add other drinks here
    ];
    
    function showSection(section) {
        if (section === 'Starters') return dishes;
        if (section === 'Main Course') return mainCourses;
        if (section === 'Desserts') return desserts;
        if (section === 'Drinks') return drinks;
        return [...dishes, ...mainCourses, ...desserts, ...drinks];
    }
    
    function showDishes(dest) {
        const dishesGrid = document.createElement('div');
        dishesGrid.style.display = 'grid';
        dishesGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
        dishesGrid.style.gap = '20px';
    
        dest.forEach((dish) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.backgroundColor = '#fff';
            card.style.borderRadius = '8px';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            card.style.overflow = 'hidden';
            card.style.transition = 'transform 0.3s';
    
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.05)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
            });
    
            const image = document.createElement('img');
            image.src = dish.image;
            image.alt = dish.name;
            image.style.width = '100%';
            image.style.height = '200px';
            image.style.objectFit = 'cover';
    
            const cardBody = document.createElement('div');
            cardBody.style.padding = '20px';
    
            const dishName = document.createElement('h3');
            dishName.innerText = dish.name;
            dishName.style.fontFamily = "'Playfair Display', serif";
            dishName.style.fontSize = '1.5rem';
            dishName.style.marginBottom = '10px';
    
            const dishDescription = document.createElement('p');
            dishDescription.innerText = dish.description;
            dishDescription.style.color = '#555';
            dishDescription.style.marginBottom = '10px';
    
            const price = document.createElement('span');
            price.innerText = dish.price;
            price.style.fontSize = '1.2rem';
            price.style.fontWeight = 'bold';
            price.style.color = '#f39c12';
    
            const orderButton = document.createElement('button');
            orderButton.innerText = 'Order Now';
            orderButton.style.padding = '10px 20px';
            orderButton.style.backgroundColor = '#f39c12';
            orderButton.style.color = '#fff';
            orderButton.style.border = 'none';
            orderButton.style.borderRadius = '20px';
            orderButton.style.cursor = 'pointer';
            orderButton.style.width = '100%';
    
            cardBody.appendChild(dishName);
            cardBody.appendChild(dishDescription);
            cardBody.appendChild(price);
            cardBody.appendChild(document.createElement('br'));
            cardBody.appendChild(orderButton);
    
            card.appendChild(image);
            card.appendChild(cardBody);
    
            dishesGrid.appendChild(card);
        });
        return dishesGrid;
    }
    
    // Initialize with 'All' section
    const allDishesGrid = showDishes(showSection('All'));
    menu.appendChild(allDishesGrid);
    app.appendChild(menu);

    return app;
}

export default Menu;
