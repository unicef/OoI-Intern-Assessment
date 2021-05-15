const router = require("express").Router();

router.get("/", async (req, res) => {
  const app = req.app.get("app");
  let status;
  try {
    status = await app.getStatus();
  } catch (e) {
    console.error(e);
    res.status(500);
    return res.send();
  }
  res.json(status);
  console.info(status);
});



module.exports = router;
