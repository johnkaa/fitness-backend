module.exports = ({ env }) => ({
	email: {
		config: {
			provider: 'sendgrid',
			providerOptions: {
				apiKey: env('SENDGRID_API_KEY'),
			},
			settings: {
				defaultFrom: 'g.johnka@gmail.com',
				defaultReplyTo: 'g.johnka@gmail.com',
				testAddress: 'g.johnka@gmail.com',
			},
		},
	},
});