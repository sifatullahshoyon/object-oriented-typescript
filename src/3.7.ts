{
  /////

  // Statics in OOP

  class Counter {
    // count : number = 0; // dynamic
    static count: number = 0; // static
    // increment function. if you want increment function is static that is possible. By default increment function behaves dynamically
    static increment() {
      // return (this.count = this.count + 1); // dynamic ভাবে ভ্যালু calculate
      return (Counter.count = Counter.count + 1); // static ভাবে ভ্যালু calculate হলে শুধু this. নাম দিয়ে variable কে call করা যাবে না class এর নাম ধরে ডাকতে হবে।
    }
    // decrement function. if you want decrement function is static that is possible. By default increment function behaves dynamically
    decrement() {
      // return (this.count = this.count - 1); // dynamic ভাবে ভ্যালু calculate
      return (Counter.count = Counter.count - 1); // static ভাবে ভ্যালু calculate হলে শুধু this. নাম দিয়ে variable কে call করা যাবে না class এর নাম ধরে ডাকতে হবে।
    }
  }

  // create instance
  const instance1 = new Counter();
  // console.log(instance1.increment()); // when dynamic call the function to increment the counter. output: 1 -> different memory usage
  // console.log(instance1.increment()); // when dynamic call the function to increment the counter. output: 1 -> same memory usage
  // console.log(instance1.increment()); // when dynamic call the function to increment the counter. output: 1 -> same memory usage

  // যখন function এর আগে ‍static বলে দেওয়া হয় তখন আর নতুন করে করে কোন variable এর প্রয়োজন হয় না। console or function call করার সময় class এর নাম বলে দিলেই হয়ে যাবে।
  console.log(Counter.increment()); // when dynamic call the function to increment the counter. output: 1 -> same memory usage

  const instance2 = new Counter();
  //    console.log(instance2.increment()); // when dynamic call the function to decrement the counter. output: 1 -> different memory usage
  //    console.log(instance2.increment()); // when dynamic call the function to decrement the counter. output: 2 -> same memory usage

  ///
}
