/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import * as styles from './styles';

function Tabs({ data, disabled, tabsOnBottom }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderTabs = () =>
    data.map((tab, index) => {
      const isActive = activeIndex === index;
      const isDiabled = disabled.includes(index);
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
}

function App() {
  const tabData = [
    {
      label: 'Tacos',
      description: 'Tacos are delicious.',
    },
    {
      label: 'Burritos',
      description: 'Sometimes a burrito is what you really need.',
    },
    {
      label: 'Coconut Korma',
      description: 'Might be your best option.',
    },
  ];

  return (
    <div>
      <Tabs disabled={[1]} tabsOnBottom={false} data={tabData} />
    </div>
  );
}

export default App;
