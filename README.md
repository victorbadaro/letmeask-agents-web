# NLW Agents Web

Interface web desenvolvida durante o evento da **Rocketseat** para gerenciar salas com agentes inteligentes.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e bundler moderno
- **React Router DOM** - Roteamento para SPAs
- **TanStack Query** - Gerenciamento de estado para requisições
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Day.js** - Manipulação de datas
- **Web APIs** - MediaRecorder e getUserMedia para captura de áudio
- **Tailwind CSS v4** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI reutilizáveis
- **Lucide React** - Ícones modernos
- **Biome** - Linter e formatador de código

## 🏢️ Arquitetura e Padrões

- **SPA (Single Page Application)** com React Router
- **Composition Pattern** com shadcn/ui
- **Server State Management** com TanStack Query
- **Optimistic Updates** para melhor experiência do usuário
- **Real-time Audio Capture** com Web APIs nativas
- **Utility-First CSS** com Tailwind CSS
- **Component-Based Architecture**
- **TypeScript** para type safety
- **Path Aliases** para imports organizados

## 📋 Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm
- API do NLW Agents rodando em `http://localhost:3333`

## ⚙️ Configuração e Setup

### 1. Clone o repositório
```bash
git clone https://github.com/victorbadaro/letmeask-agents-web
cd letmeask-agents-web
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🔧 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Gera build de produção
- `pnpm preview` - Visualiza o build de produção

## 🎨 Componentes UI

O projeto utiliza **shadcn/ui** com as seguintes configurações:
- **Estilo**: New York
- **Cor base**: Zinc
- **Ícones**: Lucide React
- **CSS Variables**: Habilitado
- **Tema**: Suporte a dark/light mode

## 📱 Funcionalidades

### 🏠 Página Inicial
- **Listagem de salas** - Visualiza todas as salas disponíveis com informações detalhadas
- **Criação de salas** - Formulário para criar novas salas de perguntas e respostas
- **Navegação entre salas** - Roteamento dinâmico com informações de data e quantidade de perguntas
- **Interface responsiva** - Compatível com diferentes dispositivos

### 🏷️ Salas Individuais
- **Visualização de perguntas** - Lista todas as perguntas da sala com respostas da IA
- **Formulário de perguntas** - Interface para adicionar novas perguntas com integração completa à API
- **Criação de perguntas** - Sistema completo de POST para `/rooms/:roomId/questions` com validação
- **Respostas automáticas** - IA gera respostas baseadas no conteúdo de áudio da sala
- **Updates otimistas** - Interface responsíva com estado de carregamento durante geração de respostas
- **Status de respostas** - Indicador visual do progresso de geração de respostas por IA
- **Timestamps relativos** - Exibição de quando as perguntas foram criadas
- **Sincronização automática** - Cache invalidado automaticamente após criação de perguntas
- **Navegação** - Botão para retornar à página inicial e acesso à funcionalidade de áudio

### 🎤 Gravação de Áudio
- **Captura de áudio em tempo real** - Utiliza MediaRecorder API para gravação contínua
- **Processamento em chunks** - Áudio é enviado em segmentos de 5 segundos
- **Configuração de qualidade** - Otimizado com 64kbps e formato WebM
- **Cancelamento de eco** - Echo cancellation e noise suppression habilitados
- **Interface intuitiva** - Botões para iniciar/pausar gravação com feedback visual
- **Upload automático** - Envio direto para API de transcrição e processamento
- **Detecção de suporte** - Validação de compatibilidade do navegador

### ⚡ Otimizações
- **Carregamento otimizado** - Loading states e cache inteligente
- **Validação de formulários** - Schemas Zod com React Hook Form
- **Gerenciamento de estado** - TanStack Query para sincronização de dados

## 🌐 Integração com API

A aplicação consome a API do NLW Agents Server:
- **Endpoint**: `http://localhost:3333`
- **Rotas utilizadas**: 
  - `GET /rooms` - Listagem de salas
  - `GET /rooms/:roomId/questions` - Listação de perguntas da sala
  - `POST /rooms/:roomId/questions` - Criação de perguntas com respostas automáticas
  - `POST /rooms/:roomId/audio` - Upload de áudio para transcrição
- **Gerenciamento**: TanStack Query para cache e sincronização
- **Mutations**: Sistema completo de criação de perguntas com updates otimistas
- **File Upload**: FormData para envio de arquivos de áudio

## 📝 Estrutura de Rotas

- `/` - Página inicial com listagem de salas
- `/room/:roomId` - Página individual da sala com perguntas e respostas
- `/room/:roomId/audio` - Página de gravação de áudio

## 📁 Estrutura de Pastas

```
letmeask-agents-web/
├── public/                       # Arquivos públicos estáticos
├── src/                         # Código fonte da aplicação
│   ├── components/              # Componentes React reutilizáveis
│   │   ├── create-room-form.tsx # Formulário de criação de salas
│   │   ├── question-form.tsx    # Formulário para fazer perguntas
│   │   ├── question-item.tsx    # Item individual de pergunta/resposta
│   │   ├── room-list.tsx        # Lista de salas disponíveis
│   │   └── ui/                  # Componentes UI do shadcn/ui
│   │       ├── badge.tsx        # Componente de badge/etiqueta
│   │       ├── button.tsx       # Componente de botão
│   │       ├── card.tsx         # Componente de cartão
│   │       ├── form.tsx         # Componentes de formulário
│   │       ├── input.tsx        # Componente de input
│   │       ├── label.tsx        # Componente de label
│   │       └── textarea.tsx     # Componente de textarea
│   ├── http/                    # Camada de comunicação com API
│   │   ├── types/               # Tipos TypeScript para API
│   │   │   ├── create-room-request.ts     # Tipo de requisição de criação de sala
│   │   │   ├── create-room-response.ts    # Tipo de resposta de criação de sala
│   │   │   ├── create-question-request.ts # Tipo de requisição de criação de pergunta
│   │   │   ├── create-question-response.ts# Tipo de resposta de criação de pergunta
│   │   │   └── get-rooms-response.ts      # Tipo de resposta de listagem de salas
│   │   ├── use-create-room.ts   # Hook para criação de salas
│   │   ├── use-create-question.ts # Hook para criação de perguntas
│   │   └── use-rooms.ts         # Hook para listagem de salas
│   ├── lib/                     # Utilitários e configurações
│   │   ├── dayjs.ts            # Configuração do Day.js
│   │   └── utils.ts            # Funções auxiliares
│   ├── pages/                   # Páginas da aplicação
│   │   ├── create-room.tsx      # Página inicial com criação e listagem
│   │   ├── room.tsx             # Página individual da sala
│   │   └── record-room-audio.tsx# Página de gravação de áudio
│   ├── app.tsx                  # Componente principal da aplicação
│   ├── main.tsx                 # Ponto de entrada da aplicação
│   ├── index.css               # Estilos globais e Tailwind
│   └── vite-env.d.ts           # Declarações de tipos do Vite
├── .vscode/                     # Configurações do VS Code
├── components.json              # Configuração do shadcn/ui
├── package.json                 # Dependências e scripts
├── pnpm-lock.yaml              # Lock file do pnpm
├── tsconfig.json               # Configuração do TypeScript
├── vite.config.ts              # Configuração do Vite
└── biome.jsonc                 # Configuração do Biome
```

---

Desenvolvido com ❤️ durante o evento NLW da Rocketseat
