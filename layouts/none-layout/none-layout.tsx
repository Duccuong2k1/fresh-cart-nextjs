import { useEffect } from 'react';

import { DefaultHead } from '../default-head';

interface PropsType extends ReactProps { }

export function NoneLayout({ ...props }: PropsType) {

  return (
    <div className={"flex flex-col w-full min-h-screen "}>
      <DefaultHead />
      <div className="flex flex-col w-full min-h-screen">{props.children}</div>
    </div>
  );
}
