import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
    debug: true,
    dsn: process.env.SENTRY_DSN,
    integrations: [
        nodeProfilingIntegration()
    ],
    environment: process.env.SENTRY_ENVIRONMENT,
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
    attachStacktrace: true,
    autoSessionTracking: true,
});

console.debug('Sentry initialized with environment:', process.env.SENTRY_ENVIRONMENT);
