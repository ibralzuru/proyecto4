const router = require('express').Router();
const { Clientes } = require('../../db');
const { Film } = require('../../db');
const films = require('../../models/films');
const clientes = require('../../models/clientes');


 router.get('/', (req,res) =>{
   res.send('entra correctamente');
}); 
router.get('/', async (req, res) => {
    const films = await Film.findAll();
   return res.json(films);
})

/* router.post('/', async (req, res) => {
    console.log(req.body);
    const films = await Film.create(req.body);
  return  res.json(films);
}) */
router.post('/', async (req, res) => {
    console.log(req.body);
    const clientes = await Clientes.create(req.body);
  return  res.json(clientes);
})
router.put('/:filmId', async (req, res) => {
    await Film.update(req.body,{
        where: { id: req.params.filmId }
    });
   return res.json({ success: 'se ha modificado' })
});
router.delete('/:filmId', async (req,res)=>{
    await Film.destroy({
        where:{ id: req.params.filmId}
    });
   return res.json({ succes: 'Se ha borrado la película'})
});


module.exports = router;