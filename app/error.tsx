'use client';
import React from 'react';
import { ErrorCard } from '@/entities/ErrorCard';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return <ErrorCard error={error} reset={reset} />;
}
