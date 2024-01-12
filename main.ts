input.onGesture(Gesture.Shake, function () {
    if (count > 99) {
        count += -100
        thingi += 2
        dims += 0.2
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (count > 999) {
        count += -1000
        thingi += 10
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    if (count > 499) {
        count += -500
        thingi += 4
    }
})
input.onButtonPressed(Button.A, function () {
    count += thingi
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(thingi)
    basic.showNumber(dims)
})
input.onButtonPressed(Button.B, function () {
    if (count > 24) {
        count += -25
        dims += 0.1
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (count > 4999) {
        count += -5000
        thingi += 100
        dims += 10
    }
})
let dims = 0
let count = 0
let thingi = 0
thingi = 1
basic.forever(function () {
    count += dims
    basic.pause(1000)
})
basic.forever(function () {
    basic.showNumber(count)
})
basic.forever(function () {
    if (count > 999999) {
        basic.showString("your lunatic")
        basic.showNumber(thingi)
    }
})
