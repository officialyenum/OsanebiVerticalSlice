
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Studio
 * 
 */
export type Studio = $Result.DefaultSelection<Prisma.$StudioPayload>
/**
 * Model StudioMember
 * 
 */
export type StudioMember = $Result.DefaultSelection<Prisma.$StudioMemberPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model SessionPlaytester
 * 
 */
export type SessionPlaytester = $Result.DefaultSelection<Prisma.$SessionPlaytesterPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model PublisherInsight
 * 
 */
export type PublisherInsight = $Result.DefaultSelection<Prisma.$PublisherInsightPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  studio: 'studio',
  playtester: 'playtester',
  publisher: 'publisher',
  admin: 'admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const SessionStatus: {
  scheduled: 'scheduled',
  live: 'live',
  completed: 'completed'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]


export const EventType: {
  gameplay: 'gameplay',
  bug: 'bug',
  reaction: 'reaction',
  system: 'system'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const FeedbackCategory: {
  bug: 'bug',
  ux: 'ux',
  balance: 'balance',
  narrative: 'narrative',
  performance: 'performance'
};

export type FeedbackCategory = (typeof FeedbackCategory)[keyof typeof FeedbackCategory]


export const FeedbackSeverity: {
  low: 'low',
  medium: 'medium',
  high: 'high',
  critical: 'critical'
};

export type FeedbackSeverity = (typeof FeedbackSeverity)[keyof typeof FeedbackSeverity]


export const ReportType: {
  qa_summary: 'qa_summary',
  pitch_report: 'pitch_report',
  publisher_brief: 'publisher_brief'
};

export type ReportType = (typeof ReportType)[keyof typeof ReportType]


export const TaskPriority: {
  P0: 'P0',
  P1: 'P1',
  P2: 'P2'
};

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]


