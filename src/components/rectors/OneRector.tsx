import React, { FC, useState } from 'react';
import { Rector } from '../models';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditRectorForm from '../rectors/EditRectorForm';

interface OneRectorProps {
    rector: Rector;
    updateRector: (newRector: Rector) => void;
    deleteRector: (id: number) => void;
}

const OneRector: FC<OneRectorProps> = ({
    rector,
    updateRector,
    deleteRector,
}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    };

    const handleDelete = () => {
        deleteRector(rector.id);
    };

    return (
        <div className='one_student'>
            <h2>Firstname rector: {rector.name}</h2>
            <h2>$: {rector.salary}</h2>
            <div className='controls'>
                <AiFillEdit onClick={handleToggleEdit} />
                <AiFillDelete onClick={handleDelete} />
            </div>
            {edit ? (
                <EditRectorForm
                    data={rector}
                    updateRector={updateRector}
                    handleToggleEdit={handleToggleEdit}
                />
            ) : null}
        </div>
    );
};

export default OneRector;
