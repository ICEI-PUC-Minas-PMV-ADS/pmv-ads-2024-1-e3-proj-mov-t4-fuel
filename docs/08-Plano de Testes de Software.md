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
|	Requisito Associado 	| RF-01 - A aplicação deve oferecr um cadastro divido entre usuário e administrador . |
| Objetivo do Teste 	| Verificar se o sistema disponibiliza o cadastro dos dois perfis, se a validação está ocorrendo. |
| Passos 	| - Acessar o aplicativo <br> - Informar e-mail e senha <br> - Visualizar a página principal<br> - Acessar página de Login<br> - Cadastrar usuário |
|Critério de Êxito |  	Sucesso no cadastro a partir e-mail e senha válidos;<br>
|                  |  	Preenchimento de todos os campos obrigatórios. |
|  	|  	|
| Caso de Teste 	| **CT-02 – Pesquisa por localização**	|
|Requisito Associado | RF-02	- A aplicação permitirá o login do usuário Locador/Locatário após o seu cadastro. |
| Objetivo do Teste 	| Verificar se o sistema controla o acesso dos usuários de forma efetiva, ou seja, os direciona para a tela correspondente ao seu perfil. |
| Passos 	| - Acessar o navegador<br> - Informar o endereço do Site<br> - Visualizar a página principal<br> - Acessar página de Login<br> - Informar Email e Senha |
|Critério de Êxito | E-mails e senhas inválidos apresentar mensagem de erro<br>
|                  | E-mails não cadastrados direcionar para a tela de cadastro. |
|  	|  	|
| Caso de Teste 	| **CT-03 – Lista de Estabelecimentos Cadastrados**	|
|Requisito Associado | RF-10	-A aplicação deve permitir que o usuário (prestador)(Locador)possa disponibilizar(cadastrar) suas vagas a partir de seu cadastro e login |
| Objetivo do Teste 	| Verificar se a vaga existe, e se ela pertence ao responsável pelo cadastro. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - Acessar o ícone "Cadastrar Vagas"<br>  |
|Critério de Êxito | Liberação do cadastro a partir da aprovação da documentação da vaga. |
|  	|  	|
| Caso de Teste 	| **CT-04 Cadastro de Estabelecimentos**	|
|Requisito Associado | RF-02	- A aplicação deve apresentar, para cada localidade cadastrada de evento, imagens e descrição da vaga disponível.<br> RF-05 A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar vagas de acordo com seu interesse<br> RF-07 A aplicação deve permitir o compartilhamento de vagas disponíveis para locatários, através de um botão. |
| Objetivo do Teste 	| Verificar se o sistema está conectado corretamente com um sistema de GPS;<br> Certificar que as imagens estão sendo carregadas corretamente;<br> Verificar que o “botão” compartilhar responde aos comandos corretamente.|
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - Acessar o ícone "Vagas"<br>  |
|Critério de Êxito |  Ao clicar na vaga as imagens são carregadas de maneira ágil;<br>
|                  |  Botão compartilhar ativo no layout da vaga. |
|  	|  	|
| Caso de Teste 	| **CT-05 – Atualização de Informações** |
|Requisito Associado | RF-01	- A aplicação deve apresentar na página principal o serviço de vagas disponíveis próximo a localidade de interesse do cliente, que será baseado no google maps. |
| Objetivo do Teste 	| Verificar se o sistema a partir do CEP digitado busca as vagas mais próximas. |
| Passos 	| -  Acessar o navegador <br> - Informar o endereço do site<br> - Visualizar a página principal<br> Acessar página de Login<br> - Informar Email e Senha <br> - Acessar o ícone "Vagas"<br> - Informar o CEP da região  |
|Critério de Êxito |   Informando o CEP as vagas da região são imediatamente carregadas. |
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

 ___________________________________________________________________________________________________________________________
# Programação de Funcionalidades


# Pesquisa por Localização - (RF-02):
*   **Cenário:** O usuário realiza uma pesquisa de localização utilizando o CEP ou sua localização atual.  
*   **Resultado esperado:** A aplicação exibe uma lista de estabelecimentos próximos com base no CEP fornecido ou de sua localização atual.
![Imagem](<img/Doc07/Pesquisa Posto.png>)


