{
  /////

  // Polymorphism

  class Person {
    // anonymous function
    getSleep() {
      console.log(`I'm Sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    // anonymous function
    getSleep() {
      console.log(`I'm Sleeping for 7 hours per day`);
    }
  }

  class Developer extends Person {
    // anonymous function
    getSleep() {
      console.log(`I'm Sleeping for 6 hours per day`);
    }
  }

  // create function
  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  // instant
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  // call the getSleepingHours function
  // getSleepingHours(person1);
  // getSleepingHours(person2);

  ////////////////////////// Example Number 2 /////////

  class Shape {
    // anonymous function
    getArea(): number {
      return 0;
    }
  }

  // Circle Shape . Pi* r* r
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // Rectangle Shape . Height * Width
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  // create function
  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  // instant
  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  // call getShapeArea function:-
  // getShapeArea(shape1);
  // getShapeArea(shape2);
  // getShapeArea(shape3);
}
