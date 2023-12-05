import Event from "sap/ui/base/Event";
import BaseController from "./BaseController";
import { login } from "../util/Auth";

/**
 * @namespace apnv.dev.controller
 */
export default class Login extends BaseController {

    public onLoginPress(oEvent: Event) {
        login('123456abcde')
        this.navTo('main')
    }
}