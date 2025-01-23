import axios from "axios";


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const cardsApi = {
    getCards() {
        return instance.get('todos')
    },
}
