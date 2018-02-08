(function(){
    
        let menuMobil = document.querySelector("#menu-mobil"),
            menuWeb = document.querySelector("#menu-web"),
            cerrarMenu = document.querySelector("#cerrar-menu");


            menuMobil.addEventListener("click", function(){
                menuMobil.style.display = "none";
                menuWeb.classList.toggle("header__menu-web--visible");
            });
            cerrarMenu.addEventListener("click", function(){
                menuMobil.style.display = "block";
                menuWeb.classList.toggle("header__menu-web--visible");
            });
})();