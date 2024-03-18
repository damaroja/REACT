

//Eventos en inputs

const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("keydown", () => {
  console.log("escribiendo...");
});

busqueda.addEventListener("keyup", () => {
  console.log("escribiendo...");
});

busqueda.addEventListener("blur", () => {
  console.log("saliendo del input");
});

busqueda.addEventListener("copy", () => {
  console.log("copiando texto");
});

busqueda.addEventListener("paste", () => {
  console.log("pegando texto");
});

busqueda.addEventListener("cut", () => {
  console.log("cortando texto");
});
