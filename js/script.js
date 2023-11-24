 // JavaScript for email form
 const emailInput = document.getElementById("emailInput");
 const submitBtn = document.getElementById("submitBtn");
 const thankYouMessage = document.getElementById("thankYouMessage");

 submitBtn.addEventListener("click", function () {
   // Perform validation here if needed
   emailInput.style.display = "none";
   submitBtn.style.display = "none";
   thankYouMessage.style display = "block";
 });


 // JavaScript for theme toggle
 const themeButton = document.querySelector("#theme-toggle-button");
 const root = document.documentElement;

 themeButton.addEventListener("click", () => {
   const currentTheme = root.getAttribute("data-bs-theme");

   if (currentTheme === "light") {
     root.setAttribute("data-bs-theme", "dark");
     setHeader("Welcome to Archipelago University (Dark Theme)", "#333", "#008001");
   } else {
     root.setAttribute("data-bs-theme", "light");
     setHeader("Welcome to Archipelago University (Light Theme)", "#000", "#ebb32a");
   }
 });