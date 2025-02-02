// import express from "express";
// import CartController from "../controllers/CartController.js";

// const router = express.Router();

// router.get('/', CartController.getAll);

// router.get("/:id", CartController.getById);

// router.post("/", CartController.add);

// router.put("/:id", CartController.update);

// router.delete("/:id", CartController.delete);

// router.post("/add-item", CartController.addItem);

// router.delete("/delete-item", CartController.deleteItem);

// router.post("/update-item", CartController.updateItem);

// router.post("/send-email", CartController.sendCartToEmailInController);

// export default router;
import express from "express";
import Cart from "../models/CartModel.js";

const router = express.Router();

// קבלת עגלה של משתמש
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart || { items: [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// הוספת פריט לעגלה
router.post("/", async (req, res) => {
  const { userId, productId, name, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex((item) => item.productId === productId);

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, name, quantity });
    }

    cart.updatedAt = new Date();
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
