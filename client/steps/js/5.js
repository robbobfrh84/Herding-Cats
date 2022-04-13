class Cat {

  constructor(name, type, age, location) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.column = location[0];
    this.row = location[1];
  }

  meow() {
    alert("HI! My name is "+this.name+". And I'm a "+this.type);
  }

  move(column_direction, row_direction) {
    this.column += column_direction
    this.row += row_direction
  }

}

var cat1 = new Cat( "Lucky",       "Ragdoll", 8,  [6,4] );
var cat2 = new Cat( "Little Anne", "Calico",  3,  [4,3] );
var cat3 = new Cat( "Bilbo",       "Tabby",   14, [2,1] );
