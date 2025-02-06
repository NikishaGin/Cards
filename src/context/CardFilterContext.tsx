import {createContext, useState, useContext, ReactNode} from 'react';

// Типы для контекста
interface CardFilterContextType {
    searchTitle: string;
    setSearchTitle: (value: string) => void;
    department: string;
    setDepartment: (value: string) => void;
    author: string;
    setAuthor: (value: string) => void;
}

// Создание контекста с начальными значениями
export const CardFilterContext = createContext<CardFilterContextType>({
    searchTitle: '',
    setSearchTitle: () => {},
    department: '',
    setDepartment: () => {},
    author: '',
    setAuthor: () => {},
});

export const CardFilterProvider = ({children}) => {
    const [searchTitle, setSearchTitle] = useState<string>('');
    const [department, setDepartment] = useState<string>('');
    const [author, setAuthor] = useState<string>('');

    return (
        <CardFilterContext.Provider
            value={{
                searchTitle,
                setSearchTitle,
                department: department,
                setDepartment: setDepartment,
                author: author,
                setAuthor: setAuthor,
            }}
        >
            {children}
        </CardFilterContext.Provider>
    );
};