import React, { Suspense } from 'react';
import firebase from '../firebase';
import { HomePage } from './HomePage';

export const App: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <HomePage />
        </Suspense>
    );
};
