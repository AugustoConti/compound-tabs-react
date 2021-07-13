import React, { useState } from 'react';
import * as styles from './styles';

function Tab({ children }) {
  const isDisabled = false;
  const isActive = false;

  const style = isDisabled
    ? styles.disabledTab
    : isActive
    ? styles.activeTab
    : styles.tab;

  return <div style={style}>{children}</div>;
}

function TabList({ children }) {
  const tabs = children;
  return <div style={styles.tabs}>{tabs}</div>;
}

function TabPanel({ children }) {
  return <div>{children}</div>;
}

function TabPanels({ children }) {
  return <div style={styles.tabPanels}>{children}</div>;
}

function Tabs(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const children = props.children;

  return <div>{children}</div>;
}

function App() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Tacos</Tab>
          <Tab isDisabled>Burritos</Tab>
          <Tab>Coconut Korma</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Tacos are delicious.</p>
          </TabPanel>
          <TabPanel>
            <p>Sometimes a burrito is what you really need.</p>
          </TabPanel>
          <TabPanel>
            <p>Might be your best option.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
