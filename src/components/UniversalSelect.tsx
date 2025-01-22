import styled from "styled-components";
import {ChangeEvent} from "react";


const StyledSelect = styled.select`
    appearance: none;
    background-color: transparent;
    color: #333;
    font-size: 14px;
    text-align: center;
    border: none;
    border-radius: 35px;
    cursor: pointer;
    outline: none;
    //transition: border-color 0.3s, box-shadow 0.3s;
    transition: all 200ms linear;
    width: 100px;
    font-family: 'Montserrat';

    &:hover {
        color: #ffffff;
        background: linear-gradient(45deg, #b7d9f2 0%, #94c6e6 50%, #74accf 100%);
        //border-color: #b5b5b5;
        //box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
    }

    &:active {
        background-color: #d5d6d6;
    }
`;
const StyledOption = styled.option`
    color: #202129;
    background-color: #f2f2f2;
    font-family: 'Montserrat';
`;


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

