const EnhavoEncore = require('@enhavo/core/EnhavoEncore');
const AppPackage = require('@enhavo/app/encore/AppPackage');
const AppThemePackage = require('@enhavo/app/encore/AppThemePackage');
const FormPackage = require('@enhavo/form/encore/FormPackage');

EnhavoEncore.add(
    'enhavo',
    [
        new AppPackage(),
        new FormPackage(),
    ],
    Encore => {},
    config => {
        // Enable watch in enhavo assets/node_modules/@enhavo
        config.watchOptions = {
            ignored: [
                /node_modules([\\]+|\/)+(?!@enhavo)/,
            ]
        }
    }
);

EnhavoEncore.add(
    'theme',
    [ new AppThemePackage() ],
    Encore => {
        Encore
            .addEntry('base', './assets/theme/base')
    },
    config => {}
);

module.exports = EnhavoEncore.export();
