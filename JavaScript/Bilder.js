const canvas = document.querySelector('canvas'); // definiert Variable mit konstantem Wert 

const ctx = canvas.getContext('2d'); // -"- , vorbestimmt 2d Zeichenelemente für das Canvas




ctx.canvas.width = 1024;

ctx.canvas.height= 576;

const offset = { // Variable für die vorgenommene Verschiebung des Hintergrundes
    x: -210,
    y: -300
}



const Raum1BackgroundImage = new Image(); // erstellt HTML Tag
Raum1BackgroundImage.src = './img/Räume/KlassenraumSpiel.png'; // Konstante wird mit Bild belegt

const playerDownImage = new Image();
playerDownImage.src = './img/SpielerNormal/playerDown.png'

const playerUpImage = new Image();
playerUpImage.src = './img/SpielerNormal/playerUp.png'

const playerLeftImage = new Image();
playerLeftImage.src = './img/SpielerNormal/playerLeft.png'

const playerRightImage = new Image();
playerRightImage.src = './img/SpielerNormal/playerRight.png'

const classroomBackgroundImage = new Image();
classroomBackgroundImage.src = './img/SpielerNormal/playerRight.png'

const SchulhofImage = new Image()
SchulhofImage.src = './img/Schulhof.png'

const FlurBackgroundImage = new Image();
FlurBackgroundImage.src = './img/Flur1.png'

const FlurVordergrundImage = new Image();
FlurVordergrundImage.src = './img/Flur1Vordergrund.png'



const player = new Sprite({
    position: {
        x: canvas.width / 2 - (192 / 4) / 2, // Koordinaten x-Achse Mitte Haus
        y: canvas.height /2 - 68  / 2 // Koordinaten y-Achse Mitte 
       
       
    },
    image: playerDownImage,
    frames: { // wird benötigt um das Zuschneiden zu ermögliche, max kommt aus dem Sprite
        max: 4
    },
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage,
    }
})


const Raum1Background = new Sprite({
    position: {
       
       x: offset.x - 800,
       y: offset.y - 1400,
      
    },
    image: Raum1BackgroundImage

})



const Schulhof = new Sprite ({
    position: {
    x: offset.x + 200,
    y: offset.y - 400,
    
    },
    image: SchulhofImage

})

const FlurBackground = new Sprite ({
    position: {
    x: -2800,
    y: -1520
    
    },
    image: FlurBackgroundImage

})

const FlurVordergrund = new Sprite ({
    position: {
    x: -2800,
    y: -1520
    
    },
    image: FlurVordergrundImage

})