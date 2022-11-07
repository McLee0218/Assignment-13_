const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
 Tag.findAll({
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

//   // be sure to include its associated Product;

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
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

router.post('/', async (req, res) => {
  // create a new category
Tag.create({
  category_name: req.body.category_name,
}).then(categoryData => res.json(categoryData))
.catch(err => {
  res.status(500).json(err);
});
});

router.put('/:id', (req, res) => {
  Tag.update(req.body,{
    where: {
      id: req.params.id
    }
  })
  .then(categoryId => res.json(categoryId))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // be sure to include its associated Products
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    },
  })
  .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }); 
});

module.exports = router;
