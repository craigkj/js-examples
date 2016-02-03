import { logger } from '/path/to/logger';
import { config } from '/path/to/config';

export default function report(level, message) {
    if (config.get(environment) === 'dev') {
        logger.log(level, message);
    } else if(level === `warn` || level === `errors`) {
        logger.log(level, message);
    }
}
