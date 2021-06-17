# Project Conventions

- [Name Conventions](#name-conventions)
    - [Files](#files)
    - [Tests](#tests)
    - [Enums](#enums)
    - [Constants](#constants)
    - [Timestamps](#timestamps)
    - [Database](#database)
- [Architecture](#architecture)

## Name Conventions

### Files

We are using `kebab-case` for name files and we are separating the file type, subtype (if applicable) and extension with dots. Example: 

```
file-name.type.subtype.ts
```

### Tests

For unit tests we are applying the same file naming rules with the `spec` type. Example:
```
function-name.spec.ts
```

For end-to-end tests, the type we are using is `e2e-spec`. Example:
```
endpoint-name.e2e-spec.ts
```

### Enums

We are using `PascalCase` and singular nouns for enum names and capitalised words for enum options. Example:
```ts
const enum City {
    MADRID = 'MADRID',
    TENERIFE = 'TENERIFE'
}
```

### Constants

We are using capitalised words for constants. Example:
```ts
const COMPANY = 1
```

### Timestamps

We are using [Unix time](https://www.unixtimestamp.com/) whenever is possible to deal with time zones.

### Database

We are using `snake_case` for database tables and columns.

### Currencies

We are using integer numbers for currencies, with the last two digits representing two decimal places (please note that JavaScript may not work as expected when operating with large numbers). Example:
```
5.56€ would be represented as 556
```

## Architecture

We are applying [Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html) patterns in the project. Our domain directories have the following folders:
- application
- domain
- infrastructure

We are using plural nouns for domain directories and subfolders (apart from the application, domain and infrastructure ones). For instance, we may have a `books` domain directory that could look like:

- books
    - application
    - domain
        - types
    - infrastructure
        - entities   
        - repositories

Unit tests are placed next to their corresponding files but end-to-end tests are placed in the `test` directory.
