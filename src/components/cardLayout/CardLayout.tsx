import {useContext, useEffect, useState} from "react";
import {Pagination} from "../Pagination";
import {Cards} from "../cards/Cards"
import {GridContainer} from './CardLayoutStyles'
import {FiltersCards} from "../filtersCards/FiltersCards";
import {CardFilterContext} from "../../context/CardFilterContext";
import {cardsApi} from "../../api";

export type CardData = {
    id: string;
    title: string;
    author__fio: string
    image_name: string | undefined;
    file: File;
    department: string;
}

type CardLayoutProps = {
    addPost: (title: string, description: string, author: string, department: string, file: File) => void
}

const CardLayout = (props: CardLayoutProps) => {

    const [cards, setCards] = useState<CardData[]>([]);
    const {searchTitle, department, author} = useContext(CardFilterContext);

    //запрос карточек из БД
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const res = await cardsApi.getCards();
                setCards(res.data);
            } catch (error) {
                console.error('Ошибка загрузки карточек:', error);
            }
        };
        fetchCards();
    }, [props.addPost]);


    // Фильтрация карточек
    const filteredCards = cards.filter(card => {
        return (
            (card.title.toLowerCase().includes(searchTitle)) &&
            (card.department.includes(department)) &&
            (card.author__fio.includes(author))
        );
    });

    // Пагинация
    // currentPage — номер текущей страницы (начальное значение: 1).
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8; // Количество элементов на одной странице

    // Рассчитываем общее количество страниц для пагинации,
    const totalPages = Math.ceil(cards.length / pageSize);

    // Функция для получения карточек текущей страницы
    const getCurrentPageCards = () => {
        const startIndex = (currentPage - 1) * pageSize;
        return filteredCards.slice(startIndex, startIndex + pageSize);
    };

    return (
        <div>
            <FiltersCards/>
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
            <GridContainer>
                {getCurrentPageCards().map((card) => {
                    return <Cards key={card.id} id={card.id} title={card.title} img={card.image_name}/>
                })}
            </GridContainer>
        </div>
    );
};

export default CardLayout;