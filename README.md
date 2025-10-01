# banco-api-tests

Este repositório contém um conjunto de testes automatizados para a [API REST do projeto banco-api](https://github.com/GustahLima01/banco-api).  
O objetivo é validar o funcionamento correto dos endpoints, contribuindo com a confiabilidade e qualidade do sistema através de testes automatizados.

---

## 🎯 Objetivo
- Garantir que a API responda de forma correta e consistente.  
- Fornecer uma base de testes automatizados que possa ser integrada em pipelines de CI/CD.  
- Disponibilizar relatórios claros e acessíveis para acompanhamento da qualidade.  

---

## 🛠️ Stack utilizada
O projeto utiliza as seguintes ferramentas e bibliotecas:

- [Node.js](https://nodejs.org/) – Ambiente de execução JavaScript  
- [Mocha](https://mochajs.org/) – Framework de testes  
- [Chai](https://www.chaijs.com/) – Biblioteca de asserções  
- [Supertest](https://github.com/visionmedia/supertest) – Testes de requisições HTTP  
- [Mochawesome](https://github.com/adamgruber/mochawesome) – Geração de relatórios em HTML  

---

## 📂 Estrutura de diretórios

```
banco-api-tests/
├── test/                # Arquivos de teste organizados por recurso
│   ├── login.test.js
│   └── transferencias.test.js
├── mochawesome-report/  # Relatórios gerados automaticamente após a execução dos testes
├── .env.example         # Exemplo de variáveis de ambiente
├── package.json
└── README.md
```

---

## ⚙️ Arquivo `.env`
Antes de rodar os testes, é necessário criar um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
BASE_URL=http://localhost:3000
```

- `BASE_URL` → URL base da API que será testada (ajuste conforme a execução do [banco-api](https://github.com/GustahLima01/banco-api)).  

---

## ▶️ Executando os testes

1. Instale as dependências:
```bash
npm install
```

2. Execute todos os testes:
```bash
npm test
```

3. Gerar relatório com **Mochawesome**:
```bash
npx mocha test --reporter mochawesome
```

4. Acessar relatório gerado:
O relatório será salvo no diretório `mochawesome-report/`.  
Abra o arquivo `mochawesome.html` no navegador.  

---

## 📚 Documentação das dependências

- [Node.js](https://nodejs.org/)  
- [Mocha](https://mochajs.org/)  
- [Chai](https://www.chaijs.com/)  
- [Supertest](https://github.com/visionmedia/supertest)  
- [Mochawesome](https://github.com/adamgruber/mochawesome)  

---

## 🔗 Projetos relacionados
- [banco-api](https://github.com/GustahLima01/banco-api) – API utilizada para execução dos testes.

---

## 📜 Licença
Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
