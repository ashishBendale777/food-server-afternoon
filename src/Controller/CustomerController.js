import { Customer } from "../Models/CustomerSchema.js";


const addCustomer = async (req, res) => {
  try {
    const addedCustomer = await Customer.create(req.body);
    res.status(200).json(addedCustomer);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllCustomer = async (req, res) => {
  try {
    const allCustomer = await Customer.find();
    res.status(200).json(allCustomer);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      { _id: req.body.customerId },
      {
        customerName: req.body.newCustomerName,
        customerAddress: req.body.newCustomerAddress,
        customerPassword: req.body.newCustomerPassword,
      },
      { new: true }
    );
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete({
      _id: req.body.customerId,
    });
    res.status(200).json(deletedCustomer);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { addCustomer, getAllCustomer, updateCustomer, deleteCustomer };
