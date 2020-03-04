import React, { useState } from 'react';
import * as styles from './styles';

const TabList = ({ children }) => {
  return <div style={styles.tabs}>{children}</div>;
};

const Tab = ({ children }) => {
  const isDisabled = false;
  const isActive = false;

  const style = isDisabled
    ? styles.disabledTab
    : isActive
    ? styles.activeTab
    : styles.tab;

  return <div style={style}>{children}</div>;
};

const TabPanels = ({ children }) => <div style={styles.tabPanels}>{children}</div>;

const TabPanel = ({ children }) => <div>{children}</div>;

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return <div>{children}</div>;
};

const App = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Panchito</Tab>
          <Tab isDisabled>Burger</Tab>
          <Tab>Milanga</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Los panchitos son riquísimos</p>
          </TabPanel>
          <TabPanel>
            <p>A veces una buena hamburguesa es todo lo que necesitas</p>
          </TabPanel>
          <TabPanel>
            <p>Quizás la mejor opción</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default App;
