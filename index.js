/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.classList.add("responsive");
    } else { 
      x.classList.remove("responsive");
    }
  }


const menuItem = document.querySelector(".topnav");
const sounds = menuItem.querySelectorAll("a[data-pet]");

sounds.forEach((sound) => { 
    sound.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(sound)
        selectedSound = sound.getAttribute("data-pet")
        menuItem.insertAdjacentHTML("afterend",'<div class="section-pet">' + selectedSound + '</div>');
    });
});