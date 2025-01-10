'use client';
import React from 'react';
import withStore from '@/hoc/withStore';
import { OperationIds } from '@/types/OperationIds.type';
import ExamResults from '@/components/app/report';

const Report: React.FC = () => {
  return <ExamResults />;
};

export default withStore({
  modules: [],
  operationIds: [OperationIds.GET_DATA_REPORT],
})(Report);
