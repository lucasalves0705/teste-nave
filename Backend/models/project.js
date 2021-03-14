const Model = require('../config/database')
const User = require('./user')

class Project extends Model {

    static get tableName() {
        return 'projects';
    }

    static get jsonSchema(){
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
            }
        }
    }

    static relationMappings = {
        users: {
            relation: Model.ManyToManyRelation,
            modelClass: User,
            join: {
                from: 'projects.id',
                through: {
                    from: 'project_user.project_id',
                    to: 'project_user.user_id'
                },
                to: 'users.id'
            }
        }
    }
}

module.exports = Project