# Lista de Estabelecimentos Cadastrados (RF-03):
*   **Cenário 1:** O usuário visualiza a lista de estabelecimentos cadastrados. 
*   **Resuldado esperado:** Uma lista de vários estabelecimentos é exibida com nome, bandeira, preço, endereço e distância.

*   **Cenário 2:** O usuário visualiza o perfil completo dos dados do estabelecimento cadastrados. 
*   **Resuldado esperado:** As informações do estabelecimento selecionado é exibida com nome, bandeira, preço, endereço e distância, bem como informações extras, como eventuais serviços extras realizado naquele estabelecimento.
![Imagem](<img/Doc07/Tela Postos.png>); ![Imagem](<img/Doc07/Tela Perfil Posto.png>)


# Cadastro de Estabelecimentos (RF-04):
* **Cenário:** O administrador cadastra o estabelecimento com as informações pertinentes àquele estabelecimento.  
* **Resultado esperado:** O estabelecimento é adicionado com sucesso a base de dados. 


# Atualização de Informações (RF-05):
* **Cenário:** O administrador atualiza as informações de um estabelecimento existente.  
* **Resultado Esperado:** As informações alterada/atualizada são corretamente atualizado na base de dados.  


# Exclusão de Informações (RF-06):
* **Cenário:** O administrador exclui determinada informações de um estabelecimento ou exclui o estabelecimento como um todo.  
* **Resultado Esperado:** Determinadas informações ou a base de dados total do estabelecimento são removidas.  



# Recuperação de Senha (RF-07):
* **Cenário:** O usuário solicita a recuperação de senha através do e-mail cadastrado.  
* **Resultado Esperado:** Um email de recuperação de senha é enviado com sucesso para o endereço cadastrado.  


# Pesquisa de Preços (RF-08):
* **Cenário:** usuário realiza uma pesquisa de preço, tipo de combustível e bandeira do posto.  
* **Resultado Esperado:** A aplicação exibe uma lista de postos que correspondem aos critérios de pesquisa.  


# Atendimento ao Usuário (RF-09):
* **Cenário:** O usuário entra em contato com o serviço de atendimento ao cliente.  
* **Resultado Esperado:** O usuário encontra uma opção de contato dentro da aplicação, através de um formulário e consegue obter suporte para suas dúvidas ou problemas, quando o administrador responder o usuário.  


# Envio das cordenadas do Posto para App de Navegação (RF-10):
* **Cenário:** O usuário deseja traçar uma rota até um posto de combustível selecionado na aplicação.  
* **Resultado Esperado:** A aplicação envia os dados/faz integração para os aplicativos de navegação/mapas reconhecido no aparelho do usuário.  


# Atualização dos Preços de Combustíveis (RF-11):
* **Cenário:** O usuário deseja ajudar a atualizar as informações do preço dos combustíveis de determinado posto enviando uma foto pelo aplicativo, do cupom fiscal ou foto dos preços nas bombas/placas informativas de preços.  
* **Resultado Esperado:** O usuário tira uma foto dos preços dos produtos no posto de combustível e envia através da aplicação. A foto é processada e as informações são atualizadas no banco de dados, fornecendo aos usuários dados atualizados sobre os preços no posto.  


# Favoritar Posto (RF-12):
* **Cenário:** O usuário cadastrado deseja salvar um posto como favorito, para acesso rápido no futuro.  
* **Resultado Esperado:**  O usuário encontra a opção de favoritar o posto de combustível desejado na aplicação. Após favoritar, o posto é adicionado à lista de favoritos do usuário, permitindo acesso rápido e fácil no futuro. 
![Imagem](<img/Doc07/Tela Favoritos.png>)


# Avaliação do Usuário  (RF-13):
* **Cenário:** O usuário deseja avaliar a qualidade de um posto de combustível após uma visita.
* **Resultado Esperado:** Após visitar um posto de combustível, o usuário tem a opção de fornecer uma avaliação sobre sua experiência, como qualidade do serviço, limpeza, preço dos combustíveis, entre outros aspectos. A avaliação é registrada na aplicação e pode ser visualizada por outros usuários.















