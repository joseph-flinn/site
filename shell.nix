with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "node";
    buildInputs = [
        nodejs
    ];
    shellHook = ''
        export PATH="$PWD/frontend/node_modules/.bin/:$PATH"
    '';
}
