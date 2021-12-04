const mapArrayMultiple = (array) =>
  array.reduce((total, current) => {
    const prev = total[current.param] || [];
    return {
      ...total,
      [current.param]: [...prev, current]
    };
  }, {});

module.exports = mapArrayMultiple;
