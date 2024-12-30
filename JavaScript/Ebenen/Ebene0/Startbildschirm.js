const startImage = new Image()
startImage.src = './img/Startbildschirm/Startbildschirm.png'

const start = new Sprite ({
    position: {
    x: 0,
    y: 0,
    
    },
    image: startImage

})

let Handy = false

function animateStartbildschirm(){
    
    document.querySelector('#IDtimer').style.display = 'none'

    document.querySelector('#movingInterface').style.display ='none'

    document.querySelector('#Interface').style.display ='none'

    StartbildschirmAnimationId = window.requestAnimationFrame(animateStartbildschirm)
    
    start.draw()

    

    
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {


        if(e.currentTarget.innerHTML === "Handy") {

            Handy = true 
            
            cancelAnimationFrame(StartbildschirmAnimationId)

            gsap.to('#overlappingDiv',{
                opacity: 1,
                onComplete: () => {
                    cancelAnimationFrame(riddleAnimationId)
                    animateSchulhof()
                    document.querySelector('#Interface').style.display = 'none'
                    gsap.to ('#overlappingDiv', {
                        opacity: 0                
                    })
                    riddle.initiated = false
                }
            })


        }

        else if(e.currentTarget.innerHTML === 'PC') {

            cancelAnimationFrame(StartbildschirmAnimationId)

            gsap.to('#overlappingDiv',{
                opacity: 1,
                onComplete: () => {
                    cancelAnimationFrame(riddleAnimationId)
                    animateSchulhof()
                    document.querySelector('#Interface').style.display = 'none'
                    gsap.to ('#overlappingDiv', {
                        opacity: 0                
                    })
                    riddle.initiated = false
                }
            })
        }
    })
})


animateStartbildschirm()