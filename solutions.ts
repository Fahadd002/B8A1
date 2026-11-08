export const multiplyValue = (a: number, multiplier?: number): number => {
  return a * (multiplier !== undefined ? multiplier : 2);
};

export const processInput = (
  input: string | number | boolean,
): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    return input ? "Active" : "Inactive";
  } else return "Invalid input type";
};

export function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

export const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
};

export interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

export const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students > minStudents,
  );
};

export const pluckValues = <T, K extends keyof T>(
  array: T[],
  key: K,
): T[K][] => {
  return array.map((item) => item[key]);
};

export class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

export class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}`;
  }
}

export const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
