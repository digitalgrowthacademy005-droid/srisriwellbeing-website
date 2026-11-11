
console.log("🔥 MAIN1.JS UPDATED - TEST 2026");



/* =========================================================
   SRI SRI WELLBEING
   HEADER NAVIGATION
   HAMBURGER MENU
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("siteHeader");

    const menuToggle =
        document.getElementById("menuToggle");

    const menuClose =
        document.getElementById("menuClose");

    const mainMenu =
        document.getElementById("mainMenu");

    const menuOverlay =
        document.getElementById("menuOverlay");

    const menuLinks =
        document.querySelectorAll(".menu-link");


    if (!header || !menuToggle || !mainMenu) {
        return;
    }


    /* =====================================================
       OPEN MENU
    ===================================================== */

    function openMenu() {

        header.classList.add("menu-open");

        document.body.classList.add("menu-is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation"
        );

        mainMenu.setAttribute(
            "aria-hidden",
            "false"
        );
    }


    /* =====================================================
       CLOSE MENU
    ===================================================== */

    function closeMenu() {

        header.classList.remove("menu-open");

        document.body.classList.remove("menu-is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

        mainMenu.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    /* =====================================================
       HAMBURGER CLICK
    ===================================================== */

    menuToggle.addEventListener(
        "click",
        function () {

            if (
                header.classList.contains(
                    "menu-open"
                )
            ) {

                closeMenu();

            } else {

                openMenu();

            }

        }
    );


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (menuClose) {

        menuClose.addEventListener(
            "click",
            closeMenu
        );

    }


    /* =====================================================
       OVERLAY CLICK
    ===================================================== */

    if (menuOverlay) {

        menuOverlay.addEventListener(
            "click",
            closeMenu
        );

    }


    /* =====================================================
       MENU LINK CLICK
       SCROLL TO SECTION
    ===================================================== */

    menuLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    link.getAttribute("href");

                if (
                    !targetID ||
                    targetID.charAt(0) !== "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetID
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                closeMenu();


                /*
                 * Wait for menu to close,
                 * then smoothly scroll.
                 */

                setTimeout(function () {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 250);

            }
        );

    });


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                header.classList.contains(
                    "menu-open"
                )
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    function updateHeader() {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

    updateHeader();

});
















/* =====================================================
   HERO JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       VIDEO
    ================================================= */

    const heroVideo = document.getElementById("heroVideo");
    const videoControl = document.getElementById("videoControl");
    const soundIcon = document.getElementById("soundIcon");
    const soundText = document.getElementById("soundText");


    if (heroVideo && videoControl) {

        heroVideo.muted = true;


        videoControl.addEventListener("click", function () {

            if (heroVideo.muted) {

                heroVideo.muted = false;

                soundIcon.textContent = "♪";
                soundText.textContent = "SOUND ON";

            } else {

                heroVideo.muted = true;

                soundIcon.textContent = "×";
                soundText.textContent = "SOUND OFF";
            }

        });
    }


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );


    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");


            /* Ignore empty # */

            if (
                !targetId ||
                targetId === "#"
            ) {
                event.preventDefault();
                return;
            }


            const target = document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =================================================
       EXPLORE THERAPIES
       #therapies
    ================================================= */

    const exploreButton =
        document.querySelector(
            '.hero-button.secondary[href="#therapies"]'
        );


    if (exploreButton) {

        exploreButton.addEventListener("click", function (event) {

            const therapySection =
                document.getElementById("therapies");


            if (therapySection) {

                event.preventDefault();

                therapySection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


 


    /* =================================================
       SCROLL TO EXPLORE
       #about
    ================================================= */

    const scrollButton =
        document.querySelector(".scroll-down");


    if (scrollButton) {

        scrollButton.addEventListener("click", function (event) {

            const aboutSection =
                document.getElementById("about");


            if (aboutSection) {

                event.preventDefault();

                aboutSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }

});




/* =====================================================
   HERO BOOK CONSULTATION
   → OPEN AI CONCIERGE
   → OPEN BOOK TAB
===================================================== */

(function () {

    function initHeroBooking() {

        const heroBookBtn = document.getElementById("heroBookBtn");
        const aiOpen = document.getElementById("aiOpen");

        console.log("🔥 HERO BOOKING JS LOADED");
        console.log("heroBookBtn:", heroBookBtn);
        console.log("aiOpen:", aiOpen);

        /* ---------------------------------------------
           CHECK REQUIRED ELEMENTS
        --------------------------------------------- */

        if (!heroBookBtn) {
            console.error("❌ #heroBookBtn NOT FOUND");
            return;
        }

        if (!aiOpen) {
            console.error("❌ #aiOpen NOT FOUND");
            return;
        }

        /* ---------------------------------------------
           PREVENT DUPLICATE EVENT LISTENER
        --------------------------------------------- */

        if (heroBookBtn.dataset.bookingInitialized === "true") {
            console.log("⚠️ Hero booking already initialized");
            return;
        }

        heroBookBtn.dataset.bookingInitialized = "true";

        /* ---------------------------------------------
           HERO BOOK CONSULTATION CLICK
        --------------------------------------------- */

        heroBookBtn.addEventListener("click", function (event) {

            event.preventDefault();

            console.log("🔥 HERO BOOK CONSULTATION CLICKED");

            /* -----------------------------------------
               OPEN AI CONCIERGE
            ----------------------------------------- */

            aiOpen.click();

            console.log("✅ AI CONCIERGE OPEN CLICK SENT");

            /* -----------------------------------------
               OPEN BOOK TAB
            ----------------------------------------- */

            setTimeout(function () {

                const bookingTab = document.querySelector(
                    '.ai-nav-btn[data-page="booking"]'
                );

                console.log("🔎 BOOKING TAB:", bookingTab);

                if (bookingTab) {

                    bookingTab.click();

                    console.log(
                        "✅ BOOK TAB OPENED"
                    );

                } else {

                    console.error(
                        "❌ BOOKING TAB NOT FOUND"
                    );

                }

            }, 500);

        });

        console.log("✅ HERO BOOKING INITIALIZED");

    }


    /* =================================================
       INITIALIZE SAFELY
    ================================================= */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initHeroBooking
        );

    } else {

        initHeroBooking();

    }

})();




/* =========================================================
   SRI SRI WELLBEING
   APPROACH SECTION
   IMAGE FRAME + WHITE CARD ZOOM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const section = document.querySelector("#approach");

    if (!section) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const content =
        section.querySelector(".approach-content");

    const visual =
        section.querySelector(".approach-visual");

    const imageFrame =
        section.querySelector(".approach-image-frame");

    const image =
        section.querySelector(".approach-image-frame img");

    const whiteCard =
        section.querySelector(".approach-card");

    const button =
        section.querySelector(".approach-button");


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    if (content) {

        content.style.opacity = "0";
        content.style.transform =
            "translateY(35px)";

        content.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
    }


    if (visual) {

        visual.style.opacity = "0";
        visual.style.transform =
            "translateY(35px)";

        visual.style.transition =
            "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s";
    }


    const observer =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) return;


                if (content) {

                    content.style.opacity = "1";

                    content.style.transform =
                        "translateY(0)";
                }


                if (visual) {

                    visual.style.opacity = "1";

                    visual.style.transform =
                        "translateY(0)";
                }


                observer.unobserve(entry.target);

            });

        }, {
            threshold: 0.12
        });


    observer.observe(section);


    /* =====================================================
       IMAGE CARD + WHITE CARD
       HOVER ZOOM
    ===================================================== */

    if (
        visual &&
        imageFrame &&
        whiteCard
    ) {

        visual.addEventListener(
            "mouseenter",
            function () {

                /* -----------------------------------------
                   ENTIRE IMAGE FRAME ZOOM
                ----------------------------------------- */

                imageFrame.style.transform =
                    "scale(1.035)";


                imageFrame.style.transition =
                    "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";


                /* -----------------------------------------
                   IMAGE SLIGHT INTERNAL ZOOM
                ----------------------------------------- */

                if (image) {

                    image.style.transform =
                        "scale(1.035)";

                    image.style.transition =
                        "transform 1s cubic-bezier(0.22, 1, 0.36, 1)";
                }


                /* -----------------------------------------
                   WHITE CARD ZOOM
                ----------------------------------------- */

                whiteCard.style.transform =
                    "scale(1.035)";

                whiteCard.style.transition =
                    "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";

            }
        );


        visual.addEventListener(
            "mouseleave",
            function () {

                /* -----------------------------------------
                   IMAGE FRAME ZOOM OUT
                ----------------------------------------- */

                imageFrame.style.transform =
                    "scale(1)";


                /* -----------------------------------------
                   IMAGE ZOOM OUT
                ----------------------------------------- */

                if (image) {

                    image.style.transform =
                        "scale(1)";
                }


                /* -----------------------------------------
                   WHITE CARD ZOOM OUT
                ----------------------------------------- */

                whiteCard.style.transform =
                    "scale(1)";

            }
        );

    }


    /* =====================================================
       BUTTON
    ===================================================== */

    if (button) {

        button.addEventListener(
            "mouseenter",
            function () {

                button.style.transform =
                    "translateY(-3px)";

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                button.style.transform =
                    "translateY(0)";

            }
        );

    }


    /* =====================================================
       MOBILE
       Disable hover effects on touch devices
    ===================================================== */

    if (
        window.matchMedia("(hover: none)").matches
    ) {

        if (imageFrame) {
            imageFrame.style.transform = "scale(1)";
        }

        if (image) {
            image.style.transform = "scale(1)";
        }

        if (whiteCard) {
            whiteCard.style.transform = "scale(1)";
        }

    }


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        if (content) {

            content.style.opacity = "1";
            content.style.transform = "none";
            content.style.transition = "none";
        }


        if (visual) {

            visual.style.opacity = "1";
            visual.style.transform = "none";
            visual.style.transition = "none";
        }


        if (imageFrame) {

            imageFrame.style.transform = "none";
            imageFrame.style.transition = "none";
        }


        if (image) {

            image.style.transform = "none";
            image.style.transition = "none";
        }


        if (whiteCard) {

            whiteCard.style.transform = "none";
            whiteCard.style.transition = "none";
        }

    }


    console.log(
        "Approach interaction loaded successfully."
    );

});
















