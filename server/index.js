const app = require("./server");

const PORT = process.env.PORT || 1813;

function init() {
  app.listen(PORT, () =>
    console.log(`
    App listening on port ${PORT}

    http://localhost/${PORT}
    `)
  );
}
