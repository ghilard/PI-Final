//Permitir apenas com campo preenchidos
let quest = document.getElementById("questao"); //Número da questão
let pergunta = document.getElementById("apagar-pergunta");//Pergunta
let titulo = document.getElementById("apagar-titulo");//Titulo
let elemento = document.getElementsByClassName("apagar-alternativa");//Alternativas para resposta
let select = document.getElementById('apagar-cronometro');//Limpar cronometro
let checkboxes = document.querySelectorAll('.apagar-check');//Limpar checkbox

let NumberQuest = 1;
let OneQuest = false;

//Mensagem de aviso para preencher
function avisoPreencha(aviso){
        
    var toastAviso = document.getElementById(aviso);
    var toast2 = new bootstrap.Toast(toastAviso, {
        autohide: true,
        delay: 3500
    });
    toast2.show();
                
}

function condicao(){
    //Não permite campos vazios
    if(pergunta.value == "" || titulo.value == "" || select.selectedIndex == 0)
    {
        avisoPreencha('aviso-preencha');
        throw new Error("");
    }
        
    //Qualquer alternativa sem valor PARA a execução
    for (var i = 0; i < elemento.length; i++) {
        if(elemento[i].value == ""){
            avisoPreencha('aviso-preencha');
            throw new Error("");
        }
    }
        
    //Conferir checkBox selecionados, permitir apenas com um selecionado
    let conferir = 0;
    checkboxes.forEach(function(checkbox)
    {
        if(checkbox.checked == false)
        {
            conferir += 1;
        }
            
        if(conferir == 4)
        {
            avisoPreencha('aviso-preencha');
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

function linkNavegarLogin(){
    link = document.getElementById("linkLogin");

    // Define o atributo href
    link.href = '/paginas-adm/perfil-relatorio.html';
}

function linkNavegarCadastro(){
    link = document.getElementById("linkCadastro");

    // Define o atributo href
    link.href = '/login.html';
}

//Notificação de criação de quizz
function ativarNotificacao() {
    if(OneQuest == true)
    {
        // Define a variável no localStorage
        linkNavegar();
        localStorage.setItem('ativar', 'true');
    }
    else 
    {
        avisoPreencha('aviso-onequest');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Verifica o estado no localStorage
    var ativar = localStorage.getItem('ativar');

    if (ativar === 'true') {
        // Inicializa o toast
        var toastCriado = document.getElementById('toast');
        var toast = new bootstrap.Toast(toastCriado, {
            autohide: true,
            delay: 3500
        });
        toast.show();

        // Reseta o valor no localStorage para evitar exibições repetidas
        localStorage.setItem('ativar', 'false');
    }

});

function adicionar(){
    condicao();
    OneQuest = true;

    //Alterar numero da questão ----------------------
    NumberQuest += 1;
    quest.innerHTML = `Questão ${NumberQuest}`;
    //-----------------------------------------------

    //Limpar pergunta -----------------------------
    pergunta.value = "";
    //-----------------------------------------------

    //Desabilitar campo titulo ------------------------
    titulo.disabled = true;
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

//TELA CADASTRO
let email_login = document.getElementById("login-email");
let senha_login = document.getElementById("login-senha");
let email_cadastro = document.getElementById("cadastro-email");
let nome_cadastro = document.getElementById("cadastro-nome");
let senha_cadastro = document.getElementById("cadastro-senha");
let senha_confirmar = document.getElementById("cadastro-confirmar");
let temp_senha;
let temp_email;

function condicao_cadastro()
{
    if (email_cadastro.value == "" || nome_cadastro.value == "" || senha_cadastro.value == "" || senha_confirmar.value == "")
    {
        avisoPreencha('aviso-preencha');
        throw new Error("");
    }

    if(senha_cadastro.value != senha_confirmar.value){
        avisoPreencha('aviso-preencha');
        throw new Error("");   
        
    }
}

function condicao_login()
{
    if (email_login.value != temp_email || senha_login.value != temp_senha)
    {
        avisoPreencha('aviso-preencha');
        throw new Error("");
    }
}

function login()
{
    temp_email = localStorage.getItem("temp_email");
    temp_senha = localStorage.getItem("temp_senha");

    condicao_login();
    linkNavegarLogin();
}

function cadastro()
{
    condicao_cadastro();
    localStorage.setItem("temp_email", email_cadastro.value);
    localStorage.setItem("temp_senha", senha_cadastro.value);
    linkNavegarCadastro();
}
