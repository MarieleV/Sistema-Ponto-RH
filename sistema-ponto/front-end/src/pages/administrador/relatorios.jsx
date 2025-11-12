import React from "react";

import IconFiltro from "../../assets/Icon-Filtro.png";
import IconCalendario from "../../assets/Icon-Calendario.png";
import IconExcel from "../../assets/Icon-Excel.png";
import IconPDF from "../../assets/Icon-PDF.png";
import IconNegadas from "../../assets/Icon-Negadas.png";

const Relatorios = () => {
  return (
    <div className="w-full p-6 overflow-y-auto">

      {/* BLOCO FILTRO */}
      <div className="bg-white shadow-md rounded-md p-6 mb-10">

        {/* Cabeçalho do filtro */}
        <div className="flex items-center mb-4">
          <button className="flex items-center gap-2 text-xl font-semibold">
            Filtrar
            <img src={IconFiltro} alt="Filtro" className="w-5" />
          </button>
        </div>

        {/* Linha divisória */}
        <div className="w-full h-px bg-gray-300 mb-4"></div>

        {/* Colunas do filtro */}
        <div className="flex flex-col gap-4">

          {/* Data */}
          <div className="flex gap-4">
            <div className="relative w-40">
              <input
                type="date"
                className="w-full h-10 border border-gray-300 rounded px-3 pr-10 text-sm focus:outline-none"
              />
              <img
                src={IconCalendario}
                className="w-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          {/* Dupla: Funcionário + Setor */}
          <div className="flex gap-4 w-full">

            <select className="w-full h-10 border border-gray-300 rounded px-3 text-sm">
              <option>Funcionário</option>
              <option>Lara Monteiro Alves</option>
              <option>Rafael Albuquerque Souza</option>
              <option>Camila Nogueira Prado</option>
              <option>Gustavo Farias Menezes</option>
              <option>Lucas Navarro Pinto</option>
            </select>

            <select className="w-full h-10 border border-gray-300 rounded px-3 text-sm">
              <option>Setor</option>
              <option>RH</option>
              <option>Operação I</option>
              <option>Operação II</option>
              <option>Jurídico</option>
              <option>Contabilidade</option>
              <option>CX</option>
            </select>

          </div>

        </div>

      </div>

      {/* BLOCO PREVIEW */}
      <div className="flex justify-between items-center bg-gray-200 border border-black/20 rounded px-5 py-3 mb-6">

        <div className="text-gray-700 text-lg font-semibold">Pré-visualização ::</div>

        <div className="flex gap-4">
          <img src={IconExcel} alt="Excel" className="w-7 cursor-pointer" />
          <img src={IconPDF} alt="PDF" className="w-7 cursor-pointer" />
        </div>

      </div>

      {/* TABELA */}
      <table className="w-full border-collapse text-sm">
        <thead className="bg-black text-white">
          <tr>
            <th className="py-2 px-3 text-left">Data</th>
            <th className="py-2 px-3 text-left">Funcionário</th>
            <th className="py-2 px-3 text-left">Setor</th>
            <th className="py-2 px-3 text-left">Justificativa</th>
            <th className="py-2 px-3 text-center">Status</th>
          </tr>
        </thead>

        <tbody>

          {/* Linha 1 */}
          <tr className="bg-gray-100">
            <td className="py-2 px-3">10/09/2025</td>
            <td className="py-2 px-3">Lara Monteiro Alves</td>
            <td className="py-2 px-3">RH</td>
            <td className="py-2 px-3">Esquecimento</td>
            <td className="py-2 px-3 text-center">
              <span className="px-3 py-1 rounded-full bg-green-600 text-white text-xs font-semibold">
                Aprovado
              </span>
            </td>
          </tr>

          {/* Linha 2 */}
          <tr className="bg-gray-200">
            <td className="py-2 px-3">19/09/2025</td>
            <td className="py-2 px-3">Rafael Albuquerque Souza</td>
            <td className="py-2 px-3">Operação I</td>
            <td className="py-2 px-3">Esquecimento</td>
            <td className="py-2 px-3 text-center">
              <span className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-semibold">
                Rejeitado
              </span>
            </td>
          </tr>

          {/* Linha 3 */}
          <tr className="bg-gray-100">
            <td className="py-2 px-3">19/09/2025</td>
            <td className="py-2 px-3">Camila Nogueira Prado</td>
            <td className="py-2 px-3">Operação II</td>
            <td className="py-2 px-3">Atestado</td>
            <td className="py-2 px-3 text-center">
              <span className="px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-semibold">
                Em análise
              </span>
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  );
};

export default Relatorios;
