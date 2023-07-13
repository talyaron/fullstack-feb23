

//draw the red ball
export function redBall(xPosition:number, yPositin: number) {
    const canvas = document.querySelector('#canvas')
    if (canvas.getContext !== null) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath()
        ctx.arc(xPosition, yPositin, 50, 0, Math.PI * 2, true) //outer citcle
        ctx.stroke()
    }
}
