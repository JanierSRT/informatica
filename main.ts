input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 175) {
        basic.showIcon(IconNames.Happy)
        basic.pause(4000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(4000)
        basic.clearScreen()
    }
    if (175 > 0) {
        music.playMelody("- - - F A - D - ", 4000)
    }
})
