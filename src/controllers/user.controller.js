import { UserModel } from "../models/user.model.js";


export const createUser = async (req, res) => {
  const { name, age, dni } = req.body;

  try {
     const newUser = await UserModel.create({
      name,
      age,
      dni,
    });

    res.status(201).json({
      ok: true,
      msg: "Usuario creado correctamente",
     data: newUser,
    });
  } catch (error) {

    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find();
        res.status(200).json({ 
            message: "Usuarios obtenidos correctamente",
            data: allUsers,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los usuarios", 
            error, 
            ok: false,

        });
    }
    };

    export const getUserById = async (req, res) => { 
        const { id } = req.params;
        try {
            const user = await UserModel.findById(id);

            res.status(200).json({
                message: "Usuario obtenido correctamente",
                data: user,
                ok: true,
            });
        }
            catch (error) { 
                console.log(error);
                res.status(500).json({
                    message: "Error al obtener el usuario",
                    error,
                    ok: false,
                });
            }   
        };

      export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    // const user = await UserModel.findById(id);

    // const updatedUser2 = await UserModel.updateOne({ _id: id }, { username });

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Usuario actualizado correctamente",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // const user = await UserModel.findById(id);

    // const deletedUser2 = await UserModel.deleteOne({ _id: id });

    const deletedUser = await UserModel.findByIdAndDelete(id);

    res.status(200).json({
      ok: true,
      msg: "Usuario eliminado correctamente",
      data: deletedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};