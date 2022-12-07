# Deploy de Aplicação Angular na AWS
Criando um projeto em angular e fazendo deploy no AWS utilizando o serviço S3.

## Steps
1. Criar o projeto Angular
```
  npm install -g @angular/cli
  ng new dio-ntt-diverse-tech-web
  ng build - gerar arquivos para distribuir para produção para poder acessar a minha página
```

2. Realizar upload dos arquivos gerados no S3
```
  Criar um bucket do nome dio-ntt-diverse-tech
  Adicionar os arquivos gerados no bucket
  Permitir acesso público aos objetos do bucket
  Habilitar static website hosting
```

3. Adicionar nova rota no projeto web
```
  Criar componentes home e contatos
    ng generate component home
    ng g c contatos
  Recortar HTML do app.component.html e adicionar no home.component.html
  Copiar e colar o conteúdo do export class do app.component.ts no home.component.ts
  Adicionar as rotas default e contatos no app.routing.module.ts
  Adicionar o botão que redireciona para a rota de contatos, dentro do HTML do home.component.html
```

## Rodar a aplicação
```
  ng serve --open
```

## Links usados
  https://angular.io/guide/setup-local