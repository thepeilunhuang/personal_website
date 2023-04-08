const courseList = [
  { code: "ACIT 1620", name: "Web Fundamental Technologies" },
  { code: "ACIT 1420", name: "Intro to Systems Admin" },
  { code: "ACIT 1630", name: "Database Systems" }
];

let userInput;
let courseFound = false;

while (!courseFound) {
  userInput = prompt("Please enter a 4-digit course number:");

  if (userInput.length === 4 && !isNaN(userInput)) {
    let courseCode = `ACIT ${userInput}`;
    for (let i = 0; i < courseList.length; i++) {
      if (courseList[i].code === courseCode) {
        console.log(`Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
        courseFound = true;
        let elementId = userInput;
        let element = document.getElementById(elementId);
        if (element) {
          element.style.backgroundColor = "green";
        }
        break;
      }
    }

    if (!courseFound) {
      courseList.push({ code: courseCode, name: null });
      console.log(`Added new course with code: ${courseCode}`);
      break;
    }
  } else {
    alert("Invalid input, please enter a 4-digit number.");
  }
}


function createCourseArray() {
  const courseElements = document.querySelectorAll(".courses");
  const courseArray = [];

  for (let i = 0; i < courseElements.length; i++) {
    const codeElement = courseElements[i].querySelector(".course_title a");
    const dateElement = courseElements[i].querySelector(".term");

    if (codeElement && dateElement) {
      const code = codeElement.textContent.trim();
      const date = dateElement.textContent.trim();
      courseArray.push({ code: code, date: date });
    }
  }

  return courseArray;
}


