# Sistema de Registro de Ponto Eletrônico  

## Descrição Geral  
O projeto propõe um sistema corporativo de **registro de ponto eletrônico**, focado em simplificar e organizar a gestão da jornada dos colaboradores.  

A plataforma permite que:  
- Funcionários registrem batidas de entrada, pausa, retorno e saída.  
- Consultem histórico de batidas.  
- Enviem justificativas (ausência ou esquecimento).  
- O RH monitore registros em tempo real, aprove/rejeite justificativas, faça ajustes e exporte relatórios em PDF.  

O sistema busca garantir **transparência, confiabilidade e agilidade** na gestão de frequência, com **segurança** e **controle de acesso** por perfil de usuário.  

---
## Gestão do Projeto
- Trello
- Jira
- Figma [Visualize o design](https://www.figma.com/design/sXEnL56V3endmL5zdTqlTx/Consulth-Gerencimento-de-Ponto?node-id=0-1&m=dev&t=shpo0fjc9OVQwWEU-1)


## Objetivo Geral  
Disponibilizar uma plataforma **centralizada e automatizada** para registro de ponto, garantindo:  

- Registro rápido (entrada, pausa, retorno e saída).  
- Histórico acessível.  
- Envio de justificativas.  
- Painel de monitoramento em tempo real.  
- Aprovação/rejeição de justificativas.  
- Ajustes manuais pelo RH.  
- Relatórios em PDF.  
- Segurança e autenticação baseada em perfis.  

---

## Público-alvo e Principais Funcionalidades  

### Colaboradores:  
- Registrar batidas (entrada, pausa, retorno e saída).  
- Consultar histórico.  
- Navegar em calendário.  
- Enviar justificativas (atestado/documento ou esquecimento).  
- Acompanhar status (pendente/aprovada/rejeitada).  

### RH/Administrador:  
- Dashboard de batidas em tempo real.  
- Notificações de pontos ausentes ou inconsistentes.  
- Aprovar/rejeitar justificativas.  
- Ajustar registros manualmente.  
- Exportar relatórios em PDF.  
- Cadastrar novos colaboradores.  

---

## Requisitos Funcionais (RF)  

| Código | Descrição |
|--------|-----------|
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

## Requisitos Não Funcionais (RNF)  

| Código | Descrição |
|--------|-----------|
| **RNF01** | O sistema deve exigir autenticação via JWT para acesso de usuários. |
| **RNF02** | Os dados sensíveis devem ser protegidos por criptografia. |
| **RNF03** | O sistema deve oferecer controle de acesso baseado em perfis de usuário (colaborador e RH/administrador). |
| **RNF04** | O sistema deve ser compatível com diferentes dispositivos. |
| **RNF05** | O tempo de resposta das páginas não deve ultrapassar 5 segundos em condições normais. |
| **RNF06** | O sistema deve utilizar banco de dados MySQL para armazenamento de dados. |
| **RNF07** | O sistema deve armazenar registros com carimbo de data/hora de criação e atualização. |
| **RNF08** | O sistema deve estar disponível durante todo o período de expediente. |
| **RNF09** | O sistema deve ter arquitetura modular para possibilitar futuras expansões. |
| **RNF10** | O sistema deve apresentar mensagens de erro claras e compreensíveis. |

---

## Arquitetura do Sistema  
O sistema será desenvolvido com **arquitetura monolítica em camadas**, garantindo separação lógica entre:  

### Camadas  
- **Apresentação (Front-end)**: interface gráfica, envia requisições ao backend e exibe resultados.  
- **Negócio (Back-end/Lógica de Aplicação)**: aplica regras de negócio, incluindo:  
  - **Autenticação**: gerenciamento de usuários, controle de acesso e segurança com JWT.  
  - **Registro de ponto**: marcação de entrada, saída e intervalos, validação de horários.  
  - **Gestão de usuários**: cadastro, edição e desativação de contas.  
  - **Relatórios**: geração de relatórios simples (acesso apenas para administradores).  
- **Dados (Banco de dados)**: armazenamento de:  
  - Usuários (funcionários e administradores).  
  - Registros de batidas de ponto.  
  - Relatórios.  

---

## Planejamento de Infraestrutura  
- **Banco de Dados**: MySQL  
- **Backend**: Node.js com Express  
- **Frontend**: JavaScript (React.js)  
- **Autenticação**: JWT (JSON Web Token)  
- **Controle de versão**: GitHub  

---

## Fluxos de Negócio (resumidos)  

### Registro de Ponto  
1. Colaborador faz login.  
2. Validação de rede/IP e geolocalização.  
3. Registro aceito ou recusado.  

### Justificativa por Esquecimento  
1. Colaborador informa data/hora.  
2. RH recebe solicitação.  
3. RH aprova/rejeita solicitação.  
4. Se aprovada, sistema insere ponto manualmente com status “Ajustado”.  

### Justificativa com Documento  
1. Colaborador envia arquivo.  
2. RH aprova/rejeita.  
3. Status refletido no histórico do colaborador.  

---

## Funcionalidades Futuras  
- Validação de IP.  
- Upload de documentos (atestados e justificativas).  
- Notificações automáticas (alertas de ponto não registrado, inconsistências, etc.).  
- Relatórios avançados (Excel, filtros por setor/período).  
- Logs detalhados de auditoria para fins legais.  
