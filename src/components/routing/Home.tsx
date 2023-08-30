import React, { FC, useEffect, useState } from 'react';
import { Rector, Student, Teacher } from '../models';
import '../../index.css';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import {
    Container,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import DisplayStudents from '../students/DisplayStudents';
import DisplayTeachers from '../teachers/DisplayTeachers';
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

    //!!!!! DELETE, UPDATE RECTOR

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
            <Container maxWidth='lg' sx={{ marginTop: '20px' }}>
                <h2 className='student_title'>Таблица студентов</h2>
                <Table sx={{ width: '100%' }}>
                    <TableHead>
                        <TableRow sx={{ background: 'black', height: '40px' }}>
                            {/* <TableCell
                                sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                            >
                                Id
                            </TableCell> */}
                            <TableCell
                                sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                            >
                                FirstName
                            </TableCell>
                            <TableCell
                                sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                            >
                                LastName
                            </TableCell>
                            <TableCell
                                sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                            >
                                Age
                            </TableCell>
                            <TableCell
                                sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                            >
                                Course
                            </TableCell>
                            <TableCell
                                sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                            >
                                Edit
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentsList.map((el) => (
                            <TableRow sx={{ borderBottom: 'solid 2px black' }}>
                                {/* <TableCell>{el.id}</TableCell> */}
                                <TableCell>{el.firstName}</TableCell>
                                <TableCell>{el.lastName}</TableCell>
                                <TableCell>{el.age}</TableCell>
                                <TableCell
                                    sx={{
                                        display: 'flex',
                                        with: '100px',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                    }}
                                >
                                    {el.course}
                                    <IconButton
                                        onClick={() => deleteStudent(el.id)}
                                    >
                                        {/* <CloseIcon color='error' onClick={()=> } /> */}
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <EditIcon />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
            <div className='student'>
                <DisplayStudents
                    teacherList={teachersList}
                    studentsList={studentsList}
                    deleteStudent={deleteStudent}
                    updateStudent={updateStudent}
                />
            </div>
            <h2 className='student_title'>Список работников</h2>

            <DisplayTeachers
                teachersList={teachersList}
                deleteTeacher={deleteTeacher}
                updateTeacher={updateTeacher}
            />
            <DisplayRectors
                rectorsList={rectorsList}
                deleteRector={deleteRector}
                updateRector={updateRector}
            />
        </div>
    );
};

export default Home;
