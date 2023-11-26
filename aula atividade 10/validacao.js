document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contatoForm');
    
    form.addEventListener('submit', function (event) {
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();
  
      if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        event.preventDefault(); // Impede o envio do formulário
      }
    });
  });
  