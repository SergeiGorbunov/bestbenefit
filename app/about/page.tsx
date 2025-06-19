// src/app/about/page.jsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
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

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('history');

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
    <div className="min-h-screen bg-black text-white">
      {/* Анимированный фон */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-orange-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                О компании <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">BEST BENEFIT</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Ваш надежный партнер в логистике из Китая с 2014 года. Мы специализируемся на комплексных решениях "под ключ" для бизнеса.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-gradient-to-r from-orange-900/30 to-black/50 border border-orange-800/30 py-3 px-6 rounded-xl">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-2" />
                    <span>Гарантия сроков</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-900/30 to-black/50 border border-orange-800/30 py-3 px-6 rounded-xl">
                  <div className="flex items-center">
                    <MapPinIcon className="w-5 h-5 text-orange-500 mr-2" />
                    <span>Склады в Шеньчжене</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-900/30 to-black/50 border border-orange-800/30 py-3 px-6 rounded-xl">
                  <div className="flex items-center">
                    <TruckIcon className="w-5 h-5 text-orange-500 mr-2" />
                    <span>Все виды транспорта</span>
                  </div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/30">
                Рассчитать стоимость
              </button>
            </div>
            
            {/* Заготовка под изображение */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-orange-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black/70 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-orange-500/10 border-2 border-dashed border-orange-500/30 w-full h-full flex items-center justify-center">
                  <span className="text-orange-500/50 font-mono">Image: BEST BENEFIT Team</span>
                </div>
              </div>
              
              {/* Стикеры преимуществ */}
              <p className="absolute top-8 left-8 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold py-2 px-4 rounded-xl shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-300 z-10">
                🔥 10 лет опыта
              </p>
              
              <p className="absolute bottom-10 right-8 bg-gradient-to-r from-orange-600 to-orange-800 text-white font-bold py-2 px-4 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300 z-10">
                🌏 12 складов в Китае
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Миссия и ценности */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Наша миссия и ценности</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300">
              Мы стремимся стать вашим надежным логистическим партнером, обеспечивая максимальную выгоду и минимальные риски при работе с китайскими поставщиками.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <div className="text-5xl text-orange-500 font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">Надежность</h3>
              <p className="text-gray-400">
                Гарантируем сохранность вашего груза и соблюдение сроков доставки. Работаем только с проверенными перевозчиками.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500 rounded-2xl p-8">
              <div className="text-5xl text-orange-500 font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">Выгода</h3>
              <p className="text-gray-400">
                Оптимизируем ваши расходы на логистику благодаря прямым контрактам и оптовым тарифам. Экономия до 40%.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <div className="text-5xl text-orange-500 font-bold mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">Прозрачность</h3>
              <p className="text-gray-400">
                Никаких скрытых платежей. Полный контроль на каждом этапе через личный кабинет и мобильное приложение.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* История компании */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">История компании BEST BENEFIT</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex mb-12 border-b border-gray-800">
              <button 
                className={`px-6 py-4 font-medium ${activeTab === 'history' ? 'border-b-2 border-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('history')}
              >
                История
              </button>
              <button 
                className={`px-6 py-4 font-medium ${activeTab === 'achievements' ? 'border-b-2 border-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('achievements')}
              >
                Достижения
              </button>
              <button 
                className={`px-6 py-4 font-medium ${activeTab === 'future' ? 'border-b-2 border-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('future')}
              >
                Будущее
              </button>
            </div>
            
            <div className="relative pl-8 border-l-2 border-orange-500/30">
              {/* История */}
              {activeTab === 'history' && (
                <div className="space-y-10">
                  <div className="relative">
                    <div className="absolute -left-11 w-6 h-6 bg-orange-500 rounded-full"></div>
                    <h3 className="text-xl font-bold mb-2">2014: Основание компании</h3>
                    <p className="text-gray-400">
                      BEST BENEFIT начал свою деятельность как небольшое логистическое агентство с одним складом в Гуанчжоу. Наша цель была проста - помочь малым бизнесам наладить поставки из Китая.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-11 w-6 h-6 bg-orange-500 rounded-full"></div>
                    <h3 className="text-xl font-bold mb-2">2016: Расширение сети</h3>
                    <p className="text-gray-400">
                      Открыли еще 3 склада в Шеньчжене, Уси и Иу. Заключили прямые контракты с 15 транспортными компаниями, что позволило снизить цены на 20%.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-11 w-6 h-6 bg-orange-500 rounded-full"></div>
                    <h3 className="text-xl font-bold mb-2">2019: Технологический прорыв</h3>
                    <p className="text-gray-400">
                      Запустили собственную платформу для онлайн-трекинга грузов и мобильное приложение. Внедрили систему контроля качества на складах.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Достижения */}
              {activeTab === 'achievements' && (
                <div className="space-y-10">
                  <div className="relative">
                    <div className="absolute -left-11 w-6 h-6 bg-orange-500 rounded-full"></div>
                    <h3 className="text-xl font-bold mb-2">5000+ успешных доставок</h3>
                    <p className="text-gray-400">
                      За 10 лет работы мы доставили более 5000 грузов для 1200 клиентов из России, Казахстана и Беларуси.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-11 w-6 h-6 bg-orange-500 rounded-full"></div>
                    <h3 className="text-xl font-bold mb-2">Собственная инфраструктура</h3>
                    <p className="text-gray-400">
                      12 складов в Китае общей площадью 8500 м². Партнерская сеть из 45 проверенных перевозчиков.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-11 w-6 h-6 bg-orange-500 rounded-full"></div>
                    <h3 className="text-xl font-bold mb-2">Премии и награды</h3>
                    <p className="text-gray-400">
                      Лучший логистический оператор 2020 и 2022 года по версии "Логистика Китай-Россия". Рейтинг 4.9 на независимых платформах.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Будущее */}
              {activeTab === 'future' && (
                <div className="space-y-10">
                  <div className="relative">
                    <div className="absolute -left-11 w-6 h-6 bg-orange-500 rounded-full"></div>
                    <h3 className="text-xl font-bold mb-2">Расширение географии</h3>
                    <p className="text-gray-400">
                      Планируем открыть представительства в Европе и США к 2025 году. Запуск новых направлений: Турция, Вьетнам, Индия.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-11 w-6 h-6 bg-orange-500 rounded-full"></div>
                    <h3 className="text-xl font-bold mb-2">Технологии ИИ</h3>
                    <p className="text-gray-400">
                      Внедрение искусственного интеллекта для прогнозирования сроков доставки и автоматизации таможенного оформления.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-11 w-6 h-6 bg-orange-500 rounded-full"></div>
                    <h3 className="text-xl font-bold mb-2">Экологичная логистика</h3>
                    <p className="text-gray-400">
                      Переход на электромобили для последней мили доставки. Участие в программах по сокращению углеродного следа.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши конкурентные преимущества</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Почему клиенты выбирают BEST BENEFIT для логистики из Китая
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-orange-500 transition-all duration-500 hover:-translate-y-2 shadow-xl"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-900/20 to-black border border-orange-900/50 rounded-3xl p-12 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
                    {stat.value}
                  </div>
                  <p className="text-xl">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Профессионалы с опытом работы в логистике и международной торговле
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden">
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-orange-500/10 flex items-center justify-center">
                    <div className="bg-gradient-to-br from-black/70 to-orange-900/10 w-full h-full flex items-center justify-center">
                      <span className="text-orange-500/50 font-mono">Photo: {member.name}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-500 mb-3">{member.position}</p>
                  <p className="text-gray-400 text-sm">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-28">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-900/30 to-black border border-orange-900/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Готовы оптимизировать вашу логистику из Китая?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Получите бесплатную консультацию и расчет стоимости доставки
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="tel" 
                  placeholder="Ваш телефон" 
                  className="flex-grow px-6 py-4 bg-black/50 border border-gray-800 rounded-xl focus:border-orange-500 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20">
                  Получить консультацию
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}