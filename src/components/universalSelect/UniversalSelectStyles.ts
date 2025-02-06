import styled from "styled-components";

export const StyledSelect = styled.select`
    appearance: none;
    background-color: transparent;
    color: #333;
    font-size: 14px;
    text-align: center;
    border: none;
    border-radius: 35px;
    cursor: pointer;
    outline: none;
    transition: all 200ms linear;
    width: 100px;
    font-family: 'Montserrat';

    &:hover {
        color: #ffffff;
        background: linear-gradient(45deg, #b7d9f2 0%, #94c6e6 50%, #74accf 100%);
    }

    &:active {
        background-color: #d5d6d6;
    }
`;
export const StyledOption = styled.option`
    color: #202129;
    background-color: #f2f2f2;
    font-family: 'Montserrat';
`;