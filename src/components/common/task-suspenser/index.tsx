'use client';
import { Areas } from '@/types/Areas.type';
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { usePromiseTracker } from 'react-promise-tracker';

type Props = {
  areas: Areas[];
};

type TrackerProgressData = {
  promiseInProgress: boolean;
  area: string;
};

const Tracker = React.memo(
  ({
    area,
    progress,
  }: {
    area: Areas;
    progress: (data: TrackerProgressData) => void;
  }) => {
    const { promiseInProgress } = usePromiseTracker({ area });
    const isFirstRender = useRef(true);
    useEffect(() => {
      if (isFirstRender.current === true) {
        isFirstRender.current = false;
        return;
      }
      progress({ promiseInProgress, area });
    }, [promiseInProgress]);
    return null;
  },
);
Tracker.displayName = 'Tracker';

const TaskSuspenser = ({
  areas,
  children,
}: Readonly<Props & PropsWithChildren>) => {
  const [promiseFinish, setPromiseFinish] = useState(false);
  const inprogressAreas = useRef(areas);
  const progress = useCallback((data: TrackerProgressData) => {
    if (!data.promiseInProgress) {
      inprogressAreas.current = inprogressAreas.current.filter(
        (area) => area !== data.area,
      );
      if (!inprogressAreas.current.length) {
        setPromiseFinish(true);
      }
    }
  }, []);

  return (
    <>
      {areas.map((area) => {
        return <Tracker key={area} area={area} progress={progress} />;
      })}
      {promiseFinish && children}
    </>
  );
};

export default React.memo(TaskSuspenser);
