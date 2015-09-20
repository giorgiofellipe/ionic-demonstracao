angular.module('starter.services', ['ngResource'])
  .factory('musicList', function($resource) {
    return $resource('music.json', {}, {
      'query':  {method:'GET', isArray:true}
    });
  });
