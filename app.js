Ext.Loader.setPath('ReefDashboard', 'app');

Ext.application({
    name: 'ReefDashboard',
    tabletStartupScreen: 'resources/images/tabletStartupScreen.png',
    phoneStartupScreen: 'resources/images/phoneStartupScreen.png',
    icon: 'resources/images/icon.png',
    glossOnIcon: false,

    requires: [
        'Ext.Anim',
        'Ext.DateExtras'
    ],

    controllers: [],
    models: [],
    stores: [],

    views: [
        'Main',
        'Settings'
    ]
});

Ext.require('ReefDashboard.store.SettingsStore');

Ext.onReady( function () {
    Deft.Injector.configure({
        settingsStore: 'ReefDashboard.store.SettingsStore'
//        contactStore: 'ContactsApp.store.MockContactStore'
    });

    Ext.Viewport.add({
        xtype: 'mainview'
    });

});


