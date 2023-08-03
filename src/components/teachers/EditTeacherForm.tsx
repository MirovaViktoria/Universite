import React, { FC, useState } from 'react';
import { Teacher } from '../models';
import '../../index.css';

interface EditTeacherFormProps {
    data: Teacher;
    updateTeacher: (newTeacher: Teacher) => void;
    handleToggleEdit: () => void;
}

const EditTeacherForm: FC<EditTeacherFormProps> = ({
    data,
    updateTeacher,
    handleToggleEdit,
}) => {
    const [editTeacher, setEditTeacher] = useState<Teacher>(data);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditTeacher({
            ...editTeacher,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, salary, id } = editTeacher;
        if (name && salary && id) {
            updateTeacher(editTeacher);
            handleToggleEdit();
        }
    };
    return (
        <form className='edit-form' onSubmit={handleSubmit}>
            <input
                className='input-edit'
                name='name'
                type='text'
                placeholder='name'
                onChange={handleChange}
                value={editTeacher.name}
            ></input>

            <input
                className='input-edit'
                name='salary'
                type='text'
                placeholder='salary'
                onChange={handleChange}
                value={editTeacher.salary}
            ></input>
            <button className='btn_edit' type='submit'>
                Подтвердить
            </button>
        </form>
    );
};

export default EditTeacherForm;
