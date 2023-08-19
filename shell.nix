with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "node";
    buildInputs = [
        nodejs
        actionlint
        k6
    ];
    shellHook = ''
        export PATH="$PWD/frontend/node_modules/.bin/:$PATH"
    '';
}
