kontra.init();
let sprite = kontra.Sprite({
  x: 100,
  y: 50,
  height: 50,
  width: 50,
  color: "blue",
  dx: 1,
});
let loop = kontra.GameLoop({
  update: function () {
    sprite.update();
    if (sprite.x > 300) sprite.x = 0;
  },
  render: function () {
    sprite.render();
  },
});
loop.start();
