// Import necessary libraries and the hook
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useFavorites from '../hooks/useFavoritesSession';

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

// Mock window.sessionStorage
Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });

describe('useFavorites hook', () => {
  it('should return empty array when session storage is empty', () => {
    // Arrange
    sessionStorageMock.getItem.mockReturnValueOnce(null); // Mock empty session storage

    // Act
    const { result } = renderHook(() => useFavorites());

    // Assert
    expect(result.current.favorites).toEqual([]);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  it('should return favorites from session storage', () => {
    // Arrange
    const mockFavorites = [{ trackId: 1, trackName: 'Favorite Track 1' }, { trackId: 2, trackName: 'Favorite Track 2' }];
    sessionStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockFavorites)); // Mock favorites in session storage

    // Act
    const { result } = renderHook(() => useFavorites());

    // Assert
    expect(result.current.favorites).toEqual(mockFavorites);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  it('should handle error when unable to parse session storage', () => {
    // Arrange
    sessionStorageMock.getItem.mockReturnValueOnce('invalid JSON'); // Mock invalid JSON in session storage

    // Act
    const { result } = renderHook(() => useFavorites());

    // Assert
    expect(result.current.favorites).toEqual([]);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toEqual('Failed to fetch favorites from session storage');
  });
});
