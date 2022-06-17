const express = require("express");
const router = express.Router();
const auth =require('../middleware/auth.middleware')

const multer = require('../middleware/multer')
const postController = require('../controllers/post.controller');
// const multer = require("multer");
// const upload = multer();



// crud

// etape 1 : creer un post 
router.post("/", multer, postController.createPost);

// afficher tous les post
router.get('/', postController.readPost);

// modifier un post
router.put('/:id', postController.updatePost);

// supprimer un post si on est le créateur du post ou si on est admin
router.delete('/:id', postController.deletePost);

// ajout de like dislike
router.patch('/like-post/:id', postController.likePost);
router.patch('/unlike-post/:id', postController.unlikePost);

// comments
//creer
router.patch('/comment-post/:id', postController.commentPost);

//lister
router.patch('/edit-comment-post/:id', postController.editCommentPost);

//supprimer
router.patch('/delete-comment-post/:id', postController.deleteCommentPost);



module.exports=router;