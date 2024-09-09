/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/addView/:id", (c) => {
    let id = c.pathParam("id")

    // Get the Records through the passed in ID
    const record = $app.dao().findRecordById("articles", id)
    

    // Increment the view field in the record to show that another person has visited the page
    record.set('views', record.get('views') + 1)
    $app.dao().saveRecord(record)

    // Log the info in Pocketbase
    $app.logger().info(
      `GET /addView/${id}`,
      'Operation','An article was accessed incrementing the view counter',
      'Updated_record', record,
      'Ip', c.realIP(),
    )

    // returns updated record
    return c.json(200, record )
})