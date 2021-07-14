// source: enums.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Genre', null, global);
goog.exportSymbol('proto.PricingType', null, global);
goog.exportSymbol('proto.Rating', null, global);
goog.exportSymbol('proto.Status', null, global);
/**
 * @enum {number}
 */
proto.Rating = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5
};

/**
 * @enum {number}
 */
proto.Genre = {
  POP: 0,
  ROCK: 1,
  FOLK: 2
};

/**
 * @enum {number}
 */
proto.PricingType = {
  PER_HOUR: 0,
  PER_GIG: 1,
  PER_SONG: 2
};

/**
 * @enum {number}
 */
proto.Status = {
  COMPLETED: 0,
  PENDING: 1,
  DECLINED: 2,
  CANCELLED: 3
};

goog.object.extend(exports, proto);
