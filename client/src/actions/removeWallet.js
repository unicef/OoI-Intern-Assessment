
this.app.delete('/wallets/:wallet', function (req, res) {
    const wallet = req.name;
    let deleteWallet = this.walletData.findIndex(wlt => wlt.name === wallet);
    this.walletData = this.walletData.splice(deleteWallet);
    return res.json(this.walletData)
})