import query from "../config/Database.js";
import midtransClient from "midtrans-client";

export const saveTransaksi = async (req, res) => {
    try {
        const snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: "Mid-server-quUr3NASVh8PJwZM6R4NLj_q",
            
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    
}

export const getTransaksi = async (req, res) => {

    
}

export const getTransaksiById = async (req, res) => {

    
}

export const deleteTransaksi = async (req, res) => {

    
}