# Gerenciador de Posts

Um aplicativo web moderno para gerenciamento de posts, desenvolvido como parte de um teste técnico para uma vaga de Front-end. O projeto demonstra a implementação de operações CRUD utilizando tecnologias e práticas modernas de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca para interfaces de usuário
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação fortemente tipada que se baseia em JavaScript
- [React Query](https://tanstack.com/query/latest) - Gerenciamento de estado e cache
- [shadcn/ui](https://ui.shadcn.com/) - Biblioteca de componentes
- [Zod](https://zod.dev/) - Validação de esquemas
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários
- [Vitest](https://vitest.dev/) - Framework de testes
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API REST

## ✨ Funcionalidades

- **Listagem de Posts**: Visualização de todos os posts disponíveis
- **Criação de Posts**: Adicionar novos posts à lista
- **Atualização de Posts**: Editar posts existentes
- **Exclusão de Posts**: Remover posts da lista
- **Feedback Visual**: Notificações para ações do usuário
- **Validação de Dados**: Garantia de integridade dos dados enviados
- **Cache e Otimização**: Gerenciamento eficiente de estados e requisições

## 🔧 Instalação e Uso

1. Clone o repositório:
```bash
git clone https://github.com/viny-dias/teste-posts.git
```

2. Instale as dependências:
```bash
cd teste-posts
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Para rodar os testes:
```bash
npm run test
```

## 🏗️ Estrutura do Projeto

```
TESTE-POSTS/
├── src/
│   ├── components/     # Componentes da aplicação
│   ├── constants/      # Constantes e configurações
│   ├── hooks/         # Hooks personalizados
│   ├── lib/           # Bibliotecas e utilidades
│   ├── schemas/       # Schemas de validação (Zod)
│   ├── services/      # Serviços e chamadas API
│   ├── styles/        # Estilos e temas
│   ├── tests/         # Arquivos de teste
│   └── types/         # Definições de tipos TypeScript
├── App.tsx            # Componente principal
├── main.tsx          # Ponto de entrada da aplicação
├── setup.ts          # Configurações iniciais
├── vite.config.ts    # Configuração do Vite
├── vitest.config.ts  # Configuração do Vitest
├── tsconfig.json     # Configuração do TypeScript
├── tailwind.config.js # Configuração do Tailwind
└── package.json      # Dependências e scripts
```

## 🧪 Testes

O projeto inclui testes unitários implementados com Vitest, cobrindo:
- Componentes principais
- Hooks personalizados
- Chamadas de API
- Estados e interações do usuário

Para executar os testes:
```bash
npm test
```

## 🔍 Destaques Técnicos

### React Query
- Gerenciamento eficiente de cache
- Atualizações otimistas da UI
- Revalidação automática dos dados
- Tratamento de estados de loading e erro

### Validação de Formulários
- React Hook Form para gerenciamento eficiente de formulários
- Zod para validação de esquemas TypeScript
- Feedback em tempo real para o usuário
- Validação de dados robusta e tipada

### TypeScript
- Tipagem forte para maior segurança
- Interfaces bem definidas
- Melhor experiência de desenvolvimento
- Redução de erros em tempo de execução

### shadcn/ui
- Componentes reutilizáveis e personalizáveis
- Feedback visual para ações do usuário
- Design moderno e responsivo
- Acessibilidade integrada

## 📝 Considerações de Desenvolvimento

- **Clean Code**: Código limpo e bem organizado seguindo as melhores práticas
- **DRY (Don't Repeat Yourself)**: Maximização da reutilização de código
- **SOLID**: Princípios de design de software aplicados
- **Componentização**: Componentes modulares e reutilizáveis
- **Performance**: Otimizações de renderização e cache
- **Experiência do Usuário**: Feedback claro e interface intuitiva

---

Desenvolvido por [Vinicius Dias](https://github.com/viny-dias) 🚀