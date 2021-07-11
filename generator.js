function generator(option) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let target = ''
  let Task = []

  if (option.target === 'engineer') {
    Task = task.engineer
    target = '工程師'
  } else if (option.target === 'designer') {
    Task = task.designer
    target = '設計師'
  } else if (option.target === 'entrepreneur') {
    Task = task.entrepreneur
    target = '創業家'
  }

  function sampleTask(Task) {
    const randomIndex = Math.floor(Math.random() * Task.length)
    return Task[randomIndex]
  }

  function samplePhrase(phrase) {
    const randomIndex = Math.floor(Math.random() * phrase.length)
    return phrase[randomIndex]
  }

  return `身為一個${target}，${sampleTask(Task)}，${samplePhrase(phrase)}吧！`
}

module.exports = generator