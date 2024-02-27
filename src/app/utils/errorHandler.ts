import {Observable, of} from 'rxjs';

/**
 * @remarks
 * Usage:
 * - Intended to be used within RxJS's `catchError` operator in Observable chains to handle errors gracefully.
 * - Can be customized with different fallback values based on the context or expected type of the Observable stream.
 *
 * @example
 * ```ts
 * this.someService.getData().pipe(
 *   catchError(handleError([])) // For an Observable expected to emit an array
 * );
 * ```
 */
export function handleError<T>(fallback: T) {
  return (error: any): Observable<T> => {
    alert(error);
    return of(fallback);
  };
}
