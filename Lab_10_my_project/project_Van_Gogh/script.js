document.getElementById("show-more").addEventListener("click", function() {
    const fullBio = document.getElementById("full-bio");
    if (fullBio.style.display === "none") {
        fullBio.style.display = "block";
        this.innerText = "Згорнути";
    } else {
        fullBio.style.display = "none";
        this.innerText = "Читати більше";
    }
});
alert("Тут Цікаво)");
const facts = [
    "Ван Гог створив понад 2000 робіт, але продав лише одну за життя.",
    "Картина 'Зоряна ніч' була написана в період його перебування в психіатричній лікарні.",
    "Ван Гог відрізав частину свого вуха після сварки з Полем Гогеном."
];

function showFact() {
    const factText = document.getElementById("factText");
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factText.innerText = randomFact;
}
function enlargeImage(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

