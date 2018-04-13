/* (c)2018 pmvanvliet */
const express = require('express')
let app = express()

module.exports = {
  getComments(req, res) {
	let postId = req.params.postId
    res.status(200).send(req.store.posts[postId].comments)
  }, 
  addComment(req, res) {
    let newComment = req.body
    let postId = req.params.postId
	let commentId = req.store.posts[postId].comments.length
    req.store.posts[postId].comments.push(newComment)
    res.status(201).send({commentId: commentId})
  },
  updateComment(req, res) {
    let postId = req.params.postId
	let commentId = req.params.commentId
	req.store.posts[postId].comments[commentId] = Object.assign(req.store.posts[postId].comments[commentId], req.body)
    res.status(200).send(req.store.posts[postId].comments)
  },
  removeComment(req, res) {
    let postId = req.params.postId
	let commentId = req.params.commentId
	req.store.posts[postId].comments.splice(commentId, 1)
    res.status(204).send()
  }  
}