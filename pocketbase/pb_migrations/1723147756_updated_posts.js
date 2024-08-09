/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygk6e1clecqysg8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b7fcfyhn",
    "name": "sections",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j550g9hqb77uul1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygk6e1clecqysg8")

  // remove
  collection.schema.removeField("b7fcfyhn")

  return dao.saveCollection(collection)
})
