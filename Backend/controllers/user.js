const User = require('../models/user')

const userController = {
    index: () => {
        return User.query()
    },

    show: (request) => {
        const id = request.params.id
        return User.query().findById(id).eager('projects')
    },

    store: async (request) => {
        const body = request.body
        if(Object.keys(body).length === 0) {
            return {success: false, message: 'Dados inválidos'}
        }

        const newUser = await User.query().insert(body)

        if (typeof body.projects !== "undefined") {
            for (let i = 0; i < body.projects.length; i++){
                await newUser.$relatedQuery('projects').relate(body.projects[i])
            }
        }

        return newUser.$loadRelated('projects')
    },

    update: async (request) => {
        const body = request.body,
              id = parseInt(request.params.id)
        if (typeof body.id === "undefined" || body.id !== id) {
            return {success: false, message: 'Dados inválidos'}
        }

        const user = await User.query().patchAndFetchById(id, body).eager('projects')

        if (typeof body.projects !== "undefined") {
            for (let i = 0; i < user.projects.length; i++) {
                const index = body.projects.indexOf(user.projects[i].id)
                if (index > -1) {
                    console.log(body.projects, user.projects[i].id)
                    body.projects.splice(index, 1)
                    console.log(body.projects, user.projects[i].id)
                } else {
                    await user.$relatedQuery('projects').unrelate().where('project_id', '=', user.projects[i].id)
                }
            }

            if (body.projects.length > 0) {
                for (let i = 0; i < body.projects.length; i++) {
                    await user.$relatedQuery('projects').relate(body.projects[i])
                }
            }
        }

        return user.$loadRelated('projects')
    },

    delete: (request) => {
        const id = request.params.id
        return User.query().deleteById(id)
    },
}

module.exports = userController
