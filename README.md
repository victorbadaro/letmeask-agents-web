# NLW Agents Web

Interface web desenvolvida durante o evento da **Rocketseat** para gerenciar salas com agentes inteligentes.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e bundler moderno
- **React Router DOM** - Roteamento para SPAs
- **TanStack Query** - Gerenciamento de estado para requisições
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

- **Listagem de salas** - Visualiza todas as salas disponíveis
- **Navegação entre salas** - Roteamento dinâmico
- **Interface responsiva** - Compatível com diferentes dispositivos
- **Carregamento otimizado** - Loading states e cache inteligente

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
├── public/                    # Arquivos públicos estáticos
├── src/                      # Código fonte da aplicação
│   ├── components/           # Componentes React reutilizáveis
│   │   └── ui/              # Componentes UI do shadcn/ui
│   │       └── button.tsx   # Componente de botão
│   ├── lib/                 # Utilitários e configurações
│   │   └── utils.ts         # Funções auxiliares
│   ├── pages/               # Páginas da aplicação
│   │   ├── create-room.tsx  # Página de criação de sala
│   │   └── room.tsx         # Página individual da sala
│   ├── app.tsx              # Componente principal da aplicação
│   ├── main.tsx             # Ponto de entrada da aplicação
│   ├── index.css            # Estilos globais e Tailwind
│   └── vite-env.d.ts        # Declarações de tipos do Vite
├── .vscode/                  # Configurações do VS Code
├── components.json           # Configuração do shadcn/ui
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração do TypeScript
├── vite.config.ts            # Configuração do Vite
└── biome.jsonc               # Configuração do Biome
```

---

Desenvolvido com ❤️ durante o evento NLW da Rocketseat
