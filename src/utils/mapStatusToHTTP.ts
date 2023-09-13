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