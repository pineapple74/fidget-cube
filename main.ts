input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.LogoUp, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.move(1)
})
input.onButtonPressed(Button.AB, function () {
    sprite = game.createSprite(2, 2)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    let Roll_a_dice = 0
    Flip_a_coin = randint(1, 2)
    if (Roll_a_dice == 1) {
    	
    } else if (Roll_a_dice == 1) {
    	
    } else if (Roll_a_dice == 2) {
    	
    } else if (Roll_a_dice == 3) {
    	
    } else if (Roll_a_dice == 4) {
    	
    } else if (Roll_a_dice == 5) {
    	
    }
})
input.onGesture(Gesture.TiltRight, function () {
	
})
input.onGesture(Gesture.LogoDown, function () {
	
})
let Flip_a_coin = 0
let sprite: game.LedSprite = null
basic.showString("How are you?")
