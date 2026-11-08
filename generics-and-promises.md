# Generics and Promise Responses in TypeScript

## Introduction

Generics let a function, interface, or class work with different types while preserving useful information about each value. Instead of weakening a result to `any` or repeating nearly identical implementations, a generic captures a type and carries it through the code.

## Detailed explanation

A type parameter such as `T` is a placeholder chosen when the generic is used. For example, this function returns the same type it receives:

```ts
function identity<T>(value: T): T {
  return value;
}

const label = identity<string>("ready");
const count = identity(3); // TypeScript infers number
```

The same idea applies to asynchronous work. `Promise<T>` describes a promise that will eventually fulfill with a value of type `T`; it does not mean the value is available synchronously. A reusable fetch helper can retain the caller’s expected response shape:

```ts
async function loadJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return (await response.json()) as T;
}

interface Profile {
  id: number;
  name: string;
}

const profilePromise: Promise<Profile> = loadJson<Profile>("/api/profile");
```

Here, `await profilePromise` has the `Profile` type, so editors can offer property completion and the compiler can catch many mismatches. The generic parameter is a compile-time contract, not runtime validation: `response.json()` does not prove that server data matches `Profile`. Validate untrusted data before treating it as that type. Errors also remain separate from the fulfillment type; `Promise<Profile>` does not encode a particular rejection type.

## Conclusion

Generics make reusable asynchronous helpers type-safe and expressive by connecting the requested data shape to the eventual promise result. Use `Promise<T>` to describe successful results, while remembering to handle failures and validate data received from external systems.
