import React from "react";

import IconNegadas from "../../assets/Icon-Negadas.png";
import IconNovas from "../../assets/Icon-Novas.png";
import IconAceitas from "../../assets/Icon-Aceitas.png";

const AdminJustificativas = ({ onNavigate }) => {
  return (
    <div className="w-full flex justify-center items-center py-10">

      <div className="flex gap-16 justify-center items-center">

        {/* Card: Negadas */}
        <div
          className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={() => onNavigate("justificativasNegadas")}
        >
          <div className="w-32 h-32 bg-white rounded-lg border border-gray-300 shadow-sm flex items-center justify-center mb-2">
            <img src={IconNegadas} alt="Negadas" className="w-16" />
          </div>
          <span className="text-center leading-4 font-medium">Justificativas</span>
          <span className="text-center leading-4 font-medium">Negadas</span>
        </div>

        {/* Card: Novas */}
        <div
          className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={() => onNavigate("justificativasNovas")}
        >
          <div className="w-32 h-32 bg-white rounded-lg border border-gray-300 shadow-sm flex items-center justify-center mb-2">
            <img src={IconNovas} alt="Novas" className="w-16" />
          </div>
          <span className="text-center leading-4 font-medium">Novas</span>
          <span className="text-center leading-4 font-medium">Justificativas</span>
        </div>

        {/* Card: Aceitas */}
        <div
          className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={() => onNavigate("justificativasAceitas")}
        >
          <div className="w-32 h-32 bg-white rounded-lg border border-gray-300 shadow-sm flex items-center justify-center mb-2">
            <img src={IconAceitas} alt="Aceitas" className="w-16" />
          </div>
          <span className="text-center leading-4 font-medium">Justificativas</span>
          <span className="text-center leading-4 font-medium">Aceitas</span>
        </div>

      </div>

    </div>
  );
};

export default AdminJustificativas;
