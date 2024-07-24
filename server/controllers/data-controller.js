const Data = require("../models/data-model");
const getDatas = async (req, res) => {
    try {
        const response = await Data.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ msg: "No Data Found." });

        }
        res.status(200).json(response);
    } catch (error) {
        console.log(`Data: ${error}`);
    }
}

module.exports = {getDatas};