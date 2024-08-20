/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/addView/:id", (c) => {
    let id = c.pathParam("id")
    const record = $app.dao().findRecordById("articles", id)
    
    record.set('views', record.get('views') + 1)
    $app.dao().saveRecord(record)

    // returns updated record
    return c.json(200, record )
}, /* optional middlewares */)