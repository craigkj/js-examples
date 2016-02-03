import * as dataDogService from 'thirdPartyDataDogServiceLib';

// might want to singleton this up with an init
export default function report(metric) {
    // get dataDog api keys
    // check whether this metric is white/black listed
    dataDogService.send(metric);
}
