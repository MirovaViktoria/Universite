import React, { FC, useState } from 'react';
import { Rector } from '../models';
import '../../index.css';

interface EditRectorFormProps {
    data: Rector;
    updateRector: (newRector: Rector) => void;
    handleToggleEdit: () => void;
}

const EditRectorForm: FC<EditRectorFormProps> = ({
    data,
    updateRector,
    handleToggleEdit,
}) => {
    const [editRector, setEditRector] = useState<Rector>(data);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditRector({
            ...editRector,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, salary, id } = editRector;
        if (name && salary && id) {
            updateRector(editRector);
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
                value={editRector.name}
            ></input>

            <input
                className='input-edit'
                name='salary'
                type='text'
                placeholder='salary'
                onChange={handleChange}
                value={editRector.salary}
            ></input>
            <button className='btn_edit' type='submit'>
                Подтвердить
            </button>
        </form>
    );
};

export default EditRectorForm;
