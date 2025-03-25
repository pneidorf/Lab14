import "./counter.js";
import "./download.js";

document.querySelector("#app").innerHTML = `
  <div class="resume">
    <h1 contenteditable="true" class="editable">Ваше Имя</h1>
    <p contenteditable="true" class="editable">Ваша Профессия</p>
    <section contenteditable="true" class="editable">
      <h2>Обо мне</h2>
      <p>Описание о себе...</p>
    </section>
    <section contenteditable="true" class="editable">
      <h2>Опыт</h2>
      <p>Детали о вашем опыте...</p>
    </section>
    <section contenteditable="true" class="editable">
      <h2>Образование</h2>
      <p>Детали о вашем образовании...</p>
    </section>
    <button id="download-btn">Скачать в PDF</button>
  </div>
`;

document.getElementById("download-btn").addEventListener("click", () => {
  window.print();
});
