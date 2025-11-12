import React, { useState } from "react";

import IconFiltro from "../../assets/Icon-Filtro.png";
import IconPesquisa from "../../assets/Icon-Pesquisa.png";
import IconAdicionar from "../../assets/Icon-Adicionar.png";
import IconStatusOK from "../../assets/Icon-StatusOK.png";

const inputBase =
  "border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white shadow-sm " +
  "focus:border-black focus:ring-1 focus:ring-black outline-none transition";

const GestaoColaboradores = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full p-6 overflow-y-auto">

      <h1 className="text-xl font-semibold mb-6">Gestão de Colaboradores</h1>

      {/* Barra de Opções */}
      <div className="bg-white border border-gray-300 rounded px-6 py-4 mb-6 flex justify-between items-center shadow-sm">

        <div className="flex flex-col gap-4">

          {/* Filtro */}
          <div className="border-b pb-1 w-fit">
            <button className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              Filtrar
              <img src={IconFiltro} className="w-4" />
            </button>
          </div>

          {/* Pesquisa */}
          <div className="relative">
            <input type="text" className={`${inputBase} w-72 pr-10`} />
            <img
              src={IconPesquisa}
              className="w-5 absolute right-3 top-2.5 opacity-75"
            />
          </div>
        </div>

        <img
          src={IconAdicionar}
          className="w-10 cursor-pointer hover:scale-110 transition"
          onClick={() => setShowModal(true)}
        />
      </div>

      {/* Tabela */}
      <table className="w-full border-collapse bg-white border border-gray-300 rounded overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-sm font-semibold text-gray-700">
            <th className="p-3">Status</th>
            <th className="p-3">Nome</th>
            <th className="p-3">Setor</th>
            <th className="p-3">Cargo</th>
            <th className="p-3">Função</th>
            <th className="p-3">Horas</th>
          </tr>
        </thead>

        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 text-sm text-gray-700">
            <td className="p-3">
              <img src={IconStatusOK} className="w-5 mx-auto" />
            </td>
            <td className="p-3">Lara Monteiro Alves</td>
            <td className="p-3">RH</td>
            <td className="p-3">Ciências Contábeis</td>
            <td className="p-3">Remuneração/Benefícios</td>
            <td className="p-3">-8 horas</td>
          </tr>
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center
                        bg-black/40 backdrop-blur-sm animate-fadeIn">

          <div className="bg-[#fafafa] w-[760px] max-h-[90vh] overflow-y-auto 
                          rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.18)]
                          p-14 animate-scaleIn">

            <h2 className="text-2xl font-semibold mb-8 text-gray-900">
              Cadastro de Colaborador
            </h2>

            <form className="flex flex-col gap-10">

              {/* Seção 1 */}
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-3">
                  Informações Básicas
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-700">Tipo</label>
                    <select className={inputBase}>
                      <option>Selecione</option>
                      <option>Colaborador</option>
                      <option>Administrador</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Login</label>
                    <input type="text" className={inputBase} />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="text-sm text-gray-700">Nome</label>
                  <input type="text" className={inputBase} />
                </div>
              </div>

              {/* Linha 2 */}
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-3">
                  Dados Pessoais
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-700">Data de Nascimento</label>
                    <input type="text" placeholder="__/__/____" className={inputBase} />
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Gênero</label>
                    <div className="flex gap-8 mt-2 text-sm text-gray-700">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="genero" /> Masculino
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="genero" /> Feminino
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="text-sm text-gray-700">E-mail</label>
                    <input type="email" className={inputBase} />
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Telefone</label>
                    <input type="text" placeholder="(__) ____-____" className={inputBase} />
                  </div>
                </div>
              </div>

              {/* Documento */}
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-3">
                  Documentação
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-700">Documento</label>
                    <select className={inputBase}>
                      <option>Selecione</option>
                      <option>RG</option>
                      <option>CPF</option>
                      <option>CNH</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Número</label>
                    <input type="text" className={inputBase} />
                  </div>
                </div>
              </div>

              {/* Profissional */}
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-3">
                  Informações Profissionais
                </h3>

                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <label className="text-sm text-gray-700">Setor</label>
                    <select className={inputBase}>
                      <option>Selecione</option>
                      <option>Financeiro</option>
                      <option>RH</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Cargo</label>
                    <select className={inputBase}>
                      <option>Selecione</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Função</label>
                    <select className={inputBase}>
                      <option>Selecione</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="flex justify-center gap-6 mt-4">
                <button
                  type="submit"
                  className="px-10 py-3 bg-black text-white rounded-lg
                             font-medium hover:bg-gray-800 transition">
                  Cadastrar
                </button>

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-10 py-3 bg-gray-200 text-gray-800 rounded-lg
                             font-medium hover:bg-gray-300 transition">
                  Cancelar
                </button>
              </div>

            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default GestaoColaboradores;
