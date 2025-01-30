import styled from "styled-components";
import {useEffect, useState} from "react";
import {Pagination} from "./components/Pagination";
import {Select} from "./components/Select"
import eyeIcon from './assets/eye-fill.svg'
import downIcon from './assets/download.svg'
import axios from "axios";


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 200px);
    gap: 25px;
    margin: 2rem 0;
    perspective: 1000px; /* Задаёт глубину перспективы */
`;
const Card = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
    background: #cedce7;
    transition: transform 0.3s ease, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px); /* Поднимает карточку вверх */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Увеличивает тень */
    }
`;
const BackgroundImage = styled.img`
    position: absolute; /* Абсолютное позиционирование */
    top: 0;
    left: 0;
    width: 100%; /* Занимает всю ширину контейнера */
    height: 100%; /* Занимает всю высоту контейнера */
    object-fit: cover; /* Изображение полностью заполняет контейнер */
    object-position: center; /* Центрирует изображение внутри контейнера */
    z-index: 1; /* Располагается ниже текста */
`;
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Полупрозрачное затемнение */
    z-index: 2; /* Между изображением и текстом */
`;
const CardTitle = styled.h1`
    position: relative;
    z-index: 3; /* Располагается выше изображения и затемнения */
    padding: 10px;
    border-radius: 8px;
    margin: auto;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    font-size: 24px;
    font-weight: 200;
    color: whitesmoke;
    text-shadow: 0px 0px 5px black;
`;
const ButtonDownload = styled.div`
    position: absolute;
    bottom: 10px;
    z-index: 3;
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    background-color: #8bc8f7;
    cursor: pointer;
    outline: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease, left 0.3s;
    box-shadow: 0px 0px 15px #e4e4e4;
    left: -300px;

    ${Card}:hover & {
        left: 10px;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
`;
const ButtonPreview = styled.div`
    position: absolute;
    bottom: 10px;
    z-index: 3;
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    background-color: #8bc8f7;
    cursor: pointer;
    outline: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease, right 0.3s;
    box-shadow: 0px 0px 15px #e4e4e4;
    right: -300px;

    ${Card}:hover & {
        right: 10px;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
`
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
    color: #202129;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    outline: 1px dotted #808080;
    background: transparent;
`


export type CardData = {
    id: string;
    title: string;
    description: string;
    image: string | undefined;
    file: File;
    department: string;
    author: string
}

type CardLayoutProps = {
    cards: CardData [];
    addPost: (title: string, description: string, author: string, department: string, file: File) => void
}

const CardLayout = (props: CardLayoutProps) => {


    const [items, setItems] = useState<CardData[]>([]);



    //запрос карточек из БД
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/items');
                if (!response.ok) {
                    throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setItems(data);
            } catch (error:any) {
                console.error('Ошибка загрузки данных:', error);
            }
        };
        fetchItems();
    }, [props.addPost]);


















// фильтрация карточек зависит от значения состояния поиска
    const [searchTitle, setSearchTitle] = useState<string>('');
    const [selectedDepartment, setSelectedDepartment] = useState<string>('');
    const [selectedAuthor, setSelectedAuthor] = useState<string>('');

    const handleSearchChange = (title: string) => setSearchTitle(title.toLowerCase());
    const handleDepartmentChange = (department: string) => setSelectedDepartment(department.toLowerCase());
    const handleAuthorChange = (author: string) => setSelectedAuthor(author.toLowerCase());

    const filteredCards = items.filter(card => {
        return (
            (searchTitle === '' || card.title.toLowerCase().includes(searchTitle)) &&
            (selectedDepartment === '' || card.department.toLowerCase().includes(selectedDepartment)) &&
            (selectedAuthor === '' || card.author.toLowerCase().includes(selectedAuthor))
        );
    });

    // Кнопки снятия фильтров в селектах
    const deleteDepartmentFilter = () => setSelectedDepartment('')
    const deleteAuthorFilter = () => setSelectedAuthor('')


    // Пагинация
    // currentPage — номер текущей страницы (начальное значение: 1).
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8; // Количество элементов на одной странице

    // Рассчитываем общее количество страниц для пагинации,
    const totalPages = Math.ceil(items.length / pageSize);

    // Функция для получения карточек текущей страницы
    const getCurrentPageCards = () => {
        const startIndex = (currentPage - 1) * pageSize;
        return filteredCards.slice(startIndex, startIndex + pageSize);
    };


    const handleDownload = (id: string) => {
        fetch(`http://127.0.0.1:8000/api/download/${id}/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Ошибка при скачивании файла");
                }
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `presentation_${id}.pdf`;
                document.body.appendChild(a);
                a.click();
                a.remove();
            })
            .catch(error => console.error('Ошибка:', error));
    };


    return (
        <>
            {/*<Heading/>*/}
            {/*<Search handleSearchChange={handleSearchChange}*/}
            {/*        searchTitle={searchTitle}*/}
            {/*        setSearchTitle={setSearchTitle}*/}
            {/*/>*/}
            <Select handleDepartmentChange={handleDepartmentChange}
                    handleAuthorChange={handleAuthorChange}
                    handleSearchChange={handleSearchChange}
                    setSearchTitle={setSearchTitle}
                    searchTitle={searchTitle}
            />
            <DisplayFilter>
                {selectedDepartment &&
                    <FilterDisplay onClick={deleteDepartmentFilter}>{selectedDepartment}</FilterDisplay>}
                {selectedAuthor && <FilterDisplay onClick={deleteAuthorFilter}>{selectedAuthor}</FilterDisplay>}
                <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
            </DisplayFilter>
            <GridContainer>
                {getCurrentPageCards().map((card) => (

                    <Card key={card.id}>
                        <BackgroundImage src={card.image}/>
                        <Overlay/>
                        <CardTitle>{card.title}</CardTitle>

                        <ButtonDownload onClick={() =>
                        {handleDownload(card.id)}}>
                            <img src={downIcon}/>
                        </ButtonDownload>

                        <ButtonPreview onClick={() => {
                            if (typeof card.file === 'string'){
                                window.open(card.file, '_blank');
                            } else {
                                const url = URL.createObjectURL(card.file);
                                window.open(url, '_blank');
                                URL.revokeObjectURL(url);
                            }
                        }}><img src={eyeIcon}/></ButtonPreview>
                    </Card>
                ))}
            </GridContainer>
        </>
    );
};

export default CardLayout;