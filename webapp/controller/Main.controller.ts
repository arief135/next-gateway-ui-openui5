import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import ToolPage from "sap/tnt/ToolPage";
import NavContainer from "sap/m/NavContainer";
import { logout } from "../util/Auth";

/**
 * @namespace apnv.dev.controller
 */
export default class Main extends BaseController {

	private oModel: JSONModel;

	public onInit() {
		this.oModel = new JSONModel();
		this.oModel.loadData(sap.ui.require.toUrl("apnv/dev/model/model.json"), null, false);
		this.getView().setModel(this.oModel);
	}

	public onItemSelect(oEvent: any) {
		const item = oEvent.getParameter('item');

		if (item.getKey() == 'logoff') {
			logout()
			window.location.href = '/index.html'
		} else {
			const container = this.byId("pageContainer") as NavContainer
			container.to(this.getView().createId(item.getKey()));
		}
	}

	public onMenuButtonPress() {
		const toolPage = this.byId("toolPage") as ToolPage;
		toolPage.setSideExpanded(!toolPage.getSideExpanded());
	}
}
