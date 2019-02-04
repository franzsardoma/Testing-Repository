var viewer = new Viewer(document.getElementById('image'), {
  inline: true,
  viewed: function() {
    viewer.zoomTo(1);
  }
});

// View a list of images
var viewer = new Viewer(document.getElementById('images'));
