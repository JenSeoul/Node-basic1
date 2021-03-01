const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// Extension name
console.log(path.extname(__filename));

// Create path object 
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'text','index2.html'));

