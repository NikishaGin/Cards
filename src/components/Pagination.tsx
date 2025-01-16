import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`

type PropsType = {
    currentPage: number
    totalPages: number
    setCurrentPage: (currentPage) => void
}

export const Pagination = ({currentPage, totalPages, setCurrentPage }: PropsType ) => {

    // Обработчик для кнопки "Назад"
    const handlePrev = () => currentPage > 1 && setCurrentPage((currentPage) => currentPage - 1);

    // Обработчик для кнопки "Далее"
    const handleNext = () => currentPage < totalPages && setCurrentPage((currentPage) => currentPage + 1);

    return (
        <StyledPagination>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="20"
                 height="20"
                 viewBox="0 0 16 16"
                 cursor={'pointer'}
                 onClick={handlePrev}
            >
                <path fillRule="evenodd"
                      d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"/>
                <path fillRule="evenodd"
                      d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
            </svg>
            <span>{currentPage} из {totalPages}</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="20"
                 height="20"
                 viewBox="0 0 16 16"
                 cursor={'pointer'}
                 onClick={handleNext}
            >
                <path fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                <path fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
            </svg>
        </StyledPagination>
    );
};

