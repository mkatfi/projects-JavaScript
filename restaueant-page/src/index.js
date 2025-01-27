import "./styles.css";
import Home from './home.js';   
import Menu from './menu.js';   
import Contact from './contact.js';   
import Footer from './footer.js';   




document.addEventListener('DOMContentLoaded', () => {
    const foot = document.querySelector(".foot")      
    const content = document.querySelector("#content");  // Ensure this matches your HTML element
    const navel = document.getElementById("navel");

    if (!content) {
        console.error('Content element not found');
        return; // Stop the execution if the content element is not found
    }

    navel.addEventListener("click", (e) => {
        // Check if the clicked element is a button inside the nav

        const buttons = navel.querySelectorAll('button');
        buttons.forEach(button => button.classList.remove('active'));

        // Add 'active' class to the clicked button
        e.target.classList.add('active');

        if (e.target.tagName.toLowerCase() === 'button') {
            // console.log(`Button ID: ${e.target.id}`);
            content.innerHTML = "";
            if (e.target.id === "home") {
                content.appendChild(Home());

            } else if (e.target.id === "menu") {
                content.appendChild(Menu());

            } else {
                content.appendChild(Contact());
            }
            content.appendChild(Footer());
        }
    });

    // Ensure Footer is appended once DOM is loaded
    content.appendChild(Home());
    content.style.display = 'flex';
    content.style.flexDirection = 'column';

    content.style.height = '100%';
    // foot.appendChild(Footer());
    content.appendChild(Footer());
});

