const createElement = require('./lib/createElement')

const PageLoader = () => {
  const pageLoader = createElement('div', {id: 'side-menu-loader'})
  const pageLoaderBar = createElement('div', {id: 'side-menu-loader-bar'})

  pageLoader.appendChild(pageLoaderBar)
  document.querySelector('body').appendChild(pageLoader)

  let pageLoaderValue = 0

  window.addEventListener('beforeunload', () => {
    setInterval(() => {
      pageLoaderBar.style.width = pageLoaderValue.toString() + '%'
      pageLoaderValue = Math.min(pageLoaderValue + .2, 100)
    }, 25)
  })
}

module.exports = PageLoader
