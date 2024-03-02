# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

**José Geraldo** tem 48 anos,é caminhoneiro, ensino médio completo. O seu objetivo ao usar à aplicação, é economizar. Tem como motivação a praticidade. Possui um caminhão que realiza frete para todo o Brasil.

**Camila Pontes** tem 21 anos, é universitária e está se graduando em Psicologia. Para Camila, o objetivo para usar a aplicação, é ter praticidade para encontrar combustível e prestadores de serviços para manutenção do seu carro. Sua motivação é ter tranquilidade, praticidade e preço baixo.

**Fernanda Brant** com 35 anos, é representante comercial, tem o objetivo de usar a aplicação no intuito de praticidade e segurança. Sua motivação é a rotina diária de trabalho, pois precisa otimizar o tempo para o abastecimento do carro e as manutenções preventivas, visando um preço justo.

**Roberto Barbosa** tem 40 anos,é trabalhador autônomo. Ele trabalha como motorista de aplicativo. Tem com objetivo de usar a aplicação para abastecer seu veículo e realizar as manutenções em lugares com um bom custo benefício. Sua finalidade é ter tranquilidade e uma redução dos custos, tendo em vista que ele sempre precisa dos serviços para manter o seu veículo .


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
|RF-02 | A aplicação permitirá o login por meio de Email e senha cadastrados previamente.   | ALTA |
|RF-03 | A aplicação deve permitir ao usuário logado realizar pesquisa da localização dos estabelecimentos conforme sua necessidade utilizando para tal o Cep ou digitando manualmente o logradouro.    | ALTA |
|RF-04 | A aplicação deve oferecer a lista de estabelecimentos cadastrados com nome, bandeira, preço, endereço e a distância entre o usuário e o serviço disponível.    | ALTA | 
|RF-05 | A aplicação deve permitir ao administrador o cadastro do estabelecimento informando: preço e tipo de combustível, bandeira do posto, endereço, horário de funcionamento e outros serviços adicionais | ALTA |
|RF-06 | A aplicação deve permitir atualizar as informações previamente cadastradas.  | ALTA |
|RF-07 | A aplicação deve permitir ao administrador excluir informações devidamente comprovadas como falsas ou incorretas.    | ALTA |
|RF-09 | A aplicação deve pedir ao usuário que recupere sua senha a partir do Email previamente cadastrado.  | ALTA |
|RF-10 | A aplicação deve permitir que os usuários realizem pesquisas de preço, tipo de combustível e bandeira do posto.    | MÉDIA |
|RF-11 | A aplicação deverá disponibilizar um serviço de atendimento ao usuário.    | MÉDIA |
|RF-12 | A aplicação deverá ser integrada a um serviço de GPS para que trace a rota ideal do usuário até o posto desejado.   | MÉDIA |
|RF-13| A aplicação deverá permitir que o usuário envie uma foto dos preços do posto para auxiliar na atualização das informações do app. | MÉDIA |
|RF-14 | A aplicação deverá permitir ao usuário favoritar posto. | BAIXA | 
|RF-15| A aplicação deverá permitir a avaliação do usuário. | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


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
