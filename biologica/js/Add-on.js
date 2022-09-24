// Active Navbar Start
$(document).ready(function(){
    $('ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
  });
});

// Active Navbar End

// Get Location
$(document).ready(function(){
    $('.get-btn').click(function(){
        $('.remove').hide();
        $('.add').show();
  });
});

// Mobile Navbar Start
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// Mobile Navbar End



