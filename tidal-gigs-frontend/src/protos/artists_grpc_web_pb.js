/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var enums_pb = require('./enums_pb.js')

var assets_pb = require('./assets_pb.js')
const proto = require('./artists_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ArtistsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ArtistsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ArtistRequest,
 *   !proto.ArtistResponse>}
 */
const methodDescriptor_Artists_GetArtist = new grpc.web.MethodDescriptor(
  '/Artists/GetArtist',
  grpc.web.MethodType.UNARY,
  proto.ArtistRequest,
  proto.ArtistResponse,
  /**
   * @param {!proto.ArtistRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ArtistResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ArtistRequest,
 *   !proto.ArtistResponse>}
 */
const methodInfo_Artists_GetArtist = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ArtistResponse,
  /**
   * @param {!proto.ArtistRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ArtistResponse.deserializeBinary
);


/**
 * @param {!proto.ArtistRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ArtistResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ArtistResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ArtistsClient.prototype.getArtist =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Artists/GetArtist',
      request,
      metadata || {},
      methodDescriptor_Artists_GetArtist,
      callback);
};


/**
 * @param {!proto.ArtistRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ArtistResponse>}
 *     Promise that resolves to the response
 */
proto.ArtistsPromiseClient.prototype.getArtist =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Artists/GetArtist',
      request,
      metadata || {},
      methodDescriptor_Artists_GetArtist);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ArtistRequest,
 *   !proto.ArtistLocationResponse>}
 */
const methodDescriptor_Artists_GetArtistLocation = new grpc.web.MethodDescriptor(
  '/Artists/GetArtistLocation',
  grpc.web.MethodType.UNARY,
  proto.ArtistRequest,
  proto.ArtistLocationResponse,
  /**
   * @param {!proto.ArtistRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ArtistLocationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ArtistRequest,
 *   !proto.ArtistLocationResponse>}
 */
const methodInfo_Artists_GetArtistLocation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ArtistLocationResponse,
  /**
   * @param {!proto.ArtistRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ArtistLocationResponse.deserializeBinary
);


/**
 * @param {!proto.ArtistRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ArtistLocationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ArtistLocationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ArtistsClient.prototype.getArtistLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Artists/GetArtistLocation',
      request,
      metadata || {},
      methodDescriptor_Artists_GetArtistLocation,
      callback);
};


/**
 * @param {!proto.ArtistRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ArtistLocationResponse>}
 *     Promise that resolves to the response
 */
proto.ArtistsPromiseClient.prototype.getArtistLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Artists/GetArtistLocation',
      request,
      metadata || {},
      methodDescriptor_Artists_GetArtistLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ArtistRequest,
 *   !proto.ArtistPriceResponse>}
 */
const methodDescriptor_Artists_GetArtistPrice = new grpc.web.MethodDescriptor(
  '/Artists/GetArtistPrice',
  grpc.web.MethodType.UNARY,
  proto.ArtistRequest,
  proto.ArtistPriceResponse,
  /**
   * @param {!proto.ArtistRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ArtistPriceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ArtistRequest,
 *   !proto.ArtistPriceResponse>}
 */
const methodInfo_Artists_GetArtistPrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ArtistPriceResponse,
  /**
   * @param {!proto.ArtistRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ArtistPriceResponse.deserializeBinary
);


/**
 * @param {!proto.ArtistRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ArtistPriceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ArtistPriceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ArtistsClient.prototype.getArtistPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Artists/GetArtistPrice',
      request,
      metadata || {},
      methodDescriptor_Artists_GetArtistPrice,
      callback);
};


/**
 * @param {!proto.ArtistRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ArtistPriceResponse>}
 *     Promise that resolves to the response
 */
proto.ArtistsPromiseClient.prototype.getArtistPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Artists/GetArtistPrice',
      request,
      metadata || {},
      methodDescriptor_Artists_GetArtistPrice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ArtistRequest,
 *   !proto.ArtistContactInfoResponse>}
 */
const methodDescriptor_Artists_GetArtistContactInfo = new grpc.web.MethodDescriptor(
  '/Artists/GetArtistContactInfo',
  grpc.web.MethodType.UNARY,
  proto.ArtistRequest,
  proto.ArtistContactInfoResponse,
  /**
   * @param {!proto.ArtistRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ArtistContactInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ArtistRequest,
 *   !proto.ArtistContactInfoResponse>}
 */
const methodInfo_Artists_GetArtistContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ArtistContactInfoResponse,
  /**
   * @param {!proto.ArtistRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ArtistContactInfoResponse.deserializeBinary
);


/**
 * @param {!proto.ArtistRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ArtistContactInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ArtistContactInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ArtistsClient.prototype.getArtistContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Artists/GetArtistContactInfo',
      request,
      metadata || {},
      methodDescriptor_Artists_GetArtistContactInfo,
      callback);
};


/**
 * @param {!proto.ArtistRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ArtistContactInfoResponse>}
 *     Promise that resolves to the response
 */
proto.ArtistsPromiseClient.prototype.getArtistContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Artists/GetArtistContactInfo',
      request,
      metadata || {},
      methodDescriptor_Artists_GetArtistContactInfo);
};


module.exports = proto;