export const TaskStatus: {
  open: 'open',
  in_progress: 'in_progress',
  done: 'done'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const TaskSource: {
  feedback: 'feedback',
  ai_report: 'ai_report',
  manual: 'manual'
};

export type TaskSource = (typeof TaskSource)[keyof typeof TaskSource]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type FeedbackCategory = $Enums.FeedbackCategory

export const FeedbackCategory: typeof $Enums.FeedbackCategory

export type FeedbackSeverity = $Enums.FeedbackSeverity

export const FeedbackSeverity: typeof $Enums.FeedbackSeverity

export type ReportType = $Enums.ReportType

export const ReportType: typeof $Enums.ReportType

export type TaskPriority = $Enums.TaskPriority

export const TaskPriority: typeof $Enums.TaskPriority

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type TaskSource = $Enums.TaskSource

export const TaskSource: typeof $Enums.TaskSource

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studio`: Exposes CRUD operations for the **Studio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Studios
    * const studios = await prisma.studio.findMany()
    * ```
    */
  get studio(): Prisma.StudioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studioMember`: Exposes CRUD operations for the **StudioMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudioMembers
    * const studioMembers = await prisma.studioMember.findMany()
    * ```
    */
  get studioMember(): Prisma.StudioMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionPlaytester`: Exposes CRUD operations for the **SessionPlaytester** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionPlaytesters
    * const sessionPlaytesters = await prisma.sessionPlaytester.findMany()
    * ```
    */
  get sessionPlaytester(): Prisma.SessionPlaytesterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publisherInsight`: Exposes CRUD operations for the **PublisherInsight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublisherInsights
    * const publisherInsights = await prisma.publisherInsight.findMany()
    * ```
    */
  get publisherInsight(): Prisma.PublisherInsightDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Studio: 'Studio',
    StudioMember: 'StudioMember',
    Game: 'Game',
    Session: 'Session',
    SessionPlaytester: 'SessionPlaytester',
    Event: 'Event',
    Feedback: 'Feedback',
    Report: 'Report',
    Task: 'Task',
    PublisherInsight: 'PublisherInsight'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "studio" | "studioMember" | "game" | "session" | "sessionPlaytester" | "event" | "feedback" | "report" | "task" | "publisherInsight"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Studio: {
        payload: Prisma.$StudioPayload<ExtArgs>
        fields: Prisma.StudioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          findFirst: {
            args: Prisma.StudioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          findMany: {
            args: Prisma.StudioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>[]
          }
          create: {
            args: Prisma.StudioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          createMany: {
            args: Prisma.StudioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>[]
          }
          delete: {
            args: Prisma.StudioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          update: {
            args: Prisma.StudioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          deleteMany: {
            args: Prisma.StudioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>[]
          }
          upsert: {
            args: Prisma.StudioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          aggregate: {
            args: Prisma.StudioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudio>
          }
          groupBy: {
            args: Prisma.StudioGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudioGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudioCountArgs<ExtArgs>
            result: $Utils.Optional<StudioCountAggregateOutputType> | number
          }
        }
      }
      StudioMember: {
        payload: Prisma.$StudioMemberPayload<ExtArgs>
        fields: Prisma.StudioMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudioMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudioMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioMemberPayload>
          }
          findFirst: {
            args: Prisma.StudioMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudioMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioMemberPayload>
          }
          findMany: {
            args: Prisma.StudioMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioMemberPayload>[]
          }
          create: {
            args: Prisma.StudioMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioMemberPayload>
          }
          createMany: {
            args: Prisma.StudioMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudioMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioMemberPayload>[]
          }
          delete: {
            args: Prisma.StudioMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioMemberPayload>
          }
          update: {
            args: Prisma.StudioMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioMemberPayload>
          }
          deleteMany: {
            args: Prisma.StudioMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudioMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudioMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioMemberPayload>[]
          }
          upsert: {
            args: Prisma.StudioMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioMemberPayload>
          }
          aggregate: {
            args: Prisma.StudioMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudioMember>
          }
          groupBy: {
            args: Prisma.StudioMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudioMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudioMemberCountArgs<ExtArgs>
            result: $Utils.Optional<StudioMemberCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      SessionPlaytester: {
        payload: Prisma.$SessionPlaytesterPayload<ExtArgs>
        fields: Prisma.SessionPlaytesterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionPlaytesterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPlaytesterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionPlaytesterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPlaytesterPayload>
          }
          findFirst: {
            args: Prisma.SessionPlaytesterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPlaytesterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionPlaytesterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPlaytesterPayload>
          }
          findMany: {
            args: Prisma.SessionPlaytesterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPlaytesterPayload>[]
          }
          create: {
            args: Prisma.SessionPlaytesterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPlaytesterPayload>
          }
          createMany: {
            args: Prisma.SessionPlaytesterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionPlaytesterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPlaytesterPayload>[]
          }
          delete: {
            args: Prisma.SessionPlaytesterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPlaytesterPayload>
          }
          update: {
            args: Prisma.SessionPlaytesterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPlaytesterPayload>
          }
          deleteMany: {
            args: Prisma.SessionPlaytesterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionPlaytesterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionPlaytesterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPlaytesterPayload>[]
          }
          upsert: {
            args: Prisma.SessionPlaytesterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPlaytesterPayload>
          }
          aggregate: {
            args: Prisma.SessionPlaytesterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionPlaytester>
          }
          groupBy: {
            args: Prisma.SessionPlaytesterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionPlaytesterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionPlaytesterCountArgs<ExtArgs>
            result: $Utils.Optional<SessionPlaytesterCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      PublisherInsight: {
        payload: Prisma.$PublisherInsightPayload<ExtArgs>
        fields: Prisma.PublisherInsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublisherInsightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherInsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublisherInsightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherInsightPayload>
          }
          findFirst: {
            args: Prisma.PublisherInsightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherInsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublisherInsightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherInsightPayload>
          }
          findMany: {
            args: Prisma.PublisherInsightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherInsightPayload>[]
          }
          create: {
            args: Prisma.PublisherInsightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherInsightPayload>
          }
          createMany: {
            args: Prisma.PublisherInsightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublisherInsightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherInsightPayload>[]
          }
          delete: {
            args: Prisma.PublisherInsightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherInsightPayload>
          }
          update: {
            args: Prisma.PublisherInsightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherInsightPayload>
          }
          deleteMany: {
            args: Prisma.PublisherInsightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublisherInsightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublisherInsightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherInsightPayload>[]
          }
          upsert: {
            args: Prisma.PublisherInsightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherInsightPayload>
          }
          aggregate: {
            args: Prisma.PublisherInsightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublisherInsight>
          }
          groupBy: {
            args: Prisma.PublisherInsightGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublisherInsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublisherInsightCountArgs<ExtArgs>
            result: $Utils.Optional<PublisherInsightCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    studio?: StudioOmit
    studioMember?: StudioMemberOmit
    game?: GameOmit
    session?: SessionOmit
    sessionPlaytester?: SessionPlaytesterOmit
    event?: EventOmit
    feedback?: FeedbackOmit
    report?: ReportOmit
    task?: TaskOmit
    publisherInsight?: PublisherInsightOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedStudios: number
    studioMembership: number
    sessionsAsTester: number
    feedbackAuthored: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedStudios?: boolean | UserCountOutputTypeCountOwnedStudiosArgs
    studioMembership?: boolean | UserCountOutputTypeCountStudioMembershipArgs
    sessionsAsTester?: boolean | UserCountOutputTypeCountSessionsAsTesterArgs
    feedbackAuthored?: boolean | UserCountOutputTypeCountFeedbackAuthoredArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedStudiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudioMembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudioMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsAsTesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionPlaytesterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackAuthoredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type StudioCountOutputType
   */

  export type StudioCountOutputType = {
    members: number
    games: number
  }

  export type StudioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | StudioCountOutputTypeCountMembersArgs
    games?: boolean | StudioCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioCountOutputType
     */
    select?: StudioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudioMemberWhereInput
  }

  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    sessions: number
    tasks: number
    publisherInsights: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | GameCountOutputTypeCountSessionsArgs
    tasks?: boolean | GameCountOutputTypeCountTasksArgs
    publisherInsights?: boolean | GameCountOutputTypeCountPublisherInsightsArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPublisherInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublisherInsightWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    playtesters: number
    events: number
    feedback: number
    reports: number
    tasks: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playtesters?: boolean | SessionCountOutputTypeCountPlaytestersArgs
    events?: boolean | SessionCountOutputTypeCountEventsArgs
    feedback?: boolean | SessionCountOutputTypeCountFeedbackArgs
    reports?: boolean | SessionCountOutputTypeCountReportsArgs
    tasks?: boolean | SessionCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountPlaytestersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionPlaytesterWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.UserRole | null
    bio: string | null
    studioName: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.UserRole | null
    bio: string | null
    studioName: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    bio: number
    skills: number
    studioName: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    bio?: true
    studioName?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    bio?: true
    studioName?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    bio?: true
    skills?: true
    studioName?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio: string | null
    skills: string[]
    studioName: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    bio?: boolean
    skills?: boolean
    studioName?: boolean
    createdAt?: boolean
    ownedStudios?: boolean | User$ownedStudiosArgs<ExtArgs>
    studioMembership?: boolean | User$studioMembershipArgs<ExtArgs>
    sessionsAsTester?: boolean | User$sessionsAsTesterArgs<ExtArgs>
    feedbackAuthored?: boolean | User$feedbackAuthoredArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    bio?: boolean
    skills?: boolean
    studioName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    bio?: boolean
    skills?: boolean
    studioName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    bio?: boolean
    skills?: boolean
    studioName?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "role" | "bio" | "skills" | "studioName" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedStudios?: boolean | User$ownedStudiosArgs<ExtArgs>
    studioMembership?: boolean | User$studioMembershipArgs<ExtArgs>
    sessionsAsTester?: boolean | User$sessionsAsTesterArgs<ExtArgs>
    feedbackAuthored?: boolean | User$feedbackAuthoredArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedStudios: Prisma.$StudioPayload<ExtArgs>[]
      studioMembership: Prisma.$StudioMemberPayload<ExtArgs>[]
      sessionsAsTester: Prisma.$SessionPlaytesterPayload<ExtArgs>[]
      feedbackAuthored: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      role: $Enums.UserRole
      bio: string | null
      skills: string[]
      studioName: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedStudios<T extends User$ownedStudiosArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedStudiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studioMembership<T extends User$studioMembershipArgs<ExtArgs> = {}>(args?: Subset<T, User$studioMembershipArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionsAsTester<T extends User$sessionsAsTesterArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsAsTesterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbackAuthored<T extends User$feedbackAuthoredArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbackAuthoredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly bio: FieldRef<"User", 'String'>
    readonly skills: FieldRef<"User", 'String[]'>
    readonly studioName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedStudios
   */
  export type User$ownedStudiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    where?: StudioWhereInput
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    cursor?: StudioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * User.studioMembership
   */
  export type User$studioMembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
    where?: StudioMemberWhereInput
    orderBy?: StudioMemberOrderByWithRelationInput | StudioMemberOrderByWithRelationInput[]
    cursor?: StudioMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudioMemberScalarFieldEnum | StudioMemberScalarFieldEnum[]
  }

  /**
   * User.sessionsAsTester
   */
  export type User$sessionsAsTesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
    where?: SessionPlaytesterWhereInput
    orderBy?: SessionPlaytesterOrderByWithRelationInput | SessionPlaytesterOrderByWithRelationInput[]
    cursor?: SessionPlaytesterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionPlaytesterScalarFieldEnum | SessionPlaytesterScalarFieldEnum[]
  }

  /**
   * User.feedbackAuthored
   */
  export type User$feedbackAuthoredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Studio
   */

  export type AggregateStudio = {
    _count: StudioCountAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  export type StudioMinAggregateOutputType = {
    id: string | null
    ownerUserId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type StudioMaxAggregateOutputType = {
    id: string | null
    ownerUserId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type StudioCountAggregateOutputType = {
    id: number
    ownerUserId: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type StudioMinAggregateInputType = {
    id?: true
    ownerUserId?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type StudioMaxAggregateInputType = {
    id?: true
    ownerUserId?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type StudioCountAggregateInputType = {
    id?: true
    ownerUserId?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type StudioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Studio to aggregate.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Studios
    **/
    _count?: true | StudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudioMaxAggregateInputType
  }

  export type GetStudioAggregateType<T extends StudioAggregateArgs> = {
        [P in keyof T & keyof AggregateStudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudio[P]>
      : GetScalarType<T[P], AggregateStudio[P]>
  }




  export type StudioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudioWhereInput
    orderBy?: StudioOrderByWithAggregationInput | StudioOrderByWithAggregationInput[]
    by: StudioScalarFieldEnum[] | StudioScalarFieldEnum
    having?: StudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudioCountAggregateInputType | true
    _min?: StudioMinAggregateInputType
    _max?: StudioMaxAggregateInputType
  }

  export type StudioGroupByOutputType = {
    id: string
    ownerUserId: string
    name: string
    description: string | null
    createdAt: Date
    _count: StudioCountAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  type GetStudioGroupByPayload<T extends StudioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudioGroupByOutputType[P]>
            : GetScalarType<T[P], StudioGroupByOutputType[P]>
        }
      >
    >


  export type StudioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerUserId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Studio$membersArgs<ExtArgs>
    games?: boolean | Studio$gamesArgs<ExtArgs>
    _count?: boolean | StudioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studio"]>

  export type StudioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerUserId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studio"]>

  export type StudioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerUserId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studio"]>

  export type StudioSelectScalar = {
    id?: boolean
    ownerUserId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type StudioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerUserId" | "name" | "description" | "createdAt", ExtArgs["result"]["studio"]>
  export type StudioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Studio$membersArgs<ExtArgs>
    games?: boolean | Studio$gamesArgs<ExtArgs>
    _count?: boolean | StudioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Studio"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$StudioMemberPayload<ExtArgs>[]
      games: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerUserId: string
      name: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["studio"]>
    composites: {}
  }

  type StudioGetPayload<S extends boolean | null | undefined | StudioDefaultArgs> = $Result.GetResult<Prisma.$StudioPayload, S>

  type StudioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudioCountAggregateInputType | true
    }

  export interface StudioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Studio'], meta: { name: 'Studio' } }
    /**
     * Find zero or one Studio that matches the filter.
     * @param {StudioFindUniqueArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudioFindUniqueArgs>(args: SelectSubset<T, StudioFindUniqueArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Studio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudioFindUniqueOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudioFindUniqueOrThrowArgs>(args: SelectSubset<T, StudioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Studio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindFirstArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudioFindFirstArgs>(args?: SelectSubset<T, StudioFindFirstArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Studio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindFirstOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudioFindFirstOrThrowArgs>(args?: SelectSubset<T, StudioFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Studios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Studios
     * const studios = await prisma.studio.findMany()
     * 
     * // Get first 10 Studios
     * const studios = await prisma.studio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studioWithIdOnly = await prisma.studio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudioFindManyArgs>(args?: SelectSubset<T, StudioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Studio.
     * @param {StudioCreateArgs} args - Arguments to create a Studio.
     * @example
     * // Create one Studio
     * const Studio = await prisma.studio.create({
     *   data: {
     *     // ... data to create a Studio
     *   }
     * })
     * 
     */
    create<T extends StudioCreateArgs>(args: SelectSubset<T, StudioCreateArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Studios.
     * @param {StudioCreateManyArgs} args - Arguments to create many Studios.
     * @example
     * // Create many Studios
     * const studio = await prisma.studio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudioCreateManyArgs>(args?: SelectSubset<T, StudioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Studios and returns the data saved in the database.
     * @param {StudioCreateManyAndReturnArgs} args - Arguments to create many Studios.
     * @example
     * // Create many Studios
     * const studio = await prisma.studio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Studios and only return the `id`
     * const studioWithIdOnly = await prisma.studio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudioCreateManyAndReturnArgs>(args?: SelectSubset<T, StudioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Studio.
     * @param {StudioDeleteArgs} args - Arguments to delete one Studio.
     * @example
     * // Delete one Studio
     * const Studio = await prisma.studio.delete({
     *   where: {
     *     // ... filter to delete one Studio
     *   }
     * })
     * 
     */
    delete<T extends StudioDeleteArgs>(args: SelectSubset<T, StudioDeleteArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Studio.
     * @param {StudioUpdateArgs} args - Arguments to update one Studio.
     * @example
     * // Update one Studio
     * const studio = await prisma.studio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudioUpdateArgs>(args: SelectSubset<T, StudioUpdateArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Studios.
     * @param {StudioDeleteManyArgs} args - Arguments to filter Studios to delete.
     * @example
     * // Delete a few Studios
     * const { count } = await prisma.studio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudioDeleteManyArgs>(args?: SelectSubset<T, StudioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Studios
     * const studio = await prisma.studio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudioUpdateManyArgs>(args: SelectSubset<T, StudioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studios and returns the data updated in the database.
     * @param {StudioUpdateManyAndReturnArgs} args - Arguments to update many Studios.
     * @example
     * // Update many Studios
     * const studio = await prisma.studio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Studios and only return the `id`
     * const studioWithIdOnly = await prisma.studio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudioUpdateManyAndReturnArgs>(args: SelectSubset<T, StudioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Studio.
     * @param {StudioUpsertArgs} args - Arguments to update or create a Studio.
     * @example
     * // Update or create a Studio
     * const studio = await prisma.studio.upsert({
     *   create: {
     *     // ... data to create a Studio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Studio we want to update
     *   }
     * })
     */
    upsert<T extends StudioUpsertArgs>(args: SelectSubset<T, StudioUpsertArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioCountArgs} args - Arguments to filter Studios to count.
     * @example
     * // Count the number of Studios
     * const count = await prisma.studio.count({
     *   where: {
     *     // ... the filter for the Studios we want to count
     *   }
     * })
    **/
    count<T extends StudioCountArgs>(
      args?: Subset<T, StudioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudioAggregateArgs>(args: Subset<T, StudioAggregateArgs>): Prisma.PrismaPromise<GetStudioAggregateType<T>>

    /**
     * Group by Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudioGroupByArgs['orderBy'] }
        : { orderBy?: StudioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Studio model
   */
  readonly fields: StudioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Studio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Studio$membersArgs<ExtArgs> = {}>(args?: Subset<T, Studio$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    games<T extends Studio$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Studio$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Studio model
   */
  interface StudioFieldRefs {
    readonly id: FieldRef<"Studio", 'String'>
    readonly ownerUserId: FieldRef<"Studio", 'String'>
    readonly name: FieldRef<"Studio", 'String'>
    readonly description: FieldRef<"Studio", 'String'>
    readonly createdAt: FieldRef<"Studio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Studio findUnique
   */
  export type StudioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio findUniqueOrThrow
   */
  export type StudioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio findFirst
   */
  export type StudioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studios.
     */
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * Studio findFirstOrThrow
   */
  export type StudioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studios.
     */
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * Studio findMany
   */
  export type StudioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studios to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studios.
     */
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * Studio create
   */
  export type StudioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * The data needed to create a Studio.
     */
    data: XOR<StudioCreateInput, StudioUncheckedCreateInput>
  }

  /**
   * Studio createMany
   */
  export type StudioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Studios.
     */
    data: StudioCreateManyInput | StudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Studio createManyAndReturn
   */
  export type StudioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * The data used to create many Studios.
     */
    data: StudioCreateManyInput | StudioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Studio update
   */
  export type StudioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * The data needed to update a Studio.
     */
    data: XOR<StudioUpdateInput, StudioUncheckedUpdateInput>
    /**
     * Choose, which Studio to update.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio updateMany
   */
  export type StudioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Studios.
     */
    data: XOR<StudioUpdateManyMutationInput, StudioUncheckedUpdateManyInput>
    /**
     * Filter which Studios to update
     */
    where?: StudioWhereInput
    /**
     * Limit how many Studios to update.
     */
    limit?: number
  }

  /**
   * Studio updateManyAndReturn
   */
  export type StudioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * The data used to update Studios.
     */
    data: XOR<StudioUpdateManyMutationInput, StudioUncheckedUpdateManyInput>
    /**
     * Filter which Studios to update
     */
    where?: StudioWhereInput
    /**
     * Limit how many Studios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Studio upsert
   */
  export type StudioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * The filter to search for the Studio to update in case it exists.
     */
    where: StudioWhereUniqueInput
    /**
     * In case the Studio found by the `where` argument doesn't exist, create a new Studio with this data.
     */
    create: XOR<StudioCreateInput, StudioUncheckedCreateInput>
    /**
     * In case the Studio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudioUpdateInput, StudioUncheckedUpdateInput>
  }

  /**
   * Studio delete
   */
  export type StudioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter which Studio to delete.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio deleteMany
   */
  export type StudioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Studios to delete
     */
    where?: StudioWhereInput
    /**
     * Limit how many Studios to delete.
     */
    limit?: number
  }

  /**
   * Studio.members
   */
  export type Studio$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
    where?: StudioMemberWhereInput
    orderBy?: StudioMemberOrderByWithRelationInput | StudioMemberOrderByWithRelationInput[]
    cursor?: StudioMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudioMemberScalarFieldEnum | StudioMemberScalarFieldEnum[]
  }

  /**
   * Studio.games
   */
  export type Studio$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Studio without action
   */
  export type StudioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
  }


  /**
   * Model StudioMember
   */

  export type AggregateStudioMember = {
    _count: StudioMemberCountAggregateOutputType | null
    _min: StudioMemberMinAggregateOutputType | null
    _max: StudioMemberMaxAggregateOutputType | null
  }

  export type StudioMemberMinAggregateOutputType = {
    id: string | null
    studioId: string | null
    userId: string | null
  }

  export type StudioMemberMaxAggregateOutputType = {
    id: string | null
    studioId: string | null
    userId: string | null
  }

  export type StudioMemberCountAggregateOutputType = {
    id: number
    studioId: number
    userId: number
    _all: number
  }


  export type StudioMemberMinAggregateInputType = {
    id?: true
    studioId?: true
    userId?: true
  }

  export type StudioMemberMaxAggregateInputType = {
    id?: true
    studioId?: true
    userId?: true
  }

  export type StudioMemberCountAggregateInputType = {
    id?: true
    studioId?: true
    userId?: true
    _all?: true
  }

  export type StudioMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudioMember to aggregate.
     */
    where?: StudioMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudioMembers to fetch.
     */
    orderBy?: StudioMemberOrderByWithRelationInput | StudioMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudioMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudioMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudioMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudioMembers
    **/
    _count?: true | StudioMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudioMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudioMemberMaxAggregateInputType
  }

  export type GetStudioMemberAggregateType<T extends StudioMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateStudioMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudioMember[P]>
      : GetScalarType<T[P], AggregateStudioMember[P]>
  }




  export type StudioMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudioMemberWhereInput
    orderBy?: StudioMemberOrderByWithAggregationInput | StudioMemberOrderByWithAggregationInput[]
    by: StudioMemberScalarFieldEnum[] | StudioMemberScalarFieldEnum
    having?: StudioMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudioMemberCountAggregateInputType | true
    _min?: StudioMemberMinAggregateInputType
    _max?: StudioMemberMaxAggregateInputType
  }

  export type StudioMemberGroupByOutputType = {
    id: string
    studioId: string
    userId: string
    _count: StudioMemberCountAggregateOutputType | null
    _min: StudioMemberMinAggregateOutputType | null
    _max: StudioMemberMaxAggregateOutputType | null
  }

  type GetStudioMemberGroupByPayload<T extends StudioMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudioMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudioMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudioMemberGroupByOutputType[P]>
            : GetScalarType<T[P], StudioMemberGroupByOutputType[P]>
        }
      >
    >


  export type StudioMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studioId?: boolean
    userId?: boolean
    studio?: boolean | StudioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studioMember"]>

  export type StudioMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studioId?: boolean
    userId?: boolean
    studio?: boolean | StudioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studioMember"]>

  export type StudioMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studioId?: boolean
    userId?: boolean
    studio?: boolean | StudioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studioMember"]>

  export type StudioMemberSelectScalar = {
    id?: boolean
    studioId?: boolean
    userId?: boolean
  }

  export type StudioMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studioId" | "userId", ExtArgs["result"]["studioMember"]>
  export type StudioMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | StudioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudioMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | StudioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudioMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | StudioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudioMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudioMember"
    objects: {
      studio: Prisma.$StudioPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studioId: string
      userId: string
    }, ExtArgs["result"]["studioMember"]>
    composites: {}
  }

  type StudioMemberGetPayload<S extends boolean | null | undefined | StudioMemberDefaultArgs> = $Result.GetResult<Prisma.$StudioMemberPayload, S>

  type StudioMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudioMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudioMemberCountAggregateInputType | true
    }

  export interface StudioMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudioMember'], meta: { name: 'StudioMember' } }
    /**
     * Find zero or one StudioMember that matches the filter.
     * @param {StudioMemberFindUniqueArgs} args - Arguments to find a StudioMember
     * @example
     * // Get one StudioMember
     * const studioMember = await prisma.studioMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudioMemberFindUniqueArgs>(args: SelectSubset<T, StudioMemberFindUniqueArgs<ExtArgs>>): Prisma__StudioMemberClient<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudioMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudioMemberFindUniqueOrThrowArgs} args - Arguments to find a StudioMember
     * @example
     * // Get one StudioMember
     * const studioMember = await prisma.studioMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudioMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, StudioMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudioMemberClient<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudioMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioMemberFindFirstArgs} args - Arguments to find a StudioMember
     * @example
     * // Get one StudioMember
     * const studioMember = await prisma.studioMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudioMemberFindFirstArgs>(args?: SelectSubset<T, StudioMemberFindFirstArgs<ExtArgs>>): Prisma__StudioMemberClient<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudioMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioMemberFindFirstOrThrowArgs} args - Arguments to find a StudioMember
     * @example
     * // Get one StudioMember
     * const studioMember = await prisma.studioMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudioMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, StudioMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudioMemberClient<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudioMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudioMembers
     * const studioMembers = await prisma.studioMember.findMany()
     * 
     * // Get first 10 StudioMembers
     * const studioMembers = await prisma.studioMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studioMemberWithIdOnly = await prisma.studioMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudioMemberFindManyArgs>(args?: SelectSubset<T, StudioMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudioMember.
     * @param {StudioMemberCreateArgs} args - Arguments to create a StudioMember.
     * @example
     * // Create one StudioMember
     * const StudioMember = await prisma.studioMember.create({
     *   data: {
     *     // ... data to create a StudioMember
     *   }
     * })
     * 
     */
    create<T extends StudioMemberCreateArgs>(args: SelectSubset<T, StudioMemberCreateArgs<ExtArgs>>): Prisma__StudioMemberClient<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudioMembers.
     * @param {StudioMemberCreateManyArgs} args - Arguments to create many StudioMembers.
     * @example
     * // Create many StudioMembers
     * const studioMember = await prisma.studioMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudioMemberCreateManyArgs>(args?: SelectSubset<T, StudioMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudioMembers and returns the data saved in the database.
     * @param {StudioMemberCreateManyAndReturnArgs} args - Arguments to create many StudioMembers.
     * @example
     * // Create many StudioMembers
     * const studioMember = await prisma.studioMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudioMembers and only return the `id`
     * const studioMemberWithIdOnly = await prisma.studioMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudioMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, StudioMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudioMember.
     * @param {StudioMemberDeleteArgs} args - Arguments to delete one StudioMember.
     * @example
     * // Delete one StudioMember
     * const StudioMember = await prisma.studioMember.delete({
     *   where: {
     *     // ... filter to delete one StudioMember
     *   }
     * })
     * 
     */
    delete<T extends StudioMemberDeleteArgs>(args: SelectSubset<T, StudioMemberDeleteArgs<ExtArgs>>): Prisma__StudioMemberClient<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudioMember.
     * @param {StudioMemberUpdateArgs} args - Arguments to update one StudioMember.
     * @example
     * // Update one StudioMember
     * const studioMember = await prisma.studioMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudioMemberUpdateArgs>(args: SelectSubset<T, StudioMemberUpdateArgs<ExtArgs>>): Prisma__StudioMemberClient<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudioMembers.
     * @param {StudioMemberDeleteManyArgs} args - Arguments to filter StudioMembers to delete.
     * @example
     * // Delete a few StudioMembers
     * const { count } = await prisma.studioMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudioMemberDeleteManyArgs>(args?: SelectSubset<T, StudioMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudioMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudioMembers
     * const studioMember = await prisma.studioMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudioMemberUpdateManyArgs>(args: SelectSubset<T, StudioMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudioMembers and returns the data updated in the database.
     * @param {StudioMemberUpdateManyAndReturnArgs} args - Arguments to update many StudioMembers.
     * @example
     * // Update many StudioMembers
     * const studioMember = await prisma.studioMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudioMembers and only return the `id`
     * const studioMemberWithIdOnly = await prisma.studioMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudioMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, StudioMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudioMember.
     * @param {StudioMemberUpsertArgs} args - Arguments to update or create a StudioMember.
     * @example
     * // Update or create a StudioMember
     * const studioMember = await prisma.studioMember.upsert({
     *   create: {
     *     // ... data to create a StudioMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudioMember we want to update
     *   }
     * })
     */
    upsert<T extends StudioMemberUpsertArgs>(args: SelectSubset<T, StudioMemberUpsertArgs<ExtArgs>>): Prisma__StudioMemberClient<$Result.GetResult<Prisma.$StudioMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudioMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioMemberCountArgs} args - Arguments to filter StudioMembers to count.
     * @example
     * // Count the number of StudioMembers
     * const count = await prisma.studioMember.count({
     *   where: {
     *     // ... the filter for the StudioMembers we want to count
     *   }
     * })
    **/
    count<T extends StudioMemberCountArgs>(
      args?: Subset<T, StudioMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudioMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudioMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudioMemberAggregateArgs>(args: Subset<T, StudioMemberAggregateArgs>): Prisma.PrismaPromise<GetStudioMemberAggregateType<T>>

    /**
     * Group by StudioMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudioMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudioMemberGroupByArgs['orderBy'] }
        : { orderBy?: StudioMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudioMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudioMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudioMember model
   */
  readonly fields: StudioMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudioMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudioMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studio<T extends StudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudioDefaultArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudioMember model
   */
  interface StudioMemberFieldRefs {
    readonly id: FieldRef<"StudioMember", 'String'>
    readonly studioId: FieldRef<"StudioMember", 'String'>
    readonly userId: FieldRef<"StudioMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudioMember findUnique
   */
  export type StudioMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
    /**
     * Filter, which StudioMember to fetch.
     */
    where: StudioMemberWhereUniqueInput
  }

  /**
   * StudioMember findUniqueOrThrow
   */
  export type StudioMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
    /**
     * Filter, which StudioMember to fetch.
     */
    where: StudioMemberWhereUniqueInput
  }

  /**
   * StudioMember findFirst
   */
  export type StudioMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
    /**
     * Filter, which StudioMember to fetch.
     */
    where?: StudioMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudioMembers to fetch.
     */
    orderBy?: StudioMemberOrderByWithRelationInput | StudioMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudioMembers.
     */
    cursor?: StudioMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudioMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudioMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudioMembers.
     */
    distinct?: StudioMemberScalarFieldEnum | StudioMemberScalarFieldEnum[]
  }

  /**
   * StudioMember findFirstOrThrow
   */
  export type StudioMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
    /**
     * Filter, which StudioMember to fetch.
     */
    where?: StudioMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudioMembers to fetch.
     */
    orderBy?: StudioMemberOrderByWithRelationInput | StudioMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudioMembers.
     */
    cursor?: StudioMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudioMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudioMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudioMembers.
     */
    distinct?: StudioMemberScalarFieldEnum | StudioMemberScalarFieldEnum[]
  }

  /**
   * StudioMember findMany
   */
  export type StudioMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
    /**
     * Filter, which StudioMembers to fetch.
     */
    where?: StudioMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudioMembers to fetch.
     */
    orderBy?: StudioMemberOrderByWithRelationInput | StudioMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudioMembers.
     */
    cursor?: StudioMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudioMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudioMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudioMembers.
     */
    distinct?: StudioMemberScalarFieldEnum | StudioMemberScalarFieldEnum[]
  }

  /**
   * StudioMember create
   */
  export type StudioMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a StudioMember.
     */
    data: XOR<StudioMemberCreateInput, StudioMemberUncheckedCreateInput>
  }

  /**
   * StudioMember createMany
   */
  export type StudioMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudioMembers.
     */
    data: StudioMemberCreateManyInput | StudioMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudioMember createManyAndReturn
   */
  export type StudioMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * The data used to create many StudioMembers.
     */
    data: StudioMemberCreateManyInput | StudioMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudioMember update
   */
  export type StudioMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a StudioMember.
     */
    data: XOR<StudioMemberUpdateInput, StudioMemberUncheckedUpdateInput>
    /**
     * Choose, which StudioMember to update.
     */
    where: StudioMemberWhereUniqueInput
  }

  /**
   * StudioMember updateMany
   */
  export type StudioMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudioMembers.
     */
    data: XOR<StudioMemberUpdateManyMutationInput, StudioMemberUncheckedUpdateManyInput>
    /**
     * Filter which StudioMembers to update
     */
    where?: StudioMemberWhereInput
    /**
     * Limit how many StudioMembers to update.
     */
    limit?: number
  }

  /**
   * StudioMember updateManyAndReturn
   */
  export type StudioMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * The data used to update StudioMembers.
     */
    data: XOR<StudioMemberUpdateManyMutationInput, StudioMemberUncheckedUpdateManyInput>
    /**
     * Filter which StudioMembers to update
     */
    where?: StudioMemberWhereInput
    /**
     * Limit how many StudioMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudioMember upsert
   */
  export type StudioMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the StudioMember to update in case it exists.
     */
    where: StudioMemberWhereUniqueInput
    /**
     * In case the StudioMember found by the `where` argument doesn't exist, create a new StudioMember with this data.
     */
    create: XOR<StudioMemberCreateInput, StudioMemberUncheckedCreateInput>
    /**
     * In case the StudioMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudioMemberUpdateInput, StudioMemberUncheckedUpdateInput>
  }

  /**
   * StudioMember delete
   */
  export type StudioMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
    /**
     * Filter which StudioMember to delete.
     */
    where: StudioMemberWhereUniqueInput
  }

  /**
   * StudioMember deleteMany
   */
  export type StudioMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudioMembers to delete
     */
    where?: StudioMemberWhereInput
    /**
     * Limit how many StudioMembers to delete.
     */
    limit?: number
  }

  /**
   * StudioMember without action
   */
  export type StudioMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioMember
     */
    select?: StudioMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioMember
     */
    omit?: StudioMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioMemberInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    studioId: string | null
    title: string | null
    genre: string | null
    platform: string | null
    buildVersion: string | null
    buildBranch: string | null
    pitchSummary: string | null
    createdAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    studioId: string | null
    title: string | null
    genre: string | null
    platform: string | null
    buildVersion: string | null
    buildBranch: string | null
    pitchSummary: string | null
    createdAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    studioId: number
    title: number
    genre: number
    platform: number
    buildVersion: number
    buildBranch: number
    pitchSummary: number
    createdAt: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    studioId?: true
    title?: true
    genre?: true
    platform?: true
    buildVersion?: true
    buildBranch?: true
    pitchSummary?: true
    createdAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    studioId?: true
    title?: true
    genre?: true
    platform?: true
    buildVersion?: true
    buildBranch?: true
    pitchSummary?: true
    createdAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    studioId?: true
    title?: true
    genre?: true
    platform?: true
    buildVersion?: true
    buildBranch?: true
    pitchSummary?: true
    createdAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    studioId: string
    title: string
    genre: string | null
    platform: string | null
    buildVersion: string | null
    buildBranch: string | null
    pitchSummary: string | null
    createdAt: Date
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studioId?: boolean
    title?: boolean
    genre?: boolean
    platform?: boolean
    buildVersion?: boolean
    buildBranch?: boolean
    pitchSummary?: boolean
    createdAt?: boolean
    studio?: boolean | StudioDefaultArgs<ExtArgs>
    sessions?: boolean | Game$sessionsArgs<ExtArgs>
    tasks?: boolean | Game$tasksArgs<ExtArgs>
    publisherInsights?: boolean | Game$publisherInsightsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studioId?: boolean
    title?: boolean
    genre?: boolean
    platform?: boolean
    buildVersion?: boolean
    buildBranch?: boolean
    pitchSummary?: boolean
    createdAt?: boolean
    studio?: boolean | StudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studioId?: boolean
    title?: boolean
    genre?: boolean
    platform?: boolean
    buildVersion?: boolean
    buildBranch?: boolean
    pitchSummary?: boolean
    createdAt?: boolean
    studio?: boolean | StudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    studioId?: boolean
    title?: boolean
    genre?: boolean
    platform?: boolean
    buildVersion?: boolean
    buildBranch?: boolean
    pitchSummary?: boolean
    createdAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studioId" | "title" | "genre" | "platform" | "buildVersion" | "buildBranch" | "pitchSummary" | "createdAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | StudioDefaultArgs<ExtArgs>
    sessions?: boolean | Game$sessionsArgs<ExtArgs>
    tasks?: boolean | Game$tasksArgs<ExtArgs>
    publisherInsights?: boolean | Game$publisherInsightsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | StudioDefaultArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | StudioDefaultArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      studio: Prisma.$StudioPayload<ExtArgs>
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      publisherInsights: Prisma.$PublisherInsightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studioId: string
      title: string
      genre: string | null
      platform: string | null
      buildVersion: string | null
      buildBranch: string | null
      pitchSummary: string | null
      createdAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studio<T extends StudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudioDefaultArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends Game$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Game$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Game$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Game$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publisherInsights<T extends Game$publisherInsightsArgs<ExtArgs> = {}>(args?: Subset<T, Game$publisherInsightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly studioId: FieldRef<"Game", 'String'>
    readonly title: FieldRef<"Game", 'String'>
    readonly genre: FieldRef<"Game", 'String'>
    readonly platform: FieldRef<"Game", 'String'>
    readonly buildVersion: FieldRef<"Game", 'String'>
    readonly buildBranch: FieldRef<"Game", 'String'>
    readonly pitchSummary: FieldRef<"Game", 'String'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.sessions
   */
  export type Game$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Game.tasks
   */
  export type Game$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Game.publisherInsights
   */
  export type Game$publisherInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightInclude<ExtArgs> | null
    where?: PublisherInsightWhereInput
    orderBy?: PublisherInsightOrderByWithRelationInput | PublisherInsightOrderByWithRelationInput[]
    cursor?: PublisherInsightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublisherInsightScalarFieldEnum | PublisherInsightScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    status: $Enums.SessionStatus | null
    startTime: Date | null
    endTime: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    status: $Enums.SessionStatus | null
    startTime: Date | null
    endTime: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    gameId: number
    status: number
    startTime: number
    endTime: number
    notes: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    gameId?: true
    status?: true
    startTime?: true
    endTime?: true
    notes?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    gameId?: true
    status?: true
    startTime?: true
    endTime?: true
    notes?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    gameId?: true
    status?: true
    startTime?: true
    endTime?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    gameId: string
    status: $Enums.SessionStatus
    startTime: Date | null
    endTime: Date | null
    notes: string | null
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    notes?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    playtesters?: boolean | Session$playtestersArgs<ExtArgs>
    events?: boolean | Session$eventsArgs<ExtArgs>
    feedback?: boolean | Session$feedbackArgs<ExtArgs>
    reports?: boolean | Session$reportsArgs<ExtArgs>
    tasks?: boolean | Session$tasksArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    notes?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    notes?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    gameId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "status" | "startTime" | "endTime" | "notes" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    playtesters?: boolean | Session$playtestersArgs<ExtArgs>
    events?: boolean | Session$eventsArgs<ExtArgs>
    feedback?: boolean | Session$feedbackArgs<ExtArgs>
    reports?: boolean | Session$reportsArgs<ExtArgs>
    tasks?: boolean | Session$tasksArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      playtesters: Prisma.$SessionPlaytesterPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      status: $Enums.SessionStatus
      startTime: Date | null
      endTime: Date | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    playtesters<T extends Session$playtestersArgs<ExtArgs> = {}>(args?: Subset<T, Session$playtestersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Session$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Session$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedback<T extends Session$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, Session$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends Session$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Session$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Session$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Session$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly gameId: FieldRef<"Session", 'String'>
    readonly status: FieldRef<"Session", 'SessionStatus'>
    readonly startTime: FieldRef<"Session", 'DateTime'>
    readonly endTime: FieldRef<"Session", 'DateTime'>
    readonly notes: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.playtesters
   */
  export type Session$playtestersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
    where?: SessionPlaytesterWhereInput
    orderBy?: SessionPlaytesterOrderByWithRelationInput | SessionPlaytesterOrderByWithRelationInput[]
    cursor?: SessionPlaytesterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionPlaytesterScalarFieldEnum | SessionPlaytesterScalarFieldEnum[]
  }

  /**
   * Session.events
   */
  export type Session$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Session.feedback
   */
  export type Session$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Session.reports
   */
  export type Session$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Session.tasks
   */
  export type Session$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model SessionPlaytester
   */

  export type AggregateSessionPlaytester = {
    _count: SessionPlaytesterCountAggregateOutputType | null
    _min: SessionPlaytesterMinAggregateOutputType | null
    _max: SessionPlaytesterMaxAggregateOutputType | null
  }

  export type SessionPlaytesterMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
  }

  export type SessionPlaytesterMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
  }

  export type SessionPlaytesterCountAggregateOutputType = {
    id: number
    sessionId: number
    userId: number
    _all: number
  }


  export type SessionPlaytesterMinAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
  }

  export type SessionPlaytesterMaxAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
  }

  export type SessionPlaytesterCountAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    _all?: true
  }

  export type SessionPlaytesterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionPlaytester to aggregate.
     */
    where?: SessionPlaytesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionPlaytesters to fetch.
     */
    orderBy?: SessionPlaytesterOrderByWithRelationInput | SessionPlaytesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionPlaytesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionPlaytesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionPlaytesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionPlaytesters
    **/
    _count?: true | SessionPlaytesterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionPlaytesterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionPlaytesterMaxAggregateInputType
  }

  export type GetSessionPlaytesterAggregateType<T extends SessionPlaytesterAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionPlaytester]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionPlaytester[P]>
      : GetScalarType<T[P], AggregateSessionPlaytester[P]>
  }




  export type SessionPlaytesterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionPlaytesterWhereInput
    orderBy?: SessionPlaytesterOrderByWithAggregationInput | SessionPlaytesterOrderByWithAggregationInput[]
    by: SessionPlaytesterScalarFieldEnum[] | SessionPlaytesterScalarFieldEnum
    having?: SessionPlaytesterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionPlaytesterCountAggregateInputType | true
    _min?: SessionPlaytesterMinAggregateInputType
    _max?: SessionPlaytesterMaxAggregateInputType
  }

  export type SessionPlaytesterGroupByOutputType = {
    id: string
    sessionId: string
    userId: string
    _count: SessionPlaytesterCountAggregateOutputType | null
    _min: SessionPlaytesterMinAggregateOutputType | null
    _max: SessionPlaytesterMaxAggregateOutputType | null
  }

  type GetSessionPlaytesterGroupByPayload<T extends SessionPlaytesterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionPlaytesterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionPlaytesterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionPlaytesterGroupByOutputType[P]>
            : GetScalarType<T[P], SessionPlaytesterGroupByOutputType[P]>
        }
      >
    >


  export type SessionPlaytesterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionPlaytester"]>

  export type SessionPlaytesterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionPlaytester"]>

  export type SessionPlaytesterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionPlaytester"]>

  export type SessionPlaytesterSelectScalar = {
    id?: boolean
    sessionId?: boolean
    userId?: boolean
  }

  export type SessionPlaytesterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "userId", ExtArgs["result"]["sessionPlaytester"]>
  export type SessionPlaytesterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionPlaytesterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionPlaytesterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPlaytesterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionPlaytester"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      userId: string
    }, ExtArgs["result"]["sessionPlaytester"]>
    composites: {}
  }

  type SessionPlaytesterGetPayload<S extends boolean | null | undefined | SessionPlaytesterDefaultArgs> = $Result.GetResult<Prisma.$SessionPlaytesterPayload, S>

  type SessionPlaytesterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionPlaytesterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionPlaytesterCountAggregateInputType | true
    }

  export interface SessionPlaytesterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionPlaytester'], meta: { name: 'SessionPlaytester' } }
    /**
     * Find zero or one SessionPlaytester that matches the filter.
     * @param {SessionPlaytesterFindUniqueArgs} args - Arguments to find a SessionPlaytester
     * @example
     * // Get one SessionPlaytester
     * const sessionPlaytester = await prisma.sessionPlaytester.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionPlaytesterFindUniqueArgs>(args: SelectSubset<T, SessionPlaytesterFindUniqueArgs<ExtArgs>>): Prisma__SessionPlaytesterClient<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionPlaytester that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionPlaytesterFindUniqueOrThrowArgs} args - Arguments to find a SessionPlaytester
     * @example
     * // Get one SessionPlaytester
     * const sessionPlaytester = await prisma.sessionPlaytester.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionPlaytesterFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionPlaytesterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionPlaytesterClient<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionPlaytester that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPlaytesterFindFirstArgs} args - Arguments to find a SessionPlaytester
     * @example
     * // Get one SessionPlaytester
     * const sessionPlaytester = await prisma.sessionPlaytester.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionPlaytesterFindFirstArgs>(args?: SelectSubset<T, SessionPlaytesterFindFirstArgs<ExtArgs>>): Prisma__SessionPlaytesterClient<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionPlaytester that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPlaytesterFindFirstOrThrowArgs} args - Arguments to find a SessionPlaytester
     * @example
     * // Get one SessionPlaytester
     * const sessionPlaytester = await prisma.sessionPlaytester.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionPlaytesterFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionPlaytesterFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionPlaytesterClient<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionPlaytesters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPlaytesterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionPlaytesters
     * const sessionPlaytesters = await prisma.sessionPlaytester.findMany()
     * 
     * // Get first 10 SessionPlaytesters
     * const sessionPlaytesters = await prisma.sessionPlaytester.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionPlaytesterWithIdOnly = await prisma.sessionPlaytester.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionPlaytesterFindManyArgs>(args?: SelectSubset<T, SessionPlaytesterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionPlaytester.
     * @param {SessionPlaytesterCreateArgs} args - Arguments to create a SessionPlaytester.
     * @example
     * // Create one SessionPlaytester
     * const SessionPlaytester = await prisma.sessionPlaytester.create({
     *   data: {
     *     // ... data to create a SessionPlaytester
     *   }
     * })
     * 
     */
    create<T extends SessionPlaytesterCreateArgs>(args: SelectSubset<T, SessionPlaytesterCreateArgs<ExtArgs>>): Prisma__SessionPlaytesterClient<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionPlaytesters.
     * @param {SessionPlaytesterCreateManyArgs} args - Arguments to create many SessionPlaytesters.
     * @example
     * // Create many SessionPlaytesters
     * const sessionPlaytester = await prisma.sessionPlaytester.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionPlaytesterCreateManyArgs>(args?: SelectSubset<T, SessionPlaytesterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionPlaytesters and returns the data saved in the database.
     * @param {SessionPlaytesterCreateManyAndReturnArgs} args - Arguments to create many SessionPlaytesters.
     * @example
     * // Create many SessionPlaytesters
     * const sessionPlaytester = await prisma.sessionPlaytester.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionPlaytesters and only return the `id`
     * const sessionPlaytesterWithIdOnly = await prisma.sessionPlaytester.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionPlaytesterCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionPlaytesterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionPlaytester.
     * @param {SessionPlaytesterDeleteArgs} args - Arguments to delete one SessionPlaytester.
     * @example
     * // Delete one SessionPlaytester
     * const SessionPlaytester = await prisma.sessionPlaytester.delete({
     *   where: {
     *     // ... filter to delete one SessionPlaytester
     *   }
     * })
     * 
     */
    delete<T extends SessionPlaytesterDeleteArgs>(args: SelectSubset<T, SessionPlaytesterDeleteArgs<ExtArgs>>): Prisma__SessionPlaytesterClient<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionPlaytester.
     * @param {SessionPlaytesterUpdateArgs} args - Arguments to update one SessionPlaytester.
     * @example
     * // Update one SessionPlaytester
     * const sessionPlaytester = await prisma.sessionPlaytester.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionPlaytesterUpdateArgs>(args: SelectSubset<T, SessionPlaytesterUpdateArgs<ExtArgs>>): Prisma__SessionPlaytesterClient<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionPlaytesters.
     * @param {SessionPlaytesterDeleteManyArgs} args - Arguments to filter SessionPlaytesters to delete.
     * @example
     * // Delete a few SessionPlaytesters
     * const { count } = await prisma.sessionPlaytester.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionPlaytesterDeleteManyArgs>(args?: SelectSubset<T, SessionPlaytesterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionPlaytesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPlaytesterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionPlaytesters
     * const sessionPlaytester = await prisma.sessionPlaytester.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionPlaytesterUpdateManyArgs>(args: SelectSubset<T, SessionPlaytesterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionPlaytesters and returns the data updated in the database.
     * @param {SessionPlaytesterUpdateManyAndReturnArgs} args - Arguments to update many SessionPlaytesters.
     * @example
     * // Update many SessionPlaytesters
     * const sessionPlaytester = await prisma.sessionPlaytester.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionPlaytesters and only return the `id`
     * const sessionPlaytesterWithIdOnly = await prisma.sessionPlaytester.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionPlaytesterUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionPlaytesterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionPlaytester.
     * @param {SessionPlaytesterUpsertArgs} args - Arguments to update or create a SessionPlaytester.
     * @example
     * // Update or create a SessionPlaytester
     * const sessionPlaytester = await prisma.sessionPlaytester.upsert({
     *   create: {
     *     // ... data to create a SessionPlaytester
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionPlaytester we want to update
     *   }
     * })
     */
    upsert<T extends SessionPlaytesterUpsertArgs>(args: SelectSubset<T, SessionPlaytesterUpsertArgs<ExtArgs>>): Prisma__SessionPlaytesterClient<$Result.GetResult<Prisma.$SessionPlaytesterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionPlaytesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPlaytesterCountArgs} args - Arguments to filter SessionPlaytesters to count.
     * @example
     * // Count the number of SessionPlaytesters
     * const count = await prisma.sessionPlaytester.count({
     *   where: {
     *     // ... the filter for the SessionPlaytesters we want to count
     *   }
     * })
    **/
    count<T extends SessionPlaytesterCountArgs>(
      args?: Subset<T, SessionPlaytesterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionPlaytesterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionPlaytester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPlaytesterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionPlaytesterAggregateArgs>(args: Subset<T, SessionPlaytesterAggregateArgs>): Prisma.PrismaPromise<GetSessionPlaytesterAggregateType<T>>

    /**
     * Group by SessionPlaytester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionPlaytesterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionPlaytesterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionPlaytesterGroupByArgs['orderBy'] }
        : { orderBy?: SessionPlaytesterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionPlaytesterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionPlaytesterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionPlaytester model
   */
  readonly fields: SessionPlaytesterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionPlaytester.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionPlaytesterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SessionPlaytester model
   */
  interface SessionPlaytesterFieldRefs {
    readonly id: FieldRef<"SessionPlaytester", 'String'>
    readonly sessionId: FieldRef<"SessionPlaytester", 'String'>
    readonly userId: FieldRef<"SessionPlaytester", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SessionPlaytester findUnique
   */
  export type SessionPlaytesterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
    /**
     * Filter, which SessionPlaytester to fetch.
     */
    where: SessionPlaytesterWhereUniqueInput
  }

  /**
   * SessionPlaytester findUniqueOrThrow
   */
  export type SessionPlaytesterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
    /**
     * Filter, which SessionPlaytester to fetch.
     */
    where: SessionPlaytesterWhereUniqueInput
  }

  /**
   * SessionPlaytester findFirst
   */
  export type SessionPlaytesterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
    /**
     * Filter, which SessionPlaytester to fetch.
     */
    where?: SessionPlaytesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionPlaytesters to fetch.
     */
    orderBy?: SessionPlaytesterOrderByWithRelationInput | SessionPlaytesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionPlaytesters.
     */
    cursor?: SessionPlaytesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionPlaytesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionPlaytesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionPlaytesters.
     */
    distinct?: SessionPlaytesterScalarFieldEnum | SessionPlaytesterScalarFieldEnum[]
  }

  /**
   * SessionPlaytester findFirstOrThrow
   */
  export type SessionPlaytesterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
    /**
     * Filter, which SessionPlaytester to fetch.
     */
    where?: SessionPlaytesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionPlaytesters to fetch.
     */
    orderBy?: SessionPlaytesterOrderByWithRelationInput | SessionPlaytesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionPlaytesters.
     */
    cursor?: SessionPlaytesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionPlaytesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionPlaytesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionPlaytesters.
     */
    distinct?: SessionPlaytesterScalarFieldEnum | SessionPlaytesterScalarFieldEnum[]
  }

  /**
   * SessionPlaytester findMany
   */
  export type SessionPlaytesterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
    /**
     * Filter, which SessionPlaytesters to fetch.
     */
    where?: SessionPlaytesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionPlaytesters to fetch.
     */
    orderBy?: SessionPlaytesterOrderByWithRelationInput | SessionPlaytesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionPlaytesters.
     */
    cursor?: SessionPlaytesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionPlaytesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionPlaytesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionPlaytesters.
     */
    distinct?: SessionPlaytesterScalarFieldEnum | SessionPlaytesterScalarFieldEnum[]
  }

  /**
   * SessionPlaytester create
   */
  export type SessionPlaytesterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionPlaytester.
     */
    data: XOR<SessionPlaytesterCreateInput, SessionPlaytesterUncheckedCreateInput>
  }

  /**
   * SessionPlaytester createMany
   */
  export type SessionPlaytesterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionPlaytesters.
     */
    data: SessionPlaytesterCreateManyInput | SessionPlaytesterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionPlaytester createManyAndReturn
   */
  export type SessionPlaytesterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * The data used to create many SessionPlaytesters.
     */
    data: SessionPlaytesterCreateManyInput | SessionPlaytesterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionPlaytester update
   */
  export type SessionPlaytesterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionPlaytester.
     */
    data: XOR<SessionPlaytesterUpdateInput, SessionPlaytesterUncheckedUpdateInput>
    /**
     * Choose, which SessionPlaytester to update.
     */
    where: SessionPlaytesterWhereUniqueInput
  }

  /**
   * SessionPlaytester updateMany
   */
  export type SessionPlaytesterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionPlaytesters.
     */
    data: XOR<SessionPlaytesterUpdateManyMutationInput, SessionPlaytesterUncheckedUpdateManyInput>
    /**
     * Filter which SessionPlaytesters to update
     */
    where?: SessionPlaytesterWhereInput
    /**
     * Limit how many SessionPlaytesters to update.
     */
    limit?: number
  }

  /**
   * SessionPlaytester updateManyAndReturn
   */
  export type SessionPlaytesterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * The data used to update SessionPlaytesters.
     */
    data: XOR<SessionPlaytesterUpdateManyMutationInput, SessionPlaytesterUncheckedUpdateManyInput>
    /**
     * Filter which SessionPlaytesters to update
     */
    where?: SessionPlaytesterWhereInput
    /**
     * Limit how many SessionPlaytesters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionPlaytester upsert
   */
  export type SessionPlaytesterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionPlaytester to update in case it exists.
     */
    where: SessionPlaytesterWhereUniqueInput
    /**
     * In case the SessionPlaytester found by the `where` argument doesn't exist, create a new SessionPlaytester with this data.
     */
    create: XOR<SessionPlaytesterCreateInput, SessionPlaytesterUncheckedCreateInput>
    /**
     * In case the SessionPlaytester was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionPlaytesterUpdateInput, SessionPlaytesterUncheckedUpdateInput>
  }

  /**
   * SessionPlaytester delete
   */
  export type SessionPlaytesterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
    /**
     * Filter which SessionPlaytester to delete.
     */
    where: SessionPlaytesterWhereUniqueInput
  }

  /**
   * SessionPlaytester deleteMany
   */
  export type SessionPlaytesterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionPlaytesters to delete
     */
    where?: SessionPlaytesterWhereInput
    /**
     * Limit how many SessionPlaytesters to delete.
     */
    limit?: number
  }

  /**
   * SessionPlaytester without action
   */
  export type SessionPlaytesterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionPlaytester
     */
    select?: SessionPlaytesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionPlaytester
     */
    omit?: SessionPlaytesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionPlaytesterInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    type: $Enums.EventType | null
    timestamp: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    type: $Enums.EventType | null
    timestamp: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    sessionId: number
    type: number
    timestamp: number
    payload: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    sessionId?: true
    type?: true
    timestamp?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    sessionId?: true
    type?: true
    timestamp?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    sessionId?: true
    type?: true
    timestamp?: true
    payload?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    sessionId: string
    type: $Enums.EventType
    timestamp: Date
    payload: JsonValue
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    type?: boolean
    timestamp?: boolean
    payload?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    type?: boolean
    timestamp?: boolean
    payload?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    type?: boolean
    timestamp?: boolean
    payload?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    sessionId?: boolean
    type?: boolean
    timestamp?: boolean
    payload?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "type" | "timestamp" | "payload", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      type: $Enums.EventType
      timestamp: Date
      payload: Prisma.JsonValue
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly sessionId: FieldRef<"Event", 'String'>
    readonly type: FieldRef<"Event", 'EventType'>
    readonly timestamp: FieldRef<"Event", 'DateTime'>
    readonly payload: FieldRef<"Event", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    authorUserId: string | null
    category: $Enums.FeedbackCategory | null
    severity: $Enums.FeedbackSeverity | null
    content: string | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    authorUserId: string | null
    category: $Enums.FeedbackCategory | null
    severity: $Enums.FeedbackSeverity | null
    content: string | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    sessionId: number
    authorUserId: number
    category: number
    severity: number
    content: number
    tags: number
    createdAt: number
    _all: number
  }


  export type FeedbackMinAggregateInputType = {
    id?: true
    sessionId?: true
    authorUserId?: true
    category?: true
    severity?: true
    content?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    sessionId?: true
    authorUserId?: true
    category?: true
    severity?: true
    content?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    sessionId?: true
    authorUserId?: true
    category?: true
    severity?: true
    content?: true
    tags?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    sessionId: string
    authorUserId: string
    category: $Enums.FeedbackCategory
    severity: $Enums.FeedbackSeverity
    content: string
    tags: string[]
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    authorUserId?: boolean
    category?: boolean
    severity?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    authorUserId?: boolean
    category?: boolean
    severity?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    authorUserId?: boolean
    category?: boolean
    severity?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    sessionId?: boolean
    authorUserId?: boolean
    category?: boolean
    severity?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "authorUserId" | "category" | "severity" | "content" | "tags" | "createdAt", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      authorUserId: string
      category: $Enums.FeedbackCategory
      severity: $Enums.FeedbackSeverity
      content: string
      tags: string[]
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly sessionId: FieldRef<"Feedback", 'String'>
    readonly authorUserId: FieldRef<"Feedback", 'String'>
    readonly category: FieldRef<"Feedback", 'FeedbackCategory'>
    readonly severity: FieldRef<"Feedback", 'FeedbackSeverity'>
    readonly content: FieldRef<"Feedback", 'String'>
    readonly tags: FieldRef<"Feedback", 'String[]'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    type: $Enums.ReportType | null
    content: string | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    type: $Enums.ReportType | null
    content: string | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    sessionId: number
    type: number
    content: number
    createdAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    sessionId?: true
    type?: true
    content?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    sessionId?: true
    type?: true
    content?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    sessionId?: true
    type?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    sessionId: string
    type: $Enums.ReportType
    content: string
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    sessionId?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "type" | "content" | "createdAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      type: $Enums.ReportType
      content: string
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly sessionId: FieldRef<"Report", 'String'>
    readonly type: FieldRef<"Report", 'ReportType'>
    readonly content: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    sessionId: string | null
    title: string | null
    description: string | null
    priority: $Enums.TaskPriority | null
    status: $Enums.TaskStatus | null
    source: $Enums.TaskSource | null
    createdAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    sessionId: string | null
    title: string | null
    description: string | null
    priority: $Enums.TaskPriority | null
    status: $Enums.TaskStatus | null
    source: $Enums.TaskSource | null
    createdAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    gameId: number
    sessionId: number
    title: number
    description: number
    priority: number
    status: number
    source: number
    createdAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    gameId?: true
    sessionId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    source?: true
    createdAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    gameId?: true
    sessionId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    source?: true
    createdAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    gameId?: true
    sessionId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    gameId: string | null
    sessionId: string | null
    title: string
    description: string | null
    priority: $Enums.TaskPriority
    status: $Enums.TaskStatus
    source: $Enums.TaskSource
    createdAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    sessionId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
    game?: boolean | Task$gameArgs<ExtArgs>
    session?: boolean | Task$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    sessionId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
    game?: boolean | Task$gameArgs<ExtArgs>
    session?: boolean | Task$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    sessionId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
    game?: boolean | Task$gameArgs<ExtArgs>
    session?: boolean | Task$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    gameId?: boolean
    sessionId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "sessionId" | "title" | "description" | "priority" | "status" | "source" | "createdAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | Task$gameArgs<ExtArgs>
    session?: boolean | Task$sessionArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | Task$gameArgs<ExtArgs>
    session?: boolean | Task$sessionArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | Task$gameArgs<ExtArgs>
    session?: boolean | Task$sessionArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      game: Prisma.$GamePayload<ExtArgs> | null
      session: Prisma.$SessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string | null
      sessionId: string | null
      title: string
      description: string | null
      priority: $Enums.TaskPriority
      status: $Enums.TaskStatus
      source: $Enums.TaskSource
      createdAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends Task$gameArgs<ExtArgs> = {}>(args?: Subset<T, Task$gameArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    session<T extends Task$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Task$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly gameId: FieldRef<"Task", 'String'>
    readonly sessionId: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'TaskPriority'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly source: FieldRef<"Task", 'TaskSource'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.game
   */
  export type Task$gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
  }

  /**
   * Task.session
   */
  export type Task$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model PublisherInsight
   */

  export type AggregatePublisherInsight = {
    _count: PublisherInsightCountAggregateOutputType | null
    _avg: PublisherInsightAvgAggregateOutputType | null
    _sum: PublisherInsightSumAggregateOutputType | null
    _min: PublisherInsightMinAggregateOutputType | null
    _max: PublisherInsightMaxAggregateOutputType | null
  }

  export type PublisherInsightAvgAggregateOutputType = {
    score: number | null
  }

  export type PublisherInsightSumAggregateOutputType = {
    score: number | null
  }

  export type PublisherInsightMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    score: number | null
    rationale: string | null
    recommendedNextSteps: string | null
    createdAt: Date | null
  }

  export type PublisherInsightMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    score: number | null
    rationale: string | null
    recommendedNextSteps: string | null
    createdAt: Date | null
  }

  export type PublisherInsightCountAggregateOutputType = {
    id: number
    gameId: number
    score: number
    rationale: number
    recommendedNextSteps: number
    createdAt: number
    _all: number
  }


  export type PublisherInsightAvgAggregateInputType = {
    score?: true
  }

  export type PublisherInsightSumAggregateInputType = {
    score?: true
  }

  export type PublisherInsightMinAggregateInputType = {
    id?: true
    gameId?: true
    score?: true
    rationale?: true
    recommendedNextSteps?: true
    createdAt?: true
  }

  export type PublisherInsightMaxAggregateInputType = {
    id?: true
    gameId?: true
    score?: true
    rationale?: true
    recommendedNextSteps?: true
    createdAt?: true
  }

  export type PublisherInsightCountAggregateInputType = {
    id?: true
    gameId?: true
    score?: true
    rationale?: true
    recommendedNextSteps?: true
    createdAt?: true
    _all?: true
  }

  export type PublisherInsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublisherInsight to aggregate.
     */
    where?: PublisherInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublisherInsights to fetch.
     */
    orderBy?: PublisherInsightOrderByWithRelationInput | PublisherInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublisherInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublisherInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublisherInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublisherInsights
    **/
    _count?: true | PublisherInsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublisherInsightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublisherInsightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublisherInsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublisherInsightMaxAggregateInputType
  }

  export type GetPublisherInsightAggregateType<T extends PublisherInsightAggregateArgs> = {
        [P in keyof T & keyof AggregatePublisherInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublisherInsight[P]>
      : GetScalarType<T[P], AggregatePublisherInsight[P]>
  }




  export type PublisherInsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublisherInsightWhereInput
    orderBy?: PublisherInsightOrderByWithAggregationInput | PublisherInsightOrderByWithAggregationInput[]
    by: PublisherInsightScalarFieldEnum[] | PublisherInsightScalarFieldEnum
    having?: PublisherInsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublisherInsightCountAggregateInputType | true
    _avg?: PublisherInsightAvgAggregateInputType
    _sum?: PublisherInsightSumAggregateInputType
    _min?: PublisherInsightMinAggregateInputType
    _max?: PublisherInsightMaxAggregateInputType
  }

  export type PublisherInsightGroupByOutputType = {
    id: string
    gameId: string
    score: number
    rationale: string
    recommendedNextSteps: string
    createdAt: Date
    _count: PublisherInsightCountAggregateOutputType | null
    _avg: PublisherInsightAvgAggregateOutputType | null
    _sum: PublisherInsightSumAggregateOutputType | null
    _min: PublisherInsightMinAggregateOutputType | null
    _max: PublisherInsightMaxAggregateOutputType | null
  }

  type GetPublisherInsightGroupByPayload<T extends PublisherInsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublisherInsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublisherInsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublisherInsightGroupByOutputType[P]>
            : GetScalarType<T[P], PublisherInsightGroupByOutputType[P]>
        }
      >
    >


  export type PublisherInsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    score?: boolean
    rationale?: boolean
    recommendedNextSteps?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisherInsight"]>

  export type PublisherInsightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    score?: boolean
    rationale?: boolean
    recommendedNextSteps?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisherInsight"]>

  export type PublisherInsightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    score?: boolean
    rationale?: boolean
    recommendedNextSteps?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisherInsight"]>

  export type PublisherInsightSelectScalar = {
    id?: boolean
    gameId?: boolean
    score?: boolean
    rationale?: boolean
    recommendedNextSteps?: boolean
    createdAt?: boolean
  }

  export type PublisherInsightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "score" | "rationale" | "recommendedNextSteps" | "createdAt", ExtArgs["result"]["publisherInsight"]>
  export type PublisherInsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type PublisherInsightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type PublisherInsightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $PublisherInsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublisherInsight"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      score: number
      rationale: string
      recommendedNextSteps: string
      createdAt: Date
    }, ExtArgs["result"]["publisherInsight"]>
    composites: {}
  }

  type PublisherInsightGetPayload<S extends boolean | null | undefined | PublisherInsightDefaultArgs> = $Result.GetResult<Prisma.$PublisherInsightPayload, S>

  type PublisherInsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublisherInsightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublisherInsightCountAggregateInputType | true
    }

  export interface PublisherInsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublisherInsight'], meta: { name: 'PublisherInsight' } }
    /**
     * Find zero or one PublisherInsight that matches the filter.
     * @param {PublisherInsightFindUniqueArgs} args - Arguments to find a PublisherInsight
     * @example
     * // Get one PublisherInsight
     * const publisherInsight = await prisma.publisherInsight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublisherInsightFindUniqueArgs>(args: SelectSubset<T, PublisherInsightFindUniqueArgs<ExtArgs>>): Prisma__PublisherInsightClient<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublisherInsight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublisherInsightFindUniqueOrThrowArgs} args - Arguments to find a PublisherInsight
     * @example
     * // Get one PublisherInsight
     * const publisherInsight = await prisma.publisherInsight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublisherInsightFindUniqueOrThrowArgs>(args: SelectSubset<T, PublisherInsightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublisherInsightClient<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublisherInsight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherInsightFindFirstArgs} args - Arguments to find a PublisherInsight
     * @example
     * // Get one PublisherInsight
     * const publisherInsight = await prisma.publisherInsight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublisherInsightFindFirstArgs>(args?: SelectSubset<T, PublisherInsightFindFirstArgs<ExtArgs>>): Prisma__PublisherInsightClient<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublisherInsight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherInsightFindFirstOrThrowArgs} args - Arguments to find a PublisherInsight
     * @example
     * // Get one PublisherInsight
     * const publisherInsight = await prisma.publisherInsight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublisherInsightFindFirstOrThrowArgs>(args?: SelectSubset<T, PublisherInsightFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublisherInsightClient<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublisherInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherInsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublisherInsights
     * const publisherInsights = await prisma.publisherInsight.findMany()
     * 
     * // Get first 10 PublisherInsights
     * const publisherInsights = await prisma.publisherInsight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publisherInsightWithIdOnly = await prisma.publisherInsight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublisherInsightFindManyArgs>(args?: SelectSubset<T, PublisherInsightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublisherInsight.
     * @param {PublisherInsightCreateArgs} args - Arguments to create a PublisherInsight.
     * @example
     * // Create one PublisherInsight
     * const PublisherInsight = await prisma.publisherInsight.create({
     *   data: {
     *     // ... data to create a PublisherInsight
     *   }
     * })
     * 
     */
    create<T extends PublisherInsightCreateArgs>(args: SelectSubset<T, PublisherInsightCreateArgs<ExtArgs>>): Prisma__PublisherInsightClient<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublisherInsights.
     * @param {PublisherInsightCreateManyArgs} args - Arguments to create many PublisherInsights.
     * @example
     * // Create many PublisherInsights
     * const publisherInsight = await prisma.publisherInsight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublisherInsightCreateManyArgs>(args?: SelectSubset<T, PublisherInsightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublisherInsights and returns the data saved in the database.
     * @param {PublisherInsightCreateManyAndReturnArgs} args - Arguments to create many PublisherInsights.
     * @example
     * // Create many PublisherInsights
     * const publisherInsight = await prisma.publisherInsight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublisherInsights and only return the `id`
     * const publisherInsightWithIdOnly = await prisma.publisherInsight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublisherInsightCreateManyAndReturnArgs>(args?: SelectSubset<T, PublisherInsightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublisherInsight.
     * @param {PublisherInsightDeleteArgs} args - Arguments to delete one PublisherInsight.
     * @example
     * // Delete one PublisherInsight
     * const PublisherInsight = await prisma.publisherInsight.delete({
     *   where: {
     *     // ... filter to delete one PublisherInsight
     *   }
     * })
     * 
     */
    delete<T extends PublisherInsightDeleteArgs>(args: SelectSubset<T, PublisherInsightDeleteArgs<ExtArgs>>): Prisma__PublisherInsightClient<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublisherInsight.
     * @param {PublisherInsightUpdateArgs} args - Arguments to update one PublisherInsight.
     * @example
     * // Update one PublisherInsight
     * const publisherInsight = await prisma.publisherInsight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublisherInsightUpdateArgs>(args: SelectSubset<T, PublisherInsightUpdateArgs<ExtArgs>>): Prisma__PublisherInsightClient<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublisherInsights.
     * @param {PublisherInsightDeleteManyArgs} args - Arguments to filter PublisherInsights to delete.
     * @example
     * // Delete a few PublisherInsights
     * const { count } = await prisma.publisherInsight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublisherInsightDeleteManyArgs>(args?: SelectSubset<T, PublisherInsightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublisherInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherInsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublisherInsights
     * const publisherInsight = await prisma.publisherInsight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublisherInsightUpdateManyArgs>(args: SelectSubset<T, PublisherInsightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublisherInsights and returns the data updated in the database.
     * @param {PublisherInsightUpdateManyAndReturnArgs} args - Arguments to update many PublisherInsights.
     * @example
     * // Update many PublisherInsights
     * const publisherInsight = await prisma.publisherInsight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublisherInsights and only return the `id`
     * const publisherInsightWithIdOnly = await prisma.publisherInsight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublisherInsightUpdateManyAndReturnArgs>(args: SelectSubset<T, PublisherInsightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublisherInsight.
     * @param {PublisherInsightUpsertArgs} args - Arguments to update or create a PublisherInsight.
     * @example
     * // Update or create a PublisherInsight
     * const publisherInsight = await prisma.publisherInsight.upsert({
     *   create: {
     *     // ... data to create a PublisherInsight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublisherInsight we want to update
     *   }
     * })
     */
    upsert<T extends PublisherInsightUpsertArgs>(args: SelectSubset<T, PublisherInsightUpsertArgs<ExtArgs>>): Prisma__PublisherInsightClient<$Result.GetResult<Prisma.$PublisherInsightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublisherInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherInsightCountArgs} args - Arguments to filter PublisherInsights to count.
     * @example
     * // Count the number of PublisherInsights
     * const count = await prisma.publisherInsight.count({
     *   where: {
     *     // ... the filter for the PublisherInsights we want to count
     *   }
     * })
    **/
    count<T extends PublisherInsightCountArgs>(
      args?: Subset<T, PublisherInsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublisherInsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublisherInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherInsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublisherInsightAggregateArgs>(args: Subset<T, PublisherInsightAggregateArgs>): Prisma.PrismaPromise<GetPublisherInsightAggregateType<T>>

    /**
     * Group by PublisherInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherInsightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublisherInsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublisherInsightGroupByArgs['orderBy'] }
        : { orderBy?: PublisherInsightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublisherInsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublisherInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublisherInsight model
   */
  readonly fields: PublisherInsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublisherInsight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublisherInsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublisherInsight model
   */
  interface PublisherInsightFieldRefs {
    readonly id: FieldRef<"PublisherInsight", 'String'>
    readonly gameId: FieldRef<"PublisherInsight", 'String'>
    readonly score: FieldRef<"PublisherInsight", 'Int'>
    readonly rationale: FieldRef<"PublisherInsight", 'String'>
    readonly recommendedNextSteps: FieldRef<"PublisherInsight", 'String'>
    readonly createdAt: FieldRef<"PublisherInsight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublisherInsight findUnique
   */
  export type PublisherInsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightInclude<ExtArgs> | null
    /**
     * Filter, which PublisherInsight to fetch.
     */
    where: PublisherInsightWhereUniqueInput
  }

  /**
   * PublisherInsight findUniqueOrThrow
   */
  export type PublisherInsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightInclude<ExtArgs> | null
    /**
     * Filter, which PublisherInsight to fetch.
     */
    where: PublisherInsightWhereUniqueInput
  }

  /**
   * PublisherInsight findFirst
   */
  export type PublisherInsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightInclude<ExtArgs> | null
    /**
     * Filter, which PublisherInsight to fetch.
     */
    where?: PublisherInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublisherInsights to fetch.
     */
    orderBy?: PublisherInsightOrderByWithRelationInput | PublisherInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublisherInsights.
     */
    cursor?: PublisherInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublisherInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublisherInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublisherInsights.
     */
    distinct?: PublisherInsightScalarFieldEnum | PublisherInsightScalarFieldEnum[]
  }

  /**
   * PublisherInsight findFirstOrThrow
   */
  export type PublisherInsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightInclude<ExtArgs> | null
    /**
     * Filter, which PublisherInsight to fetch.
     */
    where?: PublisherInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublisherInsights to fetch.
     */
    orderBy?: PublisherInsightOrderByWithRelationInput | PublisherInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublisherInsights.
     */
    cursor?: PublisherInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublisherInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublisherInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublisherInsights.
     */
    distinct?: PublisherInsightScalarFieldEnum | PublisherInsightScalarFieldEnum[]
  }

  /**
   * PublisherInsight findMany
   */
  export type PublisherInsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightInclude<ExtArgs> | null
    /**
     * Filter, which PublisherInsights to fetch.
     */
    where?: PublisherInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublisherInsights to fetch.
     */
    orderBy?: PublisherInsightOrderByWithRelationInput | PublisherInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublisherInsights.
     */
    cursor?: PublisherInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublisherInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublisherInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublisherInsights.
     */
    distinct?: PublisherInsightScalarFieldEnum | PublisherInsightScalarFieldEnum[]
  }

  /**
   * PublisherInsight create
   */
  export type PublisherInsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightInclude<ExtArgs> | null
    /**
     * The data needed to create a PublisherInsight.
     */
    data: XOR<PublisherInsightCreateInput, PublisherInsightUncheckedCreateInput>
  }

  /**
   * PublisherInsight createMany
   */
  export type PublisherInsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublisherInsights.
     */
    data: PublisherInsightCreateManyInput | PublisherInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublisherInsight createManyAndReturn
   */
  export type PublisherInsightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * The data used to create many PublisherInsights.
     */
    data: PublisherInsightCreateManyInput | PublisherInsightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublisherInsight update
   */
  export type PublisherInsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightInclude<ExtArgs> | null
    /**
     * The data needed to update a PublisherInsight.
     */
    data: XOR<PublisherInsightUpdateInput, PublisherInsightUncheckedUpdateInput>
    /**
     * Choose, which PublisherInsight to update.
     */
    where: PublisherInsightWhereUniqueInput
  }

  /**
   * PublisherInsight updateMany
   */
  export type PublisherInsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublisherInsights.
     */
    data: XOR<PublisherInsightUpdateManyMutationInput, PublisherInsightUncheckedUpdateManyInput>
    /**
     * Filter which PublisherInsights to update
     */
    where?: PublisherInsightWhereInput
    /**
     * Limit how many PublisherInsights to update.
     */
    limit?: number
  }

  /**
   * PublisherInsight updateManyAndReturn
   */
  export type PublisherInsightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * The data used to update PublisherInsights.
     */
    data: XOR<PublisherInsightUpdateManyMutationInput, PublisherInsightUncheckedUpdateManyInput>
    /**
     * Filter which PublisherInsights to update
     */
    where?: PublisherInsightWhereInput
    /**
     * Limit how many PublisherInsights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublisherInsight upsert
   */
  export type PublisherInsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightInclude<ExtArgs> | null
    /**
     * The filter to search for the PublisherInsight to update in case it exists.
     */
    where: PublisherInsightWhereUniqueInput
    /**
     * In case the PublisherInsight found by the `where` argument doesn't exist, create a new PublisherInsight with this data.
     */
    create: XOR<PublisherInsightCreateInput, PublisherInsightUncheckedCreateInput>
    /**
     * In case the PublisherInsight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublisherInsightUpdateInput, PublisherInsightUncheckedUpdateInput>
  }

  /**
   * PublisherInsight delete
   */
  export type PublisherInsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightInclude<ExtArgs> | null
    /**
     * Filter which PublisherInsight to delete.
     */
    where: PublisherInsightWhereUniqueInput
  }

  /**
   * PublisherInsight deleteMany
   */
  export type PublisherInsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublisherInsights to delete
     */
    where?: PublisherInsightWhereInput
    /**
     * Limit how many PublisherInsights to delete.
     */
    limit?: number
  }

  /**
   * PublisherInsight without action
   */
  export type PublisherInsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherInsight
     */
    select?: PublisherInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherInsight
     */
    omit?: PublisherInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInsightInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    bio: 'bio',
    skills: 'skills',
    studioName: 'studioName',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudioScalarFieldEnum: {
    id: 'id',
    ownerUserId: 'ownerUserId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type StudioScalarFieldEnum = (typeof StudioScalarFieldEnum)[keyof typeof StudioScalarFieldEnum]


  export const StudioMemberScalarFieldEnum: {
    id: 'id',
    studioId: 'studioId',
    userId: 'userId'
  };

  export type StudioMemberScalarFieldEnum = (typeof StudioMemberScalarFieldEnum)[keyof typeof StudioMemberScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    studioId: 'studioId',
    title: 'title',
    genre: 'genre',
    platform: 'platform',
    buildVersion: 'buildVersion',
    buildBranch: 'buildBranch',
    pitchSummary: 'pitchSummary',
    createdAt: 'createdAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    status: 'status',
    startTime: 'startTime',
    endTime: 'endTime',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SessionPlaytesterScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    userId: 'userId'
  };

  export type SessionPlaytesterScalarFieldEnum = (typeof SessionPlaytesterScalarFieldEnum)[keyof typeof SessionPlaytesterScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    type: 'type',
    timestamp: 'timestamp',
    payload: 'payload'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    authorUserId: 'authorUserId',
    category: 'category',
    severity: 'severity',
    content: 'content',
    tags: 'tags',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    type: 'type',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    sessionId: 'sessionId',
    title: 'title',
    description: 'description',
    priority: 'priority',
    status: 'status',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const PublisherInsightScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    score: 'score',
    rationale: 'rationale',
    recommendedNextSteps: 'recommendedNextSteps',
    createdAt: 'createdAt'
  };

  export type PublisherInsightScalarFieldEnum = (typeof PublisherInsightScalarFieldEnum)[keyof typeof PublisherInsightScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'FeedbackCategory'
   */
  export type EnumFeedbackCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackCategory'>
    


  /**
   * Reference to a field of type 'FeedbackCategory[]'
   */
  export type ListEnumFeedbackCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackCategory[]'>
    


  /**
   * Reference to a field of type 'FeedbackSeverity'
   */
  export type EnumFeedbackSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackSeverity'>
    


  /**
   * Reference to a field of type 'FeedbackSeverity[]'
   */
  export type ListEnumFeedbackSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackSeverity[]'>
    


  /**
   * Reference to a field of type 'ReportType'
   */
  export type EnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType'>
    


  /**
   * Reference to a field of type 'ReportType[]'
   */
  export type ListEnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType[]'>
    


  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority'>
    


  /**
   * Reference to a field of type 'TaskPriority[]'
   */
  export type ListEnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'TaskSource'
   */
  export type EnumTaskSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskSource'>
    


  /**
   * Reference to a field of type 'TaskSource[]'
   */
  export type ListEnumTaskSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskSource[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    bio?: StringNullableFilter<"User"> | string | null
    skills?: StringNullableListFilter<"User">
    studioName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    ownedStudios?: StudioListRelationFilter
    studioMembership?: StudioMemberListRelationFilter
    sessionsAsTester?: SessionPlaytesterListRelationFilter
    feedbackAuthored?: FeedbackListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrder
    studioName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ownedStudios?: StudioOrderByRelationAggregateInput
    studioMembership?: StudioMemberOrderByRelationAggregateInput
    sessionsAsTester?: SessionPlaytesterOrderByRelationAggregateInput
    feedbackAuthored?: FeedbackOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    bio?: StringNullableFilter<"User"> | string | null
    skills?: StringNullableListFilter<"User">
    studioName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    ownedStudios?: StudioListRelationFilter
    studioMembership?: StudioMemberListRelationFilter
    sessionsAsTester?: SessionPlaytesterListRelationFilter
    feedbackAuthored?: FeedbackListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrder
    studioName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    skills?: StringNullableListFilter<"User">
    studioName?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudioWhereInput = {
    AND?: StudioWhereInput | StudioWhereInput[]
    OR?: StudioWhereInput[]
    NOT?: StudioWhereInput | StudioWhereInput[]
    id?: StringFilter<"Studio"> | string
    ownerUserId?: StringFilter<"Studio"> | string
    name?: StringFilter<"Studio"> | string
    description?: StringNullableFilter<"Studio"> | string | null
    createdAt?: DateTimeFilter<"Studio"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: StudioMemberListRelationFilter
    games?: GameListRelationFilter
  }

  export type StudioOrderByWithRelationInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: StudioMemberOrderByRelationAggregateInput
    games?: GameOrderByRelationAggregateInput
  }

  export type StudioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudioWhereInput | StudioWhereInput[]
    OR?: StudioWhereInput[]
    NOT?: StudioWhereInput | StudioWhereInput[]
    ownerUserId?: StringFilter<"Studio"> | string
    name?: StringFilter<"Studio"> | string
    description?: StringNullableFilter<"Studio"> | string | null
    createdAt?: DateTimeFilter<"Studio"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: StudioMemberListRelationFilter
    games?: GameListRelationFilter
  }, "id">

  export type StudioOrderByWithAggregationInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StudioCountOrderByAggregateInput
    _max?: StudioMaxOrderByAggregateInput
    _min?: StudioMinOrderByAggregateInput
  }

  export type StudioScalarWhereWithAggregatesInput = {
    AND?: StudioScalarWhereWithAggregatesInput | StudioScalarWhereWithAggregatesInput[]
    OR?: StudioScalarWhereWithAggregatesInput[]
    NOT?: StudioScalarWhereWithAggregatesInput | StudioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Studio"> | string
    ownerUserId?: StringWithAggregatesFilter<"Studio"> | string
    name?: StringWithAggregatesFilter<"Studio"> | string
    description?: StringNullableWithAggregatesFilter<"Studio"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Studio"> | Date | string
  }

  export type StudioMemberWhereInput = {
    AND?: StudioMemberWhereInput | StudioMemberWhereInput[]
    OR?: StudioMemberWhereInput[]
    NOT?: StudioMemberWhereInput | StudioMemberWhereInput[]
    id?: StringFilter<"StudioMember"> | string
    studioId?: StringFilter<"StudioMember"> | string
    userId?: StringFilter<"StudioMember"> | string
    studio?: XOR<StudioScalarRelationFilter, StudioWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudioMemberOrderByWithRelationInput = {
    id?: SortOrder
    studioId?: SortOrder
    userId?: SortOrder
    studio?: StudioOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StudioMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studioId_userId?: StudioMemberStudioIdUserIdCompoundUniqueInput
    AND?: StudioMemberWhereInput | StudioMemberWhereInput[]
    OR?: StudioMemberWhereInput[]
    NOT?: StudioMemberWhereInput | StudioMemberWhereInput[]
    studioId?: StringFilter<"StudioMember"> | string
    userId?: StringFilter<"StudioMember"> | string
    studio?: XOR<StudioScalarRelationFilter, StudioWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "studioId_userId">

  export type StudioMemberOrderByWithAggregationInput = {
    id?: SortOrder
    studioId?: SortOrder
    userId?: SortOrder
    _count?: StudioMemberCountOrderByAggregateInput
    _max?: StudioMemberMaxOrderByAggregateInput
    _min?: StudioMemberMinOrderByAggregateInput
  }

  export type StudioMemberScalarWhereWithAggregatesInput = {
    AND?: StudioMemberScalarWhereWithAggregatesInput | StudioMemberScalarWhereWithAggregatesInput[]
    OR?: StudioMemberScalarWhereWithAggregatesInput[]
    NOT?: StudioMemberScalarWhereWithAggregatesInput | StudioMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudioMember"> | string
    studioId?: StringWithAggregatesFilter<"StudioMember"> | string
    userId?: StringWithAggregatesFilter<"StudioMember"> | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    studioId?: StringFilter<"Game"> | string
    title?: StringFilter<"Game"> | string
    genre?: StringNullableFilter<"Game"> | string | null
    platform?: StringNullableFilter<"Game"> | string | null
    buildVersion?: StringNullableFilter<"Game"> | string | null
    buildBranch?: StringNullableFilter<"Game"> | string | null
    pitchSummary?: StringNullableFilter<"Game"> | string | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
    studio?: XOR<StudioScalarRelationFilter, StudioWhereInput>
    sessions?: SessionListRelationFilter
    tasks?: TaskListRelationFilter
    publisherInsights?: PublisherInsightListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    studioId?: SortOrder
    title?: SortOrder
    genre?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    buildVersion?: SortOrderInput | SortOrder
    buildBranch?: SortOrderInput | SortOrder
    pitchSummary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    studio?: StudioOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    publisherInsights?: PublisherInsightOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    studioId?: StringFilter<"Game"> | string
    title?: StringFilter<"Game"> | string
    genre?: StringNullableFilter<"Game"> | string | null
    platform?: StringNullableFilter<"Game"> | string | null
    buildVersion?: StringNullableFilter<"Game"> | string | null
    buildBranch?: StringNullableFilter<"Game"> | string | null
    pitchSummary?: StringNullableFilter<"Game"> | string | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
    studio?: XOR<StudioScalarRelationFilter, StudioWhereInput>
    sessions?: SessionListRelationFilter
    tasks?: TaskListRelationFilter
    publisherInsights?: PublisherInsightListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    studioId?: SortOrder
    title?: SortOrder
    genre?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    buildVersion?: SortOrderInput | SortOrder
    buildBranch?: SortOrderInput | SortOrder
    pitchSummary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    studioId?: StringWithAggregatesFilter<"Game"> | string
    title?: StringWithAggregatesFilter<"Game"> | string
    genre?: StringNullableWithAggregatesFilter<"Game"> | string | null
    platform?: StringNullableWithAggregatesFilter<"Game"> | string | null
    buildVersion?: StringNullableWithAggregatesFilter<"Game"> | string | null
    buildBranch?: StringNullableWithAggregatesFilter<"Game"> | string | null
    pitchSummary?: StringNullableWithAggregatesFilter<"Game"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    gameId?: StringFilter<"Session"> | string
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    startTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    notes?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    playtesters?: SessionPlaytesterListRelationFilter
    events?: EventListRelationFilter
    feedback?: FeedbackListRelationFilter
    reports?: ReportListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    game?: GameOrderByWithRelationInput
    playtesters?: SessionPlaytesterOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    feedback?: FeedbackOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    gameId?: StringFilter<"Session"> | string
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    startTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    notes?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    playtesters?: SessionPlaytesterListRelationFilter
    events?: EventListRelationFilter
    feedback?: FeedbackListRelationFilter
    reports?: ReportListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    gameId?: StringWithAggregatesFilter<"Session"> | string
    status?: EnumSessionStatusWithAggregatesFilter<"Session"> | $Enums.SessionStatus
    startTime?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    endTime?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type SessionPlaytesterWhereInput = {
    AND?: SessionPlaytesterWhereInput | SessionPlaytesterWhereInput[]
    OR?: SessionPlaytesterWhereInput[]
    NOT?: SessionPlaytesterWhereInput | SessionPlaytesterWhereInput[]
    id?: StringFilter<"SessionPlaytester"> | string
    sessionId?: StringFilter<"SessionPlaytester"> | string
    userId?: StringFilter<"SessionPlaytester"> | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionPlaytesterOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    session?: SessionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SessionPlaytesterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId_userId?: SessionPlaytesterSessionIdUserIdCompoundUniqueInput
    AND?: SessionPlaytesterWhereInput | SessionPlaytesterWhereInput[]
    OR?: SessionPlaytesterWhereInput[]
    NOT?: SessionPlaytesterWhereInput | SessionPlaytesterWhereInput[]
    sessionId?: StringFilter<"SessionPlaytester"> | string
    userId?: StringFilter<"SessionPlaytester"> | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionId_userId">

  export type SessionPlaytesterOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    _count?: SessionPlaytesterCountOrderByAggregateInput
    _max?: SessionPlaytesterMaxOrderByAggregateInput
    _min?: SessionPlaytesterMinOrderByAggregateInput
  }

  export type SessionPlaytesterScalarWhereWithAggregatesInput = {
    AND?: SessionPlaytesterScalarWhereWithAggregatesInput | SessionPlaytesterScalarWhereWithAggregatesInput[]
    OR?: SessionPlaytesterScalarWhereWithAggregatesInput[]
    NOT?: SessionPlaytesterScalarWhereWithAggregatesInput | SessionPlaytesterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionPlaytester"> | string
    sessionId?: StringWithAggregatesFilter<"SessionPlaytester"> | string
    userId?: StringWithAggregatesFilter<"SessionPlaytester"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    sessionId?: StringFilter<"Event"> | string
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    timestamp?: DateTimeFilter<"Event"> | Date | string
    payload?: JsonFilter<"Event">
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    payload?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    sessionId?: StringFilter<"Event"> | string
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    timestamp?: DateTimeFilter<"Event"> | Date | string
    payload?: JsonFilter<"Event">
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    payload?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    sessionId?: StringWithAggregatesFilter<"Event"> | string
    type?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType
    timestamp?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    payload?: JsonWithAggregatesFilter<"Event">
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    sessionId?: StringFilter<"Feedback"> | string
    authorUserId?: StringFilter<"Feedback"> | string
    category?: EnumFeedbackCategoryFilter<"Feedback"> | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFilter<"Feedback"> | $Enums.FeedbackSeverity
    content?: StringFilter<"Feedback"> | string
    tags?: StringNullableListFilter<"Feedback">
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    authorUserId?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    session?: SessionOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    sessionId?: StringFilter<"Feedback"> | string
    authorUserId?: StringFilter<"Feedback"> | string
    category?: EnumFeedbackCategoryFilter<"Feedback"> | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFilter<"Feedback"> | $Enums.FeedbackSeverity
    content?: StringFilter<"Feedback"> | string
    tags?: StringNullableListFilter<"Feedback">
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    authorUserId?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    sessionId?: StringWithAggregatesFilter<"Feedback"> | string
    authorUserId?: StringWithAggregatesFilter<"Feedback"> | string
    category?: EnumFeedbackCategoryWithAggregatesFilter<"Feedback"> | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityWithAggregatesFilter<"Feedback"> | $Enums.FeedbackSeverity
    content?: StringWithAggregatesFilter<"Feedback"> | string
    tags?: StringNullableListFilter<"Feedback">
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    sessionId?: StringFilter<"Report"> | string
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    content?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    sessionId?: StringFilter<"Report"> | string
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    content?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    sessionId?: StringWithAggregatesFilter<"Report"> | string
    type?: EnumReportTypeWithAggregatesFilter<"Report"> | $Enums.ReportType
    content?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    gameId?: StringNullableFilter<"Task"> | string | null
    sessionId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    source?: EnumTaskSourceFilter<"Task"> | $Enums.TaskSource
    createdAt?: DateTimeFilter<"Task"> | Date | string
    game?: XOR<GameNullableScalarRelationFilter, GameWhereInput> | null
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    game?: GameOrderByWithRelationInput
    session?: SessionOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    gameId?: StringNullableFilter<"Task"> | string | null
    sessionId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    source?: EnumTaskSourceFilter<"Task"> | $Enums.TaskSource
    createdAt?: DateTimeFilter<"Task"> | Date | string
    game?: XOR<GameNullableScalarRelationFilter, GameWhereInput> | null
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    gameId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    sessionId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    priority?: EnumTaskPriorityWithAggregatesFilter<"Task"> | $Enums.TaskPriority
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    source?: EnumTaskSourceWithAggregatesFilter<"Task"> | $Enums.TaskSource
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type PublisherInsightWhereInput = {
    AND?: PublisherInsightWhereInput | PublisherInsightWhereInput[]
    OR?: PublisherInsightWhereInput[]
    NOT?: PublisherInsightWhereInput | PublisherInsightWhereInput[]
    id?: StringFilter<"PublisherInsight"> | string
    gameId?: StringFilter<"PublisherInsight"> | string
    score?: IntFilter<"PublisherInsight"> | number
    rationale?: StringFilter<"PublisherInsight"> | string
    recommendedNextSteps?: StringFilter<"PublisherInsight"> | string
    createdAt?: DateTimeFilter<"PublisherInsight"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type PublisherInsightOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    score?: SortOrder
    rationale?: SortOrder
    recommendedNextSteps?: SortOrder
    createdAt?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type PublisherInsightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublisherInsightWhereInput | PublisherInsightWhereInput[]
    OR?: PublisherInsightWhereInput[]
    NOT?: PublisherInsightWhereInput | PublisherInsightWhereInput[]
    gameId?: StringFilter<"PublisherInsight"> | string
    score?: IntFilter<"PublisherInsight"> | number
    rationale?: StringFilter<"PublisherInsight"> | string
    recommendedNextSteps?: StringFilter<"PublisherInsight"> | string
    createdAt?: DateTimeFilter<"PublisherInsight"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type PublisherInsightOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    score?: SortOrder
    rationale?: SortOrder
    recommendedNextSteps?: SortOrder
    createdAt?: SortOrder
    _count?: PublisherInsightCountOrderByAggregateInput
    _avg?: PublisherInsightAvgOrderByAggregateInput
    _max?: PublisherInsightMaxOrderByAggregateInput
    _min?: PublisherInsightMinOrderByAggregateInput
    _sum?: PublisherInsightSumOrderByAggregateInput
  }

  export type PublisherInsightScalarWhereWithAggregatesInput = {
    AND?: PublisherInsightScalarWhereWithAggregatesInput | PublisherInsightScalarWhereWithAggregatesInput[]
    OR?: PublisherInsightScalarWhereWithAggregatesInput[]
    NOT?: PublisherInsightScalarWhereWithAggregatesInput | PublisherInsightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublisherInsight"> | string
    gameId?: StringWithAggregatesFilter<"PublisherInsight"> | string
    score?: IntWithAggregatesFilter<"PublisherInsight"> | number
    rationale?: StringWithAggregatesFilter<"PublisherInsight"> | string
    recommendedNextSteps?: StringWithAggregatesFilter<"PublisherInsight"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PublisherInsight"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    studioName?: string | null
    createdAt?: Date | string
    ownedStudios?: StudioCreateNestedManyWithoutOwnerInput
    studioMembership?: StudioMemberCreateNestedManyWithoutUserInput
    sessionsAsTester?: SessionPlaytesterCreateNestedManyWithoutUserInput
    feedbackAuthored?: FeedbackCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    studioName?: string | null
    createdAt?: Date | string
    ownedStudios?: StudioUncheckedCreateNestedManyWithoutOwnerInput
    studioMembership?: StudioMemberUncheckedCreateNestedManyWithoutUserInput
    sessionsAsTester?: SessionPlaytesterUncheckedCreateNestedManyWithoutUserInput
    feedbackAuthored?: FeedbackUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedStudios?: StudioUpdateManyWithoutOwnerNestedInput
    studioMembership?: StudioMemberUpdateManyWithoutUserNestedInput
    sessionsAsTester?: SessionPlaytesterUpdateManyWithoutUserNestedInput
    feedbackAuthored?: FeedbackUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedStudios?: StudioUncheckedUpdateManyWithoutOwnerNestedInput
    studioMembership?: StudioMemberUncheckedUpdateManyWithoutUserNestedInput
    sessionsAsTester?: SessionPlaytesterUncheckedUpdateManyWithoutUserNestedInput
    feedbackAuthored?: FeedbackUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    studioName?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedStudiosInput
    members?: StudioMemberCreateNestedManyWithoutStudioInput
    games?: GameCreateNestedManyWithoutStudioInput
  }

  export type StudioUncheckedCreateInput = {
    id?: string
    ownerUserId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    members?: StudioMemberUncheckedCreateNestedManyWithoutStudioInput
    games?: GameUncheckedCreateNestedManyWithoutStudioInput
  }

  export type StudioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedStudiosNestedInput
    members?: StudioMemberUpdateManyWithoutStudioNestedInput
    games?: GameUpdateManyWithoutStudioNestedInput
  }

  export type StudioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: StudioMemberUncheckedUpdateManyWithoutStudioNestedInput
    games?: GameUncheckedUpdateManyWithoutStudioNestedInput
  }

  export type StudioCreateManyInput = {
    id?: string
    ownerUserId: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type StudioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioMemberCreateInput = {
    id?: string
    studio: StudioCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutStudioMembershipInput
  }

  export type StudioMemberUncheckedCreateInput = {
    id?: string
    studioId: string
    userId: string
  }

  export type StudioMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studio?: StudioUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutStudioMembershipNestedInput
  }

  export type StudioMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StudioMemberCreateManyInput = {
    id?: string
    studioId: string
    userId: string
  }

  export type StudioMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StudioMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateInput = {
    id?: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
    studio: StudioCreateNestedOneWithoutGamesInput
    sessions?: SessionCreateNestedManyWithoutGameInput
    tasks?: TaskCreateNestedManyWithoutGameInput
    publisherInsights?: PublisherInsightCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    studioId: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutGameInput
    tasks?: TaskUncheckedCreateNestedManyWithoutGameInput
    publisherInsights?: PublisherInsightUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studio?: StudioUpdateOneRequiredWithoutGamesNestedInput
    sessions?: SessionUpdateManyWithoutGameNestedInput
    tasks?: TaskUpdateManyWithoutGameNestedInput
    publisherInsights?: PublisherInsightUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutGameNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutGameNestedInput
    publisherInsights?: PublisherInsightUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    studioId: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutSessionsInput
    playtesters?: SessionPlaytesterCreateNestedManyWithoutSessionInput
    events?: EventCreateNestedManyWithoutSessionInput
    feedback?: FeedbackCreateNestedManyWithoutSessionInput
    reports?: ReportCreateNestedManyWithoutSessionInput
    tasks?: TaskCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    gameId: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    playtesters?: SessionPlaytesterUncheckedCreateNestedManyWithoutSessionInput
    events?: EventUncheckedCreateNestedManyWithoutSessionInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutSessionInput
    reports?: ReportUncheckedCreateNestedManyWithoutSessionInput
    tasks?: TaskUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutSessionsNestedInput
    playtesters?: SessionPlaytesterUpdateManyWithoutSessionNestedInput
    events?: EventUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUpdateManyWithoutSessionNestedInput
    reports?: ReportUpdateManyWithoutSessionNestedInput
    tasks?: TaskUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playtesters?: SessionPlaytesterUncheckedUpdateManyWithoutSessionNestedInput
    events?: EventUncheckedUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutSessionNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSessionNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    gameId: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionPlaytesterCreateInput = {
    id?: string
    session: SessionCreateNestedOneWithoutPlaytestersInput
    user: UserCreateNestedOneWithoutSessionsAsTesterInput
  }

  export type SessionPlaytesterUncheckedCreateInput = {
    id?: string
    sessionId: string
    userId: string
  }

  export type SessionPlaytesterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: SessionUpdateOneRequiredWithoutPlaytestersNestedInput
    user?: UserUpdateOneRequiredWithoutSessionsAsTesterNestedInput
  }

  export type SessionPlaytesterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionPlaytesterCreateManyInput = {
    id?: string
    sessionId: string
    userId: string
  }

  export type SessionPlaytesterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SessionPlaytesterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    id?: string
    type: $Enums.EventType
    timestamp?: Date | string
    payload: JsonNullValueInput | InputJsonValue
    session: SessionCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    sessionId: string
    type: $Enums.EventType
    timestamp?: Date | string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
    session?: SessionUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type EventCreateManyInput = {
    id?: string
    sessionId: string
    type: $Enums.EventType
    timestamp?: Date | string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type FeedbackCreateInput = {
    id?: string
    category: $Enums.FeedbackCategory
    severity: $Enums.FeedbackSeverity
    content: string
    tags?: FeedbackCreatetagsInput | string[]
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutFeedbackInput
    author: UserCreateNestedOneWithoutFeedbackAuthoredInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    sessionId: string
    authorUserId: string
    category: $Enums.FeedbackCategory
    severity: $Enums.FeedbackSeverity
    content: string
    tags?: FeedbackCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumFeedbackCategoryFieldUpdateOperationsInput | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    content?: StringFieldUpdateOperationsInput | string
    tags?: FeedbackUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutFeedbackNestedInput
    author?: UserUpdateOneRequiredWithoutFeedbackAuthoredNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    authorUserId?: StringFieldUpdateOperationsInput | string
    category?: EnumFeedbackCategoryFieldUpdateOperationsInput | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    content?: StringFieldUpdateOperationsInput | string
    tags?: FeedbackUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: string
    sessionId: string
    authorUserId: string
    category: $Enums.FeedbackCategory
    severity: $Enums.FeedbackSeverity
    content: string
    tags?: FeedbackCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumFeedbackCategoryFieldUpdateOperationsInput | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    content?: StringFieldUpdateOperationsInput | string
    tags?: FeedbackUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    authorUserId?: StringFieldUpdateOperationsInput | string
    category?: EnumFeedbackCategoryFieldUpdateOperationsInput | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    content?: StringFieldUpdateOperationsInput | string
    tags?: FeedbackUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    type: $Enums.ReportType
    content: string
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    sessionId: string
    type: $Enums.ReportType
    content: string
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    sessionId: string
    type: $Enums.ReportType
    content: string
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    priority: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    source: $Enums.TaskSource
    createdAt?: Date | string
    game?: GameCreateNestedOneWithoutTasksInput
    session?: SessionCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    gameId?: string | null
    sessionId?: string | null
    title: string
    description?: string | null
    priority: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    source: $Enums.TaskSource
    createdAt?: Date | string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneWithoutTasksNestedInput
    session?: SessionUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    gameId?: string | null
    sessionId?: string | null
    title: string
    description?: string | null
    priority: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    source: $Enums.TaskSource
    createdAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherInsightCreateInput = {
    id?: string
    score: number
    rationale: string
    recommendedNextSteps: string
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutPublisherInsightsInput
  }

  export type PublisherInsightUncheckedCreateInput = {
    id?: string
    gameId: string
    score: number
    rationale: string
    recommendedNextSteps: string
    createdAt?: Date | string
  }

  export type PublisherInsightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
    recommendedNextSteps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutPublisherInsightsNestedInput
  }

  export type PublisherInsightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
    recommendedNextSteps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherInsightCreateManyInput = {
    id?: string
    gameId: string
    score: number
    rationale: string
    recommendedNextSteps: string
    createdAt?: Date | string
  }

  export type PublisherInsightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
    recommendedNextSteps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherInsightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
    recommendedNextSteps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudioListRelationFilter = {
    every?: StudioWhereInput
    some?: StudioWhereInput
    none?: StudioWhereInput
  }

  export type StudioMemberListRelationFilter = {
    every?: StudioMemberWhereInput
    some?: StudioMemberWhereInput
    none?: StudioMemberWhereInput
  }

  export type SessionPlaytesterListRelationFilter = {
    every?: SessionPlaytesterWhereInput
    some?: SessionPlaytesterWhereInput
    none?: SessionPlaytesterWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudioMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionPlaytesterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    studioName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    studioName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    studioName?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudioCountOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StudioMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StudioMinOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StudioScalarRelationFilter = {
    is?: StudioWhereInput
    isNot?: StudioWhereInput
  }

  export type StudioMemberStudioIdUserIdCompoundUniqueInput = {
    studioId: string
    userId: string
  }

  export type StudioMemberCountOrderByAggregateInput = {
    id?: SortOrder
    studioId?: SortOrder
    userId?: SortOrder
  }

  export type StudioMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    studioId?: SortOrder
    userId?: SortOrder
  }

  export type StudioMemberMinOrderByAggregateInput = {
    id?: SortOrder
    studioId?: SortOrder
    userId?: SortOrder
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type PublisherInsightListRelationFilter = {
    every?: PublisherInsightWhereInput
    some?: PublisherInsightWhereInput
    none?: PublisherInsightWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublisherInsightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    studioId?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    platform?: SortOrder
    buildVersion?: SortOrder
    buildBranch?: SortOrder
    pitchSummary?: SortOrder
    createdAt?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    studioId?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    platform?: SortOrder
    buildVersion?: SortOrder
    buildBranch?: SortOrder
    pitchSummary?: SortOrder
    createdAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    studioId?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    platform?: SortOrder
    buildVersion?: SortOrder
    buildBranch?: SortOrder
    pitchSummary?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type SessionPlaytesterSessionIdUserIdCompoundUniqueInput = {
    sessionId: string
    userId: string
  }

  export type SessionPlaytesterCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
  }

  export type SessionPlaytesterMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
  }

  export type SessionPlaytesterMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    payload?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumFeedbackCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackCategory | EnumFeedbackCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackCategory[] | ListEnumFeedbackCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackCategory[] | ListEnumFeedbackCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackCategoryFilter<$PrismaModel> | $Enums.FeedbackCategory
  }

  export type EnumFeedbackSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackSeverity | EnumFeedbackSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackSeverityFilter<$PrismaModel> | $Enums.FeedbackSeverity
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    authorUserId?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    authorUserId?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    authorUserId?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFeedbackCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackCategory | EnumFeedbackCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackCategory[] | ListEnumFeedbackCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackCategory[] | ListEnumFeedbackCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackCategoryFilter<$PrismaModel>
    _max?: NestedEnumFeedbackCategoryFilter<$PrismaModel>
  }

  export type EnumFeedbackSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackSeverity | EnumFeedbackSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackSeverityWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackSeverityFilter<$PrismaModel>
    _max?: NestedEnumFeedbackSeverityFilter<$PrismaModel>
  }

  export type EnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumTaskSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskSource | EnumTaskSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskSourceFilter<$PrismaModel> | $Enums.TaskSource
  }

  export type GameNullableScalarRelationFilter = {
    is?: GameWhereInput | null
    isNot?: GameWhereInput | null
  }

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    sessionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    sessionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    sessionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumTaskSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskSource | EnumTaskSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskSourceWithAggregatesFilter<$PrismaModel> | $Enums.TaskSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskSourceFilter<$PrismaModel>
    _max?: NestedEnumTaskSourceFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PublisherInsightCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    score?: SortOrder
    rationale?: SortOrder
    recommendedNextSteps?: SortOrder
    createdAt?: SortOrder
  }

  export type PublisherInsightAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type PublisherInsightMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    score?: SortOrder
    rationale?: SortOrder
    recommendedNextSteps?: SortOrder
    createdAt?: SortOrder
  }

  export type PublisherInsightMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    score?: SortOrder
    rationale?: SortOrder
    recommendedNextSteps?: SortOrder
    createdAt?: SortOrder
  }

  export type PublisherInsightSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserCreateskillsInput = {
    set: string[]
  }

  export type StudioCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StudioCreateWithoutOwnerInput, StudioUncheckedCreateWithoutOwnerInput> | StudioCreateWithoutOwnerInput[] | StudioUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StudioCreateOrConnectWithoutOwnerInput | StudioCreateOrConnectWithoutOwnerInput[]
    createMany?: StudioCreateManyOwnerInputEnvelope
    connect?: StudioWhereUniqueInput | StudioWhereUniqueInput[]
  }

  export type StudioMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<StudioMemberCreateWithoutUserInput, StudioMemberUncheckedCreateWithoutUserInput> | StudioMemberCreateWithoutUserInput[] | StudioMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudioMemberCreateOrConnectWithoutUserInput | StudioMemberCreateOrConnectWithoutUserInput[]
    createMany?: StudioMemberCreateManyUserInputEnvelope
    connect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
  }

  export type SessionPlaytesterCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionPlaytesterCreateWithoutUserInput, SessionPlaytesterUncheckedCreateWithoutUserInput> | SessionPlaytesterCreateWithoutUserInput[] | SessionPlaytesterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionPlaytesterCreateOrConnectWithoutUserInput | SessionPlaytesterCreateOrConnectWithoutUserInput[]
    createMany?: SessionPlaytesterCreateManyUserInputEnvelope
    connect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutAuthorInput = {
    create?: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput> | FeedbackCreateWithoutAuthorInput[] | FeedbackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutAuthorInput | FeedbackCreateOrConnectWithoutAuthorInput[]
    createMany?: FeedbackCreateManyAuthorInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type StudioUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StudioCreateWithoutOwnerInput, StudioUncheckedCreateWithoutOwnerInput> | StudioCreateWithoutOwnerInput[] | StudioUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StudioCreateOrConnectWithoutOwnerInput | StudioCreateOrConnectWithoutOwnerInput[]
    createMany?: StudioCreateManyOwnerInputEnvelope
    connect?: StudioWhereUniqueInput | StudioWhereUniqueInput[]
  }

  export type StudioMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudioMemberCreateWithoutUserInput, StudioMemberUncheckedCreateWithoutUserInput> | StudioMemberCreateWithoutUserInput[] | StudioMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudioMemberCreateOrConnectWithoutUserInput | StudioMemberCreateOrConnectWithoutUserInput[]
    createMany?: StudioMemberCreateManyUserInputEnvelope
    connect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
  }

  export type SessionPlaytesterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionPlaytesterCreateWithoutUserInput, SessionPlaytesterUncheckedCreateWithoutUserInput> | SessionPlaytesterCreateWithoutUserInput[] | SessionPlaytesterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionPlaytesterCreateOrConnectWithoutUserInput | SessionPlaytesterCreateOrConnectWithoutUserInput[]
    createMany?: SessionPlaytesterCreateManyUserInputEnvelope
    connect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput> | FeedbackCreateWithoutAuthorInput[] | FeedbackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutAuthorInput | FeedbackCreateOrConnectWithoutAuthorInput[]
    createMany?: FeedbackCreateManyAuthorInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudioUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StudioCreateWithoutOwnerInput, StudioUncheckedCreateWithoutOwnerInput> | StudioCreateWithoutOwnerInput[] | StudioUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StudioCreateOrConnectWithoutOwnerInput | StudioCreateOrConnectWithoutOwnerInput[]
    upsert?: StudioUpsertWithWhereUniqueWithoutOwnerInput | StudioUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StudioCreateManyOwnerInputEnvelope
    set?: StudioWhereUniqueInput | StudioWhereUniqueInput[]
    disconnect?: StudioWhereUniqueInput | StudioWhereUniqueInput[]
    delete?: StudioWhereUniqueInput | StudioWhereUniqueInput[]
    connect?: StudioWhereUniqueInput | StudioWhereUniqueInput[]
    update?: StudioUpdateWithWhereUniqueWithoutOwnerInput | StudioUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StudioUpdateManyWithWhereWithoutOwnerInput | StudioUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StudioScalarWhereInput | StudioScalarWhereInput[]
  }

  export type StudioMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudioMemberCreateWithoutUserInput, StudioMemberUncheckedCreateWithoutUserInput> | StudioMemberCreateWithoutUserInput[] | StudioMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudioMemberCreateOrConnectWithoutUserInput | StudioMemberCreateOrConnectWithoutUserInput[]
    upsert?: StudioMemberUpsertWithWhereUniqueWithoutUserInput | StudioMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudioMemberCreateManyUserInputEnvelope
    set?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    disconnect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    delete?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    connect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    update?: StudioMemberUpdateWithWhereUniqueWithoutUserInput | StudioMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudioMemberUpdateManyWithWhereWithoutUserInput | StudioMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudioMemberScalarWhereInput | StudioMemberScalarWhereInput[]
  }

  export type SessionPlaytesterUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionPlaytesterCreateWithoutUserInput, SessionPlaytesterUncheckedCreateWithoutUserInput> | SessionPlaytesterCreateWithoutUserInput[] | SessionPlaytesterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionPlaytesterCreateOrConnectWithoutUserInput | SessionPlaytesterCreateOrConnectWithoutUserInput[]
    upsert?: SessionPlaytesterUpsertWithWhereUniqueWithoutUserInput | SessionPlaytesterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionPlaytesterCreateManyUserInputEnvelope
    set?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    disconnect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    delete?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    connect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    update?: SessionPlaytesterUpdateWithWhereUniqueWithoutUserInput | SessionPlaytesterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionPlaytesterUpdateManyWithWhereWithoutUserInput | SessionPlaytesterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionPlaytesterScalarWhereInput | SessionPlaytesterScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput> | FeedbackCreateWithoutAuthorInput[] | FeedbackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutAuthorInput | FeedbackCreateOrConnectWithoutAuthorInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutAuthorInput | FeedbackUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: FeedbackCreateManyAuthorInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutAuthorInput | FeedbackUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutAuthorInput | FeedbackUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type StudioUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StudioCreateWithoutOwnerInput, StudioUncheckedCreateWithoutOwnerInput> | StudioCreateWithoutOwnerInput[] | StudioUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StudioCreateOrConnectWithoutOwnerInput | StudioCreateOrConnectWithoutOwnerInput[]
    upsert?: StudioUpsertWithWhereUniqueWithoutOwnerInput | StudioUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StudioCreateManyOwnerInputEnvelope
    set?: StudioWhereUniqueInput | StudioWhereUniqueInput[]
    disconnect?: StudioWhereUniqueInput | StudioWhereUniqueInput[]
    delete?: StudioWhereUniqueInput | StudioWhereUniqueInput[]
    connect?: StudioWhereUniqueInput | StudioWhereUniqueInput[]
    update?: StudioUpdateWithWhereUniqueWithoutOwnerInput | StudioUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StudioUpdateManyWithWhereWithoutOwnerInput | StudioUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StudioScalarWhereInput | StudioScalarWhereInput[]
  }

  export type StudioMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudioMemberCreateWithoutUserInput, StudioMemberUncheckedCreateWithoutUserInput> | StudioMemberCreateWithoutUserInput[] | StudioMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudioMemberCreateOrConnectWithoutUserInput | StudioMemberCreateOrConnectWithoutUserInput[]
    upsert?: StudioMemberUpsertWithWhereUniqueWithoutUserInput | StudioMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudioMemberCreateManyUserInputEnvelope
    set?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    disconnect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    delete?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    connect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    update?: StudioMemberUpdateWithWhereUniqueWithoutUserInput | StudioMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudioMemberUpdateManyWithWhereWithoutUserInput | StudioMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudioMemberScalarWhereInput | StudioMemberScalarWhereInput[]
  }

  export type SessionPlaytesterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionPlaytesterCreateWithoutUserInput, SessionPlaytesterUncheckedCreateWithoutUserInput> | SessionPlaytesterCreateWithoutUserInput[] | SessionPlaytesterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionPlaytesterCreateOrConnectWithoutUserInput | SessionPlaytesterCreateOrConnectWithoutUserInput[]
    upsert?: SessionPlaytesterUpsertWithWhereUniqueWithoutUserInput | SessionPlaytesterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionPlaytesterCreateManyUserInputEnvelope
    set?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    disconnect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    delete?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    connect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    update?: SessionPlaytesterUpdateWithWhereUniqueWithoutUserInput | SessionPlaytesterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionPlaytesterUpdateManyWithWhereWithoutUserInput | SessionPlaytesterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionPlaytesterScalarWhereInput | SessionPlaytesterScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput> | FeedbackCreateWithoutAuthorInput[] | FeedbackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutAuthorInput | FeedbackCreateOrConnectWithoutAuthorInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutAuthorInput | FeedbackUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: FeedbackCreateManyAuthorInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutAuthorInput | FeedbackUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutAuthorInput | FeedbackUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedStudiosInput = {
    create?: XOR<UserCreateWithoutOwnedStudiosInput, UserUncheckedCreateWithoutOwnedStudiosInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedStudiosInput
    connect?: UserWhereUniqueInput
  }

  export type StudioMemberCreateNestedManyWithoutStudioInput = {
    create?: XOR<StudioMemberCreateWithoutStudioInput, StudioMemberUncheckedCreateWithoutStudioInput> | StudioMemberCreateWithoutStudioInput[] | StudioMemberUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: StudioMemberCreateOrConnectWithoutStudioInput | StudioMemberCreateOrConnectWithoutStudioInput[]
    createMany?: StudioMemberCreateManyStudioInputEnvelope
    connect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutStudioInput = {
    create?: XOR<GameCreateWithoutStudioInput, GameUncheckedCreateWithoutStudioInput> | GameCreateWithoutStudioInput[] | GameUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: GameCreateOrConnectWithoutStudioInput | GameCreateOrConnectWithoutStudioInput[]
    createMany?: GameCreateManyStudioInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type StudioMemberUncheckedCreateNestedManyWithoutStudioInput = {
    create?: XOR<StudioMemberCreateWithoutStudioInput, StudioMemberUncheckedCreateWithoutStudioInput> | StudioMemberCreateWithoutStudioInput[] | StudioMemberUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: StudioMemberCreateOrConnectWithoutStudioInput | StudioMemberCreateOrConnectWithoutStudioInput[]
    createMany?: StudioMemberCreateManyStudioInputEnvelope
    connect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutStudioInput = {
    create?: XOR<GameCreateWithoutStudioInput, GameUncheckedCreateWithoutStudioInput> | GameCreateWithoutStudioInput[] | GameUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: GameCreateOrConnectWithoutStudioInput | GameCreateOrConnectWithoutStudioInput[]
    createMany?: GameCreateManyStudioInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedStudiosNestedInput = {
    create?: XOR<UserCreateWithoutOwnedStudiosInput, UserUncheckedCreateWithoutOwnedStudiosInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedStudiosInput
    upsert?: UserUpsertWithoutOwnedStudiosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedStudiosInput, UserUpdateWithoutOwnedStudiosInput>, UserUncheckedUpdateWithoutOwnedStudiosInput>
  }

  export type StudioMemberUpdateManyWithoutStudioNestedInput = {
    create?: XOR<StudioMemberCreateWithoutStudioInput, StudioMemberUncheckedCreateWithoutStudioInput> | StudioMemberCreateWithoutStudioInput[] | StudioMemberUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: StudioMemberCreateOrConnectWithoutStudioInput | StudioMemberCreateOrConnectWithoutStudioInput[]
    upsert?: StudioMemberUpsertWithWhereUniqueWithoutStudioInput | StudioMemberUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: StudioMemberCreateManyStudioInputEnvelope
    set?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    disconnect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    delete?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    connect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    update?: StudioMemberUpdateWithWhereUniqueWithoutStudioInput | StudioMemberUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: StudioMemberUpdateManyWithWhereWithoutStudioInput | StudioMemberUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: StudioMemberScalarWhereInput | StudioMemberScalarWhereInput[]
  }

  export type GameUpdateManyWithoutStudioNestedInput = {
    create?: XOR<GameCreateWithoutStudioInput, GameUncheckedCreateWithoutStudioInput> | GameCreateWithoutStudioInput[] | GameUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: GameCreateOrConnectWithoutStudioInput | GameCreateOrConnectWithoutStudioInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutStudioInput | GameUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: GameCreateManyStudioInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutStudioInput | GameUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: GameUpdateManyWithWhereWithoutStudioInput | GameUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type StudioMemberUncheckedUpdateManyWithoutStudioNestedInput = {
    create?: XOR<StudioMemberCreateWithoutStudioInput, StudioMemberUncheckedCreateWithoutStudioInput> | StudioMemberCreateWithoutStudioInput[] | StudioMemberUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: StudioMemberCreateOrConnectWithoutStudioInput | StudioMemberCreateOrConnectWithoutStudioInput[]
    upsert?: StudioMemberUpsertWithWhereUniqueWithoutStudioInput | StudioMemberUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: StudioMemberCreateManyStudioInputEnvelope
    set?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    disconnect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    delete?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    connect?: StudioMemberWhereUniqueInput | StudioMemberWhereUniqueInput[]
    update?: StudioMemberUpdateWithWhereUniqueWithoutStudioInput | StudioMemberUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: StudioMemberUpdateManyWithWhereWithoutStudioInput | StudioMemberUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: StudioMemberScalarWhereInput | StudioMemberScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutStudioNestedInput = {
    create?: XOR<GameCreateWithoutStudioInput, GameUncheckedCreateWithoutStudioInput> | GameCreateWithoutStudioInput[] | GameUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: GameCreateOrConnectWithoutStudioInput | GameCreateOrConnectWithoutStudioInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutStudioInput | GameUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: GameCreateManyStudioInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutStudioInput | GameUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: GameUpdateManyWithWhereWithoutStudioInput | GameUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type StudioCreateNestedOneWithoutMembersInput = {
    create?: XOR<StudioCreateWithoutMembersInput, StudioUncheckedCreateWithoutMembersInput>
    connectOrCreate?: StudioCreateOrConnectWithoutMembersInput
    connect?: StudioWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudioMembershipInput = {
    create?: XOR<UserCreateWithoutStudioMembershipInput, UserUncheckedCreateWithoutStudioMembershipInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudioMembershipInput
    connect?: UserWhereUniqueInput
  }

  export type StudioUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<StudioCreateWithoutMembersInput, StudioUncheckedCreateWithoutMembersInput>
    connectOrCreate?: StudioCreateOrConnectWithoutMembersInput
    upsert?: StudioUpsertWithoutMembersInput
    connect?: StudioWhereUniqueInput
    update?: XOR<XOR<StudioUpdateToOneWithWhereWithoutMembersInput, StudioUpdateWithoutMembersInput>, StudioUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutStudioMembershipNestedInput = {
    create?: XOR<UserCreateWithoutStudioMembershipInput, UserUncheckedCreateWithoutStudioMembershipInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudioMembershipInput
    upsert?: UserUpsertWithoutStudioMembershipInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudioMembershipInput, UserUpdateWithoutStudioMembershipInput>, UserUncheckedUpdateWithoutStudioMembershipInput>
  }

  export type StudioCreateNestedOneWithoutGamesInput = {
    create?: XOR<StudioCreateWithoutGamesInput, StudioUncheckedCreateWithoutGamesInput>
    connectOrCreate?: StudioCreateOrConnectWithoutGamesInput
    connect?: StudioWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutGameInput = {
    create?: XOR<SessionCreateWithoutGameInput, SessionUncheckedCreateWithoutGameInput> | SessionCreateWithoutGameInput[] | SessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutGameInput | SessionCreateOrConnectWithoutGameInput[]
    createMany?: SessionCreateManyGameInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutGameInput = {
    create?: XOR<TaskCreateWithoutGameInput, TaskUncheckedCreateWithoutGameInput> | TaskCreateWithoutGameInput[] | TaskUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGameInput | TaskCreateOrConnectWithoutGameInput[]
    createMany?: TaskCreateManyGameInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type PublisherInsightCreateNestedManyWithoutGameInput = {
    create?: XOR<PublisherInsightCreateWithoutGameInput, PublisherInsightUncheckedCreateWithoutGameInput> | PublisherInsightCreateWithoutGameInput[] | PublisherInsightUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PublisherInsightCreateOrConnectWithoutGameInput | PublisherInsightCreateOrConnectWithoutGameInput[]
    createMany?: PublisherInsightCreateManyGameInputEnvelope
    connect?: PublisherInsightWhereUniqueInput | PublisherInsightWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<SessionCreateWithoutGameInput, SessionUncheckedCreateWithoutGameInput> | SessionCreateWithoutGameInput[] | SessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutGameInput | SessionCreateOrConnectWithoutGameInput[]
    createMany?: SessionCreateManyGameInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<TaskCreateWithoutGameInput, TaskUncheckedCreateWithoutGameInput> | TaskCreateWithoutGameInput[] | TaskUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGameInput | TaskCreateOrConnectWithoutGameInput[]
    createMany?: TaskCreateManyGameInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type PublisherInsightUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<PublisherInsightCreateWithoutGameInput, PublisherInsightUncheckedCreateWithoutGameInput> | PublisherInsightCreateWithoutGameInput[] | PublisherInsightUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PublisherInsightCreateOrConnectWithoutGameInput | PublisherInsightCreateOrConnectWithoutGameInput[]
    createMany?: PublisherInsightCreateManyGameInputEnvelope
    connect?: PublisherInsightWhereUniqueInput | PublisherInsightWhereUniqueInput[]
  }

  export type StudioUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<StudioCreateWithoutGamesInput, StudioUncheckedCreateWithoutGamesInput>
    connectOrCreate?: StudioCreateOrConnectWithoutGamesInput
    upsert?: StudioUpsertWithoutGamesInput
    connect?: StudioWhereUniqueInput
    update?: XOR<XOR<StudioUpdateToOneWithWhereWithoutGamesInput, StudioUpdateWithoutGamesInput>, StudioUncheckedUpdateWithoutGamesInput>
  }

  export type SessionUpdateManyWithoutGameNestedInput = {
    create?: XOR<SessionCreateWithoutGameInput, SessionUncheckedCreateWithoutGameInput> | SessionCreateWithoutGameInput[] | SessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutGameInput | SessionCreateOrConnectWithoutGameInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutGameInput | SessionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: SessionCreateManyGameInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutGameInput | SessionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutGameInput | SessionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutGameNestedInput = {
    create?: XOR<TaskCreateWithoutGameInput, TaskUncheckedCreateWithoutGameInput> | TaskCreateWithoutGameInput[] | TaskUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGameInput | TaskCreateOrConnectWithoutGameInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGameInput | TaskUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TaskCreateManyGameInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGameInput | TaskUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGameInput | TaskUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type PublisherInsightUpdateManyWithoutGameNestedInput = {
    create?: XOR<PublisherInsightCreateWithoutGameInput, PublisherInsightUncheckedCreateWithoutGameInput> | PublisherInsightCreateWithoutGameInput[] | PublisherInsightUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PublisherInsightCreateOrConnectWithoutGameInput | PublisherInsightCreateOrConnectWithoutGameInput[]
    upsert?: PublisherInsightUpsertWithWhereUniqueWithoutGameInput | PublisherInsightUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PublisherInsightCreateManyGameInputEnvelope
    set?: PublisherInsightWhereUniqueInput | PublisherInsightWhereUniqueInput[]
    disconnect?: PublisherInsightWhereUniqueInput | PublisherInsightWhereUniqueInput[]
    delete?: PublisherInsightWhereUniqueInput | PublisherInsightWhereUniqueInput[]
    connect?: PublisherInsightWhereUniqueInput | PublisherInsightWhereUniqueInput[]
    update?: PublisherInsightUpdateWithWhereUniqueWithoutGameInput | PublisherInsightUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PublisherInsightUpdateManyWithWhereWithoutGameInput | PublisherInsightUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PublisherInsightScalarWhereInput | PublisherInsightScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<SessionCreateWithoutGameInput, SessionUncheckedCreateWithoutGameInput> | SessionCreateWithoutGameInput[] | SessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutGameInput | SessionCreateOrConnectWithoutGameInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutGameInput | SessionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: SessionCreateManyGameInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutGameInput | SessionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutGameInput | SessionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<TaskCreateWithoutGameInput, TaskUncheckedCreateWithoutGameInput> | TaskCreateWithoutGameInput[] | TaskUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGameInput | TaskCreateOrConnectWithoutGameInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGameInput | TaskUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TaskCreateManyGameInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGameInput | TaskUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGameInput | TaskUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type PublisherInsightUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<PublisherInsightCreateWithoutGameInput, PublisherInsightUncheckedCreateWithoutGameInput> | PublisherInsightCreateWithoutGameInput[] | PublisherInsightUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PublisherInsightCreateOrConnectWithoutGameInput | PublisherInsightCreateOrConnectWithoutGameInput[]
    upsert?: PublisherInsightUpsertWithWhereUniqueWithoutGameInput | PublisherInsightUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PublisherInsightCreateManyGameInputEnvelope
    set?: PublisherInsightWhereUniqueInput | PublisherInsightWhereUniqueInput[]
    disconnect?: PublisherInsightWhereUniqueInput | PublisherInsightWhereUniqueInput[]
    delete?: PublisherInsightWhereUniqueInput | PublisherInsightWhereUniqueInput[]
    connect?: PublisherInsightWhereUniqueInput | PublisherInsightWhereUniqueInput[]
    update?: PublisherInsightUpdateWithWhereUniqueWithoutGameInput | PublisherInsightUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PublisherInsightUpdateManyWithWhereWithoutGameInput | PublisherInsightUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PublisherInsightScalarWhereInput | PublisherInsightScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutSessionsInput = {
    create?: XOR<GameCreateWithoutSessionsInput, GameUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutSessionsInput
    connect?: GameWhereUniqueInput
  }

  export type SessionPlaytesterCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionPlaytesterCreateWithoutSessionInput, SessionPlaytesterUncheckedCreateWithoutSessionInput> | SessionPlaytesterCreateWithoutSessionInput[] | SessionPlaytesterUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionPlaytesterCreateOrConnectWithoutSessionInput | SessionPlaytesterCreateOrConnectWithoutSessionInput[]
    createMany?: SessionPlaytesterCreateManySessionInputEnvelope
    connect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutSessionInput = {
    create?: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput> | EventCreateWithoutSessionInput[] | EventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSessionInput | EventCreateOrConnectWithoutSessionInput[]
    createMany?: EventCreateManySessionInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutSessionInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput> | FeedbackCreateWithoutSessionInput[] | FeedbackUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput | FeedbackCreateOrConnectWithoutSessionInput[]
    createMany?: FeedbackCreateManySessionInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutSessionInput = {
    create?: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput> | ReportCreateWithoutSessionInput[] | ReportUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutSessionInput | ReportCreateOrConnectWithoutSessionInput[]
    createMany?: ReportCreateManySessionInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutSessionInput = {
    create?: XOR<TaskCreateWithoutSessionInput, TaskUncheckedCreateWithoutSessionInput> | TaskCreateWithoutSessionInput[] | TaskUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSessionInput | TaskCreateOrConnectWithoutSessionInput[]
    createMany?: TaskCreateManySessionInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type SessionPlaytesterUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionPlaytesterCreateWithoutSessionInput, SessionPlaytesterUncheckedCreateWithoutSessionInput> | SessionPlaytesterCreateWithoutSessionInput[] | SessionPlaytesterUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionPlaytesterCreateOrConnectWithoutSessionInput | SessionPlaytesterCreateOrConnectWithoutSessionInput[]
    createMany?: SessionPlaytesterCreateManySessionInputEnvelope
    connect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput> | EventCreateWithoutSessionInput[] | EventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSessionInput | EventCreateOrConnectWithoutSessionInput[]
    createMany?: EventCreateManySessionInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput> | FeedbackCreateWithoutSessionInput[] | FeedbackUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput | FeedbackCreateOrConnectWithoutSessionInput[]
    createMany?: FeedbackCreateManySessionInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput> | ReportCreateWithoutSessionInput[] | ReportUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutSessionInput | ReportCreateOrConnectWithoutSessionInput[]
    createMany?: ReportCreateManySessionInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<TaskCreateWithoutSessionInput, TaskUncheckedCreateWithoutSessionInput> | TaskCreateWithoutSessionInput[] | TaskUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSessionInput | TaskCreateOrConnectWithoutSessionInput[]
    createMany?: TaskCreateManySessionInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GameUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<GameCreateWithoutSessionsInput, GameUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutSessionsInput
    upsert?: GameUpsertWithoutSessionsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutSessionsInput, GameUpdateWithoutSessionsInput>, GameUncheckedUpdateWithoutSessionsInput>
  }

  export type SessionPlaytesterUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionPlaytesterCreateWithoutSessionInput, SessionPlaytesterUncheckedCreateWithoutSessionInput> | SessionPlaytesterCreateWithoutSessionInput[] | SessionPlaytesterUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionPlaytesterCreateOrConnectWithoutSessionInput | SessionPlaytesterCreateOrConnectWithoutSessionInput[]
    upsert?: SessionPlaytesterUpsertWithWhereUniqueWithoutSessionInput | SessionPlaytesterUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionPlaytesterCreateManySessionInputEnvelope
    set?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    disconnect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    delete?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    connect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    update?: SessionPlaytesterUpdateWithWhereUniqueWithoutSessionInput | SessionPlaytesterUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionPlaytesterUpdateManyWithWhereWithoutSessionInput | SessionPlaytesterUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionPlaytesterScalarWhereInput | SessionPlaytesterScalarWhereInput[]
  }

  export type EventUpdateManyWithoutSessionNestedInput = {
    create?: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput> | EventCreateWithoutSessionInput[] | EventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSessionInput | EventCreateOrConnectWithoutSessionInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutSessionInput | EventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: EventCreateManySessionInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutSessionInput | EventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: EventUpdateManyWithWhereWithoutSessionInput | EventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutSessionNestedInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput> | FeedbackCreateWithoutSessionInput[] | FeedbackUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput | FeedbackCreateOrConnectWithoutSessionInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutSessionInput | FeedbackUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: FeedbackCreateManySessionInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutSessionInput | FeedbackUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutSessionInput | FeedbackUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput> | ReportCreateWithoutSessionInput[] | ReportUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutSessionInput | ReportCreateOrConnectWithoutSessionInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutSessionInput | ReportUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ReportCreateManySessionInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutSessionInput | ReportUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutSessionInput | ReportUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TaskCreateWithoutSessionInput, TaskUncheckedCreateWithoutSessionInput> | TaskCreateWithoutSessionInput[] | TaskUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSessionInput | TaskCreateOrConnectWithoutSessionInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSessionInput | TaskUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TaskCreateManySessionInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSessionInput | TaskUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSessionInput | TaskUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type SessionPlaytesterUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionPlaytesterCreateWithoutSessionInput, SessionPlaytesterUncheckedCreateWithoutSessionInput> | SessionPlaytesterCreateWithoutSessionInput[] | SessionPlaytesterUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionPlaytesterCreateOrConnectWithoutSessionInput | SessionPlaytesterCreateOrConnectWithoutSessionInput[]
    upsert?: SessionPlaytesterUpsertWithWhereUniqueWithoutSessionInput | SessionPlaytesterUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionPlaytesterCreateManySessionInputEnvelope
    set?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    disconnect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    delete?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    connect?: SessionPlaytesterWhereUniqueInput | SessionPlaytesterWhereUniqueInput[]
    update?: SessionPlaytesterUpdateWithWhereUniqueWithoutSessionInput | SessionPlaytesterUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionPlaytesterUpdateManyWithWhereWithoutSessionInput | SessionPlaytesterUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionPlaytesterScalarWhereInput | SessionPlaytesterScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput> | EventCreateWithoutSessionInput[] | EventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSessionInput | EventCreateOrConnectWithoutSessionInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutSessionInput | EventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: EventCreateManySessionInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutSessionInput | EventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: EventUpdateManyWithWhereWithoutSessionInput | EventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput> | FeedbackCreateWithoutSessionInput[] | FeedbackUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput | FeedbackCreateOrConnectWithoutSessionInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutSessionInput | FeedbackUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: FeedbackCreateManySessionInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutSessionInput | FeedbackUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutSessionInput | FeedbackUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput> | ReportCreateWithoutSessionInput[] | ReportUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutSessionInput | ReportCreateOrConnectWithoutSessionInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutSessionInput | ReportUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ReportCreateManySessionInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutSessionInput | ReportUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutSessionInput | ReportUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TaskCreateWithoutSessionInput, TaskUncheckedCreateWithoutSessionInput> | TaskCreateWithoutSessionInput[] | TaskUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSessionInput | TaskCreateOrConnectWithoutSessionInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSessionInput | TaskUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TaskCreateManySessionInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSessionInput | TaskUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSessionInput | TaskUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutPlaytestersInput = {
    create?: XOR<SessionCreateWithoutPlaytestersInput, SessionUncheckedCreateWithoutPlaytestersInput>
    connectOrCreate?: SessionCreateOrConnectWithoutPlaytestersInput
    connect?: SessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSessionsAsTesterInput = {
    create?: XOR<UserCreateWithoutSessionsAsTesterInput, UserUncheckedCreateWithoutSessionsAsTesterInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsAsTesterInput
    connect?: UserWhereUniqueInput
  }

  export type SessionUpdateOneRequiredWithoutPlaytestersNestedInput = {
    create?: XOR<SessionCreateWithoutPlaytestersInput, SessionUncheckedCreateWithoutPlaytestersInput>
    connectOrCreate?: SessionCreateOrConnectWithoutPlaytestersInput
    upsert?: SessionUpsertWithoutPlaytestersInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutPlaytestersInput, SessionUpdateWithoutPlaytestersInput>, SessionUncheckedUpdateWithoutPlaytestersInput>
  }

  export type UserUpdateOneRequiredWithoutSessionsAsTesterNestedInput = {
    create?: XOR<UserCreateWithoutSessionsAsTesterInput, UserUncheckedCreateWithoutSessionsAsTesterInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsAsTesterInput
    upsert?: UserUpsertWithoutSessionsAsTesterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsAsTesterInput, UserUpdateWithoutSessionsAsTesterInput>, UserUncheckedUpdateWithoutSessionsAsTesterInput>
  }

  export type SessionCreateNestedOneWithoutEventsInput = {
    create?: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutEventsInput
    connect?: SessionWhereUniqueInput
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type SessionUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutEventsInput
    upsert?: SessionUpsertWithoutEventsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutEventsInput, SessionUpdateWithoutEventsInput>, SessionUncheckedUpdateWithoutEventsInput>
  }

  export type FeedbackCreatetagsInput = {
    set: string[]
  }

  export type SessionCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<SessionCreateWithoutFeedbackInput, SessionUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: SessionCreateOrConnectWithoutFeedbackInput
    connect?: SessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbackAuthoredInput = {
    create?: XOR<UserCreateWithoutFeedbackAuthoredInput, UserUncheckedCreateWithoutFeedbackAuthoredInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackAuthoredInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFeedbackCategoryFieldUpdateOperationsInput = {
    set?: $Enums.FeedbackCategory
  }

  export type EnumFeedbackSeverityFieldUpdateOperationsInput = {
    set?: $Enums.FeedbackSeverity
  }

  export type FeedbackUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SessionUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<SessionCreateWithoutFeedbackInput, SessionUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: SessionCreateOrConnectWithoutFeedbackInput
    upsert?: SessionUpsertWithoutFeedbackInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutFeedbackInput, SessionUpdateWithoutFeedbackInput>, SessionUncheckedUpdateWithoutFeedbackInput>
  }

  export type UserUpdateOneRequiredWithoutFeedbackAuthoredNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackAuthoredInput, UserUncheckedCreateWithoutFeedbackAuthoredInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackAuthoredInput
    upsert?: UserUpsertWithoutFeedbackAuthoredInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbackAuthoredInput, UserUpdateWithoutFeedbackAuthoredInput>, UserUncheckedUpdateWithoutFeedbackAuthoredInput>
  }

  export type SessionCreateNestedOneWithoutReportsInput = {
    create?: XOR<SessionCreateWithoutReportsInput, SessionUncheckedCreateWithoutReportsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutReportsInput
    connect?: SessionWhereUniqueInput
  }

  export type EnumReportTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReportType
  }

  export type SessionUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<SessionCreateWithoutReportsInput, SessionUncheckedCreateWithoutReportsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutReportsInput
    upsert?: SessionUpsertWithoutReportsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutReportsInput, SessionUpdateWithoutReportsInput>, SessionUncheckedUpdateWithoutReportsInput>
  }

  export type GameCreateNestedOneWithoutTasksInput = {
    create?: XOR<GameCreateWithoutTasksInput, GameUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GameCreateOrConnectWithoutTasksInput
    connect?: GameWhereUniqueInput
  }

  export type SessionCreateNestedOneWithoutTasksInput = {
    create?: XOR<SessionCreateWithoutTasksInput, SessionUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTasksInput
    connect?: SessionWhereUniqueInput
  }

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumTaskSourceFieldUpdateOperationsInput = {
    set?: $Enums.TaskSource
  }

  export type GameUpdateOneWithoutTasksNestedInput = {
    create?: XOR<GameCreateWithoutTasksInput, GameUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GameCreateOrConnectWithoutTasksInput
    upsert?: GameUpsertWithoutTasksInput
    disconnect?: GameWhereInput | boolean
    delete?: GameWhereInput | boolean
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutTasksInput, GameUpdateWithoutTasksInput>, GameUncheckedUpdateWithoutTasksInput>
  }

  export type SessionUpdateOneWithoutTasksNestedInput = {
    create?: XOR<SessionCreateWithoutTasksInput, SessionUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTasksInput
    upsert?: SessionUpsertWithoutTasksInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutTasksInput, SessionUpdateWithoutTasksInput>, SessionUncheckedUpdateWithoutTasksInput>
  }

  export type GameCreateNestedOneWithoutPublisherInsightsInput = {
    create?: XOR<GameCreateWithoutPublisherInsightsInput, GameUncheckedCreateWithoutPublisherInsightsInput>
    connectOrCreate?: GameCreateOrConnectWithoutPublisherInsightsInput
    connect?: GameWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameUpdateOneRequiredWithoutPublisherInsightsNestedInput = {
    create?: XOR<GameCreateWithoutPublisherInsightsInput, GameUncheckedCreateWithoutPublisherInsightsInput>
    connectOrCreate?: GameCreateOrConnectWithoutPublisherInsightsInput
    upsert?: GameUpsertWithoutPublisherInsightsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPublisherInsightsInput, GameUpdateWithoutPublisherInsightsInput>, GameUncheckedUpdateWithoutPublisherInsightsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumFeedbackCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackCategory | EnumFeedbackCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackCategory[] | ListEnumFeedbackCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackCategory[] | ListEnumFeedbackCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackCategoryFilter<$PrismaModel> | $Enums.FeedbackCategory
  }

  export type NestedEnumFeedbackSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackSeverity | EnumFeedbackSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackSeverityFilter<$PrismaModel> | $Enums.FeedbackSeverity
  }

  export type NestedEnumFeedbackCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackCategory | EnumFeedbackCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackCategory[] | ListEnumFeedbackCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackCategory[] | ListEnumFeedbackCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackCategoryFilter<$PrismaModel>
    _max?: NestedEnumFeedbackCategoryFilter<$PrismaModel>
  }

  export type NestedEnumFeedbackSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackSeverity | EnumFeedbackSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackSeverityWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackSeverityFilter<$PrismaModel>
    _max?: NestedEnumFeedbackSeverityFilter<$PrismaModel>
  }

  export type NestedEnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type NestedEnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskSource | EnumTaskSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskSourceFilter<$PrismaModel> | $Enums.TaskSource
  }

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskSource | EnumTaskSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskSource[] | ListEnumTaskSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskSourceWithAggregatesFilter<$PrismaModel> | $Enums.TaskSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskSourceFilter<$PrismaModel>
    _max?: NestedEnumTaskSourceFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StudioCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    members?: StudioMemberCreateNestedManyWithoutStudioInput
    games?: GameCreateNestedManyWithoutStudioInput
  }

  export type StudioUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    members?: StudioMemberUncheckedCreateNestedManyWithoutStudioInput
    games?: GameUncheckedCreateNestedManyWithoutStudioInput
  }

  export type StudioCreateOrConnectWithoutOwnerInput = {
    where: StudioWhereUniqueInput
    create: XOR<StudioCreateWithoutOwnerInput, StudioUncheckedCreateWithoutOwnerInput>
  }

  export type StudioCreateManyOwnerInputEnvelope = {
    data: StudioCreateManyOwnerInput | StudioCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type StudioMemberCreateWithoutUserInput = {
    id?: string
    studio: StudioCreateNestedOneWithoutMembersInput
  }

  export type StudioMemberUncheckedCreateWithoutUserInput = {
    id?: string
    studioId: string
  }

  export type StudioMemberCreateOrConnectWithoutUserInput = {
    where: StudioMemberWhereUniqueInput
    create: XOR<StudioMemberCreateWithoutUserInput, StudioMemberUncheckedCreateWithoutUserInput>
  }

  export type StudioMemberCreateManyUserInputEnvelope = {
    data: StudioMemberCreateManyUserInput | StudioMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionPlaytesterCreateWithoutUserInput = {
    id?: string
    session: SessionCreateNestedOneWithoutPlaytestersInput
  }

  export type SessionPlaytesterUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId: string
  }

  export type SessionPlaytesterCreateOrConnectWithoutUserInput = {
    where: SessionPlaytesterWhereUniqueInput
    create: XOR<SessionPlaytesterCreateWithoutUserInput, SessionPlaytesterUncheckedCreateWithoutUserInput>
  }

  export type SessionPlaytesterCreateManyUserInputEnvelope = {
    data: SessionPlaytesterCreateManyUserInput | SessionPlaytesterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutAuthorInput = {
    id?: string
    category: $Enums.FeedbackCategory
    severity: $Enums.FeedbackSeverity
    content: string
    tags?: FeedbackCreatetagsInput | string[]
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutAuthorInput = {
    id?: string
    sessionId: string
    category: $Enums.FeedbackCategory
    severity: $Enums.FeedbackSeverity
    content: string
    tags?: FeedbackCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutAuthorInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput>
  }

  export type FeedbackCreateManyAuthorInputEnvelope = {
    data: FeedbackCreateManyAuthorInput | FeedbackCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type StudioUpsertWithWhereUniqueWithoutOwnerInput = {
    where: StudioWhereUniqueInput
    update: XOR<StudioUpdateWithoutOwnerInput, StudioUncheckedUpdateWithoutOwnerInput>
    create: XOR<StudioCreateWithoutOwnerInput, StudioUncheckedCreateWithoutOwnerInput>
  }

  export type StudioUpdateWithWhereUniqueWithoutOwnerInput = {
    where: StudioWhereUniqueInput
    data: XOR<StudioUpdateWithoutOwnerInput, StudioUncheckedUpdateWithoutOwnerInput>
  }

  export type StudioUpdateManyWithWhereWithoutOwnerInput = {
    where: StudioScalarWhereInput
    data: XOR<StudioUpdateManyMutationInput, StudioUncheckedUpdateManyWithoutOwnerInput>
  }

  export type StudioScalarWhereInput = {
    AND?: StudioScalarWhereInput | StudioScalarWhereInput[]
    OR?: StudioScalarWhereInput[]
    NOT?: StudioScalarWhereInput | StudioScalarWhereInput[]
    id?: StringFilter<"Studio"> | string
    ownerUserId?: StringFilter<"Studio"> | string
    name?: StringFilter<"Studio"> | string
    description?: StringNullableFilter<"Studio"> | string | null
    createdAt?: DateTimeFilter<"Studio"> | Date | string
  }

  export type StudioMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: StudioMemberWhereUniqueInput
    update: XOR<StudioMemberUpdateWithoutUserInput, StudioMemberUncheckedUpdateWithoutUserInput>
    create: XOR<StudioMemberCreateWithoutUserInput, StudioMemberUncheckedCreateWithoutUserInput>
  }

  export type StudioMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: StudioMemberWhereUniqueInput
    data: XOR<StudioMemberUpdateWithoutUserInput, StudioMemberUncheckedUpdateWithoutUserInput>
  }

  export type StudioMemberUpdateManyWithWhereWithoutUserInput = {
    where: StudioMemberScalarWhereInput
    data: XOR<StudioMemberUpdateManyMutationInput, StudioMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type StudioMemberScalarWhereInput = {
    AND?: StudioMemberScalarWhereInput | StudioMemberScalarWhereInput[]
    OR?: StudioMemberScalarWhereInput[]
    NOT?: StudioMemberScalarWhereInput | StudioMemberScalarWhereInput[]
    id?: StringFilter<"StudioMember"> | string
    studioId?: StringFilter<"StudioMember"> | string
    userId?: StringFilter<"StudioMember"> | string
  }

  export type SessionPlaytesterUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionPlaytesterWhereUniqueInput
    update: XOR<SessionPlaytesterUpdateWithoutUserInput, SessionPlaytesterUncheckedUpdateWithoutUserInput>
    create: XOR<SessionPlaytesterCreateWithoutUserInput, SessionPlaytesterUncheckedCreateWithoutUserInput>
  }

  export type SessionPlaytesterUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionPlaytesterWhereUniqueInput
    data: XOR<SessionPlaytesterUpdateWithoutUserInput, SessionPlaytesterUncheckedUpdateWithoutUserInput>
  }

  export type SessionPlaytesterUpdateManyWithWhereWithoutUserInput = {
    where: SessionPlaytesterScalarWhereInput
    data: XOR<SessionPlaytesterUpdateManyMutationInput, SessionPlaytesterUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionPlaytesterScalarWhereInput = {
    AND?: SessionPlaytesterScalarWhereInput | SessionPlaytesterScalarWhereInput[]
    OR?: SessionPlaytesterScalarWhereInput[]
    NOT?: SessionPlaytesterScalarWhereInput | SessionPlaytesterScalarWhereInput[]
    id?: StringFilter<"SessionPlaytester"> | string
    sessionId?: StringFilter<"SessionPlaytester"> | string
    userId?: StringFilter<"SessionPlaytester"> | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutAuthorInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutAuthorInput, FeedbackUncheckedUpdateWithoutAuthorInput>
    create: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutAuthorInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutAuthorInput, FeedbackUncheckedUpdateWithoutAuthorInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutAuthorInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutAuthorInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: StringFilter<"Feedback"> | string
    sessionId?: StringFilter<"Feedback"> | string
    authorUserId?: StringFilter<"Feedback"> | string
    category?: EnumFeedbackCategoryFilter<"Feedback"> | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFilter<"Feedback"> | $Enums.FeedbackSeverity
    content?: StringFilter<"Feedback"> | string
    tags?: StringNullableListFilter<"Feedback">
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type UserCreateWithoutOwnedStudiosInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    studioName?: string | null
    createdAt?: Date | string
    studioMembership?: StudioMemberCreateNestedManyWithoutUserInput
    sessionsAsTester?: SessionPlaytesterCreateNestedManyWithoutUserInput
    feedbackAuthored?: FeedbackCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutOwnedStudiosInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    studioName?: string | null
    createdAt?: Date | string
    studioMembership?: StudioMemberUncheckedCreateNestedManyWithoutUserInput
    sessionsAsTester?: SessionPlaytesterUncheckedCreateNestedManyWithoutUserInput
    feedbackAuthored?: FeedbackUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutOwnedStudiosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedStudiosInput, UserUncheckedCreateWithoutOwnedStudiosInput>
  }

  export type StudioMemberCreateWithoutStudioInput = {
    id?: string
    user: UserCreateNestedOneWithoutStudioMembershipInput
  }

  export type StudioMemberUncheckedCreateWithoutStudioInput = {
    id?: string
    userId: string
  }

  export type StudioMemberCreateOrConnectWithoutStudioInput = {
    where: StudioMemberWhereUniqueInput
    create: XOR<StudioMemberCreateWithoutStudioInput, StudioMemberUncheckedCreateWithoutStudioInput>
  }

  export type StudioMemberCreateManyStudioInputEnvelope = {
    data: StudioMemberCreateManyStudioInput | StudioMemberCreateManyStudioInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutStudioInput = {
    id?: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutGameInput
    tasks?: TaskCreateNestedManyWithoutGameInput
    publisherInsights?: PublisherInsightCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutStudioInput = {
    id?: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutGameInput
    tasks?: TaskUncheckedCreateNestedManyWithoutGameInput
    publisherInsights?: PublisherInsightUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutStudioInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutStudioInput, GameUncheckedCreateWithoutStudioInput>
  }

  export type GameCreateManyStudioInputEnvelope = {
    data: GameCreateManyStudioInput | GameCreateManyStudioInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedStudiosInput = {
    update: XOR<UserUpdateWithoutOwnedStudiosInput, UserUncheckedUpdateWithoutOwnedStudiosInput>
    create: XOR<UserCreateWithoutOwnedStudiosInput, UserUncheckedCreateWithoutOwnedStudiosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedStudiosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedStudiosInput, UserUncheckedUpdateWithoutOwnedStudiosInput>
  }

  export type UserUpdateWithoutOwnedStudiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studioMembership?: StudioMemberUpdateManyWithoutUserNestedInput
    sessionsAsTester?: SessionPlaytesterUpdateManyWithoutUserNestedInput
    feedbackAuthored?: FeedbackUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedStudiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studioMembership?: StudioMemberUncheckedUpdateManyWithoutUserNestedInput
    sessionsAsTester?: SessionPlaytesterUncheckedUpdateManyWithoutUserNestedInput
    feedbackAuthored?: FeedbackUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type StudioMemberUpsertWithWhereUniqueWithoutStudioInput = {
    where: StudioMemberWhereUniqueInput
    update: XOR<StudioMemberUpdateWithoutStudioInput, StudioMemberUncheckedUpdateWithoutStudioInput>
    create: XOR<StudioMemberCreateWithoutStudioInput, StudioMemberUncheckedCreateWithoutStudioInput>
  }

  export type StudioMemberUpdateWithWhereUniqueWithoutStudioInput = {
    where: StudioMemberWhereUniqueInput
    data: XOR<StudioMemberUpdateWithoutStudioInput, StudioMemberUncheckedUpdateWithoutStudioInput>
  }

  export type StudioMemberUpdateManyWithWhereWithoutStudioInput = {
    where: StudioMemberScalarWhereInput
    data: XOR<StudioMemberUpdateManyMutationInput, StudioMemberUncheckedUpdateManyWithoutStudioInput>
  }

  export type GameUpsertWithWhereUniqueWithoutStudioInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutStudioInput, GameUncheckedUpdateWithoutStudioInput>
    create: XOR<GameCreateWithoutStudioInput, GameUncheckedCreateWithoutStudioInput>
  }

  export type GameUpdateWithWhereUniqueWithoutStudioInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutStudioInput, GameUncheckedUpdateWithoutStudioInput>
  }

  export type GameUpdateManyWithWhereWithoutStudioInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutStudioInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: StringFilter<"Game"> | string
    studioId?: StringFilter<"Game"> | string
    title?: StringFilter<"Game"> | string
    genre?: StringNullableFilter<"Game"> | string | null
    platform?: StringNullableFilter<"Game"> | string | null
    buildVersion?: StringNullableFilter<"Game"> | string | null
    buildBranch?: StringNullableFilter<"Game"> | string | null
    pitchSummary?: StringNullableFilter<"Game"> | string | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
  }

  export type StudioCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedStudiosInput
    games?: GameCreateNestedManyWithoutStudioInput
  }

  export type StudioUncheckedCreateWithoutMembersInput = {
    id?: string
    ownerUserId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutStudioInput
  }

  export type StudioCreateOrConnectWithoutMembersInput = {
    where: StudioWhereUniqueInput
    create: XOR<StudioCreateWithoutMembersInput, StudioUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutStudioMembershipInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    studioName?: string | null
    createdAt?: Date | string
    ownedStudios?: StudioCreateNestedManyWithoutOwnerInput
    sessionsAsTester?: SessionPlaytesterCreateNestedManyWithoutUserInput
    feedbackAuthored?: FeedbackCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutStudioMembershipInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    studioName?: string | null
    createdAt?: Date | string
    ownedStudios?: StudioUncheckedCreateNestedManyWithoutOwnerInput
    sessionsAsTester?: SessionPlaytesterUncheckedCreateNestedManyWithoutUserInput
    feedbackAuthored?: FeedbackUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutStudioMembershipInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudioMembershipInput, UserUncheckedCreateWithoutStudioMembershipInput>
  }

  export type StudioUpsertWithoutMembersInput = {
    update: XOR<StudioUpdateWithoutMembersInput, StudioUncheckedUpdateWithoutMembersInput>
    create: XOR<StudioCreateWithoutMembersInput, StudioUncheckedCreateWithoutMembersInput>
    where?: StudioWhereInput
  }

  export type StudioUpdateToOneWithWhereWithoutMembersInput = {
    where?: StudioWhereInput
    data: XOR<StudioUpdateWithoutMembersInput, StudioUncheckedUpdateWithoutMembersInput>
  }

  export type StudioUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedStudiosNestedInput
    games?: GameUpdateManyWithoutStudioNestedInput
  }

  export type StudioUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutStudioNestedInput
  }

  export type UserUpsertWithoutStudioMembershipInput = {
    update: XOR<UserUpdateWithoutStudioMembershipInput, UserUncheckedUpdateWithoutStudioMembershipInput>
    create: XOR<UserCreateWithoutStudioMembershipInput, UserUncheckedCreateWithoutStudioMembershipInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudioMembershipInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudioMembershipInput, UserUncheckedUpdateWithoutStudioMembershipInput>
  }

  export type UserUpdateWithoutStudioMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedStudios?: StudioUpdateManyWithoutOwnerNestedInput
    sessionsAsTester?: SessionPlaytesterUpdateManyWithoutUserNestedInput
    feedbackAuthored?: FeedbackUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutStudioMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedStudios?: StudioUncheckedUpdateManyWithoutOwnerNestedInput
    sessionsAsTester?: SessionPlaytesterUncheckedUpdateManyWithoutUserNestedInput
    feedbackAuthored?: FeedbackUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type StudioCreateWithoutGamesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedStudiosInput
    members?: StudioMemberCreateNestedManyWithoutStudioInput
  }

  export type StudioUncheckedCreateWithoutGamesInput = {
    id?: string
    ownerUserId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    members?: StudioMemberUncheckedCreateNestedManyWithoutStudioInput
  }

  export type StudioCreateOrConnectWithoutGamesInput = {
    where: StudioWhereUniqueInput
    create: XOR<StudioCreateWithoutGamesInput, StudioUncheckedCreateWithoutGamesInput>
  }

  export type SessionCreateWithoutGameInput = {
    id?: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    playtesters?: SessionPlaytesterCreateNestedManyWithoutSessionInput
    events?: EventCreateNestedManyWithoutSessionInput
    feedback?: FeedbackCreateNestedManyWithoutSessionInput
    reports?: ReportCreateNestedManyWithoutSessionInput
    tasks?: TaskCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutGameInput = {
    id?: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    playtesters?: SessionPlaytesterUncheckedCreateNestedManyWithoutSessionInput
    events?: EventUncheckedCreateNestedManyWithoutSessionInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutSessionInput
    reports?: ReportUncheckedCreateNestedManyWithoutSessionInput
    tasks?: TaskUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutGameInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutGameInput, SessionUncheckedCreateWithoutGameInput>
  }

  export type SessionCreateManyGameInputEnvelope = {
    data: SessionCreateManyGameInput | SessionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutGameInput = {
    id?: string
    title: string
    description?: string | null
    priority: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    source: $Enums.TaskSource
    createdAt?: Date | string
    session?: SessionCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutGameInput = {
    id?: string
    sessionId?: string | null
    title: string
    description?: string | null
    priority: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    source: $Enums.TaskSource
    createdAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutGameInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutGameInput, TaskUncheckedCreateWithoutGameInput>
  }

  export type TaskCreateManyGameInputEnvelope = {
    data: TaskCreateManyGameInput | TaskCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type PublisherInsightCreateWithoutGameInput = {
    id?: string
    score: number
    rationale: string
    recommendedNextSteps: string
    createdAt?: Date | string
  }

  export type PublisherInsightUncheckedCreateWithoutGameInput = {
    id?: string
    score: number
    rationale: string
    recommendedNextSteps: string
    createdAt?: Date | string
  }

  export type PublisherInsightCreateOrConnectWithoutGameInput = {
    where: PublisherInsightWhereUniqueInput
    create: XOR<PublisherInsightCreateWithoutGameInput, PublisherInsightUncheckedCreateWithoutGameInput>
  }

  export type PublisherInsightCreateManyGameInputEnvelope = {
    data: PublisherInsightCreateManyGameInput | PublisherInsightCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type StudioUpsertWithoutGamesInput = {
    update: XOR<StudioUpdateWithoutGamesInput, StudioUncheckedUpdateWithoutGamesInput>
    create: XOR<StudioCreateWithoutGamesInput, StudioUncheckedCreateWithoutGamesInput>
    where?: StudioWhereInput
  }

  export type StudioUpdateToOneWithWhereWithoutGamesInput = {
    where?: StudioWhereInput
    data: XOR<StudioUpdateWithoutGamesInput, StudioUncheckedUpdateWithoutGamesInput>
  }

  export type StudioUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedStudiosNestedInput
    members?: StudioMemberUpdateManyWithoutStudioNestedInput
  }

  export type StudioUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: StudioMemberUncheckedUpdateManyWithoutStudioNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutGameInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutGameInput, SessionUncheckedUpdateWithoutGameInput>
    create: XOR<SessionCreateWithoutGameInput, SessionUncheckedCreateWithoutGameInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutGameInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutGameInput, SessionUncheckedUpdateWithoutGameInput>
  }

  export type SessionUpdateManyWithWhereWithoutGameInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutGameInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    gameId?: StringFilter<"Session"> | string
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    startTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    notes?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutGameInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutGameInput, TaskUncheckedUpdateWithoutGameInput>
    create: XOR<TaskCreateWithoutGameInput, TaskUncheckedCreateWithoutGameInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutGameInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutGameInput, TaskUncheckedUpdateWithoutGameInput>
  }

  export type TaskUpdateManyWithWhereWithoutGameInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutGameInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    gameId?: StringNullableFilter<"Task"> | string | null
    sessionId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    source?: EnumTaskSourceFilter<"Task"> | $Enums.TaskSource
    createdAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type PublisherInsightUpsertWithWhereUniqueWithoutGameInput = {
    where: PublisherInsightWhereUniqueInput
    update: XOR<PublisherInsightUpdateWithoutGameInput, PublisherInsightUncheckedUpdateWithoutGameInput>
    create: XOR<PublisherInsightCreateWithoutGameInput, PublisherInsightUncheckedCreateWithoutGameInput>
  }

  export type PublisherInsightUpdateWithWhereUniqueWithoutGameInput = {
    where: PublisherInsightWhereUniqueInput
    data: XOR<PublisherInsightUpdateWithoutGameInput, PublisherInsightUncheckedUpdateWithoutGameInput>
  }

  export type PublisherInsightUpdateManyWithWhereWithoutGameInput = {
    where: PublisherInsightScalarWhereInput
    data: XOR<PublisherInsightUpdateManyMutationInput, PublisherInsightUncheckedUpdateManyWithoutGameInput>
  }

  export type PublisherInsightScalarWhereInput = {
    AND?: PublisherInsightScalarWhereInput | PublisherInsightScalarWhereInput[]
    OR?: PublisherInsightScalarWhereInput[]
    NOT?: PublisherInsightScalarWhereInput | PublisherInsightScalarWhereInput[]
    id?: StringFilter<"PublisherInsight"> | string
    gameId?: StringFilter<"PublisherInsight"> | string
    score?: IntFilter<"PublisherInsight"> | number
    rationale?: StringFilter<"PublisherInsight"> | string
    recommendedNextSteps?: StringFilter<"PublisherInsight"> | string
    createdAt?: DateTimeFilter<"PublisherInsight"> | Date | string
  }

  export type GameCreateWithoutSessionsInput = {
    id?: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
    studio: StudioCreateNestedOneWithoutGamesInput
    tasks?: TaskCreateNestedManyWithoutGameInput
    publisherInsights?: PublisherInsightCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutSessionsInput = {
    id?: string
    studioId: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGameInput
    publisherInsights?: PublisherInsightUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutSessionsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutSessionsInput, GameUncheckedCreateWithoutSessionsInput>
  }

  export type SessionPlaytesterCreateWithoutSessionInput = {
    id?: string
    user: UserCreateNestedOneWithoutSessionsAsTesterInput
  }

  export type SessionPlaytesterUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
  }

  export type SessionPlaytesterCreateOrConnectWithoutSessionInput = {
    where: SessionPlaytesterWhereUniqueInput
    create: XOR<SessionPlaytesterCreateWithoutSessionInput, SessionPlaytesterUncheckedCreateWithoutSessionInput>
  }

  export type SessionPlaytesterCreateManySessionInputEnvelope = {
    data: SessionPlaytesterCreateManySessionInput | SessionPlaytesterCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutSessionInput = {
    id?: string
    type: $Enums.EventType
    timestamp?: Date | string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type EventUncheckedCreateWithoutSessionInput = {
    id?: string
    type: $Enums.EventType
    timestamp?: Date | string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type EventCreateOrConnectWithoutSessionInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput>
  }

  export type EventCreateManySessionInputEnvelope = {
    data: EventCreateManySessionInput | EventCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutSessionInput = {
    id?: string
    category: $Enums.FeedbackCategory
    severity: $Enums.FeedbackSeverity
    content: string
    tags?: FeedbackCreatetagsInput | string[]
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutFeedbackAuthoredInput
  }

  export type FeedbackUncheckedCreateWithoutSessionInput = {
    id?: string
    authorUserId: string
    category: $Enums.FeedbackCategory
    severity: $Enums.FeedbackSeverity
    content: string
    tags?: FeedbackCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutSessionInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput>
  }

  export type FeedbackCreateManySessionInputEnvelope = {
    data: FeedbackCreateManySessionInput | FeedbackCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutSessionInput = {
    id?: string
    type: $Enums.ReportType
    content: string
    createdAt?: Date | string
  }

  export type ReportUncheckedCreateWithoutSessionInput = {
    id?: string
    type: $Enums.ReportType
    content: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutSessionInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput>
  }

  export type ReportCreateManySessionInputEnvelope = {
    data: ReportCreateManySessionInput | ReportCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutSessionInput = {
    id?: string
    title: string
    description?: string | null
    priority: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    source: $Enums.TaskSource
    createdAt?: Date | string
    game?: GameCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutSessionInput = {
    id?: string
    gameId?: string | null
    title: string
    description?: string | null
    priority: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    source: $Enums.TaskSource
    createdAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutSessionInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSessionInput, TaskUncheckedCreateWithoutSessionInput>
  }

  export type TaskCreateManySessionInputEnvelope = {
    data: TaskCreateManySessionInput | TaskCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithoutSessionsInput = {
    update: XOR<GameUpdateWithoutSessionsInput, GameUncheckedUpdateWithoutSessionsInput>
    create: XOR<GameCreateWithoutSessionsInput, GameUncheckedCreateWithoutSessionsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutSessionsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutSessionsInput, GameUncheckedUpdateWithoutSessionsInput>
  }

  export type GameUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studio?: StudioUpdateOneRequiredWithoutGamesNestedInput
    tasks?: TaskUpdateManyWithoutGameNestedInput
    publisherInsights?: PublisherInsightUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGameNestedInput
    publisherInsights?: PublisherInsightUncheckedUpdateManyWithoutGameNestedInput
  }

  export type SessionPlaytesterUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionPlaytesterWhereUniqueInput
    update: XOR<SessionPlaytesterUpdateWithoutSessionInput, SessionPlaytesterUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionPlaytesterCreateWithoutSessionInput, SessionPlaytesterUncheckedCreateWithoutSessionInput>
  }

  export type SessionPlaytesterUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionPlaytesterWhereUniqueInput
    data: XOR<SessionPlaytesterUpdateWithoutSessionInput, SessionPlaytesterUncheckedUpdateWithoutSessionInput>
  }

  export type SessionPlaytesterUpdateManyWithWhereWithoutSessionInput = {
    where: SessionPlaytesterScalarWhereInput
    data: XOR<SessionPlaytesterUpdateManyMutationInput, SessionPlaytesterUncheckedUpdateManyWithoutSessionInput>
  }

  export type EventUpsertWithWhereUniqueWithoutSessionInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutSessionInput, EventUncheckedUpdateWithoutSessionInput>
    create: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput>
  }

  export type EventUpdateWithWhereUniqueWithoutSessionInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutSessionInput, EventUncheckedUpdateWithoutSessionInput>
  }

  export type EventUpdateManyWithWhereWithoutSessionInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutSessionInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    sessionId?: StringFilter<"Event"> | string
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    timestamp?: DateTimeFilter<"Event"> | Date | string
    payload?: JsonFilter<"Event">
  }

  export type FeedbackUpsertWithWhereUniqueWithoutSessionInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutSessionInput, FeedbackUncheckedUpdateWithoutSessionInput>
    create: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutSessionInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutSessionInput, FeedbackUncheckedUpdateWithoutSessionInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutSessionInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutSessionInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutSessionInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutSessionInput, ReportUncheckedUpdateWithoutSessionInput>
    create: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutSessionInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutSessionInput, ReportUncheckedUpdateWithoutSessionInput>
  }

  export type ReportUpdateManyWithWhereWithoutSessionInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutSessionInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    sessionId?: StringFilter<"Report"> | string
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    content?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutSessionInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutSessionInput, TaskUncheckedUpdateWithoutSessionInput>
    create: XOR<TaskCreateWithoutSessionInput, TaskUncheckedCreateWithoutSessionInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutSessionInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutSessionInput, TaskUncheckedUpdateWithoutSessionInput>
  }

  export type TaskUpdateManyWithWhereWithoutSessionInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionCreateWithoutPlaytestersInput = {
    id?: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutSessionsInput
    events?: EventCreateNestedManyWithoutSessionInput
    feedback?: FeedbackCreateNestedManyWithoutSessionInput
    reports?: ReportCreateNestedManyWithoutSessionInput
    tasks?: TaskCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutPlaytestersInput = {
    id?: string
    gameId: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutSessionInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutSessionInput
    reports?: ReportUncheckedCreateNestedManyWithoutSessionInput
    tasks?: TaskUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutPlaytestersInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutPlaytestersInput, SessionUncheckedCreateWithoutPlaytestersInput>
  }

  export type UserCreateWithoutSessionsAsTesterInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    studioName?: string | null
    createdAt?: Date | string
    ownedStudios?: StudioCreateNestedManyWithoutOwnerInput
    studioMembership?: StudioMemberCreateNestedManyWithoutUserInput
    feedbackAuthored?: FeedbackCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutSessionsAsTesterInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    studioName?: string | null
    createdAt?: Date | string
    ownedStudios?: StudioUncheckedCreateNestedManyWithoutOwnerInput
    studioMembership?: StudioMemberUncheckedCreateNestedManyWithoutUserInput
    feedbackAuthored?: FeedbackUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutSessionsAsTesterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsAsTesterInput, UserUncheckedCreateWithoutSessionsAsTesterInput>
  }

  export type SessionUpsertWithoutPlaytestersInput = {
    update: XOR<SessionUpdateWithoutPlaytestersInput, SessionUncheckedUpdateWithoutPlaytestersInput>
    create: XOR<SessionCreateWithoutPlaytestersInput, SessionUncheckedCreateWithoutPlaytestersInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutPlaytestersInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutPlaytestersInput, SessionUncheckedUpdateWithoutPlaytestersInput>
  }

  export type SessionUpdateWithoutPlaytestersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutSessionsNestedInput
    events?: EventUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUpdateManyWithoutSessionNestedInput
    reports?: ReportUpdateManyWithoutSessionNestedInput
    tasks?: TaskUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutPlaytestersInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutSessionNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSessionNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserUpsertWithoutSessionsAsTesterInput = {
    update: XOR<UserUpdateWithoutSessionsAsTesterInput, UserUncheckedUpdateWithoutSessionsAsTesterInput>
    create: XOR<UserCreateWithoutSessionsAsTesterInput, UserUncheckedCreateWithoutSessionsAsTesterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsAsTesterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsAsTesterInput, UserUncheckedUpdateWithoutSessionsAsTesterInput>
  }

  export type UserUpdateWithoutSessionsAsTesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedStudios?: StudioUpdateManyWithoutOwnerNestedInput
    studioMembership?: StudioMemberUpdateManyWithoutUserNestedInput
    feedbackAuthored?: FeedbackUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsAsTesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedStudios?: StudioUncheckedUpdateManyWithoutOwnerNestedInput
    studioMembership?: StudioMemberUncheckedUpdateManyWithoutUserNestedInput
    feedbackAuthored?: FeedbackUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type SessionCreateWithoutEventsInput = {
    id?: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutSessionsInput
    playtesters?: SessionPlaytesterCreateNestedManyWithoutSessionInput
    feedback?: FeedbackCreateNestedManyWithoutSessionInput
    reports?: ReportCreateNestedManyWithoutSessionInput
    tasks?: TaskCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutEventsInput = {
    id?: string
    gameId: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    playtesters?: SessionPlaytesterUncheckedCreateNestedManyWithoutSessionInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutSessionInput
    reports?: ReportUncheckedCreateNestedManyWithoutSessionInput
    tasks?: TaskUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutEventsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
  }

  export type SessionUpsertWithoutEventsInput = {
    update: XOR<SessionUpdateWithoutEventsInput, SessionUncheckedUpdateWithoutEventsInput>
    create: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutEventsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutEventsInput, SessionUncheckedUpdateWithoutEventsInput>
  }

  export type SessionUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutSessionsNestedInput
    playtesters?: SessionPlaytesterUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUpdateManyWithoutSessionNestedInput
    reports?: ReportUpdateManyWithoutSessionNestedInput
    tasks?: TaskUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playtesters?: SessionPlaytesterUncheckedUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutSessionNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSessionNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateWithoutFeedbackInput = {
    id?: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutSessionsInput
    playtesters?: SessionPlaytesterCreateNestedManyWithoutSessionInput
    events?: EventCreateNestedManyWithoutSessionInput
    reports?: ReportCreateNestedManyWithoutSessionInput
    tasks?: TaskCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutFeedbackInput = {
    id?: string
    gameId: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    playtesters?: SessionPlaytesterUncheckedCreateNestedManyWithoutSessionInput
    events?: EventUncheckedCreateNestedManyWithoutSessionInput
    reports?: ReportUncheckedCreateNestedManyWithoutSessionInput
    tasks?: TaskUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutFeedbackInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutFeedbackInput, SessionUncheckedCreateWithoutFeedbackInput>
  }

  export type UserCreateWithoutFeedbackAuthoredInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    studioName?: string | null
    createdAt?: Date | string
    ownedStudios?: StudioCreateNestedManyWithoutOwnerInput
    studioMembership?: StudioMemberCreateNestedManyWithoutUserInput
    sessionsAsTester?: SessionPlaytesterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbackAuthoredInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    studioName?: string | null
    createdAt?: Date | string
    ownedStudios?: StudioUncheckedCreateNestedManyWithoutOwnerInput
    studioMembership?: StudioMemberUncheckedCreateNestedManyWithoutUserInput
    sessionsAsTester?: SessionPlaytesterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbackAuthoredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackAuthoredInput, UserUncheckedCreateWithoutFeedbackAuthoredInput>
  }

  export type SessionUpsertWithoutFeedbackInput = {
    update: XOR<SessionUpdateWithoutFeedbackInput, SessionUncheckedUpdateWithoutFeedbackInput>
    create: XOR<SessionCreateWithoutFeedbackInput, SessionUncheckedCreateWithoutFeedbackInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutFeedbackInput, SessionUncheckedUpdateWithoutFeedbackInput>
  }

  export type SessionUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutSessionsNestedInput
    playtesters?: SessionPlaytesterUpdateManyWithoutSessionNestedInput
    events?: EventUpdateManyWithoutSessionNestedInput
    reports?: ReportUpdateManyWithoutSessionNestedInput
    tasks?: TaskUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playtesters?: SessionPlaytesterUncheckedUpdateManyWithoutSessionNestedInput
    events?: EventUncheckedUpdateManyWithoutSessionNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSessionNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserUpsertWithoutFeedbackAuthoredInput = {
    update: XOR<UserUpdateWithoutFeedbackAuthoredInput, UserUncheckedUpdateWithoutFeedbackAuthoredInput>
    create: XOR<UserCreateWithoutFeedbackAuthoredInput, UserUncheckedCreateWithoutFeedbackAuthoredInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbackAuthoredInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbackAuthoredInput, UserUncheckedUpdateWithoutFeedbackAuthoredInput>
  }

  export type UserUpdateWithoutFeedbackAuthoredInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedStudios?: StudioUpdateManyWithoutOwnerNestedInput
    studioMembership?: StudioMemberUpdateManyWithoutUserNestedInput
    sessionsAsTester?: SessionPlaytesterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackAuthoredInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    studioName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedStudios?: StudioUncheckedUpdateManyWithoutOwnerNestedInput
    studioMembership?: StudioMemberUncheckedUpdateManyWithoutUserNestedInput
    sessionsAsTester?: SessionPlaytesterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateWithoutReportsInput = {
    id?: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutSessionsInput
    playtesters?: SessionPlaytesterCreateNestedManyWithoutSessionInput
    events?: EventCreateNestedManyWithoutSessionInput
    feedback?: FeedbackCreateNestedManyWithoutSessionInput
    tasks?: TaskCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutReportsInput = {
    id?: string
    gameId: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    playtesters?: SessionPlaytesterUncheckedCreateNestedManyWithoutSessionInput
    events?: EventUncheckedCreateNestedManyWithoutSessionInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutSessionInput
    tasks?: TaskUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutReportsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutReportsInput, SessionUncheckedCreateWithoutReportsInput>
  }

  export type SessionUpsertWithoutReportsInput = {
    update: XOR<SessionUpdateWithoutReportsInput, SessionUncheckedUpdateWithoutReportsInput>
    create: XOR<SessionCreateWithoutReportsInput, SessionUncheckedCreateWithoutReportsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutReportsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutReportsInput, SessionUncheckedUpdateWithoutReportsInput>
  }

  export type SessionUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutSessionsNestedInput
    playtesters?: SessionPlaytesterUpdateManyWithoutSessionNestedInput
    events?: EventUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUpdateManyWithoutSessionNestedInput
    tasks?: TaskUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playtesters?: SessionPlaytesterUncheckedUpdateManyWithoutSessionNestedInput
    events?: EventUncheckedUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutSessionNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type GameCreateWithoutTasksInput = {
    id?: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
    studio: StudioCreateNestedOneWithoutGamesInput
    sessions?: SessionCreateNestedManyWithoutGameInput
    publisherInsights?: PublisherInsightCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutTasksInput = {
    id?: string
    studioId: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutGameInput
    publisherInsights?: PublisherInsightUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutTasksInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutTasksInput, GameUncheckedCreateWithoutTasksInput>
  }

  export type SessionCreateWithoutTasksInput = {
    id?: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutSessionsInput
    playtesters?: SessionPlaytesterCreateNestedManyWithoutSessionInput
    events?: EventCreateNestedManyWithoutSessionInput
    feedback?: FeedbackCreateNestedManyWithoutSessionInput
    reports?: ReportCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutTasksInput = {
    id?: string
    gameId: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    playtesters?: SessionPlaytesterUncheckedCreateNestedManyWithoutSessionInput
    events?: EventUncheckedCreateNestedManyWithoutSessionInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutSessionInput
    reports?: ReportUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutTasksInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutTasksInput, SessionUncheckedCreateWithoutTasksInput>
  }

  export type GameUpsertWithoutTasksInput = {
    update: XOR<GameUpdateWithoutTasksInput, GameUncheckedUpdateWithoutTasksInput>
    create: XOR<GameCreateWithoutTasksInput, GameUncheckedCreateWithoutTasksInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutTasksInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutTasksInput, GameUncheckedUpdateWithoutTasksInput>
  }

  export type GameUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studio?: StudioUpdateOneRequiredWithoutGamesNestedInput
    sessions?: SessionUpdateManyWithoutGameNestedInput
    publisherInsights?: PublisherInsightUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutGameNestedInput
    publisherInsights?: PublisherInsightUncheckedUpdateManyWithoutGameNestedInput
  }

  export type SessionUpsertWithoutTasksInput = {
    update: XOR<SessionUpdateWithoutTasksInput, SessionUncheckedUpdateWithoutTasksInput>
    create: XOR<SessionCreateWithoutTasksInput, SessionUncheckedCreateWithoutTasksInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutTasksInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutTasksInput, SessionUncheckedUpdateWithoutTasksInput>
  }

  export type SessionUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutSessionsNestedInput
    playtesters?: SessionPlaytesterUpdateManyWithoutSessionNestedInput
    events?: EventUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUpdateManyWithoutSessionNestedInput
    reports?: ReportUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playtesters?: SessionPlaytesterUncheckedUpdateManyWithoutSessionNestedInput
    events?: EventUncheckedUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutSessionNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type GameCreateWithoutPublisherInsightsInput = {
    id?: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
    studio: StudioCreateNestedOneWithoutGamesInput
    sessions?: SessionCreateNestedManyWithoutGameInput
    tasks?: TaskCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPublisherInsightsInput = {
    id?: string
    studioId: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutGameInput
    tasks?: TaskUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPublisherInsightsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPublisherInsightsInput, GameUncheckedCreateWithoutPublisherInsightsInput>
  }

  export type GameUpsertWithoutPublisherInsightsInput = {
    update: XOR<GameUpdateWithoutPublisherInsightsInput, GameUncheckedUpdateWithoutPublisherInsightsInput>
    create: XOR<GameCreateWithoutPublisherInsightsInput, GameUncheckedCreateWithoutPublisherInsightsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPublisherInsightsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPublisherInsightsInput, GameUncheckedUpdateWithoutPublisherInsightsInput>
  }

  export type GameUpdateWithoutPublisherInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studio?: StudioUpdateOneRequiredWithoutGamesNestedInput
    sessions?: SessionUpdateManyWithoutGameNestedInput
    tasks?: TaskUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPublisherInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutGameNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutGameNestedInput
  }

  export type StudioCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type StudioMemberCreateManyUserInput = {
    id?: string
    studioId: string
  }

  export type SessionPlaytesterCreateManyUserInput = {
    id?: string
    sessionId: string
  }

  export type FeedbackCreateManyAuthorInput = {
    id?: string
    sessionId: string
    category: $Enums.FeedbackCategory
    severity: $Enums.FeedbackSeverity
    content: string
    tags?: FeedbackCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type StudioUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: StudioMemberUpdateManyWithoutStudioNestedInput
    games?: GameUpdateManyWithoutStudioNestedInput
  }

  export type StudioUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: StudioMemberUncheckedUpdateManyWithoutStudioNestedInput
    games?: GameUncheckedUpdateManyWithoutStudioNestedInput
  }

  export type StudioUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    studio?: StudioUpdateOneRequiredWithoutMembersNestedInput
  }

  export type StudioMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
  }

  export type StudioMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionPlaytesterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session?: SessionUpdateOneRequiredWithoutPlaytestersNestedInput
  }

  export type SessionPlaytesterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionPlaytesterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumFeedbackCategoryFieldUpdateOperationsInput | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    content?: StringFieldUpdateOperationsInput | string
    tags?: FeedbackUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    category?: EnumFeedbackCategoryFieldUpdateOperationsInput | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    content?: StringFieldUpdateOperationsInput | string
    tags?: FeedbackUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    category?: EnumFeedbackCategoryFieldUpdateOperationsInput | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    content?: StringFieldUpdateOperationsInput | string
    tags?: FeedbackUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioMemberCreateManyStudioInput = {
    id?: string
    userId: string
  }

  export type GameCreateManyStudioInput = {
    id?: string
    title: string
    genre?: string | null
    platform?: string | null
    buildVersion?: string | null
    buildBranch?: string | null
    pitchSummary?: string | null
    createdAt?: Date | string
  }

  export type StudioMemberUpdateWithoutStudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudioMembershipNestedInput
  }

  export type StudioMemberUncheckedUpdateWithoutStudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StudioMemberUncheckedUpdateManyWithoutStudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GameUpdateWithoutStudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutGameNestedInput
    tasks?: TaskUpdateManyWithoutGameNestedInput
    publisherInsights?: PublisherInsightUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutStudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutGameNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutGameNestedInput
    publisherInsights?: PublisherInsightUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutStudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    buildVersion?: NullableStringFieldUpdateOperationsInput | string | null
    buildBranch?: NullableStringFieldUpdateOperationsInput | string | null
    pitchSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyGameInput = {
    id?: string
    status?: $Enums.SessionStatus
    startTime?: Date | string | null
    endTime?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type TaskCreateManyGameInput = {
    id?: string
    sessionId?: string | null
    title: string
    description?: string | null
    priority: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    source: $Enums.TaskSource
    createdAt?: Date | string
  }

  export type PublisherInsightCreateManyGameInput = {
    id?: string
    score: number
    rationale: string
    recommendedNextSteps: string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playtesters?: SessionPlaytesterUpdateManyWithoutSessionNestedInput
    events?: EventUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUpdateManyWithoutSessionNestedInput
    reports?: ReportUpdateManyWithoutSessionNestedInput
    tasks?: TaskUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playtesters?: SessionPlaytesterUncheckedUpdateManyWithoutSessionNestedInput
    events?: EventUncheckedUpdateManyWithoutSessionNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutSessionNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSessionNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherInsightUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
    recommendedNextSteps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherInsightUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
    recommendedNextSteps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherInsightUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
    recommendedNextSteps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionPlaytesterCreateManySessionInput = {
    id?: string
    userId: string
  }

  export type EventCreateManySessionInput = {
    id?: string
    type: $Enums.EventType
    timestamp?: Date | string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type FeedbackCreateManySessionInput = {
    id?: string
    authorUserId: string
    category: $Enums.FeedbackCategory
    severity: $Enums.FeedbackSeverity
    content: string
    tags?: FeedbackCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type ReportCreateManySessionInput = {
    id?: string
    type: $Enums.ReportType
    content: string
    createdAt?: Date | string
  }

  export type TaskCreateManySessionInput = {
    id?: string
    gameId?: string | null
    title: string
    description?: string | null
    priority: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    source: $Enums.TaskSource
    createdAt?: Date | string
  }

  export type SessionPlaytesterUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSessionsAsTesterNestedInput
  }

  export type SessionPlaytesterUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionPlaytesterUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type EventUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type EventUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type FeedbackUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumFeedbackCategoryFieldUpdateOperationsInput | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    content?: StringFieldUpdateOperationsInput | string
    tags?: FeedbackUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutFeedbackAuthoredNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorUserId?: StringFieldUpdateOperationsInput | string
    category?: EnumFeedbackCategoryFieldUpdateOperationsInput | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    content?: StringFieldUpdateOperationsInput | string
    tags?: FeedbackUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorUserId?: StringFieldUpdateOperationsInput | string
    category?: EnumFeedbackCategoryFieldUpdateOperationsInput | $Enums.FeedbackCategory
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    content?: StringFieldUpdateOperationsInput | string
    tags?: FeedbackUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    source?: EnumTaskSourceFieldUpdateOperationsInput | $Enums.TaskSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}