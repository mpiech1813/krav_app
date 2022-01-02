const db = require("./db");
const Admin = require("./models/Admin");
const Student = require("./models/Student");

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    const kpiech = await Admin.create({
      userName: "kpiech",
      password: "Robactwo18!",
    });

    const student1 = await Student.create({
      fName: "bob",
      lName: "smith",
      picture: "",
      fShot: true,
      sShot: true,
      booster: true,
    });
    const student2 = await Student.create({
      fName: "zach",
      lName: "clark",
      picture: "",
      fShot: true,
      sShot: true,
      booster: false,
    });
    const student3 = await Student.create({
      fName: "john",
      lName: "robot",
      picture: "",
      fShot: false,
      sShot: false,
      booster: false,
    });
  } catch (error) {
    console.log("error occured in sync and seed", error);
  }
};

module.exports = syncAndSeed;
