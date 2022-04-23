/*
server.js is the file containing all logic for the game server

Responsibilities of the server include:
    1. Authenticate clients (players) and assign them to a random and unique
       client ID, to be able to use Ably Realtime service via the Token Auth strategy

    2. Serve as a single source of game-state truth and constantly publish the latest state
       to all the players

    3. Manage and update the velocity and thus determine the position of chosen assets
       using a separate server-side Physics engine



*/