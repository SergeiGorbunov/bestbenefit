// src/components/TelegramOrderForm.jsx (обновленная версия)
'use client';
import React, { useState } from 'react';
import { 
  PhoneIcon, 
  UserIcon, 
  CheckCircleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

export default function TelegramOrderForm({ selectedService, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
    contactMethods: {
      call: false,
      whatsapp: false,
      telegram: false,
      other: false
    }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      contactMethods: {
        ...prev.contactMethods,
        [name]: checked
      }
    }));
  };

  const getContactMethods = () => {
    return Object.entries(formData.contactMethods)
      .filter(([_, value]) => value)
      .map(([key]) => {
        switch(key) {
          case 'call': return '📞 Телефонный звонок';
          case 'whatsapp': return '💚 WhatsApp';
          case 'telegram': return '📱 Telegram';
          case 'other': return '❓ Другое';
          default: return key;
        }
      })
      .join('\n');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Формируем сообщение для Telegram с информацией об услуге
      const contactMethods = getContactMethods();
      
      const message = `
📝 *Заказ услуги с сайта!*

🛎️ *Услуга:* ${selectedService.title || 'Не указана'}
💰 *Стоимость:* ${selectedService.price || 'Не указана'}
${selectedService.days ? `⏱️ *Сроки:* ${selectedService.days}\n` : ''}

👤 *Имя:* ${formData.name || 'Не указано'}
📱 *Телефон:* ${formData.phone || 'Не указан'}

💬 *Комментарий:*
${formData.comment || 'Нет комментария'}

📌 *Предпочитаемые способы связи:*
${contactMethods || 'Не указаны'}
      `.trim();
      
      // Отправляем данные в API роут Next.js
      const response = await fetch('/api/send-to-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
      const responseData = await response.json();
      
      if (!response.ok || !responseData.success) {
        throw new Error(responseData.error || 'Ошибка при отправке сообщения в Telegram');
      }
      
      setIsSubmitted(true);
      
      // Сбрасываем форму
      setFormData({
        name: '',
        phone: '',
        comment: '',
        contactMethods: {
          call: false,
          whatsapp: false,
          telegram: false,
          other: false
        }
      });
      
    } catch (error) {
      console.error('Ошибка:', error);
      setError(error.message || 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <CheckCircleIcon className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Заявка успешно отправлена!</h3>
        <p className="text-gray-300 mb-6">
          Наш менеджер свяжется с вами в ближайшее время удобным способом.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-3 rounded-xl font-medium"
          >
            Новая заявка
          </button>
          <button 
            onClick={onClose}
            className="bg-gradient-to-r from-orange-500 to-orange-700 px-6 py-3 rounded-xl font-medium"
          >
            Закрыть
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {selectedService && (
        <div className="mb-6 text-center">
          <h3 className="text-xl font-bold">Заказ услуги: {selectedService.title}</h3>
          <p className="text-orange-500 mt-1">{selectedService.price}</p>
          {selectedService.days && (
            <p className="text-gray-400">Срок: {selectedService.days}</p>
          )}
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 rounded-full"></div>
        </div>
      )}
      
      {error && (
        <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-xl text-red-300">
          <p>{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Поле имени */}
        <div>
          <label className="block text-gray-400 mb-2 flex items-center">
            <UserIcon className="w-4 h-4 mr-2" />
            Ваше имя
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl focus:border-orange-500 focus:outline-none"
            placeholder="Иван Иванов"
          />
        </div>
        
        {/* Поле телефона */}
        <div>
          <label className="block text-gray-400 mb-2 flex items-center">
            <PhoneIcon className="w-4 h-4 mr-2" />
            Номер телефона
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl focus:border-orange-500 focus:outline-none"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        
        {/* Поле комментария */}
        <div>
          <label className="block text-gray-400 mb-2">
            Комментарий
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl focus:border-orange-500 focus:outline-none"
            placeholder="Дополнительная информация..."
          ></textarea>
        </div>
        
        {/* Способы связи */}
        <div>
          <label className="block text-gray-400 mb-3">
            Предпочитаемый способ связи
          </label>
          
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 cursor-pointer hover:border-orange-500 transition-colors">
              <input
                type="checkbox"
                name="call"
                checked={formData.contactMethods.call}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500 border-gray-600"
              />
              <span className="ml-3">Звонок</span>
            </label>
            
            <label className="flex items-center bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 cursor-pointer hover:border-orange-500 transition-colors">
              <input
                type="checkbox"
                name="whatsapp"
                checked={formData.contactMethods.whatsapp}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500 border-gray-600"
              />
              <span className="ml-3">WhatsApp</span>
            </label>
            
            <label className="flex items-center bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 cursor-pointer hover:border-orange-500 transition-colors">
              <input
                type="checkbox"
                name="telegram"
                checked={formData.contactMethods.telegram}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500 border-gray-600"
              />
              <span className="ml-3">Telegram</span>
            </label>
            
            <label className="flex items-center bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 cursor-pointer hover:border-orange-500 transition-colors">
              <input
                type="checkbox"
                name="other"
                checked={formData.contactMethods.other}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500 border-gray-600"
              />
              <span className="ml-3">Другое</span>
            </label>
          </div>
          
          <p className="text-sm text-gray-500 mt-2">
            Если выбрано "Другое", укажите предпочтительный способ в комментарии
          </p>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 py-4 rounded-xl font-bold transition-all duration-300 ${
            isSubmitting ? 'opacity-70' : 'hover:scale-[1.02]'
          }`}
        >
          {isSubmitting ? (
            <>
              <ArrowPathIcon className="w-5 h-5 animate-spin" />
              Отправка...
            </>
          ) : 'Заказать услугу'}
        </button>
        
        <p className="text-xs text-gray-500 text-center">
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        </p>
      </form>
    </div>
  );
}