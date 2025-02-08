import { Customer } from "../Models/CustomerSchema.js";
import bcrypt from 'bcrypt'

const addCustomer = async (req, res) => {
  try {
    let { customerPassword } = req.body
    let salt = 10
    let incrypPassword = await bcrypt.hash(customerPassword, salt)
    const addedCustomer = await Customer.create({ ...req.body, customerPassword: incrypPassword });
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


const doLogin = async (req, res) => {
  try {
    let { password, email } = req.body

    let logCustomer = await Customer.findOne({ customerEmail: email })
    
    if ( await bcrypt.compare(logCustomer.customerPassword, password)) {
      res.status(200).json({
        message: "Login Successfull",
        data: logCustomer
      })
    } else {
      res.status(401).json({
        message: "Login fail enter correct pass",
        data: null
      })
    }
    console.log(logCustomer);
  } catch (error) {
    res.status(500).json(error)
  }
}

export { addCustomer, doLogin, getAllCustomer, updateCustomer, deleteCustomer };
