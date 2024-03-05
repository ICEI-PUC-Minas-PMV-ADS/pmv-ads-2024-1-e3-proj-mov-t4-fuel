# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

**José Geraldo** tem 48 anos,é caminhoneiro, ensino médio completo. O seu objetivo ao usar à aplicação, é economizar. Tem como motivação a praticidade. Possui um caminhão que realiza frete para todo o Brasil.

**Camila Pontes** tem 21 anos, é universitária e está se graduando em Psicologia. Para Camila, o objetivo para usar a aplicação, é ter praticidade para encontrar combustível e prestadores de serviços para manutenção do seu carro. Sua motivação é ter tranquilidade, praticidade e preço baixo.

**Fernanda Brant** com 35 anos, é representante comercial, tem o objetivo de usar a aplicação no intuito de praticidade e segurança. Sua motivação é a rotina diária de trabalho, pois precisa otimizar o tempo para o abastecimento do carro e as manutenções preventivas, visando um preço justo.

**Roberto Barbosa** tem 40 anos,é trabalhador autônomo. Ele trabalha como motorista de aplicativo. Tem com objetivo de usar a aplicação para abastecer seu veículo e realizar as manutenções em lugares com um bom custo benefício. Sua finalidade é ter tranquilidade e uma redução dos custos, tendo em vista que ele sempre precisa dos serviços para manter o seu veículo .

**Nilton Novaes** tem 65 anos,é aposentado. Tem com objetivo de usar a aplicação para as rotinas do seu dia a dia e ir para a roça descansar com a famíla nos finais de semana, como não tem muita familiaridade com tecnologia precisa do apoio dos seus filhos na ultilização do App.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

Com o ensejo de entender melhor as personas identificadas no projeto, foram identificadas as seguintes histórias de usuários. 


|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|JOSÉ | Poder viajar tranquilamente; Ter economia ; Ter segurança ; Pagar preço justo| Economizar; como as viagens são longas consequentemente os custos são mais altos o que pode gerar grandes prejuízos.
|CAMILA      | Sua motivação é ter tranquilidade; Ter praticidade Ter preço baixo.;                   | O objetivo para usar a aplicação, é ter praticidade; para encontrar combustível; Encontrar prestadores de serviços para manutenção do seu carro. |
|FERNANDA  | sua motivação é a rotina diária de trabalho; Otimizar o tempo para o abastecimento do carro e as manutenções preventivas, Ter preço justo.    |  Tem o objetivo de usar a aplicação no intuito de praticidade e segurança.          |
|ROBERTO    |Objetivo de usar a aplicação para o abastecimento do seu veículo; manutenções programadas; ter um bom custo benefício.                  |Sua finalidade é ter tranquilidade  redução dos custos, tendo em vista que ele sempre necessita de serviços de manutenções básicas.



Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 


## Requisitos do Projeto
O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir. 


### Requisitos Funcionais
A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues. 
|ID    | Descrição dos Requisitos | Prioridade |
|------|-----------------------------------------|----|
|RF-01 | A aplicação permitirá o login por meio de Email e senha cadastrados previamente.   | ALTA |
|RF-02 | A aplicação deve permitir ao usuário logado realizar pesquisa da localização dos estabelecimentos conforme sua necessidade utilizando para tal o Cep ou digitando manualmente o logradouro.    | ALTA |
|RF-03 | A aplicação deve oferecer a lista de estabelecimentos cadastrados com nome, bandeira, preço, endereço e a distância entre o usuário e o serviço disponível.    | ALTA | 
|RF-04 | A aplicação deve permitir ao administrador o cadastro do estabelecimento informando: preço e tipo de combustível, bandeira do posto, endereço, horário de funcionamento e outros serviços adicionais | ALTA |
|RF-05 | A aplicação deve permitir atualizar as informações previamente cadastradas.  | ALTA |
|RF-06 | A aplicação deve permitir ao administrador excluir informações devidamente comprovadas como falsas ou incorretas.    | ALTA |
|RF-07 | A aplicação deve pedir ao usuário que recupere sua senha a partir do Email previamente cadastrado.  | ALTA |
|RF-08 | A aplicação deve permitir que os usuários realizem pesquisas de preço, tipo de combustível e bandeira do posto.    | MÉDIA |
|RF-09 | A aplicação deverá disponibilizar um serviço de atendimento ao usuário.    | MÉDIA |
|RF-10 | A aplicação deverá ser integrada a um serviço de GPS para que trace a rota ideal do usuário até o posto desejado.   | MÉDIA |
|RF-11| A aplicação deverá permitir que o usuário envie uma foto dos preços do posto para auxiliar na atualização das informações do app. | MÉDIA |
|RF-12 | A aplicação deverá permitir ao usuário favoritar posto. | BAIXA | 
|RF-13| A aplicação deverá permitir a avaliação do usuário. | BAIXA |


### Requisitos não Funcionais
A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.
|ID     | Descrição do Requisito | Prioridade |
|-------|-------------------------|-----------|
|RNF-01 | A aplicação deve ser publicada em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku);   | ALTA | 
|RNF-02 | A aplicação deverá ser responsiva permitindo a visualização em um celular de forma adequada.  | ALTA | 
|RNF-03 | A interface da aplicação deve ser intuitiva para que atenda a todos os públicos.   |  ALTA | 
|RNF-04 | A aplicação deve ser compatível com os principais sistemas operacionais do mercado |  ALTA | 
|RNF-05 | A aplicação deve ter bom nível de contraste entre os elementos da tela em conformidade    |  MÉDIA | 


