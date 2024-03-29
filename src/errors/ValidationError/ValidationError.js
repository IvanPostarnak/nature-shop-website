import AppError from '../../entity/AppError/AppError';

class ValidationError extends AppError {
  constructor(instance) {
    super(`'${instance}' has invalid value (or propery(-ies) with invalid value(-s))'`);
    this.name = 'ValidationError';
    this.instance = instance;
  }
}

export default ValidationError;
