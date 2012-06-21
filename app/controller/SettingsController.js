Ext.define('ReefDashboard.controller.SettingsController', {
    extend: 'Deft.mvc.ViewController',

    control: {
        form: 'fieldset',
        saveButton: {
            tap: 'saveSettings'
        },
        resetButton: {
            tap: 'resetForm'
        },
        slider: {
            change: 'updateSliderLabel'
        }
    },

    init: function() {
        console.log('init controller');

        this.callParent();
    },

    saveSettings: function(btn) {
        var form = this.getForm().up('formpanel');
        var values = form.getValues();
        console.log(values);
    },

    resetForm: function(btn) {
        var form = btn.up('formpanel');
        form.reset();
    },

    updateSliderLabel: function(sliderField, slider, thumb, newValue, oldValue, eOpts) {
        var newLabel;
        switch(newValue) {
            case 0:
                newLabel = 'Refresh Rate <br> ( never )';
                break;
            case 1:
                newLabel = 'Refresh Rate <br>( ' + newValue + ' minute )';
                break;
            default:
                newLabel = 'Refresh Rate <br>( ' + newValue + ' minutes )';
                break;
        }
        sliderField.setLabel(newLabel);
    }
});