import CardLayout, {CardData} from "./CardLayout";
import styled, {createGlobalStyle} from "styled-components";
import {useState} from "react";
import {Modalwindow} from "./components/Modalwindow.tsx";
import {v1} from "uuid";
import fileD from './assets/fileBD/ФНС.pdf'



const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        //background: whitesmoke;
        min-height: 100vh;
        background: linear-gradient(45deg, whitesmoke 0%, #cce7ff 50%, #a2c3e8 100%);
    }

    h1 {
        font-size: 2.5rem;
        font-family: 'Montserrat';
        font-weight: normal;
        color: #333;
        text-align: center;
        margin: 1.5rem 0;
    }

    h4 {
        color: #444;
        font-size: 1.5rem;
        font-family: 'Montserrat';
        font-weight: normal;
        text-align: center;
        margin: 1.5rem 0;
    }
`;

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const App = () => {

    // useEffect(() => {
    //     cardsApi.getCards()
    //         .then((response)=> console.log(response.data))
    // }, [])



    const [cards, setCards] = useState<CardData[]>([
        {
            id: v1(),
            title: 'Презентация: Будущее технологий',
            description: 'Описание',
            author: 'Баландина Ирина Михайловна',
            department: 'Отдел разработки и развития сервисов',
            image: '../src/assets/imgBD/imageBD1.png',
            file: fileD
        },
        {
            id: v1(),
            title: 'Анализ данных: Шаг за шагом',
            description: 'Описание',
            author: 'Ткач Анна Евгеньевна',
            department: 'Отдел работы с производным долгом',
            image: '../src/assets/imgBD/imageBD2.jpg',
            file: ''
        },
        {
            id: v1(),
            title: 'Управление проектами: Лучшая практика',
            description: 'Описание',
            author: 'Амелин Анатолий Сергеевич',
            department: 'Отдел кадров, профилактикикоррупционных и иных правонарушений и безопасности',
            image: '../src/assets/imgBD/imageBD3.jpg',
            file: ''
        },
        {
            id: v1(),
            title: 'Мотивация команды: Секрет успеха',
            description: 'Описание',
            author: 'Воронина Светлана Владимировна',
            department: 'Отдел информационной безопасности и информационных технологий',
            image: '../src/assets/imgBD/imageBD4.png',
            file: ''
        },
        {
            id: v1(),
            title: 'Дизайн и инновации',
            description: 'Описание',
            author: 'Истомин Сергей Юрьевич',
            department: 'Аналитический отдел',
            image: '../src/assets/imgBD/imageBD5.jpg',
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
            department: 'Отдел анализа больших данных',
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


    //добавление презентации в бд
    const addPost = ((title: string, description: string, author: string, department: string, file: File) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('department', department);
        formData.append('author', author);
        formData.append('descript', description);
        formData.append('file', file);
        console.log(title, description, author, department, file)

        fetch('http://127.0.0.1:8000/api/upload/', {
            method: 'POST',
            body: formData,
        })
    });

    return (
        <Container>
            <Modalwindow
                addPost={addPost}
                department={department}
                authors={authors}
            />
            <GlobalStyle/>
            <CardLayout cards={cards}/>
        </Container>
    )
}