/* =========================================================
   THE CONTINUUM OF TRUE WELLBEING
   INTERACTIVE SLIDER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           ELEMENTS
        ================================================= */

        const section =
            document.querySelector(
                "#continuum"
            );

        if (!section) return;


        const wrapper =
            section.querySelector(
                ".continuum-wrapper"
            );


        const track =
            section.querySelector(
                "#continuumTrack"
            );


        const cards =
            Array.from(
                section.querySelectorAll(
                    ".continuum-card"
                )
            );


        const prevButton =
            section.querySelector(
                ".prev-btn"
            );


        const nextButton =
            section.querySelector(
                ".next-btn"
            );


        const progressCurrent =
            section.querySelector(
                "#progressCurrent"
            );


        const progressBar =
            section.querySelector(
                "#progressBar"
            );


        /* =================================================
           SAFETY
        ================================================= */

        if (
            !track ||
            !wrapper ||
            cards.length === 0
        ) {

            return;

        }


        /* =================================================
           SETTINGS
        ================================================= */

        let currentIndex = 0;

        let autoplayTimer = null;

        let isDragging = false;

        let startX = 0;

        let currentX = 0;

        let startTranslate = 0;

        let dragDistance = 0;


        const autoplayDelay = 5000;


        /* =================================================
           GET CARD GAP
        ================================================= */

        function getGap() {

            const styles =
                window.getComputedStyle(
                    track
                );

            return (
                parseFloat(
                    styles.gap
                ) || 0
            );

        }


        /* =================================================
           GET VISIBLE CARDS
        ================================================= */

        function getVisibleCards() {

            if (
                window.innerWidth <= 1000
            ) {

                return 1;

            }

            return 2;

        }


        /* =================================================
           GET MAX INDEX
        ================================================= */

        function getMaxIndex() {

            return Math.max(
                0,
                cards.length -
                getVisibleCards()
            );

        }


        /* =================================================
           MOVE SLIDER
        ================================================= */

        function updateSlider(
            animate = true
        ) {

            const cardWidth =
                cards[0].getBoundingClientRect()
                    .width;


            const gap =
                getGap();


            const movement =
                currentIndex *
                (cardWidth + gap);


            if (!animate) {

                track.style.transition =
                    "none";

            } else {

                track.style.transition =
                    "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";

            }


            track.style.transform =
                `translate3d(-${movement}px, 0, 0)`;


            updateProgress();


            if (!animate) {

                requestAnimationFrame(
                    function () {

                        track.style.transition =
                            "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";

                    }
                );

            }

        }


        /* =================================================
           PROGRESS
        ================================================= */

        function updateProgress() {

            const total =
                cards.length;


            let activeNumber =
                currentIndex + 1;


            if (
                activeNumber > total
            ) {

                activeNumber =
                    total;

            }


            if (progressCurrent) {

                progressCurrent.textContent =
                    String(
                        activeNumber
                    ).padStart(
                        2,
                        "0"
                    );

            }


            if (progressBar) {

                const percentage =
                    (
                        activeNumber /
                        total
                    ) * 100;


                progressBar.style.width =
                    percentage + "%";

            }

        }


        /* =================================================
           NEXT
        ================================================= */

        function nextSlide() {

            const maxIndex =
                getMaxIndex();


            if (
                currentIndex <
                maxIndex
            ) {

                currentIndex++;

            } else {

                currentIndex = 0;

            }


            updateSlider();

        }


        /* =================================================
           PREVIOUS
        ================================================= */

        function previousSlide() {

            const maxIndex =
                getMaxIndex();


            if (
                currentIndex > 0
            ) {

                currentIndex--;

            } else {

                currentIndex =
                    maxIndex;

            }


            updateSlider();

        }


        /* =================================================
           BUTTON EVENTS
        ================================================= */

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function () {

                    nextSlide();

                    restartAutoplay();

                }
            );

        }


        if (prevButton) {

            prevButton.addEventListener(
                "click",
                function () {

                    previousSlide();

                    restartAutoplay();

                }
            );

        }


        /* =================================================
           AUTOPLAY
        ================================================= */

        function startAutoplay() {

            stopAutoplay();


            autoplayTimer =
                setInterval(
                    function () {

                        nextSlide();

                    },
                    autoplayDelay
                );

        }


        function stopAutoplay() {

            if (autoplayTimer) {

                clearInterval(
                    autoplayTimer
                );

                autoplayTimer = null;

            }

        }


        function restartAutoplay() {

            stopAutoplay();

            startAutoplay();

        }


        /* =================================================
           PAUSE WHEN MOUSE ENTERS
        ================================================= */

        section.addEventListener(
            "mouseenter",
            function () {

                stopAutoplay();

            }
        );


        section.addEventListener(
            "mouseleave",
            function () {

                startAutoplay();

            }
        );


        /* =================================================
           TOUCH / DRAG START
        ================================================= */

        function dragStart(x) {

            isDragging = true;

            startX = x;

            currentX = x;

            dragDistance = 0;


            const matrix =
                window.getComputedStyle(
                    track
                ).transform;


            if (
                matrix &&
                matrix !== "none"
            ) {

                const values =
                    matrix
                        .match(
                            /matrix.*\((.+)\)/
                        );


                if (values) {

                    const parts =
                        values[1]
                            .split(",");


                    startTranslate =
                        parseFloat(
                            parts[4]
                        ) || 0;

                }

            } else {

                startTranslate = 0;

            }


            track.style.transition =
                "none";


            stopAutoplay();

        }


        /* =================================================
           DRAG MOVE
        ================================================= */

        function dragMove(x) {

            if (!isDragging) return;


            currentX = x;

            dragDistance =
                currentX - startX;


            const newTranslate =
                startTranslate +
                dragDistance;


            track.style.transform =
                `translate3d(${newTranslate}px, 0, 0)`;

        }


        /* =================================================
           DRAG END
        ================================================= */

        function dragEnd() {

            if (!isDragging) return;


            isDragging = false;


            const threshold = 60;


            if (
                Math.abs(
                    dragDistance
                ) > threshold
            ) {

                if (
                    dragDistance < 0
                ) {

                    nextSlide();

                } else {

                    previousSlide();

                }

            } else {

                updateSlider();

            }


            startAutoplay();

        }


        /* =================================================
           MOUSE DRAG
        ================================================= */

        wrapper.addEventListener(
            "mousedown",
            function (event) {

                event.preventDefault();

                dragStart(
                    event.clientX
                );

            }
        );


        window.addEventListener(
            "mousemove",
            function (event) {

                if (!isDragging) return;

                dragMove(
                    event.clientX
                );

            }
        );


        window.addEventListener(
            "mouseup",
            function () {

                if (!isDragging) return;

                dragEnd();

            }
        );


        /* =================================================
           TOUCH DRAG
        ================================================= */

        wrapper.addEventListener(
            "touchstart",
            function (event) {

                dragStart(
                    event.touches[0]
                        .clientX
                );

            },
            {
                passive: true
            }
        );


        wrapper.addEventListener(
            "touchmove",
            function (event) {

                if (!isDragging) return;


                dragMove(
                    event.touches[0]
                        .clientX
                );

            },
            {
                passive: true
            }
        );


        wrapper.addEventListener(
            "touchend",
            function () {

                dragEnd();

            }
        );


        /* =================================================
           KEYBOARD CONTROL
        ================================================= */

        wrapper.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "ArrowRight"
                ) {

                    nextSlide();

                    restartAutoplay();

                }


                if (
                    event.key ===
                    "ArrowLeft"
                ) {

                    previousSlide();

                    restartAutoplay();

                }

            }
        );


        /* =================================================
           RESPONSIVE RESIZE
        ================================================= */

        let resizeTimer;


        window.addEventListener(
            "resize",
            function () {

                clearTimeout(
                    resizeTimer
                );


                resizeTimer =
                    setTimeout(
                        function () {

                            currentIndex =
                                Math.min(
                                    currentIndex,
                                    getMaxIndex()
                                );


                            updateSlider(
                                false
                            );

                        },
                        150
                    );

            }
        );


        /* =================================================
           IMAGE LOADING
           
           Recalculate after images load.
        ================================================= */

        cards.forEach(
            function (card) {

                const img =
                    card.querySelector(
                        "img"
                    );


                if (img) {

                    img.addEventListener(
                        "load",
                        function () {

                            updateSlider(
                                false
                            );

                        }
                    );

                }

            }
        );


        /* =================================================
           INITIALIZE
        ================================================= */

        updateSlider(
            false
        );


        startAutoplay();


        /* =================================================
           REDUCED MOTION
        ================================================= */

        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            );


        if (
            reducedMotion.matches
        ) {

            stopAutoplay();

        }


        console.log(
            "Continuum slider initialized."
        );

    }
);










