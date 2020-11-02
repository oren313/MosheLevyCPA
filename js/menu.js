    function menuFunction() {
      var menu = document.getElementById("menu-links");
      var closeBtn = document.getElementById("menu-close-icon");
      var openBtn = document.getElementById("menu-open-icon");
        
      if (menu.style.display === "block") {
        menu.style.display = "none";
        openBtn.style.display = "block";
        closeBtn.style.display = "none";
      } else {
        menu.style.display = "block";
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
      }
    }