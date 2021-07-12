# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bookings.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import enums_pb2 as enums__pb2
import assets_pb2 as assets__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='bookings.proto',
  package='',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x0e\x62ookings.proto\x1a\x0b\x65nums.proto\x1a\x0c\x61ssets.proto\"\x95\x01\n\x06\x42ooker\x12\x12\n\nbooking_id\x18\x01 \x01(\x05\x12\x1b\n\x08location\x18\x02 \x01(\x0b\x32\t.Location\x12\x1b\n\x0b\x66inal_price\x18\x03 \x01(\x0b\x32\x06.Price\x12\x11\n\tbooker_id\x18\x04 \x01(\x05\x12\x11\n\tartist_id\x18\x05 \x01(\x05\x12\x17\n\x06status\x18\x06 \x01(\x0e\x32\x07.Statusb\x06proto3'
  ,
  dependencies=[enums__pb2.DESCRIPTOR,assets__pb2.DESCRIPTOR,])




_BOOKER = _descriptor.Descriptor(
  name='Booker',
  full_name='Booker',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='booking_id', full_name='Booker.booking_id', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='location', full_name='Booker.location', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='final_price', full_name='Booker.final_price', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='booker_id', full_name='Booker.booker_id', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='artist_id', full_name='Booker.artist_id', index=4,
      number=5, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='status', full_name='Booker.status', index=5,
      number=6, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=46,
  serialized_end=195,
)

_BOOKER.fields_by_name['location'].message_type = assets__pb2._LOCATION
_BOOKER.fields_by_name['final_price'].message_type = assets__pb2._PRICE
_BOOKER.fields_by_name['status'].enum_type = enums__pb2._STATUS
DESCRIPTOR.message_types_by_name['Booker'] = _BOOKER
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Booker = _reflection.GeneratedProtocolMessageType('Booker', (_message.Message,), {
  'DESCRIPTOR' : _BOOKER,
  '__module__' : 'bookings_pb2'
  # @@protoc_insertion_point(class_scope:Booker)
  })
_sym_db.RegisterMessage(Booker)


# @@protoc_insertion_point(module_scope)