/* =========================================================
   SRI SRI WELLBEING
   FACILITIES
   INFINITE AUTO SCROLL + MANUAL DRAG
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".facilities-slider");
    const track = document.querySelector(".facilities-track");
    const groups = document.querySelectorAll(".facilities-group");

    if (!slider || !track || groups.length < 2) {
        return;
    }


    /* =====================================================
       SETTINGS
    ===================================================== */

    const AUTO_SPEED = 1.50;

    let position = 0;

    let loopWidth = 0;

    let animationFrame = null;

    let isPaused = false;

    let isDragging = false;

    let startX = 0;

    let startPosition = 0;

    let lastPointerX = 0;

    let velocity = 0;

    let resizeTimer = null;


    /* =====================================================
       CALCULATE LOOP WIDTH
    ===================================================== */

    function calculateLoopWidth() {

        const firstGroup = groups[0];

        if (!firstGroup) {
            return;
        }

        const groupWidth =
            firstGroup.getBoundingClientRect().width;

        const trackStyles =
            window.getComputedStyle(track);

        const gap =
            parseFloat(trackStyles.columnGap) || 0;

        loopWidth =
            groupWidth + gap;


        if (loopWidth > 0) {

            while (position <= -loopWidth) {
                position += loopWidth;
            }

            while (position > 0) {
                position -= loopWidth;
            }
        }
    }


    /* =====================================================
       KEEP POSITION INSIDE LOOP
    ===================================================== */

    function normalizePosition() {

        if (!loopWidth) {
            return;
        }

        while (position <= -loopWidth) {
            position += loopWidth;
        }

        while (position > 0) {
            position -= loopWidth;
        }
    }


    /* =====================================================
       APPLY POSITION
    ===================================================== */

    function applyPosition() {

        track.style.transform =
            `translate3d(${position}px, 0, 0)`;
    }


    /* =====================================================
       AUTO SCROLL
    ===================================================== */

    function animate() {

        if (
            !isPaused &&
            !isDragging &&
            loopWidth > 0
        ) {

            position -= AUTO_SPEED;

            normalizePosition();

            applyPosition();
        }

        animationFrame =
            requestAnimationFrame(animate);
    }


    /* =====================================================
       START ANIMATION
    ===================================================== */

    function startAnimation() {

        if (animationFrame) {
            return;
        }

        animationFrame =
            requestAnimationFrame(animate);
    }


    /* =====================================================
       PAUSE
    ===================================================== */

    function pauseScroll() {

        isPaused = true;
    }


    /* =====================================================
       RESUME
    ===================================================== */

    function resumeScroll() {

        if (!isDragging) {
            isPaused = false;
        }
    }


    /* =====================================================
       MOUSE ENTER
    ===================================================== */

    slider.addEventListener(
        "mouseenter",
        () => {

            pauseScroll();

        }
    );


    /* =====================================================
       MOUSE LEAVE
    ===================================================== */

    slider.addEventListener(
        "mouseleave",
        () => {

            if (!isDragging) {

                resumeScroll();

            }

        }
    );


    /* =====================================================
       MOUSE DOWN
    ===================================================== */

    slider.addEventListener(
        "mousedown",
        (event) => {

            if (event.button !== 0) {
                return;
            }


            isDragging = true;

            isPaused = true;

            startX =
                event.clientX;

            lastPointerX =
                event.clientX;

            startPosition =
                position;

            velocity = 0;


            slider.classList.add(
                "is-dragging"
            );


            /*
               Prevent text/image selection
            */

            event.preventDefault();
        }
    );


    /* =====================================================
       MOUSE MOVE
    ===================================================== */

    window.addEventListener(
        "mousemove",
        (event) => {

            if (!isDragging) {
                return;
            }


            const currentX =
                event.clientX;


            const delta =
                currentX - startX;


            const movement =
                currentX -
                lastPointerX;


            velocity =
                movement;


            position =
                startPosition +
                delta;


            normalizePosition();

            applyPosition();


            lastPointerX =
                currentX;
        }
    );


    /* =====================================================
       MOUSE UP
    ===================================================== */

    window.addEventListener(
        "mouseup",
        () => {

            if (!isDragging) {
                return;
            }


            isDragging = false;

            slider.classList.remove(
                "is-dragging"
            );


            /*
               Small momentum effect
            */

            if (
                Math.abs(velocity) > 1
            ) {

                position +=
                    velocity * 2;

                normalizePosition();

                applyPosition();
            }


            /*
               Resume automatic scrolling
            */

            setTimeout(
                () => {

                    isPaused = false;

                },
                250
            );

        }
    );


    /* =====================================================
       TOUCH START
    ===================================================== */

    slider.addEventListener(
        "touchstart",
        (event) => {

            const touch =
                event.touches[0];


            isDragging = true;

            isPaused = true;


            startX =
                touch.clientX;

            lastPointerX =
                touch.clientX;

            startPosition =
                position;

            velocity = 0;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       TOUCH MOVE
    ===================================================== */

    slider.addEventListener(
        "touchmove",
        (event) => {

            if (!isDragging) {
                return;
            }


            const touch =
                event.touches[0];


            const currentX =
                touch.clientX;


            const delta =
                currentX - startX;


            const movement =
                currentX -
                lastPointerX;


            velocity =
                movement;


            position =
                startPosition +
                delta;


            normalizePosition();

            applyPosition();


            lastPointerX =
                currentX;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       TOUCH END
    ===================================================== */

    slider.addEventListener(
        "touchend",
        () => {

            if (!isDragging) {
                return;
            }


            isDragging = false;


            /*
               Momentum
            */

            if (
                Math.abs(velocity) > 1
            ) {

                position +=
                    velocity * 2;

                normalizePosition();

                applyPosition();
            }


            setTimeout(
                () => {

                    isPaused = false;

                },
                250
            );

        }
    );


    /* =====================================================
       TOUCH CANCEL
    ===================================================== */

    slider.addEventListener(
        "touchcancel",
        () => {

            isDragging = false;

            isPaused = false;

        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        calculateLoopWidth();

                        applyPosition();

                    },
                    200
                );

        }
    );


    /* =====================================================
       PAGE VISIBILITY
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (document.hidden) {

                isPaused = true;

            } else {

                isPaused = false;

            }

        }
    );


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (reducedMotion.matches) {

        isPaused = true;

        position = 0;

        applyPosition();

    }


    reducedMotion.addEventListener(
        "change",
        (event) => {

            isPaused =
                event.matches;

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    function initialize() {

        calculateLoopWidth();

        position = 0;

        applyPosition();

        startAnimation();

    }


    if (
        document.readyState ===
        "complete"
    ) {

        initialize();

    } else {

        window.addEventListener(
            "load",
            initialize,
            {
                once: true
            }
        );

    }

});











/* =========================================================
   SRI SRI WELLBEING
   THERAPY INFINITE CAROUSEL
   FINAL JS

   FEATURES:
   ✓ Slow automatic infinite scroll
   ✓ Mouse drag
   ✓ Mobile finger swipe
   ✓ Pause while dragging
   ✓ Smooth resume
   ✓ Uses existing duplicate group
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".therapy-slider");
    const track = document.querySelector(".therapy-track");

    if (!slider || !track) return;


    /* =====================================================
       SETTINGS
    ===================================================== */

    const AUTO_SPEED = 1.50;  /* fast */
    let position = 0;

    let isDragging = false;

    let startX = 0;
    let startPosition = 0;

    let animationFrame = null;

    let resumeTimer = null;

    let loopWidth = 0;


    /* =====================================================
       CALCULATE LOOP WIDTH
    ===================================================== */

    function calculateLoopWidth() {

        const groups =
            track.querySelectorAll(".therapy-group");

        if (groups.length < 2) return;

        /*
         * First group is the original.
         * Second group is the duplicate.
         */

        const firstGroup = groups[0];

        loopWidth = firstGroup.getBoundingClientRect().width;

    }


    /* =====================================================
       NORMALIZE POSITION
    ===================================================== */

    function normalizePosition() {

        if (!loopWidth) return;


        /*
         * Moving left
         */

        if (position <= -loopWidth) {

            position += loopWidth;
        }


        /*
         * Moving right
         */

        if (position > 0) {

            position -= loopWidth;
        }

    }


    /* =====================================================
       APPLY TRANSFORM
    ===================================================== */

    function updateTransform() {

        track.style.transform =
            `translate3d(${position}px, 0, 0)`;

    }


    /* =====================================================
       AUTO SCROLL
    ===================================================== */

    function animate() {

        if (!isDragging) {

            /*
             * Slow premium movement
             */

            position -= AUTO_SPEED;

            normalizePosition();

            updateTransform();
        }

        animationFrame =
            requestAnimationFrame(animate);

    }


    /* =====================================================
       START DRAG
    ===================================================== */

    function startDrag(clientX) {

        if (!loopWidth) {
            calculateLoopWidth();
        }

        isDragging = true;

        clearTimeout(resumeTimer);

        startX = clientX;

        startPosition = position;

        track.classList.add("is-dragging");

    }


    /* =====================================================
       MOVE DRAG
    ===================================================== */

    function dragMove(clientX) {

        if (!isDragging) return;

        const distance =
            clientX - startX;

        position =
            startPosition + distance;

        normalizePosition();

        updateTransform();

    }


    /* =====================================================
       END DRAG
    ===================================================== */

    function endDrag() {

        if (!isDragging) return;

        isDragging = false;

        track.classList.remove("is-dragging");


        /*
         * Small pause before automatic
         * scrolling continues.
         */

        clearTimeout(resumeTimer);

        resumeTimer =
            setTimeout(function () {

                isDragging = false;

            }, 600);

    }


    /* =====================================================
       MOUSE — DOWN
    ===================================================== */

    track.addEventListener(
        "mousedown",
        function (event) {

            /*
             * Left mouse button only
             */

            if (event.button !== 0) return;

            event.preventDefault();

            startDrag(event.clientX);

        }
    );


    /* =====================================================
       MOUSE — MOVE
    ===================================================== */

    window.addEventListener(
        "mousemove",
        function (event) {

            if (!isDragging) return;

            dragMove(event.clientX);

        }
    );


    /* =====================================================
       MOUSE — UP
    ===================================================== */

    window.addEventListener(
        "mouseup",
        function () {

            if (!isDragging) return;

            endDrag();

        }
    );


    /* =====================================================
       MOUSE SAFETY
    ===================================================== */

    window.addEventListener(
        "blur",
        function () {

            if (isDragging) {

                endDrag();

            }

        }
    );


    /* =====================================================
       MOBILE — TOUCH START
    ===================================================== */

    track.addEventListener(
        "touchstart",
        function (event) {

            if (!event.touches.length) return;

            startDrag(
                event.touches[0].clientX
            );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       MOBILE — TOUCH MOVE
    ===================================================== */

    track.addEventListener(
        "touchmove",
        function (event) {

            if (!isDragging) return;

            if (!event.touches.length) return;

            dragMove(
                event.touches[0].clientX
            );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       MOBILE — TOUCH END
    ===================================================== */

    track.addEventListener(
        "touchend",
        function () {

            endDrag();

        },
        {
            passive: true
        }
    );


    /* =====================================================
       MOBILE — TOUCH CANCEL
    ===================================================== */

    track.addEventListener(
        "touchcancel",
        function () {

            endDrag();

        },
        {
            passive: true
        }
    );


    /* =====================================================
       RECALCULATE ON RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            calculateLoopWidth();

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    calculateLoopWidth();

    updateTransform();

    animate();


    /* =====================================================
       CLEANUP
    ===================================================== */

    window.addEventListener(
        "beforeunload",
        function () {

            if (animationFrame) {

                cancelAnimationFrame(
                    animationFrame
                );

            }

        }
    );

});














/* =========================================================
   WELLNESS VISUAL SECTION
   Reveal + Gentle Interactive Zoom
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".wellness-visual-section");
    const image = document.querySelector(".wellness-visual-image");

    if (!section || !image) return;


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const observer = new IntersectionObserver(
        (entries, obs) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    section.classList.add("is-visible");

                    obs.unobserve(section);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    observer.observe(section);


    /* =====================================================
       MOUSE INTERACTION
       Very subtle — no shaking
    ===================================================== */

    if (window.matchMedia("(pointer: fine)").matches) {

        section.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.025)";

        });

        section.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    }


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {

        section.classList.add("is-visible");

        image.style.transform = "none";

    }

});




