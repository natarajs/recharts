HTMLWidgets.widget({
  name: 'echarts',
  type: 'output',

  factory: function(el, width, height) {
    // create our sigma object and bind it to the element
    var echart = new echarts.init(el);
    return {
      renderValue: function(x) {
        echart.setOption(x);

        // parse gexf data
        //var parser = new DOMParser();
        //var data = parser.parseFromString(x.data, "application/xml");
        // apply settings
        //for (var name in x.settings)
          //sig.settings(name, x.settings[name]);
      },
      
      resize: function(width, height) {
      },
      
      // Make the sigma object available as a property on the widget
      // instance we're returning from factory(). This is generally a
      // good idea for extensibility--it helps users of this widget
      // interact directly with sigma, if needed.
      e: echart
    };
  }
});
