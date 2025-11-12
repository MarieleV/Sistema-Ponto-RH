import React from "react";
import IconNovas from "../../assets/Icon-Novas.png";

const JustificativasNovas = () => {
  return (
    <div className="flex flex-col w-full h-full p-6">

      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 w-[96%] min-h-full flex flex-col gap-6">

        {/* Cabeçalho */}
        <div className="flex items-center gap-3 border-b border-gray-300 pb-3">
          <img src={IconNovas} alt="Novas" className="w-6" />
          <h2 className="text-xl font-semibold">Novas Justificativas</h2>
        </div>

        {/* Filtro */}
        <div className="mt-2">
          <input
            type="text"
            placeholder="Pesquisar por nome..."
            className="w-80 h-10 border border-gray-300 rounded-md bg-gray-50 px-3 text-sm focus:border-gray-500 outline-none"
          />
        </div>

      </div>

    </div>
  );
};

export default JustificativasNovas;
