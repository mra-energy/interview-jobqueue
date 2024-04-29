import express from "express";
import {paymentProvider} from "./payment-provider.js";

const app = express()

app.get("/dangerous-payment/:senderId/:receiverId/:amount", (req, res) => {
    const {senderId, receiverId, amount} = req.params
    paymentProvider.makePayment(senderId, receiverId, Number(amount))
    return res.sendStatus(200)
})

console.log("express listening to 3000")
app.listen(3000)
