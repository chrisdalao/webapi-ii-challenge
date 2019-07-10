const express = require('express');

const Posts = require('./data/db.js');

const router = express.Router();

router.get('/', (req, res) => {
    Posts.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            err = { error: "The posts information could not be retrieved" };
            res.status(500).json(err);
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Posts.findById(id)
        .then(post => {
            if (post) {
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: " The post with the specified ID does not exist." });
            }
        })
        .catch(err => {
            err = { error: "The post information could not be retrieved" };
            res.status(500).json(err)
        })
})

router.get('/:id/comments', (req, res) => {
    const { id } = req.params;

    Posts.findPostComments(id)
        .then(comments => {
            if (comments && comments.length) {
                res.status(200).json(comments);
            } else {
                res.status(404).json({ message: 'The post with the specified ID does not exist.' })
            }
        })
        .catch(err => {
            err = { error: "The comments information could not be retrieved" };
            res.status(500).json(err)
        })
})

module.exports = router;