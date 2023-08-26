import React, { FC, useEffect, useState } from 'react';
import AddStudentsForm from '../students/AddStudents';
import { Student, Teacher } from '../models';
import '../../index.css';
//!!!!!!!!!!!!!!!!!
const AddStudents: FC = () => {
    const [studentsList, setStudentsList] = useState<Student[]>([]);
    const [teachersList, setTeachersList] = useState<Teacher[]>([]);

    //!!!LocalStorage Students

    useEffect(() => {
        const items = localStorage.getItem('studentsList')!;
        setStudentsList(JSON.parse(items));
    }, [setStudentsList]);

    useEffect(() => {
        const json = JSON.stringify(studentsList);
        localStorage.setItem('studentsList', json);
    }, [studentsList]);

    //!!!!! ADD, DELETE, UPDATE STUDENTS

    const addStudent = (newStudent: Student) => {
        setStudentsList([...studentsList, newStudent]);
    };

    //!!!LocalStorage Teachers

    useEffect(() => {
        const items = localStorage.getItem('teachersList')!;
        setTeachersList(JSON.parse(items));
    }, [setTeachersList]);

    useEffect(() => {
        const json = JSON.stringify(teachersList);
        localStorage.setItem('teachersList', json);
    }, [teachersList]);
    //!!!

    return (
        <div className='Home'>
            <div className='add-form'>
                <AddStudentsForm
                    addStudent={addStudent}
                    teacherList={teachersList}
                />
            </div>
        </div>
    );
};

export default AddStudents;
