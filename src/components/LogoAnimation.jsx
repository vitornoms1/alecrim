import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import logoImg from '../assets/logoremovebg.png';

const LogoAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [coords, setCoords] = useState({ x: 0, y: 0, scale: 0.5 });

  useEffect(() => {
    // Função para calcular o destino exato
    const calculateDestination = () => {
      // Procuramos a logo que está dentro da Navbar (ela precisa ter um ID ou classe única)
      const navbarLogo = document.querySelector('.navbar-logo-target');
      
      if (navbarLogo) {
        const rect = navbarLogo.getBoundingClientRect();
        
        // Calculamos a distância do centro da tela até o centro da logo na Navbar
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const targetX = rect.left + rect.width / 2 - centerX;
        const targetY = rect.top + rect.height / 2 - centerY;

        setCoords({ 
          x: targetX, 
          y: targetY, 
          scale: rect.height / (window.innerWidth < 768 ? 160 : 224) // Baseado no w-40 ou w-56
        });
      } else {
        // Fallback caso a logo da navbar ainda não tenha sido renderizada
        setCoords({
          x: window.innerWidth < 768 ? -window.innerWidth * 0.35 : -window.innerWidth * 0.34,
          y: -window.innerHeight * 0.45,
          scale: window.innerWidth < 768 ? 0.4 : 0.5
        });
      }
    };

    calculateDestination();

    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <motion.img
            src={logoImg}
            alt="Alecrim Logo"
            initial={{ scale: 1.2, x: 0, y: 0 }}
            animate={{ 
              scale: coords.scale,
              x: coords.x,
              y: coords.y 
            }}
            transition={{ 
              duration: 1.5, 
              delay: 0.6, 
              ease: [0.6, 0.01, -0.05, 0.95] 
            }}
            className="w-40 md:w-56 object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoAnimation;