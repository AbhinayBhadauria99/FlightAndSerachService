const { City } = require('../models/index');

class cityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (error) {
            console.log("Something went wrong in repository layer");
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
            return true;
        }
        catch (error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        }
        catch (error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }
    async geCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        }
        catch (error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }

}

module.exports = CityRepository;
//instead of implementing CRUD for MySQL in CLI we use repository which uses OOP operations to do interact with database.
//Now we can use these functions anywhere.
//create,destory,findAll,findbyPk(primary key) They are different sequelize queries