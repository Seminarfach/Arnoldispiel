function animateAula(){

    document.querySelector('#IDtimer').style.display = 'none'

    document.querySelector('#AuswahlID').style.display = 'none'

    document.querySelector('#Interface').style.display = 'none'

    const animationAulaId = window.requestAnimationFrame(animateAula)

    if (Handy){
        document.querySelector('#movingInterface').style.display ='block'
    }
    else {
        document.querySelector('#movingInterface').style.display ='none'
    }

    AulaHintergrund.draw()

    
    AulaZonen.forEach((ZoneRaum) => {
        ZoneRaum.draw()
    })

    player.draw()

    AulaVordergrund.draw()

    moving = true

    
    player.moving = false



    
   

    if (keys.w.pressed || movingtouchUp) {
        player.moving = true
        player.image = player.sprites.up
        for (let i = 0; i < AulaZonen.length; i++) {
            const AulaZone = AulaZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...AulaZone, position: {
                        x: AulaZone.position.x,
                        y: AulaZone.position.y + 3
                    }}
                })
            ) {
                
                moving = false
                break
            }
        }

        

        if (moving)
            movables.forEach((movable) => {
                movable.position.y += 3
            })
    

    
    } else if (keys.a.pressed || movingtouchLeft) {
        player.moving = true
        player.image = player.sprites.left
        for (let i = 0; i < AulaZonen.length; i++) {
            const AulaZone = AulaZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...AulaZone, position: {
                        x: AulaZone.position.x + 3,
                        y: AulaZone.position.y
                    }}
                })
            ) {
                
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.x += 3
            })
       
        


    } else if (keys.s.pressed || movingtouchDown) {
        player.moving = true
        player.image = player.sprites.down
        for (let i = 0; i < AulaZonen.length; i++) {
            const AulaZone = AulaZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...AulaZone, position: {
                        x: AulaZone.position.x,
                        y: AulaZone.position.y - 3
                    }}
                })
            ) {
                
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.y -= 3
            })

       

    } else if (keys.d.pressed || movingtouchRight) {
        player.moving = true
        player.image = player.sprites.right
        for (let i = 0; i < AulaZonen.length; i++) {
            const AulaZone = AulaZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...AulaZone, position: {
                        x: AulaZone.position.x - 3,
                        y: AulaZone.position.y
                    }}
                })
            ) {
                
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.x -= 3
            })
    }
}

//animateAula()