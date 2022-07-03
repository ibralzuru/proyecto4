const router = require ('express').Router();


const apiReservRouter = require('./api/reservas')
const apiFilmsRouter = require('./api/films');
const apiClientes = require('./api/films');

router.use('/films',apiFilmsRouter);
router.use('/reservas', apiReservRouter);
router.use('/clientes',apiClientes);

module.exports = router;