import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MyLittleModuleViewProps } from './MyLittleModule.types';

const NativeView: React.ComponentType<MyLittleModuleViewProps> =
  requireNativeViewManager('MyLittleModule');

export default function MyLittleModuleView(props: MyLittleModuleViewProps) {
  return <NativeView {...props} />;
}
