const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");


if (sidebar && toggleBtn) {

    toggleBtn.addEventListener("click", function () {

        if (window.innerWidth > 768) {

            sidebar.classList.toggle("closed");

        }

        else {

            sidebar.classList.toggle("open");

        }

    });

}


const currentPage =
    window.location.pathname.split("/").pop();

const menuLinks =
    document.querySelectorAll(".menu-link");


menuLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (
        linkPage &&
        linkPage !== "#" &&
        linkPage === currentPage
    ) {

        link.classList.add("active");

    }

});

let cartCount =
    parseInt(localStorage.getItem("cartCount")) || 0;


const cartCounter =
    document.getElementById("cartCount");


function updateCartCounter() {

    if (cartCounter) {

        cartCounter.textContent = cartCount;

    }

}


updateCartCounter();

const addCartButtons =
    document.querySelectorAll(".add-cart");


addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        localStorage.setItem(
            "cartCount",
            cartCount
        );

        updateCartCounter();


        const productName =
            this.getAttribute("data-product");


        alert(
            productName +
            " has been added to your cart!"
        );

    });

});

const moveCartButtons =
    document.querySelectorAll(".move-cart");


moveCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        localStorage.setItem(
            "cartCount",
            cartCount
        );

        updateCartCounter();


        alert("Product moved to cart!");

    });

});


const checkoutBtn =
    document.getElementById("checkoutBtn");


if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        function () {

            if (cartCount > 0) {

                alert(
                    "Thank you! Your order is ready for checkout."
                );

            }

            else {

                alert(
                    "Your cart is empty!"
                );

            }

        }
    );

}

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const confirmLogout =
                confirm(
                    "Are you sure you want to logout?"
                );


            if (confirmLogout) {

                localStorage.removeItem("cartCount");

                alert(
                    "You have been logged out successfully!"
                );

                window.location.href =
                    "../index.html";

            }

        }
    );

}

const logoutAction =
    document.getElementById("logoutAction");


if (logoutAction) {

    logoutAction.addEventListener(
        "click",
        function () {

            localStorage.removeItem("cartCount");

            alert(
                "You have been logged out successfully!"
            );

            window.location.href =
                "../index.html";

        }
    );

}


document.addEventListener("DOMContentLoaded", function () {

    const sidebar = document.getElementById("sidebar");

    const menuLinks = document.querySelectorAll(".menu-link");

    if (!sidebar) return;


    menuLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const page = this.getAttribute("href");

            if (!page || page === "#") return;

            localStorage.setItem(
                "sidebarState",
                sidebar.classList.contains("closed")
                    ? "closed"
                    : "open"
            );

        });

    });

    const savedState =
        localStorage.getItem("sidebarState");


    if (savedState === "open") {

        sidebar.classList.remove("closed");

    }

    else if (savedState === "closed") {

        sidebar.classList.add("closed");

    }

});