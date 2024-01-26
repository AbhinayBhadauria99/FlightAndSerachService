const { city } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (error) {
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        }
        catch (error) {
            throw { error };
        }
    }
}

module.exports = CityRepository;
//instead of implementing CRUD for MySQL in CLI we use repository which uses OOP operations to do interact with database.
//Now we can use these functions anywhere.