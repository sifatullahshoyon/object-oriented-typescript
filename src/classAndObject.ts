{
  //

  // oop - class

  class Animal {
    // public name: string; // public modifier by default থাকে
    // public species: string;
    public sound: string;

    // public property : public property use করলে একই কোড দুইবার লেখার প্রয়োজন পরে না।

    constructor(public name: string, public species: string, sound: string) {
      // initialize করা
      // this.name = name;
      // this.species = species;
      this.sound = sound;
    }

    // anonymous function without parameters
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  // class এর inistend

  const dog = new Animal("German Shepard ", "dog", "Ghew Ghew");

  const cat = new Animal("persian", "cat", "meaw meaw");

  cat.makeSound();

  //
}
