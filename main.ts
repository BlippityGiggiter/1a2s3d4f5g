let tool = 0
let AABLEEEBLU = 0
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        AABLEEEBLU = 10
    } else if (tool == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        AABLEEEBLU = 29
    } else if (tool == 2) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . # . .
            . # . # .
            # . . . #
            `)
        AABLEEEBLU = 47
    }
})
basic.forever(function () {
    music.play(music.stringPlayable("E D G D F D E C ", 180), music.PlaybackMode.UntilDone)
})
