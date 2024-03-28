# Plano de Testes de Software

## **Objetivos do Teste**

O documento foi produzido com o objetivo de listar todos os requisitos da aplicação e testá-los de modo a encontrar falhas antes que a aplicação seja disponiblizada para o usuário

##  **Sobre a aplicação Fuel**

É um aplicativo mobile que permite aos usuários visualizarem os preços da gasolina em vários postos de combustível, e assim ter mais possibilidades de escolha, como por exemplo o mais barato, o mais perto ou até mesmo pela avaliação do posto.

Além de fornecer informações sobre outros serviços oferecidos por esses estabelecimentos, como lava-jato, troca de óleo, peças, acessórios, calibragem, conveniência etc.

## **Escopo**
Os testes buscarão medir os graus de acessibilidade, aceitação, visam também medir a robustez do sistema e sua confiabilidade de modo a entregar uma aplicação de qualidade aos usuários.

## **Plano de Testes de Software**
 
| **Caso de Teste** 	| **CT-01 – Cadastrar Usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-04 - A aplicação deve oferecr um cadastro divido entre locatário e prestador da vaga. |
| Objetivo do Teste 	| Verificar se o sistema disponibiliza o cadastro dos dois perfis, se a validação do CPF/CNPJ está ocorrendo. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> - Acessar página de Login<br> - Cadastrar usuário |
|Critério de Êxito |  	Sucesso no cadastro a partir de um CPF/CNPJ válido;<br>
|                  |  	Preenchimento de todos os campos obrigatórios. |
|  	|  	|
| Caso de Teste 	| **CT-02 – Efetuar login**	|
|Requisito Associado | RF-12	- A aplicação permitirá o login do usuário Locador/Locatário após o seu cadastro. |
| Objetivo do Teste 	| Verificar se o sistema controla o acesso dos usuários de forma efetiva, ou seja, os direciona para a tela correspondente ao seu perfil. |
| Passos 	| - Acessar o navegador<br> - Informar o endereço do Site<br> - Visualizar a página principal<br> - Acessar página de Login<br> - Informar Email e Senha |
|Critério de Êxito | E-mails e senhas inválidos apresentar mensagem de erro<br>
|                  | E-mails não cadastrados direcionar para a tela de cadastro. |
|  	|  	|
| Caso de Teste 	| **CT-03 – Cadastrar Vagas**	|
|Requisito Associado | RF-10	-A aplicação deve permitir que o usuário (prestador)(Locador)possa disponibilizar(cadastrar) suas vagas a partir de seu cadastro e login |
| Objetivo do Teste 	| Verificar se a vaga existe, e se ela pertence ao responsável pelo cadastro. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - Acessar o ícone "Cadastrar Vagas"<br>  |
|Critério de Êxito | Liberação do cadastro a partir da aprovação da documentação da vaga. |
|  	|  	|
| Caso de Teste 	| **CT-04 – Pesquisar Vagas**	|
|Requisito Associado | RF-02	- A aplicação deve apresentar, para cada localidade cadastrada de evento, imagens e descrição da vaga disponível.<br> RF-05 A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar vagas de acordo com seu interesse<br> RF-07 A aplicação deve permitir o compartilhamento de vagas disponíveis para locatários, através de um botão. |
| Objetivo do Teste 	| Verificar se o sistema está conectado corretamente com um sistema de GPS;<br> Certificar que as imagens estão sendo carregadas corretamente;<br> Verificar que o “botão” compartilhar responde aos comandos corretamente.|
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - Acessar o ícone "Vagas"<br>  |
|Critério de Êxito |  Ao clicar na vaga as imagens são carregadas de maneira ágil;<br>
|                  |  Botão compartilhar ativo no layout da vaga. |
|  	|  	|
| Caso de Teste 	| **CT-05 – Apresentar Vagas na região desejada** |
|Requisito Associado | RF-01	- A aplicação deve apresentar na página principal o serviço de vagas disponíveis próximo a localidade de interesse do cliente, que será baseado no google maps. |
| Objetivo do Teste 	| Verificar se o sistema a partir do CEP digitado busca as vagas mais próximas. |
| Passos 	| -  Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - Acessar o ícone "Vagas"<br> - Informar o CEP da região  |
|Critério de Êxito |   Informando o CEP as vagas da região são imediatamente carregadas. |
|  	|  	|
| Caso de Teste 	| **CT-06 – Trajeto a pé até o evento**	|
|Requisito Associado | RF-03	- A aplicação deve possuir opção de fazer login, sendo o login o endereço de e-mail. |
| Objetivo do Teste 	| Verificar se o sistema, usando uma aplicação GPS, disponibiliza corretamente o trajeto a pé até o evento. |
| Passos 	| -  Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - Acessar o ícone "Vagas"<br> - Informar o CEP da região<br> - Visualizar trajeto até o evento. |
|Critério de Êxito |   	O sistema com o auxílio do GPS carrega a distância e o melhor trajeto a pé da vaga ao evento. |
|  	|  	|
| Caso de Teste 	| **CT-07 – Pagamento**	|
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

 










## **Objetivo do Teste:**

O objetivo deste teste é avaliar a eficiência, a usabilidade e a satisfação do aplicativo móvel. Ele visa permitir aos usuários visualizarem os preços da gasolina e outros serviços relacionados à manutenção de veículos, além de identificar possíveis problemas que os usuários possam enfrentar durante a utilização da aplicação.

## **Participantes:**

O público-alvo para os testes de usabilidade será composto por usuários reais e potenciais da aplicação. Nossa abordagem priorizará a participação de pelo menos 5 indivíduos que representem uma ampla variedade de perfis de usuários, incluindo:

- Profissionais que realizam viagens de frete em todo o Brasil.
- Indivíduos que dependem de veículos para suas atividades diárias, como estudo, trabalho e lazer.
- Usuários habituais de aplicativos de mobilidade urbana.
- Empresas que realizam locação de veículos.

## **Roteiro de Tarefas a serem desempenhadas:**

## **Usuário**
Para o cenário de um usuário, os participantes serão solicitados a realizar as seguintes tarefas:
1. Abrir a aplicação e fazer login ou criar uma conta.
2. Pesquisar por localização.
3. Visualizar uma lista com vários estabelecimentos é exibida com nome, bandeira, preço, endereço e distância.
4. Favoritar os postos/ prestadores de serviços favoritos.
5. Testar a sincronização com o GPS escolhido pelo usuário.
6. Avaliar postos/prestadores de serviços.

## **Administrador**
Já para o cenário de um Administrador, os participantes serão solicitados a realizar as seguintes tarefas:
1.	Abrir a aplicação e fazer login ou criar uma conta.
2.	Cadastrar novos parceiros
3.	Atualizar os preços dos postos
4.	Atualizar os serviços oferecidos pelos parceiros
   

## **Avaliação e Relatório:**
Após a conclusão dos testes, o usuário terá de responder um questionário para obtermos um feedback da sua experiência utilizando a aplicação. Após isso, os dados coletados serão analisados para identificar problemas e possíveis melhorias.

