const words = [
    'Web-Design',
    'Desenvolvedor Front-End',
    'Um pequeno designer',
    'Analista de Infraestrutura',
    'Estagiário :(',
];

const wordElement = document.getElementById('word');
let currentIndex = 0;

function typeWord(word, index) {
if (index < word.length) {
    wordElement.textContent = word.substring(0, index + 1);
    setTimeout(() => typeWord(word, index + 1), 100);
} else {
    setTimeout(() => eraseWord(word, index), 1000);
}
}

function eraseWord(word, index) {
if (index >= 0) {
    wordElement.textContent = word.substring(0, index);
    setTimeout(() => eraseWord(word, index - 1), 100);
} else {
    currentIndex = (currentIndex + 1) % words.length;
    setTimeout(() => typeWord(words[currentIndex], 0), 500);
}
}

typeWord(words[currentIndex], 0);

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            document.getElementById("contact-panel").style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const emailButton = document.getElementById("emailButton");
    const originalText = emailButton.textContent;
    const email = "mcialbr123@gmail.com";

    emailButton.addEventListener("click", function() {
        // Copiar para a área de transferência
        const dummyTextarea = document.createElement("textarea");
        dummyTextarea.value = email;
        document.body.appendChild(dummyTextarea);
        dummyTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(dummyTextarea);

        // Alterar o texto para 'Copiado' temporariamente
        emailButton.textContent = "Copiado...";
        setTimeout(function() {
            emailButton.textContent = originalText;
        }, 5000); // 5 segundos (5000 ms)
    });
});

// Mostrar a mensagem por 3 segundos e depois esconder
const mensagemDiv = document.getElementById('mensagem');
const fundoDiv = document.getElementById('fundo');

setTimeout(() => {
    mensagemDiv.style.display = 'none';
    fundoDiv.style.display = 'none';
}, 3000); // 3000 milissegundos = 3 segundos