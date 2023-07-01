import { AppError } from "../errors";

class NoDataError extends AppError {

  constructor(expectedData) {
    super(`'${expectedData}' were/was not provided`);
    this.name = "NoDataError";
    this.expectedData = expectedData;
  }

};

export default NoDataError;