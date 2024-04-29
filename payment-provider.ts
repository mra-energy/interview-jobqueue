export const paymentProvider = {
    makePayment(senderId: string, receiverId: string, amount: number) {
        if (Math.random() > 0.5) throw new Error("payment failed")
        return "done"
    }
}