<template>
	
<b-container>
	<b-row>
		<b-col
			cols="4"
			offset="4"
			class="py-5"
		>
			<b-card no-body>
				<b-card-header><center>SDLC安全管控平台</center></b-card-header>
				<b-card-body>
					<b-form
						@submit.prevent="signin"
					>
						<b-form-group
							label="用户名:"
							label-for="certificate-username"
						>
							<b-form-input
								id="certificate-username"
								v-model="certificate.username"
								placeholder="请输入用户名"
								size="sm"
								autocomplete="off"
							/>
						</b-form-group>
						<b-form-group
							label="密码:"
							label-for="certificate-password"
						>
							<b-form-input
								id="certificate-password"
								v-model="certificate.password"
								placeholder="请输入用户名"
								size="sm"
								type="password"
								autocomplete="off"
							/>
						</b-form-group>
						<b-button
							:disabled="!certificate.username || !certificate.password"
							class="w-100"
							size="sm"
							variant="primary"
							type="submit"
						>登录</b-button>
					</b-form>
				</b-card-body>
				<b-card-footer><center><small>天津橙子科技有限公司</small></center></b-card-footer>
			</b-card>
		</b-col>
	</b-row>
</b-container>

</template>

<script>
export default {
	name: 'page-signin',
	data() {
		return {
			certificate: {
				username: '',
				password: ''
			}
		}
	},
	methods: {
		async signin() {
			try {
				const account = await this.$backend.signin(this.certificate);
	
				this.$store.commit('setPrincipal', {
					administrator: account.administrator,
					name: account.name
				});

				this.$router.push({
					path: '/desktop/project'
				});
			} catch (error) {
				console.log(error)
			}
		}
	}
}
</script>
