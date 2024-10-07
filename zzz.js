// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
// mongoose.connect("mongodb://127.0.0.1:27017/newone")
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');
// app.set('view engine','ejs')
// app.set('views', './views');
// require('dotenv').config()
// const port = process.env.PORT || 4000
// app.get('/',(req,res)=>{
//     res.render('sample1')
// })
// const loginSchema = new mongoose.Schema({
//     username: String,
//     password: String
//   });
//   const Login = mongoose.model('Login', loginSchema);
//   app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//       const login = new Login({ username, password });
//       await login.save();
//       res.status(201).send('Login information saved successfully');
//     } catch (err) {
//       console.error('Error saving login information:', err.message);
//       res.status(500).send('Error saving login information');
//     }
//   });
// app.get('/login',(req,res)=>{
//     res.render('sample1')
// })
// app.post('/dashboard',(req,res)=>{
//     res.render('dashboard')
// })

// app.listen(port,()=>{
  
//     console.log(`http://localhost:${port}`);
// })
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/newone", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

// Define schema
const loginSchema = new mongoose.Schema({
  username: String,
  password: String
});
const Login = mongoose.model('Login', loginSchema);

// Route to render login page
app.get('/', (req, res) => {
  res.render('sample1');
});

// Route to handle login form submission
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const login = new Login({ username, password: hashedPassword });
    await login.save();
    res.status(201).send('Login information saved successfully');
  } catch (err) {
    console.error('Error saving login information:', err.message);
    res.status(500).send('Error saving login information');
  }
});

// Route to render login page
app.get('/login', (req, res) => {
  res.render('sample1');
});

// Route to render dashboard page (with authentication)
app.post('/dashboard', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Login.findOne({ username });

    // Check if user exists and compare passwords
    if (user && await bcrypt.compare(password, user.password)) {
      res.render('dashboard');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (err) {
    console.error('Error during authentication:', err.message);
    res.status(500).send('Error during authentication');
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
