/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygk6e1clecqysg8")

  collection.viewRule = ""
  collection.updateRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygk6e1clecqysg8")

  collection.viewRule = null
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
