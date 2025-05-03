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

//
//

// Task 3: Object Types, Type Alias, & Literal Types

type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

type Color = "Black" | "Brown" | "Blonde" | "Red" | "Gray" | "White" | "Other";

type Job = {
  title: string;
  company: string;
  salary: number;
  isRemote: boolean;
};

type Skill = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
};

type FamilyMember = {
  name: string;
  relation: string;
  age?: number;
};

type Friend = {
  name: string;
  since: number;
};

type MaritalStatus =
  | "Single"
  | "Married"
  | "Divorced"
  | "Widowed"
  | "Separated";

type Person = {
  name: string;
  address: Address;
  hairColor: Color;
  eyeColor: Color;
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: FamilyMember[];
  job: Job;
  skills: Skill[];
  maritalStatus: MaritalStatus;
  friends: Friend[];
};

//
//
