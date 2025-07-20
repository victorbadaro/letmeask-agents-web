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
- **Tailwind CSS v4** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI reutilizáveis
- **Lucide React** - Ícones modernos
- **Biome** - Linter e formatador de código

## 🏗️ Arquitetura e Padrões

- **SPA (Single Page Application)** com React Router
- **Composition Pattern** com shadcn/ui
- **Server State Management** com TanStack Query
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
- **Visualização de perguntas** - Lista todas as perguntas da sala
- **Formulário de perguntas** - Interface para adicionar novas perguntas
- **Status de respostas** - Indicador visual do progresso de geração de respostas por IA
- **Timestamps relativos** - Exibição de quando as perguntas foram criadas
- **Navegação** - Botão para retornar à página inicial e acesso à funcionalidade de áudio

### ⚡ Otimizações
- **Carregamento otimizado** - Loading states e cache inteligente
- **Validação de formulários** - Schemas Zod com React Hook Form
- **Gerenciamento de estado** - TanStack Query para sincronização de dados

## 🌐 Integração com API

A aplicação consome a API do NLW Agents Server:
- **Endpoint**: `http://localhost:3333`
- **Rotas utilizadas**: `/rooms`
- **Gerenciamento**: TanStack Query para cache e sincronização

## 📝 Estrutura de Rotas

- `/` - Página inicial com listagem de salas
- `/room/:roomId` - Página individual da sala

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
│   │   │   ├── create-room-request.ts  # Tipo de requisição de criação
│   │   │   ├── create-room-response.ts # Tipo de resposta de criação
│   │   │   └── get-rooms-response.ts   # Tipo de resposta de listagem
│   │   ├── use-create-room.ts   # Hook para criação de salas
│   │   └── use-rooms.ts         # Hook para listagem de salas
│   ├── lib/                     # Utilitários e configurações
│   │   ├── dayjs.ts            # Configuração do Day.js
│   │   └── utils.ts            # Funções auxiliares
│   ├── pages/                   # Páginas da aplicação
│   │   ├── create-room.tsx      # Página inicial com criação e listagem
│   │   └── room.tsx             # Página individual da sala
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
