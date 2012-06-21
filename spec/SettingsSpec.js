describe('SettingsController', function () {
    var counter = 0;

    it('can reset the form data', function () {
        counter = counter + 2;   // counter was 0 before
        expect(counter).toEqual(2);
    });
});