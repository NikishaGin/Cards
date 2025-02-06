import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 200px);
    gap: 25px;
    margin: 2rem 0;
    perspective: 1000px; /* Задаёт глубину перспективы */
`;
