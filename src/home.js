export default function pageHome () {
  const home = document.createElement('div')
  home.style.display = 'flex'
  home.style.flexDirection = 'column'

  const logo = document.createElement('img')
  logo.src = './logo.png'
  logo.alt = 'restaurant logo'
  logo.height = '150'
  logo.width = '380'
  logo.style.alignSelf = 'center'
  logo.style.border = '5px solid black'
  logo.style.borderRadius = '15px'
  logo.style.margin = '50px'
  home.appendChild(logo)

  const heading = document.createElement('h2')
  heading.style.textDecoration = 'wavy underline'
  heading.style.margin = '20px 50px'
  heading.textContent = 'Welcome to Restaurante Italiano!'
  home.appendChild(heading)

  const blurb = document.createElement('p')
  blurb.style.fontSize = 'large'
  blurb.style.margin = '0px 50px 50px 50px'
  blurb.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At laudantium velit porro consectetur ea eveniet non voluptate tempora placeat? Sit quos perferendis nemo illo quasi nostrum sed! Praesentium, molestias expedita.'
  home.appendChild(blurb)

  return home
}
