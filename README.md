ChatApp_ReactJS Documentation
Introduction
ChatApp_ReactJS is a web application built using ReactJS that allows users to engage in real-time chat conversations. It provides a user-friendly interface where users can send and receive messages, view online users, and join multiple chat rooms. This documentation will guide you through the setup, features, and usage of the ChatApp_ReactJS application.

Table of Contents
Installation
Usage
Features
User Authentication
Real-time Chat
Joining Chat Rooms
Viewing Online Users
Contributing
License
Installation
To install and run the ChatApp_ReactJS application locally, follow these steps:

Clone the repository:

Copy code
git clone https://github.com/KlimentinaIvanova/ChatApp_ReactJS.git
Navigate to the project directory:

Copy code
cd ChatApp_ReactJS
Install the dependencies using npm or yarn:

Copy code
npm install
or
yarn install
Create a .env file in the project root directory and provide the required environment variables. You can use the .env.example file as a reference.

Start the development server:

Copy code
npm start
or
yarn start
Open your browser and visit http://localhost:3000 to access the ChatApp_ReactJS application.

Usage
Once you have the ChatApp_ReactJS application up and running, you can perform the following actions:

Sign up for a new account or log in with an existing account.
Send and receive messages in real-time with other users.
Join or create chat rooms to engage in specific conversations.
View the list of online users.
Customize your profile settings.

Features

User Authentication

Users can create a new account with a unique username and password.
Existing users can log in with their credentials.
Authentication is implemented using local storage for simplicity.
User login credentials are stored locally and used for authentication.

Real-time Chat

Users can send and receive messages in real-time using the React Chat Engine library.
Messages are displayed in a threaded chat format.
The chat interface automatically scrolls to the latest message.
Each message displays the sender's username, timestamp, and content.

Joining Chat Rooms

Users can join existing chat rooms to engage in specific conversations.
They can view the list of available chat rooms.
Users have the option to create new chat rooms.
Each chat room displays the number of participants.
When joining a chat room, users can see the conversation history.

Viewing Online Users

Users can see a list of online users who are currently active in the application.
The list dynamically updates when users go online or offline.
Each user is identified by their username.

Contributing

Contributions to ChatApp_ReactJS are welcome! If you'd like to contribute to the project, please follow these steps:

Fork the repository on GitHub.
Create a new branch with a descriptive name for your feature or bug fix.
Commit your changes and push the branch to your forked repository.
Submit a pull request to the original repository, describing your changes in detail.
License
The ChatApp_ReactJS project is licensed under the MIT License.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
