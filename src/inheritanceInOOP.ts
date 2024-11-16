{
  //

  // oop - Inheritance

  // Parent class
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      // initialize
      this.name = name;
      this.age = age;
      this.address = address;
    }

    // anonymous function with parameters
    getSleep(numOfHours: number) {
      console.log(
        `${this.name} will sleep for ${numOfHours} & his age ${this.age}`
      );
    }
  }

  // class for student
  //    class Student {
  //     name: string;
  //     age: number;
  //     address: string;

  //     constructor(name: string, age: number , address: string){
  //         // initialize
  //         this.name = name;
  //         this.age = age;
  //         this.address = address;
  //        };

  //        // anonymous function with parameters
  //        getSleep(numOfHours : number){
  //         console.log(`${this.name} will sleep for ${numOfHours}`);
  //        };

  //    };

  class Student extends Person {
    // student & teacher এর property এবং getSleep নামক function গুলো একই হওয়ায় একটি common class declared করে ওই ক্লাস থেকে property এবং function কে দুই জায়গায় declared করার মাধ্যমে code কে সহজেই reusable করা যায় কিন্তু constructor গুলো প্রত্যেক টি class এর জন্য ডিকলার্ড করতে হবে কড়ন যখন প্রতিটা Student class আলাদা আলাদা ভাবে call করা হবে তার ভিতরে argument হিসাবে আলাদা আলাদা data pass হবে তাই constructor থাকা জরুলি।

    constructor(name: string, age: number, address: string) {
      // initialize

      // constructor এর ভিতরের property গুলো যেহেতু একই এবং এইগুলো common class এর ভিতরে declared করা আছে তাই ওই গুলো initialize করা জরুলি নয়।

      // super() call করার মাধ্যমে clild এর property গুলো Person এ পাঠাবো কাড়ন Person class / common class হচ্ছে property গুলোর আসল মালিক।
      super(name, age, address);
    }
  }

  // inistend

  let student1 = new Student("Sifat", 23, "Dhaka");

  student1.getSleep(8);

  // class for teacher
  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      // initialize

      super(name, age, address);
      this.designation = designation;
    }

    // anonymous function with parameters

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }

  let teacher = new Teacher("Mr.teacher", 35, "london", "professor");

  teacher.getSleep(7);
  teacher.takeClass(5);
  //    console.log('teacher age:', teacher.age = 49);

  //
}
