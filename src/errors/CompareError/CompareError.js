import { AppError } from "../errors";

class CompareError extends AppError {

  constructor(first, second) {
    super(`expected '${first}' to be equal to '${second}'`);
    this.name = 'CompareError';
  }

};

export default CompareError;