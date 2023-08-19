import { query } from "express";
import { pool } from "../db.js";

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body;
    try { 
    const [rows] = await pool.query(
      "INSERT INTO employee (name,salary) VALUES(?,?)",
      [name, salary]
    );
    // console.log(req.body)

    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes grong!",
    });
  }
};

export const getEmployees = async (req, res) => {
  //manejo de errores... si el servidor BD no esta disponible
  try {
    throw new Error("DB Error!");
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Sonthing goes wrong!",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    throw new Error('Error inesperado!')
    // console.log(req.params.id)
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      req.params.id,
    ]);
    console.log(rows);
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Employee not Found!",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong!",
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    // console.log(req.params.id)
    const [result] = await pool.query("DELETE FROM employee WHERE id=?", [
      req.params.id,
    ]);
    // console.log(result)
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Employe not found!",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong!",
    });
  }
};

export const updateEmployee = async (req, res) => {
    const { id } = req.params; //de la url
    const { name, salary } = req.body; //de los datos enviados
    // console.log(id,name,salary)
    try {
        const [result] = await pool.query(
          "UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?",
          [name, salary, id]
        );
        // console.log(result)
        if (result.affectedRows === 0)
          return res.status(404).json({
            message: "Employe not Found!",
          });
      
        //verificar el cambio obtenido
        const [rows] = await pool.query("SELECT * FROM employee WHERE id=?", [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message:'Something goes wrong!'
        })
        
    }

};
