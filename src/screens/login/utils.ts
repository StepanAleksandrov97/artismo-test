type TLogIn={
    email:string;
    password:string
}

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


export const validateLogInForm = async (values:TLogIn) => {

	const errors: Partial<TLogIn> = {}

    if(!values.email){
        errors.email='Field shoukd not be empty'
    }
	if (values.email && !EMAIL_REGEXP.test(values.email)) {
		errors.email ='Hmm, that email address doesn’t look quite right.'
	}
    if(!values.password|| values.password.length<6){
        errors.password='password must be at least 6 characters'
    }

	return errors
}
