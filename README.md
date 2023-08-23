# ABOUT THE APP

Simple hotel room occupancy calculation app. React with typescript and global state management that is created with useReducer and useContext hooks.

# LIVE DEMO

https://kazoli.github.io/hotel_manager_test

# WORKING LOGIC DESCRIPTION

Hotel clients have two different categories of rooms: Premium and Economy. Hotel wants their customers to be satisfied: they will not book a customer willing to pay EUR 100 and over for the night into an Economy room. But they will book lower paying customers into Premium rooms if these rooms would be empty and all Economy rooms will be filled by low paying customers. Customers always only have one specific price they are willing to pay for the night.

# BEFORE RUN ANY CODE

1. Use a command line, enter in the main folder and install packages: "npm i"

# RUN DEVELOPMENT

1. Use a command line, enter in the main folder and start the website: "npm start"
2. Open in browser: http://localhost:3000/

# RUN PRODUCTION

1. Use a command line, enter in the main folder and run this command: "npm run build"
2. You may serve it with a static server by typing in command line and run: "serve -s build"
3. App will start on that URL that static server will display in the command line

# RUN TESTS

1. Use a command line, enter in the main folder and run this command: "npm test"
