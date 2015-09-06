require.config({
    shim: {
        bootstrap: {deps: ['jquery'] }
    },
    paths: {
        jquery: 'https://code.jquery.com/jquery-2.1.4.min',
        bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min',
        backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min',
        underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min'
    }
});

require(['bootstrap']);
