import styled from "styled-components";

export const SelectContainer = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  gap: 50px;
`

export const ButtonRegular = styled.button`
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
    font-family: 'Montserrat';


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