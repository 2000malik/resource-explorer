"use client";

import Stack from "@mui/material/Stack";

import { Button, Typography } from "@/src/components";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Stack
      width="100%"
      justifyContent="center"
      minHeight={400}
      alignItems="center"
      gap={2}
    >
      <Typography variant="h3">Something went wrong!</Typography>
      <Typography>{error.message}</Typography>
      <Button onClick={() => reset()} fullWidth={false}>
        Refresh
      </Button>
    </Stack>
  );
}
