// Импорт библиотеки React и компонента RouteCard
import React from 'react';
import RouteCard from './components/RouteCard';
import {baseUrlRoute} from "./components/responseJson";

// Запрос к API
const response = await fetch(baseUrlRoute),
    // Данные из файла JSON
      jsonData = await response.json(),
    // Количество записей в файле
      lengthOfData = jsonData.length;


// Функция для создания главного компонента App
function App() {
  // Массив для перебора компонентов
  const routeCards = [];

  // Перебор компонентов
  for (let i = 0; i < 9; i++) {
    routeCards.push(<RouteCard key={i} />);
  }

  return (
      <div>
        {routeCards}
      </div>
  );
}

export default App;
