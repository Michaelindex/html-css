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