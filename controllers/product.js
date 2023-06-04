import { productModel } from "../models/product.js"

export const Product = {
    add: async(req, res) => {
        try {
            const data = await productModel.create(req.body)
            return res.status(201).send(data)
        } catch (error) {
            console.log('Product.add', error)
        }
    },
    getProductByCategoryId: async (req, res) => {
        try {
            const { categoryId } = req.params
            const data = await productModel.find({categoryId: categoryId})
            return res.status(200).send(data)
        } catch (error) {
            console.log('product.getProductByCategoryId', error)
        }
    },
    editById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await productModel.findByIdAndUpdate(id, req.body)
            return res.status(200).send(data)
        } catch (error) {
            console.log('product.editById', error)
        }
    },
    deleteById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await productModel.findByIdAndDelete(id)
            return res.status(200).send(data)
        } catch (error) {
            console.log('product.deleteById', error)
        }
    },
}