import React from 'react';

const IconInstagram = () => (
  <svg 
    className="w-6 h-6 text-gray-400 hover:text-alecrim-yellow transition-colors" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" />
  </svg>
);

function Footer() {
  return (
    <footer className="bg-gray-900 py-10 border-t-4 border-alecrim-yellow">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-sm text-center md:text-left font-medium">
          © {new Date().getFullYear()} Alecrim Casa de Festas. Todos os direitos reservados.
        </p>
        <a 
          href="https://www.instagram.com/alecrimcasadefestas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-alecrim-yellow transition-colors mt-4 md:mt-0 group"
        >
          <IconInstagram />
          <span className="ml-2 font-semibold">@alecrimcasadefestas</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;