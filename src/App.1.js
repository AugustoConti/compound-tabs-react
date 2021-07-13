/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import * as styles from './styles';

function Tabs({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderTabs = () =>
    data.map((tab, index) => {
      const isActive = activeIndex === index;
      return (
        <div
          key={tab.label}
          onClick={() => setActiveIndex(index)}
          style={isActive ? styles.activeTab : styles.tab}
        >
          {tab.label}
        </div>
      );
    });

  const renderPanel = () => {
    const tab = data[activeIndex];
    return <div>{tab.description}</div>;
  };

  return (
    <div>
      <div style={styles.tabs}>{renderTabs()}</div>
      <div style={styles.tabPanels}>{renderPanel()}</div>
    </div>
  );
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
      <Tabs data={tabData} />
    </div>
  );
}

export default App;
