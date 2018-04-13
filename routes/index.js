/* (c)2018 pmvanvliet */

// Require dependencies
const path = require('path')
const express = require('express')
//
const router = express.Router()
const posts = require(path.join(__dirname, 'posts.js'))
const comments = require(path.join(__dirname, 'comments.js'))

// Pipe thru RESTful commands for posts
router.get('/posts', posts.getPosts)
router.post('/posts', posts.addPost)
router.put('/posts/:postId', posts.updatePost)
router.delete('/posts/:postId',posts.removePost)

// Pipe thru RESTful commands for comments
router.get('/posts/:postId/comments', comments.getComments)
router.post('/posts/:postId/comments', comments.addComment)
router.put('/posts/:postId/comments/:commentId', comments.updateComment)
router.delete('/posts/:postId/comments/:commentId',comments.removeComment)

// Export router
module.exports = router