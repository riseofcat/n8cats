(function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var equals = Kotlin.equals;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Exception = Kotlin.kotlin.Exception;
  var Any = Object;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toByte = Kotlin.toByte;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Appendable = Kotlin.kotlin.text.Appendable;
  var unboxChar = Kotlin.unboxChar;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_dqglrj$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  BufferView$Companion$Pool$ObjectLiteral.prototype = Object.create(DefaultPool.prototype);
  BufferView$Companion$Pool$ObjectLiteral.prototype.constructor = BufferView$Companion$Pool$ObjectLiteral;
  BufferView$Companion$NoPool$ObjectLiteral.prototype = Object.create(NoPoolImpl.prototype);
  BufferView$Companion$NoPool$ObjectLiteral.prototype.constructor = BufferView$Companion$NoPool$ObjectLiteral;
  ByteOrder.prototype = Object.create(Enum.prototype);
  ByteOrder.prototype.constructor = ByteOrder;
  EOFException.prototype = Object.create(Exception.prototype);
  EOFException.prototype.constructor = EOFException;
  EmptyBufferViewPool.prototype = Object.create(NoPoolImpl.prototype);
  EmptyBufferViewPool.prototype.constructor = EmptyBufferViewPool;
  BufferLimitExceededException.prototype = Object.create(Exception.prototype);
  BufferLimitExceededException.prototype.constructor = BufferLimitExceededException;
  ByteReadPacket$Companion$Empty$ObjectLiteral.prototype = Object.create(NoPoolImpl.prototype);
  ByteReadPacket$Companion$Empty$ObjectLiteral.prototype.constructor = ByteReadPacket$Companion$Empty$ObjectLiteral;
  MalformedUTF8InputException.prototype = Object.create(Exception.prototype);
  MalformedUTF8InputException.prototype.constructor = MalformedUTF8InputException;
  function BufferView(content, origin) {
    BufferView$Companion_getInstance();
    this.content_0 = content;
    this.origin_8be2vx$ = origin;
    this.refCount_0 = 1;
    this.readPosition_0 = 0;
    this.writePosition_0 = 0;
    this.limit_0 = this.content_0.byteLength;
    this.view_0 = this.content_0 === BufferView$Companion_getInstance().EmptyBuffer_0 ? BufferView$Companion_getInstance().EmptyDataView_0 : new DataView(this.content_0);
    this.i8_0 = this.content_0 === BufferView$Companion_getInstance().EmptyBuffer_0 ? BufferView$Companion_getInstance().Empty8_0 : new Int8Array(this.content_0, 0, this.limit_0);
    this.littleEndian_0 = false;
    this.attachment = null;
    this.next = null;
  }
  Object.defineProperty(BufferView.prototype, 'capacity', {
    get: function () {
      return this.content_0.byteLength;
    }
  });
  Object.defineProperty(BufferView.prototype, 'readRemaining', {
    get: function () {
      return this.writePosition_0 - this.readPosition_0 | 0;
    }
  });
  Object.defineProperty(BufferView.prototype, 'writeRemaining', {
    get: function () {
      return this.limit_0 - this.writePosition_0 | 0;
    }
  });
  BufferView.prototype.canRead = function () {
    return this.writePosition_0 > this.readPosition_0;
  };
  BufferView.prototype.canWrite = function () {
    return this.writePosition_0 < this.limit_0;
  };
  BufferView.prototype.reserveStartGap_za3lpa$ = function (n) {
    if (this.readPosition_0 > 0)
      throw new IllegalStateException('Start gap is already reserved');
    if (this.writePosition_0 > 0)
      throw new IllegalStateException('Start gap is already reserved');
    this.writePosition_0 = n;
    this.readPosition_0 = n;
  };
  BufferView.prototype.reserveEndGap_za3lpa$ = function (n) {
    if (this.limit_0 !== this.content_0.byteLength)
      throw new IllegalStateException('End gap is already reserved');
    this.limit_0 = this.limit_0 - n | 0;
  };
  Object.defineProperty(BufferView.prototype, 'startGap', {
    get: function () {
      return this.readPosition_0;
    }
  });
  Object.defineProperty(BufferView.prototype, 'endGap', {
    get: function () {
      return this.content_0.byteLength - this.limit_0 | 0;
    }
  });
  Object.defineProperty(BufferView.prototype, 'byteOrder', {
    get: function () {
      return this.littleEndian_0 ? ByteOrder$LITTLE_ENDIAN_getInstance() : ByteOrder$BIG_ENDIAN_getInstance();
    },
    set: function (value) {
      var tmp$;
      if (equals(value, ByteOrder$BIG_ENDIAN_getInstance()))
        tmp$ = false;
      else if (equals(value, ByteOrder$LITTLE_ENDIAN_getInstance()))
        tmp$ = true;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      this.littleEndian_0 = tmp$;
    }
  });
  BufferView.prototype.readByte = function () {
    if (this.readRemaining < 0)
      throw new IllegalStateException('No bytes available for read');
    var value = this.i8_0[this.readPosition_0];
    this.readPosition_0 = this.readPosition_0 + 1 | 0;
    return value;
  };
  BufferView.prototype.writeByte_s8j3t7$ = function (v) {
    if (this.writeRemaining < 1)
      throw new IllegalStateException('No space left for writing');
    this.i8_0[this.writePosition_0] = v;
    this.writePosition_0 = this.writePosition_0 + 1 | 0;
  };
  BufferView.prototype.readShort = function () {
    if (this.readRemaining < 2)
      throw new IllegalStateException('Not enough bytes available to read a short');
    var value = this.view_0.getInt16(this.readPosition_0, this.littleEndian_0);
    this.readPosition_0 = this.readPosition_0 + 2 | 0;
    return value;
  };
  BufferView.prototype.writeShort_mq22fl$ = function (v) {
    if (this.writeRemaining < 2)
      throw new IllegalStateException('Not enough space left to write a short');
    this.view_0.setInt16(this.writePosition_0, v, this.littleEndian_0);
    this.writePosition_0 = this.writePosition_0 + 2 | 0;
  };
  BufferView.prototype.readInt = function () {
    if (this.readRemaining < 4)
      throw new IllegalStateException('Not enough bytes available to read an int');
    var value = this.view_0.getInt32(this.readPosition_0, this.littleEndian_0);
    this.readPosition_0 = this.readPosition_0 + 4 | 0;
    return value;
  };
  BufferView.prototype.writeInt_za3lpa$ = function (v) {
    if (this.writeRemaining < 4)
      throw new IllegalStateException('Not enough space left to write an int');
    this.view_0.setInt32(this.writePosition_0, v, this.littleEndian_0);
    this.writePosition_0 = this.writePosition_0 + 4 | 0;
  };
  BufferView.prototype.readFloat = function () {
    if (this.readRemaining < 4)
      throw new IllegalStateException('Not enough bytes available to read a float');
    var value = this.view_0.getFloat32(this.readPosition_0, this.littleEndian_0);
    this.readPosition_0 = this.readPosition_0 + 4 | 0;
    return value;
  };
  BufferView.prototype.writeFloat_mx4ult$ = function (v) {
    if (this.writeRemaining < 4)
      throw new IllegalStateException('Not enough space left to write a float');
    this.view_0.setFloat32(this.writePosition_0, v, this.littleEndian_0);
    this.writePosition_0 = this.writePosition_0 + 4 | 0;
  };
  BufferView.prototype.readDouble = function () {
    if (this.readRemaining < 8)
      throw new IllegalStateException('Not enough bytes available to read a double');
    var value = this.view_0.getFloat64(this.readPosition_0, this.littleEndian_0);
    this.readPosition_0 = this.readPosition_0 + 8 | 0;
    return value;
  };
  BufferView.prototype.writeDouble_14dthe$ = function (v) {
    if (this.writeRemaining < 8)
      throw new IllegalStateException('Not enough space left to write a double');
    this.view_0.setFloat64(this.writePosition_0, v, this.littleEndian_0);
    this.writePosition_0 = this.writePosition_0 + 8 | 0;
  };
  BufferView.prototype.read_mj6st8$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw new IllegalStateException('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var rp = this.readPosition_0;
    var i8 = this.i8_0;
    tmp$ = length - 1 | 0;
    for (var idx = 0; idx <= tmp$; idx++) {
      dst[offset + idx | 0] = i8[rp + idx | 0];
    }
    this.readPosition_0 = this.readPosition_0 + length | 0;
  };
  BufferView.prototype.read_fbg2zd$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw new IllegalStateException('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var rp = this.readPosition_0;
    var i8 = this.i8_0;
    tmp$ = length - 1 | 0;
    for (var idx = 0; idx <= tmp$; idx++) {
      dst[offset + idx | 0] = i8[rp + idx | 0];
    }
    this.readPosition_0 = this.readPosition_0 + length | 0;
  };
  BufferView.prototype.read_qmgm5g$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw new IllegalStateException('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var to = new Int8Array(dst, offset, length);
    var rp = this.readPosition_0;
    var rem = this.writePosition_0 - rp | 0;
    var i8 = this.i8_0;
    if (rp === 0 && length === rem) {
      to.set(i8, offset);
    }
     else if (length < 100) {
      tmp$ = length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        to[offset + i | 0] = i8[rp + i | 0];
      }
    }
     else {
      var from = new Int8Array(this.content_0, rp, length);
      to.set(from);
    }
    this.readPosition_0 = rp + length | 0;
  };
  BufferView.prototype.read_gsnag5$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw new IllegalStateException('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var rp = this.readPosition_0;
    var rem = this.writePosition_0 - rp | 0;
    var i8 = this.i8_0;
    if (rp === 0 && rem === length) {
      dst.set(i8, offset);
    }
     else if (length < 100) {
      tmp$ = length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        dst[offset + i | 0] = i8[rp + i | 0];
      }
    }
     else {
      var from = new Int8Array(this.content_0, rp, length);
      dst.set(from, offset);
    }
    this.readPosition_0 = rp + length | 0;
  };
  BufferView.prototype.write_mj6st8$ = function (array, offset, length) {
    var tmp$;
    if (this.writeRemaining < length)
      throw new IllegalStateException('Not enough space left (' + this.writeRemaining + ') to write ' + length + ' bytes');
    var wp = this.writePosition_0;
    var i8 = this.i8_0;
    tmp$ = length - 1 | 0;
    for (var idx = 0; idx <= tmp$; idx++) {
      i8[wp + idx | 0] = array[offset + idx | 0];
    }
    this.writePosition_0 = wp + length | 0;
  };
  BufferView.prototype.write_gsnag5$ = function (src, offset, length) {
    var tmp$;
    if (this.writeRemaining < length)
      throw new IllegalStateException('Not enough space left (' + this.writeRemaining + ') to write ' + length + ' bytes');
    var wp = this.writePosition_0;
    var rem = this.limit_0 - wp | 0;
    var i8 = this.i8_0;
    if (length > rem)
      throw new IndexOutOfBoundsException();
    if (offset === 0 && length === src.length) {
      i8.set(src, wp);
    }
     else if (length < 100) {
      tmp$ = length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        i8[wp + i | 0] = src[offset + i | 0];
      }
    }
     else {
      var from = new Int8Array(src.buffer, src.byteOffset + offset | 0, length);
      i8.set(from, wp);
    }
    this.writePosition_0 = wp + length | 0;
  };
  BufferView.prototype.readLong = function () {
    var tmp$;
    if (this.readRemaining < 8)
      throw new IllegalStateException('Not enough bytes available to read a long');
    var m = new Kotlin.Long(-1, 0);
    var a = Kotlin.Long.fromInt(this.readInt()).and(new Kotlin.Long(-1, 0));
    var b = Kotlin.Long.fromInt(this.readInt()).and(new Kotlin.Long(-1, 0));
    if (this.littleEndian_0) {
      tmp$ = b.shiftLeft(32).or(a);
    }
     else {
      tmp$ = a.shiftLeft(32).or(b);
    }
    return tmp$;
  };
  BufferView.prototype.writeLong_s8cxhz$ = function (v) {
    if (this.writeRemaining < 8)
      throw new IllegalStateException('Not enough space left to write a long');
    var m = new Kotlin.Long(-1, 0);
    var a = v.shiftRight(32).toInt();
    var b = v.and(new Kotlin.Long(-1, 0)).toInt();
    if (this.littleEndian_0) {
      this.writeInt_za3lpa$(b);
      this.writeInt_za3lpa$(a);
    }
     else {
      this.writeInt_za3lpa$(a);
      this.writeInt_za3lpa$(b);
    }
  };
  BufferView.prototype.discardExact_za3lpa$ = function (n) {
    var rem = this.readRemaining;
    if (n > rem)
      throw new IllegalArgumentException("Can't discard " + n + ' bytes: only ' + rem + ' bytes available');
    this.readPosition_0 = this.readPosition_0 + n | 0;
  };
  BufferView.prototype.pushBack_za3lpa$ = function (n) {
    if (this.readPosition_0 === 0)
      throw new IllegalStateException('Nothing to push back');
    this.readPosition_0 = this.readPosition_0 - 1 | 0;
  };
  BufferView.prototype.resetForWrite = function () {
    this.resetForWrite_za3lpa$(this.content_0.byteLength);
  };
  BufferView.prototype.resetForWrite_za3lpa$ = function (limit) {
    if (!(limit <= this.content_0.byteLength)) {
      var message = "Limit shouldn't be bigger than buffer size: limit = " + limit + ', size = ' + this.content_0.byteLength;
      throw new IllegalArgumentException(message.toString());
    }
    this.readPosition_0 = 0;
    this.writePosition_0 = 0;
    this.limit_0 = limit;
  };
  BufferView.prototype.resetForRead = function () {
    this.readPosition_0 = 0;
    this.limit_0 = this.content_0.byteLength;
    this.writePosition_0 = this.limit_0;
  };
  BufferView.prototype.isExclusivelyOwned = function () {
    return this.refCount_0 === 1;
  };
  BufferView.prototype.makeView = function () {
    var tmp$;
    var o = (tmp$ = this.origin_8be2vx$) != null ? tmp$ : this;
    o.acquire_0();
    var view = new BufferView(this.content_0, o);
    view.attachment = this.attachment;
    view.readPosition_0 = this.readPosition_0;
    view.writePosition_0 = this.writePosition_0;
    view.limit_0 = this.limit_0;
    return view;
  };
  BufferView.prototype.release_2r3c1x$ = function (pool) {
    if (this.release_0()) {
      this.resetForWrite();
      if (this.origin_8be2vx$ != null) {
        this.unlink_8be2vx$();
        this.origin_8be2vx$.release_2r3c1x$(pool);
      }
       else {
        pool.recycle_trkh7z$(this);
      }
    }
  };
  BufferView.prototype.writeBuffer_nicutx$ = function (src, length) {
    if (!(length <= src.readRemaining)) {
      var message = 'length is too large: not enough bytes to read ' + length + ' > ' + src.readRemaining;
      throw new IllegalArgumentException(message.toString());
    }
    if (!(length <= this.writeRemaining)) {
      var message_0 = 'length is too large: not enough room to write ' + length + ' > ' + this.writeRemaining;
      throw new IllegalArgumentException(message_0.toString());
    }
    var otherEnd = src.readPosition_0 + length | 0;
    var sub = src.i8_0.subarray(src.readPosition_0, otherEnd);
    this.i8_0.set(sub, this.writePosition_0);
    src.readPosition_0 = otherEnd;
    this.writePosition_0 = this.writePosition_0 + length | 0;
    return length;
  };
  BufferView.prototype.readText_pzahgr$ = function (decoder, out, lastBuffer, max) {
    if (max === void 0)
      max = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
    var tmp$, tmp$_0, tmp$_1;
    if (!(max >= 0)) {
      var message = "max shouldn't be negative: " + max;
      throw new IllegalArgumentException(message.toString());
    }
    if (this.readRemaining === 0)
      return 0;
    var buffer = this.i8_0.subarray(this.readPosition_0, this.writePosition_0);
    var tmp$_2;
    if (!lastBuffer) {
      tmp$_2 = decoder.decode(buffer, STREAM_TRUE);
    }
     else {
      tmp$_2 = decoder.decode(buffer);
    }
    var rawResult = tmp$_2;
    if (rawResult.length <= max) {
      this.readPosition_0 = this.writePosition_0;
      tmp$_1 = rawResult;
    }
     else {
      var actual = rawResult.substring(0, max);
      var subDecoder = TextDecoderFatal(decoder.encoding, true);
      var subArray = new Int8Array(1);
      var subDecoded = 0;
      tmp$ = this.readPosition_0;
      tmp$_0 = this.writePosition_0;
      for (var i = tmp$; i < tmp$_0; i++) {
        subArray[0] = this.i8_0[i];
        var tmp$_3 = subDecoded;
        var tmp$_4;
        if (true) {
          tmp$_4 = subDecoder.decode(subArray, STREAM_TRUE);
        }
         else {
          tmp$_4 = subDecoder.decode(subArray);
        }
        subDecoded = tmp$_3 + tmp$_4.length | 0;
        if (subDecoded >= max) {
          this.readPosition_0 = i + 1 | 0;
          break;
        }
      }
      if (subDecoded < max) {
        subDecoded = subDecoded + subDecoder.decode().length | 0;
        if (subDecoded >= max) {
          this.readPosition_0 = this.writePosition_0;
        }
         else {
          throw new IllegalStateException("Failed to readText: don't know how to update read position");
        }
      }
      tmp$_1 = actual;
    }
    var result = tmp$_1;
    out.append_gw00v9$(result);
    return result.length;
  };
  BufferView.prototype.writeBufferPrepend_wscfq8$ = function (other) {
    var size = other.readRemaining;
    if (!(size <= this.startGap)) {
      var message = 'size should be greater than startGap (size = ' + size + ', startGap = ' + this.startGap + ')';
      throw new IllegalArgumentException(message.toString());
    }
    var otherEnd = other.readPosition_0 + size | 0;
    var sub = other.i8_0.subarray(other.readPosition_0, otherEnd);
    this.i8_0.set(sub, this.readPosition_0 - size | 0);
    this.readPosition_0 = this.readPosition_0 - size | 0;
    other.readPosition_0 = other.readPosition_0 + size | 0;
  };
  var Math_0 = Math;
  BufferView.prototype.writeBufferAppend_xdubrm$ = function (other, maxSize) {
    var a = other.readRemaining;
    var size = Math_0.min(a, maxSize);
    if (!(size <= (this.writeRemaining + this.endGap | 0))) {
      var message = 'should should be greater than write space + end gap (size = ' + size + ', ' + ('writeRemaining = ' + this.writeRemaining + ', endGap = ' + this.endGap + ', rem+gap = ' + (this.writeRemaining + this.endGap | 0));
      throw new IllegalArgumentException(message.toString());
    }
    var otherEnd = other.readPosition_0 + size | 0;
    var sub = other.i8_0.subarray(other.readPosition_0, otherEnd);
    this.i8_0.set(sub, this.writePosition_0);
    this.writePosition_0 = this.writePosition_0 + size | 0;
    if (this.writePosition_0 > this.limit_0) {
      this.limit_0 = this.writePosition_0;
    }
    other.readPosition_0 = other.readPosition_0 + size | 0;
  };
  BufferView.prototype.unlink_8be2vx$ = function () {
    if (this.refCount_0 !== 0)
      throw new IllegalStateException('Unable to unlink buffers: buffer view is in use');
    this.content_0 = BufferView$Companion_getInstance().EmptyBuffer_0;
    this.i8_0 = BufferView$Companion_getInstance().Empty8_0;
    this.view_0 = BufferView$Companion_getInstance().EmptyDataView_0;
    this.resetForWrite();
  };
  BufferView.prototype.acquire_0 = function () {
    var v = this.refCount_0;
    if (v === 0)
      throw new IllegalStateException('Failed to acquire buffer: buffer has been already released');
    this.refCount_0 = v + 1 | 0;
  };
  BufferView.prototype.release_0 = function () {
    if (this === BufferView$Companion_getInstance().Empty)
      throw new IllegalStateException('attempted to release BufferView.Empty');
    var v = this.refCount_0;
    if (v === 0)
      throw new IllegalStateException('Unable to release: buffer has been already released');
    var newCount = v - 1 | 0;
    this.refCount_0 = newCount;
    return newCount === 0;
  };
  function BufferView$Companion() {
    BufferView$Companion_instance = this;
    this.EmptyBuffer_0 = new ArrayBuffer(0);
    this.EmptyDataView_0 = new DataView(this.EmptyBuffer_0);
    this.Empty8_0 = new Int8Array(0);
    this.Empty = new BufferView(this.EmptyBuffer_0, null);
    this.Pool = new BufferView$Companion$Pool$ObjectLiteral(BUFFER_VIEW_POOL_SIZE);
    this.NoPool = new BufferView$Companion$NoPool$ObjectLiteral();
  }
  function BufferView$Companion$Pool$ObjectLiteral(capacity) {
    DefaultPool.call(this, capacity);
  }
  BufferView$Companion$Pool$ObjectLiteral.prototype.produceInstance = function () {
    return new BufferView(new ArrayBuffer(BUFFER_VIEW_SIZE), null);
  };
  BufferView$Companion$Pool$ObjectLiteral.prototype.clearInstance_trkh7z$ = function (instance) {
    var $receiver = DefaultPool.prototype.clearInstance_trkh7z$.call(this, instance);
    instance.resetForWrite();
    instance.next = null;
    instance.attachment = null;
    if (instance.refCount_0 !== 0)
      throw new IllegalStateException('Unable to clear instance: refCount is ' + instance.refCount_0 + ' != 0');
    instance.refCount_0 = 1;
    return $receiver;
  };
  BufferView$Companion$Pool$ObjectLiteral.prototype.validateInstance_trkh7z$ = function (instance) {
    DefaultPool.prototype.validateInstance_trkh7z$.call(this, instance);
    if (!(instance.refCount_0 === 0)) {
      var message = 'unable to recycle buffer: buffer view is in use (refCount = ' + instance.refCount_0 + ')';
      throw new IllegalArgumentException(message.toString());
    }
    if (!(instance.origin_8be2vx$ == null)) {
      var message_0 = "Unable to recycle buffer view: view copy shouldn't be recycled";
      throw new IllegalArgumentException(message_0.toString());
    }
  };
  BufferView$Companion$Pool$ObjectLiteral.prototype.disposeInstance_trkh7z$ = function (instance) {
    instance.unlink_8be2vx$();
  };
  BufferView$Companion$Pool$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DefaultPool]
  };
  function BufferView$Companion$NoPool$ObjectLiteral() {
    NoPoolImpl.call(this);
  }
  BufferView$Companion$NoPool$ObjectLiteral.prototype.borrow = function () {
    return new BufferView(new ArrayBuffer(4096), null);
  };
  BufferView$Companion$NoPool$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NoPoolImpl]
  };
  BufferView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BufferView$Companion_instance = null;
  function BufferView$Companion_getInstance() {
    if (BufferView$Companion_instance === null) {
      new BufferView$Companion();
    }
    return BufferView$Companion_instance;
  }
  BufferView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BufferView',
    interfaces: []
  };
  function ByteOrder(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ByteOrder_initFields() {
    ByteOrder_initFields = function () {
    };
    ByteOrder$BIG_ENDIAN_instance = new ByteOrder('BIG_ENDIAN', 0);
    ByteOrder$LITTLE_ENDIAN_instance = new ByteOrder('LITTLE_ENDIAN', 1);
    ByteOrder$Companion_getInstance();
  }
  var ByteOrder$BIG_ENDIAN_instance;
  function ByteOrder$BIG_ENDIAN_getInstance() {
    ByteOrder_initFields();
    return ByteOrder$BIG_ENDIAN_instance;
  }
  var ByteOrder$LITTLE_ENDIAN_instance;
  function ByteOrder$LITTLE_ENDIAN_getInstance() {
    ByteOrder_initFields();
    return ByteOrder$LITTLE_ENDIAN_instance;
  }
  function ByteOrder$Companion() {
    ByteOrder$Companion_instance = this;
    this.native_0 = null;
    var buffer = new ArrayBuffer(4);
    var arr = new Int32Array(buffer);
    var view = new DataView(buffer);
    arr[0] = 287454020;
    this.native_0 = view.getInt32(0, true) === 287454020 ? ByteOrder$LITTLE_ENDIAN_getInstance() : ByteOrder$BIG_ENDIAN_getInstance();
  }
  ByteOrder$Companion.prototype.nativeOrder = function () {
    return this.native_0;
  };
  ByteOrder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ByteOrder$Companion_instance = null;
  function ByteOrder$Companion_getInstance() {
    ByteOrder_initFields();
    if (ByteOrder$Companion_instance === null) {
      new ByteOrder$Companion();
    }
    return ByteOrder$Companion_instance;
  }
  ByteOrder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteOrder',
    interfaces: [Enum]
  };
  function ByteOrder$values() {
    return [ByteOrder$BIG_ENDIAN_getInstance(), ByteOrder$LITTLE_ENDIAN_getInstance()];
  }
  ByteOrder.values = ByteOrder$values;
  function ByteOrder$valueOf(name) {
    switch (name) {
      case 'BIG_ENDIAN':
        return ByteOrder$BIG_ENDIAN_getInstance();
      case 'LITTLE_ENDIAN':
        return ByteOrder$LITTLE_ENDIAN_getInstance();
      default:throwISE('No enum constant kotlinx.io.core.ByteOrder.' + name);
    }
  }
  ByteOrder.valueOf_61zpoe$ = ByteOrder$valueOf;
  var PACKET_MAX_COPY_SIZE;
  var BUFFER_VIEW_POOL_SIZE;
  var BUFFER_VIEW_SIZE;
  function BytePacketBuilder(headerSizeHint) {
    return new BytePacketBuilder_0(headerSizeHint, BufferView$Companion_getInstance().Pool);
  }
  function EOFException(message) {
    Exception.call(this, message);
    this.name = 'EOFException';
  }
  EOFException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EOFException',
    interfaces: [Exception]
  };
  function readText($receiver, encoding, max) {
    if (max === void 0)
      max = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
    var $receiver_0 = StringBuilder_init($receiver.remaining);
    readText_0($receiver, encoding, $receiver_0, max);
    return $receiver_0.toString();
  }
  function readText_0($receiver, encoding, out, max) {
    if (encoding === void 0)
      encoding = 'UTF-8';
    if (max === void 0)
      max = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
    if (!(max >= 0)) {
      var message = "max shouldn't be negative, got " + max;
      throw new IllegalArgumentException(message.toString());
    }
    var decoder = TextDecoderFatal(encoding);
    var decoded = {v: 0};
    while (decoded.v < max) {
      var current = $receiver.head_0;
      if (current !== BufferView.Companion.Empty) {
        decoded.v = decoded.v + current.readText_pzahgr$(decoder, out, current.next == null, max - decoded.v | 0) | 0;
        if (!current.canRead()) {
          $receiver.releaseHead_wscfq8$(current);
        }
      }
      if ($receiver.isEmpty)
        break;
    }
    return decoded.v;
  }
  var STREAM_TRUE;
  var FATAL_TRUE;
  function TextDecoderFatal(encoding, fatal) {
    if (fatal === void 0)
      fatal = true;
    if (typeof TextDecoder == 'undefined') {
      var module_0 = require('text-encoding');
      if (module_0.TextDecoder === undefined)
        throw new IllegalStateException('TextDecoder is not supported by your browser and no text-encoding module found');
      var ctor = module_0.TextDecoder;
      var objPrototype = Object.create(ctor.prototype);
      return fatal ? ctor.call(objPrototype, encoding, FATAL_TRUE) : ctor.call(objPrototype, encoding);
    }
    return fatal ? new TextDecoder(encoding, FATAL_TRUE) : new TextDecoder(encoding);
  }
  var decodeStream = defineInlineFunction('kotlinx-io-js.kotlinx.io.js.decodeStream_ggodax$', function ($receiver, buffer, stream) {
    var tmp$;
    if (stream) {
      tmp$ = $receiver.decode(buffer, STREAM_TRUE);
    }
     else {
      tmp$ = $receiver.decode(buffer);
    }
    return tmp$;
  });
  function readAvailable($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.byteLength - offset | 0;
    var tmp$;
    var read = 0;
    var b = $receiver.remaining;
    var rem = Math_0.min(length, b);
    while (rem > 0) {
      tmp$ = $receiver.prepareRead_kcn2v3$(1);
      if (tmp$ == null) {
        break;
      }
      var bb = tmp$;
      var a = rem;
      var b_0 = bb.readRemaining;
      var size = Math_0.min(a, b_0);
      bb.read_gsnag5$(dst, offset + read | 0, size);
      read = read + size | 0;
      rem = rem - size | 0;
      if (bb.readRemaining === 0) {
        $receiver.releaseHead_wscfq8$(bb);
      }
    }
    return read;
  }
  function readAvailable_0($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.byteLength - offset | 0;
    return readAvailable($receiver, new Int8Array(dst), offset, length);
  }
  function readFully($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.byteLength - offset | 0;
    return readFully_0($receiver, new Int8Array(dst), offset, length);
  }
  function readFully_0($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length - offset | 0;
    if (!(length <= $receiver.remaining)) {
      var message = 'Failed requirement.';
      throw new IllegalArgumentException(message.toString());
    }
    readAvailable($receiver, dst, offset, length);
  }
  function readArrayBuffer($receiver, n) {
    if (n === void 0)
      n = $receiver.remaining;
    var buffer = new ArrayBuffer(n);
    readFully($receiver, buffer);
    return buffer;
  }
  function writeFully($receiver, src, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = src.byteLength - offset | 0;
    writeFully_0($receiver, new Int8Array(src), offset, length);
  }
  function writeFully_0($receiver, src, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = src.length - offset | 0;
    var written = {v: 0};
    var rem = {v: length};
    while (rem.v > 0) {
      var tmp$;
      var buffer = (tmp$ = $receiver.last_0()) != null ? tmp$.writeRemaining >= 1 ? tmp$ : null : null;
      var tmp$_0;
      tmp$_0 = $receiver.size;
      var tmp$_1;
      if (buffer == null) {
        var bb = $receiver.appendNewBuffer_0();
        var a = bb.writeRemaining;
        var b = rem.v;
        var size = Math_0.min(a, b);
        bb.write_gsnag5$(src, written.v + offset | 0, size);
        written.v = written.v + size | 0;
        rem.v = rem.v - size | 0;
        tmp$_1 = size;
      }
       else {
        var a_0 = buffer.writeRemaining;
        var b_0 = rem.v;
        var size_0 = Math_0.min(a_0, b_0);
        buffer.write_gsnag5$(src, written.v + offset | 0, size_0);
        written.v = written.v + size_0 | 0;
        rem.v = rem.v - size_0 | 0;
        tmp$_1 = size_0;
      }
      $receiver.size = tmp$_0 + tmp$_1 | 0;
    }
  }
  function sendPacket($receiver, packet) {
    $receiver.send(readArrayBuffer(packet));
  }
  var sendPacket_0 = defineInlineFunction('kotlinx-io-js.kotlinx.io.js.sendPacket_wglm47$', wrapFunction(function () {
    var sendPacket = _.kotlinx.io.js.sendPacket_tx3ju1$;
    var BytePacketBuilder = _.kotlinx.io.core.BytePacketBuilder_za3lpa$;
    var Throwable = Error;
    return function ($receiver, block) {
      var buildPacket$result;
      var builder = BytePacketBuilder(0);
      try {
        block(builder);
        buildPacket$result = builder.build();
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          builder.release();
          throw t;
        }
         else
          throw t;
      }
      sendPacket($receiver, buildPacket$result);
    };
  }));
  var packet = defineInlineFunction('kotlinx-io-js.kotlinx.io.js.packet_lwnq0v$', wrapFunction(function () {
    var BufferView_init = _.kotlinx.io.core.BufferView;
    var ByteReadPacket_init = _.kotlinx.io.core.ByteReadPacket;
    return function ($receiver) {
      return new ByteReadPacket_init(new BufferView_init($receiver.data, null), BufferView_init.Companion.NoPool);
    };
  }));
  var sendPacket_1 = defineInlineFunction('kotlinx-io-js.kotlinx.io.js.sendPacket_eks1ru$', wrapFunction(function () {
    var sendPacket = _.kotlinx.io.js.sendPacket_8zvei$;
    var BytePacketBuilder = _.kotlinx.io.core.BytePacketBuilder_za3lpa$;
    var Throwable = Error;
    return function ($receiver, block) {
      var buildPacket$result;
      var builder = BytePacketBuilder(0);
      try {
        block(builder);
        buildPacket$result = builder.build();
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          builder.release();
          throw t;
        }
         else
          throw t;
      }
      sendPacket($receiver, buildPacket$result);
    };
  }));
  function sendPacket_2($receiver, packet) {
    $receiver.send(readArrayBuffer(packet));
  }
  function responsePacket($receiver) {
    var tmp$;
    tmp$ = $receiver.responseType;
    if (equals(tmp$, 'arraybuffer'))
      return new ByteReadPacket(new BufferView($receiver.response, null), BufferView$Companion_getInstance().NoPool);
    else {
      if (equals(tmp$, ''))
        return ByteReadPacket$Companion_getInstance().Empty;
      else
        throw new IllegalStateException('Incompatible type ' + $receiver.responseType + ': only ARRAYBUFFER and EMPTY are supported');
    }
  }
  function DefaultPool(capacity) {
    this.capacity_3ksqj2$_0 = capacity;
    this.instances_3r1z6a$_0 = Kotlin.newArray(this.capacity, null);
    this.size_xp9yxl$_0 = 0;
  }
  Object.defineProperty(DefaultPool.prototype, 'capacity', {
    get: function () {
      return this.capacity_3ksqj2$_0;
    }
  });
  DefaultPool.prototype.disposeInstance_trkh7z$ = function (instance) {
  };
  DefaultPool.prototype.clearInstance_trkh7z$ = function (instance) {
    return instance;
  };
  DefaultPool.prototype.validateInstance_trkh7z$ = function (instance) {
  };
  DefaultPool.prototype.borrow = function () {
    var tmp$;
    if (this.size_xp9yxl$_0 === 0)
      return this.produceInstance();
    var idx = (this.size_xp9yxl$_0 = this.size_xp9yxl$_0 - 1 | 0, this.size_xp9yxl$_0);
    var instance = Kotlin.isType(tmp$ = this.instances_3r1z6a$_0[idx], Any) ? tmp$ : throwCCE();
    this.instances_3r1z6a$_0[idx] = null;
    return this.clearInstance_trkh7z$(instance);
  };
  DefaultPool.prototype.recycle_trkh7z$ = function (instance) {
    var tmp$;
    this.validateInstance_trkh7z$(instance);
    if (this.size_xp9yxl$_0 === this.capacity)
      this.disposeInstance_trkh7z$(instance);
    this.instances_3r1z6a$_0[tmp$ = this.size_xp9yxl$_0, this.size_xp9yxl$_0 = tmp$ + 1 | 0, tmp$] = instance;
  };
  DefaultPool.prototype.dispose = function () {
    var tmp$, tmp$_0;
    tmp$ = this.size_xp9yxl$_0;
    for (var i = 0; i < tmp$; i++) {
      var instance = Kotlin.isType(tmp$_0 = this.instances_3r1z6a$_0[i], Any) ? tmp$_0 : throwCCE();
      this.instances_3r1z6a$_0[i] = null;
      this.disposeInstance_trkh7z$(instance);
    }
    this.size_xp9yxl$_0 = 0;
  };
  DefaultPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultPool',
    interfaces: [ObjectPool]
  };
  function EmptyBufferViewPool() {
    EmptyBufferViewPool_instance = this;
    NoPoolImpl.call(this);
  }
  EmptyBufferViewPool.prototype.borrow = function () {
    return BufferView$Companion_getInstance().Empty;
  };
  EmptyBufferViewPool.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EmptyBufferViewPool',
    interfaces: [NoPoolImpl]
  };
  var EmptyBufferViewPool_instance = null;
  function EmptyBufferViewPool_getInstance() {
    if (EmptyBufferViewPool_instance === null) {
      new EmptyBufferViewPool();
    }
    return EmptyBufferViewPool_instance;
  }
  function releaseAll($receiver, pool) {
    if ($receiver == null)
      return;
    $receiver.release_2r3c1x$(pool);
    releaseAll($receiver.next, pool);
  }
  function copyAll($receiver) {
    var tmp$;
    var copied = $receiver.makeView();
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return copied;
    }
    var next = tmp$;
    return copyAll_0(next, copied, copied);
  }
  function copyAll_0($receiver, head, prev) {
    var tmp$;
    var copied = $receiver.makeView();
    prev.next = copied;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return head;
    }
    var next = tmp$;
    return copyAll_0(next, head, copied);
  }
  function findTail($receiver) {
    var tmp$;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return $receiver;
    }
    var next = tmp$;
    return findTail(next);
  }
  function remainingAll($receiver) {
    return remainingAll_0($receiver, Kotlin.Long.ZERO);
  }
  function remainingAll_0($receiver, n) {
    var tmp$;
    var rem = Kotlin.Long.fromInt($receiver.readRemaining).add(n);
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return rem;
    }
    var next = tmp$;
    return remainingAll_0(next, rem);
  }
  function isEmpty($receiver) {
    var tmp$;
    if ($receiver.readRemaining > 0)
      return false;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return true;
    }
    var next = tmp$;
    return isEmpty(next);
  }
  function BufferLimitExceededException(message) {
    Exception.call(this, message);
    this.name = 'BufferLimitExceededException';
  }
  BufferLimitExceededException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BufferLimitExceededException',
    interfaces: [Exception]
  };
  var buildPacket = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.buildPacket_tmk3ki$', wrapFunction(function () {
    var BytePacketBuilder = _.kotlinx.io.core.BytePacketBuilder_za3lpa$;
    var Throwable = Error;
    return function (headerSizeHint, block) {
      if (headerSizeHint === void 0)
        headerSizeHint = 0;
      var builder = BytePacketBuilder(headerSizeHint);
      try {
        block(builder);
        return builder.build();
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          builder.release();
          throw t;
        }
         else
          throw t;
      }
    };
  }));
  function BytePacketBuilder_0(headerSizeHint, pool) {
    this.headerSizeHint_0 = headerSizeHint;
    this.pool_0 = pool;
    if (!(this.headerSizeHint_0 >= 0)) {
      var message = "shouldn't be negative: headerSizeHint = " + this.headerSizeHint_0;
      throw new IllegalArgumentException(message.toString());
    }
    this.size_p2iquw$_0 = 0;
    this.byteOrder_hf45cl$_0 = ByteOrder$BIG_ENDIAN_getInstance();
    this.head_0 = BufferView$Companion_getInstance().Empty;
    this.tail_0 = this.head_0;
  }
  Object.defineProperty(BytePacketBuilder_0.prototype, 'size', {
    get: function () {
      return this.size_p2iquw$_0;
    },
    set: function (size) {
      this.size_p2iquw$_0 = size;
    }
  });
  Object.defineProperty(BytePacketBuilder_0.prototype, 'byteOrder', {
    get: function () {
      return this.byteOrder_hf45cl$_0;
    },
    set: function (value) {
      this.byteOrder_hf45cl$_0 = value;
      this.tail_0.byteOrder = value;
    }
  });
  BytePacketBuilder_0.prototype.writeFully_fqrh44$ = function (src) {
    this.writeFully_mj6st8$(src, 0, src.length);
  };
  BytePacketBuilder_0.prototype.writeFully_mj6st8$ = function (src, offset, length) {
    var copied = {v: 0};
    while (copied.v < length) {
      var tmp$;
      var buffer = (tmp$ = this.last_0()) != null ? tmp$.writeRemaining >= 1 ? tmp$ : null : null;
      var tmp$_0;
      tmp$_0 = this.size;
      var tmp$_1;
      if (buffer == null) {
        var buffer_0 = this.appendNewBuffer_0();
        var a = buffer_0.writeRemaining;
        var b = length - copied.v | 0;
        var size = Math_0.min(a, b);
        buffer_0.write_mj6st8$(src, offset + copied.v | 0, size);
        copied.v = copied.v + size | 0;
        tmp$_1 = size;
      }
       else {
        var a_0 = buffer.writeRemaining;
        var b_0 = length - copied.v | 0;
        var size_0 = Math_0.min(a_0, b_0);
        buffer.write_mj6st8$(src, offset + copied.v | 0, size_0);
        copied.v = copied.v + size_0 | 0;
        tmp$_1 = size_0;
      }
      this.size = tmp$_0 + tmp$_1 | 0;
    }
  };
  BytePacketBuilder_0.prototype.writeLong_s8cxhz$ = function (l) {
    var tmp$;
    var buffer = (tmp$ = this.last_0()) != null ? tmp$.writeRemaining >= 8 ? tmp$ : null : null;
    var tmp$_0;
    tmp$_0 = this.size;
    var tmp$_1;
    if (buffer == null) {
      this.appendNewBuffer_0().writeLong_s8cxhz$(l);
      tmp$_1 = 8;
    }
     else {
      buffer.writeLong_s8cxhz$(l);
      tmp$_1 = 8;
    }
    this.size = tmp$_0 + tmp$_1 | 0;
  };
  BytePacketBuilder_0.prototype.writeInt_za3lpa$ = function (i) {
    var tmp$;
    var buffer = (tmp$ = this.last_0()) != null ? tmp$.writeRemaining >= 4 ? tmp$ : null : null;
    var tmp$_0;
    tmp$_0 = this.size;
    var tmp$_1;
    if (buffer == null) {
      this.appendNewBuffer_0().writeInt_za3lpa$(i);
      tmp$_1 = 4;
    }
     else {
      buffer.writeInt_za3lpa$(i);
      tmp$_1 = 4;
    }
    this.size = tmp$_0 + tmp$_1 | 0;
  };
  BytePacketBuilder_0.prototype.writeShort_mq22fl$ = function (s) {
    var tmp$;
    var buffer = (tmp$ = this.last_0()) != null ? tmp$.writeRemaining >= 2 ? tmp$ : null : null;
    var tmp$_0;
    tmp$_0 = this.size;
    var tmp$_1;
    if (buffer == null) {
      this.appendNewBuffer_0().writeShort_mq22fl$(s);
      tmp$_1 = 2;
    }
     else {
      buffer.writeShort_mq22fl$(s);
      tmp$_1 = 2;
    }
    this.size = tmp$_0 + tmp$_1 | 0;
  };
  BytePacketBuilder_0.prototype.writeByte_s8j3t7$ = function (b) {
    var tmp$;
    var buffer = (tmp$ = this.last_0()) != null ? tmp$.writeRemaining >= 1 ? tmp$ : null : null;
    var tmp$_0;
    tmp$_0 = this.size;
    var tmp$_1;
    if (buffer == null) {
      this.appendNewBuffer_0().writeByte_s8j3t7$(b);
      tmp$_1 = 1;
    }
     else {
      buffer.writeByte_s8j3t7$(b);
      tmp$_1 = 1;
    }
    this.size = tmp$_0 + tmp$_1 | 0;
  };
  BytePacketBuilder_0.prototype.writeDouble_14dthe$ = function (d) {
    var tmp$;
    var buffer = (tmp$ = this.last_0()) != null ? tmp$.writeRemaining >= 8 ? tmp$ : null : null;
    var tmp$_0;
    tmp$_0 = this.size;
    var tmp$_1;
    if (buffer == null) {
      this.appendNewBuffer_0().writeDouble_14dthe$(d);
      tmp$_1 = 8;
    }
     else {
      buffer.writeDouble_14dthe$(d);
      tmp$_1 = 8;
    }
    this.size = tmp$_0 + tmp$_1 | 0;
  };
  BytePacketBuilder_0.prototype.writeFloat_mx4ult$ = function (f) {
    var tmp$;
    var buffer = (tmp$ = this.last_0()) != null ? tmp$.writeRemaining >= 4 ? tmp$ : null : null;
    var tmp$_0;
    tmp$_0 = this.size;
    var tmp$_1;
    if (buffer == null) {
      this.appendNewBuffer_0().writeFloat_mx4ult$(f);
      tmp$_1 = 4;
    }
     else {
      buffer.writeFloat_mx4ult$(f);
      tmp$_1 = 4;
    }
    this.size = tmp$_0 + tmp$_1 | 0;
  };
  BytePacketBuilder_0.prototype.append_s8itvh$ = function (c) {
    var tmp$;
    var buffer = (tmp$ = this.last_0()) != null ? tmp$.writeRemaining >= 3 ? tmp$ : null : null;
    var tmp$_0;
    tmp$_0 = this.size;
    var tmp$_1;
    if (buffer == null) {
      var it = this.appendNewBuffer_0();
      var v = (c | 0) & 65535;
      var putUtf8Char_0$result;
      if ((new IntRange(1, 127)).contains_mef7kx$(v)) {
        it.writeByte_s8j3t7$(toByte(v));
        putUtf8Char_0$result = 1;
      }
       else if (v > 2047) {
        it.writeByte_s8j3t7$(toByte(224 | v >> 12 & 15));
        it.writeByte_s8j3t7$(toByte(128 | v >> 6 & 63));
        it.writeByte_s8j3t7$(toByte(128 | v & 63));
        putUtf8Char_0$result = 3;
      }
       else {
        it.writeByte_s8j3t7$(toByte(192 | v >> 6 & 31));
        it.writeByte_s8j3t7$(toByte(128 | v & 63));
        putUtf8Char_0$result = 2;
      }
      tmp$_1 = putUtf8Char_0$result;
    }
     else {
      var v_0 = (c | 0) & 65535;
      var putUtf8Char_0$result_0;
      if ((new IntRange(1, 127)).contains_mef7kx$(v_0)) {
        buffer.writeByte_s8j3t7$(toByte(v_0));
        putUtf8Char_0$result_0 = 1;
      }
       else if (v_0 > 2047) {
        buffer.writeByte_s8j3t7$(toByte(224 | v_0 >> 12 & 15));
        buffer.writeByte_s8j3t7$(toByte(128 | v_0 >> 6 & 63));
        buffer.writeByte_s8j3t7$(toByte(128 | v_0 & 63));
        putUtf8Char_0$result_0 = 3;
      }
       else {
        buffer.writeByte_s8j3t7$(toByte(192 | v_0 >> 6 & 31));
        buffer.writeByte_s8j3t7$(toByte(128 | v_0 & 63));
        putUtf8Char_0$result_0 = 2;
      }
      tmp$_1 = putUtf8Char_0$result_0;
    }
    this.size = tmp$_0 + tmp$_1 | 0;
    return this;
  };
  BytePacketBuilder_0.prototype.append_gw00v9$ = function (csq) {
    if (csq == null) {
      this.append_gw00v9$('null');
    }
     else {
      this.append_ezbsdh$(csq, 0, csq.length);
    }
    return this;
  };
  BytePacketBuilder_0.prototype.append_ezbsdh$ = function (csq, start, end) {
    if (csq == null) {
      return this.append_ezbsdh$('null', start, end);
    }
    this.appendASCII_0(csq, start, end);
    return this;
  };
  BytePacketBuilder_0.prototype.writePacket_8awntw$ = function (p) {
    var tmp$, tmp$_0, tmp$_1;
    var foreignStolen = p.stealAll_8be2vx$();
    if (foreignStolen == null) {
      p.release();
      return;
    }
    var tail = this.tail_0;
    if (tail === BufferView$Companion_getInstance().Empty) {
      this.head_0 = foreignStolen;
      this.tail_0 = findTail(foreignStolen);
      this.size = remainingAll(foreignStolen).toInt();
      return;
    }
    var lastSize = tail.readRemaining;
    var nextSize = foreignStolen.readRemaining;
    var maxCopySize = PACKET_MAX_COPY_SIZE;
    if (nextSize < maxCopySize && nextSize <= (tail.endGap + tail.writeRemaining | 0)) {
      tmp$ = nextSize;
    }
     else
      tmp$ = -1;
    var appendSize = tmp$;
    if (lastSize < maxCopySize && lastSize <= foreignStolen.startGap && foreignStolen.isExclusivelyOwned()) {
      tmp$_0 = lastSize;
    }
     else
      tmp$_0 = -1;
    var prependSize = tmp$_0;
    if (appendSize === -1 && prependSize === -1) {
      tail.next = foreignStolen;
      this.tail_0 = findTail(foreignStolen);
      this.size = remainingAll(this.head_0).toInt();
    }
     else if (prependSize === -1 || appendSize <= prependSize) {
      tail.writeBufferAppend_xdubrm$(foreignStolen, tail.writeRemaining + tail.endGap | 0);
      tail.next = foreignStolen.next;
      var $receiver = findTail(foreignStolen);
      this.tail_0 = (tmp$_1 = !($receiver === foreignStolen) ? $receiver : null) != null ? tmp$_1 : tail;
      foreignStolen.release_2r3c1x$(p.pool);
      this.size = remainingAll(this.head_0).toInt();
    }
     else if (appendSize === -1 || prependSize < appendSize) {
      foreignStolen.writeBufferPrepend_wscfq8$(tail);
      if (this.head_0 === tail) {
        this.head_0 = foreignStolen;
      }
       else {
        var pre = this.head_0;
        while (true) {
          var next = ensureNotNull(pre.next);
          if (next === tail)
            break;
          pre = next;
        }
        pre.next = foreignStolen;
      }
      tail.release_2r3c1x$(this.pool_0);
      this.tail_0 = findTail(foreignStolen);
      this.size = remainingAll(this.head_0).toInt();
    }
     else {
      throw new IllegalStateException('prep = ' + prependSize + ', app = ' + appendSize);
    }
  };
  BytePacketBuilder_0.prototype.appendASCII_0 = function (csq, start, end) {
    var bb = this.ensure_0();
    var b = start + bb.writeRemaining | 0;
    var limitedEnd = Math_0.min(end, b);
    for (var i = start; i < limitedEnd; i++) {
      var chi = (csq.charCodeAt(i) | 0) & 65535;
      if (chi >= 128) {
        this.appendUTF8_0(csq, i, end, bb);
        return;
      }
      bb.writeByte_s8j3t7$(toByte(chi));
      this.size = this.size + 1 | 0;
    }
    if (limitedEnd < end) {
      return this.appendASCII_0(csq, limitedEnd, end);
    }
  };
  BytePacketBuilder_0.prototype.appendUTF8_0 = function (csq, start, end, bb) {
    var tmp$;
    var rem = bb.writeRemaining;
    var b = start + rem | 0;
    var limitedEnd = Math_0.min(end, b);
    for (var i = start; i < limitedEnd; i++) {
      var chi = (csq.charCodeAt(i) | 0) & 65535;
      if (chi <= 127)
        tmp$ = 1;
      else if (chi > 2047)
        tmp$ = 3;
      else
        tmp$ = 2;
      var requiredSize = tmp$;
      if (rem < requiredSize) {
        return this.appendUTF8_0(csq, i, end, this.appendNewBuffer_0());
      }
      var putUtf8Char_0$result;
      if ((new IntRange(1, 127)).contains_mef7kx$(chi)) {
        bb.writeByte_s8j3t7$(toByte(chi));
        putUtf8Char_0$result = 1;
      }
       else if (chi > 2047) {
        bb.writeByte_s8j3t7$(toByte(224 | chi >> 12 & 15));
        bb.writeByte_s8j3t7$(toByte(128 | chi >> 6 & 63));
        bb.writeByte_s8j3t7$(toByte(128 | chi & 63));
        putUtf8Char_0$result = 3;
      }
       else {
        bb.writeByte_s8j3t7$(toByte(192 | chi >> 6 & 31));
        bb.writeByte_s8j3t7$(toByte(128 | chi & 63));
        putUtf8Char_0$result = 2;
      }
      var chSize = putUtf8Char_0$result;
      rem = rem - chSize | 0;
      this.size = this.size + chSize | 0;
    }
    if (limitedEnd < end) {
      return this.appendUTF8_0(csq, limitedEnd, end, this.appendNewBuffer_0());
    }
  };
  BytePacketBuilder_0.prototype.appendChars_uc2sr1$ = function (ca, start, end) {
    return this.appendASCII_1(ca, start, end);
  };
  BytePacketBuilder_0.prototype.appendASCII_1 = function (csq, start, end) {
    var bb = this.ensure_0();
    var b = start + bb.writeRemaining | 0;
    var limitedEnd = Math_0.min(end, b);
    for (var i = start; i < limitedEnd; i++) {
      var chi = (csq[i] | 0) & 65535;
      if (chi >= 128) {
        this.appendUTF8_1(csq, i, end, bb);
        return;
      }
      bb.writeByte_s8j3t7$(toByte(chi));
      this.size = this.size + 1 | 0;
    }
    if (limitedEnd < end) {
      return this.appendASCII_1(csq, limitedEnd, end);
    }
  };
  BytePacketBuilder_0.prototype.appendUTF8_1 = function (csq, start, end, bb) {
    var tmp$;
    var b = start + bb.writeRemaining | 0;
    var limitedEnd = Math_0.min(end, b);
    for (var i = start; i < limitedEnd; i++) {
      var chi = (csq[i] | 0) & 65535;
      if (chi <= 127)
        tmp$ = 1;
      else if (chi > 2047)
        tmp$ = 3;
      else
        tmp$ = 2;
      var requiredSize = tmp$;
      if (bb.writeRemaining < requiredSize) {
        return this.appendUTF8_1(csq, i, end, this.appendNewBuffer_0());
      }
      var tmp$_0 = this.size;
      var putUtf8Char_0$result;
      if ((new IntRange(1, 127)).contains_mef7kx$(chi)) {
        bb.writeByte_s8j3t7$(toByte(chi));
        putUtf8Char_0$result = 1;
      }
       else if (chi > 2047) {
        bb.writeByte_s8j3t7$(toByte(224 | chi >> 12 & 15));
        bb.writeByte_s8j3t7$(toByte(128 | chi >> 6 & 63));
        bb.writeByte_s8j3t7$(toByte(128 | chi & 63));
        putUtf8Char_0$result = 3;
      }
       else {
        bb.writeByte_s8j3t7$(toByte(192 | chi >> 6 & 31));
        bb.writeByte_s8j3t7$(toByte(128 | chi & 63));
        putUtf8Char_0$result = 2;
      }
      this.size = tmp$_0 + putUtf8Char_0$result | 0;
    }
    if (limitedEnd < end) {
      return this.appendUTF8_1(csq, limitedEnd, end, this.appendNewBuffer_0());
    }
  };
  BytePacketBuilder_0.prototype.writeStringUtf8_61zpoe$ = function (s) {
    this.append_ezbsdh$(s, 0, s.length);
  };
  BytePacketBuilder_0.prototype.writeStringUtf8_6bul2c$ = function (cs) {
    this.append_ezbsdh$(cs, 0, cs.length);
  };
  BytePacketBuilder_0.prototype.putUtf8Char_0 = function ($receiver, v) {
    if ((new IntRange(1, 127)).contains_mef7kx$(v)) {
      $receiver.writeByte_s8j3t7$(toByte(v));
      return 1;
    }
     else if (v > 2047) {
      $receiver.writeByte_s8j3t7$(toByte(224 | v >> 12 & 15));
      $receiver.writeByte_s8j3t7$(toByte(128 | v >> 6 & 63));
      $receiver.writeByte_s8j3t7$(toByte(128 | v & 63));
      return 3;
    }
     else {
      $receiver.writeByte_s8j3t7$(toByte(192 | v >> 6 & 31));
      $receiver.writeByte_s8j3t7$(toByte(128 | v & 63));
      return 2;
    }
  };
  BytePacketBuilder_0.prototype.preview_6bo1y6$ = function (block) {
    var tmp$;
    var head = copyAll(this.head_0);
    var pool = head === BufferView$Companion_getInstance().Empty ? EmptyBufferViewPool_getInstance() : this.pool_0;
    var packet = new ByteReadPacket(head, pool);
    try {
      tmp$ = block(packet);
    }
    finally {
      packet.release();
    }
    return tmp$;
  };
  BytePacketBuilder_0.prototype.build = function () {
    var head = this.head_0;
    this.head_0 = BufferView$Companion_getInstance().Empty;
    this.tail_0 = BufferView$Companion_getInstance().Empty;
    this.size = 0;
    if (head === BufferView$Companion_getInstance().Empty)
      return new ByteReadPacket(head, EmptyBufferViewPool_getInstance());
    return new ByteReadPacket(head, this.pool_0);
  };
  BytePacketBuilder_0.prototype.release = function () {
    var head = this.head_0;
    var empty = BufferView$Companion_getInstance().Empty;
    if (head !== empty) {
      this.head_0 = empty;
      this.tail_0 = empty;
      releaseAll(head, this.pool_0);
      this.size = 0;
    }
  };
  BytePacketBuilder_0.prototype.reset = function () {
    this.release();
  };
  BytePacketBuilder_0.prototype.write_rr6hsg$ = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.BytePacketBuilder.write_rr6hsg$', wrapFunction(function () {
    return function (size, block) {
      var tmp$;
      var buffer = (tmp$ = this.last_0()) != null ? tmp$.writeRemaining >= size ? tmp$ : null : null;
      var tmp$_0;
      tmp$_0 = this.size;
      var tmp$_1;
      if (buffer == null) {
        tmp$_1 = block(this.appendNewBuffer_0());
      }
       else {
        tmp$_1 = block(buffer);
      }
      this.size = tmp$_0 + tmp$_1 | 0;
    };
  }));
  BytePacketBuilder_0.prototype.ensure_0 = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.last_0()) != null ? tmp$.writeRemaining > 0 ? tmp$ : null : null) != null ? tmp$_0 : this.appendNewBuffer_0();
  };
  BytePacketBuilder_0.prototype.appendNewBuffer_0 = function () {
    var new_0 = this.pool_0.borrow();
    if (this.head_0 === BufferView$Companion_getInstance().Empty) {
      new_0.reserveStartGap_za3lpa$(this.headerSizeHint_0);
    }
    new_0.reserveEndGap_za3lpa$(ByteReadPacket$Companion_getInstance().ReservedSize);
    new_0.byteOrder = this.byteOrder;
    this.last_1(new_0);
    return new_0;
  };
  BytePacketBuilder_0.prototype.last_0 = function () {
    var $receiver = this.tail_0;
    return $receiver !== BufferView$Companion_getInstance().Empty ? $receiver : null;
  };
  BytePacketBuilder_0.prototype.last_1 = function (new_0) {
    if (this.head_0 === BufferView$Companion_getInstance().Empty) {
      this.tail_0 = new_0;
      this.head_0 = new_0;
    }
     else {
      this.tail_0.next = new_0;
      this.tail_0 = new_0;
    }
  };
  BytePacketBuilder_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BytePacketBuilder',
    interfaces: [Appendable]
  };
  function ByteReadPacket(head, pool) {
    ByteReadPacket$Companion_getInstance();
    this.head_0 = head;
    this.pool = pool;
  }
  Object.defineProperty(ByteReadPacket.prototype, 'remaining', {
    get: function () {
      return remainingAll(this.head_0).toInt();
    }
  });
  Object.defineProperty(ByteReadPacket.prototype, 'isEmpty', {
    get: function () {
      return isEmpty(this.head_0);
    }
  });
  ByteReadPacket.prototype.copy = function () {
    return new ByteReadPacket(copyAll(this.head_0), this.pool);
  };
  ByteReadPacket.prototype.release = function () {
    var head = this.head_0;
    var empty = BufferView$Companion_getInstance().Empty;
    if (head !== empty) {
      this.head_0 = empty;
      releaseAll(head, this.pool);
    }
  };
  ByteReadPacket.prototype.stealAll_8be2vx$ = function () {
    var head = this.head_0;
    var empty = BufferView$Companion_getInstance().Empty;
    if (head === empty)
      return null;
    this.head_0 = empty;
    return head;
  };
  ByteReadPacket.prototype.steal_8be2vx$ = function () {
    var head = this.head_0;
    var next = head.next;
    var empty = BufferView$Companion_getInstance().Empty;
    if (head === empty)
      return null;
    this.head_0 = next != null ? next : empty;
    return head;
  };
  ByteReadPacket.prototype.readByte = function () {
    var tmp$;
    tmp$ = this.prepareRead_kcn2v3$(1);
    if (tmp$ == null) {
      throw new EOFException('Not enough data in packet to read ' + 1 + ' byte(s)');
    }
    var bb = tmp$;
    var rc = bb.readByte();
    this.afterRead_0();
    return rc;
  };
  ByteReadPacket.prototype.readShort = function () {
    var tmp$;
    tmp$ = this.prepareRead_kcn2v3$(2);
    if (tmp$ == null) {
      throw new EOFException('Not enough data in packet to read ' + 2 + ' byte(s)');
    }
    var bb = tmp$;
    var rc = bb.readShort();
    this.afterRead_0();
    return rc;
  };
  ByteReadPacket.prototype.readInt = function () {
    var tmp$;
    tmp$ = this.prepareRead_kcn2v3$(4);
    if (tmp$ == null) {
      throw new EOFException('Not enough data in packet to read ' + 4 + ' byte(s)');
    }
    var bb = tmp$;
    var rc = bb.readInt();
    this.afterRead_0();
    return rc;
  };
  ByteReadPacket.prototype.readLong = function () {
    var tmp$;
    tmp$ = this.prepareRead_kcn2v3$(8);
    if (tmp$ == null) {
      throw new EOFException('Not enough data in packet to read ' + 8 + ' byte(s)');
    }
    var bb = tmp$;
    var rc = bb.readLong();
    this.afterRead_0();
    return rc;
  };
  ByteReadPacket.prototype.readFloat = function () {
    var tmp$;
    tmp$ = this.prepareRead_kcn2v3$(4);
    if (tmp$ == null) {
      throw new EOFException('Not enough data in packet to read ' + 4 + ' byte(s)');
    }
    var bb = tmp$;
    var rc = bb.readFloat();
    this.afterRead_0();
    return rc;
  };
  ByteReadPacket.prototype.readDouble = function () {
    var tmp$;
    tmp$ = this.prepareRead_kcn2v3$(8);
    if (tmp$ == null) {
      throw new EOFException('Not enough data in packet to read ' + 8 + ' byte(s)');
    }
    var bb = tmp$;
    var rc = bb.readDouble();
    this.afterRead_0();
    return rc;
  };
  ByteReadPacket.prototype.readAvailable_fqrh44$ = function (dst) {
    return this.readAvailable_mj6st8$(dst, 0, dst.length);
  };
  ByteReadPacket.prototype.readAvailable_mj6st8$ = function (dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    if (!(offset >= 0)) {
      var message = "offset shouldn't be negative: " + offset;
      throw new IllegalArgumentException(message.toString());
    }
    if (!(length >= 0)) {
      var message_0 = "length shouldn't be negative: " + length;
      throw new IllegalArgumentException(message_0.toString());
    }
    if (!((offset + length | 0) <= dst.length)) {
      throw new IllegalArgumentException();
    }
    return this.readAsMuchAsPossible_0(dst, offset, length, 0);
  };
  ByteReadPacket.prototype.readFully_mj6st8$ = function (dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    var rc = this.readAvailable_mj6st8$(dst, offset, length);
    if (rc !== length)
      throw new EOFException('Not enough data in packet to fill buffer: ' + (length - rc | 0) + ' more bytes required');
  };
  ByteReadPacket.prototype.discard_za3lpa$ = function (n) {
    return this.discardAsMuchAsPossible_0(n, 0);
  };
  ByteReadPacket.prototype.discardExact_za3lpa$ = function (n) {
    if (this.discard_za3lpa$(n) !== n)
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  ByteReadPacket.prototype.readUTF8LineTo_a5kscm$ = function (out, limit) {
    var decoded = {v: 0};
    var size = 1;
    var cr = {v: false};
    var end = {v: false};
    while (!end.v) {
      var buffer = this.prepareRead_kcn2v3$(size);
      if (buffer == null) {
        if (size === 1)
          break;
        throw new MalformedUTF8InputException('Premature end of stream: expected ' + size + ' bytes');
      }
      var decodeUTF8$result;
      decodeUTF8$break: do {
        var byteCount = 0;
        var value = 0;
        var lastByteCount = 0;
        while (buffer.canRead()) {
          var v = buffer.readByte() & 255;
          if ((v & 128) === 0) {
            if (byteCount !== 0)
              throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
            var ch = toBoxedChar(toChar(v));
            var consumer$result;
            consumer$break: do {
              var tmp$;
              tmp$ = unboxChar(ch);
              if (tmp$ === 13) {
                if (cr.v) {
                  end.v = true;
                  consumer$result = false;
                  break consumer$break;
                }
                cr.v = true;
                consumer$result = true;
              }
               else if (tmp$ === 10) {
                this.afterRead_0();
                return true;
              }
               else {
                if (cr.v) {
                  end.v = true;
                  consumer$result = false;
                  break consumer$break;
                }
                if (decoded.v === limit) {
                  this.afterRead_0();
                  throw new BufferLimitExceededException('Too many characters in line: limit ' + limit + ' exceeded');
                }
                decoded.v = decoded.v + 1 | 0;
                out.append_s8itvh$(unboxChar(ch));
                consumer$result = true;
              }
            }
             while (false);
            if (!consumer$result) {
              buffer.pushBack_za3lpa$(1);
              decodeUTF8$result = -1;
              break decodeUTF8$break;
            }
          }
           else if (byteCount === 0) {
            var mask = 128;
            value = v;
            for (var i = 1; i <= 6; i++) {
              if ((value & mask) !== 0) {
                value = value & ~mask;
                mask = mask >> 1;
                byteCount = byteCount + 1 | 0;
              }
               else {
                break;
              }
            }
            lastByteCount = byteCount;
            byteCount = byteCount - 1 | 0;
            if (byteCount > buffer.readRemaining) {
              buffer.pushBack_za3lpa$(1);
              decodeUTF8$result = lastByteCount;
              break decodeUTF8$break;
            }
          }
           else {
            value = value << 6 | v & 127;
            byteCount = byteCount - 1 | 0;
            if (byteCount === 0) {
              if (isBmpCodePoint(value)) {
                var ch_0 = toBoxedChar(toChar(value));
                var consumer$result_0;
                consumer$break: do {
                  var tmp$_0;
                  tmp$_0 = unboxChar(ch_0);
                  if (tmp$_0 === 13) {
                    if (cr.v) {
                      end.v = true;
                      consumer$result_0 = false;
                      break consumer$break;
                    }
                    cr.v = true;
                    consumer$result_0 = true;
                  }
                   else if (tmp$_0 === 10) {
                    this.afterRead_0();
                    return true;
                  }
                   else {
                    if (cr.v) {
                      end.v = true;
                      consumer$result_0 = false;
                      break consumer$break;
                    }
                    if (decoded.v === limit) {
                      this.afterRead_0();
                      throw new BufferLimitExceededException('Too many characters in line: limit ' + limit + ' exceeded');
                    }
                    decoded.v = decoded.v + 1 | 0;
                    out.append_s8itvh$(unboxChar(ch_0));
                    consumer$result_0 = true;
                  }
                }
                 while (false);
                if (!consumer$result_0) {
                  buffer.pushBack_za3lpa$(lastByteCount);
                  decodeUTF8$result = -1;
                  break decodeUTF8$break;
                }
              }
               else if (!isValidCodePoint(value)) {
                throw new IllegalArgumentException('Malformed code-point ' + value + ' found');
              }
               else {
                var ch_1 = toBoxedChar(toChar(highSurrogate(value)));
                var consumer$result_1;
                consumer$break: do {
                  var tmp$_1;
                  tmp$_1 = unboxChar(ch_1);
                  if (tmp$_1 === 13) {
                    if (cr.v) {
                      end.v = true;
                      consumer$result_1 = false;
                      break consumer$break;
                    }
                    cr.v = true;
                    consumer$result_1 = true;
                  }
                   else if (tmp$_1 === 10) {
                    this.afterRead_0();
                    return true;
                  }
                   else {
                    if (cr.v) {
                      end.v = true;
                      consumer$result_1 = false;
                      break consumer$break;
                    }
                    if (decoded.v === limit) {
                      this.afterRead_0();
                      throw new BufferLimitExceededException('Too many characters in line: limit ' + limit + ' exceeded');
                    }
                    decoded.v = decoded.v + 1 | 0;
                    out.append_s8itvh$(unboxChar(ch_1));
                    consumer$result_1 = true;
                  }
                }
                 while (false);
                var tmp$_2 = !consumer$result_1;
                if (!tmp$_2) {
                  var ch_2 = toBoxedChar(toChar(lowSurrogate(value)));
                  var consumer$result_2;
                  consumer$break: do {
                    var tmp$_3;
                    tmp$_3 = unboxChar(ch_2);
                    if (tmp$_3 === 13) {
                      if (cr.v) {
                        end.v = true;
                        consumer$result_2 = false;
                        break consumer$break;
                      }
                      cr.v = true;
                      consumer$result_2 = true;
                    }
                     else if (tmp$_3 === 10) {
                      this.afterRead_0();
                      return true;
                    }
                     else {
                      if (cr.v) {
                        end.v = true;
                        consumer$result_2 = false;
                        break consumer$break;
                      }
                      if (decoded.v === limit) {
                        this.afterRead_0();
                        throw new BufferLimitExceededException('Too many characters in line: limit ' + limit + ' exceeded');
                      }
                      decoded.v = decoded.v + 1 | 0;
                      out.append_s8itvh$(unboxChar(ch_2));
                      consumer$result_2 = true;
                    }
                  }
                   while (false);
                  tmp$_2 = !consumer$result_2;
                }
                if (tmp$_2) {
                  buffer.pushBack_za3lpa$(lastByteCount);
                  decodeUTF8$result = -1;
                  break decodeUTF8$break;
                }
              }
              value = 0;
            }
          }
        }
        decodeUTF8$result = 0;
      }
       while (false);
      size = decodeUTF8$result;
      if (size === 0 || end.v) {
        this.afterRead_0();
        size = 1;
      }
    }
    return decoded.v > 0 || !this.isEmpty;
  };
  ByteReadPacket.prototype.readDirect_hf2s3b$ = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.ByteReadPacket.readDirect_hf2s3b$', wrapFunction(function () {
    var BufferView = _.kotlinx.io.core.BufferView;
    return function (block) {
      var current = this.head_0;
      if (current !== BufferView.Companion.Empty) {
        block(current);
        if (!current.canRead()) {
          this.releaseHead_wscfq8$(current);
        }
      }
    };
  }));
  function ByteReadPacket$readCbuf$ObjectLiteral(closure$cbuf, closure$off) {
    this.closure$cbuf = closure$cbuf;
    this.idx_0 = closure$off;
  }
  ByteReadPacket$readCbuf$ObjectLiteral.prototype.append_s8itvh$ = function (c) {
    var tmp$;
    this.closure$cbuf[tmp$ = this.idx_0, this.idx_0 = tmp$ + 1 | 0, tmp$] = c;
    return this;
  };
  ByteReadPacket$readCbuf$ObjectLiteral.prototype.append_gw00v9$ = function (csq) {
    throw new UnsupportedOperationException();
  };
  ByteReadPacket$readCbuf$ObjectLiteral.prototype.append_ezbsdh$ = function (csq, start, end) {
    throw new UnsupportedOperationException();
  };
  ByteReadPacket$readCbuf$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Appendable]
  };
  ByteReadPacket.prototype.readCbuf_uc2sr1$ = function (cbuf, off, len) {
    if (this.isEmpty)
      return -1;
    var out = new ByteReadPacket$readCbuf$ObjectLiteral(cbuf, off);
    return this.readText_5dvtqg$(out, 0, len);
  };
  ByteReadPacket.prototype.readText_5dvtqg$ = function (out, min, max) {
    if (min === void 0)
      min = 0;
    if (max === void 0)
      max = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
    return this.readASCII_0(out, min, max);
  };
  ByteReadPacket.prototype.readTextExact_a5kscm$ = function (out, exactCharacters) {
    this.readText_5dvtqg$(out, exactCharacters, exactCharacters);
  };
  ByteReadPacket.prototype.readText_vux9f0$ = function (min, max) {
    if (min === void 0)
      min = 0;
    if (max === void 0)
      max = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
    if (min === 0 && (max === 0 || this.isEmpty))
      return '';
    var $receiver = StringBuilder_init(coerceAtMost(coerceAtLeast(min, 16), max));
    this.readASCII_0($receiver, min, max);
    return $receiver.toString();
  };
  ByteReadPacket.prototype.readTextExact_za3lpa$ = function (exactCharacters) {
    return this.readText_vux9f0$(exactCharacters, exactCharacters);
  };
  ByteReadPacket.prototype.readASCII_0 = function (out, min, max) {
    var tmp$;
    if (max === 0 && min === 0)
      return 0;
    else if (this.isEmpty)
      if (min === 0)
        return 0;
      else
        throw new EOFException('at least ' + min + ' characters required but no bytes available');
    else if (max < min)
      throw new IllegalArgumentException('min should be less or equal to max but min = ' + min + ', max = ' + max);
    var copied = {v: 0};
    while (copied.v < max) {
      var buffer = this.prepareRead_kcn2v3$(1);
      if (buffer == null) {
        if (copied.v >= min)
          break;
        throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied.v);
      }
      var decodeASCII$result;
      decodeASCII$break: do {
        var tmp$_0;
        tmp$_0 = buffer.readRemaining;
        for (var i = 0; i < tmp$_0; i++) {
          var v = buffer.readByte() & 255;
          var tmp$_1 = (v & 128) !== 0;
          if (!tmp$_1) {
            var it = toBoxedChar(toChar(v));
            var consumer$result;
            if (copied.v === max) {
              consumer$result = false;
            }
             else {
              out.append_s8itvh$(unboxChar(it));
              copied.v = copied.v + 1 | 0;
              consumer$result = true;
            }
            tmp$_1 = !consumer$result;
          }
          if (tmp$_1) {
            buffer.pushBack_za3lpa$(1);
            decodeASCII$result = false;
            break decodeASCII$break;
          }
        }
        decodeASCII$result = true;
      }
       while (false);
      var rc = decodeASCII$result;
      if (rc) {
        this.afterRead_0();
      }
       else if (copied.v === max) {
        break;
      }
       else {
        return copied.v + this.readUtf8_0(out, min - copied.v | 0, max - copied.v | 0) | 0;
      }
    }
    if (copied.v > 0)
      tmp$ = copied.v;
    else if (isEmpty(this.head_0))
      tmp$ = -1;
    else
      tmp$ = 0;
    return tmp$;
  };
  ByteReadPacket.prototype.readUtf8_0 = function (out, min, max) {
    var size = 1;
    var copied = {v: 0};
    while (copied.v < max) {
      var buffer = this.prepareRead_kcn2v3$(size);
      if (buffer == null) {
        if (copied.v >= min)
          break;
        throw new MalformedUTF8InputException('Premature end of stream: expected ' + size + ' bytes');
      }
      var decodeUTF8$result;
      decodeUTF8$break: do {
        var byteCount = 0;
        var value = 0;
        var lastByteCount = 0;
        while (buffer.canRead()) {
          var v = buffer.readByte() & 255;
          if ((v & 128) === 0) {
            if (byteCount !== 0)
              throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
            var it = toBoxedChar(toChar(v));
            var consumer$result;
            if (copied.v === max) {
              consumer$result = false;
            }
             else {
              out.append_s8itvh$(unboxChar(it));
              copied.v = copied.v + 1 | 0;
              consumer$result = true;
            }
            if (!consumer$result) {
              buffer.pushBack_za3lpa$(1);
              decodeUTF8$result = -1;
              break decodeUTF8$break;
            }
          }
           else if (byteCount === 0) {
            var mask = 128;
            value = v;
            for (var i = 1; i <= 6; i++) {
              if ((value & mask) !== 0) {
                value = value & ~mask;
                mask = mask >> 1;
                byteCount = byteCount + 1 | 0;
              }
               else {
                break;
              }
            }
            lastByteCount = byteCount;
            byteCount = byteCount - 1 | 0;
            if (byteCount > buffer.readRemaining) {
              buffer.pushBack_za3lpa$(1);
              decodeUTF8$result = lastByteCount;
              break decodeUTF8$break;
            }
          }
           else {
            value = value << 6 | v & 127;
            byteCount = byteCount - 1 | 0;
            if (byteCount === 0) {
              if (isBmpCodePoint(value)) {
                var it_0 = toBoxedChar(toChar(value));
                var consumer$result_0;
                if (copied.v === max) {
                  consumer$result_0 = false;
                }
                 else {
                  out.append_s8itvh$(unboxChar(it_0));
                  copied.v = copied.v + 1 | 0;
                  consumer$result_0 = true;
                }
                if (!consumer$result_0) {
                  buffer.pushBack_za3lpa$(lastByteCount);
                  decodeUTF8$result = -1;
                  break decodeUTF8$break;
                }
              }
               else if (!isValidCodePoint(value)) {
                throw new IllegalArgumentException('Malformed code-point ' + value + ' found');
              }
               else {
                var it_1 = toBoxedChar(toChar(highSurrogate(value)));
                var consumer$result_1;
                if (copied.v === max) {
                  consumer$result_1 = false;
                }
                 else {
                  out.append_s8itvh$(unboxChar(it_1));
                  copied.v = copied.v + 1 | 0;
                  consumer$result_1 = true;
                }
                var tmp$ = !consumer$result_1;
                if (!tmp$) {
                  var it_2 = toBoxedChar(toChar(lowSurrogate(value)));
                  var consumer$result_2;
                  if (copied.v === max) {
                    consumer$result_2 = false;
                  }
                   else {
                    out.append_s8itvh$(unboxChar(it_2));
                    copied.v = copied.v + 1 | 0;
                    consumer$result_2 = true;
                  }
                  tmp$ = !consumer$result_2;
                }
                if (tmp$) {
                  buffer.pushBack_za3lpa$(lastByteCount);
                  decodeUTF8$result = -1;
                  break decodeUTF8$break;
                }
              }
              value = 0;
            }
          }
        }
        decodeUTF8$result = 0;
      }
       while (false);
      size = decodeUTF8$result;
      if (size === 0) {
        this.afterRead_0();
        size = 1;
      }
    }
    return copied.v;
  };
  ByteReadPacket.prototype.discardAsMuchAsPossible_0 = function (n, skipped) {
    var tmp$;
    if (n === 0)
      return skipped;
    tmp$ = this.prepareRead_kcn2v3$(1);
    if (tmp$ == null) {
      return skipped;
    }
    var current = tmp$;
    var a = current.readRemaining;
    var size = Math_0.min(a, n);
    current.discardExact_za3lpa$(size);
    this.afterRead_0();
    return this.discardAsMuchAsPossible_0(n - size | 0, skipped + size | 0);
  };
  ByteReadPacket.prototype.readAsMuchAsPossible_0 = function (array, offset, length, copied) {
    var tmp$, tmp$_0;
    if (length === 0)
      return copied;
    tmp$ = this.prepareRead_kcn2v3$(1);
    if (tmp$ == null) {
      return copied;
    }
    var current = tmp$;
    var b = current.readRemaining;
    var size = Math_0.min(length, b);
    current.read_mj6st8$(array, offset, size);
    if (size !== length || current.readRemaining === 0) {
      this.afterRead_0();
      tmp$_0 = this.readAsMuchAsPossible_0(array, offset + size | 0, length - size | 0, copied + size | 0);
    }
     else {
      tmp$_0 = copied + size | 0;
    }
    return tmp$_0;
  };
  ByteReadPacket.prototype.readN_0 = function (n, block) {
    var tmp$;
    tmp$ = this.prepareRead_kcn2v3$(n);
    if (tmp$ == null) {
      throw new EOFException('Not enough data in packet to read ' + n + ' byte(s)');
    }
    var bb = tmp$;
    var rc = block(bb);
    this.afterRead_0();
    return rc;
  };
  ByteReadPacket.prototype.prepareRead_kcn2v3$ = function (minSize) {
    var tmp$;
    var head = this.head_0;
    var headSize = head.readRemaining;
    if (headSize >= minSize)
      return head;
    tmp$ = head.next;
    if (tmp$ == null) {
      return null;
    }
    var next = tmp$;
    head.writeBufferAppend_xdubrm$(next, minSize - headSize | 0);
    if (next.readRemaining === 0) {
      head.next = next.next;
      next.release_2r3c1x$(this.pool);
    }
    if (head.readRemaining >= minSize)
      return head;
    if (minSize > ByteReadPacket$Companion_getInstance().ReservedSize)
      throw new IllegalStateException('minSize of ' + minSize + ' is too big (should be less than ' + ByteReadPacket$Companion_getInstance().ReservedSize);
    return this.prepareRead_kcn2v3$(minSize);
  };
  ByteReadPacket.prototype.afterRead_0 = function () {
    var head = this.head_0;
    if (head.readRemaining === 0) {
      this.releaseHead_wscfq8$(head);
    }
  };
  ByteReadPacket.prototype.releaseHead_wscfq8$ = function (head) {
    var next = head.next;
    this.head_0 = next != null ? next : BufferView$Companion_getInstance().Empty;
    head.release_2r3c1x$(this.pool);
  };
  function ByteReadPacket$Companion() {
    ByteReadPacket$Companion_instance = this;
    this.Empty = new ByteReadPacket(BufferView$Companion_getInstance().Empty, new ByteReadPacket$Companion$Empty$ObjectLiteral());
    this.ReservedSize = 8;
  }
  function ByteReadPacket$Companion$Empty$ObjectLiteral() {
    NoPoolImpl.call(this);
  }
  ByteReadPacket$Companion$Empty$ObjectLiteral.prototype.borrow = function () {
    return BufferView$Companion_getInstance().Empty;
  };
  ByteReadPacket$Companion$Empty$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NoPoolImpl]
  };
  ByteReadPacket$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ByteReadPacket$Companion_instance = null;
  function ByteReadPacket$Companion_getInstance() {
    if (ByteReadPacket$Companion_instance === null) {
      new ByteReadPacket$Companion();
    }
    return ByteReadPacket$Companion_instance;
  }
  ByteReadPacket.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteReadPacket',
    interfaces: []
  };
  function readUTF8Line($receiver, estimate, limit) {
    if (estimate === void 0)
      estimate = 16;
    if (limit === void 0)
      limit = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
    if ($receiver.isEmpty)
      return null;
    var sb = StringBuilder_init(estimate);
    return $receiver.readUTF8LineTo_a5kscm$(sb, limit) ? sb.toString() : null;
  }
  function readBytes($receiver, n) {
    if (n === void 0)
      n = $receiver.remaining;
    var $receiver_0 = new Int8Array(n);
    $receiver.readFully_mj6st8$($receiver_0, 0, n);
    return $receiver_0;
  }
  var decodeASCII = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.decodeASCII_s9sy5v$', wrapFunction(function () {
    var toChar = Kotlin.toChar;
    var toBoxedChar = Kotlin.toBoxedChar;
    return function ($receiver, consumer) {
      var tmp$;
      tmp$ = $receiver.readRemaining;
      for (var i = 0; i < tmp$; i++) {
        var v = $receiver.readByte() & 255;
        if ((v & 128) !== 0 || !consumer(toBoxedChar(toChar(v)))) {
          $receiver.pushBack_za3lpa$(1);
          return false;
        }
      }
      return true;
    };
  }));
  var decodeUTF8 = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.decodeUTF8_s9sy5v$', wrapFunction(function () {
    var MalformedUTF8InputException_init = _.kotlinx.io.core.MalformedUTF8InputException;
    var toChar = Kotlin.toChar;
    var toBoxedChar = Kotlin.toBoxedChar;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException;
    return function ($receiver, consumer) {
      var byteCount = 0;
      var value = 0;
      var lastByteCount = 0;
      while ($receiver.canRead()) {
        var v = $receiver.readByte() & 255;
        if ((v & 128) === 0) {
          if (byteCount !== 0)
            throw new MalformedUTF8InputException_init('Expected ' + byteCount + ' more character bytes');
          if (!consumer(toBoxedChar(toChar(v)))) {
            $receiver.pushBack_za3lpa$(1);
            return -1;
          }
        }
         else if (byteCount === 0) {
          var mask = 128;
          value = v;
          for (var i = 1; i <= 6; i++) {
            if ((value & mask) !== 0) {
              value = value & ~mask;
              mask = mask >> 1;
              byteCount = byteCount + 1 | 0;
            }
             else {
              break;
            }
          }
          lastByteCount = byteCount;
          byteCount = byteCount - 1 | 0;
          if (byteCount > $receiver.readRemaining) {
            $receiver.pushBack_za3lpa$(1);
            return lastByteCount;
          }
        }
         else {
          value = value << 6 | v & 127;
          byteCount = byteCount - 1 | 0;
          if (byteCount === 0) {
            if (isBmpCodePoint(value)) {
              if (!consumer(toBoxedChar(toChar(value)))) {
                $receiver.pushBack_za3lpa$(lastByteCount);
                return -1;
              }
            }
             else if (!isValidCodePoint(value)) {
              throw new IllegalArgumentException_init('Malformed code-point ' + value + ' found');
            }
             else {
              if (!consumer(toBoxedChar(toChar(highSurrogate(value)))) || !consumer(toBoxedChar(toChar(lowSurrogate(value))))) {
                $receiver.pushBack_za3lpa$(lastByteCount);
                return -1;
              }
            }
            value = 0;
          }
        }
      }
      return 0;
    };
  }));
  var MaxCodePoint;
  var MinLowSurrogate;
  var MinHighSurrogate;
  var MinSupplementary;
  var HighSurrogateMagic;
  function isBmpCodePoint(cp) {
    return cp >>> 16 === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= MaxCodePoint;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + MinLowSurrogate | 0;
  }
  function highSurrogate(cp) {
    return (cp >>> 10) + HighSurrogateMagic | 0;
  }
  function MalformedUTF8InputException(message) {
    Exception.call(this, message);
    this.name = 'MalformedUTF8InputException';
  }
  MalformedUTF8InputException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MalformedUTF8InputException',
    interfaces: [Exception]
  };
  function ObjectPool() {
  }
  ObjectPool.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ObjectPool',
    interfaces: []
  };
  function NoPoolImpl() {
  }
  Object.defineProperty(NoPoolImpl.prototype, 'capacity', {
    get: function () {
      return 0;
    }
  });
  NoPoolImpl.prototype.recycle_trkh7z$ = function (instance) {
  };
  NoPoolImpl.prototype.dispose = function () {
  };
  NoPoolImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoPoolImpl',
    interfaces: [ObjectPool]
  };
  $$importsForInline$$['kotlinx-io-js'] = _;
  Object.defineProperty(BufferView, 'Companion', {
    get: BufferView$Companion_getInstance
  });
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$io = package$kotlinx.io || (package$kotlinx.io = {});
  var package$core = package$io.core || (package$io.core = {});
  package$core.BufferView = BufferView;
  Object.defineProperty(ByteOrder, 'BIG_ENDIAN', {
    get: ByteOrder$BIG_ENDIAN_getInstance
  });
  Object.defineProperty(ByteOrder, 'LITTLE_ENDIAN', {
    get: ByteOrder$LITTLE_ENDIAN_getInstance
  });
  Object.defineProperty(ByteOrder, 'Companion', {
    get: ByteOrder$Companion_getInstance
  });
  package$core.ByteOrder = ByteOrder;
  Object.defineProperty(package$core, 'PACKET_MAX_COPY_SIZE', {
    get: function () {
      return PACKET_MAX_COPY_SIZE;
    }
  });
  Object.defineProperty(package$core, 'BUFFER_VIEW_POOL_SIZE_8be2vx$', {
    get: function () {
      return BUFFER_VIEW_POOL_SIZE;
    }
  });
  Object.defineProperty(package$core, 'BUFFER_VIEW_SIZE_8be2vx$', {
    get: function () {
      return BUFFER_VIEW_SIZE;
    }
  });
  package$core.BytePacketBuilder_za3lpa$ = BytePacketBuilder;
  package$core.EOFException = EOFException;
  var package$js = package$io.js || (package$io.js = {});
  package$js.readText_5725gb$ = readText;
  package$js.readText_g056j7$ = readText_0;
  package$js.TextDecoderFatal_t8jjq2$ = TextDecoderFatal;
  package$js.decodeStream_ggodax$ = decodeStream;
  package$js.readAvailable_5dxkts$ = readAvailable;
  package$js.readAvailable_yzr1a1$ = readAvailable_0;
  package$js.readFully_yzr1a1$ = readFully;
  package$js.readFully_5dxkts$ = readFully_0;
  package$js.readArrayBuffer_3lionn$ = readArrayBuffer;
  package$js.writeFully_omiljy$ = writeFully;
  package$js.writeFully_w89fyx$ = writeFully_0;
  package$js.sendPacket_tx3ju1$ = sendPacket;
  package$core.buildPacket_tmk3ki$ = buildPacket;
  package$js.sendPacket_wglm47$ = sendPacket_0;
  package$js.packet_lwnq0v$ = packet;
  package$js.sendPacket_8zvei$ = sendPacket_2;
  package$js.sendPacket_eks1ru$ = sendPacket_1;
  package$js.responsePacket_rezk82$ = responsePacket;
  var package$pool = package$io.pool || (package$io.pool = {});
  package$pool.DefaultPool = DefaultPool;
  Object.defineProperty(package$core, 'EmptyBufferViewPool', {
    get: EmptyBufferViewPool_getInstance
  });
  package$core.releaseAll_xrxjkl$ = releaseAll;
  package$core.copyAll_lz4ryn$ = copyAll;
  package$core.findTail_lz4ryn$ = findTail;
  package$core.remainingAll_lz4ryn$ = remainingAll;
  package$core.isEmpty_lz4ryn$ = isEmpty;
  package$core.BufferLimitExceededException = BufferLimitExceededException;
  package$core.BytePacketBuilder = BytePacketBuilder_0;
  Object.defineProperty(ByteReadPacket, 'Companion', {
    get: ByteReadPacket$Companion_getInstance
  });
  package$core.ByteReadPacket = ByteReadPacket;
  package$core.readUTF8Line_i9nmip$ = readUTF8Line;
  package$core.readBytes_3lionn$ = readBytes;
  package$core.decodeASCII_s9sy5v$ = decodeASCII;
  package$core.decodeUTF8_s9sy5v$ = decodeUTF8;
  package$core.MalformedUTF8InputException = MalformedUTF8InputException;
  package$pool.ObjectPool = ObjectPool;
  package$pool.NoPoolImpl = NoPoolImpl;
  PACKET_MAX_COPY_SIZE = 200;
  BUFFER_VIEW_POOL_SIZE = 100;
  BUFFER_VIEW_SIZE = 4096;
  var $receiver = new Any();
  $receiver.stream = true;
  STREAM_TRUE = $receiver;
  var $receiver_0 = new Any();
  $receiver_0.fatal = true;
  FATAL_TRUE = $receiver_0;
  MaxCodePoint = 1114111;
  MinLowSurrogate = 56320;
  MinHighSurrogate = 55296;
  MinSupplementary = 65536;
  HighSurrogateMagic = MinHighSurrogate - (MinSupplementary >>> 10) | 0;
  Kotlin.defineModule('kotlinx-io-js', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=kotlinx-io-js.js.map
