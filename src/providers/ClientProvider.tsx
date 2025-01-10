'use client';
import { PropsWithChildren, useEffect, useState } from 'react';

const ClientProvider = (props: PropsWithChildren) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted && props.children;
};

export default ClientProvider;
