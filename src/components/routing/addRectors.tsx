import React, { FC, useEffect, useState } from 'react';
import { Rector } from '../models';
import '../../index.css';

import AddRectorsForm from '../rectors/AddRectors';

//!!!!!!!!!!!!!!!!!
const AddRectors: FC = () => {
    const [rectorsList, setRectorsList] = useState<Rector[]>([]);

    //!!!LocalStorage Rector

    useEffect(() => {
        const items = localStorage.getItem('rectorsList')!;
        setRectorsList(JSON.parse(items));
    }, [setRectorsList]);

    useEffect(() => {
        const json = JSON.stringify(rectorsList);
        localStorage.setItem('rectorsList', json);
    }, [rectorsList]);

    //!!!!! ADD
    const addRector = (newRector: Rector) => {
        setRectorsList([...rectorsList, newRector]);
    };

    //!!!

    return (
        <div className='Home'>
            <div className='employee'>
                <div className='add-form'>
                    <AddRectorsForm addRector={addRector} />
                </div>
            </div>
        </div>
    );
};

export default AddRectors;
