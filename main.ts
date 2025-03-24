let audio_input = ""
let name = "Ameli"
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
basic.forever(function () {
    audio_input = serial.readString()
    if (audio_input == "Background Noise") {
        basic.showIcon(IconNames.No)
        basic.pause(5000)
    } else if (audio_input == "Microbit") {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(5000)
    } else if (audio_input == "Happy") {
        basic.showIcon(IconNames.Happy)
        basic.pause(5000)
    } else if (audio_input == "Sad") {
        basic.showIcon(IconNames.Sad)
        basic.pause(5000)
    } else if (audio_input == "Heart") {
        basic.showIcon(IconNames.Heart)
        basic.pause(5000)
    } else if (audio_input == "Umbrella") {
        basic.showIcon(IconNames.Umbrella)
        basic.pause(5000)
    } else if (audio_input == "Triangle") {
        basic.showIcon(IconNames.LeftTriangle)
        basic.pause(5000)
    } else if (audio_input == "Play music") {
        music.play(music.stringPlayable("- C5 C D B A - - ", 500), music.PlaybackMode.UntilDone)
    } else if (audio_input == "Love") {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
