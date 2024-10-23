let userScore=0;
let PCScore=0;
const UserScore_span= document.getElementById("user-score");
const PCScore_span= document.getElementById("PC-score");
const result= document.querySelector('.result>p')
const rock= document.getElementById('r')
const paper= document.getElementById('p')
const scissors= document.getElementById('s')
//console.log( UserScore_span.innerHTML);

function getComputerChoise(){
    const choise= [ 'r', 'p', 's']
  const random_num = (Math.floor(Math.random()*3)   );
    return choise[random_num]
}




function game(user_choise) {
    const computerChoise= getComputerChoise()
    switch (user_choise+computerChoise) {
        case 'pr':
        case 'rs':
        case 'sp':
            win(user_choise,computerChoise)
            break


            case 'rp':
                case 'ps':
                case 'sr':
                    lose(user_choise,computerChoise)
                    break

                    case 'rr':
                        case 'pp':
                        case 'ss':
                            equal(user_choise,computerChoise)
                            break        
    }
  }

  function win(user_choise,computerChoise){
    userScore++
    UserScore_span.innerHTML= userScore
    PCScore_span.innerHTML=PCScore
    result.innerHTML=  `${user_choise} "beats" ${computerChoise}  ". you win"`
  }

  
  function lose(user_choise,computerChoise){
    PCScore++
    UserScore_span.innerHTML= userScore
    PCScore_span.innerHTML=PCScore
    result.innerHTML=  `${user_choise} "loses to " ${computerChoise}  ". you lose"`
  }
  function equal(user_choise,computerChoise){
    // userScore--
    // UserScore_span.innerHTML= userScore
    // PCScore_span.innerHTML=PCScore
    result.innerHTML=  `${user_choise} "equal" ${computerChoise}  ". it is draw"`
  }

function  main( ) {
rock.addEventListener('click', ()=> {
    game('r')
})
paper.addEventListener('click', ()=> {
    game('p')
    
    
})
scissors.addEventListener('click', ()=> {
    game('s')
})

  }


main();


console.log('rock');