# site - frontend

## Configuration

There are two configuration files used: `.env` and `.env.production`. Vite automatically uses `.env` when running `vite
dev` and uses `.env.production` when running `vite build`.

### Environment Variables

| Name | Supported Values | Description |
| ---- | ---------------- | ----------- |
| `PUBLIC_DATASOURCE_TYPE` | `localfs`, `network_static`, `network_dynamic` (not yet implemented) | The datasource type
teslls the `$lib/helper.js:getPosts()` where to load posts from. It is helpful to load posts from the local machine
while writing the article to make sure the formatting is as intended |
| `PUBLIC_DATASOURCE` | `$string` | Where to load the data from with the given type. For `network_*`, an URL is
expected. for `local`, the post.json filepath is hard coded because of a constraint with the JS `import()` function |
| `PUBLIC_LOGGING_ENABLED` | `true`, `false` | Enables verbose console logging throughout the app. Anything other than
`true` will evaluate to `false`|


## Development
```bash
cd ../
nix-shell
cd frontend
vite dev  # Run a local development instance at http://localhost:5173


# Run a local development instance across all networking interfaces on port 5173. 
# This is used to expose via Tailscale or the VLAN the computer is on. Mostly used
# for confirming mobile UX
vite dev --host 0.0.0.0  
```


## Deployment
Every push to `main` will auto deploy to `joseph-flinn.github.io/site`
