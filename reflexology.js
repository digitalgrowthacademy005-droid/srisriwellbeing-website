/* =========================================================
   SRI SRI WELLBEING – PANCHAKARMA PAGE INTERACTIONS
   Navigation drawer, FAQ accordion, AI panel controls
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mainMenu = document.getElementById("mainMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  const openMenu = () => {
    if (!mainMenu || !menuOverlay) return;
    mainMenu.classList.add("is-open");
    menuOverlay.classList.add("is-visible");
    document.body.classList.add("menu-open");
    mainMenu.setAttribute("aria-hidden", "false");
    menuToggle?.setAttribute("aria-expanded", "true");
    menuToggle?.setAttribute("aria-label", "Close navigation");
  };

  const closeMenu = () => {
    if (!mainMenu || !menuOverlay) return;
    mainMenu.classList.remove("is-open");
    menuOverlay.classList.remove("is-visible");
    document.body.classList.remove("menu-open");
    mainMenu.setAttribute("aria-hidden", "true");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
  };

  menuToggle?.addEventListener("click", () => {
    mainMenu?.classList.contains("is-open") ? closeMenu() : openMenu();
  });
  menuClose?.addEventListener("click", closeMenu);
  menuOverlay?.addEventListener("click", closeMenu);
  mainMenu?.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
      closeAI();
    }
  });

  /* AI CONCIERGE PANEL: opens/closes the existing panel UI.
     A live AI response requires the separately configured backend/API. */
  const aiOpen = document.getElementById("aiOpen");
  const aiClose = document.getElementById("aiClose");
  const aiPanel = document.getElementById("aiPanel");
  const aiOverlay = document.getElementById("aiOverlay");

  const openAI = () => {
    if (!aiPanel || !aiOverlay) return;
    aiPanel.classList.add("is-open");
    aiOverlay.classList.add("is-visible");
    aiPanel.setAttribute("aria-hidden", "false");
    aiOpen?.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  };

  function closeAI() {
    if (!aiPanel || !aiOverlay) return;
    aiPanel.classList.remove("is-open");
    aiOverlay.classList.remove("is-visible");
    aiPanel.setAttribute("aria-hidden", "true");
    aiOpen?.setAttribute("aria-expanded", "false");
    if (!mainMenu?.classList.contains("is-open")) {
      document.body.classList.remove("menu-open");
    }
  }

  aiOpen?.addEventListener("click", openAI);
  aiClose?.addEventListener("click", closeAI);
  aiOverlay?.addEventListener("click", closeAI);

  /* FAQ: allow one answer open at a time. */
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach(other => {
        if (other !== item) other.open = false;
      });
    });
  });

  /* AI concierge tabs, when those elements exist in the page markup. */
  const aiNavButtons = document.querySelectorAll(".ai-nav-btn[data-page]");
  const aiPages = {
    ask: document.getElementById("askPage"),
    therapies: document.getElementById("therapiesPage"),
    booking: document.getElementById("bookingPage")
  };

  aiNavButtons.forEach(button => {
    button.addEventListener("click", () => {
      const pageName = button.dataset.page;
      aiNavButtons.forEach(btn => btn.classList.toggle("active", btn === button));
      Object.entries(aiPages).forEach(([name, page]) => {
        page?.classList.toggle("active", name === pageName);
      });
    });
  });

  /* Existing quick-action buttons can switch the AI panel to a tab. */
  document.getElementById("showTherapies")?.addEventListener("click", () => {
    document.querySelector('.ai-nav-btn[data-page="therapies"]')?.click();
  });
  document.getElementById("startBooking")?.addEventListener("click", () => {
    document.querySelector('.ai-nav-btn[data-page="booking"]')?.click();
  });
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