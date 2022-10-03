const fs = require('fs')

let logs = JSON.parse(fs.readFileSync('workflow_steps.log')) 

let workflowsCompletos = 0

const parseLogs = () => {
  let map = {}
  logs.map(log => {
    if (!map[log.process_name]) map[log.process_name] = {}
    if(log.step_name == 'COMPLETE') workflowsCompletos++ // faz a contagem
    map[log.process_name][log.step_name] = log.step_init_timestamp
  })

  return map // talvez tenha um nome melhor
}

const addTotalTimeToLogs = (map) => {
  Object.values(map).map(step => {
    // n lembro mais como fiz isso
    if (step['COMPLETE']) return step.totalTime = (new Date(step['COMPLETE']).getTime()) - (new Date(map[step['DOING']]).getTime()) + ((new Date(step['DOING']).getTime()) - (new Date(step['WAITING']).getTime()))
    if (step['DOING']) return step.totalTime = ((new Date(step['DOING']).getTime()) - (new Date(step['WAITING']).getTime()))
    if (step['WAITING']) return step.totalTime = 0
  })
}

const main = () => {
  let logs = parseLogs()
  addTotalTimeToLogs(logs)
    
  console.log('Resultado da análise:')
  console.log('Workflows completos: ' + workflowsCompletos)
  console.log('Tempo médio de execução: ' + "TODO: ADICIONAR FUNÇÃO PARA CONTAR MÉDIA")
}

main()