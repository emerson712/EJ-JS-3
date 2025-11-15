document.addEventListener('DOMContentLoaded', ()=>{
    const pixelBot = document.getElementById("pixel-bot");
    const juegoContenedor = document.getElementById("juego-contenedor");
    const mensajeJuego = document.getElementById("mensaje-juego");
    const puntuacionDysplay = document.getElementById("puntuacion-display");
    const suelo = document.getElementById("suelo");


    let isJumping = false;
    let gravity = 0.9;
    let botBottom = 30;
    let score = 0;
    let gameOver = true;
    let obstacleInterval;
    let gameLoopInterval;

    const gameWith = 900;

    function jum(params) {
        if(isJumping) return;
        isJumping = true;
        let jumpHeight = 150;
        let jumpSpeed = 10;
        let currentJumpHeight = 0;

        const upTimerId = setInterval(() => {
            if(currentJumpHeight >= jumpHeight){
                clearInterval(upTimerId);
                const dowTimerId = setInterval(() => {
                    if (botBottom <= 30) {
                        clearInterval(dowTimerId);
                        pixelBot.style.bottom = botBottom + 'px';
                        isJumping = false;
                    }
                    botBottom -= jumpSpeed;
                    pixelBot.style.bottom =botBottom + 'px';
                }, 20);
            }
            botBottom += jumpSpeed;
            currentJumpHeight += jumpSpeed;
            pixelBot.style.bottom = botBottom + PX;
        }, 20);

    }
});
