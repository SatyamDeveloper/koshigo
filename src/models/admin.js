const mongooose = require('mongoose')

const adminSchema = new mongooose.Schema({
  email: {
    type: String,
    default: 'satyam20112006@gmail.com'
  },
  password: {
    type: String,
    default: 'Satyam11',
  },
  banners: {
    type: Array,
  },
  categories: [{
    pic: {
      type: String,
    },
    name: {
      type: String
    }
  }],
  amazon: {
    type: String,
  },
  flipkart: {
    type: String,
  },
  facebook: {
    type: String,
  },
  twitter: {
    type: String,
  },
  youtube: {
    type: String,
  },
  whatsapp: {
    type: String,
  },
})

const Admin = mongooose.model('ADMIN', adminSchema)
module.exports = Admin