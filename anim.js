
function toggleNav(){
    let width = $(window).width()//on récup la largeur actuelle
    if(width > 700){//si elle est au delà de 800px
        //on ote à la nav les classes mobile et open (si elle est ouverte)
        $("#top-nav").removeClass(["mobile","open"])
        //on remet le burger à son état d'origine
        $("#burger").toggleClass(["fa-times", "fa-bars"])
    }
    else{
        //sinon, on lui ajoute la classe mobile
        $("#top-nav").addClass("mobile")
    }
}
//lorsque le navigateur a fini l'interprétation du code de la page
$(document).ready(function() {
    //on exécute une première fois la fonction toggleNav
    //dans le cas pù la fenêtre est en dessous de 800px au démarrage
    toggleNav()
    //on paramètre l'event click sur le burger
    $("#burger").click(function() {
        //on ajoute la classe open à la nav
        $("#top-nav").toggleClass("open")
        //et on transforme l'icone burger en croix blanche
        $(this).toggleClass(["fa-times", "fa-bars"])
    })
    //lorsque la fenêtre est redimensionnée par l'utilisateur
    $(window).resize(() => {
        //on appelle toggleNav pour adapter la nav à la nouvelle taille
        //choisie par l'utilisateur
        toggleNav()
    })

})
//      A C C O R D I O N
var acc = document.getElementsByClassName("accordion-part");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");


    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 
/*----------------------MODAL---------------------*/
$(document).ready(function(){
  $(".button").click(function(){
      var value = $(this).attr("data-filter");
      if (value == 'all')
      {
          $('.filter').show('1000');
      } else 
      {
          $(".filter").not('.'+value).hide("1000");
          $(".filter").filter('.'+value).show('1000');
      }
      //rajoute class active
      $("#nav-gallery .button").click(function(){
          $(this).addClass('active').sibling().removeClass('active');
      })
  })
})