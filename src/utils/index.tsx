export function sortCharacters(characters: CharacterType[], sortOrder: string) {
  return [...characters].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (sortOrder === "asc") return nameA.localeCompare(nameB);
    if (sortOrder === "desc") return nameB.localeCompare(nameA);
    return 0;
  });
}
