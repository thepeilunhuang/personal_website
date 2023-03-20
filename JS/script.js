const courseList = [
    { code: "ACIT1620", name: "Fundamental Web Technologies" },
    { code: "ACIT1420", name: "Intro to Systems Admin" },
    { code: "ACIT1630", name: "Database Systems" },
  ];
  
  let userNumber = prompt("Please enter a 4-digit number:");

  let courseFound = false;
  let courseCode = null;
  let courseName = null;
  for (const course of courseList) {
    if (course.code.includes(userNumber)) {
      courseFound = true;
      courseCode =  course.code;
      courseName = course.name;
      break;
    }
  }
  

  if (userNumber.length !== 4) {
    userNumber = prompt("Please enter a 4-digit number:");
  }else if(courseFound == true){
    console.log(`Yes I am taking the course: ${courseCode} - ${courseName}`);
  }else{
    const newCourse = { code: `ACIT ${userNumber}`, name: null };
    courseList.push(newCourse);
    console.log(`Added new course: ${newCourse.code}`);
  }