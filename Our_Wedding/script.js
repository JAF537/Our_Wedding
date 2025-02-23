document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    const invitationText = document.getElementById('invitation-text');
    const invitation = document.getElementById('invitation');
    const eventsButton = document.getElementById('events-button');
    const eventsList = document.getElementById('events-list');
    const spanishFlag = document.getElementById('spanish-flag');
    const englishFlag = document.getElementById('english-flag');

    let currentLanguage = 'es';
    let backgroundImages = ['images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg'];
    let currentImageIndex = 0;

    const translations = {
        es: {
            invitation: '¡Estás invitado a nuestra boda!',
            eventsButton: 'Eventos',
            events: ['Ceremonia - 12:00 PM', 'Recepción - 1:00 PM', 'Baile - 2:00 PM']
        },
        en: {
            invitation: 'You are invited to our wedding!',
            eventsButton: 'Events',
            events: ['Ceremony - 12:00 PM', 'Reception - 1:00 PM', 'Dance - 2:00 PM']
        }
    };

    backgroundMusic.play();

    function changeBackgroundImage() {
        const nextImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        document.body.style.backgroundImage = `url('${backgroundImages[nextImageIndex]}')`;
        currentImageIndex = nextImageIndex;
    }

    setInterval(changeBackgroundImage, 5000);

    function showInvitation() {
        invitation.style.display = 'block';
        setTimeout(() => {
            invitation.style.opacity = '1';
        }, 100);
        updateLanguage();
    }

    function updateLanguage() {
        invitationText.innerHTML = translations[currentLanguage].invitation;
        eventsButton.innerHTML = translations[currentLanguage].eventsButton;
        eventsList.innerHTML = translations[currentLanguage].events.map(event => `<li>${event}</li>`).join('');
    }

    setTimeout(showInvitation, 3000);

    eventsButton.addEventListener('click', function() {
        if (eventsList.style.display === 'none' || eventsList.style.display === '') {
            eventsList.style.display = 'block';
        } else {
            eventsList.style.display = 'none';
        }
    });

    spanishFlag.addEventListener('click', function() {
        currentLanguage = 'es';
        updateLanguage();
    });

    englishFlag.addEventListener('click', function() {
        currentLanguage = 'en';
        updateLanguage();
    });
});
