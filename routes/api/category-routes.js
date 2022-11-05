const router = require('express').Router();
const { Category, Product } = require('../../models');
const fs = require('fs');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['product_name']
      }
    ]
  })
  .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // be sure to include its associated Products
});

// router.get('/:id', (req, res) => {
//   try {
//     res.render('catagory_id')
//   } catch (err) {
//     res.status(400).json(err);
//   }});

//   // find one category by its `id` value

//   // be sure to include its associated Product;

router.post('/', async (req, res) => {
  // create a new category
Category.create({
  category_name: req.body.category_name,
}).then(categoryData => res.json(categoryData))
.catch(err => {
  res.status(500).json(err);
});
});


// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
//   let product = JSON.parse(fs.readFileSync('./models/category.js/'));
//   let removeProduct = product.filter(item => item.id !== req.params.id);
//   fs.writeFileSync('./models/category.js/', JSON.stringify(product))
//   res.json(removeProduct);
// });

module.exports = router;
