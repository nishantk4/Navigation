sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("nav1.nav1.controller.View1", {
	onClick: function (){
		
	this.getOwnerComponent().getRouter().navTo("view2");
	}
	});
});