import {onRequest} from "firebase-functions/v2/https";
import {
  onDocumentWritten,
} from "firebase-functions/v2/firestore";

const httpFunc = onRequest((req, res) => {
  res.send("Hello World");
});

const trigger1 = onDocumentWritten("users/{id}", (event) => {
  console.log(`users: ${event}`);
});

const trigger2 = onDocumentWritten("pets/{id}", (event) => {
  console.log(`pets: ${event}`);
});

export const codebase = {
  httpFunc,
  trigger: {
    trigger1,
    trigger2,
  },
};
