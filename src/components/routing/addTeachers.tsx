import React, { FC, useEffect, useState } from 'react';
import { Teacher } from '../models';
import '../../index.css';

import AddTeachersForm from '../teachers/AddTeacher';

//!!!!!!!!!!!!!!!!!
const AddTeacher: FC = () => {
    const [teachersList, setTeachersList] = useState<Teacher[]>([]);

    //!!!LocalStorage Teachers

    useEffect(() => {
        const items = localStorage.getItem('teachersList')!;
        setTeachersList(JSON.parse(items));
    }, [setTeachersList]);

    useEffect(() => {
        const json = JSON.stringify(teachersList);
        localStorage.setItem('teachersList', json);
    }, [teachersList]);

    //!!!!! ADD, DELETE, UPDATE TEACHERS

    const addTeacher = (newTeacher: Teacher) => {
        setTeachersList([...teachersList, newTeacher]);
    };

    return (
        <div className='Home'>
            <div className='employee'>
                <h2 className='student_title'>Список работников</h2>
                <div className='teachers'>
                    <AddTeachersForm addTeacher={addTeacher} />
                </div>
            </div>
        </div>
    );
};

export default AddTeacher;
