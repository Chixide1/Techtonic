/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygk6e1clecqysg8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gz7pxyre",
    "name": "views",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygk6e1clecqysg8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gz7pxyre",
    "name": "views",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
