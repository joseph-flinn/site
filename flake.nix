{
  description = "Personal Website";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable"; 
    opencode = {
      url = "github:joseph-flinn/opencode";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs = { self, nixpkgs, opencode }:
    let
      system = "x86_64-linux"; # Or "aarch64-darwin", etc.
      
      # Import nixpkgs with unfree packages enabled
      pkgs = import nixpkgs {
        inherit system;
        config = { allowUnfree = true; };
      };
    in {
      devShells.x86_64-linux.default = pkgs.mkShell {
        name = "site";
        packages = [
          pkgs.claude-code
          pkgs.nodejs_20
          pkgs.actionlint
          pkgs.k6
          pkgs.rclone
          pkgs.wrangler

          pkgs.ripgrep
          pkgs.fzf

          opencode.packages.${system}.default
          (import ./data/tools/edda/derivation.nix { lib = pkgs.lib; python311Packages = pkgs.python311Packages; })
        ];
        shellHook = ''
          export PATH="$PWD/frontend/node_modules/.bin/:$PWD/backend/node_modules/.bin/:$PWD/data/tools/edda/result/bin:$PATH"

          echo "Welcome to $name"
          export PS1="\[\e[1;33m\][nix($name)]\$\[\e[0m\] "
        '';
      };
    };
}
