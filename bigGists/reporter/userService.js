import reporter from './reporter';

const userService = {
    signin: (userData) => {
        options = { ... };
        request-promise.get(options)
            .then(() => {
                // process data
                // ...
                const report = {
                    metric: {
                        name: 'userSignedIn' // no error to log so only sending the metric, no value here either.
                    }
                };
                reporter(report)
            })
            .catch((error) => {
                // process error data
                // ...
                const report = {
                    metric: {
                        name: 'userSignInFailure'
                    },
                    logLevel: warn,
                    message: 'User unable to log in'
                };
                reporter(report);

                throw error; // or whatever to end the flow
            });
    },
    register: (userData) => {
        options = { ... };
        request-promise.get(options)
            .then(() => {
                // process data
                // ...
                const report = {
                    metric: {
                        name: 'userRegistered' // no error to log so only sending the metric, no value here either.
                    }
                };
                reporter(report);
            })
            .catch((error) => {
                // process error data
                // ...
                // see above example in signin
            });
    }
}

export default userService;
