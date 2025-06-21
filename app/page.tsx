// src/app/page.jsx
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  TruckIcon, GlobeAltIcon, BoltIcon, 
  ChartBarIcon, ShieldCheckIcon, ClockIcon,
  XMarkIcon} from '@heroicons/react/24/outline';
import OrderForm from './(components)/OrderForm';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  // const [dimensions, setDimensions] = useState({
  //   length: '',
  //   width: '',
  //   height: '',
  //   weight: ''
  // });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{ title: string; price: string; days: string; } | null>(null);
  
  const getTariffDetails = (tariffName: string | null) => {
    if (!tariffName) {
      return { title: 'Индивидуальный расчет', price: 'По запросу', days: '' };
    }
    switch (tariffName) {
      case 'Эконом':
        return { title: 'Эконом', price: '$5.90', days: '30-45 дней' };
      case 'Стандарт':
        return { title: 'Стандарт', price: '$8.30', days: '18-25 дней' };
      case 'Экспресс':
        return { title: 'Экспресс', price: '$12.50', days: '7-12 дней' };
      default:
        return { title: tariffName, price: 'По запросу', days: '' };
    }
  };

  const openFormWithTariff = (tariffName:string | null) => {
    // Сбрасываем предыдущий тариф перед открытием
    setSelectedService(null);
    setTimeout(() => {
      setSelectedService(getTariffDetails(tariffName));
      setIsFormOpen(true);
      document.body.style.overflow = 'hidden';
    }, 10);
  };

  // Функция закрытия формы
  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setDimensions(prev => ({ ...prev, [name]: value }));
  // };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Анимированный фон */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-orange-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      {/* Hero Section */}



      <section className="relative z-10 pt-40 pb-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block">Логистика из </span>
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Китая</span>
                <span className="block">без скрытых платежей</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl">
                Оптимальные решения для бизнеса с экономией до 40% без потери качества
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => openFormWithTariff(null)} className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/30">
                  Рассчитать стоимость
                </button>
                <Link href="services" className="border-2 text-center border-orange-600 text-orange-400 hover:bg-orange-900/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  Наши услуги
                </Link>
              </div>
            </div>
            
            {/* Заготовка под изображение */}
            <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-orange-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black/70 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-orange-500/10 border-2 border-dashed border-orange-500/30 w-full h-full flex items-center justify-center">
                  {/* <span className="text-orange-500/50 font-mono">Image: Logistics</span> */}
                  <Image src="/images/main-image-car.png" alt="Hero" width={1000} height={1000} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Преимущества */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <TruckIcon className="w-12 h-12 text-orange-500" />, 
                title: "Прямые маршруты", 
                desc: "Собственные транспортные коридоры без посредников" 
              },
              { 
                icon: <GlobeAltIcon className="w-12 h-12 text-orange-500" />, 
                title: "Склады на территории Китая", 
                desc: "С самым технологическим обеспечением" 
              },
              { 
                icon: <BoltIcon className="w-12 h-12 text-orange-500" />, 
                title: "Экспресс-оформление", 
                desc: "Таможенное оформление за 24 часа" 
              },
              { 
                icon: <ChartBarIcon className="w-12 h-12 text-orange-500" />, 
                title: "Оптимальные цены", 
                desc: "Цены на 15-20% ниже рынка за счет объемов" 
              },
              { 
                icon: <ShieldCheckIcon className="w-12 h-12 text-orange-500" />, 
                title: "Страхование груза", 
                desc: "100% компенсация при повреждении" 
              },
              { 
                icon: <ClockIcon className="w-12 h-12 text-orange-500" />, 
                title: "Фиксированные сроки", 
                desc: "Компенсация 1% за каждый день просрочки" 
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-orange-500 transition-all duration-500 hover:-translate-y-2 shadow-xl"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши логистические преимущества</h2>

          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative aspect-video rounded-2xl overflow-hidden border border-orange-900/50">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex items-end p-6">
                  <h3 className="text-xl font-bold">Логистика {item}</h3>
                </div>
                <div className="absolute inset-0 bg-orange-500/10 border-2 border-dashed border-orange-500/30 flex items-center justify-center">
                  {/* <span className="text-orange-500/50 font-mono">Image: Logistics {item}</span> */}
                  <Image src={`/images/ware${item}.jpg`} alt="Gallery" width={1000} height={1000} />
                  {
                    item === 1 && <p className='flex gap-2 items-center p-3 pl-0 absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-orange-400 text-sm font-medium py-1 px-3 rounded-full border border-orange-500/30 z-10'>
                      <Image  alt='star' src="/images/star.png" width={30} height={30} />
                      Работаем без выходных и праздников</p>
                  }
                  {
                    item === 2 && <p className='flex gap-2 items-center p-3 pl-0 absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-orange-400 text-sm font-medium py-1 px-3 rounded-full border border-orange-500/30 z-10'>
                      <Image  alt='star' src="/images/star.png" width={30} height={30} />
                      Вместительный склад</p>
                  }
                  {
                    item === 3 && <p className='flex gap-2 items-center p-3 pl-0 absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-orange-400 text-sm font-medium py-1 px-3 rounded-full border border-orange-500/30 z-10'>
                      <Image  alt='star' src="/images/star.png" width={30} height={30} />
                      Бережливое отношение к грузам</p>
                  }
                  {
                    item === 4 && <p className='flex gap-2 items-center p-3 pl-0 absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-orange-400 text-sm font-medium py-1 px-3 rounded-full border border-orange-500/30 z-10'>
                      <Image  alt='star' src="/images/star.png" width={30} height={30} />
                      Тщательный учет</p>
                  }
                  {
                    item === 5 && <p className='flex gap-2 items-center p-3 pl-0 absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-orange-400 text-sm font-medium py-1 px-3 rounded-full border border-orange-500/30 z-10'>
                      <Image  alt='star' src="/images/star.png" width={30} height={30} />
                      Разные виды логистики</p>
                  }
                  {
                    item === 6 && <p className='flex gap-2 items-center p-3 pl-0 absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-orange-400 text-sm font-medium py-1 px-3 rounded-full border border-orange-500/30 z-10'>
                      <Image  alt='star' src="/images/star.png" width={30} height={30} />
                      Работаем без задержек</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Тарифы */}
            <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Выберите оптимальное решение под ваши задачи. Все тарифы включают полное таможенное оформление
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Эконом */}
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-4">
              <div className="p-8 border-b border-gray-800">
                <h3 className="text-2xl font-bold mb-2">Эконом</h3>
                <p className="text-gray-400 mb-6">Для неторопливых грузов</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">$5.90</span>
                  <span className="text-gray-500 ml-2">/кг</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>30-45 дней</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>Морская доставка</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>Консолидация груза</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>Базовое отслеживание</span>
                  </li>
                </ul>
                <button 
                  onClick={() => openFormWithTariff('Эконом')}
                  className="w-full bg-gray-800 hover:bg-gray-700 py-4 rounded-xl font-medium transition-all"
                >
                  Оставить заявку
                </button>
              </div>
              <div className="bg-black/50 p-4 text-center">
                <p className="text-sm text-gray-400">Минимальный заказ: 100 кг</p>
              </div>
            </div>
            
            {/* Стандарт (рекомендуемый) */}
            <div className="relative bg-gradient-to-b from-gray-900 to-black border-2 border-orange-500 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-4 scale-105 z-20 shadow-xl shadow-orange-500/20">
              <div className="absolute top-5 right-5 bg-orange-500 text-black px-4 py-1 rounded-full font-bold text-sm">
                Популярный
              </div>
              <div className="p-8 border-b border-gray-800">
                <h3 className="text-2xl font-bold mb-2">Стандарт</h3>
                <p className="text-gray-400 mb-6">Оптимальное решение</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">$8.30</span>
                  <span className="text-gray-500 ml-2">/кг</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>18-25 дней</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>ЖД транспортировка</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>Страхование груза</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>Приоритетное оформление</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>Online-трекинг</span>
                  </li>
                </ul>
                <button 
                  onClick={() => openFormWithTariff('Стандарт')}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 py-4 rounded-xl font-bold transition-all"
                >
                  Оставить заявку
                </button>
              </div>
              <div className="bg-black/50 p-4 text-center">
                <p className="text-sm text-gray-400">Минимальный заказ: 50 кг</p>
              </div>
            </div>
            
            {/* Экспресс */}
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-4">
              <div className="p-8 border-b border-gray-800">
                <h3 className="text-2xl font-bold mb-2">Экспресс</h3>
                <p className="text-gray-400 mb-6">Срочная доставка</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">$12.50</span>
                  <span className="text-gray-500 ml-2">/кг</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>7-12 дней</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>Авиаперевозка</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>Доставка до двери</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>Персональный менеджер</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>Круглосуточная поддержка</span>
                  </li>
                </ul>
                <button 
                  onClick={() => openFormWithTariff('Экспресс')}
                  className="w-full bg-gray-800 hover:bg-gray-700 py-4 rounded-xl font-medium transition-all"
                >
                  Оставить заявку
                </button>
              </div>
              <div className="bg-black/50 p-4 text-center">
                <p className="text-sm text-gray-400">Минимальный заказ: 20 кг</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 {/* Модальное окно с формой */}
 {isFormOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            <div className="p-6 md:p-8">
              <OrderForm 
                selectedService={selectedService} 
                onClose={closeForm} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}