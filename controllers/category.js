import { categoryModel } from "../models/category.js"


export const Category = {
    add: async(req, res) => {
        try {
            const data = await categoryModel.create(req.body)
            return res.status(201).send(data)
        } catch (error) {
            console.log('Category.add', error)
        }
    },
    getAll: async (req, res) => {
        try {
            const data = await categoryModel.find()
            return res.status(200).send(data)
        } catch (error) {
            console.log('Category.getAll', error)
        }
    }
}