import { mongoErrorHandler } from "../helpers/mongoErrorHandler.js";

export class MongoRepository {
  constructor(model) {
    this.model = model;
  }

  getAll = async () => {
    try {
      return await this.model.find();
    } catch (err) {
      throw mongoErrorHandler(err);
    }
  };

  getById = async (id) => {
    try {
      const data = await this.model.findById(id);

      if (!data) {
        throw new Error(`Not found`);
      }

      return data;
    } catch (err) {
      throw mongoErrorHandler(err);
    }
  };

  getByParams = async (params) => {
    try {
      const data = await this.model.findOne(params);

      if (!data) {
        throw new Error(`Not found`);
      }

      return data;
    } catch (err) {
      throw mongoErrorHandler(err);
    }
  };

  save = async (object) => {
    try {
      // eslint-disable-next-line new-cap
      const data = new this.model(object);
      return await data.save();
    } catch (err) {
      throw mongoErrorHandler(err);
    }
  };

  update = async (id, object) => {
    try {
      await this.getById(id);
      const data = await this.model.findByIdAndUpdate(id, object, {
        new: true,
      });

      return data;
    } catch (err) {
      throw mongoErrorHandler(err);
    }
  };

  deleteById = async (id) => {
    try {
      await this.getById(id);
      await this.model.findByIdAndDelete(id);

      return id;
    } catch (err) {
      throw mongoErrorHandler(err);
    }
  };
}
