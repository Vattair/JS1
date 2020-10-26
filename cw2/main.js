
//#region Button
document.querySelector('#recordBtn1').classList.add('visible');
document.querySelector('#recordBtn2').classList.add('visible');
document.querySelector('#recordBtn3').classList.add('visible');
document.querySelector('#recordBtn4').classList.add('visible');

document.querySelector('#recordBtn1').addEventListener('click',function(){ onRecordBtn(1);});
document.querySelector('#playBtn1').addEventListener('click',function(){ onPlayBtn(1);});
document.querySelector('#clearBtn1').addEventListener('click',function(){ onClearBtn(1);});
document.querySelector('#stopRecordBtn1').addEventListener('click',function(){ onStopRecordBtn(1);});

document.querySelector('#recordBtn2').addEventListener('click',function(){ onRecordBtn(2);});
document.querySelector('#playBtn2').addEventListener('click',function(){ onPlayBtn(2);});
document.querySelector('#clearBtn2').addEventListener('click',function(){ onClearBtn(2);});
document.querySelector('#stopRecordBtn2').addEventListener('click',function(){ onStopRecordBtn(2);});

document.querySelector('#recordBtn3').addEventListener('click',function(){ onRecordBtn(3);});
document.querySelector('#playBtn3').addEventListener('click',function(){ onPlayBtn(3);});
document.querySelector('#clearBtn3').addEventListener('click',function(){ onClearBtn(3);});
document.querySelector('#stopRecordBtn3').addEventListener('click',function(){ onStopRecordBtn(3);});

document.querySelector('#recordBtn4').addEventListener('click',function(){ onRecordBtn(4);});
document.querySelector('#playBtn4').addEventListener('click',function(){ onPlayBtn(4);});
document.querySelector('#clearBtn4').addEventListener('click',function(){ onClearBtn(4);});
document.querySelector('#stopRecordBtn4').addEventListener('click',function(){ onStopRecordBtn(4);});


document.querySelector('#playBtn').addEventListener('click',onPlayAllBtn);
document.querySelector('#clearBtn').addEventListener('click',onClearAllBtn);
//#endregion

//#region Recorded Track
let recordedSound1 = [];
let recordedSound2 = [];
let recordedSound3 = [];
let recordedSound4 = [];
//#endregion

let actualRecording = 0;
let recordStartTime;
document.body.addEventListener('keypress', onKeyPress);

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
    case 'KeyK':
        sound = 'tink';
        break;
    case 'KeyL':
        sound = 'tom';
        break;
    }
    if(sound && actualRecording != 0){
        console.log(sound + ' added to track ' + actualRecording);
        const soundTime = Date.now() - recordStartTime;
        const soundObj = {soundId: sound,soundTime:soundTime};
        playSound(sound);
        switch(actualRecording){
        case 1:
            recordedSound1.push(soundObj);
            break;
        case 2:
            recordedSound2.push(soundObj);
            break;
        case 3:
            recordedSound3.push(soundObj);
            break;
        case 4:
            recordedSound4.push(soundObj);
            break;
        }
    }
}

function playSound(soundId){
    const sound = document.querySelector('#' + soundId);
    sound.play();
}

function onRecordBtn(id){
    console.log('Record track ' + id);
    switch(id){
    case 1:
        actualRecording = 1;
        recordStartTime = Date.now();
        document.querySelector('#recordBtn1').classList.remove('visible');
        document.querySelector('#stopRecordBtn1').classList.add('visible');
        break;
    case 2:
        actualRecording = 2;
        recordStartTime = Date.now();
        document.querySelector('#recordBtn2').classList.remove('visible');
        document.querySelector('#stopRecordBtn2').classList.add('visible');
        break;
    case 3:
        actualRecording = 3;
        recordStartTime = Date.now();
        document.querySelector('#recordBtn3').classList.remove('visible');
        document.querySelector('#stopRecordBtn3').classList.add('visible');
        break;
    case 4:
        actualRecording = 4;
        recordStartTime = Date.now();
        document.querySelector('#recordBtn4').classList.remove('visible');
        document.querySelector('#stopRecordBtn4').classList.add('visible');
        break;
    }
}

function onPlayBtn(id){
    console.log('Play track ' + id);
    switch(id){
    case 1:
        playSounds(recordedSound1);
        break;
    case 2:
        playSounds(recordedSound2);
        break;
    case 3:
        playSounds(recordedSound3);
        break;
    case 4:
        playSounds(recordedSound4);
        break;
    }
}

function onClearBtn(id){
    console.log('Clear track ' + id);
    switch(id){
    case 1:
        recordedSound1.length = 0;
        break;
    case 2:
        recordedSound2.length = 0;
        break;
    case 3:
        recordedSound3.length = 0;
        break;
    case 4:
        recordedSound4.length = 0;
        break;
    }
}

function onPlayAllBtn(){
    console.log('Play all');
    playSounds(recordedSound1);
    playSounds(recordedSound2);
    playSounds(recordedSound3);
    playSounds(recordedSound4);
}

function onClearAllBtn(){
    console.log('Clear all');
    recordedSound1.length = 0;
    recordedSound2.length = 0;
    recordedSound3.length = 0;
    recordedSound4.length = 0;
}

function playSounds(rS){
    console.dir(rS);
    for(let i = 0; i < rS.length; i++){
        const soundObj = rS[i];
        setTimeout(()=>
        {
            playSound(soundObj.soundId);
        }, soundObj.soundTime);
        
    }
}

function onStopRecordBtn(id){
    switch(id){
    case 1:
        actualRecording = 0;
        document.querySelector('#recordBtn1').classList.add('visible');
        document.querySelector('#stopRecordBtn1').classList.remove('visible');
        break;
    case 2:
        actualRecording = 0;
        document.querySelector('#recordBtn2').classList.add('visible');
        document.querySelector('#stopRecordBtn2').classList.remove('visible');
        break;
    case 3:
        actualRecording = 0;
        document.querySelector('#recordBtn3').classList.add('visible');
        document.querySelector('#stopRecordBtn3').classList.remove('visible');
        break;
    case 4:
        actualRecording = 0;
        document.querySelector('#recordBtn4').classList.add('visible');
        document.querySelector('#stopRecordBtn4').classList.remove('visible');
        break;
    }
}