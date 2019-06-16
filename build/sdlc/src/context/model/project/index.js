const Project = module.exports = class Project {
	constructor(projectData) {
		this.objectData = projectData;

		this.stageSchemaList = new Model.ProjectStageSchemaList(projectData);
		this.stageList = new Model.ProjectStageList(projectData);
	}

	get data() {
		return {
			name: this.objectData.name,
			owner: this.objectData.owner,

		}
	}

	update() {

	}

	ignore() {

	}
};

Project.Team = require('./team');
Project.Stage = require('./stage');