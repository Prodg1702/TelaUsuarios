// const botao = document.querySelector('.botao-girar');

// botao.addEventListener('click', () => {
//     botao.classList.toggle('girando');
// });


const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");

botao1.addEventListener("click", () => {
  botao2.disabled = true;
});

botao2.addEventListener("click", () => {
  botao1.disabled = true;
});


const cell = document.querySelector('.selectable-cell');
cell.addEventListener('click', () => {
  alert('Célula selecionada!');
});
