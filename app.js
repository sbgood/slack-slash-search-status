const express = require('express')
const bodyParser = require('body-parser')
const slack = require('slack')
require('dotenv').config()

// express variables
const app = express()
const port = process.env.PORT || 3100
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Slack token in .env file
const token = process.env.SLACK_TOKEN

// Start
app.post('/users', (req, res) => {
    //list the users in the slack instance
    slack.users.list({token})
    .then(users => {
        //map out the data we need
        let profiles = users.members.map(u => {
            let title = u.profile.real_name
            let status = u.profile.status_emoji
            let text = u.profile.status_text
            return {title, status, text}
        })
        //filter out users without status
        let statused = profiles.filter(p => p.status)
        //filter out the specific status we want
        let statusFilter = req.body.text
        let filtered = statused.filter(s => {
            if (s.status === statusFilter) {
                return true
            } else {return false}
        })
        //send the response
        res.send({ text: `the following users have the status of ${req.body.text}: `, attachments: filtered})
    })
})


app.listen(port, function() {
    console.log('Example app listening on port ' + port)
})
