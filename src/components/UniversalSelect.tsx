import styled from "styled-components";
import {ChangeEvent} from "react";


const StyledSelect = styled.select`
  margin-right: 20px;
  appearance: none;
  background-color: transparent;
  color: #333;
  font-size: 14px;
  text-align: center;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  width: 100px;
  

  &:hover {
    border-color: #b5b5b5;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
  }
`;
const StyledOption = styled.option`
  color: #202129;
  background-color: #f2f2f2;
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

