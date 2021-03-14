const Model = require('../config/database')
const Project = require('./project')

class User extends Model {
    static tableName = 'users'

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                birthday: { type: 'string' },
                admission_date: { type: 'string' },
                job_role: { type: 'string' },
            }
        };
    }

    static relationMappings = {
        projects: {
            relation: Model.ManyToManyRelation,
            modelClass: Project,
            join: {
                from: 'users.id',
                through: {
                    from: 'project_user.user_id',
                    to: 'project_user.project_id'
                },
                to: 'projects.id'
            }
        }
    }
}

module.exports = User
