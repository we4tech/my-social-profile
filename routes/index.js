/*
 * GET home page.
 */

exports.index = function(req, res) {
  var self = this;

  this.getProfile = function() {
    if (self.mProfile == null) {
      self.mProfile = require('../data/profile')
    }

    return self.mProfile;
  };

  res.render('index', {
    title: 'hasan\'s social profile',
    profile: this.getProfile()
  })
};