'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543581465464_616';

  // add your config here
  
  config.middleware = [];
  config.security = {
    csrf:{
      enable:false,
      ignoreJSON: true
    },
    domainWhiteList: [ 'http://localhost:8000' ]
  }

  return config;
};
