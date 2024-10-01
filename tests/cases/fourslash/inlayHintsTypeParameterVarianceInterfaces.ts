/// <reference path="fourslash.ts" />

//// interface Bivariant<T> { impl: void }
//// interface Covariant<T> { impl: T }
//// interface Contravariant<T> { impl: () => T }
//// interface Invariant<T> { impl: (x: T) => T }

//// interface CovariantAnnotated<out T> { impl: T }
//// interface ContravariantAnnotated<in T> { impl: () => T }
//// interface InvariantAnnotated<in out T> { impl: (x: T) => T }

verify.baselineInlayHints(undefined, {
    includeInlayTypeParameterVarianceHints: true
});
