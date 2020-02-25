import React, { useState } from 'react';

import * as styles from './styles';

const Tabs = ({ data, disabled, tabsOnBottom }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderTabs = () =>
    data.map((tab, index) => {
      const isActive = activeIndex === index;
      const isDiabled = disabled.indexOf(index) !== -1;
      return (
        <div
          key={tab.label}
          onClick={isDiabled ? null : () => setActiveIndex(index)}
          style={
            isDiabled ? styles.disabledTab : isActive ? styles.activeTab : styles.tab
          }
        >
          {tab.label}
        </div>
      );
    });

  const renderPanel = () => {
    const tab = data[activeIndex];
    return <div>{tab.description}</div>;
  };

  const tabs = <div style={styles.tabs}>{renderTabs()}</div>;
  const panel = <div style={styles.tabPanels}>{renderPanel()}</div>;

  return <div>{tabsOnBottom ? [panel, tabs] : [tabs, panel]}</div>;
};

const App = () => {
  const tabData = [
    {
      label: 'Panchito',
      description: <p>Los panchitos son riquísimos</p>,
    },
    {
      label: 'Burger',
      description: <p>A veces una buena hamburguesa es todo lo que necesitas</p>,
    },
    {
      label: 'Milanga',
      description: <p>Quizás la mejor opción</p>,
    },
  ];

  return (
    <div>
      <Tabs disabled={[1]} tabsOnBottom={false} data={tabData} />
    </div>
  );
};

export default App;
