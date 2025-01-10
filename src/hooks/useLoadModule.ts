import React from 'react';

const useLoadModule = (importFunc: () => Promise<any>) => {
  const _module = React.useRef<any>(null);

  React.useEffect(() => {
    loadModule();
  }, []);

  const loadModule = async () => {
    _module.current = await importFunc();
  };

  return { _module };
};

export default useLoadModule;
