/**
 * Required External Modules and Interfaces
 */
import express from "express";

import * as ItemsController from "./controllers/items.controller";

/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items
itemsRouter.get("/", ItemsController.getAllItems);
  
// GET items/:id
itemsRouter.get("/:id", ItemsController.getItemById);

// POST items
itemsRouter.post("/", ItemsController.createItem);

// PUT items/:id
itemsRouter.put("/:id", ItemsController.updateItem);

// DELETE items/:id
itemsRouter.delete("/:id", ItemsController.deleteItem);