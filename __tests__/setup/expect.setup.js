// extend expect to accept jest-dom queries
import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);