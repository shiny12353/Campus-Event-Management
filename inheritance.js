// User constructor
function User(name, email) {
    this.name = name;
    this.email = email;
}

// Adding method using prototype
User.prototype.login = function () {
    console.log(this.name + " has logged in.");
};

// Student constructor
function Student(name, email, rollNo) {
    User.call(this, name, email); // Reuse User properties
    this.rollNo = rollNo;
}

// Inherit User prototype
Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

// Student method
Student.prototype.registerEvent = function () {
    console.log(this.name + " has registered for an event.");
};

// Organizer constructor
function Organizer(name, email, department) {
    User.call(this, name, email);
    this.department = department;
}

// Inherit User prototype
Organizer.prototype = Object.create(User.prototype);
Organizer.prototype.constructor = Organizer;

// Organizer method
Organizer.prototype.createEvent = function () {
    console.log(this.name + " has created an event.");
};

// Creating objects
const student1 = new Student("Aarav", "aarav@gmail.com", 101);
student1.login();
student1.registerEvent();

const organizer1 = new Organizer("Neha", "neha@gmail.com", "CSE");
organizer1.login();
organizer1.createEvent();
