import React, { FC, useEffect, useState } from 'react';
import { Rector, Student, Teacher } from '../models';
import '../../index.css';

import DisplayStudents from '../students/DisplayStudents';
import DisplayTeachers from '../teachers/DisplayTeachers';
import AddRectorsForm from '../rectors/AddRectors';
import DisplayRectors from '../rectors/DisplayRectors';

//!!!!!!!!!!!!!!!!!
const Home: FC = () => {
    const [studentsList, setStudentsList] = useState<Student[]>([]);
    const [teachersList, setTeachersList] = useState<Teacher[]>([]);
    const [rectorsList, setRectorsList] = useState<Rector[]>([]);

    //!!!LocalStorage Students

    useEffect(() => {
        const items = localStorage.getItem('studentsList')!;
        setStudentsList(JSON.parse(items));
    }, [setStudentsList]);

    useEffect(() => {
        const json = JSON.stringify(studentsList);
        localStorage.setItem('studentsList', json);
    }, [studentsList]);

    //!!!LocalStorage Teachers

    useEffect(() => {
        const items = localStorage.getItem('teachersList')!;
        setTeachersList(JSON.parse(items));
    }, [setTeachersList]);

    useEffect(() => {
        const json = JSON.stringify(teachersList);
        localStorage.setItem('teachersList', json);
    }, [teachersList]);

    //!!!LocalStorage Rector

    useEffect(() => {
        const items = localStorage.getItem('rectorsList')!;
        setRectorsList(JSON.parse(items));
    }, [setRectorsList]);

    useEffect(() => {
        const json = JSON.stringify(rectorsList);
        localStorage.setItem('rectorsList', json);
    }, [rectorsList]);

    //!!!!! ADD, DELETE, UPDATE STUDENTS
    const updateStudent = (newStudent: Student) => {
        setStudentsList(
            studentsList.map((student) =>
                student.id === newStudent.id ? newStudent : student
            )
        );
    };

    const deleteStudent = (id: number) => {
        const newStudentsList = studentsList.filter(
            (student) => student.id !== id
        );
        setStudentsList(newStudentsList);
    };

    //!!!!!  DELETE, UPDATE TEACHERS

    const updateTeacher = (newTeacher: Teacher) => {
        setTeachersList(
            teachersList.map((teacher) =>
                teacher.id === newTeacher.id ? newTeacher : teacher
            )
        );
    };

    const deleteTeacher = (id: number) => {
        const newTeachersList = teachersList.filter(
            (teachers) => teachers.id !== id
        );
        setTeachersList(newTeachersList);
    };

    //!!!!! ADD, DELETE, UPDATE RECTOR
    const addRector = (newRector: Rector) => {
        setRectorsList([...rectorsList, newRector]);
    };

    const updateRector = (newRector: Rector) => {
        setRectorsList(
            teachersList.map((rector) =>
                rector.id === newRector.id ? newRector : rector
            )
        );
    };

    const deleteRector = (id: number) => {
        const newRectorsList = rectorsList.filter(
            (rectors) => rectors.id !== id
        );
        setRectorsList(newRectorsList);
    };

    //!!!

    return (
        <div className='Home'>
            <div className='student'>
                <h2 className='student_title'>Список студентов</h2>
                <DisplayStudents
                    teacherList={teachersList}
                    studentsList={studentsList}
                    deleteStudent={deleteStudent}
                    updateStudent={updateStudent}
                />
            </div>
            <div className='employee'>
                <h2 className='student_title'>Список работников</h2>
                <div className='teachers'>
                    {/* <AddTeachersForm addTeacher={addTeacher} /> */}
                    <DisplayTeachers
                        teachersList={teachersList}
                        deleteTeacher={deleteTeacher}
                        updateTeacher={updateTeacher}
                    />
                </div>
                <div className='rector'>
                    <AddRectorsForm addRector={addRector} />
                    <DisplayRectors
                        rectorsList={rectorsList}
                        deleteRector={deleteRector}
                        updateRector={updateRector}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
