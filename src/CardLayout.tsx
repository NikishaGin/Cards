import styled from "styled-components";
import {Heading} from "./components/Heading";
import {Search} from "./components/Search";
import {useState} from "react";
import {Pagination} from "./components/Pagination";
import {Select} from "./components/Select";


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 280px);
  gap: 25px;
  margin: 2rem 0;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;
const CardTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.25rem;
  color: #333;
`;
const CardDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #666;
`;

const DisplayFilter = styled.div`
  display: flex;
  gap: 20px;
`
const FilterDisplay = styled.span`
  display: flex;
  gap: 10px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  border-radius: 35px;
  box-shadow: 0px 0px 15px #e4e4e4;
  color: #202129;
  background-color: #e1e2e2;
`


export type CardData = {
    id: number;
    title: string;
    description: string;
    author: string
    department: string
}

type CardLayoutProps = {
    cards: CardData[];
    handleSearchChange: (title: string) => void
    handleDepartmentChange: (department: string) => void
    handleAuthorChange: (author: string) => void
}

const CardLayout = (props: CardLayoutProps) => {

    // currentPage — номер текущей страницы (начальное значение: 1).
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8; // Количество элементов на одной странице

    // Рассчитываем общее количество страниц для пагинации,
    const totalPages = Math.ceil(props.cards.length / pageSize);

    // Функция для получения карточек текущей страницы
    const getCurrentPageCards = () => {
        const startIndex = (currentPage - 1) * pageSize;
        return props.cards.slice(startIndex, startIndex + pageSize);
    };


    const [departmentValue, setDepartmentValue] = useState("");
    const [authorValue, setAuthorValue] = useState("");


    return (
        <>
            <Heading/>
            <Search handleSearchChange={props.handleSearchChange}/>
            <Select setDepart={setDepartmentValue}
                    setAuthor={setAuthorValue}
                    handleDepartmentChange={props.handleDepartmentChange}
                    handleAuthorChange={props.handleAuthorChange}
            />
            <DisplayFilter>
                {departmentValue && <FilterDisplay>{departmentValue}</FilterDisplay>}
                {authorValue && <FilterDisplay>{authorValue}</FilterDisplay>}
                <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
            </DisplayFilter>
            <GridContainer>
                {getCurrentPageCards().map((card) => (
                    <Card key={card.id}>
                        <CardTitle>{card.title}</CardTitle>
                        <button>Скачать</button>
                        {/*<CardDescription>{card.description}</CardDescription>*/}
                    </Card>
                ))}
            </GridContainer>
        </>
    );
};

export default CardLayout;