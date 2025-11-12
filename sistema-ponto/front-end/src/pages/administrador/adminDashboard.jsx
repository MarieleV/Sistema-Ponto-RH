import React from "react";

const AdminDashboard = () => {
  return (
    <div className="w-full h-full bg-[#f6f6f7] p-6 overflow-y-auto">

      {/* OPTIONS: Filtro + Calendário */}
      <div className="bg-white border border-gray-300 rounded-sm p-4 mb-6">
        
        {/* Filtro */}
        <div className="border-b border-gray-200 pb-3 mb-3">
          <button className="flex items-center gap-2 text-xl font-semibold text-black">
            Filtrar
            <img src="/Icon-Filtro.png" alt="Filtro" className="h-4" />
          </button>
        </div>

        {/* Calendário */}
        <div className="relative w-52">
          <input
            type="date"
            id="inputCalendario"
            className="w-full h-10 border border-gray-300 rounded px-3 pr-12 cursor-pointer"
          />

          <label
            htmlFor="inputCalendario"
            className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
          >
            <img src="/Icon-Calendario.png" alt="Calendário" className="h-6" />
          </label>
        </div>
      </div>

      {/* GRID DE GRÁFICOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* CARD */}
        {[
          "Operação I",
          "Operação II",
          "Operação III",
          "RH",
          "CX",
          "Jurídico"
        ].map((titulo, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-sm p-5 shadow-sm hover:-translate-y-1 transition transform"
          >
            <h3 className="text-center text-gray-800 font-semibold pb-2 mb-4 border-b border-gray-200">
              {titulo}
            </h3>

            <div className="flex justify-center items-center">
              <canvas
                id={`${titulo.replace(" ", "").toLowerCase()}Chart`}
                className="max-w-[160px] max-h-[160px]"
              ></canvas>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AdminDashboard;
