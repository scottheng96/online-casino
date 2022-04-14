const config = {
    type: Phaser.AUTO, // Which renderer to use
    width: 800, // Canvas width in pixels
    height: 600, // Canvas height in pixels
    parent: "game-container", // ID of the DOM element to add the canvas to
    scene: {
        preload: preload,
        create: create,
        update: update
    }
    // there's a parameter for physics
};

const game = new Phaser.Game(config);

function preload() {
    // Runs once, loads up assets like images and audio
    this.load.image("mario-tiles", "./assets/tilesets/super-mario-tiles.png");
}

function create() {
    // Runs once, after all assets in preload are loaded

    const level = [
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   1,   2,   3,   0,   0,   0,   1,   2,   3,   0 ],
        [  0,   5,   6,   7,   0,   0,   0,   5,   6,   7,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,  14,  13,  14,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,  14,  14,  14,  14,  14,   0,   0,   0,  15 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,  15,  15 ],
        [ 35,  36,  37,   0,   0,   0,   0,   0,  15,  15,  15 ],
        [ 39,  39,  39,  39,  39,  39,  39,  39,  39,  39,  39 ]
    ];

    // When loading from an array, make sure to specify the tileWidth and tileHeight
    const map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    const tiles = map.addTilesetImage("mario-tiles");
    const layer = map.createLayer(0, tiles, 50, 50);
}

function update(time, delta) {
    // Runs once per frame for the duration of the scene
}