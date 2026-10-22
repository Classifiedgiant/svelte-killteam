/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Number = $util.global.Number, $String = $util.global.String, $Array = $util.global.Array, $isFinite = $util.global.isFinite;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const GameStates = $root.GameStates = (() => {

    /**
     * Namespace GameStates.
     * @exports GameStates
     * @namespace
     */
    const GameStates = {};

    GameStates.ServerMessage = (function() {

        /**
         * Properties of a ServerMessage.
         * @typedef {Object} GameStates.ServerMessage.$Properties
         * @property {GameStates.StartGame.$Properties|null} [startGame] ServerMessage startGame
         * @property {GameStates.WaitingForPlayer.$Properties|null} [waitingForPlayer] ServerMessage waitingForPlayer
         * @property {"startGame"|"waitingForPlayer"} [payload] ServerMessage payload
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ServerMessage.
         * @memberof GameStates
         * @interface IServerMessage
         * @augments GameStates.ServerMessage.$Properties
         * @deprecated Use GameStates.ServerMessage.$Properties instead.
         */

        /**
         * Narrowed shape of a ServerMessage.
         * @typedef {{
         *   startGame?: GameStates.StartGame.$Shape|null;
         *   waitingForPlayer?: GameStates.WaitingForPlayer.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * } & (
         *   ({ payload?: undefined; startGame?: null; waitingForPlayer?: null }|{ payload?: "startGame"; startGame: GameStates.StartGame.$Shape; waitingForPlayer?: null }|{ payload?: "waitingForPlayer"; startGame?: null; waitingForPlayer: GameStates.WaitingForPlayer.$Shape })
         * )} GameStates.ServerMessage.$Shape
         */

        /**
         * Constructs a new ServerMessage.
         * @memberof GameStates
         * @classdesc Represents a ServerMessage.
         * @constructor
         * @param {GameStates.ServerMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ServerMessage = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ServerMessage startGame.
         * @member {GameStates.StartGame.$Properties|null|undefined} startGame
         * @memberof GameStates.ServerMessage
         * @instance
         */
        ServerMessage.prototype.startGame = null;

        /**
         * ServerMessage waitingForPlayer.
         * @member {GameStates.WaitingForPlayer.$Properties|null|undefined} waitingForPlayer
         * @memberof GameStates.ServerMessage
         * @instance
         */
        ServerMessage.prototype.waitingForPlayer = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ServerMessage payload.
         * @member {"startGame"|"waitingForPlayer"|undefined} payload
         * @memberof GameStates.ServerMessage
         * @instance
         */
        $Object.defineProperty(ServerMessage.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["startGame", "waitingForPlayer"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @function create
         * @memberof GameStates.ServerMessage
         * @static
         * @param {GameStates.ServerMessage.$Properties=} [properties] Properties to set
         * @returns {GameStates.ServerMessage} ServerMessage instance
         * @type {{
         *   (properties: GameStates.ServerMessage.$Shape): GameStates.ServerMessage & GameStates.ServerMessage.$Shape;
         *   (properties?: GameStates.ServerMessage.$Properties): GameStates.ServerMessage;
         * }}
         */
        ServerMessage.create = function(properties) {
            return new ServerMessage(properties);
        };

        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link GameStates.ServerMessage.verify|verify} messages.
         * @function encode
         * @memberof GameStates.ServerMessage
         * @static
         * @param {GameStates.ServerMessage.$Properties} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.startGame != null && $Object.hasOwnProperty.call(message, "startGame"))
                $root.GameStates.StartGame.encode(message.startGame, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.waitingForPlayer != null && $Object.hasOwnProperty.call(message, "waitingForPlayer"))
                $root.GameStates.WaitingForPlayer.encode(message.waitingForPlayer, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link GameStates.ServerMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameStates.ServerMessage
         * @static
         * @param {GameStates.ServerMessage.$Properties} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @function decode
         * @memberof GameStates.ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameStates.ServerMessage & GameStates.ServerMessage.$Shape} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMessage.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GameStates.ServerMessage();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.startGame = $root.GameStates.StartGame.decode(reader, reader.uint32(), $undefined, _depth + 1, message.startGame);
                        message.payload = "startGame";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.waitingForPlayer = $root.GameStates.WaitingForPlayer.decode(reader, reader.uint32(), $undefined, _depth + 1, message.waitingForPlayer);
                        message.payload = "waitingForPlayer";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameStates.ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameStates.ServerMessage & GameStates.ServerMessage.$Shape} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMessage.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerMessage message.
         * @function verify
         * @memberof GameStates.ServerMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerMessage.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.startGame != null && $Object.hasOwnProperty.call(message, "startGame")) {
                properties.payload = 1;
                {
                    let error = $root.GameStates.StartGame.verify(message.startGame, _depth + 1);
                    if (error)
                        return "startGame." + error;
                }
            }
            if (message.waitingForPlayer != null && $Object.hasOwnProperty.call(message, "waitingForPlayer")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.GameStates.WaitingForPlayer.verify(message.waitingForPlayer, _depth + 1);
                    if (error)
                        return "waitingForPlayer." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameStates.ServerMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameStates.ServerMessage} ServerMessage
         */
        ServerMessage.fromObject = function (object, _depth) {
            if (object instanceof $root.GameStates.ServerMessage)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".GameStates.ServerMessage: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.GameStates.ServerMessage();
            if (object.startGame != null) {
                if (!$util.isObject(object.startGame))
                    throw $TypeError(".GameStates.ServerMessage.startGame: object expected");
                message.startGame = $root.GameStates.StartGame.fromObject(object.startGame, _depth + 1);
            }
            if (object.waitingForPlayer != null) {
                if (!$util.isObject(object.waitingForPlayer))
                    throw $TypeError(".GameStates.ServerMessage.waitingForPlayer: object expected");
                message.waitingForPlayer = $root.GameStates.WaitingForPlayer.fromObject(object.waitingForPlayer, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameStates.ServerMessage
         * @static
         * @param {GameStates.ServerMessage} message ServerMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerMessage.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.startGame != null && $Object.hasOwnProperty.call(message, "startGame")) {
                object.startGame = $root.GameStates.StartGame.toObject(message.startGame, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "startGame";
            }
            if (message.waitingForPlayer != null && $Object.hasOwnProperty.call(message, "waitingForPlayer")) {
                object.waitingForPlayer = $root.GameStates.WaitingForPlayer.toObject(message.waitingForPlayer, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "waitingForPlayer";
            }
            return object;
        };

        /**
         * Converts this ServerMessage to JSON.
         * @function toJSON
         * @memberof GameStates.ServerMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerMessage.prototype.toJSON = function() {
            return ServerMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ServerMessage
         * @function getTypeUrl
         * @memberof GameStates.ServerMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ServerMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/GameStates.ServerMessage";
        };

        return ServerMessage;
    })();

    GameStates.StartGame = (function() {

        /**
         * Properties of a StartGame.
         * @typedef {Object} GameStates.StartGame.$Properties
         * @property {GameStates.GameType|null} [gameType] StartGame gameType
         * @property {number|null} [player1] StartGame player1
         * @property {number|null} [player2] StartGame player2
         * @property {GameStates.Army.$Properties|null} [player1Army] StartGame player1Army
         * @property {GameStates.Army.$Properties|null} [player2Army] StartGame player2Army
         * @property {GameStates.Level.$Properties|null} [level] StartGame level
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StartGame.
         * @memberof GameStates
         * @interface IStartGame
         * @augments GameStates.StartGame.$Properties
         * @deprecated Use GameStates.StartGame.$Properties instead.
         */

        /**
         * Shape of a StartGame.
         * @typedef {GameStates.StartGame.$Properties} GameStates.StartGame.$Shape
         */

        /**
         * Constructs a new StartGame.
         * @memberof GameStates
         * @classdesc Represents a StartGame.
         * @constructor
         * @param {GameStates.StartGame.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StartGame = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * StartGame gameType.
         * @member {GameStates.GameType} gameType
         * @memberof GameStates.StartGame
         * @instance
         */
        StartGame.prototype.gameType = 0;

        /**
         * StartGame player1.
         * @member {number} player1
         * @memberof GameStates.StartGame
         * @instance
         */
        StartGame.prototype.player1 = 0;

        /**
         * StartGame player2.
         * @member {number} player2
         * @memberof GameStates.StartGame
         * @instance
         */
        StartGame.prototype.player2 = 0;

        /**
         * StartGame player1Army.
         * @member {GameStates.Army.$Properties|null|undefined} player1Army
         * @memberof GameStates.StartGame
         * @instance
         */
        StartGame.prototype.player1Army = null;

        /**
         * StartGame player2Army.
         * @member {GameStates.Army.$Properties|null|undefined} player2Army
         * @memberof GameStates.StartGame
         * @instance
         */
        StartGame.prototype.player2Army = null;

        /**
         * StartGame level.
         * @member {GameStates.Level.$Properties|null|undefined} level
         * @memberof GameStates.StartGame
         * @instance
         */
        StartGame.prototype.level = null;

        /**
         * Creates a new StartGame instance using the specified properties.
         * @function create
         * @memberof GameStates.StartGame
         * @static
         * @param {GameStates.StartGame.$Properties=} [properties] Properties to set
         * @returns {GameStates.StartGame} StartGame instance
         * @type {{
         *   (properties: GameStates.StartGame.$Shape): GameStates.StartGame & GameStates.StartGame.$Shape;
         *   (properties?: GameStates.StartGame.$Properties): GameStates.StartGame;
         * }}
         */
        StartGame.create = function(properties) {
            return new StartGame(properties);
        };

        /**
         * Encodes the specified StartGame message. Does not implicitly {@link GameStates.StartGame.verify|verify} messages.
         * @function encode
         * @memberof GameStates.StartGame
         * @static
         * @param {GameStates.StartGame.$Properties} message StartGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGame.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.gameType != null && $Object.hasOwnProperty.call(message, "gameType") && message.gameType !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameType);
            if (message.player1 != null && $Object.hasOwnProperty.call(message, "player1") && message.player1 !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.player1);
            if (message.player2 != null && $Object.hasOwnProperty.call(message, "player2") && message.player2 !== 0)
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.player2);
            if (message.player1Army != null && $Object.hasOwnProperty.call(message, "player1Army"))
                $root.GameStates.Army.encode(message.player1Army, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.player2Army != null && $Object.hasOwnProperty.call(message, "player2Army"))
                $root.GameStates.Army.encode(message.player2Army, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.level != null && $Object.hasOwnProperty.call(message, "level"))
                $root.GameStates.Level.encode(message.level, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StartGame message, length delimited. Does not implicitly {@link GameStates.StartGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameStates.StartGame
         * @static
         * @param {GameStates.StartGame.$Properties} message StartGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGame.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StartGame message from the specified reader or buffer.
         * @function decode
         * @memberof GameStates.StartGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameStates.StartGame & GameStates.StartGame.$Shape} StartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGame.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GameStates.StartGame(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.gameType = value;
                        else
                            delete message.gameType;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.player1 = value;
                        else
                            delete message.player1;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.player2 = value;
                        else
                            delete message.player2;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.player1Army = $root.GameStates.Army.decode(reader, reader.uint32(), $undefined, _depth + 1, message.player1Army);
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.player2Army = $root.GameStates.Army.decode(reader, reader.uint32(), $undefined, _depth + 1, message.player2Army);
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.level = $root.GameStates.Level.decode(reader, reader.uint32(), $undefined, _depth + 1, message.level);
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StartGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameStates.StartGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameStates.StartGame & GameStates.StartGame.$Shape} StartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGame.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartGame message.
         * @function verify
         * @memberof GameStates.StartGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartGame.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.gameType != null && $Object.hasOwnProperty.call(message, "gameType"))
                if (typeof message.gameType !== "number" || (message.gameType | 0) !== message.gameType)
                    return "gameType: enum value expected";
            if (message.player1 != null && $Object.hasOwnProperty.call(message, "player1"))
                if (!$util.isInteger(message.player1))
                    return "player1: integer expected";
            if (message.player2 != null && $Object.hasOwnProperty.call(message, "player2"))
                if (!$util.isInteger(message.player2))
                    return "player2: integer expected";
            if (message.player1Army != null && $Object.hasOwnProperty.call(message, "player1Army")) {
                let error = $root.GameStates.Army.verify(message.player1Army, _depth + 1);
                if (error)
                    return "player1Army." + error;
            }
            if (message.player2Army != null && $Object.hasOwnProperty.call(message, "player2Army")) {
                let error = $root.GameStates.Army.verify(message.player2Army, _depth + 1);
                if (error)
                    return "player2Army." + error;
            }
            if (message.level != null && $Object.hasOwnProperty.call(message, "level")) {
                let error = $root.GameStates.Level.verify(message.level, _depth + 1);
                if (error)
                    return "level." + error;
            }
            return null;
        };

        /**
         * Creates a StartGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameStates.StartGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameStates.StartGame} StartGame
         */
        StartGame.fromObject = function (object, _depth) {
            if (object instanceof $root.GameStates.StartGame)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".GameStates.StartGame: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.GameStates.StartGame();
            if (object.gameType !== 0 && (typeof object.gameType !== "string" || $root.GameStates.GameType[object.gameType] !== 0))
                switch (object.gameType) {
                case "GAMETYPE_FREE_FOR_ALL":
                case 0:
                    message.gameType = 0;
                    break;
                default:
                    if (typeof object.gameType === "number" && (object.gameType | 0) === object.gameType)
                        message.gameType = object.gameType;
                }
            if (object.player1 != null)
                if ($Number(object.player1) !== 0)
                    message.player1 = object.player1 >>> 0;
            if (object.player2 != null)
                if ($Number(object.player2) !== 0)
                    message.player2 = object.player2 >>> 0;
            if (object.player1Army != null) {
                if (!$util.isObject(object.player1Army))
                    throw $TypeError(".GameStates.StartGame.player1Army: object expected");
                message.player1Army = $root.GameStates.Army.fromObject(object.player1Army, _depth + 1);
            }
            if (object.player2Army != null) {
                if (!$util.isObject(object.player2Army))
                    throw $TypeError(".GameStates.StartGame.player2Army: object expected");
                message.player2Army = $root.GameStates.Army.fromObject(object.player2Army, _depth + 1);
            }
            if (object.level != null) {
                if (!$util.isObject(object.level))
                    throw $TypeError(".GameStates.StartGame.level: object expected");
                message.level = $root.GameStates.Level.fromObject(object.level, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a StartGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameStates.StartGame
         * @static
         * @param {GameStates.StartGame} message StartGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartGame.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.gameType = options.enums === $String ? "GAMETYPE_FREE_FOR_ALL" : 0;
                object.player1 = 0;
                object.player2 = 0;
                object.player1Army = null;
                object.player2Army = null;
                object.level = null;
            }
            if (message.gameType != null && $Object.hasOwnProperty.call(message, "gameType"))
                object.gameType = options.enums === $String ? $root.GameStates.GameType[message.gameType] === $undefined ? message.gameType : $root.GameStates.GameType[message.gameType] : message.gameType;
            if (message.player1 != null && $Object.hasOwnProperty.call(message, "player1"))
                object.player1 = message.player1;
            if (message.player2 != null && $Object.hasOwnProperty.call(message, "player2"))
                object.player2 = message.player2;
            if (message.player1Army != null && $Object.hasOwnProperty.call(message, "player1Army"))
                object.player1Army = $root.GameStates.Army.toObject(message.player1Army, options, _depth + 1);
            if (message.player2Army != null && $Object.hasOwnProperty.call(message, "player2Army"))
                object.player2Army = $root.GameStates.Army.toObject(message.player2Army, options, _depth + 1);
            if (message.level != null && $Object.hasOwnProperty.call(message, "level"))
                object.level = $root.GameStates.Level.toObject(message.level, options, _depth + 1);
            return object;
        };

        /**
         * Converts this StartGame to JSON.
         * @function toJSON
         * @memberof GameStates.StartGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartGame.prototype.toJSON = function() {
            return StartGame.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for StartGame
         * @function getTypeUrl
         * @memberof GameStates.StartGame
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StartGame.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/GameStates.StartGame";
        };

        return StartGame;
    })();

    /**
     * GameType enum.
     * @name GameStates.GameType
     * @enum {number}
     * @property {number} GAMETYPE_FREE_FOR_ALL=0 GAMETYPE_FREE_FOR_ALL value
     */
    GameStates.GameType = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "GAMETYPE_FREE_FOR_ALL"] = 0;
        return values;
    })();

    GameStates.Army = (function() {

        /**
         * Properties of an Army.
         * @typedef {Object} GameStates.Army.$Properties
         * @property {string|null} [name] Army name
         * @property {Array.<GameStates.Operator.$Properties>|null} [operative] Army operative
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an Army.
         * @memberof GameStates
         * @interface IArmy
         * @augments GameStates.Army.$Properties
         * @deprecated Use GameStates.Army.$Properties instead.
         */

        /**
         * Shape of an Army.
         * @typedef {GameStates.Army.$Properties} GameStates.Army.$Shape
         */

        /**
         * Constructs a new Army.
         * @memberof GameStates
         * @classdesc Represents an Army.
         * @constructor
         * @param {GameStates.Army.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Army = function (properties) {
            this.operative = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Army name.
         * @member {string} name
         * @memberof GameStates.Army
         * @instance
         */
        Army.prototype.name = "";

        /**
         * Army operative.
         * @member {Array.<GameStates.Operator.$Properties>} operative
         * @memberof GameStates.Army
         * @instance
         */
        Army.prototype.operative = $util.emptyArray;

        /**
         * Creates a new Army instance using the specified properties.
         * @function create
         * @memberof GameStates.Army
         * @static
         * @param {GameStates.Army.$Properties=} [properties] Properties to set
         * @returns {GameStates.Army} Army instance
         * @type {{
         *   (properties: GameStates.Army.$Shape): GameStates.Army & GameStates.Army.$Shape;
         *   (properties?: GameStates.Army.$Properties): GameStates.Army;
         * }}
         */
        Army.create = function(properties) {
            return new Army(properties);
        };

        /**
         * Encodes the specified Army message. Does not implicitly {@link GameStates.Army.verify|verify} messages.
         * @function encode
         * @memberof GameStates.Army
         * @static
         * @param {GameStates.Army.$Properties} message Army message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Army.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.operative != null && message.operative.length)
                for (let i = 0; i < message.operative.length; ++i)
                    $root.GameStates.Operator.encode(message.operative[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Army message, length delimited. Does not implicitly {@link GameStates.Army.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameStates.Army
         * @static
         * @param {GameStates.Army.$Properties} message Army message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Army.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an Army message from the specified reader or buffer.
         * @function decode
         * @memberof GameStates.Army
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameStates.Army & GameStates.Army.$Shape} Army
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Army.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GameStates.Army(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.operative && message.operative.length))
                            message.operative = [];
                        message.operative.push($root.GameStates.Operator.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an Army message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameStates.Army
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameStates.Army & GameStates.Army.$Shape} Army
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Army.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Army message.
         * @function verify
         * @memberof GameStates.Army
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Army.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.operative != null && $Object.hasOwnProperty.call(message, "operative")) {
                if (!$Array.isArray(message.operative))
                    return "operative: array expected";
                for (let i = 0; i < message.operative.length; ++i) {
                    let error = $root.GameStates.Operator.verify(message.operative[i], _depth + 1);
                    if (error)
                        return "operative." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Army message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameStates.Army
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameStates.Army} Army
         */
        Army.fromObject = function (object, _depth) {
            if (object instanceof $root.GameStates.Army)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".GameStates.Army: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.GameStates.Army();
            if (object.name != null)
                if (typeof object.name !== "string" || object.name.length)
                    message.name = $String(object.name);
            if (object.operative) {
                if (!$Array.isArray(object.operative))
                    throw $TypeError(".GameStates.Army.operative: array expected");
                message.operative = $Array(object.operative.length);
                for (let i = 0; i < object.operative.length; ++i) {
                    if (!$util.isObject(object.operative[i]))
                        throw $TypeError(".GameStates.Army.operative: object expected");
                    message.operative[i] = $root.GameStates.Operator.fromObject(object.operative[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Army message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameStates.Army
         * @static
         * @param {GameStates.Army} message Army
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Army.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.operative = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                object.name = message.name;
            if (message.operative && message.operative.length) {
                object.operative = $Array(message.operative.length);
                for (let j = 0; j < message.operative.length; ++j)
                    object.operative[j] = $root.GameStates.Operator.toObject(message.operative[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this Army to JSON.
         * @function toJSON
         * @memberof GameStates.Army
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Army.prototype.toJSON = function() {
            return Army.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Army
         * @function getTypeUrl
         * @memberof GameStates.Army
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Army.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/GameStates.Army";
        };

        return Army;
    })();

    GameStates.Operator = (function() {

        /**
         * Properties of an Operator.
         * @typedef {Object} GameStates.Operator.$Properties
         * @property {string|null} [name] Operator name
         * @property {number|null} [movememnt] Operator movememnt
         * @property {number|null} [actionPointLimit] Operator actionPointLimit
         * @property {number|null} [groupActivation] Operator groupActivation
         * @property {number|null} [defense] Operator defense
         * @property {number|null} [save] Operator save
         * @property {number|null} [wounds] Operator wounds
         * @property {Array.<string>|null} [keywords] Operator keywords
         * @property {GameStates.Resource.$Properties|null} [model] Operator model
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an Operator.
         * @memberof GameStates
         * @interface IOperator
         * @augments GameStates.Operator.$Properties
         * @deprecated Use GameStates.Operator.$Properties instead.
         */

        /**
         * Shape of an Operator.
         * @typedef {GameStates.Operator.$Properties} GameStates.Operator.$Shape
         */

        /**
         * Constructs a new Operator.
         * @memberof GameStates
         * @classdesc Represents an Operator.
         * @constructor
         * @param {GameStates.Operator.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Operator = function (properties) {
            this.keywords = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Operator name.
         * @member {string} name
         * @memberof GameStates.Operator
         * @instance
         */
        Operator.prototype.name = "";

        /**
         * Operator movememnt.
         * @member {number} movememnt
         * @memberof GameStates.Operator
         * @instance
         */
        Operator.prototype.movememnt = 0;

        /**
         * Operator actionPointLimit.
         * @member {number} actionPointLimit
         * @memberof GameStates.Operator
         * @instance
         */
        Operator.prototype.actionPointLimit = 0;

        /**
         * Operator groupActivation.
         * @member {number} groupActivation
         * @memberof GameStates.Operator
         * @instance
         */
        Operator.prototype.groupActivation = 0;

        /**
         * Operator defense.
         * @member {number} defense
         * @memberof GameStates.Operator
         * @instance
         */
        Operator.prototype.defense = 0;

        /**
         * Operator save.
         * @member {number} save
         * @memberof GameStates.Operator
         * @instance
         */
        Operator.prototype.save = 0;

        /**
         * Operator wounds.
         * @member {number} wounds
         * @memberof GameStates.Operator
         * @instance
         */
        Operator.prototype.wounds = 0;

        /**
         * Operator keywords.
         * @member {Array.<string>} keywords
         * @memberof GameStates.Operator
         * @instance
         */
        Operator.prototype.keywords = $util.emptyArray;

        /**
         * Operator model.
         * @member {GameStates.Resource.$Properties|null|undefined} model
         * @memberof GameStates.Operator
         * @instance
         */
        Operator.prototype.model = null;

        /**
         * Creates a new Operator instance using the specified properties.
         * @function create
         * @memberof GameStates.Operator
         * @static
         * @param {GameStates.Operator.$Properties=} [properties] Properties to set
         * @returns {GameStates.Operator} Operator instance
         * @type {{
         *   (properties: GameStates.Operator.$Shape): GameStates.Operator & GameStates.Operator.$Shape;
         *   (properties?: GameStates.Operator.$Properties): GameStates.Operator;
         * }}
         */
        Operator.create = function(properties) {
            return new Operator(properties);
        };

        /**
         * Encodes the specified Operator message. Does not implicitly {@link GameStates.Operator.verify|verify} messages.
         * @function encode
         * @memberof GameStates.Operator
         * @static
         * @param {GameStates.Operator.$Properties} message Operator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operator.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.movememnt != null && $Object.hasOwnProperty.call(message, "movememnt") && message.movememnt !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.movememnt);
            if (message.actionPointLimit != null && $Object.hasOwnProperty.call(message, "actionPointLimit") && message.actionPointLimit !== 0)
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.actionPointLimit);
            if (message.groupActivation != null && $Object.hasOwnProperty.call(message, "groupActivation") && message.groupActivation !== 0)
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.groupActivation);
            if (message.defense != null && $Object.hasOwnProperty.call(message, "defense") && message.defense !== 0)
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.defense);
            if (message.save != null && $Object.hasOwnProperty.call(message, "save") && message.save !== 0)
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.save);
            if (message.wounds != null && $Object.hasOwnProperty.call(message, "wounds") && message.wounds !== 0)
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.wounds);
            if (message.keywords != null && message.keywords.length)
                for (let i = 0; i < message.keywords.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.keywords[i]);
            if (message.model != null && $Object.hasOwnProperty.call(message, "model"))
                $root.GameStates.Resource.encode(message.model, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Operator message, length delimited. Does not implicitly {@link GameStates.Operator.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameStates.Operator
         * @static
         * @param {GameStates.Operator.$Properties} message Operator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operator.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an Operator message from the specified reader or buffer.
         * @function decode
         * @memberof GameStates.Operator
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameStates.Operator & GameStates.Operator.$Shape} Operator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operator.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GameStates.Operator(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.movememnt = value;
                        else
                            delete message.movememnt;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.actionPointLimit = value;
                        else
                            delete message.actionPointLimit;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.groupActivation = value;
                        else
                            delete message.groupActivation;
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.defense = value;
                        else
                            delete message.defense;
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.save = value;
                        else
                            delete message.save;
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.wounds = value;
                        else
                            delete message.wounds;
                        continue;
                    }
                case 9: {
                        if (wireType !== 2)
                            break;
                        if (!(message.keywords && message.keywords.length))
                            message.keywords = [];
                        message.keywords.push(reader.stringVerify());
                        continue;
                    }
                case 10: {
                        if (wireType !== 2)
                            break;
                        message.model = $root.GameStates.Resource.decode(reader, reader.uint32(), $undefined, _depth + 1, message.model);
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an Operator message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameStates.Operator
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameStates.Operator & GameStates.Operator.$Shape} Operator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operator.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Operator message.
         * @function verify
         * @memberof GameStates.Operator
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Operator.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.movememnt != null && $Object.hasOwnProperty.call(message, "movememnt"))
                if (!$util.isInteger(message.movememnt))
                    return "movememnt: integer expected";
            if (message.actionPointLimit != null && $Object.hasOwnProperty.call(message, "actionPointLimit"))
                if (!$util.isInteger(message.actionPointLimit))
                    return "actionPointLimit: integer expected";
            if (message.groupActivation != null && $Object.hasOwnProperty.call(message, "groupActivation"))
                if (!$util.isInteger(message.groupActivation))
                    return "groupActivation: integer expected";
            if (message.defense != null && $Object.hasOwnProperty.call(message, "defense"))
                if (!$util.isInteger(message.defense))
                    return "defense: integer expected";
            if (message.save != null && $Object.hasOwnProperty.call(message, "save"))
                if (!$util.isInteger(message.save))
                    return "save: integer expected";
            if (message.wounds != null && $Object.hasOwnProperty.call(message, "wounds"))
                if (!$util.isInteger(message.wounds))
                    return "wounds: integer expected";
            if (message.keywords != null && $Object.hasOwnProperty.call(message, "keywords")) {
                if (!$Array.isArray(message.keywords))
                    return "keywords: array expected";
                for (let i = 0; i < message.keywords.length; ++i)
                    if (!$util.isString(message.keywords[i]))
                        return "keywords: string[] expected";
            }
            if (message.model != null && $Object.hasOwnProperty.call(message, "model")) {
                let error = $root.GameStates.Resource.verify(message.model, _depth + 1);
                if (error)
                    return "model." + error;
            }
            return null;
        };

        /**
         * Creates an Operator message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameStates.Operator
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameStates.Operator} Operator
         */
        Operator.fromObject = function (object, _depth) {
            if (object instanceof $root.GameStates.Operator)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".GameStates.Operator: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.GameStates.Operator();
            if (object.name != null)
                if (typeof object.name !== "string" || object.name.length)
                    message.name = $String(object.name);
            if (object.movememnt != null)
                if ($Number(object.movememnt) !== 0)
                    message.movememnt = object.movememnt >>> 0;
            if (object.actionPointLimit != null)
                if ($Number(object.actionPointLimit) !== 0)
                    message.actionPointLimit = object.actionPointLimit >>> 0;
            if (object.groupActivation != null)
                if ($Number(object.groupActivation) !== 0)
                    message.groupActivation = object.groupActivation >>> 0;
            if (object.defense != null)
                if ($Number(object.defense) !== 0)
                    message.defense = object.defense >>> 0;
            if (object.save != null)
                if ($Number(object.save) !== 0)
                    message.save = object.save >>> 0;
            if (object.wounds != null)
                if ($Number(object.wounds) !== 0)
                    message.wounds = object.wounds >>> 0;
            if (object.keywords) {
                if (!$Array.isArray(object.keywords))
                    throw $TypeError(".GameStates.Operator.keywords: array expected");
                message.keywords = $Array(object.keywords.length);
                for (let i = 0; i < object.keywords.length; ++i)
                    message.keywords[i] = $String(object.keywords[i]);
            }
            if (object.model != null) {
                if (!$util.isObject(object.model))
                    throw $TypeError(".GameStates.Operator.model: object expected");
                message.model = $root.GameStates.Resource.fromObject(object.model, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from an Operator message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameStates.Operator
         * @static
         * @param {GameStates.Operator} message Operator
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Operator.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.keywords = [];
            if (options.defaults) {
                object.name = "";
                object.movememnt = 0;
                object.actionPointLimit = 0;
                object.groupActivation = 0;
                object.defense = 0;
                object.save = 0;
                object.wounds = 0;
                object.model = null;
            }
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                object.name = message.name;
            if (message.movememnt != null && $Object.hasOwnProperty.call(message, "movememnt"))
                object.movememnt = message.movememnt;
            if (message.actionPointLimit != null && $Object.hasOwnProperty.call(message, "actionPointLimit"))
                object.actionPointLimit = message.actionPointLimit;
            if (message.groupActivation != null && $Object.hasOwnProperty.call(message, "groupActivation"))
                object.groupActivation = message.groupActivation;
            if (message.defense != null && $Object.hasOwnProperty.call(message, "defense"))
                object.defense = message.defense;
            if (message.save != null && $Object.hasOwnProperty.call(message, "save"))
                object.save = message.save;
            if (message.wounds != null && $Object.hasOwnProperty.call(message, "wounds"))
                object.wounds = message.wounds;
            if (message.keywords && message.keywords.length) {
                object.keywords = $Array(message.keywords.length);
                for (let j = 0; j < message.keywords.length; ++j)
                    object.keywords[j] = message.keywords[j];
            }
            if (message.model != null && $Object.hasOwnProperty.call(message, "model"))
                object.model = $root.GameStates.Resource.toObject(message.model, options, _depth + 1);
            return object;
        };

        /**
         * Converts this Operator to JSON.
         * @function toJSON
         * @memberof GameStates.Operator
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Operator.prototype.toJSON = function() {
            return Operator.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Operator
         * @function getTypeUrl
         * @memberof GameStates.Operator
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Operator.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/GameStates.Operator";
        };

        return Operator;
    })();

    GameStates.Level = (function() {

        /**
         * Properties of a Level.
         * @typedef {Object} GameStates.Level.$Properties
         * @property {string|null} [name] Level name
         * @property {GameStates.Resource.$Properties|null} [model] Level model
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Level.
         * @memberof GameStates
         * @interface ILevel
         * @augments GameStates.Level.$Properties
         * @deprecated Use GameStates.Level.$Properties instead.
         */

        /**
         * Shape of a Level.
         * @typedef {GameStates.Level.$Properties} GameStates.Level.$Shape
         */

        /**
         * Constructs a new Level.
         * @memberof GameStates
         * @classdesc Represents a Level.
         * @constructor
         * @param {GameStates.Level.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Level = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Level name.
         * @member {string} name
         * @memberof GameStates.Level
         * @instance
         */
        Level.prototype.name = "";

        /**
         * Level model.
         * @member {GameStates.Resource.$Properties|null|undefined} model
         * @memberof GameStates.Level
         * @instance
         */
        Level.prototype.model = null;

        /**
         * Creates a new Level instance using the specified properties.
         * @function create
         * @memberof GameStates.Level
         * @static
         * @param {GameStates.Level.$Properties=} [properties] Properties to set
         * @returns {GameStates.Level} Level instance
         * @type {{
         *   (properties: GameStates.Level.$Shape): GameStates.Level & GameStates.Level.$Shape;
         *   (properties?: GameStates.Level.$Properties): GameStates.Level;
         * }}
         */
        Level.create = function(properties) {
            return new Level(properties);
        };

        /**
         * Encodes the specified Level message. Does not implicitly {@link GameStates.Level.verify|verify} messages.
         * @function encode
         * @memberof GameStates.Level
         * @static
         * @param {GameStates.Level.$Properties} message Level message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Level.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.model != null && $Object.hasOwnProperty.call(message, "model"))
                $root.GameStates.Resource.encode(message.model, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Level message, length delimited. Does not implicitly {@link GameStates.Level.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameStates.Level
         * @static
         * @param {GameStates.Level.$Properties} message Level message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Level.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Level message from the specified reader or buffer.
         * @function decode
         * @memberof GameStates.Level
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameStates.Level & GameStates.Level.$Shape} Level
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Level.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GameStates.Level(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.model = $root.GameStates.Resource.decode(reader, reader.uint32(), $undefined, _depth + 1, message.model);
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Level message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameStates.Level
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameStates.Level & GameStates.Level.$Shape} Level
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Level.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Level message.
         * @function verify
         * @memberof GameStates.Level
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Level.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.model != null && $Object.hasOwnProperty.call(message, "model")) {
                let error = $root.GameStates.Resource.verify(message.model, _depth + 1);
                if (error)
                    return "model." + error;
            }
            return null;
        };

        /**
         * Creates a Level message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameStates.Level
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameStates.Level} Level
         */
        Level.fromObject = function (object, _depth) {
            if (object instanceof $root.GameStates.Level)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".GameStates.Level: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.GameStates.Level();
            if (object.name != null)
                if (typeof object.name !== "string" || object.name.length)
                    message.name = $String(object.name);
            if (object.model != null) {
                if (!$util.isObject(object.model))
                    throw $TypeError(".GameStates.Level.model: object expected");
                message.model = $root.GameStates.Resource.fromObject(object.model, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a Level message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameStates.Level
         * @static
         * @param {GameStates.Level} message Level
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Level.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.model = null;
            }
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                object.name = message.name;
            if (message.model != null && $Object.hasOwnProperty.call(message, "model"))
                object.model = $root.GameStates.Resource.toObject(message.model, options, _depth + 1);
            return object;
        };

        /**
         * Converts this Level to JSON.
         * @function toJSON
         * @memberof GameStates.Level
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Level.prototype.toJSON = function() {
            return Level.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Level
         * @function getTypeUrl
         * @memberof GameStates.Level
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Level.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/GameStates.Level";
        };

        return Level;
    })();

    GameStates.SpawnArea = (function() {

        /**
         * Properties of a SpawnArea.
         * @typedef {Object} GameStates.SpawnArea.$Properties
         * @property {GameStates.Point.$Properties|null} [topLeft] SpawnArea topLeft
         * @property {number|null} [width] SpawnArea width
         * @property {number|null} [length] SpawnArea length
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SpawnArea.
         * @memberof GameStates
         * @interface ISpawnArea
         * @augments GameStates.SpawnArea.$Properties
         * @deprecated Use GameStates.SpawnArea.$Properties instead.
         */

        /**
         * Shape of a SpawnArea.
         * @typedef {GameStates.SpawnArea.$Properties} GameStates.SpawnArea.$Shape
         */

        /**
         * Constructs a new SpawnArea.
         * @memberof GameStates
         * @classdesc Represents a SpawnArea.
         * @constructor
         * @param {GameStates.SpawnArea.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SpawnArea = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SpawnArea topLeft.
         * @member {GameStates.Point.$Properties|null|undefined} topLeft
         * @memberof GameStates.SpawnArea
         * @instance
         */
        SpawnArea.prototype.topLeft = null;

        /**
         * SpawnArea width.
         * @member {number} width
         * @memberof GameStates.SpawnArea
         * @instance
         */
        SpawnArea.prototype.width = 0;

        /**
         * SpawnArea length.
         * @member {number} length
         * @memberof GameStates.SpawnArea
         * @instance
         */
        SpawnArea.prototype.length = 0;

        /**
         * Creates a new SpawnArea instance using the specified properties.
         * @function create
         * @memberof GameStates.SpawnArea
         * @static
         * @param {GameStates.SpawnArea.$Properties=} [properties] Properties to set
         * @returns {GameStates.SpawnArea} SpawnArea instance
         * @type {{
         *   (properties: GameStates.SpawnArea.$Shape): GameStates.SpawnArea & GameStates.SpawnArea.$Shape;
         *   (properties?: GameStates.SpawnArea.$Properties): GameStates.SpawnArea;
         * }}
         */
        SpawnArea.create = function(properties) {
            return new SpawnArea(properties);
        };

        /**
         * Encodes the specified SpawnArea message. Does not implicitly {@link GameStates.SpawnArea.verify|verify} messages.
         * @function encode
         * @memberof GameStates.SpawnArea
         * @static
         * @param {GameStates.SpawnArea.$Properties} message SpawnArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpawnArea.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.topLeft != null && $Object.hasOwnProperty.call(message, "topLeft"))
                $root.GameStates.Point.encode(message.topLeft, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.width != null && $Object.hasOwnProperty.call(message, "width") && !$Object.is(message.width, 0))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.width);
            if (message.length != null && $Object.hasOwnProperty.call(message, "length") && !$Object.is(message.length, 0))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.length);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SpawnArea message, length delimited. Does not implicitly {@link GameStates.SpawnArea.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameStates.SpawnArea
         * @static
         * @param {GameStates.SpawnArea.$Properties} message SpawnArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpawnArea.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SpawnArea message from the specified reader or buffer.
         * @function decode
         * @memberof GameStates.SpawnArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameStates.SpawnArea & GameStates.SpawnArea.$Shape} SpawnArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpawnArea.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GameStates.SpawnArea(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.topLeft = $root.GameStates.Point.decode(reader, reader.uint32(), $undefined, _depth + 1, message.topLeft);
                        continue;
                    }
                case 2: {
                        if (wireType !== 5)
                            break;
                        if (!$Object.is(value = reader.float(), 0))
                            message.width = value;
                        else
                            delete message.width;
                        continue;
                    }
                case 3: {
                        if (wireType !== 5)
                            break;
                        if (!$Object.is(value = reader.float(), 0))
                            message.length = value;
                        else
                            delete message.length;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a SpawnArea message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameStates.SpawnArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameStates.SpawnArea & GameStates.SpawnArea.$Shape} SpawnArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpawnArea.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpawnArea message.
         * @function verify
         * @memberof GameStates.SpawnArea
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpawnArea.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.topLeft != null && $Object.hasOwnProperty.call(message, "topLeft")) {
                let error = $root.GameStates.Point.verify(message.topLeft, _depth + 1);
                if (error)
                    return "topLeft." + error;
            }
            if (message.width != null && $Object.hasOwnProperty.call(message, "width"))
                if (typeof message.width !== "number")
                    return "width: number expected";
            if (message.length != null && $Object.hasOwnProperty.call(message, "length"))
                if (typeof message.length !== "number")
                    return "length: number expected";
            return null;
        };

        /**
         * Creates a SpawnArea message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameStates.SpawnArea
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameStates.SpawnArea} SpawnArea
         */
        SpawnArea.fromObject = function (object, _depth) {
            if (object instanceof $root.GameStates.SpawnArea)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".GameStates.SpawnArea: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.GameStates.SpawnArea();
            if (object.topLeft != null) {
                if (!$util.isObject(object.topLeft))
                    throw $TypeError(".GameStates.SpawnArea.topLeft: object expected");
                message.topLeft = $root.GameStates.Point.fromObject(object.topLeft, _depth + 1);
            }
            if (object.width != null)
                if (!$Object.is($Number(object.width), 0))
                    message.width = $Number(object.width);
            if (object.length != null)
                if (!$Object.is($Number(object.length), 0))
                    message.length = $Number(object.length);
            return message;
        };

        /**
         * Creates a plain object from a SpawnArea message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameStates.SpawnArea
         * @static
         * @param {GameStates.SpawnArea} message SpawnArea
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpawnArea.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.topLeft = null;
                object.width = 0;
                object.length = 0;
            }
            if (message.topLeft != null && $Object.hasOwnProperty.call(message, "topLeft"))
                object.topLeft = $root.GameStates.Point.toObject(message.topLeft, options, _depth + 1);
            if (message.width != null && $Object.hasOwnProperty.call(message, "width"))
                object.width = options.json && !$isFinite(message.width) ? $String(message.width) : message.width;
            if (message.length != null && $Object.hasOwnProperty.call(message, "length"))
                object.length = options.json && !$isFinite(message.length) ? $String(message.length) : message.length;
            return object;
        };

        /**
         * Converts this SpawnArea to JSON.
         * @function toJSON
         * @memberof GameStates.SpawnArea
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpawnArea.prototype.toJSON = function() {
            return SpawnArea.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SpawnArea
         * @function getTypeUrl
         * @memberof GameStates.SpawnArea
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SpawnArea.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/GameStates.SpawnArea";
        };

        return SpawnArea;
    })();

    GameStates.Point = (function() {

        /**
         * Properties of a Point.
         * @typedef {Object} GameStates.Point.$Properties
         * @property {number|null} [x] Point x
         * @property {number|null} [y] Point y
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Point.
         * @memberof GameStates
         * @interface IPoint
         * @augments GameStates.Point.$Properties
         * @deprecated Use GameStates.Point.$Properties instead.
         */

        /**
         * Shape of a Point.
         * @typedef {GameStates.Point.$Properties} GameStates.Point.$Shape
         */

        /**
         * Constructs a new Point.
         * @memberof GameStates
         * @classdesc Represents a Point.
         * @constructor
         * @param {GameStates.Point.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Point = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Point x.
         * @member {number} x
         * @memberof GameStates.Point
         * @instance
         */
        Point.prototype.x = 0;

        /**
         * Point y.
         * @member {number} y
         * @memberof GameStates.Point
         * @instance
         */
        Point.prototype.y = 0;

        /**
         * Creates a new Point instance using the specified properties.
         * @function create
         * @memberof GameStates.Point
         * @static
         * @param {GameStates.Point.$Properties=} [properties] Properties to set
         * @returns {GameStates.Point} Point instance
         * @type {{
         *   (properties: GameStates.Point.$Shape): GameStates.Point & GameStates.Point.$Shape;
         *   (properties?: GameStates.Point.$Properties): GameStates.Point;
         * }}
         */
        Point.create = function(properties) {
            return new Point(properties);
        };

        /**
         * Encodes the specified Point message. Does not implicitly {@link GameStates.Point.verify|verify} messages.
         * @function encode
         * @memberof GameStates.Point
         * @static
         * @param {GameStates.Point.$Properties} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.x != null && $Object.hasOwnProperty.call(message, "x") && !$Object.is(message.x, 0))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && $Object.hasOwnProperty.call(message, "y") && !$Object.is(message.y, 0))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link GameStates.Point.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameStates.Point
         * @static
         * @param {GameStates.Point.$Properties} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @function decode
         * @memberof GameStates.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameStates.Point & GameStates.Point.$Shape} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GameStates.Point(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 5)
                            break;
                        if (!$Object.is(value = reader.float(), 0))
                            message.x = value;
                        else
                            delete message.x;
                        continue;
                    }
                case 2: {
                        if (wireType !== 5)
                            break;
                        if (!$Object.is(value = reader.float(), 0))
                            message.y = value;
                        else
                            delete message.y;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameStates.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameStates.Point & GameStates.Point.$Shape} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Point message.
         * @function verify
         * @memberof GameStates.Point
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Point.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameStates.Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameStates.Point} Point
         */
        Point.fromObject = function (object, _depth) {
            if (object instanceof $root.GameStates.Point)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".GameStates.Point: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.GameStates.Point();
            if (object.x != null)
                if (!$Object.is($Number(object.x), 0))
                    message.x = $Number(object.x);
            if (object.y != null)
                if (!$Object.is($Number(object.y), 0))
                    message.y = $Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameStates.Point
         * @static
         * @param {GameStates.Point} message Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Point.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                object.x = options.json && !$isFinite(message.x) ? $String(message.x) : message.x;
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                object.y = options.json && !$isFinite(message.y) ? $String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this Point to JSON.
         * @function toJSON
         * @memberof GameStates.Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Point.prototype.toJSON = function() {
            return Point.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Point
         * @function getTypeUrl
         * @memberof GameStates.Point
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Point.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/GameStates.Point";
        };

        return Point;
    })();

    GameStates.Resource = (function() {

        /**
         * Properties of a Resource.
         * @typedef {Object} GameStates.Resource.$Properties
         * @property {string|null} [modelPath] Resource modelPath
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Resource.
         * @memberof GameStates
         * @interface IResource
         * @augments GameStates.Resource.$Properties
         * @deprecated Use GameStates.Resource.$Properties instead.
         */

        /**
         * Shape of a Resource.
         * @typedef {GameStates.Resource.$Properties} GameStates.Resource.$Shape
         */

        /**
         * Constructs a new Resource.
         * @memberof GameStates
         * @classdesc Represents a Resource.
         * @constructor
         * @param {GameStates.Resource.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Resource = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Resource modelPath.
         * @member {string} modelPath
         * @memberof GameStates.Resource
         * @instance
         */
        Resource.prototype.modelPath = "";

        /**
         * Creates a new Resource instance using the specified properties.
         * @function create
         * @memberof GameStates.Resource
         * @static
         * @param {GameStates.Resource.$Properties=} [properties] Properties to set
         * @returns {GameStates.Resource} Resource instance
         * @type {{
         *   (properties: GameStates.Resource.$Shape): GameStates.Resource & GameStates.Resource.$Shape;
         *   (properties?: GameStates.Resource.$Properties): GameStates.Resource;
         * }}
         */
        Resource.create = function(properties) {
            return new Resource(properties);
        };

        /**
         * Encodes the specified Resource message. Does not implicitly {@link GameStates.Resource.verify|verify} messages.
         * @function encode
         * @memberof GameStates.Resource
         * @static
         * @param {GameStates.Resource.$Properties} message Resource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Resource.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.modelPath != null && $Object.hasOwnProperty.call(message, "modelPath") && message.modelPath !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.modelPath);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Resource message, length delimited. Does not implicitly {@link GameStates.Resource.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameStates.Resource
         * @static
         * @param {GameStates.Resource.$Properties} message Resource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Resource.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Resource message from the specified reader or buffer.
         * @function decode
         * @memberof GameStates.Resource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameStates.Resource & GameStates.Resource.$Shape} Resource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Resource.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GameStates.Resource(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.modelPath = value;
                        else
                            delete message.modelPath;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Resource message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameStates.Resource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameStates.Resource & GameStates.Resource.$Shape} Resource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Resource.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Resource message.
         * @function verify
         * @memberof GameStates.Resource
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Resource.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.modelPath != null && $Object.hasOwnProperty.call(message, "modelPath"))
                if (!$util.isString(message.modelPath))
                    return "modelPath: string expected";
            return null;
        };

        /**
         * Creates a Resource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameStates.Resource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameStates.Resource} Resource
         */
        Resource.fromObject = function (object, _depth) {
            if (object instanceof $root.GameStates.Resource)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".GameStates.Resource: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.GameStates.Resource();
            if (object.modelPath != null)
                if (typeof object.modelPath !== "string" || object.modelPath.length)
                    message.modelPath = $String(object.modelPath);
            return message;
        };

        /**
         * Creates a plain object from a Resource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameStates.Resource
         * @static
         * @param {GameStates.Resource} message Resource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Resource.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.modelPath = "";
            if (message.modelPath != null && $Object.hasOwnProperty.call(message, "modelPath"))
                object.modelPath = message.modelPath;
            return object;
        };

        /**
         * Converts this Resource to JSON.
         * @function toJSON
         * @memberof GameStates.Resource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Resource.prototype.toJSON = function() {
            return Resource.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Resource
         * @function getTypeUrl
         * @memberof GameStates.Resource
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Resource.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/GameStates.Resource";
        };

        return Resource;
    })();

    GameStates.WaitingForPlayer = (function() {

        /**
         * Properties of a WaitingForPlayer.
         * @typedef {Object} GameStates.WaitingForPlayer.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a WaitingForPlayer.
         * @memberof GameStates
         * @interface IWaitingForPlayer
         * @augments GameStates.WaitingForPlayer.$Properties
         * @deprecated Use GameStates.WaitingForPlayer.$Properties instead.
         */

        /**
         * Shape of a WaitingForPlayer.
         * @typedef {GameStates.WaitingForPlayer.$Properties} GameStates.WaitingForPlayer.$Shape
         */

        /**
         * Constructs a new WaitingForPlayer.
         * @memberof GameStates
         * @classdesc Represents a WaitingForPlayer.
         * @constructor
         * @param {GameStates.WaitingForPlayer.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const WaitingForPlayer = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Creates a new WaitingForPlayer instance using the specified properties.
         * @function create
         * @memberof GameStates.WaitingForPlayer
         * @static
         * @param {GameStates.WaitingForPlayer.$Properties=} [properties] Properties to set
         * @returns {GameStates.WaitingForPlayer} WaitingForPlayer instance
         * @type {{
         *   (properties: GameStates.WaitingForPlayer.$Shape): GameStates.WaitingForPlayer & GameStates.WaitingForPlayer.$Shape;
         *   (properties?: GameStates.WaitingForPlayer.$Properties): GameStates.WaitingForPlayer;
         * }}
         */
        WaitingForPlayer.create = function(properties) {
            return new WaitingForPlayer(properties);
        };

        /**
         * Encodes the specified WaitingForPlayer message. Does not implicitly {@link GameStates.WaitingForPlayer.verify|verify} messages.
         * @function encode
         * @memberof GameStates.WaitingForPlayer
         * @static
         * @param {GameStates.WaitingForPlayer.$Properties} message WaitingForPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WaitingForPlayer.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified WaitingForPlayer message, length delimited. Does not implicitly {@link GameStates.WaitingForPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameStates.WaitingForPlayer
         * @static
         * @param {GameStates.WaitingForPlayer.$Properties} message WaitingForPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WaitingForPlayer.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a WaitingForPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof GameStates.WaitingForPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameStates.WaitingForPlayer & GameStates.WaitingForPlayer.$Shape} WaitingForPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WaitingForPlayer.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GameStates.WaitingForPlayer();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a WaitingForPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameStates.WaitingForPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameStates.WaitingForPlayer & GameStates.WaitingForPlayer.$Shape} WaitingForPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WaitingForPlayer.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WaitingForPlayer message.
         * @function verify
         * @memberof GameStates.WaitingForPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WaitingForPlayer.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            return null;
        };

        /**
         * Creates a WaitingForPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameStates.WaitingForPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameStates.WaitingForPlayer} WaitingForPlayer
         */
        WaitingForPlayer.fromObject = function (object, _depth) {
            if (object instanceof $root.GameStates.WaitingForPlayer)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".GameStates.WaitingForPlayer: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            return new $root.GameStates.WaitingForPlayer();
        };

        /**
         * Creates a plain object from a WaitingForPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameStates.WaitingForPlayer
         * @static
         * @param {GameStates.WaitingForPlayer} message WaitingForPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WaitingForPlayer.toObject = function () {
            return {};
        };

        /**
         * Converts this WaitingForPlayer to JSON.
         * @function toJSON
         * @memberof GameStates.WaitingForPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WaitingForPlayer.prototype.toJSON = function() {
            return WaitingForPlayer.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for WaitingForPlayer
         * @function getTypeUrl
         * @memberof GameStates.WaitingForPlayer
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        WaitingForPlayer.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/GameStates.WaitingForPlayer";
        };

        return WaitingForPlayer;
    })();

    return GameStates;
})();

export {
  $root as default
};
