let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    loses:0,
    ties:0
};

updateScore();

let isautoplaying=false;
let interval_id;

function autoplay(){
    if(!isautoplaying){
        interval_id=setInterval(()=>{
            const cmpmov = pickComputerMOve();
            playGame(cmpmov);
        },1000);
        isautoplaying=true;
        const stop=document.querySelector('.js-stop-play')
        stop.innerHTML='Stop Play';
    }else{
        clearInterval(interval_id);
        isautoplaying=false;
    }
};

document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('Rock')
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('Paper')
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('Scissors')
});

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
        playGame('Rock')
    }else if(event.key==='p'){
        playGame('Paper')
    }else if(event.key==='s'){
        playGame('Scissors')
    }
});

function playGame(playerMove){
    const cmpmov=pickComputerMOve();
    let res='';

    if (playerMove==='Scissors'){
        if(cmpmov==='Scissors'){
            res='Tie';
        }else if(cmpmov==='Rock'){
            res='You lose';
        }else if(cmpmov==='Paper'){
            res='You win';
        }
    }else if(playerMove==='Paper'){
        if(cmpmov==='Paper'){
            res='Tie';
        }else if(cmpmov==='Scissors'){
            res='You lose';
        }else if(cmpmov==='Rock'){
            res='You win';
        }
    }else if(playerMove==='Rock'){
        if(cmpmov==='Rock'){
            res='Tie';
        }
        else if(cmpmov==='Paper'){
            res='You lose';
        }else if(cmpmov==='Scissors'){
            res='You win';
        }
    }

    if(res==='You win'){
        score.wins+=1;
    }else if(res==='You lose'){
        score.loses+=1;
    }else if(res==='Tie'){
        score.ties+=1;
    };

    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-result').innerHTML=res;

    // document.querySelector('.js-moves').innerHTML=`Your move:${playerMove}<br>Computer move:${cmpmov}`;

    updateScore();

    document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="move-icon" alt="">
    <img src="images/${cmpmov}-emoji.png" alt="" class="move-icon">Computer`
    };

    function updateScore(){
    document.querySelector('.js-score').innerHTML=`Wins:${score.wins} Loses:${score.loses} Ties:${score.ties}`;
};

function pickComputerMOve(){
    const b=Math.random();

    let cmpmov='';

    if(b>=0 && b<1/3){
        cmpmov='Rock';
    }else if(b>=1/3 && b<2/3){
        cmpmov='Paper';
    }else{
        cmpmov='Scissors';
    }

    return cmpmov;
}