
# Metodologia

Considerando a natureza dinâmica do desenvolvimento de aplicações móveis e a necessidade de responder rapidamente às mudanças no mercado e nos requisitos dos usuários, adotaremos uma abordagem ágil de metodologia de trabalho do grupo para atacar o problema e desenvolver a aplicação. Utilizaremos metodologias e ferramentas como Scrum e GitHub Projects, para organizar o trabalho em iterações curtas (sprints) e priorizar o desenvolvimento de recursos com base nas tarefas propostas e no feedback contínuo dos stakeholders.

Realizaremos reuniões regulares de acompanhamento, como reuniões diárias (daily) e ferramentas de comunicação online (Whatsapp e Microsoft Teams), para facilitar e manter toda a equipe alinhada com os objetivos do projeto, discutir o progresso e identificar possíveis obstáculos. Isso garantirá uma comunicação eficaz e uma resposta rápida a quaisquer problemas que surjam.

Será utilizado o GitHub como nosso sistema de controle de versão para gerenciar o código fonte do projeto e o Visual Studio Code será o principal ambiente de desenvolvimento para criação das linhas de código.

## Relação de Ambientes de Trabalho e Ferramentas

Sobre os ambientes de trabalho, plataformas e ferramentas utilizadas pela equipe, foram selecionadas com base na sua eficácia, facilidade de uso e capacidade de atender às necessidades específicas do projeto. A seguir, apresentamos as ferramentas e ambientes de trabalho empregados no projeto, cada uma com sua respectiva justificativa para sua escolha:

