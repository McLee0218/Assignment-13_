const router = require('express').Router();
const { Category, Product } = require('../../models');
const fs = require('fs');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  const allCategories = category.findAll ({
    include: [{
      module: Product,
      attributes: ['product_id']
    }]
  })
  allCategories()
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  try {
    res.render('catagory_id')
  } catch (err) {
    res.status(400).json(err);
  }});

  // find one category by its `id` value

  // be sure to include its associated Product;

router.post('/', async (req, res) => {
  // create a new category
  try {
let newCategory = await Category.create({
  item_type: req.body.item_type,
}
);
res.status(200).json(newCategory);
     } catch (err) {
         res.status(500).json(err) 
     }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  let product = JSON.parse(fs.readFileSync('./models/category.js/'));
  let removeProduct = product.filter(item => item.id !== req.params.id);
  fs.writeFileSync('./models/category.js/', JSON.stringify(product))
  res.json(removeProduct);
});

module.exports = router;
