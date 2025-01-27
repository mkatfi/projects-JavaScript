function Footer(){   
    const app = document.createElement('div');

    const footer = document.createElement('footer');
    footer.innerHTML = '&copy; 2025 Restaurant Name. All rights reserved.';
    footer.style.backgroundColor = '#333';
    footer.style.color = '#fff';
    footer.style.padding = '1em';
    footer.style.textAlign = 'center';
    app.appendChild(footer);

    return app;
}
export default Footer;