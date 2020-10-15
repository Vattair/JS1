document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#recordBtn').addEventListener('click',onRecordBtn);
document.querySelector('#playBtn').addEventListener('click',onPlayBtn);

let recordedSound = [];
let recordStartTime;
function onKeyPress (ev){
    let sound;

    switch(ev.code){
    case 'KeyA':
        sound = 'boom';
        break;
    case 'KeyS':
        sound  = 'clap';
        break;
    case 'KeyD':
        sound = 'hihat';
        break;
    case 'KeyF':
        sound = 'kick';
        break;
    case 'KeyG':
        sound = 'openhat';
        break;
    case 'KeyH':
        sound = 'ride';
        break;
    case 'KeyJ':
        sound = 'snare';
        break;
    case 'KeyZ':
        sound = 'tink';
        break;
    case 'KeyX':
        sound = 'tom';
        break;
    }
    if(sound){
        const soundTime = Date.now() - recordStartTime;
        const soundObj = {soundId: sound,soundTime:soundTime};
        playSound(sound);
        recordedSound.push(soundObj);
    }
}
function onRecordBtn(){
    recordStartTime = Date.now();
}
function onPlayBtn(){
    for(let i = 0; i < recordedSound.length; i++){
        const soundObj = recordedSound[i];
        setTimeout(()=>
        {
            playSound(soundObj.soundId);
        }, soundObj.soundTime);
        
    }
}

function playSound(soundId){
    const sound = document.querySelector('#' + soundId);
    sound.play();
}