Ext.define("ReefDashboard.view.Main", {
    extend: "Ext.TabPanel",
    xtype: "mainview",

    config: {
        tabBarPosition: "bottom",
        items: [
            {
                xtype: "container",
                iconCls: "info",
                title: "Status",
                html: "Current Reef Status"
            },
            {
                xtype: "container",
                iconCls: "arrow_up",
                title: "Control",
                html: "Control Your Reef"
            },
            {
                xtype: "settings",
                iconCls: "settings",
                title: "Settings"
            }
        ]
    }

});
