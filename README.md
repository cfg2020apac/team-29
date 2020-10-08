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