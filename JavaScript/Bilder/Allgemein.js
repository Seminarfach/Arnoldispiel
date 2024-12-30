const canvas = document.querySelector('canvas'); // definiert Variable mit konstantem Wert 

const ctx = canvas.getContext('2d'); // -"- , vorbestimmt 2d Zeichenelemente für das Canvas




ctx.canvas.width = 1024;

ctx.canvas.height= 576;

const offset = { // Variable für die vorgenommene Verschiebung des Hintergrundes
    x: -210,
    y: -300
}

let Verschiebung = false 

// --------------------------------------------------------------------------------------------------



const playerDownImage = new Image();
playerDownImage.src = './img/Spieler/Eule/player2down.png'

const playerUpImage = new Image();
playerUpImage.src = './img/Spieler/Eule/player2up.png'

const playerLeftImage = new Image();
playerLeftImage.src = './img/Spieler/Eule/player2left.png'

const playerRightImage = new Image();
playerRightImage.src = './img/Spieler/Eule/player2right.png'


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

// -----------------------------------------------------------------------------------------------------------------

const SchulhofImage = new Image()
SchulhofImage.src = './img/Schulhof/Schulhof.png'


const Schulhof = new Sprite ({
    position: {
    x: offset.x + 200,
    y: offset.y - 400,
    
    },
    image: SchulhofImage

})