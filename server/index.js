const app = require("./server");
const syncAndSeed = require("./db/index");

const PORT = process.env.PORT || 1813;

async function init() {
  try {
    await syncAndSeed();

    app.listen(PORT, () =>
      console.log(`
    App listening on port ${PORT}
    
    http://localhost/${PORT}
    `)
    );
  } catch (error) {
    console.log("error occured in init()");
    next(error);
  }
}

init();
