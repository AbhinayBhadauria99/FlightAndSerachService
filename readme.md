# Welcome to Flight Service

## Project Setup
- clone the project on your local PC.

- Execute `npm install` on the same path as of your root directory of the downloaded project.

- Create a `.env` file in the root directory and add the following environment variables
  - `PORT=3000`
  
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json.
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute

- `npx sequelize db:migrate` saves your all changes in models and migration folders and updates database i.e. MySQL locally in your PC.

## DB Design
  - Airplane Table
  - Flight Table
  - Airport Table
  - City Table

- view flow chart (ENTITY RELATIONSHIP DIAGRAM) of database at `https://lucid.app/lucidchart/96aa9b80-3589-4263-b988-7861bc830edc/edit?viewport_loc=-284%2C-24%2C1713%2C691%2C0_0&invitationId=inv_c8dbca7a-a599-4682-8e0b-9df465e9f71e`
- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one airport


## Tables

<<<<<<< Updated upstream
##### City -> `id`,`name`,`created_at`,`updated_at`
##### Airport -> `id`,`name`,`address`,`created_at`,`updated_at`
  Relationship -> City has many airports and Airport belongs to a city (one to many relationship)

```
  npx sequelize model:generate --name Airport --attributes
  name:String,address:String,cityId:integer
  ```
  
=======
#### City -> `id`,`name`,`created_at`,`updated_at`
#### Airport -> `id`,`name`,`address`,`created_at`,`updated_at`
  Relationship -> City has many airports and Airport belongs to a city (one to many relationship)

``` 
  npx sequelize model:generate --name Airport --attributes
  name:String,address:String,cityId:integer
  ```
>>>>>>> Stashed changes
