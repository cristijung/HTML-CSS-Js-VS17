# Para transpilar um Ts para Js em um projeto com HTML
## Não esquecer de estar na pasta do projeto
## Não esquecer de copiar o gitignore
1. Digitar no terminal:
```
npm init -y
npm install typescript --save-dev
```
2. Configurar o `tsconfig.json`
```
{
  "compilerOptions": {
    "outDir": "./js",     // Os arquivos JS transpilados irão para uma nova pasta /js
    "rootDir": "./ts",    // Onde estão seus arquivos .ts originais
    "target": "ES6",      // Versão do JS moderna para navegadores
    "module": "ESNext", 
    "strict": true
  }
}
```
3. ranspilar o código
- Para converter os arquivos da pasta /ts para a pasta /js, use o comando:
- Manual: `npx tsc`
- Modo Observador (Watch): `npx tsc -w` (Este é o melhor, pois ele recompila toda vez que você salva um arquivo .ts).