import React, {ChangeEvent, useState} from 'react';
import styled, {keyframes} from 'styled-components';
import uploadIcon from '../assets/upload.svg'
import pdfIcon from '../assets/filetype-pdf.svg'
import imgloadIcon from '../assets/image-fill.svg'


//контейнер
const Container = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 400px;
    background-color: #031D84;
    margin-top: 30px;
    border-radius: 30px;
    padding-bottom: 50px;
`;
//кнопка для вызова модального окна
const Button = styled.div`
    padding: 10px 20px;
    margin: 20px 0;
    font-size: 16px;
    font-family: 'Montserrat';
    background-color: #22C55E;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: green;
    }
`;
//анимация появления модального окна
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
//модальное окно
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 0.3s ease-out;
    overflow-y:auto;
    z-index: 1000;
`;
const Modal = styled.div`
    margin-top: 50px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
const ModalContent = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
//заголовок в модальном окне
const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 1.25rem;
    color: #333;
    font-weight: bold;
    font-family: 'Montserrat';
`
//описание в модальном окне
const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #666;
    font-family: 'Montserrat';
`
//контейнер селектора
const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
`
//описание презентации
const Description = styled.input`
    padding-left: 10px;
    margin-top: 10px;
    width: 80%;
    height: 10vh;
    border: 1px solid #333;
    border-radius: 8px;
    background-color: white;
    color: #333;
    font-family: 'Montserrat';
`
const Presname = styled.input`
    padding-left: 10px;
    margin-top: 10px;
    width: 80%;
    height: 5vh;
    border: 1px solid gray;
    border-radius: 8px;
    background-color: white;
    color: #333;
    font-family: 'Montserrat';
`
//кнопки загрузки изображения и файла
const UploadImageBtn = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #4de84d;
    cursor: pointer;
    outline: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
`
//контейнер кнопок
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: 50px;
`
//кнопка отправки презентации и отмены
const ButtonSendClose = styled.button`
    max-width: 150px;
    background: white;
    color: #48d848;
    font-size: 16px;
    font-family: 'Montserrat';
    padding: 12px 24px;
    border: 2px solid #48d848;
    border-radius: 35px;
    cursor: pointer;
    outline: none;
    transition: all 200ms linear;
    box-shadow: 0px 0px 15px #e4e4e4;

    &:hover {
        color: white;
        background-color: #48d848;
    }

    &:active {
        background-color: #40c140;
    }

    &:focus {
        outline: 1px dotted #959595;
    }
`;
//селектор отдела и автора
const Dropdown = styled.select`
    appearance: none;
    padding: 10px;
    font-size: 16px;
    border: 1px solid gray;
    background-color: white;
    border-radius: 8px;
    color: #333;
    cursor: pointer;
    width: 100%;
    font-family: 'Montserrat';
`;
const DropdownItem = styled.option`
    color: #333;
    padding: 8px;
    cursor: pointer;
    font-family: 'Montserrat';

    &:hover {
        background: black;
    }
`;
//превью изображения
const PreviewImage = styled.img`
    max-width: 900px;
    max-height: 900px;
    border-radius: 10px;
    border: 2px solid #ddd;
`;
// Анимации иконки успешной отправки
const slideDown = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
`;
const slideUp = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
    }
`;
// Стили выплывающей иконки
const NotificationContainer = styled.div<{ isVisible: boolean }>`
    background-color: #4caf50;
    color: white;
    padding: 16px 24px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-size: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: ${({isVisible}) => (isVisible ? slideDown : slideUp)} 0.5s ease;
`;

//тип для объектов авторы и отделы
type DepAuth = {
    name: string
}
//тип для пропсов
type PropsType = {
    addPost: (title: string, description: string, author: string, department: string, image: string, file: File | null) => void
    department: Array<DepAuth>
    authors: Array<DepAuth>
}


