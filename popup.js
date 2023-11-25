// Função para mostrar o popup
function mostrarPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Função para fechar o popup
function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}

// Adicionar event listeners aos botões
document.getElementById('mostrarPopup').addEventListener('click', mostrarPopup);
document.getElementById('fecharPopup').addEventListener('click', fecharPopup);
