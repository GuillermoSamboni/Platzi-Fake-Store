export default interface StateListGeneric<T> {
  items: T;
  status: 'loading' | 'success' | 'error',
}
