import express from 'express';
const app = express();
app.use(express.json());

app.get('/turma17', (request, response) => {
return response.json('OK Turma')
});

app.listen(8080, () => console.log("Servidor iniciado"));