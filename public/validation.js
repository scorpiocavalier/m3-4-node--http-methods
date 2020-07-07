const promo = require('../data/promo')

const isNameExists = info => {
  const { givenName, surname } = info

  for(const customer of promo.customers) {
    if(givenName.toLowerCase() === customer.givenName.toLowerCase()
      && surname.toLowerCase() === customer.surname.toLowerCase())
      return true
  }

  return false
}

const isEmailExists = info => {
  const { email } = info

  for(const customer of promo.customers)
    if(customer.email === email) return true

  return false
}

const isAddressExists = info => {
  const { address } = info

  for(const customer of promo.customers)
    if(customer.address.toLowerCase() === address.toLowerCase())
      return true

  return false
}

const validate = info => {
  const userExists = isNameExists(info)
  const emailExists = isEmailExists(info)
  const addressExists = isAddressExists(info)

  console.log(userExists, emailExists, addressExists)

  return userExists && emailExists && addressExists
}

module.exports = { validate }