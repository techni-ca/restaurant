export default function tabBar (tabNames, tabFunctions) {
  const tabbedPage = document.createElement('div')
  const BG_COLOR = 'orange'
  const TAB_COLOR = 'yellow'
  const BORDER = '2px solid red'

  function selectTab (tab) {
    const tabs = bar.children
    for (let i = 0; i < 3; i++) {
      if (i === tab) {
        tabs[i].style.backgroundColor = BG_COLOR
        tabs[i].style.borderBottom = 'none'
      } else {
        tabs[i].style.backgroundColor = TAB_COLOR
        tabs[i].style.border = BORDER
      }
    }
    tabbedPage.replaceChildren(tabFunctions[tab]())
    return true
  }

  tabbedPage.style.border = BORDER
  tabbedPage.style.borderTop = 'none'
  tabbedPage.style.backgroundColor = BG_COLOR

  const bar = document.createElement('div')
  bar.style.display = 'flex'
  bar.style.justifyContent = 'start'
  bar.style.border = 'none'

  for (let i = 0; i < 3; i++) {
    const tab = document.createElement('button')
    tab.textContent = tabNames[i]
    tab.style.flexBasis = '10rem'
    tab.style.borderTopLeftRadius = '5px'
    tab.style.borderTopRightRadius = '5px'
    tab.addEventListener('click', () => selectTab(i))
    bar.appendChild(tab)
  }

  const empty = document.createElement('div')
  empty.style.flex = '1'
  empty.style.border = 'none'
  empty.style.borderBottom = BORDER
  bar.appendChild(empty)

  selectTab(0)

  const page = document.createElement('div')
  page.style.display = 'flex'
  page.style.flexDirection = 'column'
  page.style.border = 'none'
  page.appendChild(bar)
  page.appendChild(tabbedPage)
  return page
}
