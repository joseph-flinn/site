## Backend

### REST API Documentation
@API.md

### Development

```
# .dev.vars
TOKEN=${TOKEN}
```

### Testing

```
export TOKEN=<TOKEN FROM BITWARDEN>
k6 -e PSK=${TOKEN} test/script.js

```

### Dependency Updates

```
ncu           # list available updates
ncu -u        # Update package.json
npm install   # Install updates

```
