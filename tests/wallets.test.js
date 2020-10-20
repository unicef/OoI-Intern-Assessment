const App = require("../");
const expect = require("chai").expect;

describe("App", async (accounts) => {
  let app;

  beforeEach(async () => {
    app = new App();
  });

  describe("getWallets", () => {
    it("has two default wallets", async () => {
      const wallets = await app.getWallets();

      expect(wallets.length).to.be.equal(2);
    });
  });

  describe("addWallet", () => {
    it("creates a new wallet", async () => {
      const wallets = await app.getWallets();
      expect(wallets.length).to.be.equal(3);
    });
  });

  describe("editWallet", () => {
    const newName = "New Wallet Name";
    it("edits a wallet", async () => {
      expect((await app.getWallets())[0].name).to.be.equal(newName);
    });
  });

  describe("deleteWallet", () => {
    it("deletes a wallet", async () => {
      const wallets = await app.getWallets();
      expect(wallets.length).to.be.equal(1);
    });
  });
});
