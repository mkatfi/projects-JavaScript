function Contact() {
    const app = document.createElement('div');
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    contactSection.style.padding = '80px 20px';

    const container = document.createElement('div');
    container.className = 'max-w-8xl mx-auto px-6';

    const grid = document.createElement('div');
    grid.className = 'grid lg:grid-cols-2 gap-12';

    // Reservation Form Section
    const reservationDiv = document.createElement('div');
    const reservationTitle = document.createElement('h2');
    reservationTitle.innerText = 'Make a Reservation';
    reservationTitle.className = 'font-[Playfair Display] text-4xl mb-6';

    const reservationDescription = document.createElement('p');
    reservationDescription.innerText = 'Book your table online and experience our exceptional cuisine and service';
    reservationDescription.className = 'text-gray-600 mb-8';

    const form = document.createElement('form');
    form.className = 'space-y-6';

    const dateAndTimeDiv = document.createElement('div');
    dateAndTimeDiv.className = 'grid md:grid-cols-2 gap-6';

    const dateInputDiv = document.createElement('div');
    const dateLabel = document.createElement('label');
    dateLabel.innerText = 'Date';
    dateLabel.className = 'block text-sm font-medium text-gray-700 mb-2';
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.className = 'w-full border-gray-300 rounded-lg focus:ring-custom focus:border-custom';
    dateInputDiv.appendChild(dateLabel);
    dateInputDiv.appendChild(dateInput);

    const timeInputDiv = document.createElement('div');
    const timeLabel = document.createElement('label');
    timeLabel.innerText = 'Time';
    timeLabel.className = 'block text-sm font-medium text-gray-700 mb-2';
    const timeSelect = document.createElement('select');
    timeSelect.className = 'w-full border-gray-300 rounded-lg focus:ring-custom focus:border-custom';
    ['6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'].forEach((time) => {
        const option = document.createElement('option');
        option.innerText = time;
        timeSelect.appendChild(option);
    });
    timeInputDiv.appendChild(timeLabel);
    timeInputDiv.appendChild(timeSelect);

    dateAndTimeDiv.appendChild(dateInputDiv);
    dateAndTimeDiv.appendChild(timeInputDiv);

    form.appendChild(dateAndTimeDiv);

    const nameAndPhoneDiv = document.createElement('div');
    nameAndPhoneDiv.className = 'grid md:grid-cols-2 gap-6';

    const nameInputDiv = document.createElement('div');
    const nameLabel = document.createElement('label');
    nameLabel.innerText = 'Name';
    nameLabel.className = 'block text-sm font-medium text-gray-700 mb-2';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'w-full border-gray-300 rounded-lg focus:ring-custom focus:border-custom';
    nameInputDiv.appendChild(nameLabel);
    nameInputDiv.appendChild(nameInput);

    const phoneInputDiv = document.createElement('div');
    const phoneLabel = document.createElement('label');
    phoneLabel.innerText = 'Phone';
    phoneLabel.className = 'block text-sm font-medium text-gray-700 mb-2';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.className = 'w-full border-gray-300 rounded-lg focus:ring-custom focus:border-custom';
    phoneInputDiv.appendChild(phoneLabel);
    phoneInputDiv.appendChild(phoneInput);

    nameAndPhoneDiv.appendChild(nameInputDiv);
    nameAndPhoneDiv.appendChild(phoneInputDiv);

    form.appendChild(nameAndPhoneDiv);

    const partySizeDiv = document.createElement('div');
    const partySizeLabel = document.createElement('label');
    partySizeLabel.innerText = 'Party Size';
    partySizeLabel.className = 'block text-sm font-medium text-gray-700 mb-2';
    const partySizeSelect = document.createElement('select');
    partySizeSelect.className = 'w-full border-gray-300 rounded-lg focus:ring-custom focus:border-custom';
    ['2 People', '4 People', '6 People', '8+ People'].forEach((size) => {
        const option = document.createElement('option');
        option.innerText = size;
        partySizeSelect.appendChild(option);
    });
    partySizeDiv.appendChild(partySizeLabel);
    partySizeDiv.appendChild(partySizeSelect);

    form.appendChild(partySizeDiv);

    const specialRequestsDiv = document.createElement('div');
    const specialRequestsLabel = document.createElement('label');
    specialRequestsLabel.innerText = 'Special Requests';
    specialRequestsLabel.className = 'block text-sm font-medium text-gray-700 mb-2';
    const specialRequestsTextarea = document.createElement('textarea');
    specialRequestsTextarea.rows = 4;
    specialRequestsTextarea.className =
        'w-full border-gray-300 rounded-lg focus:ring-custom focus:border-custom';
    specialRequestsDiv.appendChild(specialRequestsLabel);
    specialRequestsDiv.appendChild(specialRequestsTextarea);

    form.appendChild(specialRequestsDiv);

    const confirmButton = document.createElement('button');
    confirmButton.type = 'submit';
    confirmButton.innerText = 'Confirm Reservation';
    confirmButton.style.background = "#50d71e";
    confirmButton.style.padding = "10px";
    confirmButton.className = ' w-full bg-[#50d71e] text-black  hover:bg-custom/90';

    form.appendChild(confirmButton);

    reservationDiv.appendChild(reservationTitle);
    reservationDiv.appendChild(reservationDescription);
    reservationDiv.appendChild(form);

    // Location and Contact Section
    const contactDiv = document.createElement('div');
    const contactTitle = document.createElement('h2');
    contactTitle.innerText = 'Location & Contact';
    contactTitle.className = 'font-[Playfair Display] text-2xl mb-2';

    const contactDescription = document.createElement('p');
    contactDescription.innerText = 'Visit us and experience our warm hospitality and exceptional cuisine';
    contactDescription.className = 'text-gray-400 mb-4';

    const mapImage = document.createElement('img');
    mapImage.src = 'https://ai-public.creatie.ai/gen_page/map_placeholder_1280x720.png';
    mapImage.alt = 'Map';
    mapImage.className = 'w-full h-[300px] object-cover rounded-lg';

    const contactDetails = [
        { icon: 'fas fa-map-marker-alt', title: 'Address', text: '123 Gourmet Street, New York, NY 10001' },
        { icon: 'fas fa-phone', title: 'Phone', text: '+1 (555) 123-4567' },
        { icon: 'fas fa-envelope', title: 'Email', text: 'reservations@lamaison.com' },
        { icon: 'fas fa-clock', title: 'Hours', text: 'Monday - Sunday: 11:00 AM - 11:00 PM' },
    ];

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'space-y-4';

    contactDetails.forEach((detail) => {
        const detailDiv = document.createElement('div');
        detailDiv.className = 'flex items-start gap-4';

        const icon = document.createElement('i');
        icon.className = `${detail.icon} text-custom text-xl mt-1`;

        const infoDiv = document.createElement('div');
        const infoTitle = document.createElement('h3');
        infoTitle.innerText = detail.title;
        infoTitle.className = 'font-medium mb-1';
        const infoText = document.createElement('p');
        infoText.innerText = detail.text;
        infoText.className = 'text-gray-600';

        infoDiv.appendChild(infoTitle);
        infoDiv.appendChild(infoText);
        detailDiv.appendChild(icon);
        detailDiv.appendChild(infoDiv);
        detailsDiv.appendChild(detailDiv);
    });

    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(contactDescription);
    contactDiv.appendChild(mapImage);
    contactDiv.appendChild(detailsDiv);

    grid.appendChild(reservationDiv);
    grid.appendChild(contactDiv);
    container.appendChild(grid);
    contactSection.appendChild(container);
    app.appendChild(contactSection);

    return app;
}

export default Contact;
