export async function getAllContacts(req, res) {
  res.status(200).json({ message: "getAllContacts" });
}

export async function getContactById(req, res) {
  res.status(200).json({ message: "getContactById" });
}

export async function createNewContact(req, res, next) {
  try {
    const { name, email, phoneNo } = req.body;

    if (!name || !email || !phoneNo) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
    res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
}

export async function updateContactbyId(req, res) {
  res.status(200).json({ message: "updateContactbyId" });
}
export async function deleteContactById(req, res) {
  res.status(200).json({ message: "deleteContactById" });
}
