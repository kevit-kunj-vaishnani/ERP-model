import bcrypt = require('bcrypt');
import mongoose from 'mongoose';
import validator from 'validator';
import HttpException from '../../utils/error.utils';

const { Schema, model } = mongoose;
/**
 * Admin Schema for DB
 */
const adminSchema = new Schema({
	jobType: {
		type: String,
		required: true,
		trim: true,
	},

	name: {
		type: String,
		required: true,
		trim: true,
	},

	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		validate(i) {
			if (validator.isEmail(i) === false) {
				throw new Error('email invalid');
			}
		},
	},

	password: {
		type: String,
		required: true,
		minlength: 6,
		trim: true,
		validate(i) {
			if (i.toLowerCase().includes('password') === true) {
				throw new Error("password cannot be 'password'");
			}
		},
	},

	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
});
// eslint-disable-next-line func-names
adminSchema.pre('save', async function (next) {
	try {
		if (this.isModified('password')) {
			this.password = await bcrypt.hash(this.password, 10);
		}
		next();
	} catch (err) {
		throw new HttpException(
			500,
			err.message,
			'CREATE_Admin_UNHANDLED_IN_DB',
			err,
		);
	}
});
const Admin = model('Admin', adminSchema);
export default Admin;
