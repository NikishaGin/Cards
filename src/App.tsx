import CardLayout from "./components/cardLayout/CardLayout";
import styled, {createGlobalStyle} from "styled-components";
import {useState} from "react";
import {Modalwindow} from "./components/Modalwindow.tsx";
import {CardFilterProvider} from "./context/CardFilterContext";



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

export const department = [
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
export const authors = [
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

export const App = () => {

    const [image, setImage] = useState<File | null>(null); //файл презентация
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const addPost = async (title: string, description: string, author: string, department: string, file: File) => {
        if (!image) {
            setUploadStatus('Выберите файл!');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('descript', description);
        formData.append('author', author);
        formData.append('department', department);
        formData.append('image', image);
        formData.append('file', file);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/upload/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setUploadStatus('Файл успешно загружен');
                console.log('Файл успешно загружен:', data);
            } else {
                setUploadStatus('Ошибка при загрузке файла');
                console.error('Ошибка при загрузке файла');
            }
        } catch (error) {
            setUploadStatus('Произошла ошибка');
            console.error('Ошибка:', error);
        }
    };


    return (
        <Container>
            <Modalwindow
                addPost={addPost}
                department={department}
                authors={authors}

                image={image}
                setImage={setImage}
                uploadStatus={uploadStatus}
                setUploadStatus={setUploadStatus}
            />
            <GlobalStyle/>
            <CardFilterProvider>
                <CardLayout addPost={addPost}/>
            </CardFilterProvider>
        </Container>
    )
}
