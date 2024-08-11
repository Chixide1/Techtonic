/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygk6e1clecqysg8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5wf4ayqf",
    "name": "title",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "52zxt26q",
    "name": "views",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kzqvawcb",
    "name": "img",
    "type": "file",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/svg+xml",
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/webp",
        "image/tiff",
        "image/x-icon"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "anjxpa6i",
    "name": "category",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygk6e1clecqysg8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5wf4ayqf",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "52zxt26q",
    "name": "views",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kzqvawcb",
    "name": "img",
    "type": "file",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/svg+xml",
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/webp",
        "image/tiff",
        "image/x-icon"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "anjxpa6i",
    "name": "category",
    "type": "text",
    "required": false,
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
