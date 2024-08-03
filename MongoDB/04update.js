db.inventory.findOne({year:    2010})



db.inventory.updateOne({year:    2010},
{
    $set:{"runtime":120,"directors":["aashish"]},
    $currentDate:{lastModified:true}
})


db.inventory.updateMany({type: "movie"},
    {
        $set:{"runtime":120,"directors":["aashish","asfrd"]},
        $currentDate:{lastModified:true}
    })



db.inventory.replaceOne(
    { rated: "PG-13" },
    { account_id: 893421, limit: 5000, products: [ "Investment", "Brokerage" ] }
)