/* =========================================================
   VOICES OF WELLBEING
   PREMIUM TESTIMONIAL SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector("#testimonials");

    if (!section) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const windowElement =
        section.querySelector(".testimonial-window");

    const track =
        section.querySelector(".testimonial-track");

    const cards =
        [...section.querySelectorAll(".testimonial-card")];

    const prevButton =
        section.querySelector(".testimonial-btn.prev");

    const nextButton =
        section.querySelector(".testimonial-btn.next");

    const dotsContainer =
        section.querySelector(".testimonial-dots");


    if (
        !windowElement ||
        !track ||
        !cards.length
    ) {
        return;
    }


    /* =====================================================
       VARIABLES
    ===================================================== */

    let currentIndex = 0;

    let cardsPerView = 3;

    let autoPlay;

    let isAnimating = false;

    const AUTO_DELAY = 5000;


    /* =====================================================
       DETECT CARDS PER VIEW
    ===================================================== */

    function getCardsPerView() {

        const width = window.innerWidth;

        if (width <= 700) {
            return 1;
        }

        if (width <= 1100) {
            return 2;
        }

        return 3;
    }


    /* =====================================================
       CREATE DOTS
    ===================================================== */

    function createDots() {

        dotsContainer.innerHTML = "";

        cards.forEach((card, index) => {

            const dot =
                document.createElement("button");

            dot.type = "button";

            dot.setAttribute(
                "aria-label",
                `Go to testimonial ${index + 1}`
            );

            dot.dataset.index = index;

            if (index === currentIndex) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {

                stopAutoPlay();

                goToSlide(index);

                startAutoPlay();

            });

            dotsContainer.appendChild(dot);

        });
    }


    /* =====================================================
       UPDATE DOTS
    ===================================================== */

    function updateDots() {

        const dots =
            [...dotsContainer.querySelectorAll("button")];

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });

    }


    /* =====================================================
       CALCULATE MAX INDEX
    ===================================================== */

    function getMaxIndex() {

        return Math.max(
            0,
            cards.length - cardsPerView
        );
    }


    /* =====================================================
       MOVE SLIDER
    ===================================================== */

    function goToSlide(index) {

        if (isAnimating) return;

        cardsPerView = getCardsPerView();

        const maxIndex = getMaxIndex();

        currentIndex =
            Math.max(
                0,
                Math.min(index, maxIndex)
            );


        const cardWidth =
            cards[0].getBoundingClientRect().width;

        const gap =
            parseFloat(
                getComputedStyle(track).gap
            ) || 0;


        const distance =
            (cardWidth + gap) * currentIndex;


        isAnimating = true;


        track.style.transform =
            `translate3d(-${distance}px, 0, 0)`;


        /* Active card */

        cards.forEach((card, index) => {

            card.classList.toggle(
                "is-active",
                index === currentIndex
            );

        });


        updateDots();


        setTimeout(() => {

            isAnimating = false;

        }, 750);

    }


    /* =====================================================
       NEXT
    ===================================================== */

    function nextSlide() {

        const maxIndex = getMaxIndex();

        if (currentIndex >= maxIndex) {

            goToSlide(0);

        } else {

            goToSlide(currentIndex + 1);

        }

    }


    /* =====================================================
       PREVIOUS
    ===================================================== */

    function previousSlide() {

        const maxIndex = getMaxIndex();

        if (currentIndex <= 0) {

            goToSlide(maxIndex);

        } else {

            goToSlide(currentIndex - 1);

        }

    }


    /* =====================================================
       BUTTON EVENTS
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                stopAutoPlay();

                nextSlide();

                startAutoPlay();

            }
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            () => {

                stopAutoPlay();

                previousSlide();

                startAutoPlay();

            }
        );

    }


    /* =====================================================
       AUTO PLAY
    ===================================================== */

    function startAutoPlay() {

        stopAutoPlay();

        autoPlay =
            setInterval(() => {

                nextSlide();

            }, AUTO_DELAY);

    }


    function stopAutoPlay() {

        if (autoPlay) {

            clearInterval(autoPlay);

            autoPlay = null;

        }

    }


    /* =====================================================
       PAUSE WHEN MOUSE ENTERS
    ===================================================== */

    section.addEventListener(
        "mouseenter",
        stopAutoPlay
    );


    section.addEventListener(
        "mouseleave",
        startAutoPlay
    );


    /* =====================================================
       TOUCH SWIPE
    ===================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    windowElement.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

            stopAutoPlay();

        },
        { passive: true }
    );


    windowElement.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

            startAutoPlay();

        },
        { passive: true }
    );


    function handleSwipe() {

        const distance =
            touchStartX - touchEndX;


        if (Math.abs(distance) < 50) {
            return;
        }


        if (distance > 0) {

            nextSlide();

        } else {

            previousSlide();

        }

    }


    /* =====================================================
       KEYBOARD CONTROL
    ===================================================== */

    section.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "ArrowRight") {

                stopAutoPlay();

                nextSlide();

                startAutoPlay();

            }


            if (event.key === "ArrowLeft") {

                stopAutoPlay();

                previousSlide();

                startAutoPlay();

            }

        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(resizeTimer);

            resizeTimer =
                setTimeout(() => {

                    cardsPerView =
                        getCardsPerView();

                    createDots();

                    currentIndex =
                        Math.min(
                            currentIndex,
                            getMaxIndex()
                        );

                    goToSlide(currentIndex);

                }, 150);

        }
    );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    section.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(section);

                });

            },
            {
                threshold: 0.15
            }
        );


    observer.observe(section);


    /* =====================================================
       INITIALIZE
    ===================================================== */

    cardsPerView =
        getCardsPerView();

    createDots();

    goToSlide(0);

    startAutoPlay();


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (reducedMotion.matches) {

        stopAutoPlay();

        section.classList.add(
            "is-visible"
        );

    }

});











