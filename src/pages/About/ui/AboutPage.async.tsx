import {lazy} from 'react';
export const AboutAsyncPage = lazy(() => import('./AboutPage').then(m => ({ default: m.AboutPage })));