| Ferramenta | Plataforma | Justificativa |
| --- | --- | --- |
| Editor de Código | [Visual Studio Code](https://code.visualstudio.com/) | O **Visual Studio Code** foi escolhido como o editor de código principal devido à sua ampla adoção na indústria de desenvolvimento de software, sua combinação de funcionalidades avançadas e possuir uma integração com o sistema de controle de versão. |
| Interface e Wireframes | [Figma](https://www.figma.com/file/LM7zV5gFOW2dkmpiC0G5Ke/Project-Fuel%2B?type=design&node-id=0-1&mode=design) | O **Figma** foi escolhido como ferramenta de desenho de tela por se destacar na facilidade de uso, capacidade de colaboração em tempo real, conjunto abrangente de recursos para criação de wireframes e protótipos interativos e por possuir vários recursos avançados que permitem criar designs de alta qualidade com facilidade e eficiência. |
| Diagramas e Gráficos | [Draw.io](https://app.diagrams.net/)  [Project Libre](https://www.projectlibre.com/)  [Astah](https://astah.net/) | Foram escolhidas três ferramentas para criação de diagramas: o **Draw.io**, o **ProjectLibre** e o **Astah**. A escolha de múltiplas ferramentas de diagramas permite à equipe utilizar a ferramenta mais adequada para cada tipo de diagrama ou contexto específico. Enquanto o **Draw.io** é usado para diagramas gerais e de propósito geral, o **ProjectLibre** é empregado para o planejamento e monitoramento de projetos, como por exemplo o Diagrama de Gantt e o **Astah** é utilizado para modelagem UML e design de sistemas de software. Essa abordagem garante que a equipe tenha ferramentas certas, eficientes e ágeis à sua disposição para documentar, planejar e projetar com eficiência. |
| Comunicação | [Teams](https://www.microsoft.com/pt-br/microsoft-teams/download-app)  [Whatsapp](https://web.whatsapp.com/) | O **Microsoft Teams** e o **Whatsapp** são as ferramentas de comunicação escolhidas e utilizadas para permitir que a equipe possa adaptar sua comunicação às necessidades específicas de cada situação. Enquanto o Microsoft Teams oferece um ambiente estruturado e integrado para realizarmos nossa "daily" com uma comunicação formal, o WhatsApp oferece uma comunicação mais rápida, para situações que exigem respostas imediatas. Essa abordagem garante que a equipe tenha praticidade para se comunicar de forma eficaz e colaborar de maneira produtiva ao longo do projeto. |
| Framework | [React Native](https://reactnative.dev) | O React Native foi escolhido para este projeto devido à sua capacidade de desenvolver aplicativos móveis multiplataforma de forma eficiente, utilizando uma única base de código. Sua ampla comunidade e conjunto de componentes prontos para uso facilitam o desenvolvimento, resultando em interfaces de usuário elegantes e responsivas. Além disso, sua arquitetura baseada em componentes simplifica a manutenção e a escalabilidade do aplicativo no longo prazo. |
| Repositório e Controle de Versão | [GitHub](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-fuel) [Git](https://git-scm.com) | O GitHub foi escolhido como plataforma de hospedagem para este projeto devido à sua integração perfeita com o Git e suas ferramentas avançadas de controle de versão. Ao utilizar o Git em conjunto com o GitHub, a equipe pode aproveitar os recursos colaborativos oferecidos pela plataforma, como controle de acesso, revisão de código e gerenciamento de problemas. Isso proporciona uma experiência de desenvolvimento mais completa e eficiente, permitindo que a equipe trabalhe de forma colaborativa e organizada em um ambiente centralizado. |
| Quadro Kanban | [GitHub Project](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/799) | O GitHub Projects foi escolhido como nosso quadro Kanban devido à sua integração perfeita com o GitHub e à sua capacidade de oferecer uma visão clara e organizada das tarefas e do progresso do projeto. Ao utilizar o GitHub Projects, conseguimos acompanhar facilmente o fluxo de trabalho, desde o planejamento até a conclusão das tarefas, em um único ambiente familiar para toda a equipe. Simplificando a gestão de tarefas e facilitando a colaboração entre os membros da equipe, garantindo uma abordagem ágil e eficiente para o gerenciamento de projetos. |

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-fuel)
foi utilizado para hospedagem do repositório. Ao criar um repositório no GitHub para hospedar o código-fonte e outros artefatos relacionados ao desenvolvimento do aplicativo móvel, o organizamos de forma lógica, com diretórios separados para código-fonte, documentação, recursos e outros elementos relevantes do projeto.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, serão usadas para rastrear bugs, solicitações de recursos e outras tarefas relacionadas ao desenvolvimento do projeto. Cada issue é cuidadosamente descrita, atribuída a um membro da equipe responsável e priorizada com base em sua importância e urgência. As issues são regularmente revisadas durante as tarefas e reuniões, e são atualizadas por cada membro da equipe. Após a conclusão de uma issue, ela será revisada, testada e fechada, garantindo que o progresso do projeto fosse documentado e que todas as tarefas fossem concluídas de forma satisfatória. O projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Para termos um melhor controle do projeto, definimos que utilizaremos as "Tags" listadas acima para marcar releases importantes do projeto. Cada tag recebeu um nome significativo e explicativo, facilitando a identificação e o acompanhamento da aplicação ao longo do tempo. Os "Merges" serão realizados regularmente para integrar o trabalho de diferentes membros da equipe ou ramificações do projeto. Cada merge será precedido por uma revisão detalhada, envolvendo a análise das alterações propostas e a identificação de possíveis conflitos ou problemas de integração. Os "Commits" irão ser feitos de forma individual e explicativa, com mensagens claras que descrevam as alterações realizadas. Isso permite que a equipe acompanhe o histórico de desenvolvimento do projeto e compreenda as mudanças implementadas em cada parte da documentação e código.

## Gerenciamento de Projeto

### Divisão de Papéis

A equipe adotou abordagens ágeis para o desenvolvimento do projeto, reconhecendo a necessidade de flexibilidade, colaboração e adaptação contínua aos requisitos em evolução. Como estrutura para direcionar esse processo ágil, optamos por utilizar o Scrum.

Dentro dessa estrutura, a equipe se organiza de acordo com os papéis tradicionais do Scrum:

•	**Scrum Master:** Carolina Novaes;

•	**Product Owner:** Carolina Novaes;

•	**Equipe de Desenvolvimento:** Alessandro Nunes, Bruno Henrique, Carolina Novaes, Paulo Henrique, Rosimeire Carvalho, Ruan Gonzaga;

•	**Equipe de Design:** Ruan Gonzaga;

### Processo

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Gitub Project, onde as tarefas são alocadas em sprints, classificadas de acordo com sua prioridade, listadas no backlog e dividas entre os integrantes da equipe para que sejam realizadas, testadas e finalizadas. O quadro de tarefas está estruturado da seguinte forma:

• **Backlog:** Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando e mostra as tarefas e metas a serem cumpridas e suas prioridades.

• **In Progress:** Lista que contém as tarefas que estão em andamento. É importante que a equipe atualize o status das tarefas para que o Scrum Master possa acompanhar o andamento do projeto e garantir que tudo esteja caminhando conforme o planejado.

• **In Review:** Esta lista engloba as tarefas que estão em fase de revisão e testes. Os testadores devem verificar as documentações, códigos e funcionalidades implementadas, garantindo que estão corretas, funcionando perfeitamente e identificando possíveis erros para correção.

• **Done:** nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação.

O quadro kanban do GitHub Project está demonstrado na imagem a seguir e disponível através da URL: https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/799

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t4-fuel/assets/127356349/5972f7fa-28d4-417f-9417-7edceb7e4eb0)
