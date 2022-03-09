score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(()=>{
    audio.play();
    console.log(hi);
}, 100);

window.addEventListener("keydown", (Event) => {
    console.log(Event.keyCode);
    if(Event.keyCode == 38){
        man = document.querySelector('.man');
        man.classList.add('animateMan');
        setTimeout(() => {
            man.classList.remove('animateMan');
        }, 700);
    }
    else if(Event.keyCode == 39){
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = manX + 112 + "px";
    }
    else if(Event.keyCode == 37){
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = (manX - 112) + "px";
    }
})

setInterval(() => {
    man = document.querySelector('.man');
    gameOver = document.querySelector('.gameOver');
    dino = document.querySelector('.dino');

    mx = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(man, null).getPropertyValue('top'));

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    offsetX = Math.abs(mx - dx);
    offsetY = Math.abs(my - dy);
    console.log(offsetX, offsetY);
    if(offsetX < 100 && offsetY < 50){
        gameOver.style.visibility = 'visible';
        dino.classList.remove('obstacleAni')
        gameO = document.querySelector('.gameOver');
        gameO.classList.add('over');
        audiogo.play();
        audio.pause();
        setTimeout(() => {
            audiogo.pause();
        }, 1000);
        
    }
    else if(offsetX<100 && cross){
        score +=1;
        updateScore(score);
        cross = false;
        setTimeout(() =>{
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(dino, null).getPropertyValue('animation-duration'));
            if(aniDur > 1.5){                
                newDur = aniDur - 0.1;
                dino.style.animationDuration = newDur + 's';
            }
        }, 500);
    }


}, 10);

function updateScore(score){
    scoreCount.innerHTML = `Your score : ${score}`;
}