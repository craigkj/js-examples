import * as logReporter from './reporters/logReporter';
import * as dataDogReporter from './reporters/dataDogReporter';
import * as cloudWatchReporter from './reporters/cloudWatchReporter';
import metricMap from '/path/to/metric/map';

// What a report object might look like
// report = {
//     metric: {
//         name: '',
//         value: 0
//     },
//     message: '',
//     logLevel: '',
//     origin: ''
// }

export default function report (report = {}) {
    if (report.message && report.logLevel) {
        logReporter.report(report.logLevel, report.message);
    }
    if (report.metric && metricMap.contains(report.metric.name)) {
        cloudWatchReporter.report(metric.name, metric.value);
        dataDogReporter.report(metric.name, metric.value);
    }
}
