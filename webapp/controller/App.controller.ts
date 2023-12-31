import { isAuthenticated } from "../util/Auth";
import BaseController from "./BaseController";

/**
 * @namespace apnv.dev.controller
 */
export default class App extends BaseController {
	public onInit(): void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

		if (!isAuthenticated()) {
			this.navTo('login')
		}

	}
}
