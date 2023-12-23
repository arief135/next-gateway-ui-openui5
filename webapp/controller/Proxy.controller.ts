import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";

/**
 * @namespace apnv.dev.controller
 */
export default class Proxy extends BaseController {
    
    private oModel: JSONModel;

    public onInit() {
		this.oModel = new JSONModel();
		this.oModel.loadData(sap.ui.require.toUrl("apnv/dev/model/proxy.json"), null, false);
		this.getView().setModel(this.oModel);
	}

}