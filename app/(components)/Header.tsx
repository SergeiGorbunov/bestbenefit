'use client'
import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <>
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/90 border-b border-orange-900 py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-orange-500 w-3 h-3 rounded-full mr-2 animate-pulse"></div>
        <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          BEST BENEFIT
        </div>
      </div>
      
      {/* Десктопное меню */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-orange-400 transition-all duration-300 hover:scale-105">Главная</Link>
        <Link href="services" className="hover:text-orange-400 transition-all duration-300 hover:scale-105">Услуги</Link>
        <Link href="about" className="hover:text-orange-400 transition-all duration-300 hover:scale-105">О нас</Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <button className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20">
          Рассчитать
        </button>
        
        {/* Бургер-кнопка */}
        <button 
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`absolute w-6 h-0.5 bg-orange-500 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
          <span className={`absolute w-6 h-0.5 bg-orange-500 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute w-6 h-0.5 bg-orange-500 transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
        </button>
      </div>
    </div>
    </header>
    
    {/* Мобильное меню */}
    
    <div className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-xl transition-all duration-700 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
    <div className="absolute top-4 right-4">
      <button 
        className="w-12 h-12 flex items-center justify-center text-orange-500"
        onClick={() => setIsMenuOpen(false)}
      >
        <XMarkIcon className="w-8 h-8" />
      </button>
    </div>
    
    <nav className="h-full flex flex-col items-center justify-center space-y-8">
      {[{name:'Главная', href:"/"}, {name:'Услуги', href:"services"}, {name:'О нас', href:"about"}].map((item, index) => (
        <a 
          key={index}
          href={item.href} 
          className={`text-3xl font-bold text-white transform transition-all duration-700 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
          style={{ transitionDelay: `${index * 100}ms` }}
          onClick={() => setIsMenuOpen(false)}
        >
          {item.name}
        </a>
      ))}
      <button className="bg-gradient-to-r from-orange-500 to-orange-700 px-8 py-4 rounded-xl font-bold text-xl mt-8">
        Рассчитать стоимость
      </button>
    </nav>
    </div>
    </>
    )
}
export default Header