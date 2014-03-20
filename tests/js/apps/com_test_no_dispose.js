define('com_test_no_dispose', ['F2'], function(F2) {

	function AppClass(instanceId, appConfig, data, root) {
		this.instanceId = instanceId;
		this.appConfig = appConfig;
		this.data = data;
		this.root = root;

		if (!window.test.com_test_no_dispose) {
			window.test.com_test_no_dispose = instanceId;
		}
	}

	return AppClass;

});