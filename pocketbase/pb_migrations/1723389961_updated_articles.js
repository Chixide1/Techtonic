/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygk6e1clecqysg8")

  // remove
  collection.schema.removeField("52zxt26q")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygk6e1clecqysg8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "52zxt26q",
    "name": "views2",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
