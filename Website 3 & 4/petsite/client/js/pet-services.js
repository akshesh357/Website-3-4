// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }
  // need to use the urlBase as the base to handle multiple
  // loopback servers behind a proxy/gateway where the host
  // would be the same.
  var urlBaseHost = getHost(urlBase) ? urlBase : location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Users",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Users/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$verify
             * @methodOf lbServices.User
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Users/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#changePassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Users/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#setPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Users/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Message
 * @header lbServices.Message
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Message` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Message",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Messages/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Message#greet
             * @methodOf lbServices.Message
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `msg` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `greeting` – `{string=}` -
             */
            "greet": {
              url: urlBase + "/Messages/greet",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Message#modelName
        * @propertyOf lbServices.Message
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Message`.
        */
        R.modelName = "Message";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Pet_user
 * @header lbServices.Pet_user
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Pet_user` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Pet_user",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/pet_users/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Pet_user.petTypes.findById() instead.
            "prototype$__findById__petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/petTypes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Pet_user.petTypes.destroyById() instead.
            "prototype$__destroyById__petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/petTypes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_user.petTypes.updateById() instead.
            "prototype$__updateById__petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/petTypes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.findById() instead.
            "prototype$__findById__userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/userServiceProviders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.destroyById() instead.
            "prototype$__destroyById__userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/userServiceProviders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.updateById() instead.
            "prototype$__updateById__userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/userServiceProviders/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pet_user.petTypes() instead.
            "prototype$__get__petTypes": {
              isArray: true,
              url: urlBase + "/pet_users/:id/petTypes",
              method: "GET",
            },

            // INTERNAL. Use Pet_user.petTypes.create() instead.
            "prototype$__create__petTypes": {
              url: urlBase + "/pet_users/:id/petTypes",
              method: "POST",
            },

            // INTERNAL. Use Pet_user.petTypes.destroyAll() instead.
            "prototype$__delete__petTypes": {
              url: urlBase + "/pet_users/:id/petTypes",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_user.petTypes.count() instead.
            "prototype$__count__petTypes": {
              url: urlBase + "/pet_users/:id/petTypes/count",
              method: "GET",
            },

            // INTERNAL. Use Pet_user.userServiceProviders() instead.
            "prototype$__get__userServiceProviders": {
              isArray: true,
              url: urlBase + "/pet_users/:id/userServiceProviders",
              method: "GET",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.create() instead.
            "prototype$__create__userServiceProviders": {
              url: urlBase + "/pet_users/:id/userServiceProviders",
              method: "POST",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.destroyAll() instead.
            "prototype$__delete__userServiceProviders": {
              url: urlBase + "/pet_users/:id/userServiceProviders",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.count() instead.
            "prototype$__count__userServiceProviders": {
              url: urlBase + "/pet_users/:id/userServiceProviders/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#create
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/pet_users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#createMany
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/pet_users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#patchOrCreate
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/pet_users",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#replaceOrCreate
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/pet_users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#upsertWithWhere
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/pet_users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#exists
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/pet_users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#findById
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/pet_users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#replaceById
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/pet_users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#find
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/pet_users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#findOne
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/pet_users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#updateAll
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/pet_users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#deleteById
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/pet_users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#count
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/pet_users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#prototype$patchAttributes
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/pet_users/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#createChangeStream
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/pet_users/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Pet_type.petUsers.findById() instead.
            "::findById::Pet_type::petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/petUsers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Pet_type.petUsers.destroyById() instead.
            "::destroyById::Pet_type::petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/petUsers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_type.petUsers.updateById() instead.
            "::updateById::Pet_type::petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/petUsers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pet_type.petUsers() instead.
            "::get::Pet_type::petUsers": {
              isArray: true,
              url: urlBase + "/pet_types/:id/petUsers",
              method: "GET",
            },

            // INTERNAL. Use Pet_type.petUsers.create() instead.
            "::create::Pet_type::petUsers": {
              url: urlBase + "/pet_types/:id/petUsers",
              method: "POST",
            },

            // INTERNAL. Use Pet_type.petUsers.createMany() instead.
            "::createMany::Pet_type::petUsers": {
              isArray: true,
              url: urlBase + "/pet_types/:id/petUsers",
              method: "POST",
            },

            // INTERNAL. Use Pet_type.petUsers.destroyAll() instead.
            "::delete::Pet_type::petUsers": {
              url: urlBase + "/pet_types/:id/petUsers",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_type.petUsers.count() instead.
            "::count::Pet_type::petUsers": {
              url: urlBase + "/pet_types/:id/petUsers/count",
              method: "GET",
            },

            // INTERNAL. Use User_service_provider.petUsers.findById() instead.
            "::findById::User_service_provider::petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/petUsers/:fk",
              method: "GET",
            },

            // INTERNAL. Use User_service_provider.petUsers.destroyById() instead.
            "::destroyById::User_service_provider::petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/petUsers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User_service_provider.petUsers.updateById() instead.
            "::updateById::User_service_provider::petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/petUsers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User_service_provider.petUsers() instead.
            "::get::User_service_provider::petUsers": {
              isArray: true,
              url: urlBase + "/user_service_providers/:id/petUsers",
              method: "GET",
            },

            // INTERNAL. Use User_service_provider.petUsers.create() instead.
            "::create::User_service_provider::petUsers": {
              url: urlBase + "/user_service_providers/:id/petUsers",
              method: "POST",
            },

            // INTERNAL. Use User_service_provider.petUsers.createMany() instead.
            "::createMany::User_service_provider::petUsers": {
              isArray: true,
              url: urlBase + "/user_service_providers/:id/petUsers",
              method: "POST",
            },

            // INTERNAL. Use User_service_provider.petUsers.destroyAll() instead.
            "::delete::User_service_provider::petUsers": {
              url: urlBase + "/user_service_providers/:id/petUsers",
              method: "DELETE",
            },

            // INTERNAL. Use User_service_provider.petUsers.count() instead.
            "::count::User_service_provider::petUsers": {
              url: urlBase + "/user_service_providers/:id/petUsers/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Pet_user#upsert
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#updateOrCreate
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#patchOrCreateWithWhere
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#update
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#destroyById
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#removeById
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_user#prototype$updateAttributes
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Pet_user#modelName
        * @propertyOf lbServices.Pet_user
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Pet_user`.
        */
        R.modelName = "Pet_user";

    /**
     * @ngdoc object
     * @name lbServices.Pet_user.petTypes
     * @header lbServices.Pet_user.petTypes
     * @object
     * @description
     *
     * The object `Pet_user.petTypes` groups methods
     * manipulating `Pet_type` instances related to `Pet_user`.
     *
     * Call {@link lbServices.Pet_user#petTypes Pet_user.petTypes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Pet_user#petTypes
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Queries petTypes of pet_user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R.petTypes = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::get::Pet_user::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.petTypes#count
             * @methodOf lbServices.Pet_user.petTypes
             *
             * @description
             *
             * Counts petTypes of pet_user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.petTypes.count = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::count::Pet_user::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.petTypes#create
             * @methodOf lbServices.Pet_user.petTypes
             *
             * @description
             *
             * Creates a new instance in petTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R.petTypes.create = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::create::Pet_user::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.petTypes#createMany
             * @methodOf lbServices.Pet_user.petTypes
             *
             * @description
             *
             * Creates a new instance in petTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R.petTypes.createMany = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::createMany::Pet_user::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.petTypes#destroyAll
             * @methodOf lbServices.Pet_user.petTypes
             *
             * @description
             *
             * Deletes all petTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.petTypes.destroyAll = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::delete::Pet_user::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.petTypes#destroyById
             * @methodOf lbServices.Pet_user.petTypes
             *
             * @description
             *
             * Delete a related item by id for petTypes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for petTypes
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.petTypes.destroyById = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::destroyById::Pet_user::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.petTypes#findById
             * @methodOf lbServices.Pet_user.petTypes
             *
             * @description
             *
             * Find a related item by id for petTypes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for petTypes
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R.petTypes.findById = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::findById::Pet_user::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.petTypes#updateById
             * @methodOf lbServices.Pet_user.petTypes
             *
             * @description
             *
             * Update a related item by id for petTypes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `fk` – `{*}` - Foreign key for petTypes
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R.petTypes.updateById = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::updateById::Pet_user::petTypes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Pet_user.userServiceProviders
     * @header lbServices.Pet_user.userServiceProviders
     * @object
     * @description
     *
     * The object `Pet_user.userServiceProviders` groups methods
     * manipulating `User_service_provider` instances related to `Pet_user`.
     *
     * Call {@link lbServices.Pet_user#userServiceProviders Pet_user.userServiceProviders()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Pet_user#userServiceProviders
             * @methodOf lbServices.Pet_user
             *
             * @description
             *
             * Queries userServiceProviders of pet_user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R.userServiceProviders = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::get::Pet_user::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.userServiceProviders#count
             * @methodOf lbServices.Pet_user.userServiceProviders
             *
             * @description
             *
             * Counts userServiceProviders of pet_user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.userServiceProviders.count = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::count::Pet_user::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.userServiceProviders#create
             * @methodOf lbServices.Pet_user.userServiceProviders
             *
             * @description
             *
             * Creates a new instance in userServiceProviders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R.userServiceProviders.create = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::create::Pet_user::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.userServiceProviders#createMany
             * @methodOf lbServices.Pet_user.userServiceProviders
             *
             * @description
             *
             * Creates a new instance in userServiceProviders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R.userServiceProviders.createMany = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::createMany::Pet_user::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.userServiceProviders#destroyAll
             * @methodOf lbServices.Pet_user.userServiceProviders
             *
             * @description
             *
             * Deletes all userServiceProviders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.userServiceProviders.destroyAll = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::delete::Pet_user::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.userServiceProviders#destroyById
             * @methodOf lbServices.Pet_user.userServiceProviders
             *
             * @description
             *
             * Delete a related item by id for userServiceProviders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for userServiceProviders
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.userServiceProviders.destroyById = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::destroyById::Pet_user::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.userServiceProviders#findById
             * @methodOf lbServices.Pet_user.userServiceProviders
             *
             * @description
             *
             * Find a related item by id for userServiceProviders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for userServiceProviders
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R.userServiceProviders.findById = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::findById::Pet_user::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_user.userServiceProviders#updateById
             * @methodOf lbServices.Pet_user.userServiceProviders
             *
             * @description
             *
             * Update a related item by id for userServiceProviders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_user id
             *
             *  - `fk` – `{*}` - Foreign key for userServiceProviders
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R.userServiceProviders.updateById = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::updateById::Pet_user::userServiceProviders"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Pet_type
 * @header lbServices.Pet_type
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Pet_type` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Pet_type",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/pet_types/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Pet_type.petUsers.findById() instead.
            "prototype$__findById__petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/petUsers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Pet_type.petUsers.destroyById() instead.
            "prototype$__destroyById__petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/petUsers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_type.petUsers.updateById() instead.
            "prototype$__updateById__petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/petUsers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pet_type.providers.findById() instead.
            "prototype$__findById__providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/providers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Pet_type.providers.destroyById() instead.
            "prototype$__destroyById__providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/providers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_type.providers.updateById() instead.
            "prototype$__updateById__providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/providers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pet_type.petUsers() instead.
            "prototype$__get__petUsers": {
              isArray: true,
              url: urlBase + "/pet_types/:id/petUsers",
              method: "GET",
            },

            // INTERNAL. Use Pet_type.petUsers.create() instead.
            "prototype$__create__petUsers": {
              url: urlBase + "/pet_types/:id/petUsers",
              method: "POST",
            },

            // INTERNAL. Use Pet_type.petUsers.destroyAll() instead.
            "prototype$__delete__petUsers": {
              url: urlBase + "/pet_types/:id/petUsers",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_type.petUsers.count() instead.
            "prototype$__count__petUsers": {
              url: urlBase + "/pet_types/:id/petUsers/count",
              method: "GET",
            },

            // INTERNAL. Use Pet_type.providers() instead.
            "prototype$__get__providers": {
              isArray: true,
              url: urlBase + "/pet_types/:id/providers",
              method: "GET",
            },

            // INTERNAL. Use Pet_type.providers.create() instead.
            "prototype$__create__providers": {
              url: urlBase + "/pet_types/:id/providers",
              method: "POST",
            },

            // INTERNAL. Use Pet_type.providers.destroyAll() instead.
            "prototype$__delete__providers": {
              url: urlBase + "/pet_types/:id/providers",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_type.providers.count() instead.
            "prototype$__count__providers": {
              url: urlBase + "/pet_types/:id/providers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#create
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/pet_types",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#createMany
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/pet_types",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#patchOrCreate
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/pet_types",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#replaceOrCreate
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/pet_types/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#upsertWithWhere
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/pet_types/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#exists
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/pet_types/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#findById
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/pet_types/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#replaceById
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/pet_types/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#find
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/pet_types",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#findOne
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/pet_types/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#updateAll
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/pet_types/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#deleteById
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/pet_types/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#count
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/pet_types/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#prototype$patchAttributes
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/pet_types/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#createChangeStream
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/pet_types/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Pet_user.petTypes.findById() instead.
            "::findById::Pet_user::petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/petTypes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Pet_user.petTypes.destroyById() instead.
            "::destroyById::Pet_user::petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/petTypes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_user.petTypes.updateById() instead.
            "::updateById::Pet_user::petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/petTypes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pet_user.petTypes() instead.
            "::get::Pet_user::petTypes": {
              isArray: true,
              url: urlBase + "/pet_users/:id/petTypes",
              method: "GET",
            },

            // INTERNAL. Use Pet_user.petTypes.create() instead.
            "::create::Pet_user::petTypes": {
              url: urlBase + "/pet_users/:id/petTypes",
              method: "POST",
            },

            // INTERNAL. Use Pet_user.petTypes.createMany() instead.
            "::createMany::Pet_user::petTypes": {
              isArray: true,
              url: urlBase + "/pet_users/:id/petTypes",
              method: "POST",
            },

            // INTERNAL. Use Pet_user.petTypes.destroyAll() instead.
            "::delete::Pet_user::petTypes": {
              url: urlBase + "/pet_users/:id/petTypes",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_user.petTypes.count() instead.
            "::count::Pet_user::petTypes": {
              url: urlBase + "/pet_users/:id/petTypes/count",
              method: "GET",
            },

            // INTERNAL. Use Provider.petTypes.findById() instead.
            "::findById::Provider::petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/petTypes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Provider.petTypes.destroyById() instead.
            "::destroyById::Provider::petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/petTypes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.petTypes.updateById() instead.
            "::updateById::Provider::petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/petTypes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Provider.petTypes() instead.
            "::get::Provider::petTypes": {
              isArray: true,
              url: urlBase + "/providers/:id/petTypes",
              method: "GET",
            },

            // INTERNAL. Use Provider.petTypes.create() instead.
            "::create::Provider::petTypes": {
              url: urlBase + "/providers/:id/petTypes",
              method: "POST",
            },

            // INTERNAL. Use Provider.petTypes.createMany() instead.
            "::createMany::Provider::petTypes": {
              isArray: true,
              url: urlBase + "/providers/:id/petTypes",
              method: "POST",
            },

            // INTERNAL. Use Provider.petTypes.destroyAll() instead.
            "::delete::Provider::petTypes": {
              url: urlBase + "/providers/:id/petTypes",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.petTypes.count() instead.
            "::count::Provider::petTypes": {
              url: urlBase + "/providers/:id/petTypes/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Pet_type#upsert
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#updateOrCreate
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#patchOrCreateWithWhere
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#update
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#destroyById
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#removeById
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Pet_type#prototype$updateAttributes
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Pet_type#modelName
        * @propertyOf lbServices.Pet_type
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Pet_type`.
        */
        R.modelName = "Pet_type";

    /**
     * @ngdoc object
     * @name lbServices.Pet_type.petUsers
     * @header lbServices.Pet_type.petUsers
     * @object
     * @description
     *
     * The object `Pet_type.petUsers` groups methods
     * manipulating `Pet_user` instances related to `Pet_type`.
     *
     * Call {@link lbServices.Pet_type#petUsers Pet_type.petUsers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Pet_type#petUsers
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Queries petUsers of pet_type.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R.petUsers = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::get::Pet_type::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.petUsers#count
             * @methodOf lbServices.Pet_type.petUsers
             *
             * @description
             *
             * Counts petUsers of pet_type.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.petUsers.count = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::count::Pet_type::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.petUsers#create
             * @methodOf lbServices.Pet_type.petUsers
             *
             * @description
             *
             * Creates a new instance in petUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R.petUsers.create = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::create::Pet_type::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.petUsers#createMany
             * @methodOf lbServices.Pet_type.petUsers
             *
             * @description
             *
             * Creates a new instance in petUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R.petUsers.createMany = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::createMany::Pet_type::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.petUsers#destroyAll
             * @methodOf lbServices.Pet_type.petUsers
             *
             * @description
             *
             * Deletes all petUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.petUsers.destroyAll = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::delete::Pet_type::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.petUsers#destroyById
             * @methodOf lbServices.Pet_type.petUsers
             *
             * @description
             *
             * Delete a related item by id for petUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for petUsers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.petUsers.destroyById = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::destroyById::Pet_type::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.petUsers#findById
             * @methodOf lbServices.Pet_type.petUsers
             *
             * @description
             *
             * Find a related item by id for petUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for petUsers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R.petUsers.findById = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::findById::Pet_type::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.petUsers#updateById
             * @methodOf lbServices.Pet_type.petUsers
             *
             * @description
             *
             * Update a related item by id for petUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `fk` – `{*}` - Foreign key for petUsers
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R.petUsers.updateById = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::updateById::Pet_type::petUsers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Pet_type.providers
     * @header lbServices.Pet_type.providers
     * @object
     * @description
     *
     * The object `Pet_type.providers` groups methods
     * manipulating `Provider` instances related to `Pet_type`.
     *
     * Call {@link lbServices.Pet_type#providers Pet_type.providers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Pet_type#providers
             * @methodOf lbServices.Pet_type
             *
             * @description
             *
             * Queries providers of pet_type.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::get::Pet_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.providers#count
             * @methodOf lbServices.Pet_type.providers
             *
             * @description
             *
             * Counts providers of pet_type.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.providers.count = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::count::Pet_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.providers#create
             * @methodOf lbServices.Pet_type.providers
             *
             * @description
             *
             * Creates a new instance in providers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.create = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::create::Pet_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.providers#createMany
             * @methodOf lbServices.Pet_type.providers
             *
             * @description
             *
             * Creates a new instance in providers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.createMany = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::createMany::Pet_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.providers#destroyAll
             * @methodOf lbServices.Pet_type.providers
             *
             * @description
             *
             * Deletes all providers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.providers.destroyAll = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::delete::Pet_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.providers#destroyById
             * @methodOf lbServices.Pet_type.providers
             *
             * @description
             *
             * Delete a related item by id for providers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for providers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.providers.destroyById = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::destroyById::Pet_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.providers#findById
             * @methodOf lbServices.Pet_type.providers
             *
             * @description
             *
             * Find a related item by id for providers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for providers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.findById = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::findById::Pet_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Pet_type.providers#updateById
             * @methodOf lbServices.Pet_type.providers
             *
             * @description
             *
             * Update a related item by id for providers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - pet_type id
             *
             *  - `fk` – `{*}` - Foreign key for providers
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.updateById = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::updateById::Pet_type::providers"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Provider
 * @header lbServices.Provider
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Provider` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Provider",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/providers/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Provider.petTypes.findById() instead.
            "prototype$__findById__petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/petTypes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Provider.petTypes.destroyById() instead.
            "prototype$__destroyById__petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/petTypes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.petTypes.updateById() instead.
            "prototype$__updateById__petTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/petTypes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Provider.providerTypes.findById() instead.
            "prototype$__findById__providerTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/providerTypes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Provider.providerTypes.destroyById() instead.
            "prototype$__destroyById__providerTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/providerTypes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.providerTypes.updateById() instead.
            "prototype$__updateById__providerTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/providerTypes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Provider.userServiceProviders.findById() instead.
            "prototype$__findById__userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/userServiceProviders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Provider.userServiceProviders.destroyById() instead.
            "prototype$__destroyById__userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/userServiceProviders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.userServiceProviders.updateById() instead.
            "prototype$__updateById__userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/userServiceProviders/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Provider.petTypes() instead.
            "prototype$__get__petTypes": {
              isArray: true,
              url: urlBase + "/providers/:id/petTypes",
              method: "GET",
            },

            // INTERNAL. Use Provider.petTypes.create() instead.
            "prototype$__create__petTypes": {
              url: urlBase + "/providers/:id/petTypes",
              method: "POST",
            },

            // INTERNAL. Use Provider.petTypes.destroyAll() instead.
            "prototype$__delete__petTypes": {
              url: urlBase + "/providers/:id/petTypes",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.petTypes.count() instead.
            "prototype$__count__petTypes": {
              url: urlBase + "/providers/:id/petTypes/count",
              method: "GET",
            },

            // INTERNAL. Use Provider.providerTypes() instead.
            "prototype$__get__providerTypes": {
              isArray: true,
              url: urlBase + "/providers/:id/providerTypes",
              method: "GET",
            },

            // INTERNAL. Use Provider.providerTypes.create() instead.
            "prototype$__create__providerTypes": {
              url: urlBase + "/providers/:id/providerTypes",
              method: "POST",
            },

            // INTERNAL. Use Provider.providerTypes.destroyAll() instead.
            "prototype$__delete__providerTypes": {
              url: urlBase + "/providers/:id/providerTypes",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.providerTypes.count() instead.
            "prototype$__count__providerTypes": {
              url: urlBase + "/providers/:id/providerTypes/count",
              method: "GET",
            },

            // INTERNAL. Use Provider.userServiceProviders() instead.
            "prototype$__get__userServiceProviders": {
              isArray: true,
              url: urlBase + "/providers/:id/userServiceProviders",
              method: "GET",
            },

            // INTERNAL. Use Provider.userServiceProviders.create() instead.
            "prototype$__create__userServiceProviders": {
              url: urlBase + "/providers/:id/userServiceProviders",
              method: "POST",
            },

            // INTERNAL. Use Provider.userServiceProviders.destroyAll() instead.
            "prototype$__delete__userServiceProviders": {
              url: urlBase + "/providers/:id/userServiceProviders",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.userServiceProviders.count() instead.
            "prototype$__count__userServiceProviders": {
              url: urlBase + "/providers/:id/userServiceProviders/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#create
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/providers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#createMany
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/providers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#patchOrCreate
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/providers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#replaceOrCreate
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/providers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#upsertWithWhere
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/providers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#exists
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/providers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#findById
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/providers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#replaceById
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/providers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#find
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/providers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#findOne
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/providers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#updateAll
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/providers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#deleteById
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/providers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#count
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/providers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#prototype$patchAttributes
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/providers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider#createChangeStream
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/providers/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Pet_type.providers.findById() instead.
            "::findById::Pet_type::providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/providers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Pet_type.providers.destroyById() instead.
            "::destroyById::Pet_type::providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/providers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_type.providers.updateById() instead.
            "::updateById::Pet_type::providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_types/:id/providers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pet_type.providers() instead.
            "::get::Pet_type::providers": {
              isArray: true,
              url: urlBase + "/pet_types/:id/providers",
              method: "GET",
            },

            // INTERNAL. Use Pet_type.providers.create() instead.
            "::create::Pet_type::providers": {
              url: urlBase + "/pet_types/:id/providers",
              method: "POST",
            },

            // INTERNAL. Use Pet_type.providers.createMany() instead.
            "::createMany::Pet_type::providers": {
              isArray: true,
              url: urlBase + "/pet_types/:id/providers",
              method: "POST",
            },

            // INTERNAL. Use Pet_type.providers.destroyAll() instead.
            "::delete::Pet_type::providers": {
              url: urlBase + "/pet_types/:id/providers",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_type.providers.count() instead.
            "::count::Pet_type::providers": {
              url: urlBase + "/pet_types/:id/providers/count",
              method: "GET",
            },

            // INTERNAL. Use Provider_type.providers.findById() instead.
            "::findById::Provider_type::providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/provider_types/:id/providers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Provider_type.providers.destroyById() instead.
            "::destroyById::Provider_type::providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/provider_types/:id/providers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Provider_type.providers.updateById() instead.
            "::updateById::Provider_type::providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/provider_types/:id/providers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Provider_type.providers() instead.
            "::get::Provider_type::providers": {
              isArray: true,
              url: urlBase + "/provider_types/:id/providers",
              method: "GET",
            },

            // INTERNAL. Use Provider_type.providers.create() instead.
            "::create::Provider_type::providers": {
              url: urlBase + "/provider_types/:id/providers",
              method: "POST",
            },

            // INTERNAL. Use Provider_type.providers.createMany() instead.
            "::createMany::Provider_type::providers": {
              isArray: true,
              url: urlBase + "/provider_types/:id/providers",
              method: "POST",
            },

            // INTERNAL. Use Provider_type.providers.destroyAll() instead.
            "::delete::Provider_type::providers": {
              url: urlBase + "/provider_types/:id/providers",
              method: "DELETE",
            },

            // INTERNAL. Use Provider_type.providers.count() instead.
            "::count::Provider_type::providers": {
              url: urlBase + "/provider_types/:id/providers/count",
              method: "GET",
            },

            // INTERNAL. Use User_service_provider.providers.findById() instead.
            "::findById::User_service_provider::providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/providers/:fk",
              method: "GET",
            },

            // INTERNAL. Use User_service_provider.providers.destroyById() instead.
            "::destroyById::User_service_provider::providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/providers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User_service_provider.providers.updateById() instead.
            "::updateById::User_service_provider::providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/providers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User_service_provider.providers() instead.
            "::get::User_service_provider::providers": {
              isArray: true,
              url: urlBase + "/user_service_providers/:id/providers",
              method: "GET",
            },

            // INTERNAL. Use User_service_provider.providers.create() instead.
            "::create::User_service_provider::providers": {
              url: urlBase + "/user_service_providers/:id/providers",
              method: "POST",
            },

            // INTERNAL. Use User_service_provider.providers.createMany() instead.
            "::createMany::User_service_provider::providers": {
              isArray: true,
              url: urlBase + "/user_service_providers/:id/providers",
              method: "POST",
            },

            // INTERNAL. Use User_service_provider.providers.destroyAll() instead.
            "::delete::User_service_provider::providers": {
              url: urlBase + "/user_service_providers/:id/providers",
              method: "DELETE",
            },

            // INTERNAL. Use User_service_provider.providers.count() instead.
            "::count::User_service_provider::providers": {
              url: urlBase + "/user_service_providers/:id/providers/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Provider#upsert
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Provider#updateOrCreate
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Provider#patchOrCreateWithWhere
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Provider#update
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Provider#destroyById
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Provider#removeById
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Provider#prototype$updateAttributes
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Provider#modelName
        * @propertyOf lbServices.Provider
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Provider`.
        */
        R.modelName = "Provider";

    /**
     * @ngdoc object
     * @name lbServices.Provider.petTypes
     * @header lbServices.Provider.petTypes
     * @object
     * @description
     *
     * The object `Provider.petTypes` groups methods
     * manipulating `Pet_type` instances related to `Provider`.
     *
     * Call {@link lbServices.Provider#petTypes Provider.petTypes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Provider#petTypes
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Queries petTypes of provider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R.petTypes = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::get::Provider::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.petTypes#count
             * @methodOf lbServices.Provider.petTypes
             *
             * @description
             *
             * Counts petTypes of provider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.petTypes.count = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::count::Provider::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.petTypes#create
             * @methodOf lbServices.Provider.petTypes
             *
             * @description
             *
             * Creates a new instance in petTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R.petTypes.create = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::create::Provider::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.petTypes#createMany
             * @methodOf lbServices.Provider.petTypes
             *
             * @description
             *
             * Creates a new instance in petTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R.petTypes.createMany = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::createMany::Provider::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.petTypes#destroyAll
             * @methodOf lbServices.Provider.petTypes
             *
             * @description
             *
             * Deletes all petTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.petTypes.destroyAll = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::delete::Provider::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.petTypes#destroyById
             * @methodOf lbServices.Provider.petTypes
             *
             * @description
             *
             * Delete a related item by id for petTypes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for petTypes
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.petTypes.destroyById = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::destroyById::Provider::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.petTypes#findById
             * @methodOf lbServices.Provider.petTypes
             *
             * @description
             *
             * Find a related item by id for petTypes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for petTypes
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R.petTypes.findById = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::findById::Provider::petTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.petTypes#updateById
             * @methodOf lbServices.Provider.petTypes
             *
             * @description
             *
             * Update a related item by id for petTypes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `fk` – `{*}` - Foreign key for petTypes
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_type` object.)
             * </em>
             */
        R.petTypes.updateById = function() {
          var TargetResource = $injector.get("Pet_type");
          var action = TargetResource["::updateById::Provider::petTypes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Provider.providerTypes
     * @header lbServices.Provider.providerTypes
     * @object
     * @description
     *
     * The object `Provider.providerTypes` groups methods
     * manipulating `Provider_type` instances related to `Provider`.
     *
     * Call {@link lbServices.Provider#providerTypes Provider.providerTypes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Provider#providerTypes
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Queries providerTypes of provider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
        R.providerTypes = function() {
          var TargetResource = $injector.get("Provider_type");
          var action = TargetResource["::get::Provider::providerTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.providerTypes#count
             * @methodOf lbServices.Provider.providerTypes
             *
             * @description
             *
             * Counts providerTypes of provider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.providerTypes.count = function() {
          var TargetResource = $injector.get("Provider_type");
          var action = TargetResource["::count::Provider::providerTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.providerTypes#create
             * @methodOf lbServices.Provider.providerTypes
             *
             * @description
             *
             * Creates a new instance in providerTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
        R.providerTypes.create = function() {
          var TargetResource = $injector.get("Provider_type");
          var action = TargetResource["::create::Provider::providerTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.providerTypes#createMany
             * @methodOf lbServices.Provider.providerTypes
             *
             * @description
             *
             * Creates a new instance in providerTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
        R.providerTypes.createMany = function() {
          var TargetResource = $injector.get("Provider_type");
          var action = TargetResource["::createMany::Provider::providerTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.providerTypes#destroyAll
             * @methodOf lbServices.Provider.providerTypes
             *
             * @description
             *
             * Deletes all providerTypes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.providerTypes.destroyAll = function() {
          var TargetResource = $injector.get("Provider_type");
          var action = TargetResource["::delete::Provider::providerTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.providerTypes#destroyById
             * @methodOf lbServices.Provider.providerTypes
             *
             * @description
             *
             * Delete a related item by id for providerTypes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for providerTypes
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.providerTypes.destroyById = function() {
          var TargetResource = $injector.get("Provider_type");
          var action = TargetResource["::destroyById::Provider::providerTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.providerTypes#findById
             * @methodOf lbServices.Provider.providerTypes
             *
             * @description
             *
             * Find a related item by id for providerTypes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for providerTypes
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
        R.providerTypes.findById = function() {
          var TargetResource = $injector.get("Provider_type");
          var action = TargetResource["::findById::Provider::providerTypes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.providerTypes#updateById
             * @methodOf lbServices.Provider.providerTypes
             *
             * @description
             *
             * Update a related item by id for providerTypes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `fk` – `{*}` - Foreign key for providerTypes
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
        R.providerTypes.updateById = function() {
          var TargetResource = $injector.get("Provider_type");
          var action = TargetResource["::updateById::Provider::providerTypes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Provider.userServiceProviders
     * @header lbServices.Provider.userServiceProviders
     * @object
     * @description
     *
     * The object `Provider.userServiceProviders` groups methods
     * manipulating `User_service_provider` instances related to `Provider`.
     *
     * Call {@link lbServices.Provider#userServiceProviders Provider.userServiceProviders()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Provider#userServiceProviders
             * @methodOf lbServices.Provider
             *
             * @description
             *
             * Queries userServiceProviders of provider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R.userServiceProviders = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::get::Provider::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.userServiceProviders#count
             * @methodOf lbServices.Provider.userServiceProviders
             *
             * @description
             *
             * Counts userServiceProviders of provider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.userServiceProviders.count = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::count::Provider::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.userServiceProviders#create
             * @methodOf lbServices.Provider.userServiceProviders
             *
             * @description
             *
             * Creates a new instance in userServiceProviders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R.userServiceProviders.create = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::create::Provider::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.userServiceProviders#createMany
             * @methodOf lbServices.Provider.userServiceProviders
             *
             * @description
             *
             * Creates a new instance in userServiceProviders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R.userServiceProviders.createMany = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::createMany::Provider::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.userServiceProviders#destroyAll
             * @methodOf lbServices.Provider.userServiceProviders
             *
             * @description
             *
             * Deletes all userServiceProviders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.userServiceProviders.destroyAll = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::delete::Provider::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.userServiceProviders#destroyById
             * @methodOf lbServices.Provider.userServiceProviders
             *
             * @description
             *
             * Delete a related item by id for userServiceProviders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for userServiceProviders
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.userServiceProviders.destroyById = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::destroyById::Provider::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.userServiceProviders#findById
             * @methodOf lbServices.Provider.userServiceProviders
             *
             * @description
             *
             * Find a related item by id for userServiceProviders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for userServiceProviders
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R.userServiceProviders.findById = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::findById::Provider::userServiceProviders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider.userServiceProviders#updateById
             * @methodOf lbServices.Provider.userServiceProviders
             *
             * @description
             *
             * Update a related item by id for userServiceProviders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider id
             *
             *  - `fk` – `{*}` - Foreign key for userServiceProviders
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R.userServiceProviders.updateById = function() {
          var TargetResource = $injector.get("User_service_provider");
          var action = TargetResource["::updateById::Provider::userServiceProviders"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Provider_type
 * @header lbServices.Provider_type
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Provider_type` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Provider_type",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/provider_types/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Provider_type.providers.findById() instead.
            "prototype$__findById__providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/provider_types/:id/providers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Provider_type.providers.destroyById() instead.
            "prototype$__destroyById__providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/provider_types/:id/providers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Provider_type.providers.updateById() instead.
            "prototype$__updateById__providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/provider_types/:id/providers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Provider_type.providers() instead.
            "prototype$__get__providers": {
              isArray: true,
              url: urlBase + "/provider_types/:id/providers",
              method: "GET",
            },

            // INTERNAL. Use Provider_type.providers.create() instead.
            "prototype$__create__providers": {
              url: urlBase + "/provider_types/:id/providers",
              method: "POST",
            },

            // INTERNAL. Use Provider_type.providers.destroyAll() instead.
            "prototype$__delete__providers": {
              url: urlBase + "/provider_types/:id/providers",
              method: "DELETE",
            },

            // INTERNAL. Use Provider_type.providers.count() instead.
            "prototype$__count__providers": {
              url: urlBase + "/provider_types/:id/providers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#create
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/provider_types",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#createMany
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/provider_types",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#patchOrCreate
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/provider_types",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#replaceOrCreate
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/provider_types/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#upsertWithWhere
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/provider_types/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#exists
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/provider_types/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#findById
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/provider_types/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#replaceById
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/provider_types/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#find
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/provider_types",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#findOne
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/provider_types/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#updateAll
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/provider_types/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#deleteById
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/provider_types/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#count
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/provider_types/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#prototype$patchAttributes
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/provider_types/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#createChangeStream
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/provider_types/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Provider.providerTypes.findById() instead.
            "::findById::Provider::providerTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/providerTypes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Provider.providerTypes.destroyById() instead.
            "::destroyById::Provider::providerTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/providerTypes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.providerTypes.updateById() instead.
            "::updateById::Provider::providerTypes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/providerTypes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Provider.providerTypes() instead.
            "::get::Provider::providerTypes": {
              isArray: true,
              url: urlBase + "/providers/:id/providerTypes",
              method: "GET",
            },

            // INTERNAL. Use Provider.providerTypes.create() instead.
            "::create::Provider::providerTypes": {
              url: urlBase + "/providers/:id/providerTypes",
              method: "POST",
            },

            // INTERNAL. Use Provider.providerTypes.createMany() instead.
            "::createMany::Provider::providerTypes": {
              isArray: true,
              url: urlBase + "/providers/:id/providerTypes",
              method: "POST",
            },

            // INTERNAL. Use Provider.providerTypes.destroyAll() instead.
            "::delete::Provider::providerTypes": {
              url: urlBase + "/providers/:id/providerTypes",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.providerTypes.count() instead.
            "::count::Provider::providerTypes": {
              url: urlBase + "/providers/:id/providerTypes/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Provider_type#upsert
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#updateOrCreate
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#patchOrCreateWithWhere
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#update
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#destroyById
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#removeById
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Provider_type#prototype$updateAttributes
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider_type` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Provider_type#modelName
        * @propertyOf lbServices.Provider_type
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Provider_type`.
        */
        R.modelName = "Provider_type";

    /**
     * @ngdoc object
     * @name lbServices.Provider_type.providers
     * @header lbServices.Provider_type.providers
     * @object
     * @description
     *
     * The object `Provider_type.providers` groups methods
     * manipulating `Provider` instances related to `Provider_type`.
     *
     * Call {@link lbServices.Provider_type#providers Provider_type.providers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Provider_type#providers
             * @methodOf lbServices.Provider_type
             *
             * @description
             *
             * Queries providers of provider_type.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::get::Provider_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider_type.providers#count
             * @methodOf lbServices.Provider_type.providers
             *
             * @description
             *
             * Counts providers of provider_type.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.providers.count = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::count::Provider_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider_type.providers#create
             * @methodOf lbServices.Provider_type.providers
             *
             * @description
             *
             * Creates a new instance in providers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider_type id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.create = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::create::Provider_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider_type.providers#createMany
             * @methodOf lbServices.Provider_type.providers
             *
             * @description
             *
             * Creates a new instance in providers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider_type id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.createMany = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::createMany::Provider_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider_type.providers#destroyAll
             * @methodOf lbServices.Provider_type.providers
             *
             * @description
             *
             * Deletes all providers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.providers.destroyAll = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::delete::Provider_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider_type.providers#destroyById
             * @methodOf lbServices.Provider_type.providers
             *
             * @description
             *
             * Delete a related item by id for providers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for providers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.providers.destroyById = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::destroyById::Provider_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider_type.providers#findById
             * @methodOf lbServices.Provider_type.providers
             *
             * @description
             *
             * Find a related item by id for providers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider_type id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for providers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.findById = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::findById::Provider_type::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Provider_type.providers#updateById
             * @methodOf lbServices.Provider_type.providers
             *
             * @description
             *
             * Update a related item by id for providers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - provider_type id
             *
             *  - `fk` – `{*}` - Foreign key for providers
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.updateById = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::updateById::Provider_type::providers"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.User_service_provider
 * @header lbServices.User_service_provider
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User_service_provider` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User_service_provider",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/user_service_providers/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use User_service_provider.petUsers.findById() instead.
            "prototype$__findById__petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/petUsers/:fk",
              method: "GET",
            },

            // INTERNAL. Use User_service_provider.petUsers.destroyById() instead.
            "prototype$__destroyById__petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/petUsers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User_service_provider.petUsers.updateById() instead.
            "prototype$__updateById__petUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/petUsers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User_service_provider.providers.findById() instead.
            "prototype$__findById__providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/providers/:fk",
              method: "GET",
            },

            // INTERNAL. Use User_service_provider.providers.destroyById() instead.
            "prototype$__destroyById__providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/providers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User_service_provider.providers.updateById() instead.
            "prototype$__updateById__providers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/user_service_providers/:id/providers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User_service_provider.petUsers() instead.
            "prototype$__get__petUsers": {
              isArray: true,
              url: urlBase + "/user_service_providers/:id/petUsers",
              method: "GET",
            },

            // INTERNAL. Use User_service_provider.petUsers.create() instead.
            "prototype$__create__petUsers": {
              url: urlBase + "/user_service_providers/:id/petUsers",
              method: "POST",
            },

            // INTERNAL. Use User_service_provider.petUsers.destroyAll() instead.
            "prototype$__delete__petUsers": {
              url: urlBase + "/user_service_providers/:id/petUsers",
              method: "DELETE",
            },

            // INTERNAL. Use User_service_provider.petUsers.count() instead.
            "prototype$__count__petUsers": {
              url: urlBase + "/user_service_providers/:id/petUsers/count",
              method: "GET",
            },

            // INTERNAL. Use User_service_provider.providers() instead.
            "prototype$__get__providers": {
              isArray: true,
              url: urlBase + "/user_service_providers/:id/providers",
              method: "GET",
            },

            // INTERNAL. Use User_service_provider.providers.create() instead.
            "prototype$__create__providers": {
              url: urlBase + "/user_service_providers/:id/providers",
              method: "POST",
            },

            // INTERNAL. Use User_service_provider.providers.destroyAll() instead.
            "prototype$__delete__providers": {
              url: urlBase + "/user_service_providers/:id/providers",
              method: "DELETE",
            },

            // INTERNAL. Use User_service_provider.providers.count() instead.
            "prototype$__count__providers": {
              url: urlBase + "/user_service_providers/:id/providers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#create
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/user_service_providers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#createMany
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/user_service_providers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#patchOrCreate
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/user_service_providers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#replaceOrCreate
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/user_service_providers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#upsertWithWhere
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/user_service_providers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#exists
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/user_service_providers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#findById
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/user_service_providers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#replaceById
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/user_service_providers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#find
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/user_service_providers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#findOne
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/user_service_providers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#updateAll
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/user_service_providers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#deleteById
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/user_service_providers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#count
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/user_service_providers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#prototype$patchAttributes
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/user_service_providers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#createChangeStream
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/user_service_providers/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.findById() instead.
            "::findById::Pet_user::userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/userServiceProviders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.destroyById() instead.
            "::destroyById::Pet_user::userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/userServiceProviders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.updateById() instead.
            "::updateById::Pet_user::userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/pet_users/:id/userServiceProviders/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Pet_user.userServiceProviders() instead.
            "::get::Pet_user::userServiceProviders": {
              isArray: true,
              url: urlBase + "/pet_users/:id/userServiceProviders",
              method: "GET",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.create() instead.
            "::create::Pet_user::userServiceProviders": {
              url: urlBase + "/pet_users/:id/userServiceProviders",
              method: "POST",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.createMany() instead.
            "::createMany::Pet_user::userServiceProviders": {
              isArray: true,
              url: urlBase + "/pet_users/:id/userServiceProviders",
              method: "POST",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.destroyAll() instead.
            "::delete::Pet_user::userServiceProviders": {
              url: urlBase + "/pet_users/:id/userServiceProviders",
              method: "DELETE",
            },

            // INTERNAL. Use Pet_user.userServiceProviders.count() instead.
            "::count::Pet_user::userServiceProviders": {
              url: urlBase + "/pet_users/:id/userServiceProviders/count",
              method: "GET",
            },

            // INTERNAL. Use Provider.userServiceProviders.findById() instead.
            "::findById::Provider::userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/userServiceProviders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Provider.userServiceProviders.destroyById() instead.
            "::destroyById::Provider::userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/userServiceProviders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.userServiceProviders.updateById() instead.
            "::updateById::Provider::userServiceProviders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/providers/:id/userServiceProviders/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Provider.userServiceProviders() instead.
            "::get::Provider::userServiceProviders": {
              isArray: true,
              url: urlBase + "/providers/:id/userServiceProviders",
              method: "GET",
            },

            // INTERNAL. Use Provider.userServiceProviders.create() instead.
            "::create::Provider::userServiceProviders": {
              url: urlBase + "/providers/:id/userServiceProviders",
              method: "POST",
            },

            // INTERNAL. Use Provider.userServiceProviders.createMany() instead.
            "::createMany::Provider::userServiceProviders": {
              isArray: true,
              url: urlBase + "/providers/:id/userServiceProviders",
              method: "POST",
            },

            // INTERNAL. Use Provider.userServiceProviders.destroyAll() instead.
            "::delete::Provider::userServiceProviders": {
              url: urlBase + "/providers/:id/userServiceProviders",
              method: "DELETE",
            },

            // INTERNAL. Use Provider.userServiceProviders.count() instead.
            "::count::Provider::userServiceProviders": {
              url: urlBase + "/providers/:id/userServiceProviders/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#upsert
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#updateOrCreate
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#patchOrCreateWithWhere
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#update
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#destroyById
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#removeById
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#prototype$updateAttributes
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User_service_provider` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.User_service_provider#modelName
        * @propertyOf lbServices.User_service_provider
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User_service_provider`.
        */
        R.modelName = "User_service_provider";

    /**
     * @ngdoc object
     * @name lbServices.User_service_provider.petUsers
     * @header lbServices.User_service_provider.petUsers
     * @object
     * @description
     *
     * The object `User_service_provider.petUsers` groups methods
     * manipulating `Pet_user` instances related to `User_service_provider`.
     *
     * Call {@link lbServices.User_service_provider#petUsers User_service_provider.petUsers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#petUsers
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Queries petUsers of user_service_provider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R.petUsers = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::get::User_service_provider::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.petUsers#count
             * @methodOf lbServices.User_service_provider.petUsers
             *
             * @description
             *
             * Counts petUsers of user_service_provider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.petUsers.count = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::count::User_service_provider::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.petUsers#create
             * @methodOf lbServices.User_service_provider.petUsers
             *
             * @description
             *
             * Creates a new instance in petUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R.petUsers.create = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::create::User_service_provider::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.petUsers#createMany
             * @methodOf lbServices.User_service_provider.petUsers
             *
             * @description
             *
             * Creates a new instance in petUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R.petUsers.createMany = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::createMany::User_service_provider::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.petUsers#destroyAll
             * @methodOf lbServices.User_service_provider.petUsers
             *
             * @description
             *
             * Deletes all petUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.petUsers.destroyAll = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::delete::User_service_provider::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.petUsers#destroyById
             * @methodOf lbServices.User_service_provider.petUsers
             *
             * @description
             *
             * Delete a related item by id for petUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for petUsers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.petUsers.destroyById = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::destroyById::User_service_provider::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.petUsers#findById
             * @methodOf lbServices.User_service_provider.petUsers
             *
             * @description
             *
             * Find a related item by id for petUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for petUsers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R.petUsers.findById = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::findById::User_service_provider::petUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.petUsers#updateById
             * @methodOf lbServices.User_service_provider.petUsers
             *
             * @description
             *
             * Update a related item by id for petUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `fk` – `{*}` - Foreign key for petUsers
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Pet_user` object.)
             * </em>
             */
        R.petUsers.updateById = function() {
          var TargetResource = $injector.get("Pet_user");
          var action = TargetResource["::updateById::User_service_provider::petUsers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User_service_provider.providers
     * @header lbServices.User_service_provider.providers
     * @object
     * @description
     *
     * The object `User_service_provider.providers` groups methods
     * manipulating `Provider` instances related to `User_service_provider`.
     *
     * Call {@link lbServices.User_service_provider#providers User_service_provider.providers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User_service_provider#providers
             * @methodOf lbServices.User_service_provider
             *
             * @description
             *
             * Queries providers of user_service_provider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::get::User_service_provider::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.providers#count
             * @methodOf lbServices.User_service_provider.providers
             *
             * @description
             *
             * Counts providers of user_service_provider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.providers.count = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::count::User_service_provider::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.providers#create
             * @methodOf lbServices.User_service_provider.providers
             *
             * @description
             *
             * Creates a new instance in providers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.create = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::create::User_service_provider::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.providers#createMany
             * @methodOf lbServices.User_service_provider.providers
             *
             * @description
             *
             * Creates a new instance in providers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.createMany = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::createMany::User_service_provider::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.providers#destroyAll
             * @methodOf lbServices.User_service_provider.providers
             *
             * @description
             *
             * Deletes all providers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.providers.destroyAll = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::delete::User_service_provider::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.providers#destroyById
             * @methodOf lbServices.User_service_provider.providers
             *
             * @description
             *
             * Delete a related item by id for providers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for providers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.providers.destroyById = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::destroyById::User_service_provider::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.providers#findById
             * @methodOf lbServices.User_service_provider.providers
             *
             * @description
             *
             * Find a related item by id for providers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for providers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.findById = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::findById::User_service_provider::providers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User_service_provider.providers#updateById
             * @methodOf lbServices.User_service_provider.providers
             *
             * @description
             *
             * Update a related item by id for providers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user_service_provider id
             *
             *  - `fk` – `{*}` - Foreign key for providers
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Provider` object.)
             * </em>
             */
        R.providers.updateById = function() {
          var TargetResource = $injector.get("Provider");
          var action = TargetResource["::updateById::User_service_provider::providers"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && config.url.indexOf(urlBaseHost) === -1) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
