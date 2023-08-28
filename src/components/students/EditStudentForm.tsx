import React, { FC, useState } from 'react';
import { Student, Teacher } from '../models';
import { SelectOption, SelectBox } from '../SelectBox/SelectBox';

import '../../index.css';

interface EditStudentFormProps {
    data: Student;
    teachers: Teacher[];
    updateStudent: (newStudent: Student) => void;
    handleToggleEdit: () => void;
}

const EditStudentForm: FC<EditStudentFormProps> = ({
    data,
    updateStudent,
    handleToggleEdit,
    teachers,
}) => {
    const [editStudent, setEditStudent] = useState<Student>(data);

    //!!!
    const options: SelectOption[] = [
        { label: 'Select...', value: '' },
        ...teachers.map((t) => ({ label: t.name, value: t.name })),
    ];
    // const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     setEditStudent({
    //         ...editStudent,
    //         [name]: value,
    //     });
    // };
    //!!!!!!!!!

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setEditStudent({
            ...editStudent,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { firstName, lastName, age } = editStudent;
        if (firstName && lastName && age) {
            updateStudent(editStudent);
            handleToggleEdit();
        }
    };
    return (
        <form className='edit-form' onSubmit={handleSubmit}>
            <SelectBox
                name='teacher'
                options={options}
                value={editStudent.teacher}
                onChange={handleChange}
            ></SelectBox>

            <input
                className='input-edit'
                name='firstName'
                type='text'
                placeholder='firstName'
                onChange={handleChange}
                value={editStudent.firstName}
            ></input>

            <input
                className='input-edit'
                name='lastName'
                type='text'
                placeholder='lastName'
                onChange={handleChange}
                value={editStudent.lastName}
            ></input>
            <input
                className='input-edit'
                name='age'
                type='text'
                placeholder='age'
                onChange={handleChange}
                value={editStudent.age}
            ></input>
            <input
                className='input-edit'
                name='course'
                type='text'
                placeholder='course'
                onChange={handleChange}
                value={editStudent.course}
            ></input>
            <input
                className='input-edit'
                name='teacher'
                type='text'
                placeholder='teacher'
                onChange={handleChange}
                value={editStudent.teacher}
            ></input>
            <button className='btn_edit' type='submit'>
                Подтвердить
            </button>
        </form>
    );
};

export default EditStudentForm;
