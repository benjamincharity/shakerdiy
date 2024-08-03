TODO


```
Maximus - 7pm ET week-daily (last 14 days)
AgelessRx - 6am - ET week-daily (last 14 days)
TeleMed2U - 6am ET weekly on Monday (last 14 days)
Rx Harmony - 6am ET week-daily (last 14 days)
```

```
Maximus, backendcs <backendcs@maximustribe.com>
AgelessRx, AgelessRx Partners <partners@agelessrx.com>
Rx Harmony, Rx-Harmony <hello@rx-harmony.com>
```

TODO: add 'real' schedule back
```json
{
  "version": 2,
  "crons": [
    {
      "path": "/api/shipping-report-email-cron/maximus",
      "schedule": "0 19 * * 1-5"
    },
    {
      "path": "/api/shipping-report-email-cron/agelessrx",
      "schedule": "0 6 * * 1-5"
    },
    {
      "path": "/api/shipping-report-email-cron/telemed2u",
      "schedule": "0 6 * * 1"
    },
    {
      "path": "/api/shipping-report-email-cron/rxharmony",
      "schedule": "0 6 * * 1-5"
    }
  ]
}
```

`0 9 * * *` === 4am EST