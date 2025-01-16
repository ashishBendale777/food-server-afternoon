import express from 'express'
import { addCustomer, deleteCustomer, getAllCustomer, updateCustomer } from '../Controller/CustomerController.js'
import { addDish, deleteDish, getAllDishes, updateDish } from '../Controller/DishController.js';
import { addOrder, deleteOrder, getAllOrders, updateOrder } from '../Controller/OrderController.js';

const router = express.Router()


//customer routes
router.post("/addcustomer", addCustomer);
router.get("/customers",getAllCustomer);
router.put('/updatecustomer',updateCustomer)
router.delete('/deletecustomer',deleteCustomer)


//dish routes
router.post('/adddishes', addDish)
router.get('/alldishes',getAllDishes)
router.put('/updatedish', updateDish)
router.delete('/deletedish', deleteDish)


//order routes
router.post('/addorder',addOrder)
router.get('/orders', getAllOrders)
router.put('/updateorder',updateOrder)
router.delete('/deleteorder', deleteOrder)

export {router}