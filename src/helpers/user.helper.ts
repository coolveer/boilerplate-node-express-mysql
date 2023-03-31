import { Response } from 'express';
import { JsonObject } from 'swagger-ui-express';
const { STATUS, RES_MSG } = require('../responses/const.responses');
import { Users } from '../models/User';
import { makeid } from '../utils/helper.utils';
import { responseHelper } from '../responses';

class UserHelper {
  public data: JsonObject;

  async userSignUp(
    res: Response,
    payload: {
      name: string;
      email: string;
      password: string;
      wallet: string;
    }
  ) {
    try {
      payload.wallet = makeid(32);
      const user = await Users.create(payload);
      delete user.id;
      this.data = {
        error: false,
        data: user,
        message: RES_MSG.CREATEUSER,
        status: STATUS.SUCCESS
      };
      return responseHelper.success(res, this.data);
    } catch (err) {
      this.data = {
        error: true,
        data: {},
        message: RES_MSG.SERVER_ERROR,
        status: STATUS.INTERNALSERVER
      };
      return responseHelper.error(res, this.data);
    }
  }
}

export default new UserHelper();
