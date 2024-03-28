# Plano de Testes de Software

## **Objetivos do Teste**

O documento foi produzido com o objetivo de listar todos os requisitos da aplicação e testá-los de modo a encontrar falhas antes que a aplicação seja disponiblizada para o usuário

##  **Sobre a aplicação Fuel**

É um aplicativo mobile que permite aos usuários visualizarem os preços da gasolina em vários postos de combustível, e assim ter mais possibilidades de escolha, como por exemplo o mais barato, o mais perto ou até mesmo pela avaliação do posto.

Além de fornecer informações sobre outros serviços oferecidos por esses estabelecimentos, como lava-jato, troca de óleo, peças, acessórios, calibragem, conveniência etc.

## **Escopo**
Os testes buscarão medir os graus de acessibilidade, aceitação, visam também medir a robustez do sistema e sua confiabilidade de modo a entregar uma aplicação de qualidade aos usuários.

## **Plano de Testes de Software**
 
| **Caso de Teste** 	| **CT-01 – Cadastro/login de Usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-01 -A aplicação permitirá o login por meio do número de telefone e senha cadastrados previamente. |
| Objetivos do Teste 	| -Verificar se o sistema disponibiliza o cadastro<br> -Validação dos dados<br> - Login de usuário já cadastrado.|
| Passos cadastro de novo usuário 	| - Acessar o aplicativo <br> - Informar número de celular e senha <br> - Visualizar a página principal<br> - Acessar página de Login<br> -Cadastrar usuário |
| Passos para login 	| -Acessar o aplicativo <br> -Informar número de celular e senha <br> -Visualizar a página principal<br> -Acessar página de Login<br> 
|Critério de Êxito |Sucesso no cadastro a partir do número de celular e senha válidos<br>|                 
|  	|  	|
| Caso de Teste 	| **CT-02 – Pesquisa por localização**	|
|Requisito Associado | RF-02	-A aplicação deve permitir ao usuário logado realizar pesquisa da localização dos estabelecimentos conforme sua necessidade utilizando para tal o CEP ou digitando manualmente o logradouro.|
| Objetivo do Teste 	| A aplicação exibe uma lista de estabelecimentos próximos com base no CEP fornecido ou de sua localização atual. |
| Passos 	| -Acessar o aplicativo<br> -Visualizar a página principal<br> -Acessar página de pesquisa |
|Critério de Êxito | Sucesso na pesquisa por localização<br>|                  
|  	|  	|
| Caso de Teste 	| **CT-03 – Lista de Estabelecimentos Cadastrados**	|
|Requisito Associado | RF-03  A aplicação deve oferecer a lista de estabelecimentos cadastrados com nome, bandeira, preço, endereço e a distância entre o usuário e o serviço disponível.|
| Objetivo do Teste 	| Verificar se a listagem de estabelecimentos está disponível e as informações de bandeira, preço, endereço e a distância entre o usuário e o serviço disponível. |
| Passos 	| - Acessar o aplicativo <br> -Visualizar a página principal<br> -Clicar no símbolo do "posto"|
|Critério de Êxito | Listagem dos postos com as devidas informações disponíveis|
|  	|  	|
| Caso de Teste 	| **CT-04 Cadastro de Estabelecimentos**	|
|Requisito Associado | RF-04 A aplicação deve permitir ao administrador o cadastro do estabelecimento informando: preço e tipo de combustível, bandeira do posto, endereço, horário de funcionamento e outros serviços adicionais <br> 
| Objetivo do Teste 	| Verificar se o administrador está conseguindo cadastrar os estabelecimentos<br> 
| Passos 	| - Acessar o aplicativo <br> -Visualizar a página principal<br> -Clicar no símbolo em "Adicionar estabelecimento"|
|Critério de Êxito | Cadastro realizado com êxito|                 
|  	|  	|
| Caso de Teste 	| **CT-05 – Atualização/exclusão de Informações** |
|Requisito Associado | RF-05 A aplicação deve permitir ao administrador atualizar as informações previamente cadastradas.<br> RF-06 A aplicação deve permitir ao administrador excluir informações devidamente comprovadas como incorretas. |
| Objetivo do Teste 	| A aplicação deve permitir ao administrador atualizar as informações e excluir informações incorretas  |
| Passos 	| -  Acessar o aplicativo <br> Acessar página de Login<br> - Informar número de telefone e senha <br> - Acessar a área do administrador<br> -Clicar no símbolo em "Alterar informações do estabelecimento"|

|Critério de Êxito |  Sucesso nas alterações cadastrais. |
|  	|  	|
| Caso de Teste 	| **CT-06 – Sincronização com o GPS**	|
|Requisito Associado | RF-10 A aplicação deverá ser integrada a um serviço de GPS para que trace a rota ideal do usuário até o posto desejado. |
| Objetivo do Teste 	| Verificar a Sincronização com o GPS desejado com o posto selecionado no aplicativo.|
| Passos 	|  -Acessar o aplicativo<br> -Visualizar a página principal<br> -Acessar página de pesquisa<br> -Selecionar o posto desejado<br> -Clicar em: "xx Km- Ir agora"
|Critério de Êxito | 	Integrar a aplicação móvel com o GPS selecinado pelo usuário. |
|  	|  	|
| Caso de Teste 	| **CT-07 – Favoritar Posto**	|
|Requisito Associado | RF- 12	- A aplicação deverá permitir ao usuário favoritar posto. |
| Objetivo do Teste 	| Verificar se aplicação permite favoritar o posto desejado pelo usuário |
| Passos 	|-Acessar o aplicativo<br> -Visualizar a página principal<br> -Acessar página de pesquisa<br> -Clicar do lado direito da tela na "estrela" para favoritar o posto. |
|Critério de Êxito | Visualizar postos favoritados pelo usuário.| 
|  	|  	|
| Caso de Teste 	| **CT-08 – Serviço de Atendimento ao Usuário**	|
|Requisito Associado | RF-09	-A aplicação deverá disponibilizar um serviço de atendimento ao usuário.|
| Objetivo do Teste 	| Verificar se o SAC,funcionam adequadamente. |
| Passos 	| - Acessar o aplicativo <br> - Visualizar a página principal<br> -Acessar página de Login<br> -Clicar no botão SAC???. |
|Critério de Êxito | Ao clicar no SAC o usuário é direcionando para o atendimento.
|  	|  	|













