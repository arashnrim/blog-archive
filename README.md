# What's Next?

This is a modified [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

In comparison with the as-is project bootstrapped directly with the `create-next-app` command, the What's Next? template includes the following modifications:

- TypeScript is utilised in this project — this project is bootstrapped with the `--typescript` flag, making your code more opinionated through TypeScript's compiler.
- ESLint is automatically configured with `eslint-config-prettier` — this provides a hybrid configuration of ESLint and Prettier that work hand-in-hand to ensure the best formatting and structure of your code.

> **Important!**
>
> If you wish to run the `lint` script manually, you will need to pass in the path to the directory or file you wish for ESLint to lint. This is different from the usual behaviour, which invokes `next lint` that automatically passes in the appropriate paths to lint.

- ESLint is configured with Husky via `lint-staged` — this allows you to commit your files without worrying about running ESLint manually beforehand; before committing, `lint-staged` will run ESLint to fix any fixable errors in your code.

> **Important!**
>
> The default package manager assumed here is Yarn. If you are using `npm`, you may need to change the Husky pre-commit (`.husky/_/pre-commit`) hook to use `npm` by replacing `yarn` with `npx` like so:
>
> ```bash
> npx lint-staged
> ```

- The `berry` version of Yarn has been employed as the default package manager. To learn more, visit [the documentation for Yarn](https://yarnpkg.com).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
