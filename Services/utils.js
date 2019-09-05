type = ['primary', 'info', 'success', 'warning', 'danger'];

utils = {

    getViewName: function(){

      if(location.href.split("#")[1] === undefined){
        location.hash = "dashboard";
        return "dashboard";
      }
      else {
        return location.href.split("#")[1]
      }
    },

    getJsUrl: function(viewName) {

      return location.href.split("#")[0] + "views/handlers/" + viewName + ".js";

    },

    sleepAsync : function(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    })},

    sleep: function(ms) {

      var startPoint = new Date().getTime()
      while (new Date().getTime() - startPoint <= ms) {}
      
    },

    showNotification: function(from, align, msg) {
      color = Math.floor((Math.random() * 4) + 1);
  
      $.notify({
        icon: "nc-icon nc-bell-55",
        message: msg
  
      }, {
        type: type[0],
        allow_dismiss: true,
        timer: 4000,
        placement: {
          from: from,
          align: align
        }
      });
    },

    updateNavBarTitle: function(title) {

      $(".navbar-brand").html(title);
      
    },

  };
