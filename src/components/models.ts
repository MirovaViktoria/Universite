export interface Employee {
    name: string;
    salary: number;
}
export interface Rector {
    name: string;
    salary: number;
    id: number;
}
export interface Teacher {
    name: string;
    salary: number;
    id: number;
}
export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    id: number;
    course: number;
    teacher?: string;
}
export interface Option {
    label: string;
    value: string | number;
}
