db.inventory.find() //Fetch all documents
db.inventory.find({type:"movie"})
db.inventory.find( { genres: { $in: [  "History" ] } } )


db.inventory.find( { rated: { $in: [ "PG", "PG-13" ] } } )

//AND
db.inventory.find( { runtime:{ $lt: 150 }, rated: "R"  } )

//OR
db.inventory.find( {$or:[ {rated: "PG-13" } , {runtime:{$lt: 120 } } ] } )

//Pull as a document
db.inventory.findOne( { rated: { $in: [ "PG", "PG-13" ] } } )