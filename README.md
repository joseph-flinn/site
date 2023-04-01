# site - Indie Web: Source of Truth

## Development

```bash
nix-shell
vite dev  # Run a local development instance at http://localhost:5173


# Run a local development instance across all networking interfaces on port 5173. 
# This is used to expose via Tailscale or the VLAN the computer is on. Mostly used
# for confirming mobile UX
vite dev --host 0.0.0.0  
```


## Deployment
Every push to `main` will auto deploy to `joseph-flinn.github.io/site`
