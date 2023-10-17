const Config = {
	mongodb: {
		url: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/ERP-Model',
	},
	server: {
		port: process.env.PORT || 3001,
		logLevel: process.env.LOG_LEVEL || 'all',
		alertLogLevel: process.env.ALERT_LOG_LEVEL || 'error',
		webhookUrl: process.env.WEBHOOK_URL,
		env: process.env.NODE_ENV,
	},
};
export default Config;
