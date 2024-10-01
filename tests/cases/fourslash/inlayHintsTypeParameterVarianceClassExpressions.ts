/// <reference path="fourslash.ts" />

//// (class Bivariant<T> { impl: void });
//// (class Covariant<T> { impl: T });
//// (class Contravariant<T> { impl: () => T });
//// (class Invariant<T> { impl: (x: T) => T });

//// (class CovariantAnnotated<out T> { impl: T });
//// (class ContravariantAnnotated<in T> { impl: () => T });
//// (class InvariantAnnotated<in out T> { impl: (x: T) => T });

verify.baselineInlayHints(undefined, {
    includeInlayTypeParameterVarianceHints: true
});
