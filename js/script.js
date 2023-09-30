function initializeHomePage() {
    const blogList = document.getElementById('blogList');
    let isScrolling = false;
    let lastScrollY = 0;
    let velocityY = 0;

    blogList.addEventListener('mousedown', () => isScrolling = true);
    document.addEventListener('mouseup', () => isScrolling = false);

    blogList.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (!isScrolling) isScrolling = true;
        velocityY += e.deltaY * 0.05;
        lastScrollY = blogList.scrollTop;
        requestAnimationFrame(scrollStep);
    });

    function scrollStep() {
        if (!isScrolling) return;
        blogList.scrollTop += velocityY;
        velocityY *= 0.95;

        if (Math.abs(velocityY) > 0.1) requestAnimationFrame(scrollStep);
        else isScrolling = false;
    }

     const languages = {
            RU: {
                button: "EN",
                content: "BECOME A PARTNER",
            },
            EN: {
                button: "RU",
                content: "СТАТЬ ПАРТНЕРОМ",
            },
        };
        

    //Лучше всего было бы использовать Vue, тогда бы как роутер, так и смена языка выглядили бы элегантнее. Однако, моя цель в том, чтобы показать навыки владения чистым JS
    
        let currentLanguage = 'EN';

        function changeLanguage() {
            currentLanguage = currentLanguage === 'EN' ? 'RU' : 'EN';

            const content = languages[currentLanguage];
            document.getElementById("languageButton").textContent = content.button;
            document.getElementById("content").textContent = content.content;
        }

        document.getElementById("languageButton").addEventListener("click", changeLanguage);

    changeLanguage();
    
    const menuButton = document.querySelector('.header_burger');
        const mobileMenu = document.querySelector('.header_mobile');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
                    mobileMenu.classList.toggle('open');

    });
}

initializeHomePage();
