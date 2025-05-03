// Task 1: Basic Data Types and First Program

const welcomeMessage: string =
  "Hello World, I will complete this course successfully and become a Next level Web Developer!";

console.log(welcomeMessage);

//
//

// Task 2: Functions, Optional, and Literal Types

type role = "admin" | "user" | "guest";

const user = (name: string, age: number, role?: role) => {
  console.log(name, age);
};

user("Hassan", 20, "admin");
