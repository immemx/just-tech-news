const router = require('express').Router();
const { Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
    Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // check session
    if (req.session) {
    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        // use the id from the session
        user_id: req.session.user_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
        console.log(err);
        res.status(400).json(err);
        });
    }
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: res.params.id
        }
    })
    .then(dbCommentData => {
        if (!dbPostData) {
            res.status(404).jso({ message: 'No comment was found with this id'})
            return
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

module.exports = router;