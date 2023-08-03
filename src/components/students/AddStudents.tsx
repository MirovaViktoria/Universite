import React, { FC, useState } from 'react';
import { Student, Teacher } from '../models';
import '../../index';

interface AddStudentsFormProps {
    addStudent: (newStudent: Student) => void;
    teacherList: Teacher[];
}

const initialState: Student = {
    firstName: '',
    lastName: '',
    age: 0,
    id: 0,
    course: 1,
};

const AddStudentsForm: FC<AddStudentsFormProps> = ({
    addStudent,
    teacherList,
}) => {
    const [newStudent, setNewStudent] = useState<Student>(initialState);
    const [add, setAdd] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setAdd(!add);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewStudent({
            ...newStudent,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { firstName, lastName, age, course } = newStudent;
        if (firstName && lastName && age && course) {
            addStudent({
                firstName,
                lastName,
                age: age,
                id: Date.now(),
                course: course,
            });
            handleToggleEdit();
            setNewStudent(initialState);
        }
    };
    return (
        <form className='submit-form' onSubmit={handleSubmit}>
            <button
                className='btn_hiring'
                onClick={handleToggleEdit}
                type='submit'
            >
                Зачислить студента
            </button>
            {add ? (
                <div>
                    <input
                        className='input-submit'
                        name='firstName'
                        type='text'
                        placeholder='firstName'
                        onChange={handleChange}
                        value={newStudent.firstName}
                    ></input>

                    <input
                        className='input-submit'
                        name='lastName'
                        type='text'
                        placeholder='lastName'
                        onChange={handleChange}
                        value={newStudent.lastName}
                    ></input>
                    <input
                        className='input-submit'
                        name='age'
                        type='text'
                        placeholder='age'
                        onChange={handleChange}
                        value={newStudent.age}
                    ></input>
                    <input
                        className='input-submit'
                        name='course'
                        type='text'
                        placeholder='course'
                        onChange={handleChange}
                        value={newStudent.course}
                    ></input>

                    <button className='btn_submit' type='submit'>
                        Добавить
                    </button>
                </div>
            ) : null}
        </form>
    );
};

export default AddStudentsForm;
