const tables = document.querySelectorAll(".main-down"); // Selecciona todas las tablas

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate"); // Añade la clase al entrar
    } else {
      entry.target.classList.remove("animate"); // Elimina la clase al salir
    }
  });
});

// Observa cada tabla individualmente
tables.forEach((table) => {
  observer.observe(table); // Observa cada tabla individualmente
});
