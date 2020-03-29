const Post = {
  author(parent, args, { db }, info) {
    return db.users.find((user) => {
      return user.id === parent.author
    })
  },
  comments(parent, args, cts, info) {
    return db.comments.filter((comment) => {
      return comment.id === parent.id
    })
  }
}

export { Post as default }