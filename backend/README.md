## Backend

### Development

```
# .dev.vars
TOKEN=${TOKEN}
```

### Testing

```
k6 -e PSK=${TOKEN} test/script.js
```
