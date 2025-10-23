const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.param('id', blogController.checkID);

router
  .route('/')
  .get(blogController.getAllBlog)
  .post(blogController.checkBody, blogController.createBlog);

router
  .route('/:id')
  .get(blogController.getBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
