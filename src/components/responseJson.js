// Строка подключения к API
export const baseUrlRoute = 'https://64e5fa4809e64530d17f5f7a.mockapi.io/api/db/routes';

// Итератор для получения уникальных значений из файла
let numberOfData = 0;

// Асинхронная функция, которая считывает данные из файла
export async function fetchJson(setRouteData) {
    try {
        // Запрос к API
        const response = await fetch(baseUrlRoute);

        if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Если запрос успешен
        // Данные получаются из ответа в формате JSON и сохраняются в переменной
        const jsonData = await response.json();
        if (jsonData.length > 0) {
            setRouteData(jsonData[numberOfData++]);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function fetchJsonFilter(setRouteData, filterTo, filterFrom) {
    try {
        const response = await fetch(baseUrlRoute);
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
        }
        const jsonData = await response.json();
        if (jsonData.length > 0) {
            // Применяем фильтры
            const filteredData = jsonData.filter(item => {
                // Фильтр по полю "to"
                if (filterTo && item.to !== filterTo) {
                    return false;
                }
                // Фильтр по полю "from"
                if (filterFrom && item.from !== filterFrom) {
                    return false;
                }
                return true;
            });
            setRouteData(filteredData[numberOfData++]);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}