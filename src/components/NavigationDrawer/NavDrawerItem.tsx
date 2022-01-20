import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { Link } from "../Link";

type Props = {
  href: string;
  icon: any;
} & ButtonProps

export function NavDrawerItem({ icon, href, ...rest }: Props) {
  const [isActive, setIsActive] = useState(false)
  const { asPath } = useRouter();

  useEffect(() => {
    handleIsActive();
  }, [asPath])

  function handleIsActive() {
    console.log({ pathname: window.location.pathname, href })
    setIsActive(asPath === href);
  }

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
        isActive={isActive}
        variant="outline"
        borderColor="transparent"
        {...rest}
      >
      </Button>
    </Link>
  )
}