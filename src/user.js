import { dbConnect } from "./dbConnect.js";


export async function addNewUser(req, res) {
  const addNewUser = req.body
  const db = dbConnect()
  await db.collection("User").insertOne(addNewUser)
    .catch(err => {
      res.status(500).send(err)
      return
    })
  res.status(201).send({ message: 'New User Added.' })
}

// export async function getAlluser(req, res) {
//   const db = dbConnect()
//   const collection = await db.collection("User").find().toArray()
//   res.send(collection)
// }

// export async function finduserByModel(req, res) {
//   const db = dbConnect()
//   const { search } = req.params
//   const collection = await db.collection("User")
//     .find({ model: search })
//     .toArray()
//   res.send(collection)
// }