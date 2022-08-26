const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function (req, res) {
    let data = req.body
    let freeAppUser = req.headers.isfreeappuser

    let findUser = await userModel.findById({ _id: data.userId }).select({_id:1})
    if (!findUser) return res.send({ status: false, msg: "userId is invalid" })
    let findproduct = await productModel.findById({ _id: data.productId })
    if (!findproduct) return res.send({ status: false, msg: "productId is invalid " })

    if (freeAppUser == "false") {
        if (findUser.balance >= data.amount) {
            let ordercreated = await orderModel.create(data)
            let update = await userModel.updateOne({ _id: findUser }, { $inc: { balance: - data.amount } })
            let update1 = await userModel.updateOne({ _id: findUser },{$set:{isFreeAppUser:freeAppUser}})
            return res.send({ msg: ordercreated })
        } else if (findUser.balance <= data.amount) {
            return res.send({ status: true, msg: " the user doesn't have enough balance" })
        }
    } else if (freeAppUser == "true") {
        let ordercreated = await orderModel.create(data)
        let update = await orderModel.updateOne({ _id: ordercreated._id }, { $set: { amount: 0 } })
        let update1 = await userModel.updateOne({ _id: findUser },{$set:{isFreeAppUser:freeAppUser}})
        ordercreated["isFreeAppUser"] = freeAppUse
        return res.send({ data: ordercreated })
    }
}

module.exports.createOrder = createOrder
