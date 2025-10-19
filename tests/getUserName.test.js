/* @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import { saveUser, getUsername, clearStorage } from '../js/utils/storage.js';

describe('getUsername', () => {
  it('should return the username from storage', () => {
    clearStorage();
    saveUser({ name: 'John' });
    expect(getUsername()).toBe('John');
  });
  it('should return null if no user exists in storage', () => {
    clearStorage();
    expect(getUsername()).toBe(null);
  });
});
