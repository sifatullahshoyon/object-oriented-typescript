{
  /////

  // Getter and setter

  // parent class
  class BankAccount {
    readonly id: number; // readonly modifier এর মাধ্যমে property  এর মান কে পরিবর্তন করা যায় না। শুরু read করা যায়।

    public name: string; // by default public modifier থাকে।

    // private _balance: number; // balance এর ক্ষেত্রে readonly modifier use করা উচিত নয় কাড়ন balance পরিবর্তনশীল। private property তার class এর ভিতরে available থাকে তার child class এর ভিতরে ও তাকে access করা যায় না।

    protected _balance: number; //private property তার class এর ভিতরে available থাকে তার child class এর ভিতরে ও তাকে access করা যায় না যদি এমন প্রয়োজন হয় যে, child এর ভিতরে ও ঐ property access করতে হবে তখন private এর পরিবর্তে protected modifier use করতে হবে।

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // ‍Setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // ‍anonymous function
    // Deposit balance function
    //   public addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    //   }

    // Getter
    get Balance() {
      return this._balance;
    }

    // Get Balance Function
    public getBalance() {
      return this._balance;
    }
  }

  const goribManusHerAccount: BankAccount = new BankAccount(
    111,
    "Mr. Gorib",
    20
  );
  //    goribManusHerAccount.id = 222; // modifi or re assign properties. id & banlance modifi করা উচিত নয়।

  // goribManusHerAccount.balance = 0; // class এর বাহিরে balance property কে modifi করা যায় না।  modifi করতে হলে class এর ভিতরে করতে হবে।

  // child class
  class StudentAccount extends BankAccount {
    // test() method
    test() {
      return this._balance;
    }
  }

  // goribManusHerAccount.addDeposit(60); // function call

  // // called getBalance function
  // const myBalance = goribManusHerAccount.getBalance();

  /// setter method

  goribManusHerAccount.deposit = 500; // property এর মতো করে

  // getter method
  const myBalance = goribManusHerAccount.Balance; // property এর মতো করে
  console.log(myBalance);

  const myStudentAccount = new StudentAccount(656, "student", 603);
  //    console.log(myStudentAccount);

  ///
}
