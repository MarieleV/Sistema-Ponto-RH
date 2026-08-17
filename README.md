<div align="center">
  <img src="https://img.icons8.com/fluency/96/clock--v1.png" alt="Ícone de Relógio" width="80"/>
  
  <h1>Sistema de Registro de Ponto Eletrônico</h1>
  
  <h3>PAC — Projeto de Aprendizagem Colaborativa Extensionista</h3>
  <p>
    <b>Curso de Engenharia de Software — Católica de Santa Catarina</b><br/>
    Professores orientadores: Luiz Carlos Camargo e Claudinei Dias
  </p>

  <p>
    <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge" alt="Status: Em Desenvolvimento" />
    <img src="https://img.shields.io/badge/arquitetura-monolítica%20em%20camadas-blue?style=for-the-badge" alt="Arquitetura Monolítica" />
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  </p>
</div>

---

<div align="center">

### 📑 Sumário

[Descrição Geral](#-descrição-geral) • [Gestão do Projeto](#-gestão-do-projeto) • [Objetivo Geral](#-objetivo-geral) • [Público-alvo](#-público-alvo-e-principais-funcionalidades) • [Justificativa](#-justificativa) • [Telas Principais](#%EF%B8%8F-telas-principais) • [Ambiente de Desenvolvimento](#%EF%B8%8F-requisitos-para-preparar-o-ambiente-de-desenvolvimento) • [Requisitos (RF e RNF)](#-requisitos-funcionais-rf) • [Arquitetura](#%EF%B8%8F-arquitetura-do-sistema) • [Fluxos de Negócio](#-fluxos-de-negócio-resumidos)

</div>

---

## 📄 Descrição Geral

O projeto propõe um sistema corporativo de **registro de ponto eletrônico**, focado em simplificar e organizar a gestão da jornada dos colaboradores.

A plataforma permite que:
- Funcionários registrem batidas de entrada, pausa, retorno e saída.
- Consultem histórico de batidas.
- Enviem justificativas (ausência ou esquecimento).
- O RH monitore registros em tempo real, aprove/rejeite justificativas, faça ajustes e exporte relatórios em PDF.

O sistema busca garantir **transparência, confiabilidade e agilidade** na gestão de frequência, com **segurança** e **controle de acesso** por perfil de usuário.

---

## 🔗 Gestão do Projeto

| Ferramenta | Descrição e Acesso |
| :---: | :--- |
| 📌 **Trello** | [Quadro de Tarefas Kanban](https://trello.com/invite/b/68bb0c0ee781a1a13dde298f/ATTI167e8d398c9f79057de7b6074c39a4c0BEED7813/sistema-de-batida-de-ponto-pac) |
| 🧩 **Jira** | [Gestão Ágil e Backlog](https://mariele-silva.atlassian.net/jira/software/projects/SPP/code?atlOrigin=eyJpIjoiZjEwMmJhNjhlYzM2NGVhYmI4YTRiZjY5NGE5MTg1NWUiLCJwIjoiaiJ9) |
| 🎨 **Figma** | [Protótipo e Design UI/UX](https://www.figma.com/design/sXEnL56V3endmL5zdTqlTx/Consulth-Gerencimento-de-Ponto?node-id=0-1&m=dev&t=shpo0fjc9OVQwWEU-1) |

---

## 🎯 Objetivo Geral

Disponibilizar uma plataforma **centralizada e automatizada** para registro de ponto, garantindo:
- Registro rápido (entrada, pausa, retorno e saída)
- Histórico acessível
- Envio de justificativas
- Painel de monitoramento em tempo real
- Aprovação/rejeição de justificativas
- Ajustes manuais pelo RH
- Relatórios em PDF
- Segurança e autenticação baseada em perfis

---

## 👥 Público-alvo e Principais Funcionalidades

<table>
<tr>
<td width="50%" valign="top">

### 🧑‍💼 Colaboradores

- Registrar batidas (entrada, pausa, retorno e saída)
- Consultar histórico
- Navegar em calendário
- Enviar justificativas (atestado/documento ou esquecimento)
- Acompanhar status (pendente/aprovada/rejeitada)

</td>
<td width="50%" valign="top">

### 🛡️ RH / Administrador

- Dashboard de batidas em tempo real
- Notificações de pontos ausentes ou inconsistentes
- Aprovar/rejeitar justificativas
- Ajustar registros manualmente
- Exportar relatórios em PDF
- Cadastrar novos colaboradores

</td>
</tr>
</table>

---

## 💡 Justificativa

O PAC foi desenvolvido com o objetivo de atender a uma necessidade identificada no setor de RH da empresa **CONSULTH Soluções Empresariais**: a falta de um sistema simples e confiável para registrar batidas de ponto, organizar justificativas de ausência e acompanhar a frequência de trabalho dos funcionários. A solução proposta visa reduzir retrabalho, padronizar o processo e oferecer mais agilidade no controle de horas.

---

## 📱 Descrição do App

O projeto consiste em uma aplicação web para registro e gerenciamento de ponto eletrônico, em que os funcionários podem realizar batidas de entrada e saída, visualizar seus registros e enviar justificativas, e o setor de RH — que possui acesso administrativo — consegue consultar frequências, editar batidas, avaliar justificativas enviadas pelos funcionários e gerar relatórios.

---

## 🖼️ Telas Principais

<div align="center">

#### Tela de Login
<img width="700" alt="Tela de Login" src="https://github.com/user-attachments/assets/29cbd8d7-ccb2-4c20-aafc-2fc9342fd6b6" />
<br/><sub>Permite que os usuários acessem o sistema por meio de e-mail e senha.</sub>

<br/><br/>

#### Tela de Batida de Ponto
<img width="700" alt="Tela de Batida de Ponto" src="https://github.com/user-attachments/assets/63266ccf-feef-4fa4-ae70-b0aaa9a05f64" />
<br/><sub>Possibilita o registro das entradas, saídas e intervalos do colaborador.</sub>

<br/><br/>

#### Tela de Ajuste de Ponto
<img width="700" alt="Tela de Ajuste de Ponto" src="https://github.com/user-attachments/assets/edbadc55-7709-44b5-8a91-c01b7ab5d8ad" />
<br/><sub>Permite que o colaborador envie uma solicitação de ajuste de ponto ao administrador, descrevendo sua justificativa e anexando documentos.</sub>

<br/><br/>

#### Tela de Gestão de Justificativas
<img width="700" alt="Tela de Gestão de Justificativas" src="https://github.com/user-attachments/assets/89a3d979-345d-44f8-ad12-0a29422f3170" />
<br/><sub>Fornece a visualização das listagens das justificativas negadas e aceitas, além das recentes.</sub>

<br/><br/>

#### Tela de Justificativas Aceitas
<img width="700" alt="Tela de Justificativas Aceitas" src="https://github.com/user-attachments/assets/287f50bb-2dff-41f6-836b-d682ab0b6783" />

</div>

---

## ⚙️ Requisitos para Preparar o Ambiente de Desenvolvimento

**Ferramentas Necessárias:**
- Node.js + React + Tailwind
- NPM
- MySQL
- Git

**Passos Básicos:**
1. Clonar o repositório.
2. Instalar dependências com `npm install`.
3. Configurar o arquivo `.env` com credenciais do banco e JWT.
4. Criar o banco de dados e rodar o script de criação das tabelas.
5. Iniciar o servidor com `npm start`.

---

## ✅ Requisitos Funcionais (RF)

| Código | Descrição |
| :---: | :--- |
| **RF01** | O sistema deve permitir que colaboradores registrem ponto (entrada, pausa e saída). |
| **RF02** | O sistema deve armazenar data e hora em cada batida de ponto realizada. |
| **RF03** | O sistema deve permitir que o colaborador visualize o histórico de seus últimos registros. |
| **RF04** | O sistema deve permitir que os colaboradores enviem justificativas de ausência ou esquecimento de batida. |
| **RF05** | O sistema deve permitir que o RH visualize todas as solicitações de justificativas. |
| **RF06** | O sistema deve permitir que o RH aprove ou rejeite justificativas enviadas pelos colaboradores. |
| **RF07** | O sistema deve permitir ao RH ajustar manualmente batidas de ponto após aprovação de justificativa. |
| **RF08** | O sistema deve disponibilizar um dashboard simples para o RH visualizar registros por colaborador. |
| **RF09** | O sistema deve possibilitar a exportação de relatórios básicos em formato PDF. |
| **RF10** | O sistema deve registrar se uma justificativa foi aprovada ou rejeitada e mostrar o status ao colaborador. |
| **RF11** | O sistema deve permitir que o RH cadastre novos colaboradores. |

---

## 🔒 Requisitos Não Funcionais (RNF)

| Código | Descrição |
| :---: | :--- |
| **RNF01** | O sistema deve exigir autenticação via JWT para acesso de usuários. |
| **RNF02** | Os dados sensíveis devem ser protegidos por criptografia. |
| **RNF03** | O sistema deve oferecer controle de acesso baseado em perfis de usuário (colaborador e RH/administrador). |
| **RNF04** | O sistema deve ser compatível com diferentes dispositivos. |
| **RNF05** | O tempo de resposta das páginas não deve ultrapassar 5 segundos em condições normais. |
| **RNF06** | O sistema deve utilizar banco de dados MySQL para armazenamento de dados. |
| **RNF07** | O sistema deve estar disponível durante todo o período de expediente. |
| **RNF08** | O sistema deve apresentar mensagens de erro claras e compreensíveis. |

---

## 🏗️ Arquitetura do Sistema

O sistema será desenvolvido com **arquitetura monolítica em camadas**, garantindo separação lógica entre:

| Camada | Responsabilidade |
| :---: | :--- |
| **Apresentação (Front-end)** | Interface gráfica, envia requisições ao backend e exibe resultados. |
| **Negócio (Back-end/Lógica)** | Aplica regras de negócio, incluindo: **Autenticação** (gerenciamento de usuários e segurança com JWT), **Registro de ponto** (marcação e validação de horários), **Gestão de usuários** e **Relatórios**. |
| **Dados (Banco de Dados)** | Armazenamento de usuários (funcionários e administradores), registros de batidas de ponto e relatórios. |

---

## 🧱 Planejamento de Infraestrutura

| Camada | Tecnologia |
| :--- | :--- |
| **Banco de Dados** | MySQL |
| **Backend** | Node.js com Express |
| **Frontend** | JavaScript (React.js) |
| **Autenticação** | JWT (JSON Web Token) |
| **Controle de Versão** | Git / GitHub |

---

## 🔄 Fluxos de Negócio (resumidos)

<details>
<summary><b>🕐 Registro de Ponto</b></summary>
<br>

1. Colaborador faz login.
2. Validação de rede/IP e geolocalização.
3. Registro aceito ou recusado.

</details>

<details>
<summary><b>📝 Justificativa por Esquecimento</b></summary>
<br>

1. Colaborador informa data/hora.
2. RH recebe solicitação.
3. RH aprova/rejeita solicitação.
4. Se aprovada, sistema insere ponto manualmente com status "Ajustado".

</details>

<details>
<summary><b>📄 Justificativa com Documento</b></summary>
<br>

1. Colaborador envia arquivo (atestado).
2. RH aprova/rejeita.
3. Status refletido no histórico do colaborador.

</details>

---

## 🚀 Funcionalidades Futuras

- [ ] Validação de IP.
- [ ] Upload de documentos (atestados e justificativas).
- [ ] Notificações automáticas (alertas de ponto não registrado, inconsistências, etc.).
- [ ] Relatórios avançados (Excel, filtros por setor/período).
- [ ] Logs detalhados de auditoria para fins legais.

<br>

<div align="center">
  <sub>Projeto de Aprendizagem Colaborativa Extensionista — Engenharia de Software, Católica de Santa Catarina</sub>
</div>
