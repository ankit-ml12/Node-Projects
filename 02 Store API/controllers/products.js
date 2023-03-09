const Products = require('../models/product')
const getAllProductsStatic = async (req, res) => {
  const search = 'cc'
  const products = await Products.find({
    name: { $regex: search, $options: 'i' },
  })

  res.status(200).send({ nbHits: products.length, products })
}
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query
  const queryObject = {}
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false
  }
  if (company) {
    queryObject.company = company
  }
  if (name) {
    //heare seach is the query and i is the case insensitive
    queryObject.name = { $regex: name, $options: 'i' }
  }

  let result = Products.find(queryObject)
  if (sort) {
    const sortList = sort.split(',').join(' ')
    result = result.sort(sortList)
  } else result = result.sort('createAt')
  const products = await result
  res.status(200).send({ nbHits: products.length, products })
}

module.exports = { getAllProducts, getAllProductsStatic }
