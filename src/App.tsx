import React, { FC, useEffect, useState } from 'react';
import AddStudentsForm from './components/students/AddStudents';
import { Rector, Student, Teacher } from './components/models';
import './index.css';
import DisplayStudents from './components/students/DisplayStudents';
import AddTeachersForm from './components/teachers/AddTeacher';
import DisplayTeachers from './components/teachers/DisplayTeachers';
import AddRectorsForm from './components/rectors/AddRectors';
import DisplayRectors from './components/rectors/DisplayRectors';

import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router';

//!!!!!!!!!!!!!!!!!
const App: FC = () => {
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

    const addStudent = (newStudent: Student) => {
        setStudentsList([...studentsList, newStudent]);
    };

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

    //!!!!! ADD, DELETE, UPDATE TEACHERS

    const addTeacher = (newTeacher: Teacher) => {
        setTeachersList([...teachersList, newTeacher]);
    };

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
        <div className='App'>
            {/* <header>
                <Link to='/'>Home</Link>
                <Link to='/foo'>Foo</Link>
                <Link to='/bar'>Bar</Link>
            </header> */}
            {/* <Routes>
                <Route path='/' element={<App />} />
                <Route
                    path='/addStudent'
                    element={
                        <AddStudentsForm
                            addStudent={addStudent}
                            teacherList={teachersList}
                        />
                    }
                />
            </Routes> */}
            <div className='title'>
                <span>Univesite : Black Bern</span>
            </div>
            <div className='student'>
                <h2 className='student_title'>Список студентов</h2>
                <AddStudentsForm
                    addStudent={addStudent}
                    teacherList={teachersList}
                />

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
                    <AddTeachersForm addTeacher={addTeacher} />
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

export default App;
