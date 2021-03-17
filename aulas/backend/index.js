const express = require('express');

const app = express();

/**  
 * rota / recursos
*/

/**
 * Métodos HTTP;
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informção no back-end
 * DELETE: Deletar uma informação no back-end
 */


app.post('/users', (request,response) => {
  return response.json({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Gabriel Rocha'
  })

});

app.listen(3333);

