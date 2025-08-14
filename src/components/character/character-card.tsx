import Link from "next/link";
import { Box, Card, CardContent, CardMedia, IconButton } from "@mui/material";
// 
import { colors } from "@/src/theme/color";
import { useFavorites } from "@/src/store/useFavorite";
// 
import { Typography } from "../typography";

export function CharacterCard({ character }: { character: CharacterType }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.includes(character.id);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia
        component="img"
        height="200"
        image={character?.image}
        alt={character?.name}
       
      />
      <CardContent>
        <Typography variant="h6" sx={{ color: colors.grey.secondary }}>
          {character.name}
        </Typography>
        <Typography variant="body2" sx={{ color: colors.grey.secondary }}>
          {character.species}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            onClick={() => toggleFavorite(character.id)}
            sx={{
              color: isFav ? colors.primary.main : colors.primary.secondary,
              fontSize: 14,
              fontWeight: 600,
              padding: 0,
              "&:hover": {
                background: "transparent",
              },
            }}
          >
            Add to favorites
          </IconButton>
          <Link
            href={`/${character.id}`}
            style={{
              color: colors.primary.main,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            {">"}
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
