import Menu from './menu';


function Home() {
    // Create the main container (app)
    const app = document.createElement('div');
    app.id = 'app';

    // Header Section
    const header = document.createElement('header');
    header.style.backgroundColor = '#333';
    header.style.color = '#fff';
    header.style.padding = '1em';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';

    const logo = document.createElement('div');
    logo.innerHTML = '<h1>Restaurant Name</h1>';
    logo.style.fontSize = '1.5em';
    logo.style.fontWeight = 'bold';
   
    header.appendChild(logo);
    app.appendChild(header);

    const dishes = [
        {

            image: require('./image/1gnk5i9xb8t91.jpg'),
        },
        {
            image: require('./image/c89d8094f5b37e67286645e44396cbc0.jpg'),
        },
        {
            image: require('./image/photo-1517248135467-4c7edcad34c4.jpeg'),
        },
        {
            image: require('./image/social-dining-room.jpg'),
        },
    ];

    // Hero Section
    const hero = document.createElement('section');
    hero.className = 'glide';
    hero.style.position = 'relative';
    hero.style.color = '#fff';
    hero.style.textAlign = 'center';
    hero.style.height = '650px';
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';

    function randomizeImgs() {
        // Counter to track the current dish index
        let currentIndex = 0;
    
        // Function to update the hero section with a random dish
        const updateHeroSection = () => {
            const dish = dishes[currentIndex]; // Get the current dish
    
            // Update the hero section background image and content
            hero.style.backgroundImage = `url(${dish.image})`;
    
            // Move to the next dish index
            currentIndex = (currentIndex + 1) % dishes.length; // Reset to 0 if it reaches the end
        };
    
        // Call the function initially and set it to repeat every second
        updateHeroSection();
        setInterval(updateHeroSection, 4000);
    }
    
    // Call the randomizeImgs function to start the loop
    randomizeImgs(); 

    const heroOverlay = document.createElement('div');
    heroOverlay.style.position = 'absolute';
    heroOverlay.style.top = '0';
    heroOverlay.style.left = '0';
    heroOverlay.style.width = '100%';
    heroOverlay.style.height = '100%';
    heroOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    heroOverlay.style.display = 'flex';
    heroOverlay.style.flexDirection = 'column';
    heroOverlay.style.justifyContent = 'center';
    heroOverlay.style.alignItems = 'center';

    const heroContent = document.createElement('div');
    const herobutton = document.createElement('button');
    heroContent.innerHTML = `
        <h2 style="font-size: 3.5em; margin-bottom: 0.5em; color:white">Welcome to Our Restaurant</h2>
        <p style="font-size: 1.2em; margin-bottom: 1em;color:white">Where every meal tells a story</p>
        `;
        herobutton.innerHTML = ` Explore Our Menu`;
        herobutton.style.padding = '10px 20px';
        herobutton.style.fontSize = '1em';
        herobutton.style.backgroundColor = '#f39c12';
        herobutton.style.color = '#fff';
        herobutton.style.border = 'none';
        herobutton.style.cursor = 'pointer';
        herobutton.style.borderRadius = '5px';
        heroContent.appendChild(herobutton);
        herobutton.addEventListener('click', () => {
            const app = document.getElementById('app');
            app.innerHTML = ''; 
            app.appendChild(Menu());
        });
    heroOverlay.appendChild(heroContent);
    hero.appendChild(heroOverlay);
    app.appendChild(hero);

    // About Section
    const about = document.createElement('section');
    about.id = 'about';
    about.style.padding = '50px 20px';
    about.style.textAlign = 'center';
    about.style.backgroundColor = '#f4f4f4';
    about.style.color = '#333';

    about.innerHTML = `
        <h2 style="font-size: 2em; margin-bottom: 0.5em;">About Us</h2>
        <p style="font-size: 1.2em; max-width: 600px; margin: 0 auto;">
            At <strong>Restaurant Name</strong>, we offer a unique dining experience that combines a warm and welcoming atmosphere with dishes crafted from the finest, freshest ingredients. 
            Whether you’re here for a family gathering, a romantic dinner, or a casual lunch, our team is dedicated to making your visit unforgettable.
        </p>
    `;

    app.appendChild(about);


    return app;
}

export default Home;
