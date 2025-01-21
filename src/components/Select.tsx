import styled from "styled-components";
import {ChangeEvent} from "react";
import {UniversalSelect} from "./UniversalSelect";
import {Search} from "./Search";

const SelectContainer = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  gap: 50px;
`

const ButtonRegular = styled.button`
  margin-left: auto;
  color: #5c6c7c;
  background: linear-gradient(45deg, #b7d9f2 0%, #94c6e6 50%, #74accf 100%);
  padding: 12px 24px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  border-radius: 35px;
  transition: all 200ms linear;
  box-shadow: 0px 0px 15px #e4e4e4;


  &:hover {
    color: #ffffff;
    background: linear-gradient(45deg, #8bc8f7 0%, #72b0e3 50%, #4d94b7 100%);
  }

  &:active {
    background-color: #d5d6d6;
  }

  &:focus {
    outline: 1px dotted #959595;
  }
`;


type PropsType = {
    handleDepartmentChange: (department: string) => void
    handleAuthorChange: (author: string) => void
    handleSearchChange: (title: string) => void
    setSearchTitle: (title: string) => void
    searchTitle: string
}

export const Select = (props: PropsType) => {

    const departSelect = [
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

    const authorsSelect = [
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
        props.handleDepartmentChange(event.currentTarget.value)
    };

    const onChangeAuthor = (event: ChangeEvent<HTMLSelectElement>) => {
        props.handleAuthorChange(event.currentTarget.value)
    };
    const clearFilters = () => {
        props.setSearchTitle('')
        props.handleSearchChange('')
        props.handleAuthorChange('')
        props.handleDepartmentChange('')
    }


    return (
        <SelectContainer>
            <UniversalSelect title={'Отдел'} date={departSelect} onChange={onChangeDepartment}/>
            <UniversalSelect title={'Автор'} date={authorsSelect} onChange={onChangeAuthor}/>
            <Search handleSearchChange={props.handleSearchChange}
                    searchTitle={props.searchTitle}
                    setSearchTitle={props.setSearchTitle}
            />
            <ButtonRegular onClick={clearFilters}>Очистить</ButtonRegular>
        </SelectContainer>
    );
};

