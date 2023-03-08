export interface IRequest<T> {
  get(path: string): Promise<T>;
}
