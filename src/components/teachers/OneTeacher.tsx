import React, { FC, useState } from 'react';
import { Teacher } from '../models';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditTeacherForm from './EditTeacherForm';

interface OneTeacherProps {
    teacher: Teacher;
    updateTeacher: (newTeacher: Teacher) => void;
    deleteTeacher: (id: number) => void;
}

const OneTeacher: FC<OneTeacherProps> = ({
    teacher,
    updateTeacher,
    deleteTeacher,
}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    };

    const handleDelete = () => {
        deleteTeacher(teacher.id);
    };

    return (
        <div className='one_student'>
            <h2>Firstname teacher: {teacher.name}</h2>
            <h2>$: {teacher.salary}</h2>
            <div className='controls'>
                <AiFillEdit onClick={handleToggleEdit} />
                <AiFillDelete onClick={handleDelete} />
            </div>
            {edit ? (
                <EditTeacherForm
                    data={teacher}
                    updateTeacher={updateTeacher}
                    handleToggleEdit={handleToggleEdit}
                />
            ) : null}
        </div>
    );
};

export default OneTeacher;
