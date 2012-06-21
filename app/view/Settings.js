Ext.define('ReefDashboard.view.Settings', {
    extend:'Ext.form.Panel',
    xtype:'settings',
    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.Password',
        'Ext.field.Slider'
    ],
    mixins:[ 'Deft.mixin.Controllable', 'Deft.mixin.Injectable' ],
    controller:'ReefDashboard.controller.SettingsController',

    inject: ['settingsStore'],

    config:{
        items:[
            {
                title:'Current Apex Settings',
                instructions:'All fields are required.',
                xtype:'fieldset',
                items:[
                    {
                        xtype:'textfield',
                        name:'url',
                        label:'URL'
                    },
                    {
                        xtype:'textfield',
                        name:'port',
                        label:'Port'
                    },
                    {
                        xtype:'textfield',
                        name:'username',
                        label:'Username'
                    },
                    {
                        xtype:'passwordfield',
                        name:'password',
                        label:'Password'
                    },
                    {
                        xtype:'sliderfield',
                        name: 'refreshRate',
                        labelWrap: true,
                        itemId:'slider',
                        label:'Refresh Rate <br>(5 minutes)',
                        value:5,
                        minValue:0,
                        maxValue:10
                    }
                ]
            },
            {
                xtype:'container',
                layout:{
                    type:'hbox',
                    align:'center',
                    pack:'end'
                },
                items:[
                    {
                        xtype:'button',
                        itemId:'resetButton',
                        ui:'action',
                        text:'Reset'
                    },
                    {
                        xtype:'button',
                        itemId:'saveButton',
                        ui:'action',
                        text:'Save'
                    }
                ]
            }
        ]}
});