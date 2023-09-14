export type Status = {
  SUCCESSFUL: number;
  CREATED: number;
  NO_CONTENT: number;
  BAD_REQUEST: number;
  UNAUTHORIZED: number;
  NOT_FOUND: number;
};
const statusHttp: Status = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

const mapStatusToHTTP = (status: keyof Status): number => statusHttp[status] || 500;

export default mapStatusToHTTP;

/* const mock: Order[] = [
  {
    id: 1,
    userId: 1,
    productIds: [
      {
        id: 2,
      },
      {
        id: 1,
      },
    ],
  },
  {
    id: 2,
    userId: 3,
    productIds: [
      {
        id: 4,
      },
      {
        id: 3,
      },
    ],
  },
  {
    id: 3,
    userId: 2,
    productIds: [
      {
        id: 5,
      },
    ],
  },
]; */