import {ChangeEvent} from "react";
import {StyledSelect, StyledOption} from "./UniversalSelectStyles"


type ArrayPropsType = {
    name: string
}

type PropsType = {
    date: ArrayPropsType []
    title: string
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const UniversalSelect = (props: PropsType ) => {
    return (
        <StyledSelect onChange={props.onChange} value={''}>
            <StyledOption value={''}>{props.title}</StyledOption>
            {props.date.map((el, index)=> {
                return <StyledOption key={index}>
                    {el.name}
                </StyledOption>
            })}
        </StyledSelect>
    );
};

