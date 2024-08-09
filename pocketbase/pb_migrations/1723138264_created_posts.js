/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ygk6e1clecqysg8",
    "created": "2024-08-08 17:31:04.578Z",
    "updated": "2024-08-08 17:31:04.578Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ygk6e1clecqysg8");

  return dao.deleteCollection(collection);
})
