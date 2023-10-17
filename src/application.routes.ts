import { Application } from 'express';

export default class ApplicationConfig {
	public static registerRoute(app: Application) {
		app.use('/');
		app.use('/users');
		app.use('/organizations');
	}
}
