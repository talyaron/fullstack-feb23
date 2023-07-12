const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll(".box");
const box1: HTMLDivElement | null = document.querySelector("#box1")
const box2: HTMLDivElement | null = document.querySelector("#box2")
const box3: HTMLDivElement | null = document.querySelector("#box3")
const box4: HTMLDivElement | null = document.querySelector("#box4")
const aviccisong: HTMLAudioElement | null = document.querySelector("#avicci")
const damiansong: HTMLAudioElement | null = document.querySelector("#damian")
const goldensong: HTMLAudioElement | null = document.querySelector("#golden")
const aviccititle: HTMLDivElement | null = document.querySelector("#aviccititle")
const timeline: HTMLDivElement | null = document.querySelector("#time")
if (timeline) {
    timeline.style.display = "none"
}
if (aviccititle) {
    aviccititle.style.display = "none"
}
let i = 0
const playicon: HTMLDivElement | null = document.querySelector("#playicon")
const pauseicon: HTMLDivElement | null = document.querySelector("#pauseicon")
const playicon2: HTMLDivElement | null = document.querySelector("#playicon2")
const pauseicon2: HTMLDivElement | null = document.querySelector("#pauseicon2")
const playicon3: HTMLDivElement | null = document.querySelector("#playicon3")
const pauseicon3: HTMLDivElement | null = document.querySelector("#pauseicon3")
if (playicon) {
    playicon.style.display = "block"
}
if (pauseicon) {
    pauseicon.style.display = "none"
}
if (playicon2) {
    playicon2.style.display = "block"
}
if (pauseicon2) {
    pauseicon2.style.display = "none"
} if (playicon) {
    playicon.style.display = "block"
}
if (pauseicon3) {
    pauseicon3.style.display = "none"
}
box1?.addEventListener("click", (ev: any) => {
    box1.style.width = "20vw";
    box1.style.backgroundRepeat = "no-repeat"
    i++
    aviccisong?.play()
    if (aviccititle) {
        aviccititle.style.display = "block"
    }
    if (timeline) {
        timeline.style.display = "block"

    }
    if (playicon) {
        playicon.style.display = "none"

    }
    if (pauseicon) {
        pauseicon.style.display = "block"
    }
    if (i % 2 !== 0) {
        aviccisong?.pause()
        if (timeline) {
            timeline.style.display = "none"
        }
        if (aviccititle) {
            aviccititle.style.display = "none"
        }
        box1.style.width = "10vw";

        if (playicon) {
            playicon.style.display = "block"
        }
        if (pauseicon) {
            pauseicon.style.display = "none"
        }

    }
})
box2?.addEventListener("click", (ev: any) => {
    i++
    damiansong?.play()
    if (playicon2) {
        playicon2.style.display = "none"
    }
    if (pauseicon2) {
        pauseicon2.style.display = "block"
    }
    if (i % 2 !== 0) {
        damiansong?.pause()
        if (playicon2) {
            playicon2.style.display = "block"
        }
        if (pauseicon2) {
            pauseicon2.style.display = "none"
        }

    }
})
box3?.addEventListener("click", (ev: any) => {
    i++
    goldensong?.play()
    if (playicon3) {
        playicon3.style.display = "none"
    }
    if (pauseicon3) {
        pauseicon3.style.display = "block"
    }
    if (i % 2 !== 0) {
        goldensong?.pause()
        if (playicon3) {
            playicon3.style.display = "block"
        }
        if (pauseicon3) {
            pauseicon3.style.display = "none"
        }

    }
})

function updateTimeline() {
    if (aviccisong) {
        const currentTime = aviccisong.currentTime;
        const duration = aviccisong.duration;
        if (timeline) {
            const timelineWidth = timeline.offsetWidth;
        }
        const progress = (currentTime / duration) * 100;
        if (timeline) {
        timeline.style.background = `linear-gradient(to right, #0f0 ${progress}%, #ccc ${progress}%)`;
    }
    }
}
if (aviccisong) {
aviccisong.addEventListener('timeupdate', updateTimeline);
}