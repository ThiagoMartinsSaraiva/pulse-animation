const createElement = (tagName, ...className) => {
  const element = document.createElement(tagName)
  
  className.forEach(name => {
    element.classList.add(name)
  })
  return element
}

const elementArr = []

for (let i = 0; i < 3; i++) {
  const item = document.querySelector('article')
  .appendChild(createElement('div', 'pulse', 'rounded'))
  .innerText = 'Icon'
  elementArr.push(item);
}