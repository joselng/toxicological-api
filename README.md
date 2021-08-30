# Toxicological API

### Passo a passo para utilização

-  **Clone o repositório**
```
git clone https://github.com/joselng/toxicological-api.git
```

-  **Acesse a pasta toxicological-api**
```
cd toxicological-api
```

-  **Renomeie o arquivo .env.example para .env**
```
cp .env.example .env
```

-  **Instale as dependências**
```
npm install
```

-  **Execute os testes**
```
npm run test
```

-  **Inicie a aplicação**
```
npm run dev
```

-  **Crie um usuário para realizar as requisiçoes na API**
```
  curl --request POST \
    --url http://localhost:3333/users \
    --header 'Content-Type: application/json' \
    --data '{
      "name": "Foo Bar",
      "email": "foo@bar.com",
      "password": "123456"
    }'
```

-  **Faça login para gerar seu token**
```
  curl --request POST \
    --url http://localhost:3333/sessions \
    --header 'Content-Type: application/json' \
    --data '{
      "email": "foo@bar.com",
      "password": "123456"
    }'
```

-  **Copie o token gerado para usar em todas as outras requisições**
```
  curl --request GET \
  --url http://localhost:3333/samples \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2UuZ2FyY2lhQHN5bnZpYS5jb20iLCJuYW1lIjoiSm9zw6kgTGVvbmFyZG8gTmFzY2ltZW50byBHYXJjaWEiLCJpYXQiOjE2MzAyNzA2MTgsImV4cCI6MTYzMDM1NzAxOCwic3ViIjoiam9zZS5nYXJjaWFAc3ludmlhLmNvbSJ9.CAVIJmeHiZYri4oMPi6w3_ukPcT6MxCJkWoSDMNyqj4'
```
