// Learning JavaScript

var a = 15;
var b = 12;

c = a * b;

c;

a > b ? (a = "greater") : (b = "a is lesser or equal to b");

if (a > b) {
    a = "greater";
} else {
    b = "a is lesser or equal to b";
}

//   0  1  2  3
a = [1, 1, 3, 4];

function funct(test) {}

funct = (test) => {};

funct(12);

a[1];

a.forEach((item, index) => {
    a[index] = item + 1;
});

a;

a = {
    name: "Akshat",
    age: 21,
    grades: ["A", "A", "A", "F"],
};

a.name;
a.age;
a.grades;
a.grades[3];

a = "akshatvg23@gmail.com";
a.length;

a.slice(-26, -1);
a.replace("big", "small");
a.trim();

test = a.match(/\S+@\S+/) ? "passed" : "failed";