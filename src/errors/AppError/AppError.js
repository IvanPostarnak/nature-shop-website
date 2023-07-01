class AppError extends Error {

  constructor(message) {
    super(message);
    this.#validateMessage;
    this.name = 'AppError';
  }

  #validateMessage(input) {
    if (input === '') {
      throw new Error('received empty error message');
    }
  }

};

export default AppError;