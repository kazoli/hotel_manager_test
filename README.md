#ABOUT THE APP

Simple hotel room occupancy calculation app. React with typescript and global state management that is created with useReducer and useContext hooks.

#RUN THE APP IN DEVELOPMENT MODE

1. Enter into the main folder of application in any command line
2. Typing in command line and run: npm start
3. App will start on URL http://localhost:3000/

#RUN THE APP IN PRODUCTION MODE

1. Enter into the main folder of application in any command line
2. Typing in command line and run: npm run build
3. You may serve it with a static server by typing in command line and run: serve -s build
4. App will start on that URL that static server will display in the command line

#WORKING LOGIC DESCRIPTION

Hotel clients have two different categories of rooms: Premium and Economy. Hotel wants their customers to be satisfied: they will not book a customer willing to pay EUR 100 and over for the night into an Economy room. But they will book lower paying customers into Premium rooms if these rooms would be empty and all Economy rooms will be filled by low paying customers. Customers always only have one specific price they are willing to pay for the night.
