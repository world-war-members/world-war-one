/** Alias for entity type.*/
export type Entity<T> = T;

/** Options for an API endpoint.*/
export type EndpointOptions<T> = {
  endpointName: string;
  query?: string;
} & T;
