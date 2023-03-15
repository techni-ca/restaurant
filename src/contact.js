export default function pageContact () {
  const contact = document.createElement('div')
  contact.style.display = 'flex'
  contact.style.flexDirection = 'column'
  contact.style.gap = '15px'

  const name = document.createElement('div')
  name.textContent = 'Restaurante Italiano'
  name.style.fontSize = 'xx-large'
  name.style.fontWeight = '1000'
  name.style.textDecoration = 'underline'
  name.style.textAlign = 'center'
  contact.appendChild(name)

  const phone = document.createElement('div')
  phone.innerHTML = '<b>Phone:</b> 1-981-867-5309'
  phone.style.fontSize = 'large'
  phone.style.textAlign = 'center'
  contact.appendChild(phone)

  const address = document.createElement('div')
  address.innerHTML = '<b>Address:</b> 100 Marine Avenue, Pseudopolis, Mars M4R S10N'
  address.style.fontSize = 'large'
  address.style.textAlign = 'center'
  contact.appendChild(address)
  return contact
}