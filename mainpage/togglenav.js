    /* Set the width of the side navigation to 250px */
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

   /* Toggle the width of the side navigation */
function toggleNav() {
  const sidenav = document.getElementById("mySidenav");
  if (sidenav.style.width === "250px") {
    sidenav.style.width = "0";
  } else {
    sidenav.style.width = "250px";
  }
} 