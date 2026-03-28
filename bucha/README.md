bucha.rs

## Environment variables

Create a `.env.local` file for local development and configure the same variable in your deployment environment:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Google Analytics only loads in production builds and only when `NEXT_PUBLIC_GA_ID` is set.
