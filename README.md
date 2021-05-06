# UNICEF Office of Innovation Blockchain Team Intern Assessment

Go as far as you can in the allotted time.

1. Fork the repository
2. Clone your forked repository
3. `npm install && cd client; npm install`
4. Create a new branch `fullstack-assesment`
5. To start the server: `node index.js`
6. To start the client: `cd client; npm run start`

## Database

1. Create the new database model in /lib/db/models
   1. Decide on your own, sensible, properties.
2. Wire your model into the db and application.

## Back End

1. Add a new route to the API for users.
   1. Look in /lib/api
   2. Complete PUT, POST, and GET endpoints
2. Complete the `logRequest` middleware
   1. Log each request path.
   2. Log the user’s ip address
3. Add a new property to the application
   1. startTime - timestamp when the server started
4. Modify the `getStatus` function
   1. Add uptime - amount of time the server has been running
   1. Add the running applications current configuration

## Front End

1. Create a login/registration form.
2. Register a new user.
3. Login as the user.
   1. Display and style the server status if the user successfully logs in.
   2. Display an error page if unsuccessful.

[Note the usage of 'proxy' in the client package.json](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

## Submission

Once you complete the assignment, please make your repository private and invite `mehranhydary` and `tenthirtyone` to the repository so that your solution can be reviewed by UNICEF.
