var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
var fromId = document.getElementById.bind(document);
var fromClass = document.getElementsByClassName.bind(document);
var fromTag = document.getElementsByTagName.bind(document);

// #### Escape button close ####

function escClose(closeFunction) {

   document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
         isEscape = (evt.key == "Escape" || evt.key == "Esc");
      } else {
         isEscape = (evt.keyCode == 27);
      }
      if (isEscape) {
         closeFunction();
      }
   }
}

// ##### SIDEMENY: #####

function sideMenu() {
   function openMenu() {
      if(!query(".body").classList.contains("js--menu")) {
         query(".body").classList.add("js--menu");
      }
   }

   function closeMenu() {
      if(query(".body").classList.contains("js--menu")) {
         query(".body").classList.remove("js--menu");
      }
   }

   query(".header--menu").addEventListener("click", function(e) {
      if(query(".body").classList.contains("js--menu")) {
         closeMenu();
      } else {
         openMenu();
      }
      e.preventDefault();
   });

   query(".sidemenu--overlay").addEventListener("click", function(e) {
      if(query(".body").classList.contains("js--menu")) {
         closeMenu();
      }
   });

   escClose(function(){ closeMenu() });
}

sideMenu();

// ##### ÅPNINGSTIDER #####

function hours() {
   var date = new Date();
   var day = 5; // date.getDay()
   var today = query(".hours--day-" + day);
   if(today.innerHTML.indexOf("Stengt") != -1) {
      var closed = queryAll(".hours--closed");
      for (var i = 0; i < closed.length; i++) {
         closed[i].style.display = "inline";
      }
   } else {
      query(".hours--open").style.display = "inline";
      query(".hours--today").innerHTML = today.innerHTML;
   }
}

hours();

function hoursPopUp() {
   var hours = query(".hours--link");
   var hoursPopUp = query(".hours--popup--box");
   var close = query(".hours--popup--box-close");

   function openPopUp() {
      hours.classList.add("js--active");
      close.classList.add("js--active");
      hoursPopUp.style.display = "block";
   }
   function closePopUp() {
      hours.classList.remove("js--active");
      close.classList.remove("js--active");
      hoursPopUp.style.display = "none";
   }

   hours.addEventListener("click", function(e) {
      if(hours.classList.contains("js--active")) {
         closePopUp();
      } else {
         openPopUp();
      }
      e.preventDefault();
   });
   close.addEventListener("click", function(e) {
      if(hours.classList.contains("js--active")) {
         closePopUp();
      }
   });
   hours.addEventListener("mouseover", function() {
      hoursPopUp.style.display = "block";
   });
   hours.addEventListener("mouseout", function() {
      if(!hours.classList.contains("js--active")) {
         hoursPopUp.style.display = "none";
      }
   });
   escClose(function(){ closePopUp() });
}

hoursPopUp();
