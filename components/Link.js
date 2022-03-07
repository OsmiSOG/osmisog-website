import React from 'react';
import NextLink from "next/link";
import { Button, Link as MuiLink } from "@mui/material";

export default function Link({type, href, children, ...props}) {
   if (type === 'link') {
      return (
         <NextLink href={href} passHref>
            <MuiLink {...props}>{children}</MuiLink>
         </NextLink>
      );
   }
   if (type === 'button') {
      return (
         <NextLink href={href} passHref>
            <Button {...props}>{children}</Button>
         </NextLink>
      );
   }
}
