var fetch = System.fetch;

System.fetch = function(load) {

  if(load.metadata.injectScript) {

    var head = document.getElementsByTagName('head')[0];

    return new Promise(function(resolve, reject) {
      var s = document.createElement('script');
      //s.async = true;

      function complete() {
        if (s.readyState && s.readyState != 'loaded' && s.readyState != 'complete')
          return;
        cleanup();
        resolve('');
      }

      function error(evt) {
        console.log('script inject error', evt)
        cleanup();
        reject(evt);
      }

      if (s.attachEvent) {
        s.attachEvent('onreadystatechange', complete);
      }
      else {
        s.addEventListener('load', complete, false);
        s.addEventListener('error', error, false);
      }

      s.src = load.address;
      document.head.appendChild(s);

      function cleanup() {
        if (s.detachEvent)
          s.detachEvent('onreadystatechange', complete);
        else {
          s.removeEventListener('load', complete, false);
          s.removeEventListener('error', error, false);
        }
        head.removeChild(s);
      }
    });

  } else {
    return fetch.call(this, load)

  }
};

module.exports = function(module, path){

  var config = {paths:{}, meta: {}}

  config.paths[module] = path
  config.meta[module] = {injectScript: true}

  System.config(config)
}