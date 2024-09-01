# Do Brasil para os Brasileiros 
Este projeto visa criar uma API que conecta empresas de agricultores que exportam alimentos a empresas fabricantes de alimentos a criarem uma rede de doações de alimentos para comunidade carente, promovendo a diminuição da fome no Brasil. A API permitirá o cadastro de empresas que colheram o alimento às empresas que usarão este alimento para produção de outros alimentos.

##  Público-alvo: 
- Pessoas em situação de vulnerabilidade alimentar.
- Empresas que desejam fazer doações de alimentos .


##  Requisitos Funcionais: 
- Registro de empresas.
- Listagem de empresas cadastradas. 
- Localizar cadastro da empresa por id.
- Remoção do cadastro de empresas por id.

##  Tecnologias utilizadas: 
- Git/Github
- TypeScript
- NestJs
- PostgreSQL
- TypeORM
- Swagger
- Class-validator

##  Como utilizar a API: 

Utilizando no seu browser a URL : `https://dobrasilparaosbrasileiros-production.up.railway.app/api`.

- Post : Irá criar um registro de uma empresa. Neste registro será definido se esta empresa é Agrícola ou fabricante de alimentos industrializados.

- Get : Listará todas as empresas registradas.

- Get por ID: Localizará a empresa especificada pelo seu ID.

- Delete: Deletará o registro da empresa especificada pelo seu ID.



Criado por [Maila Ferreira ](https://github.com/MailaFAP) 