var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
 // init data
  var json = {
    "children": [
      {
         "children": [
          {
             "children": [], 
             "data": {
              "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
              "$angularWidth": 16472, 
              "days": 111, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Coordinates/Complex.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Fixed polar interpolation problem when theta = pi", 
              "$angularWidth": 16472, 
              "days": 2, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Coordinates/Polar.js", 
             "name": ""
          }
         ], 
         "data": {
          "description": "Fixed polar interpolation problem when theta = pi", 
          "$color": "#777777", 
          "days": 2, 
          "$angularWidth": 16472, 
          "size": 16472
         }, 
         "id": "Source/Coordinates", 
         "name": "Other Category"
      }, 
      {
         "children": [
          {
             "children": [], 
             "data": {
              "description": "Scaling done right :)", 
              "$angularWidth": 16472, 
              "days": 3, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Core/Canvas.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Animated TreeMaps", 
              "$angularWidth": 0, 
              "days": 3, 
              "$color": "#777777", 
              "size": 0
             }, 
             "id": "Source/Core/Core.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
              "$angularWidth": 5838, 
              "days": 111, 
              "$color": "#777777", 
              "size": 5838
             }, 
             "id": "Source/Core/Fx.js", 
             "name": ""
          }
         ], 
         "data": {
          "description": "Animated TreeMaps", 
          "$color": "#777777", 
          "days": 3, 
          "$angularWidth": 16000, 
          "size": 16000
         }, 
         "id": "Source/Core", 
         "name": ""
      }, 
      {
         "children": [
          {
             "children": [], 
             "data": {
              "description": "Merge remote branch 'woot/bugfixes_docnet' into sunburst_fixes", 
              "$angularWidth": 0, 
              "days": 1, 
              "$color": "#777777", 
              "size": 0
             }, 
             "id": "Source/Extras/Extras.js", 
             "name": ""
          }
         ], 
         "data": {
          "description": "Merge remote branch 'woot/bugfixes_docnet' into sunburst_fixes", 
          "$color": "#777", 
          "days": 1, 
          "$angularWidth": 0, 
          "size": 0
         }, 
         "id": "Source/Extras", 
         "name": ""
      }, 
      {
         "children": [
          {
             "children": [], 
             "data": {
              "description": "Animated TreeMaps", 
              "$angularWidth": 0, 
              "days": 3, 
              "$color": "#777777", 
              "size": 0
             }, 
             "id": "Source/Graph/Graph.Geom.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Animated TreeMaps", 
              "$angularWidth": 0, 
              "days": 3, 
              "$color": "#777777", 
              "size": 0
             }, 
             "id": "Source/Graph/Graph.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Added new Canvas class with zoom/pan options", 
              "$angularWidth": 9512, 
              "days": 5, 
              "$color": "#777777", 
              "size": 9512
             }, 
             "id": "Source/Graph/Graph.Label.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Change the way edges where stored and used in Graph.js. This is how Graph.js internally handles nodes. The user API should remain the same.", 
              "$angularWidth": 22838, 
              "days": 26, 
              "$color": "#777777", 
              "size": 22838
             }, 
             "id": "Source/Graph/Graph.Op.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Bug Fix Extras + Tweaking examples", 
              "$angularWidth": 18950, 
              "days": 19, 
              "$color": "#777777", 
              "size": 18950
             }, 
             "id": "Source/Graph/Graph.Plot.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "(Re)-Implemented nodeTypes using node/edgeHelpers\n    \n    Code is cleaner and NodeTypes are now easier to implement.", 
              "$angularWidth": 6947, 
              "days": 32, 
              "$color": "#777777", 
              "size": 6947
             }, 
             "id": "Source/Graph/Helpers.js", 
             "name": ""
          }
         ], 
         "data": {
          "description": "Animated TreeMaps", 
          "$color": "#777777", 
          "days": 3, 
          "$angularWidth": 16000, 
          "size": 16000
         }, 
         "id": "Source/Graph", 
         "name": "Build"
      }, 
      {
         "children": [
          {
             "children": [], 
             "data": {
              "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
              "$angularWidth": 4064, 
              "days": 111, 
              "$color": "#777777", 
              "size": 4064
             }, 
             "id": "Source/Layouts/Layouts.ForceDirected.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Animated TreeMaps", 
              "$angularWidth": 0, 
              "days": 3, 
              "$color": "#777777", 
              "size": 0
             }, 
             "id": "Source/Layouts/Layouts.js", 
             "name": "s"
          }, 
          {
             "children": [], 
             "data": {
              "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
              "$angularWidth": 4372, 
              "days": 111, 
              "$color": "#777777", 
              "size": 4372
             }, 
             "id": "Source/Layouts/Layouts.Radial.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Animated TreeMaps", 
              "$angularWidth": 0, 
              "days": 3, 
              "$color": "#777777", 
              "size": 0
             }, 
             "id": "Source/Layouts/Layouts.TM.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
              "$angularWidth": 6696, 
              "days": 111, 
              "$color": "#777777", 
              "size": 6696
             }, 
             "id": "Source/Layouts/Layouts.Tree.js", 
             "name": ""
          }
         ], 
         "data": {
          "description": "Animated TreeMaps", 
          "$color": "#777777", 
          "days": 3, 
          "$angularWidth": 0, 
          "size": 0
         }, 
         "id": "Source/Layouts", 
         "name": ""
      }, 
      {
         "children": [
          {
             "children": [], 
             "data": {
              "description": "Fixed passing of general Label object", 
              "$angularWidth": 0, 
              "days": 26, 
              "$color": "#777777", 
              "size": 0
             }, 
             "id": "Source/Loader/Loader.js", 
             "name": ""
          }
         ], 
         "data": {
          "description": "Fixed passing of general Label object", 
          "$color": "#777777", 
          "days": 26, 
          "$angularWidth": 0, 
          "size": 0
         }, 
         "id": "Source/Loader", 
         "name": "Loader"
      }, 
      {
         "children": [
          {
             "children": [], 
             "data": {
              "description": "Small tweaks on Tips and Selected nodes in Charts", 
              "$angularWidth": 348, 
              "days": 33, 
              "$color": "#777777", 
              "size": 348
             }, 
             "id": "Source/Options/Options.AreaChart.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Added gradients to AreaChart", 
              "$angularWidth": 386, 
              "days": 37, 
              "$color": "#777777", 
              "size": 386
             }, 
             "id": "Source/Options/Options.BarChart.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Add label types in Label configuration object.\n    \n    Add calls to getLabelData in plotLabel.", 
              "$angularWidth": 392, 
              "days": 26, 
              "$color": "#777777", 
              "size": 392
             }, 
             "id": "Source/Options/Options.Canvas.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Organizing sources and build", 
              "$angularWidth": 16472, 
              "days": 112, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.Controller.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Added raw Canvas options + and animations\n    \n    Added the CanvasStyles object in Node/Edge properties to define raw\n    canvas properties before plotting a node or edge. For example\n    \n          Node: {\n            overridable: true,\n            dim: 4,\n            color: \"#fff\",\n            CanvasStyles: {\n              shadowBlur: 10,\n              shadowColor: '#ccc',\n              shadowOffsetY: 5,\n              shadowOffsetX: 5\n            }\n          }\n    \n    These properties can also be animated and accessed just like dataset\n    properties.\n    \n    Also there are new APIs for setting multiple properties at the same\n    time. setDataset and setCanvasStyles have been added and can be used\n    like this:\n    \n         node.setCanvasStyle('shadowBlur', 100, 'end');\n    \n         //will perform various node.setCanvasStyle\n         node.setCanvasStyles(['current', 'end'], {\n           'shadowBlur': [100, 5],\n           'shadowOffsetX': [200, 3]\n         });\n    \n         node.setData('width', 100, 'end');\n    \n         //will perform various node.setData\n         node.setDataset('end', {\n           'width': 100,\n           'color: '#ccc'\n         });\n    \n    For more information take a look at test1.js for the ForceDirected\n    visualization.", 
              "$angularWidth": 16472, 
              "days": 31, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.Edge.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Extras.Events bug fixes", 
              "$angularWidth": 16472, 
              "days": 20, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.Events.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
              "$angularWidth": 16472, 
              "days": 111, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.Fx.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Revisiting Extras.js Redesigning MouseEventManager and registered\n    classes to automatically use DOM elements via event delegation or canvas\n    based events.", 
              "$angularWidth": 16472, 
              "days": 25, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Add label types in Label configuration object.\n    \n    Add calls to getLabelData in plotLabel.", 
              "$angularWidth": 16472, 
              "days": 26, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.Label.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "* Ignore panning if Options.Navigation.panning = false\n     * Add 'avoid nodes' panning option for panning only when the cursor does not match a nodes position", 
              "$angularWidth": 16472, 
              "days": 1, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.Navigation.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Added raw Canvas options + and animations\n    \n    Added the CanvasStyles object in Node/Edge properties to define raw\n    canvas properties before plotting a node or edge. For example\n    \n          Node: {\n            overridable: true,\n            dim: 4,\n            color: \"#fff\",\n            CanvasStyles: {\n              shadowBlur: 10,\n              shadowColor: '#ccc',\n              shadowOffsetY: 5,\n              shadowOffsetX: 5\n            }\n          }\n    \n    These properties can also be animated and accessed just like dataset\n    properties.\n    \n    Also there are new APIs for setting multiple properties at the same\n    time. setDataset and setCanvasStyles have been added and can be used\n    like this:\n    \n         node.setCanvasStyle('shadowBlur', 100, 'end');\n    \n         //will perform various node.setCanvasStyle\n         node.setCanvasStyles(['current', 'end'], {\n           'shadowBlur': [100, 5],\n           'shadowOffsetX': [200, 3]\n         });\n    \n         node.setData('width', 100, 'end');\n    \n         //will perform various node.setData\n         node.setDataset('end', {\n           'width': 100,\n           'color: '#ccc'\n         });\n    \n    For more information take a look at test1.js for the ForceDirected\n    visualization.", 
              "$angularWidth": 0, 
              "days": 31, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.Node.js", 
             "name": "Options.Node.js"
          }, 
          {
             "children": [], 
             "data": {
              "description": "Bug Fix Extras + Tweaking examples", 
              "$angularWidth": 16472, 
              "days": 19, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.NodeStyles.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Add an option to resize labels according to its pie slice", 
              "$angularWidth": 16472, 
              "days": 1, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.PieChart.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Revisiting Extras.js Redesigning MouseEventManager and registered\n    classes to automatically use DOM elements via event delegation or canvas\n    based events.", 
              "$angularWidth": 16472, 
              "days": 25, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.Tips.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Organizing sources and build", 
              "$angularWidth": 16472, 
              "days": 112, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Options/Options.Tree.js", 
             "name": ""
          }
         ], 
         "data": {
          "description": "Add an option to resize labels according to its pie slice", 
          "$color": "#777777", 
          "days": 1, 
          "$angularWidth": 16000, 
          "size": 16000
         }, 
         "id": "Source/Options", 
         "name": "Software"
      }, 
      {
         "children": [
          {
             "children": [], 
             "data": {
              "description": "Fixing AreaCharts for IE", 
              "$angularWidth": 16472, 
              "days": 19, 
              "$color": "#33dddd", 
              "size": 16472
             }, 
             "id": "Source/Visualizations/AreaChart.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Append utils, id and Class objects to $jit. Add legends to Bar/Pie/AreaChart examples.", 
              "$angularWidth": 16472, 
              "days": 15, 
              "$color": "#33dddd", 
              "size": 16472
             }, 
             "id": "Source/Visualizations/BarChart.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Added new Canvas class with zoom/pan options", 
              "$angularWidth": 16472, 
              "days": 5, 
              "$color": "#33dddd", 
              "size": 16472
             }, 
             "id": "Source/Visualizations/ForceDirected.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Added new Canvas class with zoom/pan options", 
              "$angularWidth": 0, 
              "days": 5, 
              "$color": "#33dddd", 
              "size": 0
             }, 
             "id": "Source/Visualizations/Hypertree.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Adding $jit as Namespace + Build Refactor + Config (part I)", 
              "$angularWidth": 0, 
              "days": 112, 
              "$color": "#777777", 
              "size": 0
             }, 
             "id": "Source/Visualizations/Icicle.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Add an option to resize labels according to its pie slice", 
              "$angularWidth": 16472, 
              "days": 1, 
              "$color": "#777777", 
              "size": 16472
             }, 
             "id": "Source/Visualizations/PieChart.js", 
             "name": "Laptop"
          }, 
          {
             "children": [], 
             "data": {
              "description": "Added new Canvas class with zoom/pan options", 
              "$angularWidth": 0, 
              "days": 5, 
              "$color": "#33dddd", 
              "size": 0
             }, 
             "id": "Source/Visualizations/RGraph.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Animated TreeMaps", 
              "$angularWidth": 0, 
              "days": 3, 
              "$color": "#33dddd", 
              "size": 0
             }, 
             "id": "Source/Visualizations/Spacetree.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Adding new JSON data to the Sunburst and already finding some bugs :S", 
              "$angularWidth": 0, 
              "days": 2, 
              "$color": "#33dddd", 
              "size": 0
             }, 
             "id": "Source/Visualizations/Sunburst.js", 
             "name": ""
          }, 
          {
             "children": [], 
             "data": {
              "description": "Animated TreeMaps", 
              "$angularWidth": 0, 
              "days": 3, 
              "$color": "#33dddd", 
              "size": 0
             }, 
             "id": "Source/Visualizations/Treemap.js", 
             "name": ""
          }
         ], 
         "data": {
          "description": "Merge remote branch 'woot/bugfixes_docnet' into sunburst_fixes", 
          "$color":  "#777777", 
          "days": 1, 
          "$angularWidth": 16000, 
          "size": 16000
         }, 
         "id": "Source/Visualizations", 
         "name": "Hardware"
      }
     ], 
     "data": {
      "$type": "none",
      "$angularWidth": 16472,
      "$color": "#3bd6c6",
      "size": 16472
     }, 
     "id": "Source", 
     "name": "Threats"
      };
   // end
   // init Sunburst
 
    var sb = new $jit.Sunburst({
        //id container for the visualization
        injectInto: 'infovis',
        //Distance between levels
        levelDistance: 90,
        //Change node and edge styles such as
        //color, width and dimensions.
        Node: {
          overridable: true,
          type: useGradients? 'gradient-multipie' : 'multipie'
        },
        //Select canvas labels
        //'HTML', 'SVG' and 'Native' are possible options
        Label: {
          type: labelType
        },
        //Change styles when hovering and clicking nodes
        NodeStyles: {
            enable: true,
          type: 'Native',
          stylesClick: {
            'color': '#33dddd'
          },
          stylesHover: {
            'color': '#dd3333'
          }
        },
        //Add tooltips
        Tips: {
          enable: true,
          onShow: function(tip, node) {
            var html = "<div class=\"tip-title\">" + node.name + "</div>"; 
            var data = node.data;
            if("days" in data) {
              html += "<b>Last modified:</b> " + data.days + " days ago";
            }
            if("size" in data) {
              html += "<br /><b>File size:</b> " + Math.round(data.size / 1024) + "KB";
            }
            tip.innerHTML = html;
          }
        },
        //implement event handlers
        Events: {
          enable: true,
          onClick: function(node) {
            if(!node) return;
            //Build detailed information about the file/folder
            //and place it in the right column.
            var html = "<h4>" + node.name + "</h4>", data = node.data;
            if("days" in data) {
              html += "<b>Last modified:</b> " + data.days + " days ago";
            }
            if("size" in data) {
              html += "<br /><br /><b>File size:</b> " + Math.round(data.size / 1024) + "KB";
            }
            if("description" in data) {
              html += "<br /><br /><b>Last commit was:</b><br /><pre>" + data.description + "</pre>";
            }
            $jit.id('inner-details').innerHTML = html;
            //hide tip
            sb.tips.hide();
            //rotate
            sb.rotate(node, animate? 'animate' : 'replot', {
              duration: 1000,
              transition: $jit.Trans.Quart.easeInOut
            });
          }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Add text to the labels. 
        // This method is only triggered on label creation
        onCreateLabel: function(domElement, node){
          var labels = sb.config.Label.type,
              aw = node.getData('angularWidth');
          if (labels === 'HTML' && (node._depth < 2 || aw > 2000)) {
            domElement.innerHTML = node.name;
          } else if (labels === 'SVG' && (node._depth < 2 || aw > 2000)) {
            domElement.firstChild.appendChild(document.createTextNode(node.name));
          }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Change node styles when labels are placed
        // or moved.
        onPlaceLabel: function(domElement, node){
          var labels = sb.config.Label.type;
          if (labels === 'SVG') {
            var fch = domElement.firstChild;
            var style = fch.style;
            style.display = '';
            style.cursor = 'pointer';
            style.fontSize = "0.8em";
            fch.setAttribute('fill', "#fff");
          } else if (labels === 'HTML') {
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';
            style.fontSize = "0.8em";
            style.color = "#ddd";
            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
          }
        }
   });
    //load JSON data.
    sb.loadJSON(json);
    //compute positions and plot.
    sb.refresh();
    //end
}
