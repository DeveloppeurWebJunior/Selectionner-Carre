(function app() {

    var choice = document.getElementById("choix");
    var mesCarre = ma_section.querySelectorAll(".mes_boites");


    var selectBox = function selecBox(select) {


        select.addEventListener("change", function (evt) {


            var cible = evt.target || evt.srcElement;
            var index = cible.selectedIndex;

            var precedent = document.querySelector(".mes_boites.cloud")

            console.log(index);

            if (index != 0) {
                mesCarre[index - 1].classList.add("cloud")
            }

            if (precedent !== null) {
                precedent.classList.remove("cloud")
            }

        });
    }



    var start = function start() {
        console.log("DOM READY !!!");
        
        selectBox(choice);
    }
    window.addEventListener("DOMContentLoaded", start);

}())
