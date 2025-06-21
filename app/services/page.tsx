// src/app/services/page.jsx
'use client';
import React, { useState } from 'react';
//import Image from 'next/image';
import { 
  ShoppingCartIcon, 
  MagnifyingGlassIcon, 
  TruckIcon,
  DocumentMagnifyingGlassIcon,
  ArrowPathIcon,
  BuildingStorefrontIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import TelegramOrderForm from '../(components)/OrderForm';

// Define a type for services
interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  days?: string;
}

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Основные услуги
  const coreServices: Service[] = [
    {
      id: 1,
      title: "Выкуп товара",
      description: "Покупка товара у поставщиков Китая напрямую с гарантией качества",
      price: "от $50",
      icon: <ShoppingCartIcon className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Получение образца поставщика",
      description: "Заказ и доставка образцов продукции перед основной закупкой",
      price: "от $30",
      icon: <DocumentMagnifyingGlassIcon className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Поиск товара у поставщиков",
      description: "Поиск надежных производителей и поставщиков по вашим критериям",
      price: "от $100",
      icon: <MagnifyingGlassIcon className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Контроль качества",
      description: "Проверка товара перед отправкой на соответствие требованиям",
      price: "от $70",
      icon: <ArrowPathIcon className="w-8 h-8" />
    }
  ];

  // Услуги доставки
  const deliveryServices: Service[] = [
    {
      id: 5,
      title: "Авиадоставка",
      description: "Самый быстрый способ доставки грузов из Китая",
      price: "от $12.50/кг",
      icon: <TruckIcon className="w-8 h-8" />,
      days: "7-12 дней"
    },
    {
      id: 6,
      title: "Железнодорожная доставка",
      description: "Оптимальное сочетание скорости и стоимости",
      price: "от $8.30/кг",
      icon: <TruckIcon className="w-8 h-8" />,
      days: "18-25 дней"
    },
    {
      id: 7,
      title: "Морская доставка",
      description: "Экономичная доставка крупных партий грузов",
      price: "от $5.90/кг",
      icon: <TruckIcon className="w-8 h-8" />,
      days: "30-45 дней"
    },
    {
      id: 8,
      title: "Экспресс-доставка",
      description: "Срочная доставка документов и мелких грузов",
      price: "от $15/кг",
      icon: <TruckIcon className="w-8 h-8" />,
      days: "3-7 дней"
    },
    {
      id: 9,
      title: "Сборные грузы",
      description: "Экономия на доставке небольших партий товаров",
      price: "от $7.50/кг",
      icon: <BuildingStorefrontIcon className="w-8 h-8" />,
      days: "25-35 дней"
    }
  ];

  // Открываем форму с выбранной услугой
  const openServiceForm = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Закрываем форму
  const closeServiceForm = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Анимированный фон */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
      </div>

      {/* Заголовок страницы */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Наши <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">услуги</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Полный спектр логистических услуг для вашего бизнеса. От поиска поставщиков до доставки до двери
          </p>
        </div>
      </section>

      {/* Основные услуги */}
      <section className="relative z-10 py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Основные услуги</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onOrderClick={openServiceForm} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Услуги доставки */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Услуги доставки</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Выберите оптимальный способ доставки в зависимости от сроков и бюджета
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliveryServices.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onOrderClick={openServiceForm} 
                deliveryDays={service.days}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно с формой заказа */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeServiceForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            <div className="p-6 md:p-8">
              <TelegramOrderForm 
                selectedService={selectedService}
                onClose={closeServiceForm} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Компонент карточки услуги
function ServiceCard({ service, onOrderClick, deliveryDays }: {
  service: Service;
  onOrderClick: (service: Service) => void;
  deliveryDays?: string;
}) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500 transition-all duration-500 hover:-translate-y-2 shadow-xl">
      {/* Контейнер для изображения с бейджем */}
      <div className="relative aspect-video">
        <div className="absolute inset-0 bg-orange-500/10 border-b border-orange-900/30 flex items-center justify-center">
          <div className="bg-gradient-to-br from-black/70 to-orange-900/10 w-full h-full flex items-center justify-center">
            <div className="text-center p-4">
              <div className="mx-auto mb-4 text-orange-500">
                {service.icon}
              </div>
              <span className="text-orange-500/50 font-mono">Image: {service.title}</span>
            </div>
          </div>
        </div>
        
        {/* Бейдж с ценой */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-orange-800 text-white font-bold py-2 px-4 rounded-xl shadow-lg z-10">
          {service.price}
        </div>
        
        {/* Бейдж с сроками доставки (если есть) */}
        {deliveryDays && (
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-700 to-orange-900 text-white py-2 px-4 rounded-xl text-sm font-medium">
            {deliveryDays}
          </div>
        )}
      </div>
      
      {/* Контент карточки */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-400 mb-6">{service.description}</p>
        
        <button
          onClick={() => onOrderClick(service)}
          className="w-full bg-gradient-to-r from-orange-900/50 to-black border border-orange-800/50 py-3 rounded-xl font-medium hover:bg-orange-900/30 transition-all"
        >
          Заказать услугу
        </button>
      </div>
    </div>
  );
}