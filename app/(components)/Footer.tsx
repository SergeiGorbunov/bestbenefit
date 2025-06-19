const Footer = () => {
    return (
        <>
        <footer className="relative z-10 border-t border-gray-900 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-6">
                BEST BENEFIT
              </div>
              <p className="text-gray-500 mb-6">
                Логистические решения из Китая. Гарантия скорости и надежности.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons would go here */}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Контакты</h4>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">↳</span> 
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">↳</span> 
                  <span>info@BEST BENEFIT.ru</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">↳</span> 
                  <span>Москва, ул. Логистическая, 8</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Услуги</h4>
              <ul className="space-y-4 text-gray-500">
                <li className="hover:text-orange-500 transition cursor-pointer">Авиаперевозки</li>
                <li className="hover:text-orange-500 transition cursor-pointer">Морские перевозки</li>
                <li className="hover:text-orange-500 transition cursor-pointer">ЖД доставка</li>
                <li className="hover:text-orange-500 transition cursor-pointer">Таможенное оформление</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Ресурсы</h4>
              <ul className="space-y-4 text-gray-500">
                <li className="hover:text-orange-500 transition cursor-pointer">Отслеживание груза</li>
                <li className="hover:text-orange-500 transition cursor-pointer">Калькулятор стоимости</li>
                <li className="hover:text-orange-500 transition cursor-pointer">Блог о логистике</li>
                <li className="hover:text-orange-500 transition cursor-pointer">Документация</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-900 pt-8 text-center text-gray-600">
            <p>© 2023 BEST BENEFIT. Все права защищены.</p>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer