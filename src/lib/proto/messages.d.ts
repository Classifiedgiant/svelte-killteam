import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace GameStates. */
export namespace GameStates {

    /**
     * Properties of a ServerMessage.
     * @deprecated Use GameStates.ServerMessage.$Properties instead.
     */
    interface IServerMessage extends GameStates.ServerMessage.$Properties {
    }

    /** Represents a ServerMessage. */
    class ServerMessage {

        /**
         * Constructs a new ServerMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameStates.ServerMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ServerMessage startGame. */
        startGame?: (GameStates.StartGame.$Properties|null);

        /** ServerMessage waitingForPlayer. */
        waitingForPlayer?: (GameStates.WaitingForPlayer.$Properties|null);

        /** ServerMessage payload. */
        payload?: ("startGame"|"waitingForPlayer");

        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerMessage instance
         */
        static create(properties: GameStates.ServerMessage.$Shape): GameStates.ServerMessage & GameStates.ServerMessage.$Shape;
        static create(properties?: GameStates.ServerMessage.$Properties): GameStates.ServerMessage;

        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link GameStates.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: GameStates.ServerMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link GameStates.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: GameStates.ServerMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {GameStates.ServerMessage & GameStates.ServerMessage.$Shape} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStates.ServerMessage & GameStates.ServerMessage.$Shape;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {GameStates.ServerMessage & GameStates.ServerMessage.$Shape} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameStates.ServerMessage & GameStates.ServerMessage.$Shape;

        /**
         * Verifies a ServerMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerMessage
         */
        static fromObject(object: { [k: string]: any }): GameStates.ServerMessage;

        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @param message ServerMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: GameStates.ServerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ServerMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ServerMessage {

        /** Properties of a ServerMessage. */
        interface $Properties {

            /** ServerMessage startGame */
            startGame?: (GameStates.StartGame.$Properties|null);

            /** ServerMessage waitingForPlayer */
            waitingForPlayer?: (GameStates.WaitingForPlayer.$Properties|null);

            /** ServerMessage payload */
            payload?: ("startGame"|"waitingForPlayer");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ServerMessage. */
        type $Shape = {
          startGame?: GameStates.StartGame.$Shape|null;
          waitingForPlayer?: GameStates.WaitingForPlayer.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ payload?: undefined; startGame?: null; waitingForPlayer?: null }|{ payload?: "startGame"; startGame: GameStates.StartGame.$Shape; waitingForPlayer?: null }|{ payload?: "waitingForPlayer"; startGame?: null; waitingForPlayer: GameStates.WaitingForPlayer.$Shape })
        );
    }

    /**
     * Properties of a StartGame.
     * @deprecated Use GameStates.StartGame.$Properties instead.
     */
    interface IStartGame extends GameStates.StartGame.$Properties {
    }

    /** Represents a StartGame. */
    class StartGame {

        /**
         * Constructs a new StartGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameStates.StartGame.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** StartGame gameType. */
        gameType: GameStates.GameType;

        /** StartGame player1. */
        player1: number;

        /** StartGame player2. */
        player2: number;

        /** StartGame player1Army. */
        player1Army?: (GameStates.Army.$Properties|null);

        /** StartGame player2Army. */
        player2Army?: (GameStates.Army.$Properties|null);

        /** StartGame level. */
        level?: (GameStates.Level.$Properties|null);

        /**
         * Creates a new StartGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartGame instance
         */
        static create(properties: GameStates.StartGame.$Shape): GameStates.StartGame & GameStates.StartGame.$Shape;
        static create(properties?: GameStates.StartGame.$Properties): GameStates.StartGame;

        /**
         * Encodes the specified StartGame message. Does not implicitly {@link GameStates.StartGame.verify|verify} messages.
         * @param message StartGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: GameStates.StartGame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartGame message, length delimited. Does not implicitly {@link GameStates.StartGame.verify|verify} messages.
         * @param message StartGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: GameStates.StartGame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {GameStates.StartGame & GameStates.StartGame.$Shape} StartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStates.StartGame & GameStates.StartGame.$Shape;

        /**
         * Decodes a StartGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {GameStates.StartGame & GameStates.StartGame.$Shape} StartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameStates.StartGame & GameStates.StartGame.$Shape;

        /**
         * Verifies a StartGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartGame
         */
        static fromObject(object: { [k: string]: any }): GameStates.StartGame;

        /**
         * Creates a plain object from a StartGame message. Also converts values to other types if specified.
         * @param message StartGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: GameStates.StartGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartGame to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for StartGame
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StartGame {

        /** Properties of a StartGame. */
        interface $Properties {

            /** StartGame gameType */
            gameType?: (GameStates.GameType|null);

            /** StartGame player1 */
            player1?: (number|null);

            /** StartGame player2 */
            player2?: (number|null);

            /** StartGame player1Army */
            player1Army?: (GameStates.Army.$Properties|null);

            /** StartGame player2Army */
            player2Army?: (GameStates.Army.$Properties|null);

            /** StartGame level */
            level?: (GameStates.Level.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StartGame. */
        type $Shape = GameStates.StartGame.$Properties;
    }

    /** GameType enum. */
    enum GameType {

        /** GAMETYPE_FREE_FOR_ALL value */
        GAMETYPE_FREE_FOR_ALL = 0
    }

    /**
     * Properties of an Army.
     * @deprecated Use GameStates.Army.$Properties instead.
     */
    interface IArmy extends GameStates.Army.$Properties {
    }

    /** Represents an Army. */
    class Army {

        /**
         * Constructs a new Army.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameStates.Army.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Army name. */
        name: string;

        /** Army operative. */
        operative: GameStates.Operator.$Properties[];

        /**
         * Creates a new Army instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Army instance
         */
        static create(properties: GameStates.Army.$Shape): GameStates.Army & GameStates.Army.$Shape;
        static create(properties?: GameStates.Army.$Properties): GameStates.Army;

        /**
         * Encodes the specified Army message. Does not implicitly {@link GameStates.Army.verify|verify} messages.
         * @param message Army message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: GameStates.Army.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Army message, length delimited. Does not implicitly {@link GameStates.Army.verify|verify} messages.
         * @param message Army message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: GameStates.Army.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Army message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {GameStates.Army & GameStates.Army.$Shape} Army
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStates.Army & GameStates.Army.$Shape;

        /**
         * Decodes an Army message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {GameStates.Army & GameStates.Army.$Shape} Army
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameStates.Army & GameStates.Army.$Shape;

        /**
         * Verifies an Army message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Army message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Army
         */
        static fromObject(object: { [k: string]: any }): GameStates.Army;

        /**
         * Creates a plain object from an Army message. Also converts values to other types if specified.
         * @param message Army
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: GameStates.Army, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Army to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Army
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Army {

        /** Properties of an Army. */
        interface $Properties {

            /** Army name */
            name?: (string|null);

            /** Army operative */
            operative?: (GameStates.Operator.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an Army. */
        type $Shape = GameStates.Army.$Properties;
    }

    /**
     * Properties of an Operator.
     * @deprecated Use GameStates.Operator.$Properties instead.
     */
    interface IOperator extends GameStates.Operator.$Properties {
    }

    /** Represents an Operator. */
    class Operator {

        /**
         * Constructs a new Operator.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameStates.Operator.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Operator name. */
        name: string;

        /** Operator movememnt. */
        movememnt: number;

        /** Operator actionPointLimit. */
        actionPointLimit: number;

        /** Operator groupActivation. */
        groupActivation: number;

        /** Operator defense. */
        defense: number;

        /** Operator save. */
        save: number;

        /** Operator wounds. */
        wounds: number;

        /** Operator keywords. */
        keywords: string[];

        /** Operator model. */
        model?: (GameStates.Resource.$Properties|null);

        /**
         * Creates a new Operator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Operator instance
         */
        static create(properties: GameStates.Operator.$Shape): GameStates.Operator & GameStates.Operator.$Shape;
        static create(properties?: GameStates.Operator.$Properties): GameStates.Operator;

        /**
         * Encodes the specified Operator message. Does not implicitly {@link GameStates.Operator.verify|verify} messages.
         * @param message Operator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: GameStates.Operator.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Operator message, length delimited. Does not implicitly {@link GameStates.Operator.verify|verify} messages.
         * @param message Operator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: GameStates.Operator.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Operator message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {GameStates.Operator & GameStates.Operator.$Shape} Operator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStates.Operator & GameStates.Operator.$Shape;

        /**
         * Decodes an Operator message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {GameStates.Operator & GameStates.Operator.$Shape} Operator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameStates.Operator & GameStates.Operator.$Shape;

        /**
         * Verifies an Operator message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Operator message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Operator
         */
        static fromObject(object: { [k: string]: any }): GameStates.Operator;

        /**
         * Creates a plain object from an Operator message. Also converts values to other types if specified.
         * @param message Operator
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: GameStates.Operator, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Operator to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Operator
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Operator {

        /** Properties of an Operator. */
        interface $Properties {

            /** Operator name */
            name?: (string|null);

            /** Operator movememnt */
            movememnt?: (number|null);

            /** Operator actionPointLimit */
            actionPointLimit?: (number|null);

            /** Operator groupActivation */
            groupActivation?: (number|null);

            /** Operator defense */
            defense?: (number|null);

            /** Operator save */
            save?: (number|null);

            /** Operator wounds */
            wounds?: (number|null);

            /** Operator keywords */
            keywords?: (string[]|null);

            /** Operator model */
            model?: (GameStates.Resource.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an Operator. */
        type $Shape = GameStates.Operator.$Properties;
    }

    /**
     * Properties of a Level.
     * @deprecated Use GameStates.Level.$Properties instead.
     */
    interface ILevel extends GameStates.Level.$Properties {
    }

    /** Represents a Level. */
    class Level {

        /**
         * Constructs a new Level.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameStates.Level.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Level name. */
        name: string;

        /** Level model. */
        model?: (GameStates.Resource.$Properties|null);

        /**
         * Creates a new Level instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Level instance
         */
        static create(properties: GameStates.Level.$Shape): GameStates.Level & GameStates.Level.$Shape;
        static create(properties?: GameStates.Level.$Properties): GameStates.Level;

        /**
         * Encodes the specified Level message. Does not implicitly {@link GameStates.Level.verify|verify} messages.
         * @param message Level message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: GameStates.Level.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Level message, length delimited. Does not implicitly {@link GameStates.Level.verify|verify} messages.
         * @param message Level message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: GameStates.Level.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Level message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {GameStates.Level & GameStates.Level.$Shape} Level
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStates.Level & GameStates.Level.$Shape;

        /**
         * Decodes a Level message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {GameStates.Level & GameStates.Level.$Shape} Level
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameStates.Level & GameStates.Level.$Shape;

        /**
         * Verifies a Level message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Level message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Level
         */
        static fromObject(object: { [k: string]: any }): GameStates.Level;

        /**
         * Creates a plain object from a Level message. Also converts values to other types if specified.
         * @param message Level
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: GameStates.Level, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Level to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Level
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Level {

        /** Properties of a Level. */
        interface $Properties {

            /** Level name */
            name?: (string|null);

            /** Level model */
            model?: (GameStates.Resource.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Level. */
        type $Shape = GameStates.Level.$Properties;
    }

    /**
     * Properties of a SpawnArea.
     * @deprecated Use GameStates.SpawnArea.$Properties instead.
     */
    interface ISpawnArea extends GameStates.SpawnArea.$Properties {
    }

    /** Represents a SpawnArea. */
    class SpawnArea {

        /**
         * Constructs a new SpawnArea.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameStates.SpawnArea.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SpawnArea topLeft. */
        topLeft?: (GameStates.Point.$Properties|null);

        /** SpawnArea width. */
        width: number;

        /** SpawnArea length. */
        length: number;

        /**
         * Creates a new SpawnArea instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpawnArea instance
         */
        static create(properties: GameStates.SpawnArea.$Shape): GameStates.SpawnArea & GameStates.SpawnArea.$Shape;
        static create(properties?: GameStates.SpawnArea.$Properties): GameStates.SpawnArea;

        /**
         * Encodes the specified SpawnArea message. Does not implicitly {@link GameStates.SpawnArea.verify|verify} messages.
         * @param message SpawnArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: GameStates.SpawnArea.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpawnArea message, length delimited. Does not implicitly {@link GameStates.SpawnArea.verify|verify} messages.
         * @param message SpawnArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: GameStates.SpawnArea.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpawnArea message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {GameStates.SpawnArea & GameStates.SpawnArea.$Shape} SpawnArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStates.SpawnArea & GameStates.SpawnArea.$Shape;

        /**
         * Decodes a SpawnArea message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {GameStates.SpawnArea & GameStates.SpawnArea.$Shape} SpawnArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameStates.SpawnArea & GameStates.SpawnArea.$Shape;

        /**
         * Verifies a SpawnArea message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpawnArea message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpawnArea
         */
        static fromObject(object: { [k: string]: any }): GameStates.SpawnArea;

        /**
         * Creates a plain object from a SpawnArea message. Also converts values to other types if specified.
         * @param message SpawnArea
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: GameStates.SpawnArea, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpawnArea to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SpawnArea
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SpawnArea {

        /** Properties of a SpawnArea. */
        interface $Properties {

            /** SpawnArea topLeft */
            topLeft?: (GameStates.Point.$Properties|null);

            /** SpawnArea width */
            width?: (number|null);

            /** SpawnArea length */
            length?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SpawnArea. */
        type $Shape = GameStates.SpawnArea.$Properties;
    }

    /**
     * Properties of a Point.
     * @deprecated Use GameStates.Point.$Properties instead.
     */
    interface IPoint extends GameStates.Point.$Properties {
    }

    /** Represents a Point. */
    class Point {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameStates.Point.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Point x. */
        x: number;

        /** Point y. */
        y: number;

