import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MyLittleModule.web.ts
// and on native platforms to MyLittleModule.ts
import MyLittleModule from './MyLittleModule';
import MyLittleModuleView from './MyLittleModuleView';
import { ChangeEventPayload, MyLittleModuleViewProps } from './MyLittleModule.types';

// Get the native constant value.
export const PI = MyLittleModule.PI;

export function hello(): string {
  return MyLittleModule.hello();
}

export async function setValueAsync(value: string) {
  return await MyLittleModule.setValueAsync(value);
}

const emitter = new EventEmitter(MyLittleModule ?? NativeModulesProxy.MyLittleModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MyLittleModuleView, MyLittleModuleViewProps, ChangeEventPayload };
