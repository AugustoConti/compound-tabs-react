const tabs = {
  margin: '25px'
};

const fontSize20 = { fontSize: '20px' };

const tabDefault = {
  ...fontSize20,
  cursor: 'pointer',
  display: 'inline',
  margin: '10px',
  padding: '10px',
  borderBottom: '5px solid'
};

const tab = { ...tabDefault, borderColor: 'gray' };

const activeTab = { ...tabDefault };

const disabledTab = {
  ...tabDefault,
  cursor: '',
  color: 'lightGray',
  borderColor: 'lightGray'
};

const tabPanels = {
  ...fontSize20,
  marginTop: '50px',
  marginLeft: '35px'
};

export { tabs, tabPanels, tab, activeTab, disabledTab };
