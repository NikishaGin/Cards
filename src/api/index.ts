import axios from "axios";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
})

// // Определяем типы данных
// export type CreateCardPayload = {
//     title: string;
//     description: string;
//     author: string;
//     department: string;
//     image: string;
//     file: File;
// };

export const cardsApi = {
    createCards(title: string, description: string, author: string, department: string, image: string, file: File) {
        return instance.post('upload', {title, description, author, department, image, file})
    },
}



