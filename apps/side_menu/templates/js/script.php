<?php

$display = 'default';

if ($_['always-displayed']) {
    $display = 'always-displayed';
} elseif ($_['big-menu']) {
    $display = 'big-menu';
} elseif ($_['side-with-categories']) {
    $display = 'side-with-categories';
}

?>

(function() {
  const sideMenuContainer = SMcreateElement('div', {id: 'side-menu-container'})
  const sideMenuOpener = SMcreateElement('button', {'class': 'side-menu-opener'})
  const sideMenu = SMcreateElement('div', {id: 'side-menu'})

  const body = document.querySelector('body')
  const html = document.querySelector('html')
  const nextcloud = document.querySelector('#nextcloud')

  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches

  window.targetBlankApps = <?php echo json_encode($_['target-blank-apps']), "\n" ?>
  window.topMenuApps = <?php echo json_encode($_['top-menu-apps']), "\n"; ?>
  window.topSideMenuApps = <?php echo json_encode($_['top-side-menu-apps']), "\n"; ?>
  window.menuAppsOrder = <?php echo json_encode($_['apps-order']), "\n"; ?>
  window.topMenuAppsMouseOverHiddenLabel = <?php echo json_encode($_['top-menu-mouse-over-hidden-label']), "\n"; ?>

  <?php if ($display === 'big-menu'): ?>
    sideMenu.setAttribute('data-bigmenu', '1')
  <?php elseif ($display === 'side-with-categories'): ?>
    sideMenu.setAttribute('data-sidewithcategories', '1')
  <?php endif; ?>

  document.querySelector('body').addEventListener('side-menu.apps', (e) => {
    const apps = e.detail.apps;

    <?php if ($_['hide-when-no-apps']): ?>
      const sideMenu = document.querySelector('#side-menu')

      if (apps.length === 0) {
        sideMenu.classList.remove('open')
        sideMenu.classList.add('hide')
        sideMenuOpener.classList.add('hide')
      } else {
        sideMenu.classList.remove('hide')
        sideMenuOpener.classList.remove('hide')
      }

      <?php if ($display === 'always-displayed'): ?>
        if (apps.length === 0) {
          html.classList.remove('side-menu-always-displayed')
        } else {
          html.classList.add('side-menu-always-displayed')
        }
      <?php endif; ?>
    <?php else: ?>
      <?php if ($display === 'always-displayed'): ?>
        if (apps.length === 0) {
          html.classList.remove('side-menu-always-displayed')
        } else {
          html.classList.add('side-menu-always-displayed')
        }
      <?php endif; ?>
    <?php endif; ?>
  })

  body.addEventListener('side-menu.ready', () => {
    const sideMenu = document.querySelector('#side-menu')
    const headerMenuOpener = document.querySelector('#header .side-menu-opener')
    const sideMenuOpener = document.querySelectorAll('#side-menu .side-menu-opener')

    if (!headerMenuOpener) {
      return
    }

    sideMenuFocus = () => {
      let a = document.querySelector('.side-menu-app.active a', sideMenu)

      if (!a) {
        return
      }

      if (a.length === 0) {
        a = sideMenu.querySelector('.side-menu-app:first-child a')
      }

      if (a.length > 0) {
        a.focus()
      }
    }

    <?php if ($_['opener-hover']): ?>
      const sideMenuMouseLeave = () => {
        sideMenu.classList.remove('open')
        sideMenu.removeEventListener('mouseleave', sideMenuMouseLeave)
      }

      const sideMenuMouseEnter = () => {
        sideMenu.addEventListener('mouseleave', sideMenuMouseLeave)
      }

      const sideMenuOpenerMouseEnter = () => {
        sideMenu.classList.add('open')
        sideMenu.addEventListener('mouseenter', sideMenuMouseEnter)

        sideMenuFocus()
      }

      if (!isTouchDevice) {
        <?php if ($_['opener-hover']): ?>
          headerMenuOpener.addEventListener('mouseenter', sideMenuOpenerMouseEnter)

          sideMenu.classList.add('hide-opener')
        <?php endif ?>

        sideMenu.addEventListener('mouseleave', sideMenuMouseLeave)
        sideMenu.addEventListener('mouseenter', sideMenuOpenerMouseEnter)
      }
    <?php endif; ?>

    headerMenuOpener.addEventListener('click', () => {
      sideMenu.classList.add('open')

      const a = sideMenu.querySelector('.side-menu-app.active a')

      if (a !== null) {
        a.focus()
      }

      headerMenuOpener.blur()
    })

    for (let opener of sideMenuOpener) {
      opener.addEventListener('click', () => {
        <?php if ($display === 'always-displayed'): ?>
          sideMenu.classList.toggle('open')
        <?php else: ?>
          sideMenu.classList.remove('open')
        <?php endif; ?>
      })
    }

    document.addEventListener('keydown', (e) => {
      var key = e.key || e.keyCode

      if ((key === 'o' || key === 79) && e.ctrlKey === true) {
        e.preventDefault()

        sideMenu.classList.toggle('open')
        sideMenuFocus()
      }
    })

    const sideMenuObserver = new MutationObserver((e) => {
      if (body.getAttribute('id') !== 'body-settings') {
        return
      }

      body.classList.toggle('body-settings-side-menu', sideMenu.classList.contains('open'))
    })

    sideMenuObserver.observe(sideMenu, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
      characterData: false
    })
  })

  body.appendChild(sideMenuContainer)
  sideMenuContainer.appendChild(sideMenu)

  <?php if ($_['loader-enabled'] === true): ?>
    PageLoader()
  <?php endif; ?>

  if (nextcloud) {
    <?php if ($_['opener-position'] === 'before'): ?>
      nextcloud.parentNode.insertBefore(sideMenuOpener, nextcloud)
    <?php else: ?>
      nextcloud.parentNode.insertBefore(sideMenuOpener, nextcloud.nextSibling)
    <?php endif; ?>
  }
})();
