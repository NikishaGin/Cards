import axios from "axios";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
})

export const cardsApi = {
    // getCards() {
    //     return instance.get();
    // },
    createCards(title: string, description: string, author: string, department: string, image: string, file: any) {
        return instance.post('upload', {title, description, author, department, image, file})
    },
}



