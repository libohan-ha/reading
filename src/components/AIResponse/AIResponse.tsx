import React from 'react';
import { AIResponse as AIResponseType } from '../../types';
import { LoadingSpinner } from './LoadingSpinner';
import { EmptyState } from './EmptyState';
import { ErrorState } from './ErrorState';
import { ResponseContent } from './ResponseContent';

interface Props {
  response: AIResponseType;
}

export function AIResponse({ response }: Props) {
  if (response.loading) {
    return <LoadingSpinner />;
  }

  if (response.error) {
    return <ErrorState error={response.error} />;
  }

  if (!response.text) {
    return <EmptyState />;
  }

  return <ResponseContent text={response.text} />;
}