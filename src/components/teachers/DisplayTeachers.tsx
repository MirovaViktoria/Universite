import React, { FC } from 'react';
import { Teacher } from '../models';
import OneTeacher from './OneTeacher';

interface DisplayTeachersProps {
    teachersList: Teacher[];
    updateTeacher: (newTeacher: Teacher) => void;
    deleteTeacher: (id: number) => void;
}

const DisplayTeachers: FC<DisplayTeachersProps> = ({
    teachersList,
    updateTeacher,
    deleteTeacher,
}) => {
    return (
        <div className='container-students'>
            {teachersList.map((teacher) => {
                return (
                    <OneTeacher
                        key={teacher.id}
                        deleteTeacher={deleteTeacher}
                        updateTeacher={updateTeacher}
                        teacher={teacher}
                    />
                );
            })}
        </div>
    );
};

export default DisplayTeachers;
