# Programação de Funcionalidades

# Login/Cadastro - (RF-01):
*	**Cenário 1:** O usuário tenta fazer login com um email e senha válidos.  
*	**Resultado esperado:** O usuário é autenticado e redirecionado para a tela principal da aplicação.


*   **Cenário 2:** Caso o usuário não possua cadastro, terá opção de se cadastrar, informando alguns dados pessoais para efetivação do cadastro.  
*   **Resultado esperado:** O usário é cadastrado autenticado e redirecionado para a tela principal da aplicação.
![Imagem](<img/Doc07/Tela Login.png>)


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





