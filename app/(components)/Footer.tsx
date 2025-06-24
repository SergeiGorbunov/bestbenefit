const Footer = () => {
  return (
    <>
      <footer className="relative z-10 border-t border-gray-900 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1  mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-6">
                VIPAZA CARGO
              </div>
              <p className="text-gray-500 mb-6">
                Логистические решения из Китая. Гарантия скорости и надежности.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons would go here */}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 text-center text-gray-600">
            <p>© 2025 VIPAZA CARGO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
