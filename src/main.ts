import "./style.css";

const app = document.querySelector<HTMLElement>("#app");

if (!app) {
  throw new Error("Le conteneur #app est introuvable.");
}

app.innerHTML = `
  <section class="prototype">
    <div class="moon" aria-hidden="true">🌑</div>
    <h1>La Bibliothèque lunaire</h1>
    <p>Premier prototype</p>
  </section>
`;