const weatherModel = require("../models/weathers");

class Weather {

    async postAddWeather(req, res) {
        const { country, region, city, celsius, fahrenheit } = req.body;
        if (!country || !region || !city || !celsius || !fahrenheit) {
            return res.json({ error: "All filled must be required" });
        } else {
            try {
                let newWeather = new weatherModel({ country, region, city, celsius, fahrenheit });
                let save = await newWeather.save();
                if (save) {
                    return res.json({ success: "Weather created successfully" });
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    async getAllWeather(req, res) {
        try {
            const weathers = await weatherModel.find({}).sort({ _id: -1 });
            if (weathers) {
                return res.json({ weathers });
            }
        } catch (err) {
            console.log(err);
        }
    }

}

const weatherController = new Weather();
module.exports = weatherController;
