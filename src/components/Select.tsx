import styled from "styled-components";

const SelectContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`

const StyledSelect = styled.select`
  margin-right: 20px;
  appearance: none;
  background-color: transparent;
  color: #333;
  font-size: 14px;
  padding: 12px 24px;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: #b5b5b5;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

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

const StyledOption = styled.option`
  color: #202129;
  background-color: #f2f2f2;
`;

export const Select = () => {
    return (
        <SelectContainer>
            <StyledSelect>
                <StyledOption value="option1">Дата публикации</StyledOption>
                <StyledOption value="option1">Дата публикации</StyledOption>
                <StyledOption value="option1">Дата публикации</StyledOption>
                <StyledOption value="option1">Дата публикации</StyledOption>
                <StyledOption value="option1">Дата публикации</StyledOption>
                <StyledOption value="option1">Дата публикации</StyledOption>
                <StyledOption value="option1">Дата публикации</StyledOption>
            </StyledSelect>
            <StyledSelect>
                <StyledOption value="option1">Отдел</StyledOption>
            </StyledSelect>
            <StyledSelect>
                <StyledOption value="option1">Автор</StyledOption>
            </StyledSelect>
            <ButtonRegular>Очистить</ButtonRegular>
        </SelectContainer>
    );
};

