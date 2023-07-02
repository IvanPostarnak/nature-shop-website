import AppError from '../AppError/AppError';

class InvalidTypeError extends AppError {

  constructor(instance, type) {
    super(`expected '${instance}' to have type '${type}', but got '${typeof instance}'`);
    this.name = 'InvalidTypeError';
  }

};

export default InvalidTypeError;