var boxes = document.querySelectorAll(".box");
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var aviccisong = document.querySelector("#avicci");
var damiansong = document.querySelector("#damian");
var goldensong = document.querySelector("#golden");
var aviccititle = document.querySelector("#aviccititle");
var timeline = document.querySelector("#time");
if (timeline) {
    timeline.style.display = "none";
}
if (aviccititle) {
    aviccititle.style.display = "none";
}
var i = 0;
var playicon = document.querySelector("#playicon");
var pauseicon = document.querySelector("#pauseicon");
var playicon2 = document.querySelector("#playicon2");
var pauseicon2 = document.querySelector("#pauseicon2");
var playicon3 = document.querySelector("#playicon3");
var pauseicon3 = document.querySelector("#pauseicon3");
if (playicon) {
    playicon.style.display = "block";
}
if (pauseicon) {
    pauseicon.style.display = "none";
}
if (playicon2) {
    playicon2.style.display = "block";
}
if (pauseicon2) {
    pauseicon2.style.display = "none";
}
if (playicon) {
    playicon.style.display = "block";
}
if (pauseicon3) {
    pauseicon3.style.display = "none";
}
box1 === null || box1 === void 0 ? void 0 : box1.addEventListener("click", function (ev) {
    box1.style.width = "20vw";
    box1.style.backgroundRepeat = "no-repeat";
    i++;
    aviccisong === null || aviccisong === void 0 ? void 0 : aviccisong.play();
    if (aviccititle) {
        aviccititle.style.display = "block";
    }
    if (timeline) {
        timeline.style.display = "block";
    }
    if (playicon) {
        playicon.style.display = "none";
    }
    if (pauseicon) {
        pauseicon.style.display = "block";
    }
    if (i % 2 !== 0) {
        aviccisong === null || aviccisong === void 0 ? void 0 : aviccisong.pause();
        if (timeline) {
            timeline.style.display = "none";
        }
        if (aviccititle) {
            aviccititle.style.display = "none";
        }
        box1.style.width = "10vw";
        if (playicon) {
            playicon.style.display = "block";
        }
        if (pauseicon) {
            pauseicon.style.display = "none";
        }
    }
});
box2 === null || box2 === void 0 ? void 0 : box2.addEventListener("click", function (ev) {
    i++;
    damiansong === null || damiansong === void 0 ? void 0 : damiansong.play();
    if (playicon2) {
        playicon2.style.display = "none";
    }
    if (pauseicon2) {
        pauseicon2.style.display = "block";
    }
    if (i % 2 !== 0) {
        damiansong === null || damiansong === void 0 ? void 0 : damiansong.pause();
        if (playicon2) {
            playicon2.style.display = "block";
        }
        if (pauseicon2) {
            pauseicon2.style.display = "none";
        }
    }
});
box3 === null || box3 === void 0 ? void 0 : box3.addEventListener("click", function (ev) {
    i++;
    goldensong === null || goldensong === void 0 ? void 0 : goldensong.play();
    if (playicon3) {
        playicon3.style.display = "none";
    }
    if (pauseicon3) {
        pauseicon3.style.display = "block";
    }
    if (i % 2 !== 0) {
        goldensong === null || goldensong === void 0 ? void 0 : goldensong.pause();
        if (playicon3) {
            playicon3.style.display = "block";
        }
        if (pauseicon3) {
            pauseicon3.style.display = "none";
        }
    }
});
function updateTimeline() {
    if (aviccisong) {
        var currentTime = aviccisong.currentTime;
        var duration = aviccisong.duration;
        if (timeline) {
            var timelineWidth = timeline.offsetWidth;
        }
        var progress = (currentTime / duration) * 100;
        if (timeline) {
            timeline.style.background = "linear-gradient(to right, #0f0 " + progress + "%, #ccc " + progress + "%)";
        }
    }
}
if (aviccisong) {
    aviccisong.addEventListener('timeupdate', updateTimeline);
}
