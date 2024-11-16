{
  //

  // type --> typeof guard

  // যখন আমার function এর  ভ্যালু কি হবে তা আমি জানি না এইটা হতে পারে number or string তখন type of guard use করার মাধ্যমে আলাদা আলাদা condation apply করে ‍সিচুয়েশন টা hendel করা যায়।

  // type alias
  type Alphaneumeric = string | number;

  const add = (
    param1: Alphaneumeric,
    param2: Alphaneumeric
  ): string | number => {
    // type of দিয়ে চেক করা য়ায় যে parameters এর ভ্যালু কি হবে যদি নম্বার হয় তাহলে এক রকম output দিবে  আর যদি string হয় তাহলে আরেক রকম output দিবে।

    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add(2, 6);
  const result1 = add("2", 6);
  //    console.log(result1);

  // type --> typein guard

  // যখন একটি object এর একটি property এর উপর ভিত্তি করে কোন কনডিশন এপলাই করা হয় তখন type in guard ব্যবহার করা হয়

  // in guard type always use in object

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: string;
  };

  const getUser = (user: NormalUser | AdminUser) => {
    user;
    if ("role" in user) {
      console.log(`I'm ${user.name} & my role is ${user.role}`);
    } else {
      console.log(`I'm ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal Bhai",
  };

  const adminUser: AdminUser = {
    name: "Mr. Admin Bhai",
    role: "admin",
  };

  //    getUser(adminUser);

  //
}
