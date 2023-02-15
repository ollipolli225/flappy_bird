input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let bird: game.LedSprite = null
let obstacles: game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let emteyobstacley = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != emteyobstacley) {
        obstacles.push(game.createSprite(4, index))
    }
}
basic.forever(function () {
    let index = 0
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    emteyobstacley = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
    	
    }
    if (index != emteyobstacley) {
    	
    }
    basic.pause(1000)
})
