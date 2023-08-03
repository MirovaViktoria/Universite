import React, { FC, useState } from 'react';
import { Teacher } from '../models';
import { BiDollar } from 'react-icons/bi';
import '../../index';

interface AddTeachersFormProps {
    addTeacher: (newTeacher: Teacher) => void;
}

const initialState: Teacher = {
    name: '',
    salary: 0,
    id: 0,
};

const AddTeachersForm: FC<AddTeachersFormProps> = ({ addTeacher }) => {
    const [newTeacher, setNewTeacher] = useState<Teacher>(initialState);
    const [add, setAdd] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setAdd(!add);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewTeacher({
            ...newTeacher,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, salary } = newTeacher;
        if (name && salary) {
            addTeacher({
                name,
                salary: salary,
                id: Date.now(),
            });
            handleToggleEdit();
            setNewTeacher(initialState);
        }
    };

    return (
        <form className='submit-form' onSubmit={handleSubmit}>
            <button
                className='btn_hiring'
                onClick={handleToggleEdit}
                type='submit'
            >
                Нанять учителя
            </button>
            {add ? (
                <div className='form_add'>
                    <input
                        className='input-submit'
                        name='name'
                        type='text'
                        placeholder='name'
                        onChange={handleChange}
                        value={newTeacher.name}
                    ></input>
                    <BiDollar className='dollar' />
                    <input
                        className='input-submit'
                        name='salary'
                        type='text'
                        placeholder='salary'
                        onChange={handleChange}
                        value={newTeacher.salary}
                    ></input>
                    <button className='btn_submit' type='submit'>
                        Добавить
                    </button>
                </div>
            ) : null}
        </form>
    );
};

export default AddTeachersForm;
