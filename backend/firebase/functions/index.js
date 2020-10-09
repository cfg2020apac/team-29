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

app.get("/", (req, res) => {
  return res.status(200).send("Firebase is working.");
});

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