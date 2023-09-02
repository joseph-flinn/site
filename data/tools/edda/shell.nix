with (import <nixpkgs> {});
let
  pythonEnv = python311.withPackages(ps: with ps; [
    click
    click-log

    black
    pytest
  ]);

in pkgs.mkShell {
  name = "edda";
  buildInputs = [
    pythonEnv
  ];

  shellHook = ''
  '';
}
