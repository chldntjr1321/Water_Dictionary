import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import data_ko_ga from '../datas/data(ko_1)';

function Supplement() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ maxWidth: { xs: 320, sm: 900 }, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          selectionFollowsFocus
          //aria-label="scrollable auto tabs example"
        >
          <Tab label="ㄱ" {...allyProps(0)} />
          <Tab label="ㄴ" {...allyProps(1)} />
          <Tab label="ㄷ" {...allyProps(2)} />
          <Tab label="ㄹ" {...allyProps(3)} />
          <Tab label="ㅁ" {...allyProps(4)} />
          <Tab label="ㅂ" {...allyProps(5)} />
          <Tab label="ㅅ" {...allyProps(6)} />
          <Tab label="ㅇ" {...allyProps(7)} />
          <Tab label="ㅈ" {...allyProps(8)} />
          <Tab label="ㅊ" {...allyProps(9)} />
          <Tab label="ㅋ" {...allyProps(10)} />
          <Tab label="ㅌ" {...allyProps(11)} />
          <Tab label="ㅍ" {...allyProps(12)} />
          <Tab label="ㅎ" {...allyProps(13)} />
          <Tab label="숫자" {...allyProps(14)} />
          <Tab label="ABC" {...allyProps(15)} />
        </Tabs>

        {/* TabPanel에 적은 내용이 그 인덱스에 해당하는 탭 클릭 시 내용 보임(allProps(0)클릭 시 index 0 내용 보임) */}
        <TabPanel value={value} index={0}>
          <Card />
        </TabPanel>
        <TabPanel value={value} index={1}>
          ㄴ
        </TabPanel>
        <TabPanel value={value} index={2}>
          ㄷ
        </TabPanel>
        <TabPanel value={value} index={3}>
          ㄹ
        </TabPanel>
        <TabPanel value={value} index={4}>
          ㅁ
        </TabPanel>
        <TabPanel value={value} index={5}>
          ㅂ
        </TabPanel>
        <TabPanel value={value} index={6}>
          ㅅ
        </TabPanel>
        <TabPanel value={value} index={7}>
          ㅇ
        </TabPanel>
        <TabPanel value={value} index={8}>
          ㅈ
        </TabPanel>
        <TabPanel value={value} index={9}>
          ㅊ
        </TabPanel>
        <TabPanel value={value} index={10}>
          ㅋ
        </TabPanel>
        <TabPanel value={value} index={11}>
          ㅌ
        </TabPanel>
        <TabPanel value={value} index={12}>
          ㅍ
        </TabPanel>
        <TabPanel value={value} index={13}>
          ㅎ
        </TabPanel>
        <TabPanel value={value} index={14}>
          숫자
        </TabPanel>
        <TabPanel value={value} index={15}>
          영어
        </TabPanel>
      </Box>
    </>
  );
}

// 초성 탭 누르면 보여줄 카드
function Card() {
  return (
    <>
      <div className="cardbox">
        {`${data_ko_ga[5].hNm} ${
          data_ko_ga[5].cNm ? `( ${data_ko_ga[5].cNm} )` : ''
        }`}
        <br />
        {data_ko_ga[5].eNm}
        <br />
        {data_ko_ga[5].explain}
      </div>
    </>
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
