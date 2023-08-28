import React, { FC } from 'react';
import { Rector } from '../models';
import OneRector from './OneRector';

interface DisplayRectorsProps {
    rectorsList: Rector[];
    updateRector: (newRector: Rector) => void;
    deleteRector: (id: number) => void;
}

const DisplayRectors: FC<DisplayRectorsProps> = ({
    rectorsList,
    updateRector,
    deleteRector,
}) => {
    return (
        <div className='container'>
            {rectorsList.map((rector) => {
                return (
                    <OneRector
                        key={rector.id}
                        deleteRector={deleteRector}
                        updateRector={updateRector}
                        rector={rector}
                    />
                );
            })}
        </div>
    );
};

export default DisplayRectors;
