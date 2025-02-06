import {ChangeEvent, useContext} from "react";
import {CardFilterContext} from "../../context/CardFilterContext";
import {SearchInput} from "./SearchStyles"




export const Search = () => {

    const {searchTitle, setSearchTitle} = useContext(CardFilterContext);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTitle(event.currentTarget.value)
    }

    return (
        <SearchInput placeholder="Поиск..." value={searchTitle} onChange={onChangeHandler}/>
    );
};

