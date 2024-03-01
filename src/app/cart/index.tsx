import Image from "next/image";

import Box from "@/global/layout/Box";
import { Text } from "@/global/typography/Typography.styles";

import WithoutItems from "@/assets/images/Group 43.svg";
import { THEME } from "@/global/styles/theme";
import { Button, SelectedFilms } from "@/components";
import { useRouter } from "next/navigation";

export default function CartPage({
  itemsCart,
  isMobile,
}: {
  itemsCart: number[];
  isMobile: boolean;
}) {
  const router = useRouter();

  return itemsCart.length > 0 ? (
    <Box>
      <SelectedFilms />
    </Box>
  ) : (
    <Box
      backgroundColor={THEME.colors.primary}
      display="flex"
      flexDirection
      alignItems="center"
      justifyContent="space-between"
      minWidth={isMobile ? "343px" : "960px"}
      minHeight="532px"
      padding="64px"
      borderRadius={THEME.borderRadius.small}
    >
      <Text
        fontSize={THEME.fontSize.lg}
        fontWeight={THEME.fontWeight.bold}
        color={THEME.colors.dark}
        lineHeight={"16.34px"}
      >
        Parece que não há nada por aqui :(
      </Text>
      <Image src={WithoutItems} alt="" />
      <Button onClick={() => router.push("/")}>
        <Text
          fontSize={THEME.fontSize.sm}
          fontWeight={THEME.fontWeight.bold}
          color={THEME.colors.primary}
          lineHeight={"19.07px"}
        >
          Voltar
        </Text>
      </Button>
    </Box>
  );
}
