/* eslint-disable import/no-import-module-exports */
// eslint-disable-next-line import/no-extraneous-dependencies
import { WinstonChannelLogger } from '@kevit/winston-channel-logger';
import { transports, createLogger } from 'winston';

const winstonChannelLogger = new WinstonChannelLogger({
	level: 'silly',
	platforms: [
		{
			platformName: 'discord',
			webhookUrl:
				'https://discord.com/api/webhooks/1163453747595329708/JgR4xSbrcR24jQm-mO-hTuc_55hpA8lHBe1Q0cExUYmYStrSswiVccKPW809L2PoT8cA',
		},
	],
});
export const logger = createLogger({
	transports: [
		new transports.Console({ level: 'silly' }),
		winstonChannelLogger,
	],
});
export const log = logger;
