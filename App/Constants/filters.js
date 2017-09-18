import R from 'ramda';

const HIT_LEVEL = {
  HIT_LEVEL_HIGH: {
    filterType: 'HIT_LEVEL_HIGH',
    text: 'High',
  },
  HIT_LEVEL_MID: {
    filterType: 'HIT_LEVEL_MID',
    text: 'Mid',
  },
  HIT_LEVEL_LOW: {
    filterType: 'HIT_LEVEL_LOW',
    text: 'Low',
  },
};

const SPEED = {
  SPEED_10F: {
    filterType: 'SPEED_10F',
    text: '10f',
  },
  SPEED_13F: {
    filterType: 'SPEED_13F',
    text: '11f-13f',
  },
  SPEED_16F: {
    filterType: 'SPEED_16F',
    text: '14f-16f',
  },
  SPEED_16_UP: {
    filterType: 'SPEED_16F_UP',
    text: '16f+',
  },
};

const SPECIAL = {
  SPECIAL_RA: {
    filterType: 'SPECIAL_RA',
    text: 'Rage Art',
  },
  SPECIAL_RD: {
    filterType: 'SPECIAL_RD',
    text: 'Rage Drive',
  },
  SPECIAL_HOMING: {
    filterType: 'SPECIAL_HOMING',
    text: 'Homing',
  },
  SPECIAL_TAILSPIN: {
    filterType: 'SPECIAL_TAILSPIN',
    text: 'Tail Spin',
  },
  SPECIAL_POWER_CRUSH: {
    filterType: 'SPECIAL_POWER_CRUSH',
    text: 'Power Crush',
  },
  SPECIAL_LAUNCHER: {
    filterType: 'SPECIAL_LAUNCHER',
    text: 'Launcher',
  },
};

const FILTERS = {
  HIT_LEVEL,
  SPEED,
  SPECIAL,
};

const getTitle = (str) => {
  return str.split('_').map((s) => {
    const lower = s.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }).join(' ')
};

const getFilterTypeArray = (obj, filters) => {
  const keys = R.keys(obj);
  return keys.map((k) => {
    const item = Object.assign({}, obj[k]);
    item.checked = R.contains(item.filterType, filters);
    return item;
  });
};

export const getFilters = (filters) => {
  const keys = R.keys(FILTERS);
  return keys.map(k => {
    return {
      name: getTitle(k),
      types: getFilterTypeArray(FILTERS[k], filters)
    }
  })
};

export default FILTERS;
