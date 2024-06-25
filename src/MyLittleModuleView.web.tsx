import * as React from 'react';

import { MyLittleModuleViewProps } from './MyLittleModule.types';

export default function MyLittleModuleView(props: MyLittleModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
