{
  description = "Personal Website";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable"; 
  };
  outputs = { self, nixpkgs }:
    let
      pkgs = nixpkgs.legacyPackages.x86_64-linux.pkgs;
    in {
      devShells.x86_64-linux.default = pkgs.mkShell {
        name = "site";
        buildInputs = [
          pkgs.nodejs_20
          pkgs.actionlint
          pkgs.k6
          pkgs.rclone
          pkgs.wrangler
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
