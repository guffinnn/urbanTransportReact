// Импорт библиотеки React и компонента RouteCard
import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

/*import FirstPage from "./pages/FirstPage";*/

// Функция для создания главного компонента App
function App() {
  return (
      <div>
          <Header/>
          <Main />
          {/*<FirstPage />*/}
          <Footer />
      </div>
  );
}

export default App;
