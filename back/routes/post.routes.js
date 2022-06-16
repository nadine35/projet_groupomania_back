const router = require("express").Router();
const postController = require('../controllers/post.controller');
const multer = require("multer");
const upload = multer();

// crud


// afficher tous les post
router.get('/', postController.readPost);
// etape 1 : creer un post et ajout imade dans post
router.post("/", upload.single("file"), postController.createPost);



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