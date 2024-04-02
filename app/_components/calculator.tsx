'use client';

import React, { useState } from 'react';
import { Button, FormControl, Select, Text, View } from 'reshaped';
import { calculateBirthProbability } from '@/lib/rebirth';

type Gender = 'male' | 'female';
type Category = 'city' | 'countryside' | 'town';

function Calculator() {
  const [province, setProvince] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [order, setOrder] = useState('');
  const [probability, setProbability] = useState(0);
  const [population, setPopulation] = useState(0);

  const handleCalculate = () => {
    const { population, probability } = calculateBirthProbability(
      province,
      category as Category,
      gender as Gender,
      order
    );
    setProbability(probability);
    setPopulation(population);
  };

  return (
    <View>
      <View paddingBlock={4} direction={{ s: 'column', m: 'row' }} gap={4}>
        <View.Item columns={{ s: 12, m: 3 }}>
          <FormControl>
            <FormControl.Label>出生地</FormControl.Label>
            <Select
              name="province"
              placeholder="选择出生地"
              options={[
                { label: '北京', value: 'bei_jing' },
                { label: '天津', value: 'tian_jin' },
                { label: '河北', value: 'he_bei' },
                { label: '山西', value: 'shan_xi_2' },
                { label: '内蒙古', value: 'nei_meng_gu' },
                { label: '辽宁', value: 'liao_ning' },
                { label: '吉林', value: 'ji_lin' },
                { label: '黑龙江', value: 'hei_long_jiang' },
                { label: '上海', value: 'shang_hai' },
                { label: '江苏', value: 'jiang_su' },
                { label: '浙江', value: 'zhe_jiang' },
                { label: '安徽', value: 'an_hui' },
                { label: '福建', value: 'fu_jian' },
                { label: '江西', value: 'jiang_xi' },
                { label: '山东', value: 'shan_dong' },
                { label: '河南', value: 'he_nan' },
                { label: '湖北', value: 'hu_bei' },
                { label: '湖南', value: 'hu_nan' },
                { label: '广东', value: 'guang_dong' },
                { label: '广西', value: 'guang_xi' },
                { label: '海南', value: 'hai_nan' },
                { label: '重庆', value: 'chong_qing' },
                { label: '四川', value: 'si_chuan' },
                { label: '贵州', value: 'gui_zhou' },
                { label: '云南', value: 'yun_nan' },
                { label: '西藏', value: 'xi_zang' },
                { label: '陕西', value: 'shan_xi_1' },
                { label: '甘肃', value: 'gan_su' },
                { label: '青海', value: 'qing_hai' },
                { label: '宁夏', value: 'ning_xia' },
                { label: '新疆', value: 'xin_jiang' }
              ]}
              onChange={event => setProvince(event.value)}
              attributes={{
                'aria-autocomplete': 'none'
              }}
            />
          </FormControl>
        </View.Item>
        <View.Item columns={{ s: 12, m: 3 }}>
          <FormControl>
            <FormControl.Label>性别</FormControl.Label>
            <Select
              name="gender"
              placeholder="选择性别"
              options={[
                { label: '男孩', value: 'male' },
                { label: '女孩', value: 'female' }
              ]}
              onChange={event => setGender(event.value)}
              attributes={{
                'aria-autocomplete': 'none'
              }}
            />
          </FormControl>
        </View.Item>
        <View.Item columns={{ s: 12, m: 3 }}>
          <FormControl>
            <FormControl.Label>区域</FormControl.Label>
            <Select
              name="category"
              placeholder="选择区域"
              options={[
                { label: '城市', value: 'city' },
                { label: '乡村', value: 'countryside' },
                { label: '城镇', value: 'town' }
              ]}
              onChange={event => setCategory(event.value)}
              attributes={{
                'aria-autocomplete': 'none'
              }}
            />
          </FormControl>
        </View.Item>
        <View.Item columns={{ s: 12, m: 3 }}>
          <FormControl>
            <FormControl.Label>第几孩</FormControl.Label>
            <Select
              name="order"
              placeholder="选择第几孩"
              options={[
                { label: '第一孩', value: 'one' },
                { label: '第二孩', value: 'two' },
                { label: '第三孩', value: 'three' },
                { label: '第四孩', value: 'four' },
                { label: '第五孩及以上', value: 'five_plus' }
              ]}
              onChange={event => setOrder(event.value)}
              attributes={{
                'aria-autocomplete': 'none'
              }}
            />
          </FormControl>
        </View.Item>
      </View>
      <View paddingBlock={8} justify="center" direction="row">
        <View width={{ s: 48, m: 32 }}>
          <Button
            color="primary"
            fullWidth
            rounded
            onClick={handleCalculate}
            disabled={!province || !order || !category || !gender}
          >
            计算
          </Button>
        </View>
      </View>
      <View paddingBlock={6} justify="center" direction="column" align="center">
        <View direction="row">
          <Text variant="body-2">
            出生概率：{' '}
          </Text>
          <Text variant="body-2" color="primary" weight="medium">
            {probability ? `${(probability * 100).toFixed(5)}%` : '0%'}
          </Text>
        </View>
        <View direction="row" gap={1}>
          <Text variant="body-2">
            每年大约有
          </Text>
          <Text weight="medium" variant="body-2" color="primary">
            {population}
          </Text>
          <Text  variant="body-2">
            个这样的新生儿
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Calculator;
