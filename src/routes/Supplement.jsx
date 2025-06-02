import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import {
  data_ko_ga,
  data_ko_na,
  data_ko_da,
  data_ko_ra,
  data_ko_ma,
  data_ko_ba,
  data_ko_sa,
  data_ko_a,
  data_ko_ja,
  data_ko_ca,
  data_ko_ka,
  data_ko_ta,
  data_ko_pa,
  data_ko_ha,
  data_en,
  data_num,
} from '../datas';
import Minisearchbar from './Minisearchbar';
import Card from '../components/Card';

function Supplement() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="box">
      <Minisearchbar index={value} />
      <Box
        sx={{
          maxWidth: { xs: 320, sm: 950 },
          // bgcolor: '#ffffffb3',
        }}
      >
        <Tabs
          className="navtab"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          selectionFollowsFocus
          //aria-label="scrollable auto tabs example"
        >
          <Tab
            label="ㄱ"
            {...allyProps(0)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㄴ"
            {...allyProps(1)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㄷ"
            {...allyProps(2)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㄹ"
            {...allyProps(3)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㅁ"
            {...allyProps(4)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㅂ"
            {...allyProps(5)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㅅ"
            {...allyProps(6)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㅇ"
            {...allyProps(7)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㅈ"
            {...allyProps(8)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㅊ"
            {...allyProps(9)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㅋ"
            {...allyProps(10)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㅌ"
            {...allyProps(11)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㅍ"
            {...allyProps(12)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ㅎ"
            {...allyProps(13)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="숫자"
            {...allyProps(14)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
          <Tab
            label="ABC"
            {...allyProps(15)}
            sx={{ fontSize: '15px', color: 'white' }}
          />
        </Tabs>

        <div className="result">
          {/* TabPanel에 적은 내용이 그 인덱스에 해당하는 탭 클릭 시 내용 보임(allProps(0)클릭 시 index 0 내용 보임) */}
          <TabPanel value={value} index={0} className="resultbox">
            {data_ko_ga.map(function (a, i) {
              return <Card data={data_ko_ga[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={1} className="resultbox">
            {data_ko_na.map(function (a, i) {
              return <Card data={data_ko_na[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={2} className="resultbox">
            {data_ko_da.map(function (a, i) {
              return <Card data={data_ko_da[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={3} className="resultbox">
            {data_ko_ra.map(function (a, i) {
              return <Card data={data_ko_ra[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={4} className="resultbox">
            {data_ko_ma.map(function (a, i) {
              return <Card data={data_ko_ma[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={5} className="resultbox">
            {data_ko_ba.map(function (a, i) {
              return <Card data={data_ko_ba[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={6} className="resultbox">
            {data_ko_sa.map(function (a, i) {
              return <Card data={data_ko_sa[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={7} className="resultbox">
            {data_ko_a.map(function (a, i) {
              return <Card data={data_ko_a[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={8} className="resultbox">
            {data_ko_ja.map(function (a, i) {
              return <Card data={data_ko_ja[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={9} className="resultbox">
            {data_ko_ca.map(function (a, i) {
              return <Card data={data_ko_ca[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={10} className="resultbox">
            {data_ko_ka.map(function (a, i) {
              return <Card data={data_ko_ka[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={11} className="resultbox">
            {data_ko_ta.map(function (a, i) {
              return <Card data={data_ko_ta[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={12} className="resultbox">
            {data_ko_pa.map(function (a, i) {
              return <Card data={data_ko_pa[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={13} className="resultbox">
            {data_ko_ha.map(function (a, i) {
              return <Card data={data_ko_ha[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={14} className="resultbox">
            {data_num.map(function (a, i) {
              return <Card data={data_num[i]} i={i} key={i} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={15} className="resultbox">
            {data_en.map(function (a, i) {
              return <Card data={data_en[i]} i={i} key={i} />;
            })}
          </TabPanel>
        </div>
      </Box>
      <div className="footer">
        공란으로 남은 설명은 추후 업데이트 예정입니다!
      </div>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default Supplement;
