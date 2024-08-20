/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j550g9hqb77uul1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xmuzxro7",
    "name": "test",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j550g9hqb77uul1")

  // remove
  collection.schema.removeField("xmuzxro7")

  return dao.saveCollection(collection)
})
