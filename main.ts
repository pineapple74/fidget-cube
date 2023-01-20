input.onButtonPressed(Button.A, function () {
    sprite.delete()
    isSprite = 0
    for (let index = 0; index < 20; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `,10)
basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `,10)
basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `,10)
basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `,10)
basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `,10)
basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `,10)
    }
    Roll_a_dice = randint(1, 6)
    if (Roll_a_dice == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (Roll_a_dice == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    } else if (Roll_a_dice == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    } else if (Roll_a_dice == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (Roll_a_dice == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (Roll_a_dice == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (isSprite == 1) {
        sprite.change(LedSpriteProperty.Y, 1)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (isSprite == 1) {
        sprite.move(-1)
    }
})
input.onButtonPressed(Button.AB, function () {
    isSprite = 1
    sprite = game.createSprite(2, 2)
})
input.onButtonPressed(Button.B, function () {
    sprite.delete()
    isSprite = 0
    for (let index = 0; index < 8; index++) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `,10)
basic.showLeds(`
            # . . # .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `,10)
    }
    Flip_a_coin = randint(1, 2)
    if (Flip_a_coin == 1) {
        basic.showString("Heads")
    } else if (Flip_a_coin == 2) {
        basic.showString("Tails")
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (isSprite == 1) {
        sprite.move(1)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (isSprite == 1) {
        sprite.change(LedSpriteProperty.Y, -1)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sprite.delete()
    isSprite = 0
    music.playMelody("C C F F E E D D ", 120)
    music.playMelody("D D E F G G A G ", 120)
})
let Flip_a_coin = 0
let Roll_a_dice = 0
let sprite: game.LedSprite = null
let isSprite = 0
isSprite = 0
