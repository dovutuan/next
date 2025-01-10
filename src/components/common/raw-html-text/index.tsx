import * as React from 'react';
import DOMPurify from 'dompurify';

interface IAppProps {
  content: string;
  className?: string;
}

const RawHtmlText: React.FC<IAppProps> = (props) => {
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(props.content),
      }}
      className={props.className}
    />
  );
};

export default RawHtmlText;
