function Slice(x, y, w, h) {
    var options = {
      friction: 0.5,
      restitution: 0.3,
      density: 0.75
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    //this.r = r;
    World.add(world, this.body);
  
    this.show = function() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke(255);
      fill(127);
      rect(0, 0, this.w, this.h);
      pop();
    }
  
  }