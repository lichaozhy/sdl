const ProjectStageSchema = module.exports = class ProjectStageSchema {
	constructor(data) {
		this.data = data;
	}
};

ProjectStageSchema.List = require('./list');