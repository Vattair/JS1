document.querySelector('#start').addEventListener('click', onStart);
let startTime;
let hBall;

const ball = {
    x: 0,
    y: 0
};
const hole = {
    x: 0,
    y: 0
};
function  onDeviceOrientationChange(ev) {
    let new_x = 0;
    let new_y = 0;

    if(ev.alpha > 0){
        new_x = ball.x + 2;
    } else if(ev.alpha < 0){
        new_x = ball.x - 2;
    }

    if(ev.beta - 90 > 0){
        new_y = ball.y + 2;
    } else if(ev.beta - 90 < 0){
        new_y = ball.y - 2;
    }
    hBall.style.left = new_x + 'px';
    hBall.style.top = new_y + 'px';
    ball.x = new_x;
    ball.y = new_y;
    if((ball.x > hole.x - 10 && ball.x < hole.x + 10) && (ball.y > hole.y - 10 && ball.y < hole.y + 10)){
        let time = Date.now() - startTime;
        alert('Gra trwała ' + Math.floor(time / 360) + 's');
        document.querySelector('#main').innerHTML = '';
        ball.x = 10;
        ball.y = 10;
    }
}
function AppInit() {
    const ballStartXPos = Math.random() * window.innerWidth;
    const ballStartYPos = Math.random() * window.innerHeight;
    ball.x = ballStartXPos;
    ball.y = ballStartYPos;
    const holeStartXPos = Math.random() * window.innerWidth;
    const holeStartYPos = Math.random() * window.innerHeight;
    hole.x = holeStartXPos;
    hole.y = holeStartYPos;
    if(ball.x == hole.x && ball.y == hole.x){
        AppInit();
    }
    const htmlHole = document.createElement('div');
    htmlHole.classList.add('hole');
    htmlHole.style.position = 'absolute';
    htmlHole.style.left = hole.x + 'px';
    htmlHole.style.top = hole.y + 'px';
    htmlHole.style.userSelect = 'none';

    const htmlBall = document.createElement('div');
    htmlBall.classList.add('ball');
    htmlBall.style.position = 'absolute';
    htmlBall.style.left = ball.x + 'px';
    htmlBall.style.top = ball.y + 'px';
    htmlBall.style.userSelect = 'none';

    let main = document.querySelector('#main');
    main.appendChild(htmlHole);
    main.appendChild(htmlBall);
    hBall = document.querySelector('.ball');

    window.addEventListener('deviceorientation', onDeviceOrientationChange);
    startTime = Date.now();
}
function onStart(){
    document.querySelector('#main').innerHTML = '';
    AppInit();
}