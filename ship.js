function Ship(x, y, w, h, a) {
    var options = {
      friction: 0.9,
      restitution: 0.1,
      angle: a,
      isStatic: true,
      density: 0.9
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.dir = 1
    World.add(world, this.body);
    console.log(this.body);

    this.rotate = function(diff, limitA, limitB){
        if (this.body.angle >= limitA){
            this.dir = -1
        } else if (this.body.angle <= limitB) {
            this.dir = 1
        }
        Body.rotate(this.body, diff*this.dir);
    }
  
    this.show = function() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      noStroke();
      fill(0);
      rect(0, 0, this.w, this.h);
      pop();
    }
  
  }