input.onButtonPressed(Button.A, function () {
    led.plotBrightness(x, y, 0)
    if (x <= 5) {
        x += 2
    } else {
        x = 0
        if (y <= 5) {
            x = 0
            y = 0
        }
        y += 2
    }
    led.plotBrightness(x, y, 100)
})
let y = 0
let x = 0
images.createImage(`
    . # . # .
    # # # # #
    . # . # .
    # # # # #
    . # . # .
    `).showImage(0)
basic.forever(function () {
	
})
