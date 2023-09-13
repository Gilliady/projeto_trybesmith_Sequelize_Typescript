import { Status } from '../utils/mapStatusToHTTP';

export type ProductReturn = Promise<{
  status: keyof Status,
  data: object,
}>;