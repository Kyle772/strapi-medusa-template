'use strict';

/**
 * shipping-option-requirement router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::shipping-option-requirement.shipping-option-requirement', {
  "routes": [
    {
      "method": "GET",
      "path": "/shipping-option-requirements",
      "handler": "shipping-option-requirement.find",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/shipping-option-requirements/count",
      "handler": "shipping-option-requirement.count",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/shipping-option-requirements/:id",
      "handler": "shipping-option-requirement.findOne",
      "config": {
        "policies": []
      }
    },
    {
      "method": "POST",
      "path": "/shipping-option-requirements",
      "handler": "shipping-option-requirement.create",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/shipping-option-requirements/:id",
      "handler": "shipping-option-requirement.update",
      "config": {
        "policies": []
      }
    },
    {
      "method": "DELETE",
      "path": "/shipping-option-requirements/:id",
      "handler": "shipping-option-requirement.delete",
      "config": {
        "policies": []
      }
    }
  ]
});
