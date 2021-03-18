window.addEventListener('load', (e) => {

   const messageRadio = document.getElementById("messageRadio");
   const messageForm = document.getElementById("message");
   const listingRadio = document.getElementById("listingRadio");
   const listingForm = document.getElementById("listing");

   if (messageRadio.checked) {
      messageForm.classList.add("active");
   }

   const showHide1 = () => {
      messageForm.classList.add('active');
      listingForm.classList.remove('active');
   };

   const showHide2 = () => {
      messageForm.classList.remove('active');
      listingForm.classList.add('active');
   };



   messageRadio.addEventListener("click", showHide1);
   listingRadio.addEventListener("click", showHide2);
});

