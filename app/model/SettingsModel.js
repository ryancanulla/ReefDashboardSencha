Ext.define('ReefDashboard.model.SettingsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'url', 'port', 'username', 'password'],
        proxy: {
            type: 'localstorage',
            id: 'com.reefDash.settings'
        }
    }
});