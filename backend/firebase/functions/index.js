const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
var session = require('express-session');

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Session
app.use(cookieParser());
app.use(session({secret: "8forgood"}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  return res.status(200).send("Firebase is working.");
});

app.post("/login", async(req,res)=>{

  const loginref = db.collection("logins")
  
  username = req.body.username;
  password = req.body.password;

  const snapshot = await loginref.where('username', '==', username).get();
  
  try {
    if(snapshot.empty){
      return res.status(401).send("Username does not exist");
    }
    snapshot.forEach(doc =>{

    role = doc.data().role;
      if (password == doc.data().password){
        return res.status(200).send(role);
      }
      else{
        console.log("Incorrect password");
        return res.status(401).send("Incorrect password");
      }
    });
      
  } catch (e){
    console.log("Error during login");
    return res.status(500).end();
  }


}
)

app.get("/getclients", async (req, res) => {
  const clientsref = db.collection("clients");
  try {
    const snapshot = await clientsref.where("matched", "==", false).get();
    var response = {clients: []};
    snapshot.forEach(doc => {
      response["clients"].push({id: doc.id, value: doc.data()});
    });
    return res.status(200).json(response);
  } catch (e) {
    console.log("Failed to get clients", snapshot);
    return res.status(500).end();
  }
});

app.get("/getclientinfo/:id", async (req, res) => {
  const docRef = db.collection("clients").doc(req.params.id);
  try {
    const r = await docRef.get();
    console.log("Get Success", r);
    return res.status(200).json(r.data());
  } catch (e) {
    console.error("Get Failure", e);
    return res.status(500).end();
  }
});

app.post("/addclient", async(req, res) => {

  const clientsref = db.collection("clients");
  
  logs = [req.body.log];
  requests = [req.body.request];
  
  const data = {
    name: req.body.name,
    gender : req.body.gender,
    birth: req.body.birth,
    timestart : req.body.timestart,
    timeend : req.body.timeend,
    location : req.body.location,
    matched : req.body.matched,
    comments : req.body.comments,
    log : logs,
    request : requests
  };
  
  const added = await clientsref.add(data);
  console.log( 'Added client with ID:', added.id);
});

app.put("/updateclients/:id", async (req, res) => {
  const clientsref = db.collection("clients");
  logs = [req.body.log];
  requests = [req.body.request];
  
  try {
    const document = clientsref.doc(req.params.id);
    await document.update({
        name: req.body.name,
        gender : req.body.gender,
        birth: req.body.birth,
        timestart : req.body.timestart,
        timeend : req.body.timeend,
        location : req.body.location,
        matched : req.body.matched,
        comments : req.body.comments,
        log : logs,
        request : requests
    });
    return res.status(200).send();
  } catch (e) {
    console.log("Failed to update client");
    return res.status(500).send(error);
  }
});

app.delete("/deleteclients/:id", async (req, res) => {
  const clientsref = db.collection("clients");
  
  try {
    const document = clientsref.doc(req.params.id);
    await document.delete();
    return res.status(200).send();
  } catch (e) {
    console.log("Failed to delete client");
    return res.status(500).end();
  }
});

app.post("/matchclient", async (req,res) =>{
  id1 = req.body.id1;
  id2 = req.body.id2;

  const clientsref = db.collection("clients");

  const update_id1 = await clientsref.doc(id1).update({matched: true});
  const update_id2 = await clientsref.doc(id2).update({matched: true});

  const matchref = db.collection("match");
  
  const data ={
    id1 : id1,
    id2 : id2,
    timestamp : Date.now(),
    match_status : "Pending supporting documents"
  };
 
  const added = await matchref.add(data);

  return res.status(200).send("Client matched");
 
});

app.get("/suggestclient", async (req, res) => {
  const clientsref = db.collection("clients");
  
  try {
    const document = clientsref.doc(req.query.id);
    var item = await document.get();
    var currId = item.id;
    var location = item.data().location;
    var timestart = item.data().timestart._seconds;

    const snapshot = await clientsref.get();
    var response = {clients: []};
    snapshot.forEach(doc => {
      if (doc.data().location == location && doc.id != currId && Math.abs(doc.data().timestart._seconds - timestart) <= 604800)
        response["clients"].push({id: doc.id, value: doc.data()});
    });

    return res.status(200).json(response);
  } catch (e) {
    console.log("Failed to get clients", snapshot);
    return res.status(500).end();
  }
  
});

app.post("/write-doc", async (req, res) => {
  const { collection, documentId, documentValue } = req.body;
  const docRef = db.collection(collection).doc(documentId);
  try {
    const r = await docRef.set(documentValue);
    console.log("Write Success", r);
    return res.status(200).end();
  } catch (e) {
    console.error("Write Failure", r);
    return res.status(500).end();
  }
});

exports.api = functions.https.onRequest(app);
