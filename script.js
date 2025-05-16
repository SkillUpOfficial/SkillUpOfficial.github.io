// script.js

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      {/* Главный экран */}
      <section className="main-section-bg text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Продвинутый Бизнес и Саморазвитие</h1>
        <p className="text-xl mb-8">Узнайте все секреты успеха и станьте лучшим версией себя!</p>
        <button className="bg-white text-blue-500 px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 hover:text-white transition duration-300 button-hover-effect">Записаться на курс</button>
      </section>

      {/* О курсе */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">О курсе</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Темы:</h3>
              <ul className="list-disc pl-6">
                <li>Бизнес-стратегии</li>
                <li>Саморазвитие</li>
                <li>Продуктивность</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Формат и Длительность:</h3>
              <p>Интерактивные занятия, онлайн-материалы, практики. Всего 12 недель.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы студентов */}
      <section className="bg-gray-200 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Отзывы студентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center card-shadow">
              <img src="https://placehold.co/64 " alt="Student 1" className="rounded-full mr-4"/>
              <div>
                <p className="font-semibold">Анна Иванова</p>
                <p>Отличный курс! Очень помогло понять ключевые аспекты бизнеса.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center card-shadow">
              <img src="https://placehold.co/64 " alt="Student 2" className="rounded-full mr-4"/>
              <div>
                <p className="font-semibold">Петр Петров</p>
                <p>Курсы действительно полезны и практические. Спасибо за обучение!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Об авторе курса */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Об авторе курса</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <img src="https://placehold.co/128 " alt="Author" className="rounded-full mb-4 md:mb-0 md:mr-8"/>
            <div>
              <p className="text-xl font-semibold mb-2">Дмитрий Смирнов</p>
              <p>Ведущий эксперт в области бизнеса и саморазвития. Автор нескольких книг и статей.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Прайсы */}
      <section className="bg-gray-200 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Прайсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-shadow">
              <h3 className="text-xl font-semibold mb-4">Базовый</h3>
              <p className="text-2xl font-bold mb-4">$99</p>
              <p className="mb-4">Доступ к материалам курса</p>
              <p className="mb-4">Поддержка в чате</p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 button-hover-effect">Оплатить</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-shadow">
              <h3 className="text-xl font-semibold mb-4">Премиум</h3>
              <p className="text-2xl font-bold mb-4">$199</p>
              <p className="mb-4">Все возможности базового пакета</p>
              <p className="mb-4">Персональное консультирование</p>
              <p className="mb-4">Доступ к закрытому сообществу</p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 button-hover-effect">Оплатить</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
              <h3 className="text-xl font-semibold mb-2">Как я могу записаться на курс?</h3>
              <p>Нажмите на кнопку "Записаться на курс" на главной странице и следуйте инструкциям.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
              <h3 className="text-xl font-semibold mb-2">Что происходит после оплаты?</h3>
              <p>После оплаты вы получите доступ ко всем материалам курса и сможете начать обучение сразу.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
              <h3 className="text-xl font-semibold mb-2">Есть ли гарантия возврата денег?</h3>
              <p>Да, мы предоставляем 30-дневную гарантию возврата денег без вопросов.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email-подписка */}
      <section className="bg-gray-200 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Подпишитесь на наши новости</h2>
          <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input type="email" placeholder="Введите ваш email" className="bg-white p-4 rounded-lg w-full md:w-1/2 shadow-md form-input"/>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 button-hover-effect">Подписаться</button>
          </form>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-10 px-4 footer-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="text-lg font-bold mb-4">Контакты</p>
            <p>Email: info@businesscourse.com</p>
            <p>Телефон: +7 (999) 999-99-99</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-lg font-bold mb-4">Ссылки</p>
            <a href="#" className="block mb-2">Главная</a>
            <a href="#" className="block mb-2">О курсе</a>
            <a href="#" className="block mb-2">Отзывы</a>
            <a href="#" className="block mb-2">Об авторе</a>
            <a href="#" className="block mb-2">Прайсы</a>
            <a href="#" className="block mb-2">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
// Плавный скролл по якорям
// script.js
document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
ReactDOM.render(<App />, document.getElementById('root'));

