import tabBar from './tab-bar.js'
import pageHome from './home.js'
import pageMenu from './menu.js'
import pageContact from './contact.js'

const body = document.querySelector('body')

body.appendChild(
  tabBar(['HOME', 'MENU', 'CONTACT'], [pageHome, pageMenu, pageContact])
)
