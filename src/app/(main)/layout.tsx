'use client';
import React from 'react';
import MainLayout from '@/components/layouts/main';
import useGetBasicInfo from '@/hooks/useGetBasicInfor';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { fetchDone } = useGetBasicInfo();
  return fetchDone && <MainLayout>{children}</MainLayout>;
}
