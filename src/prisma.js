import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: 'mysuperonesecrettest'
})

export { prisma as default }

// prisma.exists.Comment({
//   id: "ck8d2dsoz00e708639m2g60wi",
//   author: {
//     id: "ck8d26z5v009p08631hnlvnhu"
//   }
// }).then((exists) => {
//   console.log(exists)
// })

// const createPostForUser = async (authorId, data) => {
//   const userExists = await prisma.exists.User({ id: authorId })

//   if (!userExists) {
//     throw new Error('User not found')
//   }

//   const post = await prisma.mutation.createPost({
//     data: {
//       ...data,
//       author: {
//         connect: {
//           id: authorId
//         }
//       }
//     }
//   }, '{ author { id name email posts { id title published } } }')

//   return post.author
// }

// // createPostForUser('ck8d16qhr00gv0963n7mveqwz', {
// //   title: "Graphql lessons 2 *********",
// //   body: "udemy",
// //   published: true
// // }).then((user) => {
// //   console.log(JSON.stringify(user, undefined, 2))
// // }).catch((error) => {
// //   console.log(error.message)
// // })


// const updatePostForUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({ id: postId })

//   if (!postExists) {
//     throw new Error('Post not found')
//   }

//   const post = await prisma.mutation.updatePost({
//     where: {
//       id: postId
//     },
//     data
//   }, '{ author { id name email posts { id title published } } }')

//   return post.author
// }

// updatePostForUser('ck8d1ppqg000i0863iy7uj5lq', {
//   published: true
// }).then((user) => {
//   console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//   console.log(error.message)
// })
