import { useRouter } from 'next/router'

import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface ActivLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActivLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href
    ? activeClassName
    : '';

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  )
}