with (import <nixpkgs> {});
let
  pythonEnv = python311.withPackages(ps: with ps; [
  ]);

in pkgs.mkShell {
  name = "blog";
  buildInputs = [
    nodejs_20
    actionlint
    k6
    rclone
    wrangler
    (import ./data/tools/edda/derivation.nix { lib = lib; python311Packages = python311Packages; })
  ];

  shellHook = ''
      export PATH="$PWD/frontend/node_modules/.bin/:$PWD/backend/node_modules/.bin/:$PWD/data/tools/edda/result/bin:$PATH"
  '';
}
