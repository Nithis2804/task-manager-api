const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

//-------------Multer library examples----------------------------//
// const multer = require("multer");
// const upload = multer({
//   dest: "images", // send the image to this destination
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (
//       !(
//         (
//           file.originalname.endsWith(".pdf") |
//           file.originalname.match(/\.(doc|docx)$/)
//         )
//         // first one normal method second one regular expression
//       )
//     ) {
//       return cb(new Error("Please upload a PDF or word document"));
//     }
//   },
// });
// // app.post("/upload", upload.single("upload"), (req, res) => {
// //   // we have to use the same name 'upload' as key value in postman
// //   res.send();
// // });

// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     // we have to use the same name 'upload' as key value in postman
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

//---------------------------------------//
// app.use((req, res, next) => {
//   if (req.method === GET) {
//     res.send("Get requests disabled");
//   } else {
//     next();
//   }

//   // console.log(req.method, req.path);
//   // next()
// });
//---------------------------------------//

app.use(express.json()); //automatically parses JSON

app.use(userRouter);
app.use(taskRouter);

// const router = new express.Router();
// router.get("/test", (req, res) => {
//   res.send("Router testing");
// });
// app.use(router);

// app.post("/users", (req, res) => {
//   res.send("testing");
// });

// app.post("/users", (req, res) => {
//   const user = new User(req.body);

//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e); //status(400) is http responses google : http response (100..,200..,300..,400..,500..)
//     });
// });
// app.get("/users", (req, res) => {
//   User.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get("/users/:id", (req, res) => {
//   //:id, id could be any name it is acting like a variable here
//   const _id = req.params.id;

//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send();
//       }

//       res.send(user);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.post("/tasks", (req, res) => {
//   const task = new Task(req.body);

//   task
//     .save()
//     .then(() => {
//       res.status(201).send(task);
//     })
//     .catch((e) => {
//       res.status(400).send(e); //status(400) is http responses google : http response (100..,200..,300..,400..,500..)
//     });
// });

// app.get("/tasks", (req, res) => {
//   Task.find({})
//     .then((tasks) => {
//       res.send(tasks);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get("/tasks/:id", (req, res) => {
//   //:id, id could be any name it is acting like a variable here
//   const _id = req.params.id;

//   Task.findById(_id)
//     .then((_id) => {
//       if (!_id) {
//         return res.status(404).send();
//       }

//       res.send(_id);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });
// app.listen(port, () => {
//   console.log("Server is up on port " + port);
// });

//------------------------------------------------------------------------------------------------------//
// app.post("/users", async (req, res) => {
//   const user = new User(req.body);

//   try {
//     await user.save();
//     res.status(201).send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.get("/users/:id", async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const user = await User.findById(_id);

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.patch("/users/:id", async (req, res) => {
//   const updates = Object.keys(req.body); // used to convert the object (here body content) to array of properties
//   const allowedUpdates = ["name", "email", "password", "age"];
//   const isValidOperation = updates.every(
//     (
//       update //this is going to run for every item in the array
//     ) => allowedUpdates.includes(update)
//   );
//   //isValidOperation is going to come true only if all the items in the array is true
//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Invalid updates!" });
//   }

//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.delete("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
// });
// //--------------------------------------------//
// app.post("/tasks", async (req, res) => {
//   const task = new Task(req.body);

//   try {
//     await task.save();
//     res.status(201).send(task);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.patch("/tasks/:id", async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["description", "completed"];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );

//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Invalid updates!" });
//   }

//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!task) {
//       return res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.get("/tasks", async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.send(tasks);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.get("/tasks/:id", async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const task = await Task.findById(_id);

//     if (!task) {
//       return res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.delete("/tasks/:id", async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id);

//     if (!task) {
//       res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
//------------------------------------------------------//

// const main = async () => {
//   // const task = await Task.findById('65798898b6b3a71cfe025e31')
//   // await task.populate('owner').execPopulate() // getting entire user field associated with that task using populate
//   // console.log(task.owner)

//   const user = await User.findById("6579888cb6b3a71cfe025e2c");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();

//------------------------------------------------------//

// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "Red12345!";
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare("red12345!", hashedPassword);
//   console.log(isMatch);
// };

// myFunction();

//---------------------------------------------------//
// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
//     expiresIn: "7 days", //token's valid time (i.e, from when the token is created, the next action verify() should be done before 7 days)
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismynewcourse"); // jwt.verify(), takes 2 arguements, token and the string to match and verify
//   console.log(data);
// };

// myFunction();

//understanding toJSON fmethod
// const pet = {
//   name: "Hal",
// };
// pet.toJSON = function () {
//   console.log(this);
//   return this;
//   return {}
// };
// console.log(JSON.stringify(pet));
