import {Observable, of} from 'rxjs';

/**
 * Creates a function that handles errors by alerting the user and returning an Observable of a fallback value.

 * Usage:
 * - Intended to be used within RxJS's `catchError` operator in Observable chains to handle errors gracefully.
 * - Can be customized with different fallback values based on the context or expected type of the Observable stream.
 *
 * Example:
 * ```
 * this.myObservable$ = this.someService.getData().pipe(
 *   catchError(handleError([])) // For an Observable expected to emit an array
 * );
 * ```
 *
 * Note:
 * - The alert used for error notification could be replaced with a more sophisticated error handling mechanism.
 */
export function handleError<T>(fallback: T) {
  return (error: any): Observable<T> => {
    alert(error);
    return of(fallback);
  };
}
