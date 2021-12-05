// const romain = document.getElementById("romain");
const images = document.querySelectorAll(".profile");

console.log(images);
images.forEach((image) => {
  image.addEventListener("click", (event) => {
    image.classList.toggle("img-circle");
  });
});
// romain.addEventListener("click", (event) => {
//   event.currentTarget.classList.toggle("img-circle");
// });
