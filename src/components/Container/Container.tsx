import React, {FC, memo, useState} from 'react';
import {StyleSheet, ViewProps} from 'react-native';
import {SafeAreaView, Edge} from 'react-native-safe-area-context';

export type ContainerProps = {
  statusColor?: string;
  edges?: Edge[];
  backgroundColor?: string;
} & ViewProps;

export const Container: FC<ContainerProps> = props => {
  const {statusColor, style, edges, children} = props;
  return (
    <SafeAreaView
      edges={edges ?? ['top', 'left', 'right', 'bottom']}
      style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
