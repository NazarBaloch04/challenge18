// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts. 


interface mobile {
  make: string;
  model: string;
  AndroidVersion: number;
  storage: number;
  Ram: string;
  screenSize:string;
  batteryLife: string;
  OsVersion: string;
  Hardware: string;
}
let AndroidPhone = {
  make: "Vivo",
  model: "Vivi v21 e",
  AndroidVersion: 12,
  storage: "256GB",
  Ram: "8GB + 2.0 GB",
  screenSize: "6.2 inches",
  batteryLife: "24 hours",
  OsVersion: "Funtouch OS 12 Global",
  Hardware: "MP_0.1",
};

console.log(AndroidPhone);




// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.


let developerSkills = {
    languages: ["HTML 5", "CSS", "Type script", "Java Script"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};


let { languages, frameworks, tools } = developerSkills;


console.log(`Language: ${languages[3]}, Framework: ${frameworks[1]}, Tool: ${tools[2]}`);


// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.


function ObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};

    dynamicObject = value;
    return dynamicObject;
}


let userPreference = ObjectWithDynamicKey("dark", "light");


console.log(userPreference);