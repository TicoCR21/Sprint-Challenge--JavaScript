// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMakerClass
{
    constructor( length, width, height )
    {
        this.length = length;
        this.width  = width;
        this.height = height;
    }
  
    volume()
    {
        return this.length * this.width * this.height;
    }

    surfaceArea()
    {
        return 2 * ( this.length * this.width + this.length * this.height + this.width * this.height );
    }
}

const cuboid2 = new CuboidMakerClass( 4, 5, 5 );

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log( cuboid2.volume() ); // 100
console.log( cuboid2.surfaceArea() ); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


//The formula for SA = 6a^2 where a = adge 
//CuboidMakerClass SA = 2 * ( this.length * this.width + this.length * this.height + this.width * this.height )
//Since the edges are equal in a cube then the SA from CuboidMakerClass works as 2*( a^2 + a^2 + a^2 ) = 2(3a^2) = 6a^2

class CubeMaker extends CuboidMakerClass
{
    constructor( width )
    {
        super( width, width, width );
    }
}

const cube = new CubeMaker( 8 );
console.log( "Cube Volume: " + cube.volume() );
console.log( "Cube Surface Area: " + cube.surfaceArea() );