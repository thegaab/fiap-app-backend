# School Blog

Este projeto foi desenvolvido com [Nest.JS](https://nestjs.com/) como trabalho final do módulo na [Pós Tech da FIAP](https://postech.fiap.com.br/).

### Integrantes do Grupo
Carolina,
Jéssica,
Tiago,
Arthur,



# Preparando o ambiente

Para rodar este projeto você deve ter a versão do node >18.

## Instalando as dependências

```yarn install```
ou
```npm i```

## Para rodar o projeto

```yarn start```
ou
```npm start```

## Docker
É necessário ter o ambiente docker rodando localmente.

```yarn docker:up```
ou
```npm run docker:up```


# Rotas
 _TODO_
Veja a documentação completa das rotas com Swagger
```yarn swagger```


## Rotas privadas
Algumas rotas da aplicação são privadas (ex.: criação de posts), para ter acesso a funcionalidade é necessário incluir o token da autenticação nos Headers da requisição.


Para gerar o token, faça o login pela rota ```users/login```

_(TODO)_ Utilize nosso usuário padrão:
```
username: admin
password: admin
```

Ou crie um novo usuário na rota ```/users```


Em seguida adicione o token retornado no header para requisições em rotas privadas.
A autenticação ficará válida por até 15 minutos.


## Script DB

```sql 
CREATE TABLE product (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    price DOUBLE PRECISION
);

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    creation_date TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE product_category (
    product_id UUID NOT NULL,
    category_id SERIAL NOT NULL,
    PRIMARY KEY (product_id, category_id),
    FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE
);

CREATE TABLE address (
    id SERIAL PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(2) NOT NULL,
    zip_code VARCHAR(10) NOT NULL
);

CREATE TABLE person (
    id BIGSERIAL PRIMARY KEY,
    cpf VARCHAR(11) not null,
    name VARCHAR(100) not null,
    birth DATE not null,
    email varchar(255) not null
);

alter table address 
    add column person_id bigint not null;

alter table address 
    add constraint fk_address_person
    foreign key (person_id)
    references person(id);

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

alter table person 
    add column user_id int unique,
    add constraint fk_user_id foreign key (user_id) references user(id);
```
-
