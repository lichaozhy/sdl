const ProjectStage = module.exports = class ProjectStage {
	constructor(data) {
		this.data = data;
	}
};

ProjectStage.Schema = require('./schema');
ProjectStage.List = require('./list');