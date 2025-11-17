console.log("Page du raid chargée !");

// Exemple : un petit scroll en douceur quand on clique sur les liens (si tu ajoutes des ancres plus tard)
document.querySelectorAll('a.btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Si c'est un lien vers une ancre interne
    const href = btn.getAttribute('href');
    if (href && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});
