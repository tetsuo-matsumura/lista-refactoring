# Lista extra: Clean code

## Contexto
Roberto Martins é um desenvolvedor júnior na FUTURE GADGETS LTDA. 

A empresa possui um script de automação para tarefas internas. Esse script gera um log que está armazenado no arquivo `workflow_steps.log`. Um certo dia, Tatsuya, chefe de Roberto pediu para que ele fizesse um script que tirasse as métricas de uso dessas automações para apresentar aos diretores da empresa.

Roberto, intimidado com o prazo curtíssimo, fez o que pode e entregou apenas uma das métricas pedidas. Tatsuya pediu para revisar o código de Roberto e para seu espanto, o código estava impossível de ler.

## O Problema
Ajude Roberto e Tatsuya a refatorar o código e implementar as métricas restantes.

> As métricas que precisam ser apresentadas são:
- Quantidade de Workflows com `step_name: COMPLETE`
- Média de tempo em dias dentre os Steps `WAITING` e `COMPLETE` de todos os Workflows
- Distribuição em porcentagem dos Workflows por Step (ex: 20% Waiting, 60% Doing, 10% Complete)
- Quantidade total de Workflows

Como essa métrica precisa ser tirada trimestralmente, Tatsuya exige que o código esteja adequado aos bons padrões, para isso, ele passou uma lista de leitura para auxiliar Roberto nesse desafio.
- https://sourcemaking.com/refactoring
- https://www.youtube.com/watch?v=L2cV6VZDGa0&ab_channel=Codecademy
- https://www.freecodecamp.org/news/the-junior-developers-guide-to-writing-super-clean-and-readable-code-cd2568e08aae/

## Problema extra
> 💡 Faça essa parte apenas se finalizar a primeira parte.

Tatsuya, como todo bom chefe, percebeu um problema que ainda não existe mas que precisa de solução também: existe a possibilidade do arquivo de log estar inconsistente. Para isso, Tatsuya precisa que o script também valide o log para garantir conformidade.

As regras de validação são:
- Não existe nenhum Workflow sem Steps:
- Todo Workflow tem timestamps sequenciais por Step (ex: não existe `DOING` com timestamp antes de `WAITING`)
- Não existe Workflow com Steps faltantes (e: somente `DOING` ou somente `WAITING` E `COMPLETE`)
