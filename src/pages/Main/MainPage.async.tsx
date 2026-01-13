import {lazy} from 'react';
export const MainAsyncPage = lazy(() => import('./MainPage').then(m => ({ default: m.MainPage })));




