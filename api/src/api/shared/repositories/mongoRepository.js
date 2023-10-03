import CustomErrorHandler from "../helpers/CustomErrorHanlder.js";
import { ErrorNames } from "../helpers/ErrorNames.js";
import { ThrowNewError } from "../helpers/ThrowNewError.js";

export class MongoRepository {
  constructor(model, errorHanlder = new CustomErrorHandler()) {
    this.model = model;
    this.errorHanlder = errorHanlder;
  }

  getAll = async (params = {}) => {
    try {
      return await this.model.find(params);
    } catch (err) {
      throw this.errorHanlder.handleError(err);
    }
  };

  getById = async (id) => {
    try {
      const data = await this.model.findById(id);

      if (!data) {
        throw ThrowNewError(ErrorNames.NOT_FOUND);
      }

      return data;
    } catch (err) {
      throw this.errorHanlder.handleError(err);
    }
  };

  getByParams = async (params) => {
    try {
      const data = await this.model.findOne(params);

      if (!data) {
        throw ThrowNewError(ErrorNames.NOT_FOUND);
      }

      return data;
    } catch (err) {
      throw this.errorHanlder.handleError(err);
    }
  };

  save = async (object) => {
    try {
      // eslint-disable-next-line new-cap
      const data = new this.model(object);
      return await data.save();
    } catch (err) {
      throw this.errorHanlder.handleError(err);
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
      throw this.errorHanlder.handleError(err);
    }
  };

  deleteById = async (id) => {
    try {
      await this.getById(id);
      await this.model.findByIdAndDelete(id);

      return id;
    } catch (err) {
      throw this.errorHanlder.handleError(err);
    }
  };
}
