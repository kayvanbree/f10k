const ghpages = require('gh-pages');

ghpages.publish(
  'dist',
  {
    message: 'Auto-generating gh-pages from master',
    push: false,
  },
  function (err) {
  }
);
