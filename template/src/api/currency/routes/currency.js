'use strict';

/**
 * currency router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::currency.currency', {
  "routes": [
    {
      "method": "GET",
      "path": "/currencies",
      "handler": "currency.find",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/currencies/count",
      "handler": "currency.count",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/currencies/:id",
      "handler": "currency.findOne",
      "config": {
        "policies": []
      }
    },
    {
      "method": "POST",
      "path": "/currencies",
      "handler": "currency.create",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/currencies/:id",
      "handler": "currency.update",
      "config": {
        "policies": []
      }
    },
    {
      "method": "DELETE",
      "path": "/currencies/:id",
      "handler": "currency.delete",
      "config": {
        "policies": []
      }
    }
  ]
});
