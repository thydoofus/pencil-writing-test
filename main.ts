input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    control.waitMicros(200)
    basic.showIcon(IconNames.Heart)
    keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.alt) + "v", false)
})
input.onGesture(Gesture.Shake, function () {
    keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.alt) + "v", false)
    basic.showIcon(IconNames.Happy)
    control.waitMicros(200)
    basic.showIcon(IconNames.Heart)
})
keyboard.startKeyboardService()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (true) {
    	
    }
})
