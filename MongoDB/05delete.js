db.inventory.deleteMany({})

//Delete one
db.inventory.deleteOne( { cast: "Brad Pitt" } )

//Delete many
db.inventory.deleteMany( { title: "Titanic" } )