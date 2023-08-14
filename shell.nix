with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "node";
    buildInputs = [
        nodejs
        actionlint
    ];
    shellHook = ''
        export PATH="$PWD/frontend/node_modules/.bin/:$PATH"
    '';
}
