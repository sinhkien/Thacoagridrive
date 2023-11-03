/**
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import Vue from 'vue'
import AppMenu from './AppMenu.vue'
import SideMenu from './SideMenu.vue'
import SideMenuBig from './SideMenuBig.vue'
import SideMenuWithCategories from './SideMenuWithCategories.vue'
import PageLoader from './PageLoader'
import SMcreateElement from './lib/createElement'

Vue.prototype.OC = OC
Vue.prototype.t = OC.L10N.translate

window.SMcreateElement = SMcreateElement
window.PageLoader = PageLoader

const mountSideMenuComponent = () => {
  const container = document.querySelector('#side-menu')

  if (!container) {
    return window.setTimeout(mountSideMenuComponent, 50)
  }

  const component = (() => {
    if (container.getAttribute('data-bigmenu')) {
      return SideMenuBig
    } else if(container.getAttribute('data-sidewithcategories')) {
      return SideMenuWithCategories
    } else {
      return SideMenu
    }
  })()

  const View = Vue.extend(component)
  const App = new View({})

  App.$mount('#side-menu')

  document.querySelector('body').dispatchEvent(new CustomEvent('side-menu.ready'))
}

const mountAppMenu = () => {
  const container = document.querySelector('#header .app-menu')

  if (!container) {
    return window.setTimeout(mountAppMenu, 50)
  }

  const View = Vue.extend(AppMenu)
  const App = new View({})

  App.$mount('#header .app-menu')
}

mountSideMenuComponent()
mountAppMenu()
