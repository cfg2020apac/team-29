# 8ForGood

### Quick Setup Guide

The web app have two parts: the frontend part and the backend part. For the frontend we are using **React.js**, and for the backend we are using **Node.js** as the framework. Before you proceed with the setup, please ensure you have npm, node.js, and react installed on your computer.

Clone the team repo to your computer:

```
git clone https://github.com/cfg2020apac/team-29
```

After you are done, install the required packages for both front and back ends.

```
cd frontend/reactapp
npm install
cd ../../backend/serverapp
npm install
```

To test if the backend works correctly, start the server in `backend/serverapp`.

```
npm start
```

And navigate to http://localhost:3001. We will use port **3001** for node.js. **Please note that we should keep server running in a terminal session.**

Similarly, you can start the react app in `frontend/reactapp`.

```
npm start
```

Visit http://localhost:3000 to see if react works.

### Run server side with Firebase

Make sure you have firebase CLI installed, and `cd` to `backend/firebase`. Login into firebase using the team account to ensure the uniqueness of the base URL.

```
firebase login
```

To connect this codebase to the team project run the following command inside `backend/firebase`.

```
firebase use --add
```

Select the only project id from the dropdown presented, then create an alias called default. After that, start the emulator using this command. 

```
firebase emulators:start --import=data
```

Some sample data has been provided. If you want to save your own modified version, you can explicitly save it from the other terminal session. Please note that the data will also be pushed to the repo.

```
firebase emulators:export data
```

Go to http://localhost:4000/firestore to view the database.
Call the api use the base: http://localhost:3002/cfg-apac-team29/us-central1/api/
