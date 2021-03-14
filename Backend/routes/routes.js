const { route } = require('../config/route')
const userController = require('../controllers/user')
const projectController = require('../controllers/project')

// Rotas Usuário
route.get('/usuario', userController.index);
route.get('/usuario/:id', userController.show);
route.post('/usuario/novo', userController.store);
route.update('/usuario/:id', userController.update);
route.delete('/usuario/:id', userController.delete);

// Rotas Projeto
route.get('/projeto', projectController.index);
route.get('/projeto/:id', projectController.show);
route.post('/projeto/novo', projectController.store);
route.update('/projeto/:id', projectController.update);
route.delete('/projeto/:id', projectController.delete);
