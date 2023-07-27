import { Router } from "express";
import { passportCall } from "../../auth/services/passportAuthService.js";

export default class BaseRouter {
  constructor(serviceName, constrollers = {}) {
    this.serviceName = serviceName;
    this.controllers = constrollers;
    this.router = Router();
    this.initRoutes();
  }

  getRouter() {
    return this.router;
  }

  initRoutes() {}

  get(path, policies, ...callback) {
    this.router.get(
      path,
      this.generateCustomResponses,
      passportCall("jwt", { strategyType: "jwt" }),
      this.handlePolicies(policies),
      this.apllyCallbacks(callback)
    );
  }

  post(path, policies, ...callback) {
    this.router.post(
      path,
      this.generateCustomResponses,
      passportCall("jwt", { strategyType: "jwt" }),
      this.handlePolicies(policies),
      this.apllyCallbacks(callback)
    );
  }

  put(path, policies, ...callback) {
    this.router.put(
      path,
      this.generateCustomResponses,
      passportCall("jwt", { strategyType: "jwt" }),
      this.handlePolicies(policies),
      this.apllyCallbacks(callback)
    );
  }

  delete(path, policies, ...callback) {
    this.router.delete(
      path,
      this.generateCustomResponses,
      passportCall("jwt", { strategyType: "jwt" }),
      this.handlePolicies(policies),
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

  handlePolicies = (policies = []) => {
    return (req, res, next) => {
      if (policies[0] === "PUBLIC") return next();

      const user = req.user;
      if (policies[0] === "NO_AUTH" && user)
        return next({ message: "Unauthorized", status: 401 });
      if (policies[0] === "NO_AUTH" && !user) return next();

      if (!user) return next({ message: req.error, status: 401 });
      if (!policies.includes(user.role.toUpperCase()))
        return next({ message: "Forbidden", status: 403 });
      next();
    };
  };

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
