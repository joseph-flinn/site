{ lib, python311Packages }:
with python311Packages;
buildPythonApplication {
  pname = "edda";
  version = "0.1.1";
  format = "setuptools";

  src = ./.;

  propagatedBuildInputs = [ 
    click
    click-log
    tabulate

    setuptools
    pytest
  ];

  meta = with lib; {
    description = "Evolutionary Database Design Automator";
    license = licenses.mit;
    maintainers = with maintainers; [ joseph-flinn ];
  };
}
