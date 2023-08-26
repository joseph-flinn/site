with import <nixpkgs> {};
let
  pythonEnv = python310.withPackages(ps: [
  ]);

in stdenv.mkDerivation {
  name = "blog";
  buildInputs = [
    nodejs
    actionlint
    k6
    pythonEnv
  ];
  shellHook = ''
      export PATH="$PWD/frontend/node_modules/.bin/:$PWD/backend/node_modules/.bin/:$PATH"
  '';
}
