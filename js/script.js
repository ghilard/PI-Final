//Notificação de criação de quizz
function ativarNotificacao() {
    // Define a variável no localStorage
    localStorage.setItem('ativar', 'true');
}

document.addEventListener('DOMContentLoaded', function () {
    // Verifica o estado no localStorage
    var ativar = localStorage.getItem('ativar');

    if (ativar === 'true') {
        // Inicializa o toast
        var toastEl = document.getElementById('toast');
        var toast = new bootstrap.Toast(toastEl, {
            autohide: true,
            delay: 3500
        });
        toast.show();

        // Reseta o valor no localStorage para evitar exibições repetidas
        localStorage.setItem('ativar', 'false');
    }
});

