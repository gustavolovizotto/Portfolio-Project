# 🚀 Portfólio Pessoal - Desenvolvedor Full Stack

Um portfólio moderno e interativo construído com React, TypeScript, Three.js e Vite. Este projeto apresenta uma experiência imersiva em 3D com animações fluidas, design responsivo e uma interface de usuário elegante.

## ✨ Funcionalidades

- 🌟 **Interface 3D Interativa**: Modelos 3D animados com Three.js e React Three Fiber
- 🎨 **Design Moderno**: Interface elegante e responsiva
- ⚡ **Performance Otimizada**: Carregamento rápido com Vite
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🔄 **Animações Suaves**: Transições fluidas com GSAP
- 📧 **Formulário de Contato**: Integração com EmailJS para envio de mensagens
- 💼 **Seções Completas**: Hero, Experiência, Habilidades, Depoimentos e Contato
- 🌙 **Efeitos Visuais**: Partículas interativas e cards com efeito glow

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **Three.js** - Biblioteca 3D para web
- **React Three Fiber** - Wrapper React para Three.js
- **React Three Drei** - Helpers úteis para React Three Fiber

### Animações & UX
- **GSAP** - Biblioteca de animações de alta performance
- **React Responsive** - Detecção de dispositivos e responsividade

### Comunicação
- **EmailJS** - Serviço para envio de emails pelo frontend

### Desenvolvimento
- **ESLint** - Linting e formatação de código
- **TypeScript ESLint** - Regras específicas para TypeScript

## 📁 Estrutura do Projeto

```
portfolio/
├── public/
│   ├── images/           # Imagens e ícones
│   │   ├── logos/        # Logos de tecnologias e empresas
│   │   └── textures/     # Texturas para modelos 3D
│   └── models/           # Modelos 3D (.glb)
├── src/
│   ├── components/       # Componentes reutilizáveis
│   │   └── models/       # Componentes 3D
│   ├── constants/        # Dados e configurações
│   ├── sections/         # Seções principais do site
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Ponto de entrada
├── package.json
└── vite.config.ts
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais do EmailJS:
```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

4. **Execute o projeto em modo desenvolvimento**
```bash
npm run dev
```

5. **Acesse no navegador**
```
http://localhost:5173
```

## 📦 Scripts Disponíveis

```bash
# Executar em modo desenvolvimento
npm run dev

# Construir para produção
npm run build

# Verificar erros de linting
npm run lint

# Visualizar build de produção
npm run preview
```

## 🎯 Seções do Portfólio

### 🏠 Hero Section
- Apresentação pessoal com modelo 3D interativo
- Animações de texto e partículas
- Contador animado de estatísticas

### 💼 Experience Section
- Timeline de experiências profissionais
- Cards interativos com informações detalhadas
- Logos de empresas e tecnologias

### 🛠️ Tech Stack Section
- Showcase de tecnologias dominadas
- Modelos 3D das principais ferramentas
- Cards com efeito glow e animações

### 💬 Testimonials Section
- Depoimentos de clientes e colegas
- Cards responsivos com fotos
- Sistema de avaliação por estrelas

### 📞 Contact Section
- Formulário funcional de contato
- Modelo 3D interativo
- Integração com EmailJS

## 🎨 Personalização

### Modificar Informações Pessoais
Edite o arquivo `src/constants/index.ts` para atualizar:
- Links de navegação
- Informações pessoais
- Experiências profissionais
- Depoimentos
- Links de redes sociais

### Alterar Cores e Estilos
Os estilos principais estão em `src/index.css` usando CSS personalizado com variáveis.

### Adicionar Novos Modelos 3D
1. Adicione o arquivo `.glb` em `public/models/`
2. Crie um componente em `src/components/models/`
3. Importe e use em suas seções

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📋 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## ⚡ Performance

- **Lazy Loading**: Modelos 3D carregados sob demanda
- **Code Splitting**: Divisão automática do código
- **Otimização de Imagens**: Formatos modernos e compressão
- **Tree Shaking**: Remoção de código não utilizado

## 🔧 Configuração do EmailJS

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template para o formulário de contato
4. Adicione suas credenciais no arquivo `.env`

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Conecte seu repositório no Vercel
```

### Netlify
```bash
npm run build
# Faça upload da pasta dist/
```

### GitHub Pages
```bash
npm run build
# Configure GitHub Actions para deploy automático
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Gustavo** 
- 🌐 Website: [seu-portfolio.com](https://seu-portfolio.com) _(Personalize com seu domínio)_
- 💼 LinkedIn: [seu-linkedin](https://linkedin.com/in/seu-usuario) _(Atualize com seu perfil)_
- 🐱 GitHub: [seu-github](https://github.com/seu-usuario) _(Atualize com seu usuário)_
- 📧 Email: seu.email@example.com _(Atualize com seu email)_

## 🙏 Agradecimentos

- [Three.js](https://threejs.org/) pela incrível biblioteca 3D
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) pelo wrapper React
- [GSAP](https://greensock.com/gsap/) pelas animações suaves
- [Vite](https://vitejs.dev/) pela experiência de desenvolvimento rápida

---

⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!
