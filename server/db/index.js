const db = require("./db");
const Admin = require('./models/Admin')
const Student = require('./models/Student')

const syncAndSeed = async () => {
  try {
      await db.sync({force:true})

      const kpiech
  } catch (error) {
    console.log("error occured in sync and seed");
  }
};
