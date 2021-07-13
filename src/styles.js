const tabs = {
  display: 'flex',
  margin: '0.5rem',
};

const tabDefault = {
  fontSize: '1.5rem',
  cursor: 'pointer',
  margin: '0.5rem',
  padding: '0.5rem',
};

const tab = { ...tabDefault, borderBottom: '0.350rem solid gray' };

const activeTab = { ...tabDefault, borderBottom: '0.350rem solid black' };

const disabledTab = {
  ...tabDefault,
  cursor: 'not-allowed',
  color: 'lightGray',
  borderBottom: '0.350rem solid lightGray',
};

const tabPanels = {
  fontSize: '1.5rem',
  margin: '1rem',
};

export { tabs, tabPanels, tab, activeTab, disabledTab };
