/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["mypage/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
