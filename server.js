const express = require('express');
const connectDBmySQL = require('./config/mysqldb');

const app = express();

// Connect Database (MySQL)
// Test DB
connectDBmySQL
  .authenticate()
  .then(() => console.log('MySQL Database connected'))
  .catch((err) => console.log('Error: ' + err));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Contact Keeper API...' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
