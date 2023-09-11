let moist = 0
let ljus = 0
let temp = 0
radio.setGroup(137)
radio.setTransmitPower(7)
basic.forever(function () {
    temp = input.temperature() - 5
    ljus = input.lightLevel()
    moist = 0
    radio.sendString("" + String.fromCharCode(2 ** 16 - 1) + String.fromCharCode(2 ** 16 - 1) + String.fromCharCode(Math.floor(65)))
    basic.showNumber(temp)
    basic.showNumber(ljus)
    basic.showNumber(moist)
    basic.pause(5000)
    basic.pause(5000)
})
