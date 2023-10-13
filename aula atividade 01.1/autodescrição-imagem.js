document.addEventListener('DOMContentLoaded', function () {
    var imagem1 = document.getElementById('imagem1');
    var imagem2 = document.getElementById('imagem2');
    var descricaoDiv1 = document.getElementById('descricao1');
    var descricaoDiv2 = document.getElementById('descricao2');


    imagem1.addEventListener('mouseover', function () {
        var descricao = imagem1.alt;
        descricaoDiv1.textContent = descricao;
    });

    imagem2.addEventListener('mouseover', function () {
        var descricao = imagem2.alt;
        descricaoDiv2.textContent = descricao;
    });

    // Resetar a descrição quando o mouse sai de qualquer imagem
    imagem1.addEventListener('mouseout', resetarDescricao);
    imagem2.addEventListener('mouseout', resetarDescricao);

    function resetarDescricao() {
        descricaoDiv1.textContent = '';
        descricaoDiv2.textContent = '';
    }
});