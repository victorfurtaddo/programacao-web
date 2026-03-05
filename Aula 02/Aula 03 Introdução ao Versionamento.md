# 📘 Aula 03 — Introdução ao Versionamento e Deploy

Professor: **Prof. Me. Deivison S. Takatu**

---

# 🔁 Versionamento vs Backup

## Versionamento

- histórico completo de alterações
- rastreabilidade
- colaboração entre desenvolvedores
- reversão de versões

## Backup

- cópia do estado atual
- sem histórico de mudanças
- sem controle de autoria

---

# 💥 Problemas sem Versionamento

📁 Arquivos duplicados  
Ex: versao_final_agora_sim2.zip

🔥 Código perdido  
Uma alteração pode apagar dias de trabalho.

⚠️ Conflitos entre desenvolvedores  
Dois devs editam o mesmo arquivo.

🔍 Falta de histórico  
Não é possível saber quem alterou o quê.

---

# ✅ Benefícios do Versionamento

- 👥 trabalho simultâneo
- 🔎 auditoria das alterações
- ⏪ recuperação de versões
- 🛠 melhor organização do projeto

---

# 🔢 Versionamento Semântico (SemVer)

Formato:

MAJOR.MINOR.PATCH

Exemplo:

2.1.3

## Significado

### MAJOR
Mudanças incompatíveis.

### MINOR
Nova funcionalidade compatível.

### PATCH
Correção de bug.

---

# 📌 Exemplos de Versões

1.0.0 → primeira versão estável  
1.1.0 → nova funcionalidade  
1.1.1 → correção de bug  
2.0.0 → mudança incompatível

---

# 💻 Git

Git é um **sistema de controle de versão distribuído**.

Funções:

- registrar histórico do projeto
- sincronizar com repositórios online
- permitir colaboração

Permite trabalhar **offline** e sincronizar depois com o repositório remoto.

---

# 🧱 Estrutura do Git

Componentes principais:

### Working Directory
Arquivos sendo editados.

### Staging Area
Arquivos preparados para commit.

### Repositório Local
Histórico com commits.

### Repositório Remoto
GitHub / GitLab / Bitbucket.

---

# ⚙️ Instalando o Git

Passos:

1. Baixar em  
https://git-scm.com/downloads

2. Executar instalador

3. Seguir:

Next → Next → Install

4. Testar instalação:

git --version

---

# 👤 Configuração Inicial

Configurar usuário:

git config --global user.name "Seu Nome"

Configurar email:

git config --global user.email "seu@email.com"

---

# 📂 Criando um Repositório

1. Criar pasta do projeto.

2. Abrir a pasta no VS Code.

3. Criar arquivo index.html.

4. Inicializar repositório.

5. Fazer commit inicial.

---

# ☁️ Publicando no GitHub

1. Publicar branch.

2. Fazer login no GitHub.

3. Escolher:

- repositório público
- repositório privado

4. Código será enviado ao GitHub.

---

# 🏷 Tags no Git

Tags identificam **versões importantes do projeto**.

Criar tag:

git tag 1.0.0

Enviar para GitHub:

git push origin 1.0.0

---

# 🌿 Branches

Branches são **ramificações do código**.

Principais:

- main → versão estável
- develop → integração
- feature → nova funcionalidade
- hotfix → correção urgente

---

# 🔀 Merge

Merge une alterações de duas branches.

Problema possível:

⚠️ Conflitos

Quando duas branches alteram a mesma parte do código.  
É necessário resolver manualmente.

---

# 🧠 Boas práticas com Git

✔ commits pequenos e frequentes  
✔ mensagens claras de commit  
✔ uso de branches  
✔ testes antes do merge

---

# 🚀 O que é Deploy

Deploy é o processo de **publicar o software em produção**.

Ambientes comuns:

### Desenvolvimento
Ambiente local do desenvolvedor.

### Staging
Ambiente de testes finais.

### Produção
Sistema acessado pelos usuários.

---

# ☁️ Deploy com Vercel

Vercel é uma plataforma para deploy de aplicações web.

Características:

- integração com GitHub
- deploy automático a cada push
- suporte a frameworks modernos
- CDN global
- escalabilidade automática

---

# 🧪 Atividade

1. Criar repositório no GitHub.

2. Criar página HTML básica.

3. Versionar o projeto com Git.

4. Criar tags para versões.

5. Fazer deploy no Vercel.

6. Documentar o processo incluindo:

- prints das telas
- link do repositório
- link do site publicado
