const app = require('./app');
const PORT = process.env.PORT || 3000; // Render usa process.env.PORT
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
