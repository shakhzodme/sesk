{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.yarn
    pkgs.nodejs_22
  ];

  shellHook = ''
  '';
}

