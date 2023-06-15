import { Router } from "express";

export default class BaseRouter {
  constructor(serviceName, service = {}) {
    this.serviceName = serviceName;
    this.service = service;
    this.router = Router();
    this.initRoutes();
  }

  getRouter() {
    return this.router;
  }

  initRoutes() {}

  get(path, ...callback) {
    this.router.get(
      path,
      this.generateCustomResponses,
      this.apllyCallbacks(callback)
    );
  }

  post(path, ...callback) {
    this.router.post(
      path,
      this.generateCustomResponses,
      this.apllyCallbacks(callback)
    );
  }

  put(path, ...callback) {
    this.router.put(
      path,
      this.generateCustomResponses,
      this.apllyCallbacks(callback)
    );
  }

  delete(path, ...callback) {
    this.router.delete(
      path,
      this.generateCustomResponses,
      this.apllyCallbacks(callback)
    );
  }

  generateCustomResponses(_req, res, next) {
    res.sendSuccess = (status, message) =>
      res.status(status).json({
        success: true,
        message,
      });
    res.sendSuccessWithPayload = (status, payload) =>
      res.status(status).json({
        success: true,
        payload,
      });
    next();
  }

  apllyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, [...params]);
      } catch (error) {
        error.service = this.serviceName;
        params[2](error);
      }
    });
  }
}
