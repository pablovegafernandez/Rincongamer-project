function randomText() {
    const texts = [
        'Practice and play with friends to become better.',
        'Do not install games you know your PC will not handle',
        'Check your balance, gamer!',
        'Paying to get better things in a game is usually a way to make others hate you.',
        'Remember, gaming is sometimes unfair.',
    ];

    const index = Math.round(Math.random() * (texts.length - 1));
    return texts[index];
}

function yourFunction() {
    const p = document.getElementById('ChangeText');
    p.textContent = randomText();
    setTimeout(yourFunction, 20000);
}

yourFunction();

$(document).ready(() => {
    $('[data-toggle="offcanvas"], #navToggle').on('click', () => {
        $('.offcanvas-collapse').toggleClass('open');
    });
});

if (document.querySelector('#index')) {
    // varying images
    const imgC = document.querySelectorAll('.carousel-inner .carousel-item');
    imgC.forEach((img) => {
        const imgToAdd = img.querySelector('img');
        const imgPath = img.querySelector('h3').textContent.replace(/\s/g, '');
        imgToAdd.src = `assets/images/${imgPath}.jpg`;
    });

    const imgCard = document.querySelectorAll('.cards .link-card');
    imgCard.forEach((card) => {
        const imgChange = card.querySelector('.card');
        const imgPath = card.querySelector('.card-title').textContent.replace(/\s/g, '');
        imgChange.style.backgroundImage = `url(../assets/images/${imgPath}.jpg)`;
        console.log(`url(../assets/images/${imgPath}.jpg)`);
    });
}
