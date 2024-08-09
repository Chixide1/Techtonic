/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j550g9hqb77uul1",
    "created": "2024-08-08 17:35:54.970Z",
    "updated": "2024-08-08 17:35:54.970Z",
    "name": "sections",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u64cqgys",
        "name": "post_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ygk6e1clecqysg8",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "f51crstj",
        "name": "heading",
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
        "id": "50hmoj9e",
        "name": "position",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j550g9hqb77uul1");

  return dao.deleteCollection(collection);
})
