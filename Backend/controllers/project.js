const Project = require('../models/project')

const projectController = {
    index: () => {
        return Project.query()
    },

    show: (request) => {
        const id = request.params.id
        return Project.query().findById(id)
    },

    store: (request) => {
        const body = request.body
        if(Object.keys(body).length === 0) {
            return {success: false, message: 'Dados inválidos'}
        }
        return Project.query().insert(body)
    },

    update: (request) => {
        const body = request.body,
            id = parseInt(request.params.id)
        if (typeof body.id === "undefined" || body.id !== id) {
            return {success: false, message: 'Dados inválidos'}
        }
        return Project.query().patchAndFetchById(id, body)
    },

    delete: (request) => {
        const id = request.params.id
        return Project.query().deleteById(id)
    },
}

module.exports = projectController
