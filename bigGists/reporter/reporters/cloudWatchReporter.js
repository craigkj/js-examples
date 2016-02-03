import * as cloudWatchService from 'thirdPartyCloudWatchServiceLib';

// might want to singleton this up with an init
export default function report(metric, value) {
    // get cloudwatch api keys
    // check whether this metric is white/black listed
    cloudWatchService.send(metric, value);
}
