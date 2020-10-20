export default async () => {
  let res, wallets;
  try {
    res = await fetch("/api/wallets");
    wallets = await res.json();
  } catch (e) {
    return console.log(e);
  }
  return wallets;
};
