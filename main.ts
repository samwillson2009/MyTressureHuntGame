scene.onOverlapTile(SpriteKind.Player, assets.tile`1goldcoin`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Treasure`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire energy down`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`End`, function (sprite, location) {
	
})
info.onLifeZero(function () {
    game.over(false)
    game.reset()
})
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
info.setLife(3)
game.splash("this is the tresure hunt game")
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f 4 4 4 f . . . . . 
    . . . . . . 4 f 4 f 4 . . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . 8 7 7 f 7 7 8 . . . . 
    . . . . . 8 7 7 7 7 7 8 . . . . 
    . . . . . 8 7 7 f 7 7 8 . . . . 
    . . . . . 8 7 7 7 7 7 8 . . . . 
    . . . . . . 7 7 f 7 8 . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . 8 8 . 8 8 . . . . . 
    . . . . . . 8 8 . 8 8 . . . . . 
    . . . . . . 8 8 . 8 8 . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
