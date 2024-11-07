import * as Sentry from '@sentry/node';

Sentry.startSpanManual({ name: 'Span test' }, (span) => {
    console.log('span start')
    setTimeout(() => {
        console.log('span end')
        span.end()
    }, 3000);
});

Sentry.captureException(new Error('Test error'));

