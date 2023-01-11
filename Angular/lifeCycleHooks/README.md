# Requisitos

- Node & NPM (nodejs.org)

- Visual Studio code
  - Angular Language Service
  - Auto Close Tag
  - Auto Rename Tag
  - Tema: Aura Theme (*opcional)
  - Icones: Material Icon Theme (*opcional)
  - editorConfig, Prettier, eslint

- Angular
``` 
  npm install -g @angular/cli@14.1.2
```

## Em casso de erro
  1. Desinstalar a ferramenta

    npm uninstall -g @angular/cli

  2. Limpar o cache

    npm cache clear --force
    
    npm cache verify

  3. Habilitar permissão para o ng execute os scripts
    c:\Windows\system32> 
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

## Criando um projeto Angular
```
  ng new "nome do projeto"
```

## Criar estrutura de código
```
  ng generate --help
```

## Criando um componente
```
  ng generate component title(nome do componente) 
  ou usando aliase
  ng g c title
```
   
## Links
   https://angular.io/
