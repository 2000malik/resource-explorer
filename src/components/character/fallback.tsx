"use client";
import { Box, Stack, Button } from "@mui/material";
import { useRouter } from "next/navigation";
//
import { colors } from "@/src/theme/color";
import { Typography } from "../typography";

export function FallBack({
  title = "No Results Found",
  description = "Try again.",
  showReset = true,
}: {
  title?: string;
  description?: string;
  showReset?: boolean;
}) {
  const router = useRouter();

  const handleReset = () => {
    router.push("/"); // Change this to `/characters` or whatever your main page is
  };

  return (
    <Box
      textAlign="center"
      py={6}
      px={3}
      bgcolor={colors.white}
      borderRadius={2}
      boxShadow="0px 2px 12px rgba(0, 0, 0, 0.05)"
    >
      <Stack spacing={2} alignItems="center">
        <Typography
          variant="2xl"
          fontWeight={600}
          color={colors.grey.secondary}
        >
          {title}
        </Typography>
        <Typography variant="md" color={colors.grey.secondary}>
          {description}
        </Typography>
        {showReset && (
          <Button
            onClick={handleReset}
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: colors.primary.main,
              color: colors.white,
              textTransform: "none",
              fontWeight: 600,
              px: 3,
            }}
          >
            Retry
          </Button>
        )}
      </Stack>
    </Box>
  );
}
