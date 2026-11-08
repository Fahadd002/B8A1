# Type Narrowing in TypeScript

## Introduction

Type narrowing is the process of using runtime checks to refine a broad static type into a more specific one. It lets code safely handle different values without discarding TypeScript’s checks or relying on unsafe casts.

## Detailed explanation

The `typeof` operator narrows primitive unions. In this example, TypeScript knows that `value` is a string inside the first branch and a number in the second:

```ts
function describe(value: string | number): string {
  if (typeof value === "string") {
    return value.trim();
  }
  return value.toFixed(2);
}
```

Use `instanceof` when runtime class identity matters. The following branch exposes `Date` methods only after checking the actual value:

```ts
function formatDate(value: Date | string): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
}
```

The `in` operator checks whether an object has a named property. It is useful for distinguishing object variants that share a union:

```ts
type EmailNotice = { email: string };
type SmsNotice = { phone: string };

function destination(notice: EmailNotice | SmsNotice): string {
  return "email" in notice ? notice.email : notice.phone;
}
```

Each check contributes evidence that TypeScript tracks within the relevant control-flow branch. Checks must match the runtime data: `typeof null` is `"object"`, and `in` checks property presence rather than validating a property’s value. When a union is complex, a shared literal discriminant such as `kind: "email"` can make branches even clearer.

## Conclusion

Narrowing turns runtime facts into compile-time guarantees. Use `typeof` for primitives, `instanceof` for class instances, and `in` for object property variants, while keeping each check consistent with the values your program can actually receive.
