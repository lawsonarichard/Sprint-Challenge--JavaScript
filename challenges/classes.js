// 1. Copy and paste your prototype in here and refactor into class syntax.

/*
function CuboidMaker(attributes){
    this.lenght = attributes.lenght;
    this.width = attributes.width;
    this.height = attributes.height;
  }
    CuboidMaker.prototype.volume = function (lenght, width, height) {
    return this.lenght * this.width * this.height;
  }

  CuboidMaker.prototype.surfaceArea = function(lenght, width, height) {
    return 2 * (this.lenght * this.width + this.lenght * this.height + this.width * this.height);
  }
  
  const cuboid = new CuboidMaker ({
     lenght: 4,
     width: 5,
     height: 5,
  });
*/
class CuboidMaker {
    constructor (cuboidMakerattribtues) {
        this.lenght = cuboidMakerattribtues.lenght;
        this.width = cuboidMakerattribtues.width;
        this.height = cuboidMakerattribtues.height;
    }
    volume() {
        return this.lenght * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.lenght * this.width + this.lenght * this.height + this.width * this.height);
    }
}
const cuboid = new CuboidMaker ({
    lenght: 4,
    width: 5,
    height: 5,
 });
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.