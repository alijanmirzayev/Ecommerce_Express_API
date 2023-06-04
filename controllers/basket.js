import { basketModel } from "../models/basket.js"

export const Basket = {
    add: async (req, res) => {
        try {
            const data = await basketModel.create(req.body)
            return res.status(201).send(data)
        } catch (error) {
            console.log('Basket.add', error)
        }
    },
    getAllByUserId: async (req, res) => {
        try {
            const { id } = req.params
            const data = await basketModel.find({userId: id})
            return res.status(201).send(data)
        } catch (error) {
            console.log('Basket.getAllByUserId', error)
        }
    },
}