'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async login() {
    this.ctx.body = {
      status:'ok',
      currentAuthority:'admin'
    };
  }
  async currentUser() {
    this.ctx.body = {
      name: '庄总',
      userid: '1'
    }
  }
}

module.exports = AdminController;
