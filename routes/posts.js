const express = require('express');
const PostController = require('../controllers/PostController');

const router = express.Router();

const postController = new PostController();

router.get('/', postController.getAllPost);
router.get('/:id', postController.viewPost);
router.patch('/:id', postController.updatePost);
router.post('/', postController.createPost);
router.delete('/:id', postController.deletePost);

// getTrendingPost()
// getLatestPost()
// getPostByCategory() - /category/:id
// likes - update - {name: 'a', likes: newLikes} - fetchPostById -> newlikes = likes.push(user_id) , 
// dislikes
// comment -> post => Comment -> create -> comments section ma lagera add gardine

module.exports = router;