## Restrições
As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 
|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01 |O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 23/06/2024   |
|RE-02 | O aplicativo deve se restringir às tecnologias do framework. |
|RE-03 | A equipe não pode subcontratar o desenvolvimento do trabalho. |
|RE-04| A aplicação será desenvolvida apenas para dispositivos mobile. | 


## Diagrama de Casos de Uso

O diagrama contempla as principais ligações previstas entre casos de uso e atores e permite detalhar os Requisitos Funcionais identificados na etapa de elicitação. Lembrando que  não se utiliza diagramas de caso de uso para requisitos não-funcionais. 
Como atores é importante a identificação dos grupos de todos os envolvidos que interagem com o sistema, principalmente outros sistemas ou sensores. Eles são representados graficamente por bonecos-palito e serão nomeados pelos papéis nas interações nas quais estão envolvidos (ex. Cliente, Administrador). Lembre-se de que o próprio sistema não pode ser ator do diagrama que o modela. 
Em relação aos casos de uso, eles devem representar as interações ou transações dos atores com o sistema. Cada tipo possível é representada por uma elipse nomeada e os relacionamentos são indicados por linhas que podem ter setas nos casos em que se indica a origem da interação. Os nomes dos casos de uso representam verbos no infinitivo associados aos objetos com os quais se relacionam os verbos (ex. Cadastrar usuário, Visualizar relatório). Os tipos de relacionamentos mais comuns são associações entre atores e casos de uso, generalizações entre atores e entre casos de uso, inclusões e extensões entre casos de uso. 

![Diagrama:](<img/Diagrama de Casos de Uso - Fuel+.jpg>)
# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema. Foram incluídos os relacionamentos entre requisitos funcionais e stakeholders. Os requisitos não funcionais não foram incluídos pois relacionam-se com todos os demais.


| INFORMAÇÃO | RF-01 | RF-02 | RF-03 | RF-04 | RF-05 | RF-06 | RF-07 | RF-08 | RF-09 | RF-10 | RF-11 | RF-12 | RF-13 | USUÁRIO | ADM | 
|------------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|---------| ----|
| RF-01      |   X   |       |       |       |   X   |       |   X   |       |       |       |       |       |       |    X    |  X  |  
| RF-02      |       |   X   |       |       |       |       |       |   X   |       |   X   |       |       |       |    X    |     | 
| RF-03      |       |       |   X   |   X   |       |   X   |       |       |       |       |       |       |       |    X    |     |    
| RF-04      |       |       |   X   |   X   |       |       |       |       |       |       |       |       |       |         |  X  |        
| RF-05      |   X   |       |       |       |   X   |       |       |       |       |       |       |       |       |    X    |  X  |        
| RF-06      |       |       |   X   |       |       |   X   |       |       |       |       |       |       |       |         |  X  |        
| RF-07      |   X   |       |       |       |       |       |   X   |       |       |       |       |       |       |    X    |     |         
| RF-08      |       |   X   |       |       |       |       |       |   X   |       |   X   |       |       |       |    X    |     |         
| RF-09      |       |       |       |       |       |       |       |       |   X   |       |       |       |       |    X    |     |        
| RF-10      |       |       |       |       |       |       |       |   X   |       |   X   |       |       |       |    X    |     |         
| RF-11      |       |       |       |       |       |       |       |       |       |       |   X   |   X   |   X   |    X    |     |         
| RF-12      |       |       |       |       |       |       |       |       |       |       |   X   |   X   |   X   |    X    |     |         
| RF-13      |       |       |       |       |       |       |       |       |       |       |   X   |   X   |   X   |    X    |     |         
| USUÁRIO    |   X   |   X   |   X   |       |   X   |       |   X   |   X   |   X   |   X   |   X   |   X   |   X   |    X    |     |   
| ADM        |   X   |       |       |   X   |   X   |   X   |       |       |       |       |       |       |       |         |  X  |  

Descrição dos relacionamentos:

**RF-01**: Este requisito está relacionado com RF-07 (recuperação de senha), pois ambos envolvem a autenticação dos usuários e com o RF-05 para atualizações.

**RF-02**: Relaciona-se com RF-08 (pesquisa de preço) e RF-10 (integração com GPS) para oferecer funcionalidades de busca e navegação.

**RF-03**: Está relacionado com RF-04 pois seria o resultado das informações cadastradas naquele Requisito.

**RF-04**: Está relacionado com o RF-03 e com RF-05 (atualização de informações) para manter os dados dos estabelecimentos atualizados.

**RF-05**: Relaciona-se com RF-01 e RF-04 para atualizar as informações, com RF-08 para permitir a pesquisa de preços.

**RF-06**: Modificações aqui impactarão a lista do RF-03.

**RF-07**: Relaciona-se com RF-01 para autenticação dos usuários.

**RF-08**: Está relacionado com RF-02 para pesquisa de preços e com RF-10 para integração com GPS.

**RF-10**: Relaciona-se com RF-02 para fornecer informações de localização.

**RF-11**: Os requisitos RF-11, RF-12 e RF-13 são ações do usuário



# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
