'use client';

import React from 'react';
import { View, Text, Popover, Button, Icon, Hidden, MenuItem } from 'reshaped';
import { Menu } from 'lucide-react';
import Link from 'next/link';

function Navbar() {
  return (
    <>
      <Hidden hide={{ s: true, m: false }}>
        <View direction="row" gap={5} align="center" as="nav">
          <Link href="/data">
            <Text
              variant="body-2"
              weight="medium"
              className="hover:text-primary hover:cursor-pointer"
            >
              数据来源
            </Text>
          </Link>
          <Link href="/probability">
            <Text
              variant="body-2"
              weight="medium"
              className="hover:text-primary hover:cursor-pointer"
            >
              概率计算器
            </Text>
          </Link>
          <Link href="/about">
            <Text
              variant="body-2"
              weight="medium"
              className="hover:text-primary hover:cursor-pointer"
            >
              关于
            </Text>
          </Link>
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
            <Link href="/data" className="block">
              <MenuItem roundedCorners>
                <Text
                  variant="body-3"
                  className="hover:text-primary hover:cursor-pointer"
                >
                  数据来源
                </Text>
              </MenuItem>
            </Link>
            <Link href="/probability" className="block">
              <MenuItem roundedCorners>
                <Text
                  variant="body-3"
                  className="hover:text-primary hover:cursor-pointer"
                >
                  概率计算器
                </Text>
              </MenuItem>
            </Link>
            <Link href="/about" className="block">
              <MenuItem roundedCorners>
                <Text
                  variant="body-3"
                  className="hover:text-primary hover:cursor-pointer"
                >
                  关于
                </Text>
              </MenuItem>
            </Link>
          </Popover.Content>
        </Popover>
      </Hidden>
    </>
  );
}

export default Navbar;
