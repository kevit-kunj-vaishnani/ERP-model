const ADMIN_ERROR_CODES = {
	UNAUTHENTICATED: 'Invalid Credentials',
	ADMIN_NOT_FOUND: 'User not found for emailId id',
	ADMIN_ID_NOT_FOUND: 'User Id not found',
	CREATE_Admin_UNHANDLED_IN_DB:
		'Something went wrong while creating new user',
	EMAIL_OR_PASSWORD_NOT_FOUND: 'Email or Password not present.',
};

export default ADMIN_ERROR_CODES;
