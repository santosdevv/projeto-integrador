const usuario = document.querySelector(".retangulo-usuario");
const senha = document.querySelector(".retangulo-senha");
const mensagemUsuario = document.querySelector(".mensagem-1");
const mensagemSenha = document.querySelector(".mensagem-2");
const loadingScreen = document.getElementById("loading-screen");

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    if (usuario.value === "") {
        mensagemUsuario.textContent = "Campo obrigatório!";
    } else {
        mensagemUsuario.textContent = ""; 
    }

    if (senha.value === "") {
        mensagemSenha.textContent = "Campo obrigatório!";
        return;
    } else {
        mensagemSenha.textContent = ""; 
    }

    loadingScreen.style.display = 'flex';

    setTimeout(() => {
        window.location.href = "../informacoes/index.html";
    }, 3000); 
});

const esqueceuSenha = document.querySelector(".esq-senha");
esqueceuSenha.addEventListener("click", (event) => {
    event.preventDefault();
    loadingScreen.style.display = 'flex';

    setTimeout(() => {
        window.location.href = "../esqueceu-senha/index.html";
    }, 1000);
});
