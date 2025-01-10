import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { usePromiseTracker } from 'react-promise-tracker';

const Spinner: React.FC = () => {
  const { promiseInProgress } = usePromiseTracker();
  const [showSpinner, setShowSpinner] = React.useState(false);

  React.useEffect(() => {
    let timeout: any;
    if (promiseInProgress) {
      timeout = setTimeout(() => {
        setShowSpinner(true);
      }, 2000);
    }
    return () => {
      setShowSpinner(false);
      clearTimeout(timeout);
    };
  }, [promiseInProgress]);

  return (
    <>
      {promiseInProgress &&
        createPortal(
          <Box className="fixed left-0 top-0 z-[99999] flex h-screen w-screen items-center justify-center">
            {showSpinner && <CircularProgress />}
          </Box>,
          document.body,
        )}
    </>
  );
};

export default Spinner;
