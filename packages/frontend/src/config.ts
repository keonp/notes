const config = {
	// Backend config
	s3: {
		REGION: import.meta.env.VITE_REGION,
		BUCKET: import.meta.env.VITE_BUCKET,
	},
	apiGateway: {
		REGION: import.meta.env.VITE_REGION,
		URL: import.meta.env.VITE_API_URL,
	},
	cognito: {
		REGION: import.meta.env.VITE_REGION,
		USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
		APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
		IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
	},
	MAX_ATTACHMENT_SIZE: 5000000,
	STRIPE_KEY: "pk_test_51QFzTIAo4epYm1eK956xOd9B1XvNRbjaW1EgLGAnO9OYFzs048HMWBoeUAktwJ4le4NAlIXrlaJc8lDJX3tywe7L00kkwmOeqY",
};

export default config;
