const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    console.log(req.io, req.connectedUsers);

    const { user } = req.headers;
    const { devId } = req.params;
    const loggedDev = await Dev.findById(user);

    try {
      targetDev = await Dev.findById(devId);
    } catch (error) {
      return res.status(400).json({ error: 'Dev não existe!' });
    }

    loggedDev.likes.push(targetDev._id);
    await loggedDev.save();
    return res.json(loggedDev);
  }
};
