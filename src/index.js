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


app.put('/carros/:id', (request, response) => {
  const params = request.params
  const body = request.body

  const alteraIndiceCarro = carros.findIndex(carro => carro.id == Number(params.id))

  if (alteraIndiceCarro == -1) {
      return response.status(401).json('id inválido')
  }
  const carro = {
      id: Number(params.id),
      modelo: body.modelo,
      marca: body.marca,
      ano: body.ano,
      cor: body.cor,
      preco: body.preco
  }

  carros[alteraIndiceCarro] = carro
  return response.json(carros[alteraIndiceCarro])
})



app.listen(8080, () => console.log("Servidor iniciado"));