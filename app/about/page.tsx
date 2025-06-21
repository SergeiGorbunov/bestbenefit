// src/app/about/page.jsx
'use client';
import React, { useState } from 'react';
import { 
  CheckCircleIcon,
  MapPinIcon,
  GlobeAltIcon,
  ClockIcon,
  ShieldCheckIcon,
  TruckIcon,
  UsersIcon,
  ChartBarIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import OrderForm from '../(components)/OrderForm';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('history');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const advantages = [
    {
      icon: <ClockIcon className="w-8 h-8 text-orange-500" />,
      title: "Оперативная доставка",
      description: "Фиксированные сроки с компенсацией за просрочку"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-orange-500" />,
      title: "Выгодные цены",
      description: "Цены на 15-20% ниже рынка за счет прямых контрактов"
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-orange-500" />,
      title: "100% страхование",
      description: "Полная компенсация при повреждении груза"
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8 text-orange-500" />,
      title: "Глобальное покрытие",
      description: "Работаем с поставщиками по всему Китаю"
    },
    {
      icon: <ArrowPathIcon className="w-8 h-8 text-orange-500" />,
      title: "Контроль качества",
      description: "Проверка товара перед отправкой"
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-orange-500" />,
      title: "Персональный менеджер",
      description: "Индивидуальный подход к каждому клиенту"
    }
  ];

  const team = [
    {
      name: "Алексей Петров",
      position: "Основатель компании",
      experience: "12 лет в логистике"
    },
    {
      name: "Екатерина Смирнова",
      position: "Директор по логистике",
      experience: "Эксперт по доставке из Китая"
    },
    {
      name: "Дмитрий Иванов",
      position: "Руководитель отдела ВЭД",
      experience: "Специалист по таможенному оформлению"
    },
    {
      name: "Ольга Кузнецова",
      position: "Менеджер по работе с клиентами",
      experience: "Опыт работы 8 лет"
    }
  ];

  const stats = [
    { value: "10+", label: "Лет на рынке" },
    { value: "5000+", label: "Успешных доставок" },
    { value: "98%", label: "Довольных клиентов" },
    { value: "12", label: "Складов в Китае" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden"> {/* Добавлен overflow-x-hidden */}
      {/* Анимированный фон */}
      <div className="fixed inset-0 z-0 overflow-hidden"> {/* Добавлен overflow-hidden */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px] opacity-5"></div>
        {/* Уменьшены размеры кругов для мобильных */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 md:w-96 md:h-96 bg-orange-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4"> {/* Добавлен px-4 */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"> {/* Уменьшен gap для мобильных */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6"> {/* Адаптивные размеры текста */}
                О компании <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">BEST BENEFIT</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8"> {/* Адаптивный текст */}
                Ваш надежный партнер в логистике из Китая с 2014 года. Мы специализируемся на комплексных решениях под ключ для бизнеса.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10"> {/* Уменьшен gap */}
                {/* ... (остальные элементы без изменений) */}
              </div>
            </div>
            
            {/* Заготовка под изображение */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-orange-500/30 mt-8 lg:mt-0"> {/* Добавлен отступ сверху для мобильных */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black/70 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-orange-500/10 border-2 border-dashed border-orange-500/30 w-full h-full flex items-center justify-center">
                  <span className="text-orange-500/50 font-mono text-sm">Image: BEST BENEFIT Team</span> {/* Уменьшен текст */}
                </div>
              </div>
              
              {/* Стикеры преимуществ - адаптированные для мобильных */}
              <p className="absolute top-2 left-2 md:top-4 md:left-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 text-sm md:text-base rounded-lg md:rounded-xl shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-300 z-10">
                🔥 10 лет опыта
              </p>
              
              <p className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-gradient-to-r from-orange-600 to-orange-800 text-white font-bold py-1 px-2 md:py-2 md:px-4 text-sm md:text-base rounded-lg md:rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300 z-10">
                🌏 12 складов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Миссия и ценности */}
      <section className="relative z-10 py-16 md:py-20 bg-gradient-to-b from-black to-gray-900/50 px-4"> {/* Добавлен px-4 */}
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16"> {/* Уменьшен mb для мобильных */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Наша миссия и ценности</h2> {/* Адаптивный текст */}
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mb-6 md:mb-8"></div> {/* Уменьшен mb */}
            <p className="text-lg md:text-xl text-gray-300"> {/* Адаптивный текст */}
              Мы стремимся стать вашим надежным логистическим партнером, обеспечивая максимальную выгоду и минимальные риски при работе с китайскими поставщиками.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"> {/* Уменьшен gap */}
            {/* ... (остальные элементы без изменений) */}
          </div>
        </div>
      </section>

      {/* История компании */}
      <section className="relative z-10 py-16 md:py-20 px-4"> {/* Добавлен px-4 */}
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16"> {/* Уменьшен mb */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">История компании BEST BENEFIT</h2> {/* Адаптивный текст */}
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div> {/* Уменьшен размер */}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap mb-8 border-b border-gray-800"> {/* Добавлен flex-wrap */}
              {/* ... (кнопки вкладок без изменений) */}
            </div>
            
            <div className="relative pl-6 md:pl-8 border-l-2 border-orange-500/30"> {/* Уменьшен отступ слева */}
              {/* ... (контент вкладок без изменений) */}
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="relative z-10 py-16 md:py-20 bg-gradient-to-b from-gray-900/50 to-black px-4"> {/* Добавлен px-4 */}
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16"> {/* Уменьшен mb */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Наши конкурентные преимущества</h2> {/* Адаптивный текст */}
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"> {/* Адаптивный текст */}
              Почему клиенты выбирают BEST BENEFIT для логистики из Китая
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Уменьшен gap */}
            {advantages.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-orange-500 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                <div className="mb-4 md:mb-6">{item.icon}</div> {/* Уменьшен mb */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{item.title}</h3> {/* Адаптивный текст */}
                <p className="text-gray-400 text-sm md:text-base">{item.description}</p> {/* Адаптивный текст */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="relative z-10 py-16 md:py-20 px-4"> {/* Добавлен px-4 */}
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-orange-900/20 to-black border border-orange-900/50 rounded-3xl p-6 md:p-8 lg:p-12 backdrop-blur-sm"> {/* Уменьшен padding */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8"> {/* Уменьшен gap */}
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-2 md:p-4"> {/* Уменьшен padding */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2 md:mb-4"> {/* Адаптивный текст */}
                    {stat.value}
                  </div>
                  <p className="text-sm md:text-lg">{stat.label}</p> {/* Адаптивный текст */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="relative z-10 py-16 md:py-20 bg-gradient-to-b from-black to-gray-900/50 px-4"> {/* Добавлен px-4 */}
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16"> {/* Уменьшен mb */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Наша команда</h2> {/* Адаптивный текст */}
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"> {/* Адаптивный текст */}
              Профессионалы с опытом работы в логистике и международной торговле
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"> {/* Уменьшен gap */}
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden">
                <div className="relative h-48 md:h-64"> {/* Уменьшена высота для мобильных */}
                  <div className="absolute inset-0 bg-orange-500/10 flex items-center justify-center">
                    <div className="bg-gradient-to-br from-black/70 to-orange-900/10 w-full h-full flex items-center justify-center">
                      <span className="text-orange-500/50 font-mono text-xs">Photo: {member.name}</span> {/* Уменьшен текст */}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 md:p-6"> {/* Уменьшен padding */}
                  <h3 className="text-lg md:text-xl font-bold mb-1">{member.name}</h3> {/* Адаптивный текст */}
                  <p className="text-orange-500 text-sm md:text-base mb-1 md:mb-3">{member.position}</p> {/* Адаптивный текст */}
                  <p className="text-gray-400 text-xs md:text-sm">{member.experience}</p> {/* Адаптивный текст */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 md:py-28 px-4"> {/* Добавлен px-4 */}
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-orange-900/30 to-black border border-orange-900/50 rounded-3xl p-4 md:p-6 lg:p-8 xl:p-12 backdrop-blur-sm"> {/* Уменьшен padding */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6"> {/* Адаптивный текст */}
                Готовы оптимизировать вашу логистику из Китая?
              </h2>
              <p className="text-gray-300 mb-6 md:mb-10 text-sm md:text-base lg:text-xl"> {/* Адаптивный текст */}
                Получите бесплатную консультацию и расчет стоимости доставки
              </p>
              <div className="max-w-md mx-auto">
                {!isFormOpen ? (
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 text-sm md:text-base rounded-lg md:rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                    Рассчитать стоимость доставки
                  </button>
                ) : (
                  <OrderForm selectedService={"Со страницы о нас"} onClose={() => setIsFormOpen(false)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}