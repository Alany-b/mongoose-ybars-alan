import { ProfileModel } from "../models/profile.model.js";


export const createProfile = async (req, res) => {
  const { first_name, last_name, history, user } = req.body;
    try {
        const newProfile = await ProfileModel.create({
            first_name,
            last_name,
            history,
            user,
        });

        res.status(201).json({
            ok: true,
            msg: "Perfil creado correctamente",
            data: newProfile,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error interno del servidor", msg: error.message,
        });
    }   
};

export const getProfiles = async (req, res) => {
    // const Profiles = { first_name , last_name , history } = req.body;
    try {
        const profiles = await ProfileModel.find()
      .populate("user", "username email")
        res.status(200).json({ 
            message: "Perfiles obtenidos correctamente",
            data: profiles,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los perfiles", 
            error, 
            ok: false,

        });
    }
    };