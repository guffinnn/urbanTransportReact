// Импорт библиотеки React
import React, { useState } from 'react';
import Modal from "./components/Modal";

// Функция для создания главного компонента App
function AppModal() {
    const [modalActive, setModalActive] = useState(true);
    return (
        <Modal active={modalActive} setModalActive={setModalActive}/>
    );
}

export default AppModal;
