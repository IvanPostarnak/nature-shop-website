import AppError from '../../entity/AppError/AppError';

class UnknownDataError extends AppError {
  constructor(instance) {
    super(`'${instance}' assigned to unknown/unmatching value`);
    this.name = 'UnknownDataError';
  }
}

export default UnknownDataError;
