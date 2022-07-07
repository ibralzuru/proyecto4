const router = require ('express').Router();


const apiReservRouter = require('./api/films')
const apiFilmsRouter = require('./api/films');
const apiClientes = require('./api/films');
const apiHoteles = require('./api/films');

router.use('/films',apiFilmsRouter);
router.use('/reservas', apiReservRouter);
router.use('/clientes',apiClientes);
router.use('/hoteles',apiHoteles);

module.exports = router;