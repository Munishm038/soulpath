




// const dbConnect = require('./mongodb')

// import dbConnect from './mongodb'


//  ************    Static CURD Operation   ***************************

      // Find Data in DataBase
// dbConnect().then((resp) => {
//     resp.find({}).toArray().then((data) => {
//       console.log(data)
//     })
// })

    // Find Data in DataBase
// const main = async() => {
//     let data = await dbConnect()
//     let  _data = await data.find({}).toArray()
//      console.log(_data)
// }

// main()


// Data Insert in DataBase
// const insert = async() => {

    // const db = await dbConnect()

// Insert Single Data
    // const result = await db.insertOne({ name:'Iphone 14pro', brand:'Iphone', price: 55000, category:'mobile' })

 // Insert many Data
    // const result = await db.insertMany(
    //                [
    //                     { name:'Iphone 14pro', brand:'Iphone', price: 55000, category:'mobile' },
    //                     { name:'Iphone 15pro', brand:'Iphone', price: 95000, category:'mobile' },
    //                     { name:'Iphone 16pro-max', brand:'Iphone', price: 136000, category:'mobile' },
    //                 ]
    //             )

//    if(result.acknowledged){
//       console.log("Data Inserted")
//    }

// }

// insert()


 // Update Data in Databse
//  const _Update = async() => {
//     let db = await dbConnect()
//     let _data = await db.updateOne({ name: 'MI A1 max' }, {
//                                       $set: { name: 'MI A2 max', price: 4300 }
//                          })

//        console.log(_data)
//  }

//  _Update()

  // Delete Data in Databse
// const _delete = async() => {

//       let db = await dbConnect()

//       const _data = await db.deleteOne({ name : 'm 40' })

//       console.log(_data)
// }

// _delete()