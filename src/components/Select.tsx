import styled from "styled-components";
import {ChangeEvent} from "react";
import {UniversalSelect} from "./UniversalSelect";

const SelectContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`
const ButtonRegular = styled.button`
  margin-left: auto;
  color: #333;
  background-color: transparent;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  border-radius: 35px;
  transition: all 200ms linear;
  box-shadow: 0px 0px 15px #e4e4e4;
  

  &:hover {
    color: #202129;
    background-color: #e1e2e2;
  }

  &:active {
    background-color: #d5d6d6;
  }

  &:focus {
    outline: 1px dotted #959595;
  }
`;


type PropsType = {
    setDepart: (departmentValue: string) => void
    setAuthor: (authorValue: string) => void
    handleDepartmentChange: (department: string) => void
    handleAuthorChange: (author: string) => void

}

export const Select = (props: PropsType) => {

    const department = [
        {name: 'Общий отдел'},
        {name: 'Отдел обеспечения'},
        {name: 'Отдел цифоровой трансформации'},
        {name: 'Отдел сопровождения ЕНС'},
        {name: 'Отдел анализа больших данных'},
        {name: 'Отдел информационной безопасности и информационных технологий'},
        {name: 'Аналитический отдел'},
        {name: 'Отдел разработки и развития сервисов'},
        {name: 'Отдел работы с производным долгом'},
        {name: 'Отдел кадров, профилактикикоррупционных и иных правонарушений и безопасности'},
    ]

    const authors = [
        {name: 'Баландина Ирина Михайловна'},
        {name: 'Ткач Анна Евгеньевна'},
        {name: 'Амелин Анатолий Сергеевич'},
        {name: 'Воронина Светлана Владимировна'},
        {name: 'Истомин Сергей Юрьевич'},
        {name: 'Затеев Андрей Николаевич'},
        {name: 'Шувалов Михаил Юрьевич'},
        {name: 'Либик Елена Вячеславовна'},
        {name: 'Потапова Светлана Михайловна'},
        {name: 'Зарубина Анна Витальевна'},
    ]


    const onChangeDepartment = (event: ChangeEvent<HTMLSelectElement>) => {
        props.setDepart(event.currentTarget.value);
        props.handleDepartmentChange(event.currentTarget.value)
    };

    const onChangeAuthor = (event: ChangeEvent<HTMLSelectElement>) => {
        props.setAuthor(event.currentTarget.value);
        props.handleAuthorChange(event.currentTarget.value)
    };

    return (
        <SelectContainer>
            <UniversalSelect title={'Отдел'} date={department} onChange={onChangeDepartment}/>
            <UniversalSelect title={'Автор'} date={authors} onChange={onChangeAuthor}/>
            <ButtonRegular>Очистить</ButtonRegular>
        </SelectContainer>
    );
};

