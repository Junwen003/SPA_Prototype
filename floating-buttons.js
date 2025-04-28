// Floating Social Media Buttons Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Create the main container that will hold both social buttons and toggle button
    const mainContainer = document.createElement('div');
    mainContainer.className = 'floating-main-container';

    // Create the floating buttons container (for social media buttons only)
    const floatingButtonsContainer = document.createElement('div');
    floatingButtonsContainer.className = 'floating-buttons';

    // Create WhatsApp button
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/5551234567'; // Replace with actual WhatsApp number
    whatsappButton.className = 'floating-button whatsapp';
    whatsappButton.setAttribute('target', '_blank');
    whatsappButton.setAttribute('aria-label', 'Contact us on WhatsApp');
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp fa-lg"></i>';

    // Create Telegram button
    const telegramButton = document.createElement('a');
    telegramButton.href = 'https://t.me/serenityspa'; // Replace with actual Telegram username
    telegramButton.className = 'floating-button telegram';
    telegramButton.setAttribute('target', '_blank');
    telegramButton.setAttribute('aria-label', 'Contact us on Telegram');
    telegramButton.innerHTML = '<i class="fab fa-telegram-plane fa-lg"></i>';

    // Create Facebook button
    const facebookButton = document.createElement('a');
    facebookButton.href = 'https://facebook.com/serenityspa'; // Replace with actual Facebook page
    facebookButton.className = 'floating-button facebook';
    facebookButton.setAttribute('target', '_blank');
    facebookButton.setAttribute('aria-label', 'Visit our Facebook page');
    facebookButton.innerHTML = '<i class="fab fa-facebook-f fa-lg"></i>';

    // Create toggle button (separate from social buttons)
    const toggleButton = document.createElement('div');
    toggleButton.className = 'toggle-button';
    toggleButton.setAttribute('aria-label', 'Toggle social media buttons');
    toggleButton.innerHTML = '<i class="fas fa-chevron-right"></i>';

    // Add social buttons to their container
    floatingButtonsContainer.appendChild(whatsappButton);
    floatingButtonsContainer.appendChild(telegramButton);
    floatingButtonsContainer.appendChild(facebookButton);

    // Add both containers to the main container
    mainContainer.appendChild(floatingButtonsContainer);
    mainContainer.appendChild(toggleButton);

    // Add main container to body
    document.body.appendChild(mainContainer);

    // Toggle functionality
    let isHidden = false;
    toggleButton.addEventListener('click', function () {
        isHidden = !isHidden;
        if (isHidden) {
            floatingButtonsContainer.classList.add('hidden');
            toggleButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        } else {
            floatingButtonsContainer.classList.remove('hidden');
            toggleButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        }
    });

    // Create scroll to top button
    const scrollTopButton = document.createElement('div');
    scrollTopButton.className = 'scroll-top-button';
    scrollTopButton.setAttribute('aria-label', 'Scroll to top');
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopButton);

    // Show/hide scroll to top button based on scroll position
    // window.addEventListener('scroll', function() {
    //     if (window.pageYOffset > 300) { // Show button after scrolling down 300px
    //         scrollTopButton.classList.add('visible');
    //     } else {
    //         scrollTopButton.classList.remove('visible');
    //     }
    // });
    window.addEventListener('scroll', function () {
        console.log('Scroll event triggered'); // Debugging statement
        if (window.pageYOffset > 100) { // Show button after scrolling down 300px
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    // Scroll to top when button is clicked
    scrollTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});