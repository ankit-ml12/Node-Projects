const Products = require('../models/product')
const getAllProductsStatic = async (req, res) => {
  const search = 'cc'
  const products = await Products.find({
    name: { $regex: search, $options: 'i' },
  })

  res.status(200).send({ nbHits: products.length, products })
}

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, field, numericFilters } = req.query
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

  if (field) {
    const fieldLists = field.split(',').join(' ')
    result = result.select(fieldLists)
  }
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit
  result.skip(skip).limit(limit)

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    }
    const regEx = /\b(<|>|>=|=|<|<=)\b/g
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    )
    const options = ['price', 'rating']
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-')
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) }
      }
    })
  }
  const products = await result
  res.status(200).send({ nbHits: products.length, products })
}

module.exports = { getAllProducts, getAllProductsStatic }
