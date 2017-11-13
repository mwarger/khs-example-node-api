module.exports = {
    port: process.env.PORT || 8080,
    url: process.env.HEROKU_URL || 'http://localhost:3001/' ,
    jwt_secret: process.env.jwt_secret || 'lfanflaefknawelf',
    jwt_expires: process.env.jwt_expires || 3600,
    mongodb: process.env.MONGODB_URI || 'mongodb://heroku_910tmns5:bq9qnrcmhhrpm4mjdi7tuq8kt7@ds155192.mlab.com:55192/heroku_910tmns5',
    passwordCrypto: process.env.passwordCrypto || "k2312lk3m12l31",
    twilio: {
        accountSid: process.env.accountSid || "",
        authToken: process.env.authToken || ""
    },
    event_dir: process.env.event_dir || './server/convoevents',
    uploaded_event_dir: './server/services/convo/events',
    template_dir: process.env.template_dir || 'server/convoevents',
    timesheet: {
        host: process.env.TIMESHEET_HOST || 'keyhole-timesheet-staging.herokuapp.com',
        port: process.env.TIMESHEET_PORT || '80',
        url: process.env.TIMESHEET_URL || 'http://keyhole-timesheet-staging.herokuapp.com'
    },
    session_timeout: process.env.TIMESHEET_URL || 5,
    ping_url: process.env.PING_URL || 'http://khs-convo-dev.herokuapp.com',
    smtp_user: 'grokola@keyholesoftware.com',
    smtp_password: 'GrokolaKeyhole2'
}