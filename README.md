# UNICEF Office of Innovation Blockchain Team Intern Assessment

It is not required to complete every part of this assessment. Go as far as you can in the allotted time.

1. Fork the repository
2. Clone your forked repository
3. `npm install && cd client; npm install`
4. Create a new branch `unicef-assesment`
5. To start the server: `node index.js`
6. To start the client: `cd client; npm run start`

## Front End

1. Create a new Molecule - WalletCard.jsx
2. Add your WalletCard component to the Wallets template
3. Add one WalletCard for each wallet of the ‘wallets’ prop.
4. Display all of the wallet properties on your WalletCard
   1. Use react material components or existing atoms/molecules.
   2. Properly format amounts for ETH/BTC.
   3. Display & format USD amounts using the `rate` prop.
5. Filter the wallets array on the Wallets page to display only the Ethereum wallets on the Ethereum tab and Bitcoin on the Bitcoin tab.
6. Create a form to add/edit wallets.
7. Add an ‘Add New Wallet’ button to the Wallets Template
8. Create three new actions:
   1. addWallet.js
      Using fetch, POST the new data to the backend
   2. editWallet.js
      Using fetch, PUT the updated data to the backend
   3. removeWallet.js
      Using fetch, DELETE wallet data from the backend
9. Add ‘Edit Wallet’ & ‘Remove Wallet’ buttons to your WalletCard
10. Wire up your new actions.

### Expected Results:

1. WalletCards are displayed on page when the app opens
2. Add/Remove/Edit Wallets
3. WalletCards update as the Wallet details change on the backend.

## Back End

1. Complete the `logRequest` middleware to log each request path and the user’s ip address.
   1. Use the existing Logger library
   2. Create a new logger object named ‘logReqest’
   3. Log to the `info` transport
2. Add new endpoints to the `/wallets` route for POST, PUT and DELETE
3. Create three new application methods:
   1. addWallet
   2. updateWallet
   3. deleteWallet
4. Wire up your endpoints to the application.
5. Make the unit tests pass when you run `npm run test`
6. Add additional unit tests for the edge cases in your new code.

## Submission

Email a link to your public repository with your solution to your point of contact or interviewer.