/* =========================================================
   SRI SRI WELLBEING — FOOTER JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const footer = document.querySelector(".wellness-footer");

    if (!footer) return;


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const copyright = footer.querySelector(".copyright");

    if (copyright) {

        const currentYear = new Date().getFullYear();

        copyright.innerHTML = copyright.innerHTML.replace(
            /Copyright © \d{4}/,
            `Copyright © ${currentYear}`
        );
    }


    /* =====================================================
       FOOTER SCROLL REVEAL
    ===================================================== */

    const revealFooter = () => {

        const rect = footer.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.88) {

            footer.classList.add("footer-visible");

            window.removeEventListener(
                "scroll",
                revealFooter
            );
        }
    };


    window.addEventListener(
        "scroll",
        revealFooter,
        { passive: true }
    );

    revealFooter();


    /* =====================================================
       SOCIAL ICON MICRO INTERACTION
    ===================================================== */

    const socialIcons =
        footer.querySelectorAll(".social-icon");

    socialIcons.forEach((icon) => {

        icon.addEventListener("mouseenter", () => {

            icon.style.setProperty(
                "--social-scale",
                "1"
            );
        });


        icon.addEventListener("mouseleave", () => {

            icon.style.setProperty(
                "--social-scale",
                "0"
            );
        });


        /* Keyboard support */

        icon.addEventListener("focus", () => {

            icon.classList.add("social-focus");

        });


        icon.addEventListener("blur", () => {

            icon.classList.remove("social-focus");

        });

    });


    /* =====================================================
       CONTACT HOVER EFFECT
    ===================================================== */

    const contactItems =
        footer.querySelectorAll(".contact-item");

    contactItems.forEach((item) => {

        item.addEventListener("mouseenter", () => {

            item.classList.add("contact-active");

        });


        item.addEventListener("mouseleave", () => {

            item.classList.remove("contact-active");

        });

    });


    /* =====================================================
       MAP INTERACTION
    ===================================================== */

    const mapWrapper =
        footer.querySelector(".map-wrapper");

    const mapIframe =
        footer.querySelector(".map-wrapper iframe");


    if (mapWrapper && mapIframe) {

        mapWrapper.addEventListener(
            "mouseenter",
            () => {

                mapWrapper.classList.add(
                    "map-active"
                );

            }
        );


        mapWrapper.addEventListener(
            "mouseleave",
            () => {

                mapWrapper.classList.remove(
                    "map-active"
                );

            }
        );
    }


    /* =====================================================
       OPEN MAP BUTTON RIPPLE
    ===================================================== */

    const mapButtons =
        footer.querySelectorAll(".map-button");


    mapButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            button.classList.add("map-button-clicked");

            setTimeout(() => {

                button.classList.remove(
                    "map-button-clicked"
                );

            }, 450);

        });

    });


    /* =====================================================
       CONTACT EMAIL / PHONE FEEDBACK
    ===================================================== */

    contactItems.forEach((item) => {

        item.addEventListener("click", () => {

            item.classList.add("contact-clicked");

            setTimeout(() => {

                item.classList.remove(
                    "contact-clicked"
                );

            }, 400);

        });

    });


    /* =====================================================
       SMOOTH SCROLL FOR FOOTER LINKS
    ===================================================== */

    const footerLinks =
        footer.querySelectorAll(
            'a[href^="#"]'
        );


    footerLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetID =
                link.getAttribute("href");

            if (
                targetID &&
                targetID !== "#"
            ) {

                const target =
                    document.querySelector(targetID);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }

        });

    });

});













