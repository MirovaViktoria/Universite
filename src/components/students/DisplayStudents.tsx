import React, { FC, useState } from 'react';
import { Student, Teacher } from '../models';
import OneStudent from './OneStudents';

interface DisplayStudentsProps {
    teacherList: Teacher[];
    studentsList: Student[];
    updateStudent: (newStudent: Student) => void;
    deleteStudent: (id: number) => void;
}

const DisplayStudents: FC<DisplayStudentsProps> = ({
    studentsList,
    updateStudent,
    deleteStudent,
    teacherList,
}) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className='container-students'>
            <div className='search_form'>
                <svg
                    className='search_icon'
                    enableBackground='new 0 0 32 32'
                    id='EditableLine'
                    version='1.1'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <circle
                        cx='14'
                        cy='14'
                        fill='none'
                        id='XMLID_42_'
                        r='9'
                        stroke='#000000'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeMiterlimit='10'
                        strokeWidth='2'
                    />
                    <line
                        fill='none'
                        id='XMLID_44_'
                        stroke='#000000'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeMiterlimit='10'
                        strokeWidth='2'
                        x1='27'
                        x2='20.366'
                        y1='27'
                        y2='20.366'
                    />
                </svg>
                <input
                    className='search_input'
                    placeholder='Поиск...'
                    onChange={(e) => setSearchValue(e.target.value)}
                ></input>
            </div>
            {studentsList
                .filter((name) =>
                    name.firstName.toLowerCase().includes(searchValue)
                )
                .map((student) => {
                    return (
                        <OneStudent
                            key={student.id}
                            teacherList={teacherList}
                            deleteStudent={deleteStudent}
                            updateStudent={updateStudent}
                            student={student}
                        />
                    );
                })}
        </div>
    );
};

export default DisplayStudents;
