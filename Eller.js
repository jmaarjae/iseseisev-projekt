
window.addEventListener("load", () => {
    const wsounds = document.querySelectorAll(".wsound");
    const bsounds = document.querySelectorAll(".bsound");
    const wpads = document.querySelectorAll(".wpads div");
    const bpads = document.querySelectorAll(".bpads div");

    console.log()

    wpads.forEach((wpad, index1) => {
        wpad.addEventListener('click', function() {
            wsounds[index1].currentTime = 0;
            wsounds[index1].play();
        });
    });

    bpads.forEach((bpad, index2) => {
        bpad.addEventListener('click', function() {
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

