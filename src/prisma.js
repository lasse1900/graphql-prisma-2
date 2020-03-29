import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
})

const createPostForUser = async (authorId, data) => {
  const post = await prisma.mutation.createPost({
    data: {
      ...data,
      author: {
        connect: {
          id: authorId
        }
      }
    }
  }, '{ id }')
  const user = await prisma.query.user({
    where: {
      id: authorId
    }
  }, '{ id name email posts { id title published } }')
  return user
}

createPostForUser('ck8d26z5v009p08631hnlvnhu', {
  title: "Calling Elvis",
  body: "Rokn roll",
  published: true
}).then((user) => {
  console.log(JSON.stringify(user, undefined, 2))
})

// prisma.query.users(null, '{ id name posts { id title body} }').then((data) => {
//   console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.query.comments(null, '{ id text author { name } }').then((data) => {
//   console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.mutation.createPost({
//   data: {
//     title: "Graphql plus",
//     body: "read more ...",
//     published: false,
//     author: {
//       connect: {
//         id: "ck8d1am5h00hw0963too66zzp"
//       }
//     }
//   }
// }, '{id title body published}').then((data) => {
//   console.log(data)
//   return prisma.query.users(null, '{id name posts { id title body}} ')
// }).then((data) => {
//   console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.mutation.updatePost({
//   where: {
//     id: "ck8d4zlr601zd0863w0pqfl7k"
//   },
//   data: {
//     body: "Edited Post",
//     published: false
//   }
// }, '{id}').then((data) => {
//   console.log(data)
//   return prisma.query.users(null, '{id name posts { id title body}} ')
// }).then((data) => {
//   console.log(JSON.stringify(data, undefined, 2))
// })
