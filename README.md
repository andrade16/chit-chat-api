# Chit-Chat API
This is a basic API needed to properly execute chat functionality in [chit-chat-ui](https://gitlab.com/william.andrade/chit-chat-ui).

## Usage Steps 

* First and foremost, install all dependencies in this repo by running `npm install`.
* To start the application, run `npm start`.
* That's it! head on over to the UI project and follow those steps to start chatting

## Functionality for Events

The API handles a few events from the client. They are: 
- Client connections
- Client disconnections
- Messages being sent from a client with broadcasting to other client connections
- Typing feedback from a client to broadcast to other client connections


## Resources

* [Socket.io](https://socket.io/docs/) was used for both the client and api sides of this project.
* [Express.js](https://expressjs.com/) was used to establish a minimal web server
