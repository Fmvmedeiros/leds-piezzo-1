let valor = 0
let Treshold = 710
let strip = neopixel.create(DigitalPin.P0, 300, NeoPixelMode.RGB_RGB)
let Som = 0
basic.forever(function () {
    while (true) {
        for (let index = 0; index < 15; index++) {
            Som = Som + pins.analogReadPin(AnalogPin.P1)
        }
        Som = Som / 15
        valor = Math.constrain(Math.map(Som - Treshold, 0, 1023 - Treshold, 0, 50), 0, 50)
        strip.showColor(neopixel.hsl(200, 255, valor))
        led.plotBarGraph(
        Som,
        1023
        )
        basic.pause(2)
    }
})
