import { error } from "console";

export async function getAllContacts(req, res) {
  res.status(200).json({ message: "getAllContacts" });
}

export async function getContactById(req, res) {
  res.status(200).json({ message: "getContactById" });
}

export async function createNewContact(req, res) {
  const { name, email, phoneNo } = req.body;
  if (!name || !email || !phoneNo) {
    // throw Error("All fields are mandatory");
    res.status(404).json({message:"All fields are mandatory"})
  }
  const reqBody = req.body;
  res.status(200).json(reqBody);
}

export async function updateContactbyId(req, res) {
  res.status(200).json({ message: "updateContactbyId" });
}
export async function deleteContactById(req, res) {
  res.status(200).json({ message: "deleteContactById" });
}
