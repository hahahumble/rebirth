import React from 'react';
import { Actionable, View, Text } from 'reshaped';

function Navbar() {
  return (
    <View direction="row" gap={4}>
      <Actionable href="/data">
        <Text
          variant="body-2"
          weight="medium"
          className="hover:text-primary hover:cursor-pointer"
        >
          数据
        </Text>
      </Actionable>
      <Actionable href="/about">
        <Text
          variant="body-2"
          weight="medium"
          className="hover:text-primary hover:cursor-pointer"
        >
          关于
        </Text>
      </Actionable>
    </View>
  );
}

export default Navbar;
