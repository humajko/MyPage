sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("mypage.controller.MainPage", {
        onInit() {
            var oJsonModel = new JSONModel({
				AvatarPicture: sap.ui.require.toUrl("images/ja_avatar.jpg")
			});
			this.getView().setModel(oJsonModel, "Pictures");
        }
    });
});