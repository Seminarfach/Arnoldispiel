

const AulaBackgroundImage = new Image(); // erstellt HTML Tag
AulaBackgroundImage.src = './img/Räume/Aula/Aula.png'; // Konstante wird mit Bild belegt



const AulaHintergrund = new Sprite ({
    position: {
    //x: -750,
    //y: -800
    x: -50,
    y: -1600
    
    },
    image: AulaBackgroundImage

})

const AulaVordergrundImage = new Image(); // erstellt HTML Tag
AulaVordergrundImage.src = './img/Räume/Aula/AulaVordergrund.png'; // Konstante wird mit Bild belegt



const AulaVordergrund = new Sprite ({
    position: {
    //x: -750,
    //y: -800
    x: -50,
    y: -1600
    
    },
    image: AulaVordergrundImage

})