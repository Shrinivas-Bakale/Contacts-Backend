import { Router } from "express";
import {
  createNewContact,
  getAllContacts,
  getContactById,
  deleteContactById,
  updateContactbyId,
} from "../controller/contacts.controller.js";
 
const router = Router();

router.get("/getAllContacts", getAllContacts);

router.get("/getContactById/:id", getContactById);

router.post("/createNewContact", createNewContact);

router.put("/updateContactbyId/:id", updateContactbyId);

router.delete("/deleteContactById/:id", deleteContactById);

export default router;