/* =========================================================
   SRI SRI WELLBEING
   AI CONCIERGE FINAL JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const aiOpen =
        document.getElementById("aiOpen");

    const aiClose =
        document.getElementById("aiClose");

    const aiPanel =
        document.getElementById("aiPanel");

    const aiOverlay =
        document.getElementById("aiOverlay");

    const aiQuestion =
        document.getElementById("aiQuestion");

    const aiSend =
        document.getElementById("aiSend");

    const showTherapies =
        document.getElementById("showTherapies");

    const startBooking =
        document.getElementById("startBooking");

    const therapySelect =
        document.getElementById("therapy");

    const selectedTherapy =
        document.getElementById("selectedTherapy");

    const therapyItems =
        document.querySelectorAll(
            "#aiConcierge .therapy-item"
        );

    const navButtons =
        document.querySelectorAll(
            "#aiConcierge .ai-nav-btn"
        );

    const bookingForm =
        document.getElementById("bookingForm");

    const bookingSuccess =
        document.getElementById("bookingSuccess");

    const appointmentDate =
        document.getElementById("appointmentDate");


    /* =====================================================
       CHECK
    ===================================================== */

    if (!aiOpen || !aiPanel) {
        console.warn(
            "AI Concierge elements not found."
        );

        return;
    }


    /* =====================================================
       OPEN AI
    ===================================================== */

    function openAI() {

        aiPanel.classList.add("active");

        aiPanel.setAttribute(
            "aria-hidden",
            "false"
        );

        aiOpen.classList.add("active");

        aiOpen.setAttribute(
            "aria-expanded",
            "true"
        );


        /*
         * IMPORTANT:
         * Do NOT activate overlay.
         * Original website remains visible.
         */

        if (aiOverlay) {

            aiOverlay.classList.remove(
                "active"
            );

        }


        document.body.classList.add(
            "ai-lock-scroll"
        );

    }


    /* =====================================================
       CLOSE AI
    ===================================================== */

    function closeAI() {

        aiPanel.classList.remove(
            "active"
        );

        aiPanel.setAttribute(
            "aria-hidden",
            "true"
        );

        aiOpen.classList.remove(
            "active"
        );

        aiOpen.setAttribute(
            "aria-expanded",
            "false"
        );


        if (aiOverlay) {

            aiOverlay.classList.remove(
                "active"
            );

        }


        document.body.classList.remove(
            "ai-lock-scroll"
        );

    }


    /* =====================================================
       AI OPEN BUTTON
    ===================================================== */

    aiOpen.addEventListener(
        "click",
        function () {

            if (
                aiPanel.classList.contains(
                    "active"
                )
            ) {

                closeAI();

            } else {

                openAI();

            }

        }
    );


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (aiClose) {

        aiClose.addEventListener(
            "click",
            closeAI
        );

    }


    /* =====================================================
       ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                aiPanel.classList.contains(
                    "active"
                )
            ) {

                closeAI();

            }

        }
    );


    /* =====================================================
       PAGE SWITCH
    ===================================================== */

    function showPage(pageName) {

        const pages =
            document.querySelectorAll(
                "#aiConcierge .ai-page"
            );


        /* Hide all */

        pages.forEach(
            function (page) {

                page.classList.remove(
                    "active"
                );

            }
        );


        /* Remove active nav */

        navButtons.forEach(
            function (button) {

                button.classList.remove(
                    "active"
                );

            }
        );


        /* Find target */

        const target =
            document.getElementById(
                pageName + "Page"
            );


        /* Show target */

        if (target) {

            target.classList.add(
                "active"
            );

        }


        /* Activate nav */

        navButtons.forEach(
            function (button) {

                if (
                    button.dataset.page ===
                    pageName
                ) {

                    button.classList.add(
                        "active"
                    );

                }

            }
        );


        /* Scroll AI content to top */

        const content =
            document.querySelector(
                "#aiConcierge .ai-content"
            );


        if (content) {

            content.scrollTop = 0;

        }

    }


    /* =====================================================
       NAV BUTTONS
    ===================================================== */

    navButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    showPage(
                        button.dataset.page
                    );

                }
            );

        }
    );


    /* =====================================================
       SHOW THERAPIES
    ===================================================== */

    if (showTherapies) {

        showTherapies.addEventListener(
            "click",
            function () {

                showPage(
                    "therapies"
                );

            }
        );

    }


    /* =====================================================
       START BOOKING
    ===================================================== */

    if (startBooking) {

        startBooking.addEventListener(
            "click",
            function () {

                showPage(
                    "booking"
                );

                if (therapySelect) {

                    setTimeout(
                        function () {

                            therapySelect.focus();

                        },
                        200
                    );

                }

            }
        );

    }


    /* =====================================================
       THERAPY CLICK
    ===================================================== */

    therapyItems.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    const therapy =
                        item.dataset.therapy;


                    if (!therapy) {
                        return;
                    }


                    /* Selected therapy */

                    if (selectedTherapy) {

                        selectedTherapy.textContent =
                            therapy;

                    }


                    /* Dropdown */

                    if (therapySelect) {

                        therapySelect.value =
                            therapy;

                    }


                    /* Go to booking */

                    showPage(
                        "booking"
                    );


                    /* Focus */

                    setTimeout(
                        function () {

                            if (therapySelect) {

                                therapySelect.focus();

                            }

                        },
                        200
                    );

                }
            );

        }
    );


    /* =====================================================
       THERAPY DROPDOWN
    ===================================================== */

    if (therapySelect) {

        therapySelect.addEventListener(
            "change",
            function () {

                if (selectedTherapy) {

                    selectedTherapy.textContent =
                        therapySelect.value ||
                        "Please select a therapy";

                }

            }
        );

    }


    /* =====================================================
       TODAY AS MINIMUM DATE
    ===================================================== */

    if (appointmentDate) {

        const today =
            new Date();

        const year =
            today.getFullYear();

        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        appointmentDate.min =
            `${year}-${month}-${day}`;

    }


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(value)

            .replace(
                /&/g,
                "&amp;"
            )

            .replace(
                /</g,
                "&lt;"
            )

            .replace(
                />/g,
                "&gt;"
            )

            .replace(
                /"/g,
                "&quot;"
            )

            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* =====================================================
       LIVE AI RESPONSE
    ===================================================== */

    function showAIResponse(message) {

        const askPage =
            document.getElementById(
                "askPage"
            );


        if (!askPage) {
            return;
        }


        const oldResponse =
            askPage.querySelector(
                ".ai-live-response"
            );


        if (oldResponse) {

            oldResponse.remove();

        }


        const response =
            document.createElement(
                "div"
            );


        response.className =
            "ai-live-response";


        response.innerHTML = `

            <div class="ai-message-name">
                AMMU
            </div>

            <p>
                ${escapeHTML(message)}
            </p>

        `;


        askPage.appendChild(
            response
        );


        const content =
            document.querySelector(
                "#aiConcierge .ai-content"
            );


        if (content) {

            setTimeout(
                function () {

                    content.scrollTop =
                        content.scrollHeight;

                },
                50
            );

        }

    }


    /* =====================================================
       AI QUESTION PROCESSOR
    ===================================================== */

    function processQuestion() {

        if (!aiQuestion) {
            return;
        }


        const question =
            aiQuestion.value.trim();


        if (!question) {
            return;
        }


        const q =
            question.toLowerCase();


        /* =================================================
           GREETINGS
        ================================================= */

        if (
            q === "hi" ||
            q === "hello" ||
            q === "hey" ||
            q.includes("good morning") ||
            q.includes("good afternoon") ||
            q.includes("good evening")
        ) {

            showPage("ask");

            aiQuestion.value = "";


            showAIResponse(
                "Hello! Welcome to Sri Sri Wellbeing. I can help you explore our therapies or book an appointment."
            );


            return;
        }


        /* =================================================
           THERAPY
        ================================================= */

        if (
            q.includes("therapy") ||
            q.includes("therapies") ||
            q.includes("treatment") ||
            q.includes("nadi") ||
            q.includes("panchakarma") ||
            q.includes("marma") ||
            q.includes("osteopathic") ||
            q.includes("ozone") ||
            q.includes("meru") ||
            q.includes("craniosacral") ||
            q.includes("pain management")
        ) {

            showPage(
                "therapies"
            );

            aiQuestion.value = "";

            return;
        }


        /* =================================================
           BOOKING
        ================================================= */

        if (
            q.includes("book") ||
            q.includes("booking") ||
            q.includes("appointment") ||
            q.includes("schedule")
        ) {

            showPage(
                "booking"
            );

            aiQuestion.value = "";

            return;
        }


        /* =================================================
           HELP
        ================================================= */

        if (
            q.includes("help") ||
            q.includes("what can you do") ||
            q.includes("how can you help")
        ) {

            showPage("ask");

            aiQuestion.value = "";


            showAIResponse(
                "I can help you explore our 8 therapies and guide you through appointment booking."
            );


            return;
        }


        /* =================================================
           DEFAULT
        ================================================= */

        showPage("ask");

        aiQuestion.value = "";


        showAIResponse(
            "I can help you explore our therapies or book an appointment. You can also select THERAPIES or BOOK above."
        );

    }


    /* =====================================================
       SEND
    ===================================================== */

    if (aiSend) {

        aiSend.addEventListener(
            "click",
            processQuestion
        );

    }


    /* =====================================================
       ENTER
    ===================================================== */

    if (aiQuestion) {

        aiQuestion.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    processQuestion();

                }

            }
        );

    }


   



