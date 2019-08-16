import React, { Children, cloneElement, useState } from 'react';
import './App.css';
import * as styles from './styles';

const cloneChildren = (children, propsTo) =>
  Children.map(children, (child, index) =>
    cloneElement(child, propsTo(child.type, index))
  );

const TabList = ({ activeIndex, onActiveTab, children }) => {
  const newChildren = cloneChildren(children, (_, index) => ({
    isActive: index === activeIndex,
    onActivate: () => onActiveTab(index)
  }));
  return <div style={styles.tabs}>{newChildren}</div>;
};

const Tab = ({ isDisabled, isActive, onActivate, children }) => {
  const style = isDisabled
    ? styles.disabledTab
    : isActive
    ? styles.activeTab
    : styles.tab;
  return (
    <div onClick={isDisabled ? null : onActivate} style={style}>
      {children}
    </div>
  );
};

const TabPanels = ({ activeIndex, children }) => (
  <div style={styles.tabPanels}>{children[activeIndex]}</div>
);

const TabPanel = ({ children }) => <div>{children}</div>;

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const newChildren = cloneChildren(children, type => {
    if (type === TabPanels) return { activeIndex };
    if (type === TabList) return { activeIndex, onActiveTab: setActiveIndex };
  });
  return <div>{newChildren}</div>;
};

const DataTabs = ({ data }) => {
  return (
    <Tabs>
      <TabList key={0}>
        {data.map(({ label, isDisabled }, index) => (
          <Tab key={index} isDisabled={isDisabled}>
            {label}
          </Tab>
        ))}
      </TabList>
      <TabPanels key={1}>
        {data.map(({ description }, index) => (
          <TabPanel key={index}>{description}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

function App() {
  const data = [
    {
      label: 'Tacos',
      description: <p>Tacos are delicious</p>,
      isDisabled: false
    },
    {
      label: 'Burritos',
      description: <p>Sometimes a burrito is what you really need</p>,
      isDisabled: true
    },
    {
      label: 'Coconut Korma',
      description: <p>Might be your best option</p>,
      isDisabled: false
    }
  ];
  return (
    <div>
      <DataTabs data={data} />
    </div>
  );
}

export default App;
