import express from "express";
import CartController from "../controllers/CartController.js";

const router = express.Router();

router.get('/', CartController.getAll);

router.get("/:id", CartController.getById);

router.post("/", CartController.add);

router.put("/:id", CartController.update);

router.delete("/:id", CartController.delete);

router.post("/add-item", CartController.addItem);

router.delete("/delete-item", CartController.deleteItem);

router.post("/update-item", CartController.updateItem);

router.post("/send-email", CartController.sendCartToEmailInController);

export default router;