/* =====================================================
   BOOKING FORM → ACTIVEPIECES
===================================================== */

const ACTIVEPIECES_BOOKING_URL =
    "https://cloud.activepieces.com/api/v1/webhooks/VJ2FHNxZ7rgrLhZB1KRCU/sync";


if (bookingForm) {

    bookingForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        /* =================================================
           FORM VALIDATION
        ================================================= */

        if (!bookingForm.checkValidity()) {

            bookingForm.reportValidity();

            return;

        }


        /* =================================================
           FORM ELEMENTS
        ================================================= */

        const appointmentTime =
            document.getElementById("appointmentTime");

        const customerName =
            document.getElementById("customerName");

        const customerPhone =
            document.getElementById("customerPhone");

        const customerEmail =
            document.getElementById("customerEmail");

        const customerNotes =
            document.getElementById("customerNotes");


        /* =================================================
           GET FORM VALUES
        ================================================= */

        const name =
            customerName
                ? customerName.value.trim()
                : "";

        const email =
            customerEmail
                ? customerEmail.value.trim()
                : "";

        const phone =
            customerPhone
                ? customerPhone.value.trim()
                : "";

        const therapy =
            therapySelect
                ? therapySelect.value.trim()
                : "";

        const preferredDate =
            appointmentDate
                ? appointmentDate.value
                : "";

        const preferredTime =
            appointmentTime
                ? appointmentTime.value
                : "";

        const message =
            customerNotes
                ? customerNotes.value.trim()
                : "";


        /* =================================================
           EXTRA EMAIL VALIDATION
        ================================================= */

        if (!email) {

            alert("Please enter your email address.");

            if (customerEmail) {
                customerEmail.focus();
            }

            return;

        }


        /* =================================================
           BOOKING DATA
        ================================================= */

        const data = {

            name: name,

            email: email,

            phone: phone,

            therapy: therapy,

            preferredDate: preferredDate,

            preferredTime: preferredTime,

            message: message,

            createdAt: new Date().toISOString()

        };


        console.log(
            "Booking data:",
            data
        );


        /* =================================================
           SUBMIT BUTTON
        ================================================= */

        const submitButton =
            bookingForm.querySelector(".ai-submit");


        if (submitButton) {

            submitButton.disabled = true;

            submitButton.innerHTML = `
                <span>SUBMITTING...</span>
                <span>...</span>
            `;

        }


        /* =================================================
           SEND TO ACTIVEPIECES
        ================================================= */

        try {

            const response =
                await fetch(
                    ACTIVEPIECES_BOOKING_URL,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "text/plain;charset=UTF-8"
                        },

                        body:
                            JSON.stringify(data)
                    }
                );


            /* =================================================
               READ RESPONSE
            ================================================= */

            const responseText =
                await response.text();

            let result = {};

            try {

                result =
                    responseText
                        ? JSON.parse(responseText)
                        : {};

            } catch (parseError) {

                console.error(
                    "Invalid Activepieces response:",
                    responseText
                );

                throw new Error(
                    "Invalid response received from booking system."
                );

            }


            console.log(
                "Activepieces response:",
                result
            );


            /* =================================================
               HTTP ERROR
            ================================================= */

            if (!response.ok) {

                throw new Error(
                    result.message ||
                    "Booking request failed."
                );

            }


            /* =================================================
               SUCCESS CHECK
            ================================================= */

            if (result.success !== true) {

                throw new Error(
                    result.message ||
                    "Booking was not accepted."
                );

            }


            /* =================================================
               SUCCESS MESSAGE
            ================================================= */

            if (bookingSuccess) {

                bookingSuccess.innerHTML = `

                    <strong>
                        ✓ Booking Request Received
                    </strong>

                    <br><br>

                    Thank you,
                    ${escapeHTML(name)}.

                    <br><br>

                    <strong>
                        Reference:
                    </strong>

                    ${escapeHTML(
                        result.booking_reference ||
                        "Pending"
                    )}

                    <br>

                    <strong>
                        Status:
                    </strong>

                    ${escapeHTML(
                        result.status ||
                        "Pending Confirmation"
                    )}

                `;

                bookingSuccess.classList.add("show");

            }


            /* =================================================
               UPDATE BUTTON
            ================================================= */

            if (submitButton) {

                submitButton.innerHTML = `
                    <span>
                        BOOKING RECEIVED
                    </span>

                    <span>
                        ✓
                    </span>
                `;

            }


            /* =================================================
               RESET FORM
            ================================================= */

            bookingForm.reset();


            /* =================================================
               UPDATE SELECTED THERAPY
            ================================================= */

            if (selectedTherapy) {

                selectedTherapy.textContent =
                    therapy || "";

            }

        }


        /* =================================================
           ERROR HANDLING
        ================================================= */

        catch (error) {

            console.error(
                "Booking submission failed:",
                error
            );


            if (bookingSuccess) {

                bookingSuccess.innerHTML = `

                    <strong>
                        Booking could not be submitted.
                    </strong>

                    <br><br>

                    Please check your connection
                    and try again.

                `;

                bookingSuccess.classList.add("show");

            }


            if (submitButton) {

                submitButton.innerHTML = `
                    <span>
                        TRY AGAIN
                    </span>

                    <span>
                        ↻
                    </span>
                `;

                submitButton.disabled = false;

            }

        }

    });

}







    






    /* =====================================================
       INITIAL PAGE
    ===================================================== */

    showPage("ask");

});