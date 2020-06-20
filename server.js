const express  = require('express'),
      app      = express();
      mongoose = require('mongoose');

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Contact Keeper API!' }));

// Define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));