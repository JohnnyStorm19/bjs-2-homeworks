function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks') && (this.marks).length > 0){
    return (this.marks.reduce( (acc, current) => acc + current) ) / (this.marks).length;
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student1 = new Student("Гарри", "мужской", 11);
student1.setSubject("Quidduch");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = new Student("Том", "мужской", 16);
student2.setSubject("Forbidden magic");
student2.exclude("Занимался черной магией");
console.log(student2);
