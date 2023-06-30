export class MongoRepository {
  constructor(model) {
    this.model = model;
  }

  getAll = async () => {
    return await this.model.find();
  };

  getById = async (id) => {
    const data = await this.model.findById(id);

    if (!data) {
      throw new Error(`ID: ${id} not found`);
    }

    return data;
  };

  getByParams = async (params) => {
    const data = await this.model.findOne(params);

    if (!data) {
      throw new Error(`Not found`);
    }

    return data;
  };

  save = async (object) => {
    // eslint-disable-next-line new-cap
    return new this.model(object).save();
  };

  update = async (id, object) => {
    await this.getById(id);
    await this.model.findByIdAndUpdate(id, object);

    return id;
  };

  deleteById = async (id) => {
    await this.getById(id);
    await this.model.findByIdAndDelete(id);

    return id;
  };
}
