const CronJob = require('cron').CronJob;

async function coba() {
	console.log('Before job instantiation');
	const job = new CronJob('*/3 * * * * *', function() {
		const d = new Date();
		console.log('At Three Second:', d);
	});
	console.log('After job instantiation');
	job.start();
}

coba();
