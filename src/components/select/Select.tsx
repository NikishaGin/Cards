import {ChangeEvent, useContext} from "react";
import {UniversalSelect} from "../universalSelect/UniversalSelect";
import {CardFilterContext} from "../../context/CardFilterContext";
import {authors, department} from "../../App";
import {SelectContainer, ButtonRegular} from "./SelectStyles"
import {Search} from "../search/Search";



export const Select = () => {

    const {setSearchTitle, setDepartment, setAuthor} = useContext(CardFilterContext);

    const onChangeDepartment = (event: ChangeEvent<HTMLSelectElement>) => setDepartment(event.currentTarget.value)

    const onChangeAuthor = (event: ChangeEvent<HTMLSelectElement>) => setAuthor(event.currentTarget.value)

    const clearFilters = () => {
        setSearchTitle('')
        setDepartment('')
        setAuthor('')
    }

    return (
        <SelectContainer>
            <UniversalSelect title={'Отдел'} date={department} onChange={onChangeDepartment}/>
            <UniversalSelect title={'Автор'} date={authors} onChange={onChangeAuthor}/>
            <Search/>
            <ButtonRegular onClick={clearFilters}>Очистить</ButtonRegular>
        </SelectContainer>
    );
};

