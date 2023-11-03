module.exports = (tagName, attributes) => {
  const element = document.createElement(tagName)

  if (typeof attributes === 'object') {
    for (let i in attributes) {
      element.setAttribute(i, attributes[i])
    }
  }

  return element
}
