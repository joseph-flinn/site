with import <nixpkgs> {};
let
  pythonEnv = python311.withPackages(ps: [
    ps.click
    ps.click-log

    ps.black
    ps.pytest
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
