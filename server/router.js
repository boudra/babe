const router = require('express').Router();
const ctrl = require('./ctrl');

router.get('/history', ctrl.getHistory);

router.post('/transactions', ctrl.addTransaction);

router.get('/transactions/:_id', ctrl.getTransaction);

router.delete('/transactions/:_id', ctrl.deleteTransaction);

router.put('/transactions/:_id', ctrl.editTransaction);

module.exports = router;
