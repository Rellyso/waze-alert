import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "../Link";

type Props = {
  isActive?: boolean;
  href: string;
  icon: any;
} & ButtonProps

export function NavDrawerItem({ icon, isActive = false, href, ...rest }: Props) {
  return (
    <Link href={href}>
      <Button
        leftIcon={<Icon as={icon} fontSize="16" mx="2" />}
        fontWeight="normal"
        fontSize="18"
        borderRadius="none"
        borderRightRadius="full"
        w="95%"
        justifyContent="flex-start"
        colorScheme={isActive ? "blue" : "gray"}
        variant="outline"
        borderColor="transparent"
        {...rest}
      >
      </Button>
    </Link>
  )
}