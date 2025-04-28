document.addEventListener('DOMContentLoaded', function () {
    // Create the main container that will hold both social buttons and toggle button
    const mainContainer = document.createElement('div');
    mainContainer.className = 'floating-main-container';

    // Create the floating buttons container (for social media buttons only)
    const floatingButtonsContainer = document.createElement('div');
    floatingButtonsContainer.className = 'floating-buttons';

    // Create WhatsApp button with the new structure
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/5551234567'; // Replace with actual WhatsApp number
    whatsappButton.className = 'floating-button whatsapp';
    whatsappButton.setAttribute('target', '_blank');
    whatsappButton.setAttribute('aria-label', 'Contact us on WhatsApp');

    // Create icon container div
    const whatsappIconDiv = document.createElement('div');
    whatsappIconDiv.className = 'icon';
    whatsappIconDiv.innerHTML = '<i class="fab fa-whatsapp fa-lg"></i>';

    // Create text div
    const whatsappTextDiv = document.createElement('div');
    whatsappTextDiv.className = 'text';
    whatsappTextDiv.textContent = 'WhatsApp';

    // Append icon and text to button
    whatsappButton.appendChild(whatsappIconDiv);
    whatsappButton.appendChild(whatsappTextDiv);

    // Append WhatsApp button to container
    floatingButtonsContainer.appendChild(whatsappButton);

    // Create Telegram button with the new structure
    const telegramButton = document.createElement('a');
    telegramButton.href = 'https://t.me/username'; // Replace with actual Telegram username
    telegramButton.className = 'floating-button telegram';
    telegramButton.setAttribute('target', '_blank');
    telegramButton.setAttribute('aria-label', 'Contact us on Telegram');

    // Create icon container div
    const telegramIconDiv = document.createElement('div');
    telegramIconDiv.className = 'icon';
    telegramIconDiv.innerHTML = '<i class="fab fa-telegram-plane fa-lg"></i>';

    // Create text div
    const telegramTextDiv = document.createElement('div');
    telegramTextDiv.className = 'text';
    telegramTextDiv.textContent = 'Telegram';

    // Append icon and text to button
    telegramButton.appendChild(telegramIconDiv);
    telegramButton.appendChild(telegramTextDiv);

    // Append Telegram button to container
    floatingButtonsContainer.appendChild(telegramButton);

    // Create Facebook button with the new structure
    const facebookButton = document.createElement('a');
    facebookButton.href = 'https://facebook.com/username'; // Replace with actual Facebook username
    facebookButton.className = 'floating-button facebook';
    facebookButton.setAttribute('target', '_blank');
    facebookButton.setAttribute('aria-label', 'Visit our Facebook');

    // Create icon container div
    const facebookIconDiv = document.createElement('div');
    facebookIconDiv.className = 'icon';
    facebookIconDiv.innerHTML = '<i class="fab fa-facebook-f fa-lg"></i>';

    // Create text div
    const facebookTextDiv = document.createElement('div');
    facebookTextDiv.className = 'text';
    facebookTextDiv.textContent = 'Facebook';

    // Append icon and text to button
    facebookButton.appendChild(facebookIconDiv);
    facebookButton.appendChild(facebookTextDiv);

    // Append Facebook button to container
    floatingButtonsContainer.appendChild(facebookButton);

    // Create toggle button
    const toggleButton = document.createElement('div');
    toggleButton.className = 'toggle-button';
    toggleButton.innerHTML = '<i class="fas fa-times"></i>';
    toggleButton.addEventListener('click', function () {
        floatingButtonsContainer.classList.toggle('hidden');
        if (floatingButtonsContainer.classList.contains('hidden')) {
            toggleButton.innerHTML = '<i class="fas fa-plus"></i>';
        } else {
            toggleButton.innerHTML = '<i class="fas fa-times"></i>';
        }
    });

    // Create scroll to top button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.className = 'scroll-top-button';
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add scroll event listener for scroll to top button
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    // Append components to the DOM
    mainContainer.appendChild(floatingButtonsContainer);
    mainContainer.appendChild(toggleButton);
    document.body.appendChild(mainContainer);
    document.body.appendChild(scrollTopButton);
});