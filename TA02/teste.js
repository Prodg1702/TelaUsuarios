// function toggleButton(button) {
//   button.classList.toggle("selecionado");
// }


var botaoToggle = document.querySelector('.botao-toggle');

botaoToggle.addEventListener('click', function() {
  botaoToggle.classList.toggle('ativo');
});
