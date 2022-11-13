# Instalando Typescript
## Criar projeto node 
npm init -y

## Intalar o typescript
npm install typescript -D

## Rodar códgio typescript
node src/index.ts

## Trancrever para o javascript
npx tsc src/index.ts

## Criando o arquivo tsconfig.json
npx tsc --init

## Configurando o arquivo tsconfig.json
"rootDir": "./src",  
"outDir": "./build", 

## Compilando
npx tsc

## Criando um script de execução no arquivo package.json
```
"scripts": {
    "start": "npx tsc && node build/index.js",
```

## Rodar o script
npm run start

## Tipos no Typescript
### Trabalhando com tipos de Variáveis
```
Tipos primitivos: boolean, number, string
  let ligado: boolean = false;
  let nome: string = "maria";
  let idade: number = 30;
  let altura: number = 1.9;

Tipos especiais: null, undefined
  let nulo: null = null;
  let indefinido: undefined = undefined;

Tipos abrangentes: any, void
  let retorno: void
  let retornoView:any = false;

```

### Trabalhando com objetos
```
objeto - sem previsibilidade
let produto: object = {
  name: "felipe",
  cidade: "SP",
  idade: 30,
};

objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidades: 5,
};
```

### Arrays
```
  let dados: string[] = ["felipe", "ana", "maria"];
  let dados2: Array<string> = ["felipe", "ana", "maria"];

arrays de  Multi Types - não precisa respeitar a ordem 
  let infos: (string | number)[] = ["felipe", 30, "maria", "ana"];

Tuplas - precisa respeitar a ordem
  let boleto: [string, number, number] = ["agua conta", 199.9, 325483] 
```

### Datas
```
  let aniversario: Date = new Date("2022-12-01 05:00");
  console.log(aniversario.toString());
```

## Funções
```
function addNumber(x: number, y: number): number {
  return x + y;
}

let soma: number = addNumber(4, 7);
```

## Instalando servidor local
```
  npm install ts-node-dev -D

  - Servidor que entende o typescript
  
  - Roda um servidor local sem a necessidade de criar uma build

  - Transpila na memória

  Adicionar no package.json
    "scripts": {
    "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    }

    Rodar num servidor local em typescript
      npm run start:dev
  ```

  
  