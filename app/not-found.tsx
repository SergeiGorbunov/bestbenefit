// src/app/not-found.jsx
'use client';
import React from 'react';
import Link from 'next/link';
import { TruckIcon, ArrowLeftIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:100px_100px] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-2/3 right-1/3 w-72 h-72 bg-orange-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-2/3 w-64 h-64 bg-orange-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-25 animate-blob animation-delay-6000"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center px-4 py-12 max-w-3xl">
        {/* Анимированный номер ошибки */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <span className="text-[10rem] md:text-[15rem] font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              404
            </span>
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 rounded-full mix-blend-overlay filter blur-xl animate-ping opacity-30"></div>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Ой! Страница потерялась в пути
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Похоже, что такой страницы здесь нет! Возможно где-то произошла ошибка
        </p>

        {/* Стикеры */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <p className="bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold py-2 px-4 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300">
            🔍 Ищем неисправности
          </p>
          <p className="bg-gradient-to-r from-orange-600 to-orange-800 text-white font-bold py-2 px-4 rounded-xl shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300">
            🚚 Доставка все также работает
          </p>
          <p className="bg-gradient-to-r from-orange-700 to-orange-900 text-white font-bold py-2 px-4 rounded-xl shadow-lg transform rotate-6 hover:rotate-0 transition-all duration-300">
            ⏳ Скоро исправим
          </p>
        </div>

        {/* Кнопка возврата */}
        <Link 
          href="/" 
          className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Вернуться на главную
        </Link>

        {/* Декор */}
        <div className="mt-16 flex flex-col items-center">
          <div className="relative w-64 h-64">
            {/* Грузовик */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <TruckIcon className="w-32 h-32 text-orange-500 opacity-70 animate-bounce" />
            </div>
            
            {/* Знак 404 */}
            <div className="absolute top-0 right-0 bg-black border-2 border-orange-500 rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-orange-500 font-bold text-xl">404</span>
            </div>
            
            {/* Инструменты */}
            <div className="absolute bottom-0 left-0 animate-pulse">
              <WrenchScrewdriverIcon className="w-10 h-10 text-orange-400 rotate-45" />
            </div>
          </div>
          
          <p className="mt-8 text-orange-500/70 text-sm">
            Наши специалисты уже работают над устранением проблемы
          </p>
        </div>
      </div>

      {/* Движущиеся элементы */}
      <div className="absolute bottom-10 left-0 w-full flex justify-between px-8 opacity-30">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="w-8 h-8 bg-orange-500 rounded-full animate-bounce"
            style={{ 
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${1.5 + i * 0.2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
