function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student();
let student2 = new Student();
let student3 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    (this.marks).push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if(!this.hasOwnProperty('marks') || !(this.marks).length) {
    return 0;
  } else {
    return ( (this.marks).reduce( (acc, current) => acc + current) ) / (this.marks).length;
  }
}

Student.prototype.exclude = function (reason) {
  delete(this.subject);
  delete(this.marks);
  this.excluded = reason;
}
