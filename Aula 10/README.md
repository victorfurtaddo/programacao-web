# Aula 10 - Projetos Back-end (Resumo)

## 📌 Conteúdo da Aula
- Fundamentos de Back-end e frameworks
- Protocolo HTTP e métodos REST
- JSON e troca de dados
- Criação de API com Express.js
- Implementação de CRUD
- Deploy e integração
- Testes e documentação

---

## 🧠 Fundamentos de Back-end

Frameworks back-end ajudam a organizar aplicações utilizando padrões como:
- **MVC (Model-View-Controller)** ou arquitetura em camadas
- Separação entre lógica de negócio, dados e rotas
- Facilita manutenção e escalabilidade

Também permitem:
- **Componentização** (módulos, serviços, middlewares)
- Reutilização de código
- Atualizações isoladas


---

## 🌐 Protocolo HTTP

O HTTP é o protocolo responsável pela comunicação na web.

### Características:
- Modelo cliente-servidor
- Stateless (sem estado)
- Baseado em texto

### Métodos HTTP:
- **GET** → Buscar dados (seguro, idempotente)
- **POST** → Criar dados
- **PUT** → Atualizar completamente
- **PATCH** → Atualizar parcialmente
- **DELETE** → Remover dados


---

## 📦 JSON (JavaScript Object Notation)

Formato leve para troca de dados:
- Fácil leitura e escrita
- Fácil processamento por máquinas

Estruturas:
- Objetos (chave/valor)
- Arrays (listas)


---

## ⚙️ API REST com Express.js

A aplicação utiliza:
- **Node.js + Express**
- **Body-parser** para ler JSON
- **FS (File System)** para manipular arquivos

### Estrutura:
- `server.js` → servidor e rotas
- `data.json` → armazenamento de dados

---

## 🔄 CRUD (Create, Read, Update, Delete)

Rotas implementadas:

- `GET /api/notes` → Listar notas
- `POST /api/notes` → Criar nota
- `GET /api/notes/:id` → Buscar por ID
- `PUT /api/notes/:id` → Atualizar nota
- `DELETE /api/notes/:id` → Remover nota

Notas possuem:
- id (gerado com Date.now)
- título
- texto


---

## ☁️ Deploy com Render

Plataforma de deploy para back-end:
- Integração com GitHub
- Deploy automático
- SSL gratuito
- Escalável

### Benefícios:
- Fácil configuração
- Ambiente profissional
- Monitoramento integrado


---

## 🔗 Integração Front-end

Fluxo:
1. Criar API com Express
2. Fazer deploy no Render
3. Criar front-end (React)
4. Consumir API
5. Publicar front-end (Vercel)


---

## 🧪 Testes e Documentação

### Postman:
Ferramenta para:
- Testar APIs (GET, POST, PUT, DELETE)
- Criar coleções de requisições
- Automatizar testes
- Gerar documentação

Recursos:
- Variáveis de ambiente
- Scripts automatizados
- Monitoramento de endpoints


---

## 🔗 Links das Atividades

- Front-end:  
  https://frontend-notas-taupe.vercel.app

- Back-end (API):  
  https://backend-api-notas-ixvc.onrender.com

- Repositório Front-end:  
  https://github.com/victorfurtaddo/frontend-notas

- Repositório Back-end:  
  https://github.com/victorfurtaddo/backend-api-notas

---
