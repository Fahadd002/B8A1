const multiplyValue = (a, multiplier) => {
    return a * (multiplier !== undefined ? multiplier : 2);
};
const processInput = (input) => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else if (typeof input === "boolean") {
        return input ? "Active" : "Inactive";
    }
    else
        return "Invalid input type";
};
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
const concatenateArrays = (...arrays) => {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished && course.students > minStudents);
};
const pluckValues = (array, key) => {
    return array.map((item) => item[key]);
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}`;
    }
}
const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
export {};
