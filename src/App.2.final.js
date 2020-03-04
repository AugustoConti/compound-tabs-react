/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Children, cloneElement, useState } from 'react';

import * as styles from './styles';

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const newChildren = Children.map(children, child => {
    if (child.type === TabPanels) {
      return cloneElement(child, { activeIndex });
    } else if (child.type === TabList) {
      return cloneElement(child, { activeIndex, onActiveTab: setActiveIndex });
    } else {
      return child;
    }
  });

  return <div>{newChildren}</div>;
};

const TabList = ({ activeIndex, onActiveTab, children }) => {
  const newChildren = Children.map(children, (child, index) =>
    cloneElement(child, {
      isActive: index === activeIndex,
      onActivate: () => onActiveTab(index),
    })
  );
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

const DataTabs = ({ data }) => {
  return (
    <Tabs>
      <TabList>
        {data.map(({ label, isDisabled }) => (
          <Tab isDisabled={isDisabled}>{label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map(({ description }) => (
          <TabPanel>{description}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

const App = () => {
  const data = [
    {
      label: 'Panchito',
      description: <p>Los panchitos son riquísimos</p>,
      isDisabled: false,
    },
    {
      label: 'Burger',
      description: <p>A veces una buena hamburguesa es todo lo que necesitas</p>,
      isDisabled: true,
    },
    {
      label: 'Milanga',
      description: <p>Quizás la mejor opción</p>,
      isDisabled: false,
    },
  ];
  return (
    <div>
      <DataTabs data={data} />
    </div>
  );
};

export default App;
