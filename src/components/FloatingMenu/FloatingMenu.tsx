"use client";

import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Botón del Menú en la parte superior derecha */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 bg-gray-800 text-white p-4 rounded-full shadow-xl hover:bg-gray-700 transition-colors duration-300 ease-in-out"
      >
        <FiMenu size={24} />
      </button>

      {/* Menú flotante debajo del botón */}
      <div
        className={`fixed top-16 right-4 bg-gray-900 text-white w-56 p-4 rounded-lg shadow-2xl border border-gray-700 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <ul>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200">Inicio</li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200">Servicios</li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200">Portafolio</li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200">Contacto</li>
        </ul>
      </div>
    </div>
  );
}