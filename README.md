### Hexlet tests and linter status:
[![Actions Status](https://github.com/veyurievna/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/veyurievna/frontend-project-46/actions)

[![Linter/Tests](https://github.com/veyurievna/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/veyurievna/frontend-project-46/actions/workflows/main.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/4107b0d042f321bbe78d/maintainability)](https://codeclimate.com/github/veyurievna/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/4107b0d042f321bbe78d/test_coverage)](https://codeclimate.com/github/veyurievna/frontend-project-46/test_coverage)
***

# Difference Generator

## **Description:**
Gendiff is a utility compares two configuration files and shows a difference.

## **How it works:**
The program defines a difference between structures of two files. Accepted extentions for input are yaml and json. Output formats are plain, JSON and stylish as default. For help type:
```bash
gendiff -h
```

## **Sistem requirements:**

  ***Ubuntu Linux,***
  ***Node.js v18.0.0***

## **Installation:**
1. Clone the project
2. Install dependencies

```bash
 npm ci,
 ```
 or
 ```bash
 make install
 ```
 ### **Usage:**
```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```

# Example:

  ## _Simple:_

https://asciinema.org/a/ddEVlKZP6zVk0Mkpgddw3vFH1


  ## _Stylish:_

 https://asciinema.org/a/lHDTQpcTx0slQfoYO3iD1R99W

 
  ## _Plain:_

 https://asciinema.org/a/gmiPAoU1g1EIE9bKDKjtRaTow

  ## _JSON:_

 https://asciinema.org/a/9oNgQVFwHdIQ09uy8CNruySNH
