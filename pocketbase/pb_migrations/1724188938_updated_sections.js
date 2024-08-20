/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j550g9hqb77uul1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xmuzxro7",
    "name": "content",
    "type": "editor",
    "required": true,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xmuzxro7",
    "name": "content",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
})
