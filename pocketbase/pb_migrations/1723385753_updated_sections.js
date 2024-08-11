/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j550g9hqb77uul1")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_01IiF1L` ON `sections` (`position`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j550g9hqb77uul1")

  collection.indexes = []

  return dao.saveCollection(collection)
})
