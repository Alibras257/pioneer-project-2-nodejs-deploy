const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Pioneer DevOps Project 2</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            text-align: center;
            padding-top: 100px;
          }
          .container {
            background: white;
            width: 60%;
            margin: auto;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h1 {
            color: #2c3e50;
          }
          p {
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Pioneer DevOps Project 2</h1>
          <p>Simple Node.js Application Deployed Successfully</p>
          <p>This application is running in a Linux environment using Node.js and npm.</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
