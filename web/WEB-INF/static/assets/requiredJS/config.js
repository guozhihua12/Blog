requirejs.config({
    baseUrl: 'assets/requiredJS',
    paths: {
        jquery: ['http://libs.useso.com/js/jquery/1.11.1/jquery.min','jquery.min'],
        underscore:['http://www.css88.com/doc/underscore/underscore-min','underscore-min'],
        plugins: 'plugins',
        template:['template.min'],
        template_native:'template-native',
        mediaelement_and_player: 'mediaelement-and-player.min',
        isotope: 'isotope.pkgd.min',
        functions: 'functions',
        utils:'utils',
        text:'text',
        paging:'paging',
        renderUtils:"renderUtils",
        loadHead:'module/loadHead',
        loadBlogList:"module/loadIBlogList",
        sweetAlert:"sweet-alert.min"
    },
    shim: {
        plugins: {
            deps: ['jquery'],
            exports: 'plugins'
        },
        mediaelement_and_player: {
            deps: ['jquery'],
            exports: 'mediaelement_and_player'
        },
        isotope: {
            deps: ['jquery'],
            exports: 'isotope'
        },
        utils:{
            deps: ['jquery'],
            exports: 'utils'
        },
        functions: {
            deps: ['jquery','loadHead'],
            exports: 'functions'
        },
        paging:{
            deps:['jquery'],
            exports:'paging'
        },
        messenger:{
            deps:['jquery'],
            exports:'messenger'
        },
        messenger_theme:{
            deps:['messenger'],
            exports:'messenger_theme'
        }
    }
});