# Registro de Testes de Software


Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

| **Caso de Teste** 	| **CT-01 – Cadastro/login de Usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-01 - A aplicação permitirá o login por meio do número de telefone e senha cadastrados previamente. |
| Objetivos do Teste 	| - Verificar se o sistema disponibiliza o cadastro<br> -Validação dos dados<br> - Login de usuário já cadastrado.|
| Passos cadastro de novo usuário 	| - Acessar o aplicativo <br> - Informar número de celular e senha <br> - Visualizar a página principal<br> - Acessar página de Login<br> -Cadastrar usuário |
| Passos para login 	| -Acessar o aplicativo <br> -Informar número de celular e senha <br> -Visualizar a página principal<br> -Acessar página de Login<br> 
|Critério de Êxito |Sucesso no cadastro a partir do número de celular e senha válidos<br>|  
|Resultado Esperado | - Espera-se que a aplicação confirme o cadastro de novos usuários assim que os dados requisitados forem validados<br> - A partir do cadastro confirmado a aplicação deve direcionar o usuário para realizar o login com número de telefone e senha válidos conforme a regra de negócio<br>|
|Resultado Obtido | -A aplicação confirma o cadastro de novos usuários assim que os dados requisitados foram validados.|


| **Caso de Teste** 	| **CT-02 – Pesquisa por localização/Preço**	|
|:---:	|:---:	|
|Requisito Associado | RF-02	-A aplicação deve permitir ao usuário logado realizar pesquisa da localização dos estabelecimentos conforme sua necessidade utilizando para tal o CEP ou digitando manualmente o logradouro.<br> RF-08 A aplicação deve permitir que os usuários realizem pesquisas de preço, tipo de combustível e bandeira do posto.
| Objetivos do Teste 	| -A aplicação exibe uma lista de estabelecimentos próximos com base no CEP fornecido ou de sua localização atual.<br> - A aplicação deve permitir pesquisas de preço |
| Passos 	| -Acessar o aplicativo<br> -Visualizar a página principal<br> -Acessar página de pesquisa |
|Critério de Êxito | Sucesso na pesquisa por localização<br>| 
|Resultado Esperado |Cadastro realizado com êxito<br> |
|Resultado Obtido | -A aplicação exibe uma lista de estabelecimentos -Permite que os usuário realize pesquisa de preço, tipo de combustível e bandeira do posto<br>|

|:---:	|:---:	|
| **Caso de Teste** 	| **CT-03 – Lista de Estabelecimentos Cadastrados**	|
|Requisito Associado | RF-03  A aplicação deve oferecer a lista de estabelecimentos cadastrados com nome, bandeira, preço, endereço e a distância entre o usuário e o serviço disponível.|
| Objetivo do Teste 	| Verificar se a listagem de estabelecimentos está disponível e as informações de bandeira, preço, endereço e a distância entre o usuário e o serviço disponível. |
| Passos 	| - Acessar o aplicativo <br> -Visualizar a página principal<br> -Clicar no símbolo do "posto"|
|Critério de Êxito | Listagem dos postos com as devidas informações disponíveis|
|Resultado Esperado | - Espera-se qua a aplicação disponibilize uma lista de estabelecimentos previamente cadastrados com nome, bandeira, preço, endereço e distância que possibilite ao usuário escolher o establecimento de sua preferência |
|Resultado Obtido | Listagem dos postos com as devidas informações disponíveis <br> |
|:---:	|:---:	|
| **Caso de Teste**  	| **CT-04 Cadastro de Estabelecimentos**	|
|Requisito Associado | RF-04 A aplicação deve permitir ao administrador o cadastro do estabelecimento informando: preço e tipo de combustível, bandeira do posto, endereço, horário de funcionamento e outros serviços adicionais <br> 
| Objetivo do Teste 	| Verificar se o administrador está conseguindo cadastrar os estabelecimentos<br> 
| Passos 	| - Acessar o aplicativo <br> -Visualizar a página principal<br> -Clicar no símbolo em "Adicionar estabelecimento"|
|Critério de Êxito | Cadastro realizado com êxito<br>|  
|Resultado Esperado | |
|Resultado Obtido | Cadastro realizado com sucesso.<br> |
|:---:	|:---:	|
|**Caso de Teste**  	| **CT-05 – Atualização/exclusão de Informações** |
|Requisito Associado | RF-05 A aplicação deve permitir ao administrador atualizar as informações previamente cadastradas.<br> RF-06 A aplicação deve permitir ao administrador excluir informações devidamente comprovadas como incorretas. |
| Objetivo do Teste 	| A aplicação deve permitir ao administrador atualizar as informações e excluir informações incorretas  |
| Passos 	| -  Acessar o aplicativo <br> Acessar página de Login<br> - Informar número de telefone e senha <br> - Acessar a área do administrador<br> -Clicar no símbolo em "Alterar informações do estabelecimento"|
|Critério de Êxito |  Sucesso nas alterações cadastrais.<br> |
|Resultado Esperado | |
|Resultado Obtido | Funcionalidade ainda não implementada. <br>|
|:---:	|:---:	|
| **Caso de Teste**  	| **CT-06 – Sincronização com o GPS**	|
|Requisito Associado | RF-10 A aplicação deverá ser integrada a um serviço de GPS para que trace a rota ideal do usuário até o posto desejado. |
| Objetivo do Teste 	| Verificar a Sincronização com o GPS desejado com o posto selecionado no aplicativo.|
| Passos 	|  -Acessar o aplicativo<br> -Visualizar a página principal<br> -Acessar página de pesquisa<br> -Selecionar o posto desejado<br> -Clicar em: "xx Km- Ir agora"
|Critério de Êxito | 	Integrar a aplicação móvel com o GPS selecinado pelo usuário.<br> |
|Resultado Esperado | Ao selecionar um estabelecimento o usuário deve ser direcionado pela aplicação para um aplicativo de navegação o qual traçará a rota para o usuário.<br>  |
|Resultado Obtido | - Integração da aplicação móvel com o GPS selecinado pelo usuário, realizada com sucesso. <br>|
|:---:	|:---:	|
| **Caso de Teste**  	| **CT-07 – Favoritar Posto**	|
|Requisito Associado | RF- 12	- A aplicação deverá permitir ao usuário favoritar posto. <br>|
| Objetivo do Teste 	| Verificar se aplicação permite favoritar o posto desejado pelo usuário <br> |
| Passos 	|-Acessar o aplicativo<br> -Visualizar a página principal<br> -Acessar página de pesquisa<br> -Clicar do lado direito da tela na "estrela" para favoritar o posto.<br> |
|Critério de Êxito | Visualizar postos favoritados pelo usuário.<br>| 
|Resultado Esperado | |
|Resultado Obtido | Funcionalidade ainda não implementada.<br> |
|:---:	|:---:	|
| **Caso de Teste**  	| **CT-08 – Serviço de Atendimento ao Usuário**	|
|Requisito Associado | RF-09	-A aplicação deverá disponibilizar um serviço de atendimento ao usuário.|
| Objetivo do Teste 	| Verificar se o SAC,funcionam adequadamente. |
| Passos 	| - Acessar o aplicativo <br> - Visualizar a página principal<br> -Acessar página de Login<br> -Clicar em "ajuda"/ "suporte"???. |
|Critério de Êxito | Ao clicar no SAC o usuário é direcionando para o atendimento.|
|Resultado Esperado | |
|Resultado Obtido | Funcionalidade ainda não implementada.<br>|
|:---:	|:---:	|

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.


