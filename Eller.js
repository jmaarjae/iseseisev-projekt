/*jshint esversion:6*/

window.addEventListener("load", () => {
    const wsounds = document.querySelectorAll(".wsound");
    const bsounds = document.querySelectorAll(".bsound");
    const wpads = document.querySelectorAll(".wpads div");
    const bpads = document.querySelectorAll(".bpads div");

    wpads.forEach((wpad, index1) => {
        wpad.addEventListener('click', function wplay() {
            wsounds[index1].currentTime = 0;
            wsounds[index1].play();
        });
    });

    bpads.forEach((bpad, index2) => {
        bpad.addEventListener('click', function bplay() {
            bsounds[index2].currentTime = 0;
            bsounds[index2].play();
        });
    });
});

function changeBgColor1(color) {
    document.body.style.background = color;
}

function changeBgColor2(color) {
    document.body.style.background = color;
}

document.addEventListener("keydown", function (e) {
    play(e.keyCode);
});

function loadImage() {
    document.getElementById('image').style.maxHeight = "220px";
  }

function closeImage(){
    $("#image").css('display', 'none');
}

function play(letter) {
    let pad
    switch (letter) {
        // black keys
        case 81:
            pad = document.getElementById('baudio1');
            break;
        case 87:
            pad = document.getElementById('baudio2');
            break;
        case 69:
            pad = document.getElementById('baudio3');
            break;
        case 82:
            pad = document.getElementById('baudio4');
            break;
        case 84:
            pad = document.getElementById('baudio5');
            break;
        case 89:
            pad = document.getElementById('baudio6');
            break;
        case 85:
            pad = document.getElementById('baudio7');
            break;
        case 73:
            pad = document.getElementById('baudio8');
            break;
        case 79:
            pad = document.getElementById('baudio9');
            break;
        case 80:
            pad = document.getElementById('baudio10');
            break;
        // white keys
        case 65:
            pad = document.getElementById('audio1');
            break;
        case 83:
            pad = document.getElementById('audio2');
            break;
        case 68:
            pad = document.getElementById('audio3');
            break;
        case 70:
            pad = document.getElementById('audio4');
            break;
        case 71:
            pad = document.getElementById('audio5');
            break;
        case 72:
            pad = document.getElementById('audio6');
            break;
        case 74:
            pad = document.getElementById('audio7');
            break;
        case 90:
            pad = document.getElementById('audio8');
            break;
        case 88:
            pad = document.getElementById('audio9');
            break;
        case 67:
            pad = document.getElementById('audio10');
            break;
        case 86:
            pad = document.getElementById('audio11');
            break;
        case 66:
            pad = document.getElementById('audio12');
            break;
        case 78:
            pad = document.getElementById('audio13');
            break;
        case 77:
            pad = document.getElementById('audio14');
            break;
        default:
            //vaikus, pausiks
            pad = document.getElementById('baudio11');
            return
    }
    pad.parentElement.classList.add("active");
    pad.currentTime = 0;
    pad.play();
    setTimeout(function(b){
        pad.parentElement.classList.remove("active");
    }, 200)
}

function convertToKeyCode (letter) {
    return letter.charCodeAt(0);
}

function playTwinkle() {
    var notes = ['A','A','G','G','H','H','G',' ','F','F','D','D','S','S','A',' ','G','G'
    ,'F','F','D','D','S',' ','G','G','F','F','D','D','S',' ','A','A','G','G','H','H',
    'G',' ','F','F','D','D','S','S','A'];

    notes.forEach((item,i) => {
        setTimeout(function(){
            play(convertToKeyCode(item));
        },750*i)
    });

}

var loadButton = document.getElementById('load')
loadButton.addEventListener('click',hideshow,false);
        
    function hideshow() {
        document.getElementById('hidden-div').style.display = 'block'; 
        this.style.display = 'none'
        } 