
this.app.put("/wallets/:wallet", function (req, res) {
    const wallet = this.walletData.find(wallet => wallet.address === req.address);
    wallet.update({
        name = req.name
    })
    return res.json(this.walletData);
});
