import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';

interface TabPanelProps {
  readonly children?: React.ReactNode;
  readonly index: number;
  readonly value: number;
}

interface TabItem {
  readonly id: number;
  readonly label: string;
  readonly content: React.ReactNode;
}

interface DynamicTabsProps {
  readonly tabs: TabItem[];
  tabWidth?: number | string;
  color?: string; // Add color prop
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DynamicTabs({
  tabs,
  tabWidth,
  color,
}: DynamicTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabColor = color || STYLE_VARIABLES.CLR_TXT_BRAND_SECONDARY;
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: 0 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: tabColor,
            },
          }}
          aria-label="dynamic tabs"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              label={tab.label}
              {...a11yProps(index)}
              sx={{
                color:
                  value === index
                    ? tabColor
                    : STYLE_VARIABLES.CLR_TXT_QUARTERARY,
                fontSize: 14,
                fontWeight: 600,
                lineHeight: '20px',
                padding: 0,
                width: tabWidth ?? '',
                maxWidth: '500px',
              }}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel key={tab.id} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
