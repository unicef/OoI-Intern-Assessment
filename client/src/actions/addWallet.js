
class Wallet {
    constructor(name, address, currency, balance) {
        this.name = name;
        this.address = address;
        this.currency = currency;
        this.balance = balance;
    }
}

this.app.post("./", function (req, res) {
    const name = req.name;
    const address = req.address;
    const currency = req.currency;
    newWallet = new Wallet(name, address, currency);
});

module.exports = newWallet;