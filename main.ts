let moist = 0
let ljus = 0
let temp = 0
radio.setGroup(137)
radio.setTransmitPower(7)
basic.forever(function () {
    temp = input.temperature() - 5
    ljus = input.lightLevel()
    moist = 0
    basic.showNumber(temp)
    basic.showNumber(ljus)
    basic.showNumber(moist)
    radio.sendValue("" + String.fromCharCode(2 ** 16 - 1) + "T", temp)
    radio.sendValue("" + String.fromCharCode(2 ** 16 - 1) + "L", ljus)
    radio.sendValue("" + String.fromCharCode(2 ** 16 - 1) + "F", moist)
    basic.pause(5000)
    basic.pause(5000)
})
