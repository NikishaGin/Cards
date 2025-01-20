import CardLayout, {CardData} from "./CardLayout";
import styled, {createGlobalStyle} from "styled-components";
import {useState} from "react";
import {Modalwindow} from "./components/Modalwindow.tsx";
import {v1} from "uuid";


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        background: whitesmoke;
        min-height: 100vh;
    }

    h1 {
        font-size: 2.5rem;
        font-family: 'Montserrat';
        font-weight: normal;
        color: #333;
        text-align: center;
        margin: 2rem 0;
    }

    h4 {
        color: #444;
        font-size: 1.5rem;
        font-family: 'Montserrat';
        font-weight: normal;
        text-align: center;
        margin: 2rem 0;
    }
`;

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const App = () => {

    const [cards, setCards] = useState<CardData[]>([
        {
            id: v1(),
            title: 'Презентация: Будущее технологий',
            description: 'Описание',
            author: 'Баландина Ирина Михайловна',
            department: 'Отдел разработки и развития сервисов',
            image: '../src/assets/imgBD/imageBD1.png',
            file: '../src/assets/imgBD/FNS.pdf'
        },
        {
            id: v1(),
            title: 'Анализ данных: Шаг за шагом',
            description: 'Описание',
            author: 'Ткач Анна Евгеньевна',
            department: 'Отдел работы с производным долгом',
            image: '../src/assets/imgBD/imageBD2.png',
            file: ''
        },
        {
            id: v1(),
            title: 'Управление проектами: Лучшая практика',
            description: 'Описание',
            author: 'Амелин Анатолий Сергеевич',
            department: 'Отдел кадров, профилактикикоррупционных и иных правонарушений и безопасности',
            image: '../src/assets/imgBD/imageBD9.jpg',
            file: ''
        },
        {
            id: v1(),
            title: 'Мотивация команды: Секрет успеха',
            description: 'Описание',
            author: 'Воронина Светлана Владимировна',
            department: 'Отдел информационной безопасности и информационных технологий',
            image: '../src/assets/imgBD/imageBD4.jpg',
            file: ''
        },
        {
            id: v1(),
            title: 'Дизайн и инновации',
            description: 'Описание',
            author: 'Воронина Светлана Владимировна',
            department: 'Отдел кадров, профилактикикоррупционных и иных правонарушений и безопасности',
            image: '../src/assets/imgBD/imageBD5.png',
            file: ''
        },
        {
            id: v1(),
            title: 'Стратегии роста компании',
            description: 'Описание',
            author: 'Затеев Андрей Николаевич',
            department: 'Отдел сопровождения ЕНС',
            image: '../src/assets/imgBD/imageBD6.jpg',
            file: ''
        },
        {
            id: v1(),
            title: 'Современные тренды UX/UI',
            description: 'Описание',
            author: 'Шувалов Михаил Юрьевичв',
            department: 'Отдел цифоровой трансформации',
            image: '../src/assets/imgBD/imageBD7.jpg',
            file: ''
        },
        {
            id: v1(),
            title: 'Кибербезопасность: Основы',
            description: 'Описание',
            author: 'Либик Елена Вячеславовна',
            department: 'Отдел обеспечения',
            image: '../src/assets/imgBD/imageBD8.jpg',
            file: ''
        },
        {
            id: v1(),
            title: 'Эффективная коммуникация',
            description: 'Описание',
            author: 'Потапова Светлана Михайловна',
            department: 'Общий отдел',
            image: '../src/assets/imgBD/imageBD9.jpg',
            file: ''
        },
        {
            id: v1(),
            title: 'Психология лидерства',
            description: 'Описание',
            author: 'Зарубина Анна Витальевна',
            department: 'Отдел сопровождения ЕНС',
            image: '../src/assets/imgBD/imageBD10.jpeg',
            file: ''
        },

    ])
    const department = [
        {name: 'Общий отдел'},
        {name: 'Отдел обеспечения'},
        {name: 'Отдел цифоровой трансформации'},
        {name: 'Отдел сопровождения ЕНС'},
        {name: 'Отдел анализа больших данных'},
        {name: 'Отдел информационной безопасности и информационных технологий'},
        {name: 'Аналитический отдел'},
        {name: 'Отдел разработки и развития сервисов'},
        {name: 'Отдел работы с производным долгом'},
        {name: 'Отдел кадров, профилактикикоррупционных и иных правонарушений и безопасности'},
    ]
    const authors = [
        {name: 'Баландина Ирина Михайловна'},
        {name: 'Ткач Анна Евгеньевна'},
        {name: 'Амелин Анатолий Сергеевич'},
        {name: 'Воронина Светлана Владимировна'},
        {name: 'Истомин Сергей Юрьевич'},
        {name: 'Затеев Андрей Николаевич'},
        {name: 'Шувалов Михаил Юрьевич'},
        {name: 'Либик Елена Вячеславовна'},
        {name: 'Потапова Светлана Михайловна'},
        {name: 'Зарубина Анна Витальевна'},
    ]


    // фильтрация карточек зависит от значения состояния поиска
    const [searchTitle, setSearchTitle] = useState<string>('');
    const [selectedDepartment, setSelectedDepartment] = useState<string>('');
    const [selectedAuthor, setSelectedAuthor] = useState<string>('');

    const handleSearchChange = (title: string) => {
        setSearchTitle(title.toLowerCase());
    };

    const handleDepartmentChange = (department: string) => {
        setSelectedDepartment(department.toLowerCase());
    };

    const handleAuthorChange = (author: string) => {
        setSelectedAuthor(author.toLowerCase());
    };
    const filteredCards = cards.filter(card => {
        return (
            (searchTitle === '' || card.title.toLowerCase().includes(searchTitle)) &&
            (selectedDepartment === '' || card.department.toLowerCase().includes(selectedDepartment)) &&
            (selectedAuthor === '' || card.author.toLowerCase().includes(selectedAuthor))
        );
    });


    const test = (DepartmentValue: string, AuthorValue: string) => {
        setSelectedDepartment(DepartmentValue)
        setSelectedAuthor(AuthorValue)
    }

    //добавление презентации в бд
    const addPost = (title: string, description: string, author: string, department: string, image: string, file: File | null) => {
        const newPost = {
            id: v1(),
            title,
            description,
            author,
            department,
            image,
            file
        }
        setCards([newPost, ...cards])
    }

    return (
        <Container>
            <Modalwindow
                addPost={addPost}
                department={department}
                authors={authors}
            />
            <GlobalStyle/>
            <CardLayout cards={filteredCards}
                        handleSearchChange={handleSearchChange}
                        handleDepartmentChange={handleDepartmentChange}
                        handleAuthorChange={handleAuthorChange}
                        test={test}
            />
        </Container>
    )
}
