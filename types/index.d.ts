declare module 'deca-memory-utils' {
    export class UniquePtr<T> {
      constructor(value: T | null);
      get(): T | null;
      release(): T | null;
      reset(newValue: T | null): void;
      move(): UniquePtr<T>;
    }
  
    export type Destructor<T> = (value: T) => void;
  
    export class SharedPtr<T> {
      constructor(value?: NonNullable<T>, destructor?: Destructor<T>);
      static make<T>(value: NonNullable<T>, destructor?: Destructor<T>): SharedPtr<T>;
      static fromSharedPtr<T>(other: SharedPtr<T>): SharedPtr<T>;
      get(): NonNullable<T> | null;
      getRaw(): NonNullable<T> | null;
      isValid(): boolean;
      useCount(): number;
      reset(value?: NonNullable<T>, destructor?: Destructor<T>): void;
      swap(other: SharedPtr<T>): void;
      destroy(): void;
    }
  
    export class WeakPtr<T> {
      constructor(shared?: SharedPtr<T>);
      lock(): SharedPtr<T> | null;
      reset(): void;
      expired(): boolean;
    }
  }