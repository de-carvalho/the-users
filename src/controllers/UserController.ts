import { Request, Response } from "express";
import knex from "../database/connection";

class UserController {
  async index(req: Request, res: Response) {
    const users = await knex("users").select("*");
    return res.json(users);
  }

  async create(req: Request, res: Response) {
    const { name, email, password, office } = req.body;

    if (!name || !email || !password || !office) {
      return res.json({ error: "Tem campos vazios" });
    }

    const user = await knex("users").insert({
      image: req.file.filename,
      name,
      email,
      password,
      office,
    });

    return res.json(user);
  }
}

export default UserController;
