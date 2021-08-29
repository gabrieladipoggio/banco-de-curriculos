# banco de currículos
Projeto de conclusão do programa de bolsas Start Tech, oferecido pela Gama Academy em parceria com a Ambev. 

A proposta do desafio era desenvolver uma página de formulário para receber o cadastro de profissionais em busca de uma oportunidades de emprego e armazenar as informações num banco de dados. O projeto conta ainda com outras funcionalidades, como a integração com uma API de CEP para preencher o campo de endereço e a validação de CPF para identificar se o candidato já se cadastrou anteriormente.


 <h3 align="center">
<a href="https://banco-de-curriculos.herokuapp.com/">[Clique aqui para ver o resultado]<a>
</h3>

<h2 align="left">Screenshot</h2>
  
![image](https://user-images.githubusercontent.com/71384460/131199065-76cdd9b2-beb2-45d3-aa27-ea63752b273c.png)
 
   <br/>
  
   ## <h2 align="left"> Linguagens e Tecnologias</h2>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>

<br/>  
   <h2 align="left"> Novas funcionalidades </h2>
  
- [x] Modificar botão - formulário está sendo processado
- [x] Adicionar validação de CPF/CEP
- [x] Documentação com o Swagger
- [x] Hospedar banco de dados 
- [x] Deploy Heroku

 <br/>
  
## 🚀 Instalando o banco de currículos
  
 
* Veja a documentação do projeto [[aqui](https://banco-de-curriculos.herokuapp.com/docs/)]
* Verifique se você possui a versão mais recente do `Node.js`
  
```
npm install na pasta raíz do diretório
```
  
* Verifique se você possui a versão mais recente do `MongoDB` (ou um banco de dados remoto)
  
```
mongod --dbpath /path/to/db/folder
```
  
   <br/>
  

## ☕ Usando banco de currículos

Para usar banco de currículos, siga estas etapas:
  
* Defina a variável de ambiente `MONGODB_PASSWORD`
* Mude o arquivo `db.js` para a url do banco de dados (`localhost:27017` caso o MongoDB esteja rodando localmente)

```
`nodemon index.js`
```



