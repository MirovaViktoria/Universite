import React, { FC, useState } from 'react';
import { Rector } from '../models';
import { BiDollar } from 'react-icons/bi';
import '../../index';

interface AddRectorsFormProps {
    addRector: (newRector: Rector) => void;
}

const initialState: Rector = {
    name: '',
    salary: 0,
    id: 0,
};

const AddRectorsForm: FC<AddRectorsFormProps> = ({ addRector }) => {
    const [newRector, setNewRector] = useState<Rector>(initialState);
    const [add, setAdd] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setAdd(!add);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewRector({
            ...newRector,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, salary } = newRector;
        if (name && salary) {
            addRector({
                name,
                salary: salary,
                id: Date.now(),
            });
            handleToggleEdit();
            setNewRector(initialState);
        }
    };

    return (
        <form className='submit-form' onSubmit={handleSubmit}>
            <button
                className='btn_hiring'
                onClick={handleToggleEdit}
                type='submit'
            >
                Нанять ректора
            </button>
            {add ? (
                <div className='form_add'>
                    <input
                        className='input-submit'
                        name='name'
                        type='text'
                        placeholder='name'
                        onChange={handleChange}
                        value={newRector.name}
                    ></input>
                    <BiDollar className='dollar' />
                    <input
                        className='input-submit'
                        name='salary'
                        type='text'
                        placeholder='salary'
                        onChange={handleChange}
                        value={newRector.salary}
                    ></input>
                    <button className='btn_submit' type='submit'>
                        Добавить
                    </button>
                </div>
            ) : null}
        </form>
    );
};
export default AddRectorsForm;
