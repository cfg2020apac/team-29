const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Firebase is working.");
});

app.post("/login", async(req,res)=>{
  const loginref = db.collection("logins")
  
  username = req.body.username;
  password = req.body.password;
  role     = req.body.role;

  try{
    const snapshot = await clientsref.where( 'username','==',username).get();
    
    if(snapshot.empty){
      return res.status(500).send("Username does not exist");
    }
    
    snapshot.forEach(doc =>{
      if (password == doc.password){
        if(role =="cm"){
          response.writeHead(302 , {
              'Location' : '/cm'
          });
        }
        else if(role =="hdb"){
          response.writeHead(302 , {
            'Location' : '/hdb'
        });
        }
        else{
          response.writeHead(302 , {
            'Location' : '/exp'
        });
        }
        
      }
      else{
        console.log("Incorrect password");
        return res.status(500).send("Incorrect password");
      }
    });   
  }catch (e){
    console.log("Failed to get username");
    return res.status(500).end();
  }
})

app.get("/getclients", async (req, res) => {
  const clientsref = db.collection("clients");
  try {
    const snapshot = await clientsref.get();
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

app.post("/matchclient", (id1,id2) =>{
  const clientsref = db.collection("clients");

  const update_id1 = await clientsref.doc(id1).update({matched: true});
  const update_id2 = await clientsref.doc(id2).update({matched: true});
  
  return res.status(200).send("Client matched");
})

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

app.get("/read-doc", async (req, res) => {
  const { collection, documentId } = req.query;
  const docRef = db.collection(collection).doc(documentId);
  try {
    const r = await docRef.get();
    console.log("Read Success", r);
    return res.status(200).send({
      name: r.id,
      value: r.data(),
    });
  } catch (e) {
    console.error("Read Failure", e);
    return res.status(500).end();
  }
});

exports.api = functions.https.onRequest(app);
