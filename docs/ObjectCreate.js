function Cat(name, type, location) {
  const cat = Object.create(constructorObject);
  cat.name = name;
  cat.type = type;
  cat.location = location
  return cat
}

const constructorObject = {
  meow: function() {
    alert("HI! My name is "+this.name+". And I'm a "+this.type+" cat.");
  }
}

const cat1 = new Cat("Bilbo", "Tabby", [2,2]);
const cat2 = new Cat("Lucky", "Calico", [4,3]);
const cat3 = new Cat("Backster", "Ragdoll", [4,6]);

console.log("cat1 :", cat1)
