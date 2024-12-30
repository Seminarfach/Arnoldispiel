




let riddleAnimationId

const Answers = {
    initiated: false
}


function Transition () {
    gsap.to('#overlappingDiv',{
        opacity: 1,
        onComplete: () => {
            cancelAnimationFrame(riddleAnimationId)
            animateRaum1()
            document.querySelector('#Interface').style.display = 'none'
            gsap.to ('#overlappingDiv', {
                opacity: 0                
            })
            riddle.initiated = false
        }
    })
}




function animateRiddle(){

    document.querySelector('#IDtimer').style.display = 'flex'

    document.querySelector('#AuswahlID').style.display = 'none'

    document.querySelector('#movingInterface').style.display ='none'

    document.querySelector('#Interface').style.display ='block'

    

    
    riddleAnimationId = window.requestAnimationFrame(animateRiddle)
    
    riddleBackground.draw()

    Sudoku.draw()
    
    if(Hinweis1){
        SudokuHinweis1.draw()
    }

    else if(Hinweis2){
        SudokuHinweis2.draw()
    }

    else if(Hinweis3){
        SudokuHinweis3.draw()
    }
    


    if(insgesamteZeit === 20){

        document.querySelector('#Hinweis1').disabled = false

        document.querySelector('#Hinweis1').style.cursor ='pointer'
        
    }    

    else if(insgesamteZeit === 30){

        document.querySelector('#Hinweis2').disabled = false

        document.querySelector('#Hinweis2').style.cursor ='pointer'
        
    }    

    else if(insgesamteZeit === 40){
         
        document.querySelector('#Hinweis3').disabled = false

        document.querySelector('#Hinweis3').style.cursor ='pointer'
        

    }    

    
    

}




