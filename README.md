# Slack Slash Status Search
A simple slash command to search for users with a specific status emoji.

## Usage
 In a slack channel type: `/users :emoji_to_search:`
 A response will be sent with all users who have that emoji set as their status

## Installation

1. You'll need your own slack API token in an .env file for this to work at all
2. Deploy this to heroku or any other service that can run a node app.
3. Setup your slash command to hit `/users` on the url the app is hosted at.
4. Install the app into your slack instance.
5. You're done

For more detailed info on installing a custom slack app: https://api.slack.com/slack-apps

I made this in 30 minutes for fun, so it will probably break and there is likely a more performant way to do this, so feel free to improve!
