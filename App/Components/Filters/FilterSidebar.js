import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native'
import Collapsible from '../Util/Collapsible';
import { getFilters } from '../../Constants/filters'

const styles = {
  flex: 1,
  backgroundColor: 'lightgrey',
};

const FilterSidebar = ({ filters, onFilterCheck }) => {
  const allFilters = getFilters(filters);
  return (
    <ScrollView style={styles}>
      {
        allFilters.map((filter, i) => {
          return (
            <Collapsible
              key={i}
              title={filter.name}
              options={filter.types}
              onCheck={onFilterCheck}
            />
          )
        })
      }
    </ScrollView>
  );
};

FilterSidebar.propTypes = {
  filters: PropTypes.array.isRequired,
  onFilterCheck: PropTypes.func.isRequired,
};

export default FilterSidebar
