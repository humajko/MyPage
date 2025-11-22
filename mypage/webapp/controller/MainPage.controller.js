sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("mypage.controller.MainPage", {
        onInit() {

            //Fotka na Avatar
            var oJsonModel = new JSONModel({
				AvatarPicture: sap.ui.require.toUrl("mypage/images/ja_avatar.jpg"),
                flagSK: sap.ui.require.toUrl("mypage/images/flags/sk.svg"),
                flagEN: sap.ui.require.toUrl("mypage/images/flags/en.svg"),
                flagDE: sap.ui.require.toUrl("mypage/images/flags/de.svg"),
                logoSAP: sap.ui.require.toUrl("mypage/images/sap.png"),
			});
			this.getView().setModel(oJsonModel, "Pictures");

            //Nastavenie jazyka
            const lang = sap.ui.getCore().getConfiguration().getLanguage().toLowerCase();
            const cfgModel = new sap.ui.model.json.JSONModel({ lang: lang.split("-")[0] });
            this.getView().setModel(cfgModel, "cfg");
        },
        openURL: function (oEvent) {
            const sPath = oEvent.getSource().getBindingContextPath();
            const sUrl = this.getView().getModel("certifications").getContext(sPath).getProperty("url")
            window.open(sUrl, "_blank");
        }
    });
});