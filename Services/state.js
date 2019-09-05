
var state = (() => {

  let _loggedIn = [];
  return class {
      static get logged(){
          return _loggedIn;
      }
  };
})();