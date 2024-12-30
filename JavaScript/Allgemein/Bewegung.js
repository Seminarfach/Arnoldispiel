let movingtouchUp = false 

let movingtouchRight = false 

let movingtouchLeft = false 

let movingtouchDown = false 

let moving = true

const movables = [Schulhof,...SchulhofZonen, ...EingangZonen,

    FlurBackground, FlurVordergrund, FlurBackgroundVerschiebung, FlurVordergrundVerschiebung,...Flur1Zonen, ...Flur1ZonenVerschiebung, ...EingangRaum1Zonen, ...Treppe1Zonen,

    Raum1Background,Raum1Vordergrund,...Raum1Zonen, ...Rätsel1Zonen, ...Tür1Zonen,

    AulaHintergrund, ...AulaZonen,

] // Array für alle beweglichen Objekte -> Vereinfachung

const keys = {
    w: {
        pressed: false 
    },

    a: {
        pressed: false 
    },

    s: {
        pressed: false 
    },

    d: {
        pressed: false 
    },

    z: {
        pressed: false
    }
}



window.addEventListener('keydown', (e) => { // legt Werte für die Varibalen fest 
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
        break 

        case 'a':
            keys.a.pressed = true
        break 

        case 's':
            keys.s.pressed = true
        break 

        case 'd':
            keys.d.pressed = true 
        break 

        case 'z':
            keys.z.pressed = true
        break 
      
       

    }
        
})

window.addEventListener('keyup', (e) => { // legt Werte für die Varibalen fest 
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
        break 

        case 'a':
            keys.a.pressed = false
        break 

        case 's':
            keys.s.pressed = false
        break 

        case 'd':
            keys.d.pressed = false
        break 
        
        case 'z':
            keys.z.pressed = false 
       

    }
})     


document.getElementById('Up').addEventListener('touchstart', e => {
    
    movingtouchUp = true 
})

document.getElementById('Up').addEventListener('touchend', e => {
   
   movingtouchUp = false
})

document.getElementById('Right').addEventListener('touchstart', e => {
    
    movingtouchRight = true
})

document.getElementById('Right').addEventListener('touchend', e => {
  
   movingtouchRight = false
})

document.getElementById('Left').addEventListener('touchstart', e => {
    
    movingtouchLeft = true
})

document.getElementById('Left').addEventListener('touchend', e => {
   
   movingtouchLeft = false
})

document.getElementById('Down').addEventListener('touchstart', e => {
   
    movingtouchDown = true
})

document.getElementById('Down').addEventListener('touchend', e => {
   
   movingtouchDown = false
})