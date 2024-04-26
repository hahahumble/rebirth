'use client';

import React from 'react';
import {
  Actionable,
  View,
  Text,
  Popover,
  Button,
  Icon,
  Hidden,
  MenuItem
} from 'reshaped';
import { Menu } from 'lucide-react';

function Navbar() {
  return (
    <>
      <Hidden hide={{ s: true, m: false }}>
        <View direction="row" gap={5} align="center" as="nav">
          <Actionable href="/data">
            <Text
              variant="body-2"
              weight="medium"
              className="hover:text-primary hover:cursor-pointer"
            >
              数据来源
            </Text>
          </Actionable>
          <Actionable href="/probability">
            <Text
              variant="body-2"
              weight="medium"
              className="hover:text-primary hover:cursor-pointer"
            >
              概率计算器
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
      </Hidden>
      <Hidden hide={{ s: false, m: true }}>
        <Popover position="bottom-end" padding={1} width="140px">
          <Popover.Trigger>
            {attributes => (
              <Button
                attributes={attributes}
                icon={<Icon size={4} svg={<Menu />} />}
              />
            )}
          </Popover.Trigger>
          <Popover.Content>
            <MenuItem roundedCorners href="/data">
              <Text
                variant="body-3"
                className="hover:text-primary hover:cursor-pointer"
              >
                数据来源
              </Text>
            </MenuItem>
            <MenuItem roundedCorners href="/probability">
              <Text
                variant="body-3"
                className="hover:text-primary hover:cursor-pointer"
              >
                概率计算器
              </Text>
            </MenuItem>
            <MenuItem roundedCorners href="/about">
              <Text
                variant="body-3"
                className="hover:text-primary hover:cursor-pointer"
              >
                关于
              </Text>
            </MenuItem>
          </Popover.Content>
        </Popover>
      </Hidden>
    </>
  );
}

export default Navbar;
