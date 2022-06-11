# 11 Reusable Code

- Whenever we work with some kind of NodeJS standard library, we need to isntall it's type definition to get it's type definition file
- TypeScript doesn't ship with NodeJS standard library
- To get the type defination file for NodeJS standard library

```sh
npm install @types/node
```

## Enumeration

- Stores closely realted values
- Can store numbers or strings
- Enums necessarily signals other engineers about a collection
- When we create an enum, we also automatically create a type
- More on enums:
  - Follow near identical syntax rules as normal objects
  - Creates an object with the same keys and values when converted from TS to JS
  - Primary goal is to signal other engineeers that these are closely related values
  - Use whenever we have a small fixed set of values that are all closely related and known at compile time

## Type Assertion

- Sometimes TypeScript doesn't knows what should be the type of a values
- At such times, we need to explicitly mention it to TypeScript using the `as` keyword

## Generics

- Like function arguments, but for types in class/function definitions
- Allows us to defin the type of a property/argument/return value at a future point
- Used heavily when writing reusable code
- Almost similar class definition (Not good!)

```ts
class HoldNumber {
  data: number;
}

class HoldString {
  data: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 22;

const holdString = new HoldString();
holdString.data = "hello";
```

- Types on the fly!

```ts
class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 22;

const holdString = new HoldAnything<string>();
holdString.data = "hello";
```

- Generakky generics are not named like `TypeOfData`, but just as `T`

## Codes

### Old non-reusable code

```ts
// CSVFileReader.ts

import fs from "fs";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CSVFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      });
  }
}
```

### Using Generic Types and Abstract Classes

```ts
// CSVFileReader.ts

import fs from "fs";

export abstract class CSVFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
```

```ts
// MatchReader.ts

import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CSVFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
```

### Using Interfaces

```ts
// CSVFileReader.ts

import fs from "fs";

export class CSVFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
```

```ts
// MatchReader.ts

import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
```

## Inheritence Vs Composition

| Inheritence         | Composition          |
| ------------------- | -------------------- |
| `is-a` Relationship | `has-a` Relationship |

## Notes

- `static` methods can be used to create an object of the class

```ts
export class Summary {
  static winsAnalysisWithHTMLReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HTMLReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
```
