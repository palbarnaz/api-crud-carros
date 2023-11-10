import express from 'express';
const app = express();
app.use(express.json());

let carros = []
let contador = 1
     

app.get('/carros', (request, response) => {
  return response.json(carros)
});



// rota utilizando query params
app.get('/carros/pegar-id-query', (request, response) => {
  const id = request.query

  const carro = carros.filter(carro => carro.id == Number(id.id))

  if(carro.length == 0){
     return response.status(401).json('id inválido')
  }
  
  return response.json(carro)

})

// rota utilizando route params
app.get('/carros/:id?', (request, response) => {
  const id = request.params
  const carro = carros.filter(carro => carro.id == Number(id.id))
  return response.json(carro)

})


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