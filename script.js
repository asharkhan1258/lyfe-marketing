document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector("#mainNavbar");
    const dropdowns = document.querySelectorAll(".custom-dropdown");

    /*
    =========================================
    MOBILE DROPDOWN
    =========================================
    */

    dropdowns.forEach(function (dropdown) {

        const link = dropdown.querySelector(".nav-link");
        const menu = dropdown.querySelector(".dropdown-menu");

        if (!link || !menu) return;

        link.addEventListener("click", function (e) {

            // Mobile / Tablet
            if (window.innerWidth < 992) {

                e.preventDefault();

                const isOpen = menu.classList.contains("show");

                // Close other dropdowns
                dropdowns.forEach(function (otherDropdown) {

                    const otherMenu =
                        otherDropdown.querySelector(".dropdown-menu");

                    if (otherMenu && otherMenu !== menu) {
                        otherMenu.classList.remove("show");
                    }

                });

                // Toggle current dropdown
                if (isOpen) {
                    menu.classList.remove("show");
                } else {
                    menu.classList.add("show");
                }

            }

        });

    });


    /*
    =========================================
    DESKTOP HOVER DROPDOWN
    =========================================
    */

    dropdowns.forEach(function (dropdown) {

        dropdown.addEventListener("mouseenter", function () {

            if (window.innerWidth >= 992) {

                const menu =
                    dropdown.querySelector(".dropdown-menu");

                if (menu) {
                    menu.classList.add("show");
                }

            }

        });


        dropdown.addEventListener("mouseleave", function () {

            if (window.innerWidth >= 992) {

                const menu =
                    dropdown.querySelector(".dropdown-menu");

                if (menu) {
                    menu.classList.remove("show");
                }

            }

        });

    });


    /*
    =========================================
    CLOSE MOBILE DROPDOWNS
    =========================================
    */

    document.addEventListener("click", function (e) {

        if (window.innerWidth < 992) {

            if (!e.target.closest(".custom-dropdown")) {

                dropdowns.forEach(function (dropdown) {

                    const menu =
                        dropdown.querySelector(".dropdown-menu");

                    if (menu) {
                        menu.classList.remove("show");
                    }

                });

            }

        }

    });


    /*
    =========================================
    SEARCH
    =========================================
    */

    const searchToggle =
        document.getElementById("searchToggle");

    const searchBox =
        document.getElementById("navbarSearch");


    if (searchToggle && searchBox) {

        searchToggle.addEventListener("click", function (e) {

            e.preventDefault();

            searchBox.classList.toggle("show");

        });

    }

});