/**
 * Shared utilities for monorepo applications
 */

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export function createSuccessResponse<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    data
  };
}

export function createErrorResponse(error: string): ApiResponse<never> {
  return {
    success: false,
    error
  };
}
