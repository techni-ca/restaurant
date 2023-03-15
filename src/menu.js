export default function pageMenu () {
  const actualMenu = [
    ['Lasagne', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis repellendus, autem ad consequatur enim?', 11.95],
    ['Pasta Verde', 'Quidem iste reprehenderit corporis quasi sequi eveniet optio repellat accusantium! Eos ex ad inventore maiores!', 11.95],
    ['Spaghetti Bolognaise', 'Dolores quia culpa rerum aut voluptas cupiditate consequatur sed. Minima alias natus sapiente consequatur veritatis.', 11.95],
    ['Ravioli', 'Similique eos ipsam sed dolorem. Iusto ea dignissimos accusamus minima consequatur, harum atque fugiat itaque!', 11.95],
    ['Pizza Bugati', 'Consectetur, vel fugit ex deserunt nihil vitae harum dicta, quidem maxime excepturi veritatis rerum officiis!', 11.95],
    ['Rigatoni Toni', 'Quaerat, ratione neque incidunt recusandae, vitae inventore commodi rem repellat a quibusdam ad nobis itaque.', 11.95],
    ['Tortolini', 'Odio eos quo voluptatibus iste, quaerat officiis debitis iure sint autem nesciunt minus, dolores sequi!', 11.95],
    ['Pepper Steak', 'Magnam fugiat quod totam. Perferendis veritatis iste suscipit consequuntur fugiat molestias nam magni dignissimos repellendus.', 11.95],
    ['Fetucini Alfredo', 'Fugiat libero sint praesentium, impedit quis, fuga sequi error optio aut, suscipit voluptatum eum cupiditate.', 11.95],
    ['Pizza Peroni', 'Omnis, ex. Accusamus magni quisquam ab nulla dolorem voluptate dolorum facilis, ipsa vitae vero voluptatem!', 11.95],
    ['Pesto Pervado', 'Rerum culpa dolor eos doloribus autem temporibus, labore aperiam iure aspernatur excepturi ut laboriosam quis!', 11.95],
    ['Augustus Caesar', 'Quidem impedit reiciendis dicta voluptatem illo deserunt eius. Unde distinctio, tenetur sapiente fugiat eum blanditiis.', 15.95]
  ]

  const menu = document.createElement('div')
  menu.style.display = 'grid'
  menu.style.gap = '1rem'
  menu.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px,1fr))'
  for (const i in actualMenu) {
    const menuItem = document.createElement('div')
    menuItem.style.display = 'flex'
    menuItem.style.flexDirection = 'column'
    menuItem.style.border = '1px solid black'
    menuItem.style.borderRadius = '5px'
    menuItem.style.backgroundColor = 'white'
    menuItem.style.padding = '5px'

    const menuItemName = document.createElement('div')
    menuItemName.textContent = actualMenu[i][0]
    menuItemName.style.fontWeight = '600'
    menuItem.appendChild(menuItemName)

    const menuItemDescription = document.createElement('div')
    menuItemDescription.textContent = actualMenu[i][1]
    menuItemDescription.style.marginTop = '5px'
    menuItemDescription.style.flex = '1'
    menuItem.appendChild(menuItemDescription)

    const menuItemPrice = document.createElement('div')
    menuItemPrice.textContent = '$' + actualMenu[i][2]
    menuItemPrice.style.marginTop = '5px'
    menuItemPrice.style.fontWeight = '600'
    menuItemPrice.style.alignSelf = 'end'
    menuItem.appendChild(menuItemPrice)

    menu.appendChild(menuItem)
  }
  return menu
}