        /**
         * Creates a new Point instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point instance
         */
        static create(properties: GameStates.Point.$Shape): GameStates.Point & GameStates.Point.$Shape;
        static create(properties?: GameStates.Point.$Properties): GameStates.Point;

        /**
         * Encodes the specified Point message. Does not implicitly {@link GameStates.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: GameStates.Point.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link GameStates.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: GameStates.Point.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {GameStates.Point & GameStates.Point.$Shape} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStates.Point & GameStates.Point.$Shape;

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {GameStates.Point & GameStates.Point.$Shape} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameStates.Point & GameStates.Point.$Shape;

        /**
         * Verifies a Point message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        static fromObject(object: { [k: string]: any }): GameStates.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: GameStates.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Point
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Point {

        /** Properties of a Point. */
        interface $Properties {

            /** Point x */
            x?: (number|null);

            /** Point y */
            y?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Point. */
        type $Shape = GameStates.Point.$Properties;
    }

    /**
     * Properties of a Resource.
     * @deprecated Use GameStates.Resource.$Properties instead.
     */
    interface IResource extends GameStates.Resource.$Properties {
    }

    /** Represents a Resource. */
    class Resource {

        /**
         * Constructs a new Resource.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameStates.Resource.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Resource modelPath. */
        modelPath: string;

        /**
         * Creates a new Resource instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resource instance
         */
        static create(properties: GameStates.Resource.$Shape): GameStates.Resource & GameStates.Resource.$Shape;
        static create(properties?: GameStates.Resource.$Properties): GameStates.Resource;

        /**
         * Encodes the specified Resource message. Does not implicitly {@link GameStates.Resource.verify|verify} messages.
         * @param message Resource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: GameStates.Resource.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Resource message, length delimited. Does not implicitly {@link GameStates.Resource.verify|verify} messages.
         * @param message Resource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: GameStates.Resource.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resource message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {GameStates.Resource & GameStates.Resource.$Shape} Resource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStates.Resource & GameStates.Resource.$Shape;

        /**
         * Decodes a Resource message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {GameStates.Resource & GameStates.Resource.$Shape} Resource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameStates.Resource & GameStates.Resource.$Shape;

        /**
         * Verifies a Resource message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Resource message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Resource
         */
        static fromObject(object: { [k: string]: any }): GameStates.Resource;

        /**
         * Creates a plain object from a Resource message. Also converts values to other types if specified.
         * @param message Resource
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: GameStates.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Resource to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Resource
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Resource {

        /** Properties of a Resource. */
        interface $Properties {

            /** Resource modelPath */
            modelPath?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Resource. */
        type $Shape = GameStates.Resource.$Properties;
    }

    /**
     * Properties of a WaitingForPlayer.
     * @deprecated Use GameStates.WaitingForPlayer.$Properties instead.
     */
    interface IWaitingForPlayer extends GameStates.WaitingForPlayer.$Properties {
    }

    /** Represents a WaitingForPlayer. */
    class WaitingForPlayer {

        /**
         * Constructs a new WaitingForPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameStates.WaitingForPlayer.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new WaitingForPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WaitingForPlayer instance
         */
        static create(properties: GameStates.WaitingForPlayer.$Shape): GameStates.WaitingForPlayer & GameStates.WaitingForPlayer.$Shape;
        static create(properties?: GameStates.WaitingForPlayer.$Properties): GameStates.WaitingForPlayer;

        /**
         * Encodes the specified WaitingForPlayer message. Does not implicitly {@link GameStates.WaitingForPlayer.verify|verify} messages.
         * @param message WaitingForPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: GameStates.WaitingForPlayer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WaitingForPlayer message, length delimited. Does not implicitly {@link GameStates.WaitingForPlayer.verify|verify} messages.
         * @param message WaitingForPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: GameStates.WaitingForPlayer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WaitingForPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {GameStates.WaitingForPlayer & GameStates.WaitingForPlayer.$Shape} WaitingForPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStates.WaitingForPlayer & GameStates.WaitingForPlayer.$Shape;

        /**
         * Decodes a WaitingForPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {GameStates.WaitingForPlayer & GameStates.WaitingForPlayer.$Shape} WaitingForPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameStates.WaitingForPlayer & GameStates.WaitingForPlayer.$Shape;

        /**
         * Verifies a WaitingForPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WaitingForPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WaitingForPlayer
         */
        static fromObject(object: { [k: string]: any }): GameStates.WaitingForPlayer;

        /**
         * Creates a plain object from a WaitingForPlayer message. Also converts values to other types if specified.
         * @param message WaitingForPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: GameStates.WaitingForPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WaitingForPlayer to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WaitingForPlayer
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WaitingForPlayer {

        /** Properties of a WaitingForPlayer. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WaitingForPlayer. */
        type $Shape = GameStates.WaitingForPlayer.$Properties;
    }
}
