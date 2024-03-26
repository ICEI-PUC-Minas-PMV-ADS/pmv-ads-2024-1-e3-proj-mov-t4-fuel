# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.





![Diagrama de Classes Fuel+](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-fuel/assets/136076013/34abeccd-1646-4aaf-9938-1f6fc560d8a2)





## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.




![Diagrama ER Fuel+](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-fuel/assets/136076013/18e9914f-79a3-4601-ba71-e793d1a3fbcd)





## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

A equipe elencou as seguintes subcaracterísticas para o desenvolvimento de aspectos simples do projeto de software do aplicativo. 
1.	Usabilidade:

- Compreensibilidade: Garantir que o aplicativo seja fácil para os usuários verificarem os preços dos combustíveis e os serviços oferecidos pelos postos através da iconografia e informações descritas.
- Operacionalidade: Facilitar a navegação no aplicativo intuitivamente, através do design responsivo e da organização lógica disposta no menu de navegação.

2.	Eficiência:

- Desempenho: O tempo de resposta rápida do aplicativo ao realizar a busca de preços de combustíveis e outras operações, visando uma experiência satisfatória ao usuário. 
3. Compatibilidade:
- Compatibilidade com Dispositivos: O aplicativo é compatível com uma ampla variedade de dispositivos móveis (iOS e Android) e suas diferentes versões.
4. Segurança:
- Confidencialidade: Garantir a proteção das informações do usuário, como dados de localização e CPF, através da criptografia e de práticas de segurança de dados. 
- Integridade: Garantir que os dados exibidos no aplicativo, como os preços dos combustíveis, sejam precisos e não estejam sujeitos a manipulação indevida.
5. Manutenibilidade:
- Modificabilidade: Facilidade de fazer alterações e atualizações no aplicativo, como adicionar novos recursos ou corrigir bugs, sem causar impactos indesejados em outras partes do sistema, facilitando a atualizando do aplicativo, atendendo as necessidades dos usuários. 
6. Confiabilidade:
- Disponibilidade: Garantir que o aplicativo esteja sempre disponível para uso, minimizando falhas e interrupções de serviço.
- Tolerância a Falhas: Capacidade de lidar com situações inesperadas, como falhas de rede, sem impactar negativamente a experiência do usuário.
7. Portabilidade:
- Adaptabilidade: Capacidade do aplicativo de se adaptar a diferentes ambientes e contextos de uso, como mudanças na localização do usuário ou configurações de idioma.

As métricas utilizadas para avaliar os se os objetos foram alcançados estão descritas nos indicadores de desempenho, disponível no item 02-Especificação do Projeto.md

