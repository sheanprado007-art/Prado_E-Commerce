
const sidebar = document.getElementById("sidebar");
const menuLinks = document.querySelectorAll(".sidebar a");
const logoutBtn = document.getElementById("logoutBtn");


function toggleMenu(){
    sidebar.classList.toggle("open");
    sidebar.classList.toggle("closed");
}


menuLinks.forEach(link => {
    link.addEventListener("click", function(event){

        event.preventDefault();

        menuLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");
    });
});


logoutBtn.addEventListener("click", function(event){

    event.preventDefault();

    alert("Logged out successfully!");
});



