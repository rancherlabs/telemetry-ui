let GraphUtil = {
  parseLineData(dataset, label, subKey) {
    let out = {
      datasets: [{
        label: label,
        data: []
      }]
    };
    let data = [];
    let keys = Object.keys(dataset);

    out.labels = keys;
    keys.forEach((cv) => {
      data.push(dataset[cv][subKey]);
    });

    out.datasets[0].data = data;
    return out;
  },
  parsePieData(dataset, map) {
    let out = map;
    let keys = Object.keys(dataset);

    keys.forEach((orch) => {
      out[this.getIndex(orch, out, 'label')].value = dataset[orch];
    });

    return out;
  },

  getIndex: function(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i][prop] === value) {
          return i;
      }
    }
    return -1; //to handle the case where the value doesn't exist
  }

}

export default GraphUtil;