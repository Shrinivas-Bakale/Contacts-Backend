import { Contact } from "../models/contact.model.js";

export async function getAllContacts(req, res) {
  const allContacts = await Contact.find({});
  res.status(200).json(allContacts);
}

export async function getContactById(req, res) {
  try {
    const { id } = req.params;
    const contactDoc = await Contact.findById(id);
    console.log(contactDoc);
    if (!contactDoc) {
      return res.status(404).json({ message: "Contact Not found" });
    }
    res.status(200).json(contactDoc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createNewContact(req, res, next) {
  try {
    const { name, email, phoneNo } = req.body;

    if (!name || !email || !phoneNo) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
    const newContact = await Contact.create({
      name: name,
      email: email,
      phone: phoneNo,
    });
    res.status(200).json(newContact);
  } catch (error) {
    next(error);
  }
}

export async function updateContactbyId(req, res) {
  try {
    const { id } = req.params;
    const contactDoc = await Contact.findById(id);
    if (!contactDoc) {
      return res.status(404).json({ message: "Contact Not found" });
    }
    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteContactById(req, res) {
  try {
    const { id } = req.params;
    const contactDoc = await Contact.findById(id);
    if (!contactDoc) {
      return res.status(404).json({ message: "Contact Not found" });
    }
    // const deleteById = await Contact.findByIdAndDelete(id);
    await contactDoc.deleteOne();
    res.status(200).json(contactDoc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
