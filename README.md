# Reproduce error with Houdini and Svelte load function

## Start the project

Get `pnpm`

```bash
npm install --global pnpm
```

Install dependencies

```bash
pnpm install
```

Start command

```bash
pnpm dev
```

## Steps to reproduce

Once you started the project, you should see the following error:

```
[33mMultiple exports with the same name "load"[39m
11 |  }
12 |
13 |  export const load = exampleLoadFunc();
   |               ^

[33mThe symbol "load" has already been declared[39m
11 |  }
12 |
13 |  export const load = exampleLoadFunc();
```
