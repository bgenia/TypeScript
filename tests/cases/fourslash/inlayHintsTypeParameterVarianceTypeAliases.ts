/// <reference path="fourslash.ts" />

//// type Bivariant<T> = { impl: void };
//// type Covariant<T> = { impl: T };
//// type Contravariant<T> = { impl: () => T };
//// type Invariant<T> = { impl: (x: T) => T };

//// type CovariantAnnotated<out T> = { impl: T };
//// type ContravariantAnnotated<in T> = { impl: () => T };
//// type InvariantAnnotated<in out T> = { impl: (x: T) => T };

verify.baselineInlayHints(undefined, {
    includeInlayTypeParameterVarianceHints: true
});
