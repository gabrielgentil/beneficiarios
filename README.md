# NodeJs API

# Requirements
- NodeJs
- Docker compose

# Technologies
- Restify
- Mongoose
- Docker compose

# URL
- GET http://localhost:PORT/beneficiario List All
- GET http://localhost:PORT/beneficiario/:id Filter by id
- POST http://localhost:PORT/beneficiario Create Data
- PUT http://localhost:PORT/beneficiario/:id Update Data
- DELETE http://localhost:PORT/beneficiario/:id Delete Data

# Installation
- Clone the repo
git clone https://github.com/gabrielgentil/beneficiarios.git

- Install NPM packages 

```bash
npm install
```
- Start docker-compose

```bash
docker-compose up --build
```

# Exemple
```json
{
    "nome": "",
    "cpf": "",
    "rg": "",
    "data_nascimento": "",
    "tipo_plano": "",
    "numero_dependentes": ""
}
```


