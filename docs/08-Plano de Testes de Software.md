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
| Passos 	| - Acessar o aplicativo <br> -Visualizar a página principal<br> -Clicar no símbolo do posto|
|Critério de Êxito | Listagem dos postos com as devidas informações disponíveis|
|  	|  	|
| Caso de Teste 	| **CT-04 Cadastro de Estabelecimentos**	|
|Requisito Associado | RF-04 A aplicação deve permitir ao administrador o cadastro do estabelecimento informando: preço e tipo de combustível, bandeira do posto, endereço, horário de funcionamento e outros serviços adicionais <br> 
| Objetivo do Teste 	| Verificar se o sistema está conectado corretamente com um sistema de GPS;<br> Certificar que as imagens estão sendo carregadas corretamente;<br> Verificar que o “botão” compartilhar responde aos comandos corretamente.|
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - Acessar o ícone "Vagas"<br>  |
|Critério de Êxito |  Ao clicar na vaga as imagens são carregadas de maneira ágil;<br>
|                  |  Botão compartilhar ativo no layout da vaga. |
|  	|  	|
| Caso de Teste 	| **CT-05 – Atualização de Informações** |
|Requisito Associado | RF-05 A aplicação deve permitir ao administrador atualizar as informações previamente cadastradas.<br> RF-06 A aplicação deve permitir ao administrador excluir informações devidamente comprovadas como incorretas. |
| Objetivo do Teste 	| A aplicação deve permitir ao administrador atualizar as informações e excluir informações incorretas  |
| Passos 	| -  Acessar o aplicativo <br> Acessar página de Login<br> - Informar número de telefone e senha <br> - Acessar á página do administrador   |
|Critério de Êxito |  Sucesso nas alterações de cadastro e exclusão de informações. |
|  	|  	|
| Caso de Teste 	| **CT-06 – Exclusão de Informações**	|
|Requisito Associado | RF-03	- A aplicação deve possuir opção de fazer login, sendo o login o endereço de e-mail. |
| Objetivo do Teste 	| Verificar se o sistema, usando uma aplicação GPS, disponibiliza corretamente o trajeto a pé até o evento. |
| Passos 	| -  Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - Acessar o ícone "Vagas"<br> - Informar o CEP da região<br> - Visualizar trajeto até o evento. |
|Critério de Êxito |   	O sistema com o auxílio do GPS carrega a distância e o melhor trajeto a pé da vaga ao evento. |
|  	|  	|
| Caso de Teste 	| **CT-07 – Atualização dos Preços de Combustíveis**	|
|Requisito Associado | RF-08 A aplicação deve permitir reservar e efetuar o pagamento com antecedência. |
|                    | RF-11 A aplicação deverá suportar o pagamento das taxas vinculadas a locação da vaga através do PIX. |
| Objetivo do Teste 	|Verificar se o sistema está disponibilizando o recurso pagamento corretamente e se após a vaga está sendo reservada. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - Acessar o ícone "Vagas"<br> - Informar o CEP da região<br> - Selecionar Vaga<br> Realizar pagamento. | 
|Critério de Êxito |  	Efetuado o pagamento a vaga é reservada automaticamente e ficará indisponível para os outros usuários.
|                  |  	Locador receberá um alerta de pagamento e reserva da sua vaga. |
|  	|  	|
| Caso de Teste 	| **CT-08 – Comentários**	|
|Requisito Associado | RF-09	- A aplicação deve permitir que usuários x prestador possam efetuar comentários. |
| Objetivo do Teste 	| Verificar se o campo comentários está sendo disponibilizado e ao realizá-lo ficará visível a todos os usuários. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - Acessar o ícone "Vagas"<br> - Selecionar vaga<br> - Realizar Comentários. | 
|Critério de Êxito | Campo “comentários” disponibilizado;
|                  |Comentários realizado com sucesso. |
|  	|  	|
| Caso de Teste 	| **CT-09 – Serviço de Atendimento ao Usuário**	|
|Requisito Associado | RF-06	- A aplicação deve permitir visualizar as informações de contatos do mantenedor da aplicação. |
| Objetivo do Teste 	| Verificar se o SAC, via chat e email funcionam adequadamente. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - clicar no botão SAC. |
|Critério de Êxito | Ao clicar no SAC o usuário é direcionando para as opções chat, email, telefone.|
|  	|  	|













