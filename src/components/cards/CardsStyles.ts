import styled from "styled-components";

export const Card = styled.div`
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

export const BackgroundImage = styled.img`
    position: absolute; /* Абсолютное позиционирование */
    top: 0;
    left: 0;
    width: 100%; /* Занимает всю ширину контейнера */
    height: 100%; /* Занимает всю высоту контейнера */
    object-fit: cover; /* Изображение полностью заполняет контейнер */
    object-position: center; /* Центрирует изображение внутри контейнера */
    z-index: 1; /* Располагается ниже текста */
`;
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Полупрозрачное затемнение */
    z-index: 2; /* Между изображением и текстом */
`;

export const CardTitle = styled.h1`
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

export const ButtonDownload = styled.div`
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
export const ButtonPreview = styled.div`
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