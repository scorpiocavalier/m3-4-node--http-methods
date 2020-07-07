const { stock, customers } = require('../data/promo')

const isNameExists = info => {
  const { givenName, surname } = info

  for(const customer of customers) {
    if(givenName.toLowerCase() === customer.givenName.toLowerCase()
      && surname.toLowerCase() === customer.surname.toLowerCase())
      return true
  }

  return false
}

const isEmailExists = info => {
  const { email } = info

  for(const customer of customers)
    if(customer.email === email) return true

  return false
}

const isAddressExists = info => {
  const { address } = info

  for(const customer of customers)
    if(customer.address.toLowerCase() === address.toLowerCase())
      return true

  return false
}

const isInCanada = info => {
  const { country } = info
  
  return country.toLowerCase() === 'canada' ? true : false
}

const isInStock = info => {
  const { order, size } = info

  const itemInStock = findItem(order, size, stock)

  return itemInStock
}

const findItem = (key, value, object) => {
  
  for(const item in object) {
    if(key === item) {
      if(value === 'undefined')
        if(Number(object[item]) > 0) return true
      else
        return findItem(value, 'undefined', object[item])
    }
  }

  return false
}

const validate = info => {
  const userExists = isNameExists(info)
  const emailExists = isEmailExists(info)
  const addressExists = isAddressExists(info)
  const addressInCanada = isInCanada(info)
  const itemInStock = isInStock(info)

  console.log(itemInStock)

  return (
    userExists && emailExists && addressExists 
    && addressInCanada && itemInStock
  )
}

module.exports = { validate }