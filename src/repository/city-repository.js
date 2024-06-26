const { City } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (error) {
            console.log("Something went wrong in create repository layer");
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
            console.log("Something went wrong in delete repository layer");
            throw { error };
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                },
                returning: true,
                plain: true
            });
            return city;

            /*  const city = await City.findByPk(cityId);
              city.name = data.name;
              await city.save();
              return city;
              */
        }
        catch (error) {
            console.log("Something went wrong in the update repository layer");
            throw { error };
        }
    }
    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllCities(filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

}

module.exports = CityRepository;
//instead of implementing CRUD for MySQL in CLI we use repository which uses OOP operations to do interact with database.
//Now we can use these functions anywhere.
//create,destory,findAll,findbyPk(primary key) They are different sequelize queries