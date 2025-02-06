import {Select} from "../select/Select";
import {DisplayFilter, FilterDisplay} from "./FiltersCardsStyles";
import {useContext} from "react";
import {CardFilterContext} from "../../context/CardFilterContext";


export const FiltersCards = () => {

    const {department, setDepartment, author, setAuthor} = useContext(CardFilterContext);

    // Кнопки снятия фильтров в селектах
    const deleteDepartment = () => setDepartment('')
    const deleteAuthor = () => setAuthor('')

    return <>
        <Select/>
        <DisplayFilter>
            {department && <FilterDisplay onClick={deleteDepartment}>{department}</FilterDisplay>}
            {author && <FilterDisplay onClick={deleteAuthor}>{author}</FilterDisplay>}
        </DisplayFilter>
    </>
};

