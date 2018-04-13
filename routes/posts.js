/* (c)2018 pmvanvliet */

module.exports = {
  getPosts(req, res) {
    let posts = req.store.posts
    res.status(200).send(posts)
  },
  addPost(req, res) {
	let newPost = req.body
    let postId = req.store.posts.length
    req.store.posts.push(newPost)
    res.status(201).send({postId: postId})
  },
  updatePost(req, res) {
	let postId = req.params.postId
	req.store.posts[postId] = Object.assign(req.store.posts[postId], req.body)
	res.status(200).send(req.store.posts[postId])
  },
  removePost(req, res) {
	let postId = req.params.postId
    req.store.posts.splice(postId, 1)
    res.status(204).send()
  }
}