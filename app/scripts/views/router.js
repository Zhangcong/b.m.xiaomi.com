/*
* router.js 路由设置
* */
define([
    'underscore',
    'backbone',
    'views/home/indexView',
    'views/home/yuyueView'
], function(_, Backbone, IndexView, YuyueView){

    var AppRouter = Backbone.Router.extend({
        routes: {
            'yuyue': 'showYuyue',
            '*actions': 'showHome'
        },
        initialize: function(){
        }
    });

    var init = function(){
        console.log('Router.js 执行init');

        var appRouter = new AppRouter;

        appRouter.on('route:showHome', function(actions){
            console.log('showHome actions: '+ actions);
            IndexView.render();
        });

        appRouter.on('route:showYuyue', function(){
            console.log('showYuyue');
            YuyueView.render();
        });

        Backbone.history.start();

    };

    return {
        init: init
    }
});