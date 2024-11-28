//Permitir apenas com campo preenchidos
let quest = document.getElementById("questao"); //Número da questão
let pergunta = document.getElementById("apagar-pergunta");//Pergunta
let titulo = document.getElementById("apagar-titulo");//Titulo
let elemento = document.getElementsByClassName("apagar-alternativa");//Alternativas para resposta
let select = document.getElementById('apagar-cronometro');//Limpar cronometro
let checkboxes = document.querySelectorAll('.apagar-check');//Limpar checkbox

function condicao(){
    //Não permite campos vazios
    if(pergunta.value == "" || titulo.value == "" || select.selectedIndex == 0)
        {
            alert("Pergunta, titulo, cronometro");
            throw new Error("");
        }
        
        //Qualquer alternativa sem valor PARA a execução
        for (var i = 0; i < elemento.length; i++) {
            if(elemento[i].value == ""){
                alert("alternativas resposta");
                throw new Error("");
            }
        }
        
        //Conferir checkBox selecionados, permitir apenas com um selecionado
        let conferir = 0;
        checkboxes.forEach(function(checkbox){
            if(checkbox.checked == false){
                conferir += 1;
            }
        
            if(conferir == 4)
            {
                alert("Checkbox");
                throw new Error("");
            }
        });
}

//Adicionar o link para navegar
function linkNavegar(){
    let link = document.getElementById('meuLink');

    // Define o atributo href
    link.href = '/paginas-adm/perfil-relatorio.html';
}

//Notificação de criação de quizz
function ativarNotificacao() {
    condicao();

    // Define a variável no localStorage
    linkNavegar();
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

let NumberQuest = 1;

function adicionar(){
    condicao();
    //Alterar numero da questão ----------------------
    NumberQuest += 1;
    quest.innerHTML = `Questão ${NumberQuest}`;
    //-----------------------------------------------

    //Limpar pergunta -----------------------------
    pergunta.value = "";
    //-----------------------------------------------

    //Limpar titulo ---------------------------------
    titulo.value = "";
    //-----------------------------------------------

    //Limpar alternativas ----------------------------
    for (var i = 0; i < elemento.length; i++) {
        elemento[i].value = ""; 
    }
    //------------------------------------------------

    //Alterar cronometro ----------------------------
    select.selectedIndex = 0;
    //-----------------------------------------------

    //Alterar checkBox -----------------------------
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    //------------------------------------------------

}   