export function Modalwindow(props: PropsType) {

//логика сообщения успешной отправки
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 2000);
    };


    //логика модального окна
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
        window.scroll({
            top: 0,
            behavior: 'smooth', // Плавная анимация
        })
    }
    const closeModal = () => {
        setIsModalOpen(false)
        setTitleText('')
        setSelectedDepart('')
        setSelectedAutors('')
        setdescriptionText('')
        setImage('')
        setSelectedFile(null)
    }
    //закрывать модальное окно по клику мне него
    // const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    //     if (e.target === e.currentTarget) {
    //         closeModal();
    //     }
    // };

    //логика выпадающих списков
    const [selectedDepart, setSelectedDepart] = useState('');
    const [selectedAutors, setSelectedAutors] = useState('');
    const handleItemClickDeparts = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDepart(e.target.value);
    };
    const handleItemClickAutors = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAutors(e.target.value);
    };

    //название и описание презентации
    const [titleText, setTitleText] = useState('')
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleText(e.currentTarget.value)
    }
    const [descriptionText, setdescriptionText] = useState('')
    const onChangeDescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setdescriptionText(e.currentTarget.value)
    }

    //загрузка фотографии и файла
    const [image, setImage] = useState<string | ''>('');
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const isValidFormat = file.type === "image/png" || file.type === "image/jpeg";
            if (!isValidFormat) {
                setImage('');
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            console.log('Selected file:', file.name);
        }
    };

    //отправка данных в бд
    const bthcheck = (
        titleText !== '' &&
        descriptionText !== '' &&
        selectedAutors !== '' &&
        descriptionText !== '' &&
        image !== '' &&
        selectedFile !== null
    )
    const onClickHandler = () => {
        props.addPost(titleText, descriptionText, selectedAutors, selectedDepart, image, selectedFile)
        closeModal()
        handleClick()
    }

    return (
        <Container>
            {/*сообщение об успешной загрузке*/}
            {isVisible && (
                <NotificationContainer isVisible={isVisible}>
                    Успешно выполнено!
                </NotificationContainer>
            )}
            {/*синее поле с тектстои и кнопкой открытия модального окна*/}
            <h1 style={{
                color: 'white',
                fontSize: '70px',
                fontWeight: 'bold',
                maxWidth: '750px',
                textAlign: 'center',
                marginBottom: '0',
            }}>Библиотека презентаций МИУДОЛ</h1>
            <h2 style={{
                color: '#8896AB',
                fontSize: '20px',
                maxWidth: '400px',
                textAlign: 'center',
                marginBottom: '20px'
            }}>Быстрый доступ ко всем необходимым материалам для эффективной работы</h2>
            <Button onClick={openModal}>Отправить презентацию</Button>
            <p style={{
                color: '#8896AB',
                fontSize: '14px',

            }}>Загружайте и скачивайте нужные материалы за секунды</p>
            {isModalOpen && (
                <ModalOverlay>
                    <Modal>
                        <Title>Загрузить презентацию</Title>
                        <Text>Новая презентация?</Text>
                        <Text>Добавьте её в нашу базу всего за пару кликов</Text>
                        <ModalContent>
                            <Presname placeholder="Название"
                                      value={titleText}
                                      onChange={onChangeTitleHandler}>

                            </Presname>
                            {/*выпадающий список отделы*/}
                            <InputContainer>
                                <Dropdown id="select" value={selectedDepart} onChange={handleItemClickDeparts}>
                                    <DropdownItem value={''}>Выберите отдел</DropdownItem>
                                    {props.department.map((option, index) => (
                                        <DropdownItem key={index} value={option.name}>
                                            {option.name}
                                        </DropdownItem>
                                    ))}
                                </Dropdown>
                            </InputContainer>
                            {/*выпадающий список авторы*/}
                            <InputContainer>
                                <Dropdown id="select" value={selectedAutors} onChange={handleItemClickAutors}>
                                    <DropdownItem value={''}>Выберите автора</DropdownItem>
                                    {props.authors.map((option, index) => (
                                        <DropdownItem key={index} value={option.name}>
                                            {option.name}
                                        </DropdownItem>
                                    ))}
                                </Dropdown>
                            </InputContainer>
                            {/*описание презентации*/}
                            <Description placeholder="Описание"
                                         value={descriptionText}
                                         onChange={onChangeDescriptionHandler}>

                            </Description>
                            {/*загрузка фотогафии*/}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                maxWidth: '70px'
                            }}>
                                <UploadImageBtn
                                    onClick={() => document.getElementById("fileInput")?.click()}
                                >
                                    <img src={imgloadIcon} style={{color: 'white'}}/>
                                </UploadImageBtn>

                                {/*загрузка файла*/}
                                <UploadImageBtn
                                    onClick={() => document.getElementById('file-input')?.click()}
                                >
                                    <img src={uploadIcon} style={{color: 'white'}}/>
                                </UploadImageBtn></div>
                            {/*невидимые инпуты, открывающие проводник*/}
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/png, image/jpeg"
                                style={{display: "none"}}
                                onChange={handleImageChange}
                            />
                            <input
                                type="file"
                                accept=".pdf,.ppt,.pptx"
                                style={{display: 'none'}}
                                id="file-input"
                                onChange={handleFileChange}
                            />
                            {/*название загруженного документа*/}
                            <div style={{display: 'flex'}}>{selectedFile &&
                                <img src={pdfIcon} style={{height: '50px', width: '50px'}}/>}
                                {selectedFile && <p>Документ: {selectedFile.name}</p>}</div>

                            {/*превью фотогафии*/}
                            {image && <PreviewImage src={image} alt="Preview"/>}
                            <p hidden={bthcheck} style={{color: "red", fontFamily: 'Montserrat'}}>Пожалуйста, заполните
                                все поля</p>
                            {/*кнопки ОТМЕНА и СОХРАНИТЬ*/}
                            <ButtonContainer>
                                <ButtonSendClose onClick={closeModal}>Отмена</ButtonSendClose>
                                <ButtonSendClose disabled={!bthcheck}
                                                 style={!bthcheck ? {
                                                     background: "gray",
                                                     color: "white",
                                                     border: "none"
                                                 } : {}}
                                                 onClick={onClickHandler}>Сохранить
                                </ButtonSendClose>
                            </ButtonContainer>
                        </ModalContent>
                    </Modal>
                </ModalOverlay>
            )}
        </Container>
    );

};