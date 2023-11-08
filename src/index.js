import express from 'express';
const app = express();
app.use(express.json());

let carros = []
let contador = 1


app.get('/carros', (request, response) => {
  return response.json(carros)
});


app.post('/carros', (request, response) => {
  const infoRequest = request.body

  const novoCarro = {
      id: contador++,
      modelo: infoRequest.modelo,
      marca: infoRequest.marca,
      ano: infoRequest.ano,
      cor: infoRequest.cor,
      preco: infoRequest.preco
  }
  carros.push(novoCarro)
  return response.status(201).json(novoCarro)
});


app.listen(8080, () => console.log("Servidor iniciado"));