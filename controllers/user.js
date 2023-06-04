import { userModel } from "../models/user.js"


export const User = {
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await userModel.findById(id)
            return res.status(200).send(data)
        } catch (error) {
            console.log('User.getById', error)
        }
    },
    add: async (req, res) => {
        try {
            const data = await userModel.create(req.body)
            return res.status(201).send(data)
        } catch (error) {
            console.log('User.add', error)
        }
    },
}