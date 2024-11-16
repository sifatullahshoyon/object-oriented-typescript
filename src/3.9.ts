{
  /////

  // Abstraction in OOP . Abstraction দুই ভাবে করা যায়। 1. interface 2. abstract

  // type declaration
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // object এর ক্ষেত্রে এই ভাবে type declaration করা যায়
  // const vehicle1 : Vehicle1 = {
  //     name: 'Toyota',
  //     model: 2000
  // };

  // object এর ক্ষেত্রে এই ভাবে type declaration করা যায় । কিন্তু class এর বেলায় করা যায় না। class এর বেলায় করতে হলে implements নামক keyword use করতে হবে।

  // class vehicle1 : vehicle1{
  // };

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I'm starting the car engine`);
    }

    stopEngine(): void {
      console.log(`I'm stooping the car engine`);
    }

    move(): void {
      console.log(`I'm moving the car`);
    }

    test() {
      console.log(`I'm am just testing`);
    }
  }

  // instance
  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // Abstract Class
  // example 2 . Parent Class
  // idea
  abstract class Car2 {
    abstract startEngine(): void;

    abstract stopEngine(): void;

    abstract move(): void;

    test() {
      console.log(`I'm am just testing`);
    }
  }

  // child class
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I'm starting the car engine");
    }
    stopEngine(): void {
      console.log("I'm stopping the car engine");
    }
    move(): void {
      console.log("I'm moving the car");
    }
  }

  // instance
  // const hondaCar = new Car2();
  // hondaCar.startEngine();

  ////////////////////
}
