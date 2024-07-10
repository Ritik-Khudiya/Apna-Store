const express=require('express');
const path =require('path');
const jsonServer=require('json-server');


const app = express();
const PORT = process.env.PORT || 3000;


// app.use(express.static(path.join(__dirname, '/frontend/build')));
app.use(express.static(path.resolve('frontend/build')));

const apiServer = jsonServer.create();
const apiRouter = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


apiServer.use(middlewares);
apiServer.use(apiRouter);

apiServer.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
// });
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname ,'frontend/build/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

