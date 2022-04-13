class Cat {

  constructor(name, type, age, location) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.column = location[0];
    this.row = location[1];
    this.friends = {}
  }

  meow() {
    alert("HI! My name is "+this.name+". And I'm a "+this.type);
  }

  move(column_direction, row_direction) {
    this.column += column_direction
    this.row += row_direction
  }

  makeFriend(cat) {
    if (!this.friends[cat.name]) {
      this.friends[cat.name] = cat
      cat.friends[this.name] = this
      alert(this.name+" made friends with "+cat.name+"!💚💙💜");
    } else {
      alert(this.name+" says 'Hello!' to their friend "+cat.name+". 😸😺");
    }
  }

}

var cat1 = new Cat( "Lucky",       "Ragdoll", 8,  [6,4] );
var cat2 = new Cat( "Little Anne", "Calico",  3,  [4,3] );
var cat3 = new Cat( "Bilbo",       "Tabby",   14, [2,1] );
// var cat4 = new Cat( "Jordy",       "Calico",   10, [5,0] );
// var cat5 = new Cat( "Tiger",       "Tabby",   8, [2,6] );
