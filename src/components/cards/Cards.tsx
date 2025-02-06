import {BackgroundImage, ButtonDownload, ButtonPreview, Card, CardTitle, Overlay} from "./CardsStyles";
import downIcon from "../../assets/download.svg";
import eyeIcon from "../../assets/eye-fill.svg";

type PropsType = {
    id: string
    title: string
    img: string | undefined;
}

const handleDownload = (id: string) => {
    fetch(`http://127.0.0.1:8000/api/download/${id}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка при скачивании файла");
            }
            return response.blob();
        })
        .then(blob => {
            // Используйте window.URL для создания URL объекта
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `presentation_${id}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            // Освобождаем память после использования
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Ошибка:', error));
};
const handlePreview = (id: string) => {
    fetch(`http://127.0.0.1:8000/api/download/${id}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка при получении файла");
            }
            return response.blob();
        })
        .then(blob => {
            const fileBlob = new Blob([blob], { type: 'application/pdf' });
            // Создаем временный URL для Blob
            const fileUrl = URL.createObjectURL(fileBlob);
            // Открываем файл в новой вкладке
            window.open(fileUrl, '_blank');
            setTimeout(() => URL.revokeObjectURL(fileUrl), 30000);
        })
        .catch(error => console.error('Ошибка:', error));
};

export const Cards = (props: PropsType) => {

    const onClickDownload = () => handleDownload(props.id)
    const onClickPreview = () => handlePreview(props.id)


    return (
        <Card key={props.id}>
            <BackgroundImage src={props.img}/>
            <Overlay/>
            <CardTitle>{props.title}</CardTitle>
            <ButtonDownload onClick={onClickDownload}>
                <img src={downIcon}/>
            </ButtonDownload>
            <ButtonPreview onClick={onClickPreview}>
                <img src={eyeIcon}/>
            </ButtonPreview>
        </Card>
    );
};
