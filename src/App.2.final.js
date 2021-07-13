/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Children, cloneElement, useState } from 'react';
import * as styles from './styles';

function Tab({ isDisabled, isActive, onActivate, children }) {
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
}

function TabList({ activeIndex, onActiveTab, children }) {
  const tabs = Children.map(children, (child, index) =>
    cloneElement(child, {
      isActive: index === activeIndex,
      onActivate: () => onActiveTab(index),
    })
  );
  return <div style={styles.tabs}>{tabs}</div>;
}

function TabPanel({ children }) {
  return <div>{children}</div>;
}

function TabPanels({ activeIndex, children }) {
  return <div style={styles.tabPanels}>{children[activeIndex]}</div>;
}

function Tabs(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const children = Children.map(props.children, (child) => {
    if (child.type === TabPanels) {
      return cloneElement(child, { activeIndex });
    } else if (child.type === TabList) {
      return cloneElement(child, { activeIndex, onActiveTab: setActiveIndex });
    } else {
      return child;
    }
  });

  return <div>{children}</div>;
}

function DataTabs({ data }) {
  return (
    <Tabs>
      <TabList>
        {data.map((tab) => (
          <Tab isDisabled={tab.isDisabled}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((tab) => (
          <TabPanel>{tab.description}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

function App() {
  const data = [
    {
      label: 'Tacos',
      description: 'Tacos are delicious.',
      isDisabled: false,
    },
    {
      label: 'Burritos',
      description: 'Sometimes a burrito is what you really need.',
      isDisabled: true,
    },
    {
      label: 'Coconut Korma',
      description: 'Might be your best option.',
      isDisabled: false,
    },
  ];

  return (
    <div>
      <DataTabs data={data} />
    </div>
  );
}

export default App;
