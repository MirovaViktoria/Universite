import React, { FC, useState } from 'react';
import { Student } from '../models';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditStudentForm from './EditStudentForm';
import { Teacher } from '../models';

interface OneStudentProps {
    teacherList: Teacher[];
    student: Student;
    updateStudent: (newStudent: Student) => void;
    deleteStudent: (id: number) => void;
}

const OneStudent: FC<OneStudentProps> = ({
    student,
    updateStudent,
    deleteStudent,
    teacherList,
}) => {
    const [edit, setEdit] = useState<boolean>(false);

    //!!!!!!!!!!!
    const handleToggleEdit = () => {
        setEdit(!edit);
    };

    const handleDelete = () => {
        deleteStudent(student.id);
    };

    return (
        <div className='one_student'>
            <h2>Course: {student.course}</h2>
            <h2>Teacher: {student.teacher}</h2>
            <h2>Firstname: {student.firstName}</h2>
            <h2>Lastname: {student.lastName}</h2>
            <h2>Age: {student.age}</h2>
            <div className='controls'>
                <AiFillEdit onClick={handleToggleEdit} />
                <AiFillDelete onClick={handleDelete} />
            </div>
            {edit ? (
                <EditStudentForm
                    data={student}
                    teachers={teacherList}
                    updateStudent={updateStudent}
                    handleToggleEdit={handleToggleEdit}
                />
            ) : null}
        </div>
    );
};

export default OneStudent;
