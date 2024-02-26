import { Observable, of } from 'rxjs';

export function handleError<T>(fallback: T) {
  return (error: any): Observable<T> => {
    alert(error);
    return of(fallback);
  };
}
