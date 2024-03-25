import React from 'react';
import { Actionable, View, Text, Icon } from 'reshaped';
import { Github } from 'lucide-react';

function Navbar() {
  return (
    <View direction="row" gap={4} align="center">
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
      <Actionable href="https://github.com/hahahumble/rebirth">
        <Icon
          size={4.5}
          svg={<Github />}
          className="hover:text-primary hover:cursor-pointer"
        />
      </Actionable>
    </View>
  );
}

export default Navbar;
