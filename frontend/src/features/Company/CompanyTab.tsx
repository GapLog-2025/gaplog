import { Tabs, Tab } from '@mui/material';

export default function CompanyTab() {
  return (
    <Tabs>
      <Tab label="전체" />
      <Tab label="규모 큰 기업" />
      <Tab label="지역 특화" />
    </Tabs>
  );
}
