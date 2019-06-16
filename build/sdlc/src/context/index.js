
const Repository = {
	git: class GIT {

	},
	svn: class SVN {

	}
};

exports.SdlcContext = function SdlcContext(options) {
	const projectRegistry = new ProjectRegistry();

	const Model = {
		Project: class Project {
		},
		ProjectStage: ,
		ProjectStageList: class ProjectStageList {
			revert() {

			}

			commit(options) {
				return new Model.ProjectStage();
			}

			get() {
				return new Model.ProjectStage();
			}
		},
		ProjectStageSchema: ,
		Person: class Person {
			constructor(data) {
				this.data = data;
			}
	
			update() {
	
			}


		}
	};

	return {
		project: {
			create(options) {


			},
			queryBy: {
				id() {

				},
				owner() {

				},
				personIn() {

				}
			}
		}
	}
};