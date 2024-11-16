{
  //

  // instanceof guard
  // parent class
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I'm Make Sound");
    }
  }

  // child class
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I'm Barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I'm mewaing");
    }
  }

  // parent class কে চাইলে type হিসাবে ও ব্যবহার করা যায়

  // smart way te handle korar jono chaile amra function use korte pari
  const isDog = (animal: Animal): animal is Dog => {
    // TypeScript বুঝে যাবে animal এখন Dog type
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    // TypeScript বুঝে যাবে animal এখন Cat type
    return animal instanceof Dog;
  };

  const getAnimal = (animal: Animal) => {
    // type garde / type narrow down
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeBark();
    } else {
      animal.makeSound();
    }
  };

  // normal way
  //    const getAnimal = (animal : Animal) => {
  //     if(animal instanceof Dog){
  //         animal.makeBark();
  //     }else if(animal instanceof Cat){
  //         animal.makeBark();
  //     }else{
  //         animal.makeSound();
  //     }
  //    };

  const dog = new Dog("Dog Bhai", "dog");
  const cat = new Cat("Cat Bhai", "cat");

  getAnimal(cat);

  //    dog.makeSound();

  //
}
