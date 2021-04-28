window.addEventListener('load', (e) => {

   const hamburger = document.getElementById("hamburger");
   const menu = document.getElementById("menu");
   const bars = document.getElementById("bars");
   const close = document.getElementById("close");

   menu.style.display = "none";
   bars.style.display = "block";
   close.style.display = "none";

   const toggle = () => {
      if (menu.style.display === "none") {
         menu.style.display = "block";
         bars.style.display = "none";
         close.style.display = "block";
      } else {
         menu.style.display = "none";
         bars.style.display = "block";
         close.style.display = "none";
      }
   };
    

   hamburger.addEventListener("click", toggle);
});

